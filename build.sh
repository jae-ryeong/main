#!/bin/bash

# main server package install and build
cd /var/lib/jenkins/workspace/mohaemookji/main
npm install
npm run build

# frontend package install and build
cd /var/lib/jenkins/workspace/mohaemookji/main/mh-frontend
npm install
npm run build

# api server package install and build
cd /var/lib/jenkins/workspace/mohaemookji/api
npm install
npm run build