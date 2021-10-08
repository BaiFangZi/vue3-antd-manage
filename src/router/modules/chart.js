export default [
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'chart',
      auth: ['admin', 'user'],
      icon: 'BarChartOutlined',
    },
    redirect: {
      path: '/aMap',
    },
    children: [
      {
        path: '/aMap',
        name: 'AMap',
        component: () => import('@/views/charts/aMap.vue'),
        meta: {
          title: 'aMap',
          auth: ['admin', 'user'],
        },
      },
      {
        path: '/bMap',
        name: 'BMap',
        component: () => import('@/views/charts/bMap.vue'),
        meta: {
          title: 'bMap',
          auth: ['admin', 'user'],
        },
      },

      {
        path: '/echarts',
        name: 'Echarts',
        component: () => import('@/layout/defaultRouter.vue'),
        meta: {
          title: 'echarts',
          auth: ['admin', 'user'],
        },
        redirect: {
          path: '/basicChart',
        },
        children: [
          {
            path: '/basicChart',
            name: 'BasicChart',
            component: () => import('@/views/charts/echarts/basicChart.vue'),
            meta: {
              title: 'basicChart',
              auth: ['admin', 'user'],
            },
          },
          {
            path: '/mapChart',
            name: 'MapChart',
            component: () => import('@/views/charts/echarts/mapChart.vue'),
            meta: {
              title: 'mapChart',
              auth: ['admin', 'user'],
            },
          },
        ],
      },
    ],
  },
]
