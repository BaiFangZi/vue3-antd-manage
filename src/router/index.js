import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import constantRoutes from './constantRoutes'
// import asyncRoutes from './asyncRoutes'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { constantRoutes } from './constantRoutes'
export { asyncRoutes } from './asyncRoutes'

export default router
