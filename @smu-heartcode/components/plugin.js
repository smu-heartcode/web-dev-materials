import Vue from 'vue'
import VueHorizontalList from 'vue-horizontal-list'
import VueMasonryWall from 'vue-masonry-wall'

Vue.use(VueHorizontalList)
Vue.use(VueMasonryWall)

import {
  HeartcodeBetween,
  HeartcodeContainer,
  HeartcodeHeader,
  HeartcodeImage,
  HeartcodeList
} from '@smu-heartcode/smu-heartcode-components-lib'

Vue.component('heartcode-between', HeartcodeBetween)
Vue.component('heartcode-header', HeartcodeHeader)
Vue.component('heartcode-container', HeartcodeContainer)
Vue.component('heartcode-image', HeartcodeImage)
Vue.component('heartcode-list', HeartcodeList)
