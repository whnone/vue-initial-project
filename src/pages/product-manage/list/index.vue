<template>
  <div class="pro">
    <el-button type='primary' @click="getMunber">确定</el-button>
    <span>{{data}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      data: 0
    }
  },
  created () {},
  mounted () { },
  methods: {
    async getMunber () {
      let res = await this.setNumber()
      console.log(res)
    },
    setNumber () {
      let data = this.data
      data += 10
      this.data = data
      return data
    }
  }
}
</script>

<style></style>
