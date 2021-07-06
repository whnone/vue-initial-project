import * as $types from './mutation-types'

/**
 * state
 */
const state = {
    loginName: 'Neo',
    language: 'zh-CN',
    brand_favicon: ''
}

/**
 * mutations
 */
const mutations = {
    [$types.SET_NAME](state, name) {
        state.loginName = name
    },
    [$types.LANGUAGE](state, lang) {
        state.language = lang
    }
}
export default {
    state,
    mutations
}
