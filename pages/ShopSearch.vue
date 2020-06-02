<template>
  <div class="shopsearch">
    <h3>Search for Shops!</h3>
    <ul>
      <li v-for="shop in shops" :key="shop.section">
        <p>{{ shop.name }}</p>
        <p>{{ shop.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    shops() {
      return this.$store.state.shop.shops;
    }
  }
};
</script>
