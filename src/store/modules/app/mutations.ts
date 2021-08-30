// import { $i18n } from 'vue'
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  SET_TOKEN(state, token) {
    state.token = token
    // console.log(token)
    localStorage.setItem('access-token', token)
  },
  CLEAR_TOKEN(state) {
    state.token = ''
    if (!!localStorage.getItem('access-token')) {
      localStorage.removeItem('access-token')
    }
  },
  SET_LANG(state, lang) {
    // console.log(lang)
    const antdLang = lang === 'zh' ? zh_CN : null
    state.antdLang = antdLang
    state.lang = lang
    localStorage.setItem('lang', lang)
  },
}
