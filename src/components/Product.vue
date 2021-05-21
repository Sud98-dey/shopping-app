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
        :src=Product.image></b-card-img>
      </b-col>
  <b-col md="6">
  <b-card-body>
          <b-card-text tag="p"> Brand: {{ Product.product_name }} </b-card-text>

          <b-card-text tag="p">Category: {{ Product.category }}</b-card-text>

          <b-card-text tag="p"> Price: Rs.{{ Product.unit_price }} </b-card-text>
          <b-card-text tag="p">
            <b-row  aria-rowspan="3">
            <b-col>
              <label> Quantity: </label>
            </b-col>
          <b-col>
            <b-form-input
          type="number" min=1 class="input"
          v-model="quantity"> </b-form-input>
          </b-col>
          </b-row>
          </b-card-text>
<br v-for="space in 4" :key="space">
        <b-card-text tag="p">
          <b-row aria-setsize="lg">
            <b-button  variant="primary"
            aria-setsize="lg" size="lg"
            @click="addToCart">
          <b-icon icon="cart" aria-rowspan="2"></b-icon> Add To Cart</b-button>
        </b-row>
      </b-card-text>
      <b-card-text class="style">
        <b-alert variant="danger" show v-if="!avail">  Enter less quantity.</b-alert>
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
    return { Product: null, Id: this.$route.params.id, quantity: 1, avail: true }
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
      if (this.quantity > this.Product.quantity) {
        this.avail = !this.avail
      } else {
        this.$store.dispatch('addToCart', {
          product_id: this.Product.product_id,
          product_name: this.Product.product_name,
          product_price: this.Product.unit_price * this.quantity,
          quantity: this.quantity
        }); this.$router.push('/cart')
      }
    }
  }
}
</script>
<style scoped>
.style { font-size: 2rem; font: optional; max-width: 500px;}
p { font-family:Cambria, Cochin, Georgia,'Times New Roman';font-size: 3.4rem;}
.input { width: 200px; font-size: 3rem; font: optional;}
</style>
