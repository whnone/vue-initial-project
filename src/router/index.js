import Vue from 'vue'
import Router from 'vue-router'

import { langs } from '../config'

const Home = r => require.ensure([], () => r(require('@/pages/home')), 'LOGIN')
const RES = r => require.ensure([], () => r(require('@/pages/res')), 'RES')

Vue.use(Router)

// 初始化路由
let routes = [{
  path: '/',
  redirect: `/${langs[0]}/home`
}, {
  path: `/${langs[0]}/`,
  redirect: `/${langs[0]}/home`
}, {
  path: '*',
  redirect: `/${langs[0]}/home`
}]

// 多语言路由
langs.forEach((item, index) => {
  routes = routes.concat([{
    path: `/${item}/home`,
    component: Home,
    meta: { href: '', title: '首页', name: 'LOGIN' }
  }, {
    path: `/${item}/res`,
    component: RES,
    meta: { href: '', title: '结果', name: 'RES' }
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
