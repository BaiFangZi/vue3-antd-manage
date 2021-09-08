const state = {
  lang: localStorage.getItem('language') || 'zh_CN',
  auth: localStorage.getItem('access-token') || '',
  aMapKey: localStorage.getItem('amap-key') || '',
}
const getters = {
  getAMapKey: (state) => state.aMapKey,
}
const mutations = {
  SET_LANG(state, lang) {
    state.lang = lang
    localStorage.setItem('language', lang)
  },
  SET_AMAP_KEY(state, aMapKey) {
    state.aMapKey = aMapKey
    localStorage.setItem('amap-key', aMapKey)
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
