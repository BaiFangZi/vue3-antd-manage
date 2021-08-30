import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// 全局样式
import '@/assets/global.scss'

const app = createApp(App)

app.use(router).mount('#app')
