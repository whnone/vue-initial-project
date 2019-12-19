<template>
  <div>
    <el-button @click="toEditor">
      富文本
    </el-button>
    <el-button @click="toResoucre">
      test
    </el-button>
    <el-button @click="toMap">
      MAP
    </el-button>
    <el-button @click="toForm">
      form
    </el-button>
  </div>
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
    toEditor () {
      // this.$router.push('./pages/resource-manage/resource')
      // this.$router.push('./pages/editor-manage/editor')
      this.$router.push('./pages/editor-manage/editor-quill')
    },
    toResoucre () {
      this.$router.push('./pages/product-manage/list')
    },
    toMap () {
      this.$router.push('./pages/map-manage/map')
    },
    toForm() {
      this.$router.push('./pages/form-manage/form')
    }
  }
}
</script>
