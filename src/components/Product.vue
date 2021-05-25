<template>
  <div>
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
        <b-form-input v-model="quantity" type="number"> </b-form-input>
          <b-form-spinbutton :max="Product.quantity"
          id="sb-inline" v-model="quantity" inline ></b-form-spinbutton>
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
        <b-alert variant="danger" show v-if="!avail">
          Enter quantity less than {{ Product.quantity }}.</b-alert>
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
      Service.get('products.json', {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
        .then((res) => {
          this.Product = res.data.find((item) => this.Id === item.product_id)
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
          product_price: this.Product.unit_price,
          quantity: this.quantity,
          maxQty: this.Product.quantity
        }); this.$router.push('/cart')
      }
    }
  }
}
</script>
<style scoped>
.style { padding-top: 2ch; padding-bottom: 2ch; image-resolution: auto;
font-size: 1rem; font: optional; max-width: 350px;}
p { font-family:Cambria, Cochin, Georgia,'Times New Roman';font-size: 1.5rem;}
</style>
