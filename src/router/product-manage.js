/**
 * 引入组件文件-配置路由
 */
const productList = r => require.ensure([], () => r(require('@/pages/product-manage/list')), 'PRODUCT_LIST')

export default [{
  path: 'product-manage/list',
  component: productList,
  meta: {keepAlive: '', href: '', name: 'PRODUCT_LIST', title: '商品列表', index: ''}
}]
