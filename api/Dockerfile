# API Container
FROM node:14.17.6 AS mh-api-image
COPY . /usr/local/mohaemookji
WORKDIR /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
ENTRYPOINT ["node", "/usr/local/mohaemookji/youtube/index.js"]