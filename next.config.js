
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/Accueil': { page: '/Accueil' },
      '/Posts': { page: '/Posts' },
      '/Contacts': { page: '/Contacts' },
    }
  },
  assetPrefix: !debug ? '/Blog/' : ''
}