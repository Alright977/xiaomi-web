import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户名
    username: '',
    // 购物车商品数量
    cartCount: 0,
  },
  mutations: {
    saveUserName(state, username) {
      state.username = username
    },
    saveCartCount(state, cartCount) {
      state.cartCount = cartCount
    },
  },
  actions: {
    saveUserName({ commit }, username) {
      commit('saveUserName', username)
    },
    saveCartCount({ commit }, cartCount) {
      commit('saveCartCount', cartCount)
    },
  },
  modules: {},
})
