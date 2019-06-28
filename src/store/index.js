/**
 * index.js
 * */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import * as getters from './getters'
import mutations from './mutations'
import createLogger from 'vue/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: debug ? [createLogger()] : []
})