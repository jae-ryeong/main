const fs = require('fs');

const options = require("../config/options");

const responseHandle = response => {
  try {
    const items = response.data.items || [];

    if (items == null || items.length === 0) {
      return console.log('Not found.');
    }

    return items;
  } catch (err) {
    console.error(`Error in responseHandle:\n${err.message}`);
  }
}

module.exports = {
  fnSearchQuery: async (_youtube, _q, _topicId=null) => {
    options.search.q = _q;
    options.search.topicId = _topicId;

    try {
      const response = await _youtube.search.list(options.search);
      const items = responseHandle(response);
      return items;
    } catch (err) {
      console.error(`Error in searchQuery:\n${err.message}`);
    }
  },

  fnVideoData: async (_youtube, _q, _vIds) => {
    options.videos.id = _vIds;

    try {
      const response = await _youtube.videos.list(options.videos);
      const items = responseHandle(response);

      const objs = [];

      items.map(item => {
        const { id, snippet } = item;
        const url = `https://www.youtube.com/watch?v=${id}`;
  
        const { channelId, title, thumbnails } = snippet;
        const thumbnail = thumbnails.default.url;
  
        objs.push({ query: _q, id, url, channelId, title, thumbnail });
      });

      return objs;
    } catch (err) {
      console.error(`Error in videoData:\n${err.message}`);
    }
  },

  fnChannelData: async (_youtube, _ids) => {
    options.channels.id = _ids

    try {
      const response = await _youtube.channels.list(options.channels);
      const items = responseHandle(response);

      const objs = [];

      items.map(item => {
        const { id, snippet } = item;
        const url = `https://www.youtube.com/channel/${id}`;
  
        const { title, thumbnails } = snippet;
        const thumbnail = thumbnails.default.url;
  
        objs.push({id, url, title, thumbnail});
      })
      
      return objs;
    } catch (err) {
      console.error(`Error in channels:\n${err.message}`)
    }
  },

  fnSearchChannels: async youtube => {
    options.searchChannels.categoryId = ''

    try {
      const response = await youtube.channels.list(options.searchChannels);
      const items = responseHandle(response);
      return items;
    } catch (err) {
      console.error(`Error in searchChannels:\n${err.message}`)
    }
  },
}