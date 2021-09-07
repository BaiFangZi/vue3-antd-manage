export default [
  {
    path: '/plugin',
    name: 'Plugin',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'plugin',
      auth: ['admin', 'user'],
      icon:'BulbOutlined'
    },
    children: [
      {
        path: '/excel',
        name: 'Excel',
        component: () => import('@/views/plugins-demo/excelfile.vue'),
        meta: {
          title: 'excel',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/zip',
        name: 'Zip',
        component: () => import('@/views/plugins-demo/zipfile.vue'),
        meta: {
          title: 'zip',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/print',
        name: 'Print',
        component: () => import('@/views/plugins-demo/print.vue'),
        meta: {
          title: 'print',
          auth: ['admin', 'user'],
        },
      },
    ],
  },
]
