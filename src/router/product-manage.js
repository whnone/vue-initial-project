/**
 * 引入组件文件-配置路由
 */
import productList from '../pages/product-manage/list'

export default [{
  path: '/pages/product-manage/list',
  component: productList,
  meta: {keepAlive: '', href: '', title: '商品列表', name: 'PRODUCT_LIST', index: '1'}
}]
