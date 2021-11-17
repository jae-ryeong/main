import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main.vue'
import VideoList from '@/components/videoList.vue'
import About from '@/components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/videoList',
      name: 'VidelList',
      component : VideoList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
