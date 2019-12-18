/**
 * 引入组件文件-配置路由
 */
import Login from '@/pages/login'
import Home from '../pages/home.vue'

export default [{
  path: '/',
  component: Login,
  meta: { href: 'pages/login', title: '登录', name: 'Login' }
}, {
  path: '/pages/home',
  component: Home,
  meta: { href: 'pages/home', title: '首屏', name: 'Home' }
}]
