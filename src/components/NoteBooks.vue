/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div>
    <b-container class="Cwidth">
      <b-row cols-md="3" no-gutters tag="ul">
        <b-card
          border-variant="light"
          align="center"
          tag="li"
          v-for="p in Products"
          :key="p.product_id"
        >
          <b-card-header
            header-bg-variant="primary"
            header-text-variant="light"
          >
            {{ p.product_name }}
          </b-card-header><br />
          <b-card-text>
            <router-link :to="'/product/' + p.product_id">
              <b-card-img
                class="img"
                :src="p.image"
                alt="image"
              >
              </b-card-img>
            </router-link
          ></b-card-text>
          <b-alert show v-if="p.quantity <= 5">
            Only! 5 items left. hurry...
          </b-alert>
          <b-row align-h="around" tag="b">
            Price: {{ p.unit_price }}
          </b-row>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { Service } from '../service.js'
export default {
  data () {
    return {
      Products: [],
      total: this.$store.getters.CartData.length
    }
  },
  created () {
    this.getAllProducts()
  },
  methods: {
    getAllProducts () {
      // Fetching products from Database
      Service.get('products.json', {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
        .then((res) => {
          this.Products = res.data.filter(
            (item) => item.category === 'Laptop' || item.category === 'PC'
          )
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>
<style scoped>
.Cwidth {
  width: 120rem;
}
.img {
  height: 200pt;
  object-fit: contain;
}
</style>
