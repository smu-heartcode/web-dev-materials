import Vue from 'vue'
import VueHorizontalList from 'vue-horizontal-list'
import VueMasonryWall from 'vue-masonry-wall'

Vue.use(VueHorizontalList)
Vue.use(VueMasonryWall)

import HeartcodeBetween from '@smu-heartcode/smu-heartcode-components/heartcode-between'
import HeartcodeContainer from '@smu-heartcode/smu-heartcode-components/heartcode-container'
import HeartcodeHeader from '@smu-heartcode/smu-heartcode-components/heartcode-header'
import HeartcodeImage from '@smu-heartcode/smu-heartcode-components/heartcode-image'
import HeartcodeList from '@smu-heartcode/smu-heartcode-components/heartcode-list'

Vue.component('heartcode-between', HeartcodeBetween)
Vue.component('heartcode-header', HeartcodeHeader)
Vue.component('heartcode-container', HeartcodeContainer)
Vue.component('heartcode-image', HeartcodeImage)
Vue.component('heartcode-list', HeartcodeList)
