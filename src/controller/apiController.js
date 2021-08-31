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
  getQueries: list => {
    // 각 프로퍼티(a, b, c, d, e) 통합
    const dic = Object.values(list).reduce((obj, t) => {
      Object.keys(t).forEach(key => {
        if (obj[key]) obj[key].push(...t[key]);
        else obj[key] = [...t[key]];
      })
      return obj;
    }, {});

    // 키 별로 중복 제거
    Object.keys(dic).forEach(key => {
      const set = new Set(dic[key]);
      dic[key] = [...set];
    });

    fs.writeFileSync('./src/TEST/cookingList.json', JSON.stringify(dic));

    return dic;
  },

  searchQuery: async (youtube, q, topicId=null) => {
    options.search.q = q;
    options.search.topicId = topicId;

    try {
      const response = await youtube.search.list(options.search);
      const items = responseHandle(response);
      console.log(items.length);
      return items;
    } catch (err) {
      console.error(`Error in searchQuery:\n${err.message}`);
    }
  },

  videoData: async (youtube, query, _ids) => {
    options.videos.id = _ids;

    try {
      const response = await youtube.videos.list(options.videos);
      const items = responseHandle(response);

      const objs = [];

      items.map(item => {
        const { id, snippet, statistics } = item;
        const url = `https://www.youtube.com/watch?v=${id}`;
  
        const { channelId, title, description, thumbnails } = snippet;
        const thumbnail = thumbnails.default.url;
  
        const { viewCount, likeCount, commentCount } = statistics;
  
        objs.push({ query, url, channelId, title, thumbnail });
      })
      console.log(objs.length);
      return objs;
    } catch (err) {
      console.error(`Error in videoData:\n${err.message}`);
    }
  },

  channelData: async (youtube, _ids) => {
    options.channels.id = _ids

    try {
      const response = await youtube.channels.list(options.channels);
      const items = responseHandle(response);

      const objs = [];

      items.map(item => {
        const { id, snippet, statistics } = item;
        const url = `https://www.youtube.com/channel/${id}`;
  
        const { title, thumbnails } = snippet;
        const thumbnail = thumbnails.default.url;
  
        const { viewCount, commentCount, subscriberCount, videoCount } = statistics;
  
        objs.push({id, url, title, thumbnail});
      })
      console.log(objs.length);
      return objs;
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