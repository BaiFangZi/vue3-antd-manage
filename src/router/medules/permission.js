export default [
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'permission',
      auth: ['admin', 'user'],
    },
    children: [
      {
        path: '/btnPermission',
        name: 'BtnPermission',
        component: () => import('@/views/permission/btnPermission.vue'),
        meta: {
          title: 'btnPermission',
          auth: ['admin', 'user'],
        },
      },

      {
        path: '/pagePermission',
        name: 'PagePermission',
        component: () => import('@/views/permission/pagePermission.vue'),
        meta: {
          title: 'pagePermission',
          auth: ['admin', 'user'],
        },
      },
    ],
  },
]
