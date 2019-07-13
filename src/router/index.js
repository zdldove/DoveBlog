import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Index', component: () => import('@/components/Index') },
        { path: '/Blog', name: 'Blog', component: () => import('@/components/Blog') },
        { path: '/Note', name: 'Note', component: () => import('@/components/Note/Layout') },
        { path: '/Admin', name: 'Admin', component: () => import('@/components/Admin/Layout') },
        { path: '/Demo', name: 'Demo', component: () => import('@/components/Demo/Layout') },
    ]
})
