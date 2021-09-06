export default [
  {
    path: '/component',
    name: 'Component',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'component',
      auth: ['admin', 'user'],
    },
    children: [
      {
        path: '/table',
        name: 'Table',
        component: () => import('@/layout/defaultRouter.vue'),
        meta: {
          title: 'table',
          auth: ['admin', 'user'],
        },
        children: [
          {
            path: '/basic-table',
            name: 'BasicTable',
            component: () =>
              import('@/views/components-demo/table/basicTable.vue'),
            meta: {
              title: 'basicTable',
              auth: ['admin', 'user'],
            },
          },
        ],
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('@/layout/defaultRouter.vue'),
        meta: {
          title: 'form',
          auth: ['admin', 'user'],
        },
        children: [
          {
            path: '/basic-form',
            name: 'BasicForm',
            component: () =>
              import('@/views/components-demo/form/basicForm.vue'),
            meta: {
              title: 'basicForm',
              auth: ['admin', 'user'],
            },
          },
        ],
      },
      {
        path: '/modal',
        name: 'Modal',
        component: () => import('@/layout/defaultRouter.vue'),
        meta: {
          title: 'modal',
          auth: ['admin', 'user'],
        },
        children: [
          {
            path: '/basic-modal',
            name: 'BasicModal',
            component: () =>
              import('@/views/components-demo/modal/basicModal.vue'),
            meta: {
              title: 'basicModal',
              auth: ['admin', 'user'],
            },
          },
        ],
      },
      {
        path: '/drawer',
        name: 'Drawer',
        component: () => import('@/layout/defaultRouter.vue'),
        meta: {
          title: 'drawer',
          auth: ['admin', 'user'],
        },
        children: [
          {
            path: '/basic-drawer',
            name: 'BasicDrawer',
            component: () =>
              import('@/views/components-demo/drawer/basicDrawer.vue'),
            meta: {
              title: 'basicDrawer',
              auth: ['admin', 'user'],
            },
          },
        ],
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import('@/layout/defaultRouter.vue'),
        meta: {
          title: 'upload',
          auth: ['admin', 'user'],
        },
        children: [
          {
            path: '/basic-upload',
            name: 'BasicUpload',
            component: () =>
              import('@/views/components-demo/upload/basicUpload.vue'),
            meta: {
              title: 'basicUpload',
              auth: ['admin', 'user'],
            },
          },
        ],
      },
      {
        path: '/tree',
        name: 'Tree',
        component: () => import('@/layout/defaultRouter.vue'),
        meta: {
          title: 'tree',
          auth: ['admin', 'user'],
        },
        children: [
          {
            path: '/basic-tree',
            name: 'BasicTree',
            component: () =>
              import('@/views/components-demo/tree/basicTree.vue'),
            meta: {
              title: 'basicTree',
              auth: ['admin', 'user'],
            },
          },
        ],
      },
    ],
  },
]
