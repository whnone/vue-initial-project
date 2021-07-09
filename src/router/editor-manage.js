/**
 * 引入组件文件-配置路由
 */
const editorBase = r => require.ensure([], () => r(require('@/pages/editor-manage/editor')), 'EDITOR_BASE')
const editorQuill = r => require.ensure([], () => r(require('@/pages/editor-manage/editor-quill')), 'EDITOR_QUILL')

export default [{
  path: 'editor-manage/editor-quill',
  component: editorQuill,
  meta: {keepAlive: '', href: '', name: 'EDITOR_QUILL', title: '富文本1.0', index: '2-1'}
}, {
  path: 'editor-manage/editor',
  component: editorBase,
  meta: {keepAlive: '', href: '', name: 'EDITOR_BASE', title: '富文本2.0', index: '2-2'}
}]
