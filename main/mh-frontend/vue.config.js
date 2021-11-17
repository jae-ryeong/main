module.exports = {
    devServer: {
      proxy: {
        '^/main': {
          target: 'http://localhost:17260',
          changeOrigin: true
        },
      }
    }
  }