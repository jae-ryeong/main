"use strict";

function fnGetQueries() /* return obj-arr */
{
  return fnHandleQueries(require('../tmp-list.json')/* n-obj-arr */);
}


function fnHandleQueries(_cData/* n-obj-arr */) /* return obj-arr */
{
  // Change: obj-arr
  const objArr = Object.values(_cData).reduce((obj, t) => {
    for (let k of Object.keys(t))
    {
      if (obj[k]) obj[k].push(...t[k]);
      else obj[k] = [...t[k]];
    }
    return obj;
  }, {});

  // Remove duplicates.
  for (const k of Object.keys(objArr))
  {
    const s = new Set(objArr[k]);
    objArr[k] = [...s];
  }

  return objArr;
}

module.exports = fnGetQueries;