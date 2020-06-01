<template>
  <div class="shopsearch">
    <h3>Search for Shops!</h3>
    <ul>
      <li v-for="shop in shops" :key="shop.section">
        <span>{{ shop.name }}</span>
        <span>{{ shop.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    shops() {
      return this.$store.state.bulkshops;
    }
  }
};
</script>
