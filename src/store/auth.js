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
  GENERATE_ROUTES(state, auth) {
    const layout = constantRoutes.find((item) => item.path === '/')
    const authRoutes = traversalRoutes(asyncRoutes, auth)
    layout.children = [...authRoutes]
    state.menuList = authRoutes
    // console.log(authRoutes)
    state.auth = auth
    console.log(constantRoutes)
    // router.addRoute(constantRoutes)
    constantRoutes.forEach((r) => router.addRoute(r))
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
    let { meta, children } = r
    if (meta.auth.includes(auth)) {
      if (children && children.length) {
        r.children = traversalRoutes(children, auth)
      }
      result.push(r)
    }
  })
  return result
}
