import { findIndex } from 'lodash'
import { RouteLocationNormalized } from 'vue-router'
import { RouterTagsStateType } from './state'
const excludeTags = ['/dashboard', '/login', '/']

export default {
  SET_ROUTER_TAGS(state: RouterTagsStateType, route: RouteLocationNormalized) {
    // console.log(route)
    const { fullPath, path, meta } = route
    if (!excludeTags.includes(path)) {
      if (state.keepLiveTags.some((i) => i.fullPath === route.fullPath))
        return false
      state.keepLiveTags.push({
        title: meta.title as string,
        fullPath,
        path,
      })
    }
  },
  DELETE_ROUTE_TAGS(
    state: RouterTagsStateType,
    route: RouteLocationNormalized
  ) {
    // console.log(state.keepLiveTags)
    // console.log(route)
    const index = findIndex(state.keepLiveTags, route)
    // console.log(index)
    if (index === -1) return false
    state.keepLiveTags.splice(index, 1)
  },
}
