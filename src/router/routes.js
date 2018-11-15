import Main from '@/views/Main.vue'
import Menu_3_2 from '@/views/menu-3/Menu-3-2.vue'
export default [{
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () => import('@/views/login/Login.vue')
    },
    {
        path: '/',
        name: 'main',
        redirect: '/home',
        component: Main,
        meta: {
            // hideInMenu: true
        },
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                // hideInMenu: true,
                title: '首页',
                icon: 'md-home'
            },
            component: () => import('@/views/home/Home.vue')
        }]
    },
    {
        path: '',
        name: 'doc',
        meta: {
            title: '外部链接',
            href: 'https://www.baidu.com',
            icon: 'ios-book'
        }
    },
    {
        path: '/menu-1',
        name: 'menu-1',
        meta: {
            hideInBread: true
        },
        component: Main,
        children: [{
            path: '/menu-1-1',
            name: 'menu-1-1',
            meta: {
                title: '一级菜单',
                icon: 'ios-briefcase'
            },
            component: () => import('@/views/menu-1/Menu-1.vue')
        }]
    },
    {
        path: '/menu-2',
        name: 'menu-2',
        meta: {
            title: '二级菜单',
            icon: 'ios-calendar'
        },
        component: Main,
        children: [{
                path: '/menu-2-1',
                name: 'menu-2-1',
                meta: {
                    title: '二级菜单1',
                    icon: 'md-clipboard'
                },
                component: () => import('@/views/menu-2/Menu-2-1.vue')
            },
            {
                path: '/menu-2-2',
                name: 'menu-2-2',
                meta: {
                    title: '二级菜单2',
                    icon: 'md-clock'
                },
                component: () => import('@/views/menu-2/Menu-2-2.vue')
            }
        ]
    },
    {
        path: '/menu-3',
        name: 'menu-3',
        meta: {
            title: '三级菜单',
            icon: 'md-cog'
        },
        component: Main,
        children: [{
                path: '/menu-3-1',
                name: 'menu-3-1',
                meta: {
                    title: '三级菜单1',
                    icon: 'ios-construct'
                },
                component: () => import('@/views/menu-3/Menu-3-1.vue')
            },
            {
                path: '/menu-3-2',
                name: 'menu-3-2',
                meta: {
                    showAlways: true,
                    title: '三级菜单2',
                    icon: 'md-contacts'
                },
                component: Menu_3_2,
                children: [{
                        path: '/menu-3-2.1',
                        name: 'menu-3-2.1',
                        meta: {
                            title: '三级菜单2.1',
                            icon: 'ios-download'
                        },
                        component: () => import('@/views/menu-3/Menu-3-2.1.vue')
                    },
                    {
                        path: '/menu-3-2.2',
                        name: 'menu-3-2.2',
                        meta: {
                            title: '三级菜单2.2',
                            icon: 'md-done-all'
                        },
                        component: () => import('@/views/menu-3/Menu-3-2.2.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/argu',
        name: 'argu',
        meta: {
            hideInMenu: true
        },
        component: Main,
        children: [{
            path: 'params/:id',
            name: 'params',
            meta: {
                title: route => `{{params}}-${route.params.id}`
            },
            component:()=>import('@/views/argu/Params.vue')
        },
        {
            path: 'query',
            name: 'query',
            meta: {
                title: route => `{{query}}-${route.query.id}`
            },
            component:()=>import('@/views/argu/Query.vue')
        }]
    },
    {
        path: '/manage',
        name: 'manage',
        redirect: '/manage/list',
        meta: {
            showAlways: true,
            title: '管理',
            icon: 'ios-create-outline'
        },
        component: Main,
        children: [{
                path: 'list',
                name: 'list',
                meta: {
                    hideInBread: true,
                    title: '列表',
                    icon: 'md-contacts'
                },
                component: () => import('@/views/manage/List.vue')
            },
            {
                path: 'detail/:detailId',
                name: 'detail',
                meta: {
                    title: '详情',
                    hideInMenu: true
                },
                component: () => import('@/views/manage/Detail.vue')
            }
        ]
    },
    {
        path: '/401',
        name: 'error_401',
        meta: {
          hideInMenu: true
        },
        component: () => import('@/views/error-page/401.vue')
      },
      {
        path: '/500',
        name: 'error_500',
        meta: {
          hideInMenu: true
        },
        component: () => import('@/views/error-page/404.vue')
      },
      {
        path: '*',
        name: 'error_404',
        meta: {
          hideInMenu: true
        },
        component: () => import('@/views/error-page/404.vue')
      }
]