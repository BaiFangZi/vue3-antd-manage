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
      {
        path: '/drag',
        name: 'Drag',
        component: () => import('@/views/realProject/drag/index.vue'),
        meta: {
          title: 'drag',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/keep-alive-component',
        name: 'KeepAliveComponent',
        component: () => import('@/views/realProject/keepAliveComponent/index.vue'),
        meta: {
          title: 'keepAliveComponent',
          auth: ['admin', 'user'],
          // noHidden: false,
        },
        children: [
          {
            path: '/aliveRouter1',
            name: 'AliveRouter1',
            component: () => import('@/views/realProject/keepAliveComponent/aliveRouter1.vue'),
            meta: {
              title: 'aliveRouter1',
              auth: ['admin', 'user'],
              noHidden: true,
            },
          },
          {
            path: '/aliveRouter2',
            name: 'AliveRouter2',
            component: () => import('@/views/realProject/keepAliveComponent/aliveRouter2.vue'),
            meta: {
              title: 'aliveRouter2',
              auth: ['admin', 'user'],
              noHidden: true,
            },
          },
          {
            path: '/aliveRouter3',
            name: 'AliveRouter3',
            component: () => import('@/views/realProject/keepAliveComponent/aliveRouter3.vue'),
            meta: {
              title: 'aliveRouter3',
              auth: ['admin', 'user'],
              noHidden: true,
            },
          },
        ],
      },
      {
        path: '/smallProblems',
        name: 'SmallProblems',
        component: () => import('@/views/realProject/smallProblems/index.vue'),
        meta: {
          title: 'smallProblems',
          auth: ['admin', 'user'],
          noHidden: true,
        },
      },
    ],
  },
]
