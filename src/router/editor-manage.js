/**
 * 引入组件文件-配置路由
 */
import editor from '../pages/editor-manage/editor'
import editorQuill from '../pages/editor-manage/editor-quill'

export default [{
  path: '/pages/editor-manage/editor',
  component: editor,
  meta: {keepAlive: '', href: '', title: '富文本编辑器1', name: 'EDITOR', index: '3'}
}, {
  path: '/pages/editor-manage/editor-quill',
  component: editorQuill,
  meta: {keepAlive: '', href: '', title: '富文本编辑器2', name: 'EDITORQUILL', index: '4'}
}]
