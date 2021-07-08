import Qs from 'qs'
import {baseUrl} from '../../config'

export default {
    // `url` 是用于请求的服务器 URL
    url: '',

    // `method` 是创建请求时使用的方法
    method: 'get',

    // `baseURL` 将自动加在 `url` 前面, 除非 `url` 是一个绝对 URL。
    baseURL: baseUrl,

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    transformRequest: [(request) => {
        return JSON.stringify(request)
    }],

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [(response) => {
        return response
    }],

    // `headers` 是即将被发送的自定义请求头
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },

    // `params` 是即将与请求一起发送的 URL 参数
    params: {},

    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    paramsSerializer: (params) => {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
    },

    // `data` 是作为请求主体被发送的数据
    data: {},

    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout: 10000,

    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false,

    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json',

    // `onUploadProgress` 允许为上传处理进度事件
    onUploadProgress: (progressEvent) => {},

    // `onDownloadProgress` 允许为下载处理进度事件
    onDownloadProgress: (progressEvent) => {},

    // `maxContentLength` 定义允许的响应内容的最大尺寸
    maxContentLength: 2000,

    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
    // promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: (status) => {
        return status >= 200 && status < 300
    },

    // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
    maxRedirects: 5
}