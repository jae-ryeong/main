# Main Container
FROM 2mukee/mh_main_image:latest AS mh-main-server
COPY . /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
WORKDIR /usr/local/mohaemookji
RUN npm install -g npm && npm -y install
EXPOSE 17260
ENTRYPOINT ["node", "/usr/local/mohaemookji/main_server.js"]