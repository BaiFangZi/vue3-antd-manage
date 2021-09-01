import { createI18n } from 'vue-i18n'

import zh_CN from './zh-CN'
import en from './en'

const i18n = createI18n({
  // legacy: false, // Composition API 模式
  globalInjection: true, // 全局注册 $t
  locale: localStorage.getItem('language') || 'zh_CN',
  messages: {
    zh_CN,
    en,
  },
})

export default i18n
