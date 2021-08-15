const { search: options } = require('../config/options');

module.exports = async (youtube, q, topicId) => {
  try {
    options.q = q;
    options.topicId = topicId;
    
    const response = await youtube.search.list(options);
    const { items } = response.data;

    if (items == null || items.length === 0) return console.log('Not found');

    return items;
  } catch (err) {
    console.error('Error in search:\n', err.message);
  }
}