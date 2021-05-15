<template>
  <div>
    <app-nav></app-nav>
    <b-container>
      <header>
        <h2>Product Details</h2>
      </header>
    </b-container>
    <br />
<b-container>

    <b-card  no-body class="overflow-hidden">
<b-row no-gutters>
  <b-col md="6">
  <b-card-img
class="rounded-0 style" alt="Image"
:src="Product.image"></b-card-img>
  </b-col>
<b-col md="6">
<b-card-body>
        <b-card-text tag="p"> Brand: {{ Product.product_name }} </b-card-text>

        <b-card-text tag="p">Category: {{ Product.category }}</b-card-text>

        <b-card-text tag="p"> Price: Rs.{{ Product.unit_price }} </b-card-text>
        <b-card-text tag="p">
          <b-input placeholder="Enter the Quantity..."> </b-input>
        </b-card-text>
<br v-for="space in 4" :key="space">
        <b-card-text tag="p">
        <b-row aria-setsize="lg">
          <b-button to="/cart" variant="primary" aria-setsize="lg" size="lg" @click="addToCart">
            <b-icon icon="cart" aria-rowspan="2"></b-icon> Add To Cart</b-button>
        </b-row>
        </b-card-text>

        </b-card-body>
        </b-col>
    </b-row>
    </b-card>
    </b-container>
  </div>
</template>
<script>
import { Service } from '../service.js'
export default {
  data () {
    return { Product: null, Id: this.$route.params.id }
  },
  mounted () {
    this.getProduct()
  },
  methods: {
    getProduct () { // Fetching specific product from dataBase
      // eslint-disable-next-line no-template-curly-in-string
      Service.get(`products/${this.Id}.json`, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
        .then((res) => {
          this.Product = res.data
        })
        .catch((error) => console.log(error))
    },
    addToCart () { // Adding items to cart
      this.$store.dispatch('addToCart', this.Product)
    }
  }
}
</script>
<style scoped>
.style { font-size: 2rem; font: optional; max-width: 500px;}
p { font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman';
font-size: 3.4rem;}
</style>
