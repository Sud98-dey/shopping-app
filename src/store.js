import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: { cart: [] },
  mutations: {
    addToCart (state, product) { state.cart.unshift(product) },
    removeFromCart (state, i) { state.cart.splice(i, 1) }
  },
  actions: { addToCart ({ commit }, data) { commit('addToCart', data) } },
  getters: { CartData (state) { return state.cart } }
})
