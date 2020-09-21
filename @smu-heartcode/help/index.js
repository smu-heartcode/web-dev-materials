// import path from 'path'
// this.addPlugin(path.resolve(__dirname, 'plugin.js'))

export default async function heartcodeHelp(moduleOptions) {
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
}
