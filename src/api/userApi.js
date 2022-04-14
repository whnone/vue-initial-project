import request from "./fetch/request.js"

export default {

    /**
     * 提交用户数据
     */
    addUser(options) {
        return request('/extra-portal/store/mbb/cdk/submit', 'post', options)
    },

    /**
     * 校验来源code
     */
    checkSourceCode(query) {
        return request(`/extra-portal/store/mbb/cdk/getCodeItem/${query.code}`, 'get')
    },

}