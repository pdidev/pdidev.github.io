# Container image that runs your code
FROM alpine:3.10

COPY entrypoint.sh /entrypoint.sh

RUN [ "apk", "add", "bash", "curl", "jq" ]

ENTRYPOINT ["/entrypoint.sh"]
