export default [
  {
    path: '/realProject',
    name: 'RealProject',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'realProject',
      auth: ['admin', 'user'],
      icon:'ProjectOutlined'
    },
    children: [
      {
        path: '/complexTable',
        name: 'ComplexTable',
        component: () => import('@/views/realProject/complexTable/index.vue'),
        meta: {
          title: 'complexTable',
          auth: ['admin', 'user'],
        },
      },
    ],
  },
]
