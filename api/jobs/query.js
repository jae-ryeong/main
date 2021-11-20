module.exports = {
  fnIntergration: function(_nObjArrEls)
  {
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
  },
  fnGetQueries: function() {
    try {
      const nObjArrEls = require('../tmp-list.json');
  
      return this.fnIntergration(nObjArrEls);
    } catch (err) {
      console.error(`Error in fnGetQueries:\n${err}`);
    }
  },
  fnShuffleData: cList => {
    let j;
  
    for (let i=cList.length-1; i>0; --i)
    {
      j = Math.floor(Math.random() * (i+1));
      [cList[i], cList[j]] = [cList[j], cList[i]];
    }
  },
};