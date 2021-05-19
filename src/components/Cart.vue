/* eslint-disable keyword-spacing */
<template #body>
<section>
  <app-nav></app-nav>
  <b-container fluid="sm">
    <header><b-button to="/home" variant="primary"> Home </b-button></header>

    <b-card
      header-tag="h1" footer-tag="footer"
      body-tag="b" v-if="cart.length > 0"
    >
      <b-card-header class="cardHeader-font"> Product Details </b-card-header>
      <b-card-body class="cardBody-font">
        <!--
        <b-row>
          <b-col> Product_ID </b-col> <b-col> Product_Brand </b-col>
          <b-col> Quantity </b-col><b-col> Price </b-col><b-col> </b-col>
        </b-row>

        <b-row v-for="(item, i) in cart" :key="i">
          <b-col> {{ cart[i].product_id }} </b-col>
          <b-col> {{ cart[i].product_name }} </b-col>
          <b-col>{{ cart[i].quantity }} </b-col>
          <b-col> {{ cart[i].product_price * item.quantity }} </b-col>
          <b-col>
            <b-button variant="danger" @click="removeFromCart(i)" size="sm">
                 Remove</b-button>
            </b-col>
          <hr/>
          </b-row>-->
<b-table striped :items="cart" :fields="fields" responsive >
  <template #cell(actions)="row">
    <b-button variant="danger" @click="removeFromCart(row.index)" size="sm">
      Remove</b-button>
  </template>
</b-table>

       <b-row>
          <b-col aria-colspan="3"> Total Price: </b-col>
          <b-col> {{ total }} </b-col>
        </b-row>
      </b-card-body>
      <b-card-footer> Total Items : {{ cart.length }} </b-card-footer>
    </b-card>
    <p v-else>
      <b-button><b-spinner variant="primary"> </b-spinner> Loading...</b-button>
    </p>
  </b-container>
</section>
</template>
<script>
import Vue from 'vue'
import { BSpinner, BTable, TablePlugin } from 'bootstrap-vue'
Vue.use(TablePlugin)
export default {
  components: { 'b-spinner': BSpinner, 'b-table': BTable },
  data () {
    return {
      cart: [],
      fields: [
        { product_id: 'Id' },
        { key: 'product_name', label: 'Name' },
        { product_price: 'Price' }, 'quantity', 'Actions']
    }
  },
  mounted () {
    this.cart = this.$store.getters.CartData
  },
  methods: {
    removeFromCart (index) {
      this.$store.commit('removeFromCart', index)
    }
  }, // Method Block ends
  computed: {
    total () {
      let sum = 0
      this.cart.map(item => { sum += item.product_price })
      return sum
    }
  }// End of Computed Block
}
</script>
<style scoped>
.cardHeader-font {font-size: 2rem }; .cardBody-font {font-size: 10pt}
</style>
