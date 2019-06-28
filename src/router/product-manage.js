const list = route => require.ensure([], () => route(require('@/pages/product-manage/list')), ' PRODUCT_LIST')

export default [{
  path: 'product-manage/list',
  component: list,
  meta: {keepAlive: '', href: '', title: '商品列表', name: 'PRODUCT_LIST', index: '1-1'}
}]
