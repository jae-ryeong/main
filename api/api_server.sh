#!/bin/bash
rm -Rf /usr/mohsemookji/main /usr/mohaemookji/TEST-main-page
killall -s KILL node
node /usr/mohaemookji/api/youtube -DFOREGROUND