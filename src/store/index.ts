// console.log(0)
import routerTags from './modules/routerTags'
import _console from './modules/console'
import app from './modules/app'
import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

import { RouterTagsStateType } from './modules/routerTags/state'
import { ConsoleStateType } from '@/store/modules/console/state'
import { AppStateType } from '@/store/modules/app/state'
import { ColSize } from 'ant-design-vue/lib/grid/Col'
// vuex state 的模块的类型
type StateType = {
  routeTages: RouterTagsStateType
  console: ConsoleStateType
  app: AppStateType
}

export const key: InjectionKey<Store<StateType>> = Symbol()
// console.log(23)
// const files = require.context('./modules', true, /\.ts$/)
// console.log(files)
// const modules: any = {}

// files.keys().forEach(key => {
//   if (key === './index.ts') return
//   const path = key.replace(/(\.\/|\.ts)/g, '')
//   const [namespace, imported] = path.split('/')
//   if (!modules[namespace]) {
//     modules[namespace] = {
//       namespaced: true
//     }
//   }
//   modules[namespace][imported] = files(key).default
// })

const store: Store<StateType> = createStore({
  strict: true,
  modules: {
    routerTags,
    console: _console,
    app,
  },
})

export default store
