
<template lang="jade">
  div.wrap
    h1.wrapTitle(
      @click="toPro"
    ) aa
</template>
<script>
export default {
  data () {
    return {
      Menus: []
    }
  },
  methods: {
    toPro () {
      this.$router.push('./product-manage/list')
    }
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    .wrapTitle{
      color: red;
    }
  }
</style>
