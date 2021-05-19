import Vue from 'vue'
import Vuex from 'vuex'
import createMultiTabState from 'vuex-multi-tab-state'
Vue.use(Vuex)
export default new Vuex.Store({
  state: { cart: [] },
  mutations: {
    addToCart (state, product) {
      const record = state.cart.find(item => item.product_id === product.product_id)
      if (record) {
        record.quantity = product.quantity
      } else { state.cart.push(product) }
    },
    removeFromCart (state, i) { state.cart.splice(i, 1) }
  },
  actions: { addToCart ({ commit }, data) { commit('addToCart', data) } },
  getters: { CartData (state) { return state.cart } },
  plugins: [createMultiTabState()]
})
