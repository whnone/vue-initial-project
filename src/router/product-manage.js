/**
 * 引入组件文件-配置路由
 */
const productList = r => require.ensure([], () => r(require('@/pages/product-manage/list')), 'PRODUCT_LIST')

export default [{
  path: 'product-manage/list',
  component: productList,
  name: 'PRODUCT_LIST',
  meta: {keepAlive: '', href: '', title: '商品列表', index: ''}
}]
