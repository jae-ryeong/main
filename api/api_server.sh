#!/bin/bash
rm -Rf /usr/mohsemookji/main /usr/mohaemookji/TEST-main-page
killall -s KILL node
sleep 5s
cd /usr/mohaemookji/api
node youtube -DFOREGROUND