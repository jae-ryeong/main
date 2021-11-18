// Mode
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production' ? true : false;

// Modules
const { google } = require('googleapis');

const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');
require('dotenv').config({ path: path.resolve(`${appRoot}`, isProd ? '.env' : 'mh.env')});


const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const tmp = require('./tmp');

const a = new Map(Object.entries(tmp));

console.log(a);

fs.writeFileSync(`${__dirname}/tmp-list.json`, JSON.stringify(tmp));