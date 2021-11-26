export default [
  {
    path: '/component',
    name: 'Component',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'component',
      auth: ['admin', 'user'],
      icon: 'PicCenterOutlined',
    },
    redirect: {
      path: '/table',
    },
    children: [
      {
        path: '/icon',
        name: 'Icon',
        component: () => import('@/views/components-demo/icon/index.vue'),
        meta: {
          title: 'icon',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/table',
        name: 'Table',
        component: () => import('@/layout/defaultRouter.vue'),
        meta: {
          title: 'table',
          auth: ['admin', 'user'],
        },
        redirect: {
          path: '/basic-table',
        },
        children: [
          {
            path: '/basic-table',
            name: 'BasicTable',
            component: () => import('@/views/components-demo/table/basicTable.vue'),
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
        redirect: {
          path: '/basic-form',
        },
        children: [
          {
            path: '/basic-form',
            name: 'BasicForm',
            component: () => import('@/views/components-demo/form/basicForm.vue'),
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
        redirect: {
          path: '/basic-modal',
        },
        children: [
          {
            path: '/basic-modal',
            name: 'BasicModal',
            component: () => import('@/views/components-demo/modal/basicModal.vue'),
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
        redirect: {
          path: '/basic-drawer',
        },
        children: [
          {
            path: '/basic-drawer',
            name: 'BasicDrawer',
            component: () => import('@/views/components-demo/drawer/basicDrawer.vue'),
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
        redirect: {
          path: '/basic-upload',
        },
        children: [
          {
            path: '/basic-upload',
            name: 'BasicUpload',
            component: () => import('@/views/components-demo/upload/basicUpload.vue'),
            meta: {
              title: 'basicUpload',
              auth: ['admin', 'user'],
            },
          },
          {
            path: '/big-file-upload',
            name: 'BigFileUpload',
            component: () => import('@/views/components-demo/upload/bigFileUpload.vue'),
            meta: {
              title: 'bigFileUpload',
              auth: ['admin', 'user'],
            },
          },
        ],
      },
      {
        path: '/list',
        name: 'List',
        component: () => import('@/layout/defaultRouter.vue'),
        meta: {
          title: 'list',
          auth: ['admin', 'user'],
        },
        redirect: {
          path: '/basic-list',
        },
        children: [
          {
            path: '/basic-list',
            name: 'BasicList',
            component: () =>
              // import('@/views/components-demo/list/basicList.vue'), // 出错 500
              import('@/views/components-demo/list/basicList.vue'), //正常使用
            meta: {
              title: 'basicList',
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
        redirect: {
          path: '/basic-tree',
        },
        children: [
          {
            path: '/basic-tree',
            name: 'BasicTree',
            component: () => import('@/views/components-demo/tree/basicTree.vue'),
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
