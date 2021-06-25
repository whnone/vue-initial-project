// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueCropper from 'vue-cropper'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import util from './utils/utils.js'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import i18n from './utils/i18n'

Vue.prototype.$lang = util.getLang()
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueCropper)
sync(store, router)

// 无需验证的公共资源路径
function isCommonRoutes(to) {
  return (
    to.path === '/' ||
    to.path === `/${store.state.language}/` ||
    to.path === `/${store.state.language}/login`
  )
}

router.beforeEach((to, from, next) => {
  if (isCommonRoutes(to)) {
    next()
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    lang: util.getLang()
  },
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
