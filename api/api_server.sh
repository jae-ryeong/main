#!/bin/bash
rm -Rf /usr/mohsemookji/main /usr/mohaemookji/TEST-main-page
killall -s KILL node
sleep 5s
node /usr/mohaemookji/api/youtube -DFOREGROUND