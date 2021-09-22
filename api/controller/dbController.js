const models = require('../models');

const dbController = {
  vModels: Object.values(models.video),
  cModel: models.Channel,

  fnSaveVideos: async function (_nArrVideos) {
    try {
      process.stdout.write('Saved video index: '); // Temp
      for (const arrVideos of _nArrVideos) {
        await Promise.all(_arrVideos.map((el, i) => {
          const videoDoc = new this.vModels(el);
          videoDoc.save(err => err ? console.error(err.message) : process.stdout.write(`${i} `));
        }));
      }
    } catch (err) {
      console.error(`Error in dbc.fnSaveVideos:\n${err}`);
    }
  },

  fnSaveChannels: async function (_arrChnnaels) {
    try {
      process.stdout.write('Saved channel index: '); // Temp
      await Promise.all(_arrChannels.map((el, i) => {
        const channelDoc = new this.cModel(el);
        channelDoc.save(err => err ? console.error(err.message) : process.stdout.write(`${i} `));
      }));
    } catch (err) {
      console.error(`Error in dbc.fnSaveChannels:\n${err}`);
    }
  },
}

module.exports = dbController;