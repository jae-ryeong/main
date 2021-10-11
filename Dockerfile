# Database Container
FROM mongo AS mh-db-server
ENV DEBCONF_NOWARNINGS yes
RUN rm /var/lib/dpkg/info/*
RUN dpkg --configure -a
RUN apt-get -y update && apt-get -y upgrade && apt-get -y install vim
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
VOLUME /home/mh-dev/data:/data/db