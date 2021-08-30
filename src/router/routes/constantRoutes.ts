export default [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: 'layout',
      icon: '',
      auth: ['admin', 'normal'],
      // noHidden: true,
    },
    redirect: '/dashboard',
    children: [],
  },
  {
    path: '/404NotFound',
    name: 'NotFound',
    component: () => import('@/views/404NotFound/index.vue'),
    meta: {
      title: 'notFound',
      icon: '',
      auth: ['admin', 'normal'],
      // noHidden: true,
    },
  },

  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   redirect: '/404NotFound',
  // },
]
