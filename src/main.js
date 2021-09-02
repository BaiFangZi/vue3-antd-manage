import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
// 全局样式
import '@/assets/global.scss'

router.beforeEach((to, from, next) => {
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

const app = createApp(App)

app.use(store).use(router).use(i18n).mount('#app')
