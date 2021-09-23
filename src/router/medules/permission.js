export default [
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'permission',
      auth: ['admin', 'user'],
      icon: 'KeyOutlined',
    },
    redirect: {
      path: '/btnPermission',
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
        path: '/adminPermission',
        name: 'AdminPermission',
        component: () => import('@/views/permission/adminPermission.vue'),
        meta: {
          title: 'adminPermission',
          auth: ['admin'],
        },
      },
      {
        path: '/userPermission',
        name: 'UserPermission',
        component: () => import('@/views/permission/userPermission.vue'),
        meta: {
          title: 'userPermission',
          auth: ['user'],
        },
      },
    ],
  },
]
