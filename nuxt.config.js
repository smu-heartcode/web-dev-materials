export default {
  telemetry: false,
  target: 'static',
  head: {
    title: 'HeartCode Web Dev',
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
    '@smu-heartcode/smu-heartcode-help',
    '@smu-heartcode/smu-heartcode-components',
  ],
  axios: {},
}
