export default {
  mode: 'spa',
  target: 'static',
  head: {
    title: 'Web Dev Materials',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'SMU SIS Project Heartcode 2020 Web Development Workshop Materials'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  components: true,
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  axios: {},
}
