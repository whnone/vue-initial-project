import request from "./fetch/request.js"

export default {

    /**
     * 登录1.0
     */
    login(options) {
        return request('/admin/login', 'post', options)
    },

    /**
     * 登录2.0
     * @param {*} options 
     * @returns {token, wechatId, auth}
     */
    authLogin(options) {
        return request('/onLogin', 'post', options, '', 'auth/manage/', 20000, 'json')
    }
}