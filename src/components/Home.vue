<template>
<div>
  <header>
  <b-navbar variant="primary" type="light" tag="nav">
  <b-navbar-brand href="#">Product Nav</b-navbar-brand>
<b-navbar-nav>
<b-nav-item to="/home" >Home Page</b-nav-item>
<b-nav-item to="/cart">
<b-avatar badge badge-variant="danger" badge-top
icon="cart" text="0"></b-avatar>
</b-nav-item>
</b-navbar-nav>
</b-navbar>
 </header>
  <br>
  <b-container>
  <b-card v-for="(p,index) in Products" :key="p.product_id"
  :title="p.product_name"  style="background-color: #FFFFCC " class="mb-2">
<router-link :to="'/product/' + index"><img src="../assets/dell_15.jpg"> </router-link>
<b-card-text text-tag="div">
  <b-row align-h="around"> Quantity: {{ p.quantity}} </b-row>
  <b-row align-h="around"> Price: {{ p.unit_price}} </b-row>  </b-card-text>

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
