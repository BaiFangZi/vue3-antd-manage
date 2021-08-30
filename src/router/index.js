import { createRouter, createWebHistory } from 'vue-router'
const routes = [
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
