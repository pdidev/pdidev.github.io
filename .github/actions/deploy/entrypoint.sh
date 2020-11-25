#!/bin/bash
set -e

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

INERROR=true
ALLTAGS="$(curl -fs "${GITLAB_URL}/api/v4/projects/${PROJECT_NAME}/repository/tags" | tr ',' '\n' | grep '"name"' | tr '"' ' ' | awk '{print $4}' | grep '^[0-9]*\.[0-9]*\.[0-9]*$' | sort -rVu)"
for TAG_BASE in $(echo "${ALLTAGS}" | sed 's/^\([0-9]*\.[0-9]*\.\)[0-9]*$/\1/' | sort -rVu)
do
    TAG="$(echo "${ALLTAGS}" | fgrep "${TAG_BASE}" | sort -rVu | head -n 1)"
    cd "${WORK_DIR}"
    mkdir -p "${TAG}"
    cd "${TAG}"
    if curl -fso artifacts.zip "${GITLAB_URL}/api/v4/projects/${PROJECT_NAME}/jobs/artifacts/${TAG}/download?job=pages"
    then
        INERROR=false
        unzip -o artifacts.zip
        rm artifacts.zip
        if [ -d "public/${TAG}" ]
        then
            mv "public/${TAG}" "${WORK_DIR}/public/"
        elif [ -d "${TAG}" ]
        then
            mv "${TAG}" "${WORK_DIR}/public/"
        elif [ -d "public" ]
        then
            mv public "${TAG}"
            mv "${TAG}" "${WORK_DIR}/public/"
        fi
        echo "<li><a href='${TAG}/'>version $(echo "${TAG}" | sed 's/\.[0-9]*$//')</a>" >> "${WORK_DIR}/public/index.html"
    fi
    cd "${WORK_DIR}"
    rm -rf "${WORK_DIR}/${TAG}"
done



if [ true = "${INERROR}" ]
then
    rm -rf "${WORK_DIR}"
    exit 1
fi



mkdir -p "${WORK_DIR}/master"
cd "${WORK_DIR}/master"
curl -fso artifacts.zip "${GITLAB_URL}/api/v4/projects/${PROJECT_NAME}/jobs/artifacts/master/download?job=pages"
unzip -o artifacts.zip
rm artifacts.zip
if [ -d "public/master" ]
then
    mv "public/master" "${WORK_DIR}/public/"
elif [ -d "master" ]
then
    mv "master" "${WORK_DIR}/public/"
elif [ -d "public" ]
then
    mv public "master"
    mv "master" "${WORK_DIR}/public/"
fi
cd "${WORK_DIR}"
rm -rf "${WORK_DIR}/master"


cat << EOF >> "${WORK_DIR}/public/index.html"
<li><a href='master/'>latest from GIT</a>
</ul>
</body>
EOF

mv "${WORK_DIR}/public"/* "${DEPLOY_DIR}"
