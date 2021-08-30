export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: 'dashboard',
      icon: '',
      auth: ['admin', 'normal'],
      // noHidden: true,
    },
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/table/index.vue'),
    meta: {
      title: 'table',
      icon: '',
      auth: ['admin', 'normal'],
      // noHidden: true,
    },
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: () => import('@/views/userCenter/index.vue'),
    meta: {
      title: 'userCenter',
      icon: '',
      auth: ['admin', 'normal'],
      noHidden: true,
    },
  },

  // 无限菜单
  {
    path: '/infinitePage',
    name: 'infinitePage',
    component: () => import('@/views/infinitePage/index.vue'),
    meta: {
      title: 'infinitePage',
      icon: '',
      auth: ['admin', 'normal'],
      // noHidden: true,
      noBreadcrumbLink: true, //面包屑导航，显示为普通文本
    },
    children: [
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/infinitePage/page1/index.vue'),
        meta: {
          title: 'page1',
          icon: '',
          auth: ['admin', 'normal'],
          // noHidden: false,
        },
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/infinitePage/page2/index.vue'),
        meta: {
          title: 'page2',
          icon: '',
          auth: ['admin', 'normal'],
          // noHidden: false,
          noBreadcrumbLink: true,
        },
        children: [
          {
            path: '/page2-1',
            name: 'page2-1',
            component: () =>
              import('@/views/infinitePage/page2/page2-1/index.vue'),
            meta: {
              title: 'page2_1',
              icon: '',
              auth: ['admin', 'normal'],
              // noHidden: false,
            },
          },
          {
            path: '/page2-2',
            name: 'page2-2',
            component: () =>
              import('@/views/infinitePage/page2/page2-2/index.vue'),
            meta: {
              title: 'page2_2',
              icon: '',
              auth: ['admin', 'normal'],
              // noHidden: false,
            },
          },
        ],
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('@/views/infinitePage/page3/index.vue'),
        meta: {
          title: 'page3',
          icon: '',
          auth: ['admin', 'normal'],
          // noHidden: false,
        },
        children: [
          {
            path: '/page3-1',
            name: 'page3-1',
            component: () =>
              import('@/views/infinitePage/page3/page3-1/index.vue'),
            meta: {
              title: 'page3_1',
              icon: '',
              auth: ['admin', 'normal'],
              // noHidden: false,
              noBreadcrumbLink: true,
            },
          },
          {
            path: '/page3-2',
            name: 'page3-2',
            component: () =>
              import('@/views/infinitePage/page3/page3-2/index.vue'),
            meta: {
              title: 'page3_2',
              icon: '',
              auth: ['admin', 'normal'],
              // noHidden: false,
            },
            children: [
              {
                path: '/page3-2-1',
                name: 'page3-2-1',
                component: () =>
                  import(
                    '@/views/infinitePage/page3/page3-2/page3-2-1/index.vue'
                  ),
                meta: {
                  title: 'page3_2_1',
                  icon: '',
                  auth: ['admin', 'normal'],
                  // noHidden: false,
                  noBreadcrumbLink: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  //权限管理
  {
    path: '/permission',
    name: 'permission',
    component: () => import('@/views/permission/index.vue'),
    meta: {
      title: 'permission',
      icon: '',
      auth: ['admin', 'normal'],
      noBreadcrumbLink: true,
    },
    children: [
      {
        path: '/permission/admin',
        name: 'permissionAdmin',
        component: () => import('@/views/permission/admin/index.vue'),
        meta: {
          title: 'admin',
          icon: '',
          auth: ['admin'],
        },
      },
      {
        path: '/permission/normal',
        name: 'permissionNormal',
        component: () => import('@/views/permission/normal/index.vue'),
        meta: {
          title: 'normal',
          icon: '',
          auth: ['admin', 'normal'],
        },
      },
      {
        path: '/permission/authBtn',
        name: 'permissionAuthBtn',
        component: () => import('@/views/permission/authBtn/index.vue'),
        meta: {
          title: 'permissionBtn',
          icon: '',
          auth: ['admin', 'normal'],
        },
      },
    ],
  },
  //echarts图表
  {
    path: '/charts',
    name: 'charts',
    component: () => import('@/views/charts/index.vue'),
    meta: {
      title: 'chart',
      icon: '',
      auth: ['admin', 'normal'],
    },
  },
  // 文件导出
  {
    path: '/exportFile',
    name: 'exportFile',
    component: () => import('@/views/exportFile/index.vue'),
    meta: {
      title: 'exportFile',
      icon: '',
      auth: ['admin', 'normal'],
    },
  },
  //编辑器
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/views/editor/index.vue'),
    meta: {
      title: 'editor',
      icon: '',
      auth: ['admin', 'normal'],
    },
  },
]
