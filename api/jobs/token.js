'use strict';

const TOKENS = process.env.YOUTUBE_TOKEN;

module.exports = function () /* string */
{
  let keys = TOKENS.split(',');
  let key = keys[(new Date().getDate()) % keys.length];
  console.log(key);
  console.log(key);
  console.log(key);
  console.log(key);
  console.log(key);
  return key;
}

