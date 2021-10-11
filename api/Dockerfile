# API Container
FROM node:14.17.6 AS mh-api-image
ENV DEBCONF_NOWARNINGS yes
ADD /var/lib/jenkins/workspace/mohaemookji/api /usr/local/
RUN apt-get -y update && apt-get -y upgrade && apt-get -y install vim mongodb openssh-server psmisc
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
RUN mkdir -p /data/db
WORKDIR /usr/local/api
RUN npm install -g npm && npm -y install
ENTRYPOINT ["node", "/usr/local/api/youtube/index.js"]