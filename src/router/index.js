import Vue from 'vue'
import Router from 'vue-router'

import commonRotus from './common-manage'
import productRotus from './product-manage'

Vue.use(Router)

const routes = []

routes.push(...[
  ...commonRotus,
  ...productRotus
])

// 路由配置
const router = new Router({
  routes,
  base: location.pathname,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
