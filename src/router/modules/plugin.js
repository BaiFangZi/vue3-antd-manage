export default [
  {
    path: '/plugin',
    name: 'Plugin',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'plugin',
      auth: ['admin', 'user'],
      icon: 'BulbOutlined',
    },
    redirect: {
      path: '/excel',
    },
    children: [
      {
        path: '/excel',
        name: 'Excel',
        component: () => import('@/views/plugins-demo/excel.vue'),
        meta: {
          title: 'excel',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/zip',
        name: 'Zip',
        component: () => import('@/views/plugins-demo/zip$.vue'),
        meta: {
          title: 'zip',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/pdf',
        name: 'PDF',
        component: () => import('@/views/plugins-demo/pdf.vue'),
        meta: {
          title: 'pdf',
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
      {
        path: '/richEditor',
        name: 'RichEditor',
        component: () => import('@/views/plugins-demo/richEditor.vue'),
        meta: {
          title: 'richEditor',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/markdown',
        name: 'MarkDown',
        component: () => import('@/views/plugins-demo/markdown.vue'),
        meta: {
          title: 'markdown',
          auth: ['admin', 'user'],
        },
      },
    ],
  },
]
