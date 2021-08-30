import { createApp } from 'vue'
// import { setupAntd } from '@/plugins'
import router from '@/router'
import store from '@/store'
import App from './App.vue'
const app = createApp(App)
import Antd from 'ant-design-vue'
// import * as Echarts from 'echarts'

import 'ant-design-vue/dist/antd.css'

import './assets/global.css'

// import './mock'
// import { formatMenu } from './layout/components/sideBar/formatMenu'

app.use(Antd)
app.use(store)
// app.config.globalProperties.$echarts = Echarts

import Directives from './directives'
// console.log(Directives)
// app.directive()
Object.keys(Directives).forEach((k) => app.directive(k, Directives[k]))
// console.log()
// setupAntd(app)

app.use(router).mount('#app')

const whiteRoutes = ['/login'] //路由白名单

router.beforeEach((to, from, next) => {
  // NProgress.start()
  const token = localStorage.getItem('access-token')

  if (token) {
    //如果有token
    if (to.path === '/login') {
      //想跳转找到login页面
      next() //允许跳转

      // NProgress.done()
    } else {
      //想跳转到其他页面
      const menuList = store.state.console.menuList
      if (!menuList.length) {
        // const auth = JWT.decode(token)
        // console.log(auth)
        store.commit('console/GENERATE_ROUTER', token)
        next({
          ...to,
          replace: true,
        })

        // NProgress.done()
      } else {
        next()
        // NProgress.done()
      }
    }
  } else {
    //如果没有token
    // console.log('no token')
    if (whiteRoutes.indexOf(to.path) !== -1) {
      //设置login白名单，防止login无token时陷入死循环
      console.log(to.path)
      next()

      // NProgress.done()
    } else {
      //如果不是login，跳到login登陆去获取token
      next('/login')

      // NProgress.done()
    }
  }
})
router.afterEach((to, from) => {
  // console.log(from)
  store.commit('routerTags/SET_ROUTER_TAGS', to)
})
