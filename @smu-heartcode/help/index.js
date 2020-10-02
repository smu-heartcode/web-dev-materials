const {resolve} = require('path')

module.exports = async function (moduleOptions) {
  const {options, hook} = this.nuxt

  options.css.unshift(resolve(__dirname, 'tailwind.css'))

  hook('build:before', async () => {
    if (!options.dev && !process.env.NODE_ENV) {
      process.env.NODE_ENV = 'production'
    }

    const {postcss} = options.build
    postcss.preset.stage = 1
    postcss.plugins = postcss.plugins || {}
    postcss.plugins.tailwindcss = resolve(__dirname, 'tailwind.config.js')
  })
}

module.exports.meta = require('./package.json')
