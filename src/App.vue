<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
    @import './assets/style/reset.scss';
    @import './assets/style/variables.scss';
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html, body, #app{
        width: 100%;
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    ::-webkit-scrollbar {/*滚动条整体样式*/
        width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 12px;
    }
    ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        -webkit-box-shadow: inset 0 0 12px rgba(0,0,0,0.2);
        background: #c2c2c2;
    }
    ::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 12px rgba(0,0,0,0.2);
        background: #fff;
    }
</style>
