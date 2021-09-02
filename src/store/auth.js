import router, { constantRoutes, asyncRoutes } from '@/router'
import { loginIn } from '@/api/user'
import { start } from 'nprogress'

const state = {
  auth: localStorage.getItem('access-token') || '',
  menuList: [],
}
const getters = {
  token: () => {
   
    localStorage.setItem('access-token', state.auth)
    return state.auth
  },
}
const mutations = {
  // SET_AUTH(state, auth) {
  //   state.auth = auth
  //   // localStorage.setItem('access-token', auth)
  // },
  GENERATE_ROUTES(state, auth) {
    const layout = constantRoutes.find((item) => item.path === '/')
    const authRoutes = traversalRoutes(asyncRoutes, auth)
    layout.children = [...authRoutes]
    state.menuList = authRoutes
    state.auth = auth
    router.addRoute(layout)
  },
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

function traversalRoutes(routes, auth) {
  const result = []
  routes.forEach((r) => {
    const { meta, children } = r
    if (meta.auth.includes(auth)) {
      //找到用户身份对应的路由
      if (children && children.length) {
        //有子路由的话去递归
        children = traversalRoutes(children, auth)
      }
      result.push(r)
    }
  })
  return result
}
