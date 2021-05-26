import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import nav from './components/Nav.vue'
import {
  IconsPlugin,
  BContainer,
  BRow,
  BCol,
  BCard,
  BButton,
  BFormInput,
  BAlert,
  BIcon,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavItem,
  BFormSpinbutton,
  BCardText,
  BCardImg,
  BCardHeader,
  BCardBody,
  BCardFooter
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(IconsPlugin)
Vue.component('app-nav', nav)
Vue.component('b-container', BContainer)
Vue.component('b-form-input', BFormInput)
Vue.component('b-col', BCol)
Vue.component('b-row', BRow)
Vue.component('b-card', BCard)
Vue.component('b-alert', BAlert)
Vue.component('b-icon', BIcon)
Vue.component('b-button', BButton)
Vue.component('b-navbar', BNavbar)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-nav-item', BNavItem)
Vue.component('b-card-header', BCardHeader)
Vue.component('b-card-text', BCardText)
Vue.component('b-card-img', BCardImg)
Vue.component('b-card-body', BCardBody)
Vue.component('b-card-footer', BCardFooter)
Vue.component('b-form-spinbutton', BFormSpinbutton)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
