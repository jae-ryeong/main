# Database Container
FROM mongo AS mh-db-server
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
VOLUME /home/mh-dev/data:/data/db