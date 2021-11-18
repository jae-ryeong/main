# Database Container
FROM mongo:latest
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
VOLUME /home/mh-dev/data:/data/db