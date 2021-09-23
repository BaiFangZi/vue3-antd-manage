export default [
  {
    path: '/realProject',
    name: 'RealProject',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'realProject',
      auth: ['admin', 'user'],
      icon: 'ProjectOutlined',
    },
    redirect: {
      path: 'complexTable',
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
      {
        path: '/axiosCancel',
        name: 'AxsioCancel',
        component: () => import('@/views/realProject/axiosCancel/index.vue'),
        meta: {
          title: 'axiosCancel',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/download',
        name: 'Download',
        component: () => import('@/views/realProject/download/index.vue'),
        meta: {
          title: 'download',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/websocket',
        name: 'WebSocket',
        component: () => import('@/views/realProject/websocket/index.vue'),
        meta: {
          title: 'websocket',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/virtualList',
        name: 'VirtualList',
        component: () => import('@/views/realProject/virtualList/index.vue'),
        meta: {
          title: 'virtualList',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/lazyLoad',
        name: 'LazyLoad',
        component: () => import('@/views/realProject/lazyLoad/index.vue'),
        meta: {
          title: 'lazyLoad',
          auth: ['admin', 'user'],
        },
      },
    ],
  },
]
