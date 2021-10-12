#!/bin/bash
sudo cp -r /var/lib/jenkins/workspace/mh-ssl /var/lib/jenkins/workspace/mohaemookji/main
bash /var/lib/jenkins/workspace/login.sh
docker build --tag 2mukee/mh_main_image:latest /var/lib/jenkins/workspace/mohaemookji/main && docker push 2mukee/mh_main_image:latest
docker build --tag 2mukee/mh_api_image:latest /var/lib/jenkins/workspace/mohaemookji/api && docker push 2mukee/mh_api_image:latest
docker build --tag 2mukee/mh_db_image:latest /var/lib/jenkins/workspace/mohaemookji && docker push 2mukee/mh_db_image:latest
docker stack rm mh-stack
sleep 30s
docker stack deploy -c /var/lib/jenkins/workspace/mohaemookji/mh-compose.yml mh-stack
sleep 20s
docker service rm mh-stack_api