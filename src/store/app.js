import routers from '@/router/routes'
import {
    getMenuByRouter,
    getBreadCrumbList,
    getHomeRoute
} from '@/libs/util'
import config from '@/config'
const { homeName } = config

export default {
    state: {
        homeRoute: {},
        breadCrumbList: []
    },
    getters: {
        menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access)
    },
    mutations: {
        setBreadCrumb(state, route) {
            state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
        },
        setHomeRoute(state, routes) {
            state.homeRoute = getHomeRoute(routes, homeName)
        }
    },
    actions: {

    }
}