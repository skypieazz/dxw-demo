import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'dxw',
      component: () => import('@/views/dxw/dxw'),
    }
  ]
})
