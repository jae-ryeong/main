#!/bin/bash
sudo cp -r /var/lib/jenkins/workspace/mh-ssl /var/lib/jenkins/workspace/mohaemookji/main
# bash /var/lib/jenkins/workspace/mh-login.sh
docker build --tag 2mukee/mh_main_deploy:latest /var/lib/jenkins/workspace/mohaemookji/main
docker build --tag 2mukee/mh_api_deploy:latest /var/lib/jenkins/workspace/mohaemookji/api
docker build --tag 2mukee/mh_db_deploy:latest /var/lib/jenkins/workspace/mohaemookji
docker service update --image 2mukee/mh_main_deploy mh-stack_main
docker service update --image 2mukee/mh_api_deploy mh-stack_api
docker service update --image 2mukee/mh_db_deploy mh-stack_db