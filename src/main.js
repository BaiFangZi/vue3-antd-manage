import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
// 全局样式
import '@/assets/global.scss'

const app = createApp(App)

app.use(store).use(router).use(i18n).mount('#app')
