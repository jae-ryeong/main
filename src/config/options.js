module.exports = {
  search: {
    key: process.env.YOUTUBE_TOKEN,
    part: 'id',
    order: 'date',
    maxResults: 5,
    q: '된장국',
    topicId: '호박잎요리',
    type: 'video',
    // videoCategoryId: '',
    videoEmbeddable: 'true', // 웹페이지로 퍼갈 수 있는 동영상만 포함하도록 검색을 제한
    videoSyndicated: 'true', // youtube.com 외부에서 재생할 수 있는 동영상만 포함 value = 'true' or 'any'
    fields: 'items(id)',
  },
  
  video: {
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet, statistics',
    id: '',
    fields: 'items(id, snippet(channelId, title, description, thumbnails), statistics(viewCount, likeCount, commentCount))',
  },

  channel: {
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet, statistics',
    id: '',
    fields: 'items(id, snippet(title, thumbnails), statistics(viewCount, commentCount, subscriberCount, videoCount))',
  },

  searchChannels: {
    key: process.env.YOUTUBE_TOKEN,
    part: 'id',
    categoryId: '',
    maxResults: 3,
    fields: 'items(id)',
  },
}