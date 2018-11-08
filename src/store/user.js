import {
    login,
    getUserInfo,
    logout
} from '../api/user'

export default {
    state: {
        userId: '',
        userInfo: {},
        access: ''
    },
    getters: {

    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        handleLogin({
            commit
        }, {
            userName,
            password
        }) {
            userName = userName.trim();
            return new Promise((resolve, reject) => {
                login({
                    userName,
                    password
                }).then(res => {
                    let data = res.data;
                    commit.setUserId(data.userId)
                    resolve(data);
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getUserInfo({
            commit
        }) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(res => {
                    commit('setUserInfo', res.data.userInfo)
                    resolve(res.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        handleLogout({
            commit
        }) {
            return new Promise((resolve) => {
                logout()
                commit('setUserInfo', {})
                commit('setUserId', '')
                resolve();
            })
        }
    }
}