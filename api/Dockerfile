# API Container
FROM node:14.17.6
LABEL maintainer1="tlgns7386@gmail.com" maintainer2="byaa1972@gmail.com"
# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
#   CMD [ "executable" ]
COPY . /usr/local/mohaemookji
WORKDIR /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
ENTRYPOINT ["node", "/usr/local/mohaemookji/youtube/index.js"]