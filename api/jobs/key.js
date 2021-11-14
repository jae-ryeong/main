"use strict";

const TOKENS = process.env.YOUTUBE_TOKEN;

module.exports = function ()
{
  let keys = TOKENS.split(',');
  return keys[(new Date().getDate()) % keys.length];
}

