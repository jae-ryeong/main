# API Container
FROM 2mukee/mh_api_image:latest AS mh-api-image
COPY . /usr/local/mohaemookji
WORKDIR /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
ENTRYPOINT ["node", "/usr/local/mohaemookji/youtube/index.js"]