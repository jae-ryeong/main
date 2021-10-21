# Main Container
FROM 2mukee/mh_main_image:latest AS mh-main-server
COPY . /usr/local/mohaemookji
WORKDIR /usr/local/mohaemookji/src
RUN npm install -g npm && npm -y install && ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
EXPOSE 17260
ENTRYPOINT ["node", "/usr/local/mohaemookji/src/main_server.js"]