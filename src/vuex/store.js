import Vue from 'vue'
import Vuex from 'vuex'
// import middlewares from './middlewares'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

// const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    getters,
    ...mutations
    // middlewares,
    // strict: debug
})
