import config from './config'
import axios from 'axios'
import {Message} from 'element-ui'
import { basalUrl } from '../../config'
// import store from '../vuex/store'

export default async(url, method = 'get', options, query, service = 'manage', timeout = 20000, responseType = 'json') => {
    let data = {}
    let params = {}
    let response, result, token

    token = ''
    // token = store.state.token

    // 处理query
    if (query) query.forEach(item => {url += `/${item}`})

    if (method === 'get' || method === 'delete') {
        params = options
    }
    if (method === 'post' || method === 'put') {
        data = options
    }

    // 设置token
    if (token) {
        axios.defaults.headers.common['token'] = token
    }

    // 合并请求参数
    try {
        response = await axios(Object.assign(config, {
            baseURL: `${basalUrl}/${service}`,
            url,
            method,
            data,
            params,
            responseType,
            timeout
        }))
        result = response.data
    } catch (e) {
        result = {}
        Message.error(e.message)
    }
    return result
}
