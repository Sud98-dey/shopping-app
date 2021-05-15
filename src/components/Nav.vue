<template>
  <header>
      <b-navbar variant="primary" type="dark">
        <b-navbar-brand href="#">Shopping App </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item to="/home">Home Page</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="topright">
          <b-nav-item to="/cart">
             <b-icon icon="cart2" font-scale="2" ></b-icon>
            <span> {{ total }}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar><br/>
    </header>
</template>
<style scoped>
.topright {
  position: absolute; font-size: 18px;
   top: 8px; right: 16px;
}
</style>
<script>
export default {
  computed: {
    total () { // Fetching total items in cart
      return this.$store.getters.CartData.length
    }
  }
}
</script>
