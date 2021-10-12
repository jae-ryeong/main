# Main Container
FROM node:14.17.6 AS mh-main-server
ENV DEBCONF_NOWARNINGS yes
COPY . /usr/local/
RUN apt-get -y update && apt-get -y upgrade && apt-get -y install vim mongodb
RUN mkdir -p /data/db
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
WORKDIR /usr/local/mohaemookji/main
RUN npm install -g npm && npm -y install
EXPOSE 17260
ENTRYPOINT ["node", "/usr/local/main_server.js"]