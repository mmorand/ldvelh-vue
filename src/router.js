import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'game',
      component: () => import('./components/Game.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('./components/Books.vue')
    },
    {
      path: '/book/:bookId/chapter/:chapterId',
      name: 'chapter',
      component: () => import('./components/Chapter.vue')
    }
  ]
})
