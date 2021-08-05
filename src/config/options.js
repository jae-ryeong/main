module.exports = {
  search: {
    key: process.env.YOUTUBE_TOKEN,
    q: text,
    maxResults: 1,
    fields: 'items(id)',
  },
  videos: {
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet, statistics',
    id: videoId,
    fields: 'items(id, snippet(title, description, thumbnails), statistics(viewCount, likeCount, commentCount))',
  },
}