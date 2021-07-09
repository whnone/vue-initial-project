/**
 * 开放媒体：地图、视频、图片、音频
 */
// 地图
const map = r => require.ensure([], () => r(require('@/pages/map-manage/map')), 'MAP_PAGES')
// 图片裁切
const resorce = r => require.ensure([], () => r(require('@/pages/resource-manage/resource')), 'RESORCE')

export default [{
  path: 'map-manage/map',
  component: map,
  meta: {keepAlive: '', href: '', name: 'MAP_PAGES', title: '地图', index: '1-1'}
}, {
  path: 'resource-manage/resource',
  component: resorce,
  meta: {keepAlive: '', href: '', name: 'RESORCE', title: '裁切', index: '1-2'}
}]
