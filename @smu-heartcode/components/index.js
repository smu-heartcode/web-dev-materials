const {resolve} = require('path')

module.exports = async function (moduleOptions) {
  this.addPlugin(resolve(__dirname, 'plugin.js'))
}

module.exports.meta = require('./package.json')
