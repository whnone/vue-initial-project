/**
 * 引入组件文件-配置路由
 */
import HelloWorld from '@/components/HelloWorld'
import home from '../pages/home.vue'

export default [{
  path: '/HelloWorld',
  component: HelloWorld,
  meta: { href: 'components/HelloWorld', title: 'TEST', name: 'HelloWorld' }
}, {
  path: '/pages/home',
  component: home,
  meta: { href: 'pages/home', title: '首屏', name: 'Home' }
}]
