export default [
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/setting/index.vue'),
      },
    ],
  },
  
]
