const path = require('path');

module.exports = {
  experimental: {
    optimizeCss: true
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles')
    ]
  },

  async rewrites() {
    return [
      {
        source: '/documents',
        destination: '/api/documents'
      },
      {
        source: '/documents/:key',
        destination: '/api/documents/:key'
      },
      {
        source: '/delete/:key',
        destination: '/api/documents/:key/delete'
      }
    ]
  }
}