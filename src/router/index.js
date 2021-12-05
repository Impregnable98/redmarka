import Vue from 'vue'
import Router from 'vue-router'

import MainSlider from '../components/MainSlider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainSlider
    }
  ]
})
