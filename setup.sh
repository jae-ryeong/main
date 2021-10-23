#!/bin/bash
sudo cp -r /var/lib/jenkins/workspace/mh-ssl /var/lib/jenkins/workspace/mohaemookji/main
bash /var/lib/jenkins/workspace/mh-login.sh
docker build --tag 2mukee/mh_main_deploy /var/lib/jenkins/workspace/mohaemookji/main
docker build --tag 2mukee/mh_api_deploy /var/lib/jenkins/workspace/mohaemookji/api
docker build --tag 2mukee/mh_db_deploy /var/lib/jenkins/workspace/mohaemookji
docker push 2mukee/mh_main_deploy
docker push 2mukee/mh_api_deploy
docker push 2mukee/mh_db_deploy
docker stack deploy -c /var/lib/jenkins/workspace/mohaemookji/mh-compose.yml mh-stack