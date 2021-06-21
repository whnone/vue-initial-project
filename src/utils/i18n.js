import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'

import enUS from '../data/i18n/en-US'
import zhCN from '../data/i18n/zh-CN'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import util from './utils.js'

Vue.use(VueI18n)
const messages = {
    zhCN: {
        ...zhCN,
        ...zhLocale
    },
    enUS: {
        ...enUS,
        ...enLocale
    }
}

const i18n = new VueI18n({
    locale: util.getLang().replace(/-/i, ''),
    messages: messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
