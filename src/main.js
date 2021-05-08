import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { IconsPlugin, BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin); Vue.use(BootstrapVue)
// Vue.component('b-card', BCard) Vue.component('b-container', BContainer); Vue.component('b-card-text', BCardText)
// Vue.component('b-col', BCol); Vue.component('b-row', BRow)Vue.component('b-button', BButton)

Vue.config.productionTip = false
new Vue({
  render: h => h(App), router
}).$mount('#app')
