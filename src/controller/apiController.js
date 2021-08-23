const options = require("../config/options");

const Video = require('../models/Video');

const responseHandle = response => {
  try {
    const { items } = response.data;

    if (items == null || items.length === 0) {
      return console.log('Not found.');
    }

    return items;
  } catch (err) {
    console.error(`Error in responseHandle:\n${err.message}`);
  }
}

module.exports = {
  searchQuery: async (youtube, q, topicId) => {
    options.search.q = q;
    options.search.topicId = topicId;

    try {
      const response = await youtube.search.list(options.search);
      const items = responseHandle(response);
      return items;
    } catch (err) {
      console.error(`Error in searchQuery:\n${err.message}`);
    }
  },

  videoData: async (youtube, videoId) => {
    options.videos.id = videoId;

    try {
      const response = await youtube.videos.list(options.video);
      const items = responseHandle(response);

      const { id, snippet, statistics } = items[0];
      const url = `https://www.youtube.com/watch?v=${id}`;

      const { channelId, title, description, thumbnails } = snippet;
      const thumbnail = thumbnails.default.url;

      const { viewCount, likeCount, commentCount } = statistics; 

      return { title, thumbnail, url, channelId };
    } catch (err) {
      console.error(`Error in videoData:\n${err.message}`);
    }
  },

  channelData: async (youtube, channeId) => {
    options.channel.id = channeId;

    try {
      const response = await youtube.channels.list(options.channel);
      const items = responseHandle(response);

      const { id, snippet, statistics } = items[0];
      const url = `https://www.youtube.com/channel/${id}`;

      const { title, thumbnails } = snippet;
      const thumbnail = thumbnails.default.url;

      const { viewCount, commentCount, subscriberCount, videoCount } = statistics;

      return { url, title, thumbnail };
    } catch (err) {
      console.error(`Error in channels:\n${err.message}`)
    }
  },

  searchChannels: async youtube => {
    options.searchChannels.categoryId = ''

    try {
      const response = await youtube.channels.list(options.searchChannels);
      const items = responseHandle(response);
      return items;
    } catch (err) {
      console.error(`Error in searchChannels:\n${err.message}`)
    }
  }
}