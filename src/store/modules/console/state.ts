// export default {
//   menuList: [],
// }

import { RouteRecordRaw } from 'vue-router'

export type ConsoleStateType = {
  menuList: RouteRecordRaw[]
}

export const state: ConsoleStateType = {
  menuList: [],
}
