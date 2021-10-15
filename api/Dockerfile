# API Container
FROM 2mukee/mh_api_image:latest AS mh-api-image
ENV DEBCONF_NOWARNINGS yes
COPY . /usr/local/mohaemookji
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
WORKDIR /usr/local/mohaemookji
RUN npm install -g npm && npm -y install
ENTRYPOINT ["node", "/usr/local/mohaemookji/youtube/index.js"]