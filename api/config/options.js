const arrQueueTokens = [process.env.YOUTUBE_TOKEN, process.env.YOUTUBE_TOKEN1, process.env.YOUTUBE_TOKEN2, process.env.YOUTUBE_TOKEN3];
arrQueueTokens.length = arrQueueTokens.findIndex(e => e === undefined);
const YOUTUBE_TOKEN = arrQueueTokens[(new Date().getDate()) % arrQueueTokens.length];

module.exports = {
  search: {
    key: YOUTUBE_TOKEN,
    part: 'id',
    order: 'date',
    maxResults: 3,
    type: 'video',
    videoEmbeddable: 'true', // 저작권 관련 문제: 웹페이지로 퍼갈 수 있는 동영상만 포함하도록 검색을 제한
    videoSyndicated: 'true', // 저작권 관련 문제: youtube.com 외부에서 재생할 수 있는 동영상만 포함 value = 'true' or 'any'
    fields: 'items(id)',
  },
  
  videos: {
    key: YOUTUBE_TOKEN,
    part: 'snippet, statistics',
    fields: 'items(id, snippet(channelId, title, thumbnails))',
    // fields: 'items(id, snippet(channelId, title, description, thumbnails), statistics(viewCount, likeCount, commentCount))',
  },

  channels: {
    key: YOUTUBE_TOKEN,
    part: 'snippet, statistics',
    fields: 'items(id, snippet(title, thumbnails), statistics(viewCount, commentCount, subscriberCount, videoCount))',
  },

  searchChannels: {
    key: YOUTUBE_TOKEN,
    part: 'id',
    categoryId: '',
    maxResults: 3,
    fields: 'items(id)',
  },
}