const Search = require('../models/Search');

module.exports = (youtube, options) => {
  
  youtube.search.list(options, (err, response) => {
    if (err) {
      return console.error('Error in search api:\n', err.message);
    }

    const { items } = response.data;

    if (items == null || items.length === 0) {
      return console.log('Not found.')
    }

    return items;
  });
}