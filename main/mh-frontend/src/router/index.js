import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main.vue'
import VideoList from '@/components/videoList.vue'
import About from '@/components/about.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // mode를 history로 변경해서 url에 # 안보이게 해주기.
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
