import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import { IconsPlugin, BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin); Vue.use(BootstrapVue)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: { cart: [] },
  mutations: {
    addToCart (state, product) { state.cart.unshift(product) },
    removeFromCart (state, i) { state.cart.splice(i, 1) }
  },
  actions: { addToCart ({ commit }, data) { commit('addToCart', data) } },
  getters: { CartData (state) { return state.cart } }
})
Vue.config.productionTip = false
export const bus = new Vue()
new Vue({
  render: h => h(App), router, store
}).$mount('#app')
