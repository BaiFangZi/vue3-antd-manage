export default [
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('@/layout/defaultRouter.vue'),
    meta: {
      title: 'chart',
      auth: ['admin', 'user'],
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
        children: [
          {
            path: '/lineChart',
            name: 'LineChart',
            component: () => import('@/views/charts/echarts/lineChart.vue'),
            meta: {
              title: 'lineChart',
              auth: ['admin', 'user'],
            },
          },
        ],
      },
    ],
  },
]
