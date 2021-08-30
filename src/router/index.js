import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path:'/login',
    name:'Login',
    component:()=>import ('@/views/login/index.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
console.log(router)

export default router
