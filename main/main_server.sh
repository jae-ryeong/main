#!/bin/bash
rm -Rf /usr/mohsemookji/api /usr/mohaemookji/TEST-main-page
killall -s KILL node
sleep 5s
cd /usr/mohaemookji/main
node main_server.js -DFOREGROUND