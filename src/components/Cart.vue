/* eslint-disable keyword-spacing */
<template>
  <b-container fluid="sm">
  <header> <b-button to="/home" variant="primary"> Home </b-button></header><hr>
<b-card header-tag="h1" footer-tag="footer"
body-tag="b" v-if="cart.length>0">
<b-card-header  style="font-size:2rem;"> Product Details </b-card-header>
<b-card-body style="font-size:10pt;">
  <b-row>
<b-col> Product_ID </b-col> <b-col> Product_Brand </b-col>
<b-col> Quantity </b-col><b-col> Price </b-col><b-col>  </b-col>
</b-row><hr>
<b-row v-for="(item,i) in cart" :key="i">
<b-col> {{ cart[i].product_id}} </b-col> <b-col> {{ cart[i].product_name }} </b-col>
<b-col> <b-form-spinbutton id="sb-inline" min=1 v-model="Qty[i]" size="sm"
:max=cart[i].quantity inline> </b-form-spinbutton> </b-col>
<b-col> {{parseInt(cart[i].unit_price)*Qty[i] }} </b-col>
<b-col> <b-button variant="danger" @click="removeFromCart(i)" size="sm"> Remove</b-button></b-col>
<hr></b-row>
<b-row>
  <b-col aria-colspan="3"> Total: </b-col>
  <b-col>
{{  total  }}
  </b-col>
</b-row>

</b-card-body>
<b-card-footer> Total Items : {{ cart.length }} </b-card-footer>
</b-card>
<p v-else><b-button><b-spinner variant="primary"> </b-spinner> Loading...</b-button> </p>
  </b-container>
</template>
<script>
import { bus } from '../main.js'
export default {
  data () { return { cart: [], Qty: [] } },
  created () {
    bus.$on('addItem', (data) => { console.log(data) })
    this.cart = this.$store.getters.CartData
    this.addQuantity()
  },
  methods: {
    removeFromCart (index) { this.$store.commit('removeFromCart', index) },
    addQuantity () {
      for (let i = 0; i <= this.cart.length; i++) { this.Qty[i] = 1 }
    }
  },
  computed: {
    total () {
      if (this.cart.length > 0) {
        var sum = 0
        // eslint-disable-next-line space-before-blocks
        for (const c in this.cart){ sum = sum + c.unit_price; console.log(sum) }
        return sum
      }
      return 0
    }
  }
}
</script>
