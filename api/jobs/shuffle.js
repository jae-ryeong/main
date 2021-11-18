module.exports = cList => {
  for (let i = cList.length-1; i > 0; --i)
  {
    const j = Math.floor(Math.random() * (i+1));
    [cList[i], cList[j]] = [cList[j], cList[i]];
  }
}