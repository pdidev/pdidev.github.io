#!/bin/bash
set -ex

if [ $# -ne 3 ]
then
    echo "Usage: $0 <directory> <gitlab URL> <project NAME>" >&2
    exit 1
fi

DEPLOY_DIR="${1}"
cd "${GITHUB_WORKSPACE}"
mkdir -p "${DEPLOY_DIR}"
cd "${DEPLOY_DIR}"
DEPLOY_DIR="${PWD}"

GITLAB_URL="$2"

PROJECT_NAME="$3"

set +x
if [ -z ${CI_PAGES_TOKEN} ]
then
	echo "CI_PAGES_TOKEN is unset"
	exit 1
fi
set -ex

cd "$(mktemp -t -d WEB_DEPLOY.tmdir.XXXXXXXXXXXX || exit 1)"
WORK_DIR="${PWD}"
trap "cd '${DEPLOY_DIR}'; rm -rf '${WORK_DIR}'" EXIT
mkdir -p "${WORK_DIR}/public/"

cat << EOF > "${WORK_DIR}/public/index.html"
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>PDI: Documentation versions</title>
</head>
<body>
<p>PDI documentation for:</p>
<ul>
EOF


########################
##	GITLAB
########################
INERROR=true
ALLTAGS="$(curl -fs "${GITLAB_URL}/api/v4/projects/${PROJECT_NAME}/repository/tags" | tr ',' '\n' | grep '"name"' | tr '"' ' ' | awk '{print $4}' | grep '^[0-9]*\.[0-9]*\.[0-9]*$' | sort -rVu)"
for TAG_BASE in $(echo "${ALLTAGS}" | sed 's/^\([0-9]*\.[0-9]*\.\)[0-9]*$/\1/' | sort -rVu)
do
    for TAG in $(echo "${ALLTAGS}" | fgrep "${TAG_BASE}" | sort -rVu)
    do
        cd "${WORK_DIR}"
        mkdir -p "${TAG}"
        cd "${TAG}"
        if curl -fso artifacts.zip "${GITLAB_URL}/api/v4/projects/${PROJECT_NAME}/jobs/artifacts/${TAG}/download?job=pages"
        then
            INERROR=false
            STAG="$(echo "${TAG}" | sed 's/\.[0-9]*$//')"
            unzip -o artifacts.zip
            rm artifacts.zip
            if [ -d "public/${TAG}" ]
            then
                mv "public/${TAG}" "${WORK_DIR}/public/${STAG}"
            elif [ -d "${TAG}" ]
            then
                mv "${TAG}" "${WORK_DIR}/public/${STAG}"
            elif [ -d "public" ]
            then
                mv public "${WORK_DIR}/public/${STAG}"
            fi
            echo "<li><a href='${STAG}/'>version ${STAG}</a>" >> "${WORK_DIR}/public/index.html"
            cd "${WORK_DIR}"
            rm -rf "${WORK_DIR}/${TAG}"
            break
        fi
        cd "${WORK_DIR}"
        rm -rf "${WORK_DIR}/${TAG}"
    done
done



if [ true = "${INERROR}" ]
then
    rm -rf "${WORK_DIR}"
    exit 1
fi




########################
##	GITHUB
########################
#INERROR=true
#ALLTAGS="$(curl -H "Authorization: Bearer ${CI_PAGES_TOKEN}" -fs "https://api.github.com/repos/${PROJECT_NAME}/tags" | tr ',' '\n' | grep '"name"' | tr '"' ' ' | awk '{print $3}' | grep '^[0-9]*\.[0-9]*\.[0-9]*-gh$' | sort -rVu)"
#for TAG_BASE in $(echo "${ALLTAGS}" | sed 's/^\([0-9]*\.[0-9]*\.\)[0-9]*-gh$/\1/' | sort -rVu)
#do
#    for TAG in $(echo "${ALLTAGS}" | fgrep "${TAG_BASE}" | sort -rVu)
#    do
#        cd "${WORK_DIR}"
#        mkdir -p "${TAG}"
#        cd "${TAG}"
#        if curl -Lfso artifacts.zip "https://api.github.com/repos/${PROJECT_NAME}/zipball/refs/tags/${TAG}"
#        then
#            INERROR=false
#            STAG="$(echo "${TAG}" | sed 's/\.[0-9]*$//')"
#            unzip -o -d public artifacts.zip
#            rm artifacts.zip
#            if [ -d "public/${TAG}" ]
#            then
#                mv "public/${TAG}" "${WORK_DIR}/public/${STAG}"
#            elif [ -d "${TAG}" ]
#            then
#                mv "${TAG}" "${WORK_DIR}/public/${STAG}"
#            elif [ -d "public" ]
#            then
#                mv public "${WORK_DIR}/public/${STAG}"
#            fi
#            echo "<li><a href='${STAG}/'>version ${STAG}</a>" >> "${WORK_DIR}/public/index.html"
#            cd "${WORK_DIR}"
#            rm -rf "${WORK_DIR}/${TAG}"
#            break
#        fi
#        cd "${WORK_DIR}"
#        rm -rf "${WORK_DIR}/${TAG}"
#    done
#done



#if [ true = "${INERROR}" ]
#then
#    rm -rf "${WORK_DIR}"
#    exit 1
#fi
#
#
#


mkdir -p "${WORK_DIR}/main"
cd "${WORK_DIR}/main"

DOWNLOAD_URL=$(curl -fs -H "Authorization: Bearer ${CI_PAGES_TOKEN}" https://api.github.com/repos/pdidev/pdi/actions/artifacts | jq -r '.artifacts | .[] | select(.workflow_run.head_branch=="main") | .archive_download_url')
curl -H "Authorization: Bearer ${CI_PAGES_TOKEN}" -Lfso artifacts.zip "${DOWNLOAD_URL}"
unzip -o -d public artifacts.zip
rm artifacts.zip
if [ -d "public/main" ]
then
    mv "public/main" "${WORK_DIR}/public/"
elif [ -d "main" ]
then
    mv "main" "${WORK_DIR}/public/"
elif [ -d "public" ]
then
    mv public "main"
    mv "main" "${WORK_DIR}/public/"
fi
cd "${WORK_DIR}"
rm -rf "${WORK_DIR}/main"


cat << EOF >> "${WORK_DIR}/public/index.html"
<li><a href='main/'>latest from GIT</a>
</ul>
</body>
EOF

mv "${WORK_DIR}/public"/* "${DEPLOY_DIR}"
