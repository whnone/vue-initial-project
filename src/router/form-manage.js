/**
 * 引入组件文件-配置路由
 */
const formBase = r => require.ensure([], () => r(require('@/pages/form-manage/form')), 'FORM_BASE')

export default [{
  path: 'form-manage/form',
  component: formBase,
  name: 'FORM_BASE',
  meta: {keepAlive: '', href: '', title: '表单', index: '3-1'}
}]
