<template lang="jade">
  div#txMap
</template>
<script>
export default {
  data () {
    return {
      txMap: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 初始化地图组件-纬度---经度
    init () {
      let selfLatlng = new window.qq.maps.LatLng(31.23965985795383, 121.49972478859127)
      let selfOption = {
        zoom: 13,
        center: selfLatlng,
        mapTypeId: window.qq.maps.MapTypeId.ROADMAP
      }
      this.txMap = new window.qq.maps.Map(document.getElementById('txMap'), selfOption)
      // 给地图添加点击事件
      window.qq.maps.event.addListener(this.txMap, 'click', ev => {
        this.clickMap(ev)
        let {icon, size, origin, anchor} = this.newMarkerIcon()
        let marker = new window.qq.maps.Marker({
          position: ev.latLng,
          draggable: true,
          map: this.txMap
        })
        let markerIcon = new window.qq.maps.MarkerImage(icon, size, origin, anchor)
        marker.setIcon(markerIcon)
        window.qq.maps.event.addListener(this.txMap, 'click', ev => {
          marker.setMap(null)
        })
      })
    },
    // 点击获取坐标
    clickMap (data) {
      const {latLng} = data
      console.log(latLng.getLat(), latLng.getLng())
      this.txMap.panTo(new window.qq.maps.LatLng(latLng.getLat(), latLng.getLng()))
    },
    // 定义marker样式
    newMarkerIcon() {
      let size = new window.qq.maps.Size(20, 28)
      let origin = new window.qq.maps.Point(0, 0)
      let anchor = new window.qq.maps.Point(12, 38)
      let icon = 'http://dev.estore.d1m.cn/attached/gxg//null//large/20191210151136coordinate.png?1575961896630'
      return {icon, size, origin, anchor}
    }
  }
}
</script>
<style lang="scss" scoped>
#txMap{
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
}
</style>
