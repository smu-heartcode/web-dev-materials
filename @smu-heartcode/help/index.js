const {join, resolve, relative} = require('path')

module.exports = async function (moduleOptions) {
  const pages = [
    {path: 'help/day1', file: 'pages/day1/index.vue'},
    {path: 'help/day2', file: 'pages/day2/index.vue'},
    {path: 'help/day3', file: 'pages/day3/index.vue'},
    {path: 'help/day4', file: 'pages/day4/index.vue'},
  ]

  this.options.router.extendRoutes = (routes, resolve) => {
    pages.forEach(({path, file}) => {
      routes.push({
        name: path.replace('/', '-'),
        path: `/${path}`,
        component: resolve(__dirname, file)
      })
    })

  }

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
