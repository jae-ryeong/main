#!/bin/bash
sudo cp -r /var/lib/jenkins/workspace/mh-ssl /var/lib/jenkins/workspace/mohaemookji/main
docker build --tag 2mukee/mh_main_deploy /var/lib/jenkins/workspace/mohaemookji/main
docker build --tag 2mukee/mh_api_deploy /var/lib/jenkins/workspace/mohaemookji/api
docker build --tag 2mukee/mh_db_deploy /var/lib/jenkins/workspace/mohaemookji
docker service update mh-stack_main --replicas 5
docker service update mh-stack_api --replicas 5
docker service update mh-stack_db