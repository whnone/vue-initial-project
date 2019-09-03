<template>
    <el-button @click="toResoucre">
      click
    </el-button>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    toResoucre () {
      // this.$router.push('./pages/resource-manage/resource')
      // this.$router.push('./pages/editor-manage/editor')
      this.$router.push('./pages/editor-manage/editor-quill')
    }
  }
}
</script>
