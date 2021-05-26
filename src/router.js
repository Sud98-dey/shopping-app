import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from './components/Product.vue'
import Cart from './components/Cart.vue'
import Home from './components/Home.vue'
import NoteBooks from './components/NoteBooks.vue'
import Mobile from './components/Mobile.vue'
import EditProduct from './components/EditProduct.vue'
Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/product/:id', component: Product, scroll: 0 },
  { path: '/Edit/:id', component: EditProduct, scroll: 0 },
  { path: '/cart', component: Cart },
  { path: '/NoteBooks', component: NoteBooks },
  { path: '/Mobile', component: Mobile }
]
const router = new VueRouter(
  { mode: 'history', routes })
export default router
