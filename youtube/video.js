module.exports = (youtube, videoId) => {
  
  const options = {
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet, statistics',
    id: videoId,
    fields: 'items(id, snippet(title, description, thumbnails), statistics(viewCount, likeCount, commentCount))'
  }

  youtube.videos.list(options, (err, response) => {
    if (err) {
      return console.error('Loading video list:\n', err.message);
    }

    const { items } = response.data;
    
    for (item of items) {
      console.log(item);
    }
  })
}