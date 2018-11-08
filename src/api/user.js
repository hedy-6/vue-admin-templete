import http from './http'
import {
    delCookie
} from '../libs/Cookies'
import {
    resolve
} from 'url';

/**
 * 登录
 * @param {*} param0 
 */
export const login = ({
    userName,
    password
}) => {
    const data = {
        userName,
        password
    }
    return http.post({
        url: 'user/login',
        data
    })
}

/**
 * 获取用户信息
 * @param {*} params 
 */
export const getUserInfo = (params) => {
    return http.get({
        url: 'user/getUserInfo',
        params: params
    })
}

/**
 * 退出登录
 * @param {*} token 
 */
export const logout = () => {
    // 退出登录代码
    delCookie('userId');
}