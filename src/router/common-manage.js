/**
 * 引入组件文件-配置路由
 */
import Login from '@/pages/login'
import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home.vue'

export default [{
  path: '/',
  component: Login,
  meta: { href: 'pages/login', title: '登录', name: 'Login' }
}, {
  path: '/HelloWorld',
  component: HelloWorld,
  meta: { href: 'components/HelloWorld', title: '测试', name: 'HelloWorld' }
}, {
  path: '/pages/home',
  component: Home,
  meta: { href: 'pages/home', title: '首屏', name: 'Home' }
}]
