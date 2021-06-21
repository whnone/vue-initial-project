/**
 * 引入组件文件-配置路由
 */
const editorBase = r => require.ensure([], () => r(require('@/pages/editor-manage/editor')), 'EDITOR_BASE')
const editorQuill = r => require.ensure([], () => r(require('@/pages/editor-manage/editor-quill')), 'EDITOR_QUILL')

export default [{
  path: 'editor-manage/editor',
  component: editorBase,
  name: 'EDITOR_BASE',
  meta: {keepAlive: '', href: '', title: '富文本编辑器1', index: '2-1'}
}, {
  path: 'editor-manage/editor-quill',
  component: editorQuill,
  name: 'EDITOR_QUILL',
  meta: {keepAlive: '', href: '', title: '富文本编辑器2', index: '2-2'}
}]
