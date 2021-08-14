module.exports = {
  search: {
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    q: '알파고 햇규',
    maxResults: 3,
    fields: 'items(id)',
  },
  
  videos: {
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet, statistics',
    id: 'sk',
    fields: 'items(id, snippet(channelId, title, description, thumbnails), statistics(viewCount, likeCount, commentCount))',
  },
}