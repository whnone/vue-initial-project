/**
 * 开放媒体：地图、视频、图片、音频
 */
// 地图
const map = r => require.ensure([], () => r(require('@/pages/map-manage/map')), 'MAP_PAGES')
// 图片裁切
const resorce = r => require.ensure([], () => r(require('@/pages/resource-manage/resource')), 'RESORCE')
// 测试jade
const testjade = r => require.ensure([], () => r(require('@/pages/resource-manage/testjade')), 'TESTJADE')

export default [{
  path: 'map-manage/map',
  component: map,
  name: 'MAP_PAGES',
  meta: {keepAlive: '', href: '', title: '地图', index: '1-1'}
}, {
  path: 'resource-manage/resource',
  component: resorce,
  name: 'RESORCE',
  meta: {keepAlive: '', href: '', title: '裁切', index: '1-2'}
}, {
  path: 'resource-manage/testjade',
  component: testjade,
  name: 'TESTJADE',
  meta: {keepAlive: '', href: '', title: '测试jade', index: '1-3'}
}]
