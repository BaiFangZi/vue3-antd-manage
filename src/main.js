import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store'
import { setupI18n } from '@/i18n'
// import {setupAntd} from '@/plugins/antd'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import nProgress from '@/plugins/nProgress'
// 全局样式
import '@/assets/global.scss'
import '@/assets/common.scss'

router.beforeEach((to, from, next) => {
  nProgress.start()
  const token = store.getters['auth/token']
  console.log(token)
  // next()
  if (to.path === '/login') {
    // 如果要跳转搭login
    next()
  } else {
    // 存在token
    if (!!token) {
      const menuList = store.state.auth.menuList
      //  正常跳转 ，已生成路由
      if (menuList.length) {
        next()
      } else {
        //   生成路由在跳转
        const auth = token // 解析token 或者请求后台回去登陆角色
        store.commit('auth/GENERATE_ROUTES', auth)
        next({
          path: to.path,
          replace: true,
        })
        // next()
      }
    } else {
      //  不存在token
      next('/login')
    }
  }
})
router.afterEach((to, from) => {
  // to and from are both route objects.
  //  setTimeout(()=> nProgress.done(),500)

  nProgress.done()
})
const app = createApp(App)


import Has from '@/directive/has'
app.directive('has',Has)

import * as AntdIcon from '@ant-design/icons-vue'

for (let c in AntdIcon) {
  app.component(c, AntdIcon[c])
}

async function initApp(app) {
  await setupI18n(app)
  app.use(store).use(router).use(Antd).mount('#app')
}
initApp(app)
