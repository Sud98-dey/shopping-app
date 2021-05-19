<template>
  <div>
    <app-nav></app-nav>
<b-container class="Cwidth">
 <b-row cols-md="3" no-gutters>
  <b-card class="width"
      border-variant="light"
      align="center"
      v-for="(p, index) in Products"
        :key="p.product_id">
<b-card-header header-bg-variant="primary" header-text-variant="light">
  {{ p.product_name}} </b-card-header><br>
      <b-card-text>
        <router-link :to="'/product/' + index">
        <img :src="p.image" width="60%" />
        </router-link></b-card-text>
       <b-alert show v-if="p.quantity<=5"> Only! 5 items left. hurry... </b-alert>

       <b-row align-h="around" tag="b">Price: {{ p.unit_price }}</b-row>

      </b-card>
 </b-row>
 </b-container>
  </div>
</template>
<script>
import { Service } from '../service.js'
export default {
  data () {
    return { Products: [], total: this.$store.getters.CartData.length }
  },
  created () {
    this.getAllProducts()
  },
  methods: {
    getAllProducts () { // Fetching products from Database
      Service.get('products.json', {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
        .then((res) => {
          this.Products = res.data
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>
<style scoped>
.width{ max-width: 25rem;}; .Cwidth{ width: 120rem;}
</style>
