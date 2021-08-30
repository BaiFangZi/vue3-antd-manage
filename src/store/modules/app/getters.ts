import {state} from './state'
export default {
  getToken() {
    return localStorage.getItem('access-token')
  },
  getLang() {
    return localStorage.getItem('lang')
  },
  getAntdLang() {
    return state.antdLang
  },
}
