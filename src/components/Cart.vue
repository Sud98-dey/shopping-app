<template>
  <div>
  <header> <b-button to="/home" variant="primary"> Home </b-button></header><hr>
<b-card header-tag="h1" footer-tag="footer" body-tag="b" style="font-size:2rem;" v-if="cart.length>0">
<b-card-header> Product Details </b-card-header>
<b-card-body style="font-size:1rem;" v-for="(item,i) in cart" :key="i">
  <b-row>
<b-col> Product_ID </b-col> <b-col> Product_Brand </b-col>
<b-col> Quantity </b-col><b-col> Price </b-col><b-col>  </b-col>
</b-row>
<b-row>
<b-col> {{ cart[i].product_id}} </b-col> <b-col> {{ cart[i].product_name }} </b-col>
<b-col> 1 </b-col><b-col> {{ cart[i].unit_price }} </b-col>
<b-col> <b-button variant="danger" @click="removeFromCart(i)"> Remove</b-button></b-col>
</b-row><hr>

</b-card-body>
<b-card-footer> Total Items : {{ cart.length }} </b-card-footer>
</b-card>
<p v-else> <b-spinner variant="primary"> </b-spinner> Loading... </p>
  </div>
</template>
<script>
import { bus } from '../main.js'
export default {
  data () { return { cart: [] } },
  created () {
    bus.$on('addItem', (data) => { console.log(data) })
    this.cart = this.$store.getters.CartData
  },
  methods: { removeFromCart (index) { this.$store.commit('removeFromCart', index) } }
}
</script>
