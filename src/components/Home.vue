<template>
<div style="background-color: #CCCCCC">
  <header>
  <b-navbar variant="primary" type="light" tag="nav">
  <b-navbar-brand href="#">Product Nav</b-navbar-brand>
<b-navbar-nav>
<b-navbar-brand to="/home" >Home Page</b-navbar-brand>
<b-nav-item to="/cart">
<b-icon icon="cart2" font-scale="2"></b-icon>
</b-nav-item>
</b-navbar-nav>
</b-navbar>
 </header>
  <br>
  <b-container>
  <b-card v-for="(p,index) in Products" :key="p.product_id"
  :title="p.product_name" class="mb-2">
<router-link :to="'/product/' + index"><img src="../assets/dell_15.jpg" width="500"> </router-link>
<b-card-text text-tag="div" style="font-size:25px; font-weight:1pt;">
  <b-row align-h="around" tag="b"> Quantity: {{ p.quantity}} </b-row>
  <b-row align-h="around" tag="b"> Price: {{ p.unit_price}} </b-row>  </b-card-text>

  </b-card></b-container>
</div>
</template>
<script>
import { Service } from '../service.js'
export default {
  data () { return { Products: [] } },
  created () { this.getAllProducts() },
  methods: {
    getAllProducts () {
      Service.get('products.json', { headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(res => { this.Products = res.data })
        .catch(error => console.log(error))
    }
  }
}
</script>
