import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from './components/Product.vue'
import Cart from './components/Cart.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/home' }, { path: '/home', component: Home },
  { path: '/product/:id', component: Product }, { path: '/cart', component: Cart }
]
const router = new VueRouter(
  { mode: 'history', routes })
export default router
