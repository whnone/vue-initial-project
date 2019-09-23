<template>
  <div>
    <span>QUILL-EDITOR</span>
    <quillEditor v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)">
    </quillEditor>
    <div class="tipLine"></div>
    <div v-text="content"></div>
  </div>
</template>
<script>
import quillEditor from '@/components/vue-quill-editor/editor.vue'
export default {
  components: {
    quillEditor
  },
  data () {
    return {
      content: `<p>1234aaaaaabbbbbcccccddddd</p>`,
      editorOption: {
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], // toggled buttons
            // ['blockquote', 'code-block'],
            // [{ header: 1 }, { header: 2 }], // custom button values
            // [{ list: 'ordered' }, { list: 'bullet' }],
            // [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            // [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            // [{ direction: 'rtl' }], // text direction
            // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            // [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            ['padding'],
            // [{ font: [] }],
            // [{ align: '' }, { align: 'center' }, { align: 'right' }],
            ['image', 'link', 'video']
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
      // console.log('editor blur!', editor)
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
.tipLine{
  margin: 20px 0;
  border-bottom: 1px dotted #ccc;
}
</style>
