import nestMenu from './medules/nestMenu'
import component from './medules/component'
import plugin from './medules/plugin'
import chart from './medules/chart'
import permission from './medules/permission'
import realProject from './medules/realProject'
export const asyncRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: 'dashboard', // 名称
      auth: ['admin', 'user'], // 权限
      icon: 'DashboardOutlined',
      // noHidden: true,  // 是否隐藏
    },
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('@/views/setting/index.vue'),
    meta: {
      title: 'setting',
      auth: ['admin', 'user'],
      icon: 'SettingOutlined',
      noHidden: true,
    },
  },
  ...nestMenu,
  ...component,
  ...plugin,
  ...chart,
  ...permission,
  ...realProject,
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
    meta: {
      auth: ['admin', 'user'],
      title: 'about',
    },
  },
]
