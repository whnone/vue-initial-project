import Vue from 'vue'
import Router from 'vue-router'

import commonRotus from './common-manage'
import productRotus from './product-manage'
import resourceRoutes from './resource-manage'
import editorRoutes from './editor-manage'

Vue.use(Router)

const routes = []

routes.push(...[
  ...commonRotus,
  ...productRotus,
  ...resourceRoutes,
  ...editorRoutes
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
