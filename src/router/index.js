import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import productRotus from './product-manage'
import home from '../pages/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: `/zh-CN`,
      component: home,
      children: [
        ...productRotus
      ]
    }
  ]
})
