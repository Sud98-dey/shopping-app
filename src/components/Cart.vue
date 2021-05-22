/* eslint-disable keyword-spacing */
<template #body>
<section>
  <b-container aria-setsize="justify">
  <b-card
      header-tag="h1" footer-tag="footer"
      body-tag="b" v-if="cart.length > 0"
    >
      <b-card-header class="cardHeader-font"> Product Details </b-card-header>
      <b-card-body class="cardBody-font">

        <b-table striped :items="cart" :fields="fields" responsive >
          <template #cell(quantity)="data">
            <b-form-spinbutton inline min="1" :max="data.item.maxQty"
            v-model="data.item.quantity"> </b-form-spinbutton>
          </template>
          <template #cell(Price)="data">
            {{ data.item.product_price * data.item.quantity }}
          </template>
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
      <b-button>
        <b-spinner variant="primary"> </b-spinner> Loading...
      </b-button>
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
      fields: [// Fields to be mentioned in table
        { key: 'product_name', label: 'Name' },
        'Price', 'quantity', 'Actions']
    }
  },
  mounted () {
    this.cart = this.$store.getters.CartData
  },
  methods: {
    removeFromCart (index) { // Removing item from cart
      this.$store.commit('removeFromCart', index)
    }
  }, // Method Block ends
  computed: {
    total () { // Calculating total price of items in cart
      let sum = 0
      this.cart.map(item => { sum += (item.product_price * item.quantity) })
      return sum
    }
  }// End of Computed Block
}
</script>
<style scoped>
.cardHeader-font {font-size: 2rem }; .cardBody-font {font-size: 10pt}
</style>
