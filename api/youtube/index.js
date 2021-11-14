// Mode
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production' ? true : false;

// Modules
const { google } = require('googleapis');

const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');
require('dotenv').config({ path: path.resolve(`${appRoot}`, isProd ? '.env' : 'mh.env')});

require('../db');
const models = require('../models');
const apiController = require('../controller/apiController');
const dbController = require('../controller/dbController');

const fnIntergration = (_nObjArrEls) => {
  try {
    const objArrEls = Object.values(_nObjArrEls).reduce((obj, t) => {
      for (const k of Object.keys(t)) {
        if (obj[k]) obj[k].push(...t[k]);
        else obj[k] = [...t[k]];
      }
      return obj;
    }, {});

    for (const k of Object.keys(objArrEls)) {
      const s = new Set(objArrEls[k]);
      objArrEls[k] = [...s];
    }

    return objArrEls;
  } catch (err) {
    console.error(`Error in fnIntergration:\n${err}`);
  }
};


const fnGetQueries = () => {
  try {
    const nObjArrEls = require('./tmp');

    return fnIntergration(nObjArrEls);
  } catch (err) {
    console.error(`Error in fnGetQueries:\n${err}`);
  }
};


const fnDoShuffle = cList => {
  let j;

  for (let i=cList.length-1; i>0; --i)
  {
    j = Math.floor(Math.random() * (i+1));
    [cList[i], cList[j]] = [cList[j], cList[i]];
  }
};


const fnReqSearchData = async (_youtube, _arrQuery, _vModel) => {
  try {
    const arrQLen = _arrQuery.length;

    const arrObjSData = [];

    for (let i=0; i<arrQLen; ++i) {
      const q = _arrQuery[i];
      const arrItem = await apiController.fnSearchQuery(_youtube, q);
      const arrILen = arrItem.length;
      if (arrILen === 0) return;
      const arrVId = [];
      for (let j=0; j<arrILen; ++j) {
        const id = arrItem[j].id;
        if (id.kind === 'youtube#video' && id.videoId) arrVId.push(id.videoId);
      }

      process.stdout.write('vID 중복 제거: ');
      const arrFVId = await Promise.all(arrVId.filter(async vId => {
        const isV = await _vModel.findOne({ id: vId }) ? false : true;
        if (!isV) process.stdout.write(`${vId} `);
        return isV;
      }));
      console.log();
      const strVIds = arrFVId.join(',');
      console.log('STR VIDS: ', strVIds);

      arrObjSData.push({
        reqQ: q,
        resIds: strVIds,
      });
    }

    return arrObjSData;
  } catch (err) {
    console.error(`Error in fnReqSearchData:\n${err}`);
  }
};


const fnReqVideoData = async (_youtube, _arrObjSData) => {
  try {
    const nArrObjResVData = await Promise.all(_arrObjSData.map(async obj => {
      const arrObjResVData = await apiController.fnVideoData(_youtube, obj.reqQ, obj.resIds);
      return arrObjResVData;
    }));

    const arrObjVData = [];
    for (const arrObjResVData of nArrObjResVData) {
      arrObjVData.push(...arrObjResVData);
    }
    return arrObjVData;
  } catch (err) {
    console.error(`Error in fnReqVideoData:\n${err}`);
  }
};


const fnExtractChannelId = (_nArrObjVData) => {
  try {
    const arrCId = [];
    for (const arrObjVData of _nArrObjVData) {
      arrCId.push(...arrObjVData.map(obj => obj.channelId));
    }
    return arrCId;
  } catch (err) {
    console.error(`Error in fnExtractChannelId:\n${err}`);
  }
};


const fnReqChannelData = async (_youtube, _arrCId) => {
  try {
    process.stdout.write('cID 중복 제거: ');
    const arrCId = await Promise.all(_arrCId.filter(async cId => {
      const isC = await models.Channel.findOne({ id: cId }) ? false : true;
      if (!isC) process.stdout.write(`${cId} `);
      return isC;
    }));
    console.log();
    const strCIds = arrCId.join(',');
    console.log('STR CIDS: ', strCIds);

    if (strCIds === '') return null;

    const arrObjCData = await apiController.fnChannelData(_youtube, strCIds);
    return arrObjCData;
  } catch (err) {
    console.error(`Error in fnReqChannelData:\n${err}`);
  }
}


function fnRunService ()
{
  const service = google.youtube('v3');

  const nArrQuery = Object.values()
}


const fnRequest = async () => {
  try {
    const youtube = google.youtube('v3');

    const nArrQuery = Object.values(fnGetQueries());
    const nArrQLen = nArrQuery.length;

    const nArrObjVData = [];
    const vModels = Object.values(models.video);
    for (let i=0; i<nArrQLen; ++i) {
      let arrQuery = nArrQuery[i];
      fnDoShuffle(arrQuery);
      arrQuery = arrQuery.slice(0, 2);

      const arrObjSData = await fnReqSearchData(youtube, arrQuery, vModels[i]);
      if (arrObjSData === undefined && typeof arrObjSData === undefined) return;

      const arrObjVData = await fnReqVideoData(youtube, arrObjSData);

      nArrObjVData.push(arrObjVData);
    }
    const arrCId = fnExtractChannelId(nArrObjVData);
    const arrObjCData = await fnReqChannelData(youtube, arrCId);

    await dbController.fnSaveVideos(nArrObjVData);
    await dbController.fnSaveChannels(arrObjCData);

  } catch (err) {
    console.error(`Error in fnRequest:\n${err}`);
  }
};


(async () => {
  await fnRequest();
})();