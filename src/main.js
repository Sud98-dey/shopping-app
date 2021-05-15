import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import nav from './components/Nav.vue'
import { IconsPlugin, BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin); Vue.use(BootstrapVue); Vue.component('app-nav', nav)
Vue.config.productionTip = false
new Vue({
  render: h => h(App), router, store
}).$mount('#app')
