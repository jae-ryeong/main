#!/bin/bash
rm -Rf /usr/mohsemookji/main /usr/mohaemookji/TEST-main-page
killall -9 node
node /usr/mohaemookji/api/youtube -DFOREGROUND