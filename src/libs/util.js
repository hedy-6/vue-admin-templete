import {
    hasOneOf
} from '@/libs/tool'

/**
 * 判断该节点是否有子节点
 * @param {*} item 
 */
export const hasChild = (item) => {
    return item.children && item.children.length > 0
}

/**
 * 用户是否有显示该菜单的权限
 * @param {*} item 菜单元素
 * @param {*} access 权限
 */
export const showThisMenuEle = (item, access) => {
    if (item.meta && item.meta.access && item.meta.access.length) {
        if (hasOneOf(item.meta.access, access)) {
            return true
        } else {
            return false
        }
    } else {
        return true
    }
}

/**
 * 通过路由列表获取菜单列表
 * @param {*} list 路由
 * @param {*} access 权限
 */
export const getMenuByRouter = (list, access) => {
    let res = [];
    if (list.length > 0) {
        list.forEach(item => {
            if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
                let obj = {
                    icon: (item.meta && item.meta.icon) || '',
                    name: item.name,
                    meta: item.meta
                }
                if ((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item, access)) {
                    obj.children = getMenuByRouter(item.children, access)
                }
                if (item.meta && item.meta.href) {
                    obj.href = item.meta.href
                }
                if (showThisMenuEle(item, access)) {
                    res.push(obj)
                }
            }
        });
    }
    return res;
}

/**
 * 获取面包屑数组
 * @param {*} route 
 * @param {*} homeRoute 
 */
export const getBreadCrumbList = (route, homeRoute) => {
    let homeItem = { ...homeRoute,
        icon: homeRoute.meta.icon
    }
    let routeMetched = route.matched
    if (routeMetched.some(item => item.name === homeRoute.name)) return [homeItem]
    let res = routeMetched.filter(item => {
        return item.meta === undefined || !item.meta.hideInBread
    }).map(item => {
        let meta = { ...item.meta
        }
        if (meta.title && typeof meta.title === 'function') meta.title = meta.title(route)
        let obj = {
            icon: (item.meta && item.meta.icon) || '',
            name: item.name,
            meta: meta
        }
        return obj
    })
    res = res.filter(item => {
        return !item.meta.hideInMenu || (item.meta.hideInMenu && !item.children)
    })
    return [{ ...homeItem,
        to: homeRoute.path
    }, ...res]
}

/**
 * 获取根路由
 * @param {Array} routers 路由列表数组
 * @description 用于找到路由列表中name为home的对象
 */
export const getHomeRoute = (routers, homeName = 'home') => {
    let i = -1
    let len = routers.length
    let homeRoute = {}
    while (++i < len) {
        let item = routers[i]
        if (item.children && item.children.length) {
            let res = getHomeRoute(item.children, homeName)
            if (res.name) return res
        } else {
            if (item.name === homeName) homeRoute = item
        }
    }
    return homeRoute
}

export const findNodeUpperByClasses = (ele, classes) => {
    let parentNode = ele.parentNode
    if (parentNode) {
        let classList = parentNode.classList
        if (classList && classes.every(className => classList.contains(className))) {
            return parentNode
        } else {
            return findNodeUpperByClasses(parentNode, classes)
        }
    }
}