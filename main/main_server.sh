#!/bin/bash
rm -Rf /usr/mohsemookji/api /usr/mohaemookji/TEST-main-page
killall -9 node
node /usr/mohaemookji/main/main_server.js -DFOREGROUND