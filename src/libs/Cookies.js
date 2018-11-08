import Cookies from 'js-cookie'
import config from '@/config'

/**
 * 设置cookie
 * @param {*} key 
 * @param {*} value 
 */
export const setCookie = (key, value) => {
    Cookies.set(key, value, {
        expires: config.cookieExpires || 1
    })
}

/**
 * 获取cookie
 * @param {*} key 
 */
export const getCookie = (key) => {
    return Cookies.get(key)
}

/**
 * 删除cookie
 * @param {*} key 
 */
export const delCookie = (key) => {
    return Cookies.remove(key);
}