import { i18n } from '@/i18n'
import { unref, computed } from 'vue'
import app from '@/store/app'
export function useLocal() {
  const curLocale = computed(() => app.state.lang)
  const globalI18n = i18n.global
  async function changeLang(locale) {
    // const curLocale = unref(globalI18n.locale)
    let messages = (await import(`../i18n/${locale}`)).default
    globalI18n.setLocaleMessage(locale, messages)
  }

  return { changeLang, curLocale }
}
