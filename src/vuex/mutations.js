import * as $types from './mutation-types'
const state = {
    test: 'test',
    language: 'zh-CN',
    brand_favicon: ''
}
const mutations = {
    [$types.LANGUAGE](state, lang) {
        state.language = lang
    }
}
export default {
    state,
    mutations
}
