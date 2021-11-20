const env = process.env.NODE_ENV;
const envFile = env === 'production' ? '.env' : 'mh.env';


const { google } = require('googleapis');

const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');
require('dotenv').config({ path: path.resolve(`${appRoot}`, envFile)});


const VideoModels = require('./models/Videos');
const ChannelModel = require('./models/Channel');


const app = async function(_q)
{
  const service = google.youtube('v3');
};


function fnGetQueries()
{
  if (env === 'production') {

  } else {
    const tmpList = require('./tmp-list.json');
    return fnTransformStructure(tmpList);
  }
}

function fnTransformStructure(_nObjArr)
{
  try {
    const objArr = Object.values(_nObjArr).reduce((obj, t) => {
      for (const k of Object.keys(t)) {
        if (obj[k]) obj[k].push(...t[k]);
        else obj[k] = [...t[k]];
      }
      return obj;
    }, {});

    for (const k of Object.keys(objArr)) {
      const s = new Set(objArr[k]);
      objArr[k] = [...s];
    }

    return objArr;
  } catch (err) {
    console.error(`${err.message}:\n${__filename}`);
  }
}

function fnDoShuffle(cList)
{
  let j;

  for (let i=cList.length-1; i>0; --i)
  {
    j = Math.floor(Math.random() * (i+1));
    [cList[i], cList[j]] = [cList[j], cList[i]];
  }
};