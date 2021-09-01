const state = {
  lang: localStorage.getItem('language') || 'zh_CN',
}
const getters = {}
const mutations = {
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
