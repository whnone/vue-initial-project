import Vue from 'vue'
import Router from 'vue-router'

import { langs } from '../config'

import Home from '../pages/home.vue'

import mapRoutes from './map-manage'
import productRotus from './product-manage'
import editorRoutes from './editor-manage'
import form from './form-manage'

const login = r => require.ensure([], () => r(require('@/pages/login')), 'LOGIN')

Vue.use(Router)

// 初始化路由
let routes = [{
  path: '/',
  redirect: `/${langs[0]}/login`
}, {
  path: `/${langs[0]}/`,
  redirect: `/${langs[0]}/login`
}, {
  path: '*',
  redirect: `/${langs[0]}/login`
}]

// 多语言路由
langs.forEach((item, index) => {
  routes = routes.concat([{
    path: `/${item}/login`,
    component: login,
    meta: { href: '', title: '登录', name: 'LOGIN' }
  }, {
    path: `/${item}`,
    component: Home,
    children: [
      ...productRotus,
      ...editorRoutes,
      ...mapRoutes,
      ...form
    ]
  }])
})

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
