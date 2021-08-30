import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    // component: () => import('@/views/login/index.vue'),
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登陆',
      icon: '',
      auth: ['admin', 'normal'],
      // noHidden: true,
    },
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
