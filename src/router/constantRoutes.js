export const constantRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    redirect:'/dashboard',
    children: [],
  },
]
