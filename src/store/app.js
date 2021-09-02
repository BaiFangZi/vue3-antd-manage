const state = {
  lang: localStorage.getItem('language') || 'zh_CN',
  auth: localStorage.getItem('access-token') || '',
}
const getters = {}
const mutations = {
  SET_LANG(state, lang) {
    state.lang = lang
    localStorage.setItem('language', lang)
  },
  SET_STATE(state, { key, value }) {
    state[key] = value
  },
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
