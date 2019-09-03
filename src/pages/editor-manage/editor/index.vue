<template>
  <div>
    <span>EDITOR</span>
    <VmEditor
      width="900px"
      height="300px"
      @upload="showHtml">
    </VmEditor>
    <div v-html="html"></div>
  </div>
</template>
<script>
import VmEditor from '../../../components/vm-editor/vm-editor.vue'
export default {
  components: {
    VmEditor
  },
  data () {
    return {
      html: ''
    }
  },
  created () {},
  methods: {
    showHtml (data) {
      console.log(data)
      this.html = data
    }
  }
}
</script>
<style>
</style>
