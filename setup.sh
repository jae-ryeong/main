#!/bin/bash
sudo cp -r /var/lib/jenkins/workspace/mh-ssl /var/lib/jenkins/workspace/mohaemookji/main
docker info | grep Username
docker build --tag 2mukee/mh_main_image:latest /var/lib/jenkins/workspace/mohaemookji/main && docker push 2mukee/mh_main_image:latest
docker build --tag 2mukee/mh_api_image:latest /var/lib/jenkins/workspace/mohaemookji/api && docker push 2mukee/mh_api_image:latest
docker build --tag 2mukee/mh_db_image:latest /var/lib/jenkins/workspace/mohaemookji && docker push 2mukee/mh_db_image:latest