# Main Container
FROM node:14.17.6 AS mh-main-server
COPY . /usr/local/mohaemookji
WORKDIR /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
EXPOSE 17260
ENTRYPOINT ["node", "/usr/local/mohaemookji/index.js"]