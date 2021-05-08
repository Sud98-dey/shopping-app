<template>
  <div>
    <h1>Product Page </h1><br>
   <p>
     <img src="../assets/dell_15.jpg"> <br>
     {{ Product.product_name }} | {{ Product.category}} <br>
    <b> Rs.{{ Product.unit_price}} </b>
  <br>
  <router-link to="/cart"> Add To Cart </router-link>
  </p>
  </div>
</template>
<script>
import { Service } from '../service.js'
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
    }
  }
}
</script>
