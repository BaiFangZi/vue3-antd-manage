// import state from './state'
import router from '@/router'
import asyncRoutes from '@/router/routes/asyncRoutes'
import constantRoutes from '@/router/routes/constantRoutes'

import { findIndex, remove } from 'lodash'
// import router from '../../../router'

export default {
  GENERATE_ROUTER(state, auth) {
    console.log(1)
    const layout = constantRoutes.find((v) => v.path === '/')
    // const auth=localStorage.getItem
    const authRoutes = traversalRoutes(asyncRoutes, auth)
    // console.log('当前权限的路由', authRoutes)
    layout.children = state.menuList = authRoutes
    console.log(layout)
    // router.addRoute(syncRoutes)
    // router.addRoute(layout)
    constantRoutes.forEach((r) => router.addRoute(r))

    console.log(router)
  },
}
function traversalRoutes(routes, userAuth) {
  // console.log(userAuth)
  const result = []
  // console.log(routes
  routes.forEach((r) => {
    const { auth } = r.meta
    const userRoute = { ...r }
    if (auth.includes(userAuth)) {
      //找到用户身份对应的路由
      if (r.children && r.children.length) {
        //有子路由的话去递归
        userRoute.children = traversalRoutes(r.children, userAuth)
      }
      result.push(userRoute)
    }
  })
  return result
}
