const queryJob = require('./jobs/query');
const env = process.env.NODE_ENV;
const envFile = env === 'production' ? '.env' : 'mh.env';


const { google } = require('googleapis');

// console.log(queryJob.fnGetQueries());
const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');
require('dotenv').config({ path: path.resolve(`${appRoot}`, envFile)});

const tokenJob = require('./jobs/token');

console.log(23, process.env.YOUTUBE_TOKEN);
console.log(tokenJob());