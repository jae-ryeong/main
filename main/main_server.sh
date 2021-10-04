#!/bin/bash
rm -Rf /usr/mohsemookji/api /usr/mohaemookji/TEST-main-page
killall -s KILL node
service node start
node /usr/mohaemookji/main/main_server.js