// 引入axios
import axios from 'axios'
import qs from 'qs'
import config from '@/config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 100000;

// 请求拦截器
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

export default {
    baseURL: baseUrl,
    // get请求
    get({
        url,
        params
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: params,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // post请求
    post({
        url,
        params
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: qs.stringify(params),
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    }
}