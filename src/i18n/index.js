import { message } from 'ant-design-vue'
import { createI18n } from 'vue-i18n'




async function createI18nOptions() {
  const locale = localStorage.getItem('language') || 'zh_CN'
  let messagesDefault = await import(`./${locale}`)
  let messages = messagesDefault.default
  return {
    // legacy: false, // Composition API 模式
    globalInjection: true, // 全局注册 $t
    locale,
    messages: {
      [locale]: messages,
    },
  }
}

export let i18n

export async function setupI18n(app) {
  const options = await createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
}
