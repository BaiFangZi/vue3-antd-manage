import nestMenu from './modules/nestMenu'
import component from './modules/component'
import plugin from './modules/plugin'
import chart from './modules/chart'
import permission from './modules/permission'
import realProject from './modules/realProject'
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
      isHidden: true,
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
