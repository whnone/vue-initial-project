<template>
  <div>
    <span>QUILL-EDITOR</span>
    <quill-editor v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)">
    </quill-editor>
    <div>-----------------------***************************************------------------------</div>
    <div>-----------------------***************************************------------------------</div>
    <div v-text="content"></div>
  </div>
</template>
<script>
// import hljs from 'highlight.js'
// import { Quill } from 'vue-quill-editor'
// import { ImageDrop } from 'quill-image-drop-module'
// import ImageResize from 'quill-image-resize-module'
// Quill.register('modules/imageDrop', ImageDrop)
// Quill.register('modules/imageResize', ImageResize)
export default {
  data () {
    return {
      content: `<p><strong><em>1 2 3 4 5 6 7.</em></strong></p>`,
      editorOption: {
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }], // text direction
            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: '' }, { align: 'center' }, { align: 'right' }],
            ['image', 'link']
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          }
        }
      }
    }
  },
  methods: {
    onEditorBlur (editor) {
      // console.log('editor blur!', this.content)
    },
    onEditorFocus (editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      // console.log('editor ready!', editor)
    }
  }
}
</script>
<style>
</style>
