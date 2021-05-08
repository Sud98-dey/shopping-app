<template>
  <div>
    <b-container>
    <header><h2>Product Details</h2></header>
    </b-container><br>
   <b-container>
   <img src="../assets/dell_15.jpg" width="400"><br>
   <b-row tag="p" style="font-size:2rem;">
    <b-col tag="strong"> Brand:  {{ Product.product_name }} </b-col><hr>
    <b-col tag="p">Category: {{ Product.category}}</b-col><hr>
    <b-col tag="p"> Price: Rs.{{ Product.unit_price}} </b-col><hr>
  <b-col order-sm="2"><b-button to="/cart" variant="primary" size="lg" @click="addToCart">
  <b-icon icon="cart" aria-rowspan="2"></b-icon> Add To Cart</b-button></b-col>
   </b-row></b-container>
  </div>
</template>
<script>
import { Service } from '../service.js'
import { bus } from '../main.js'
export default {
  data () {
    return { Product: null, Id: this.$route.params.id }
  },
  mounted () { this.getProduct() },
  methods: {
    getProduct () {
      // eslint-disable-next-line no-template-curly-in-string
      Service.get(`products/${this.Id}.json`, { headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(res => { this.Product = res.data })
        .catch(error => console.log(error))
    },
    addToCart () {
      bus.$emit('addItem', this.Product)
      this.$store.dispatch('addToCart', this.Product)
    }
  }
}
</script>
