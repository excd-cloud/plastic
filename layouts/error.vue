<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/" class="toTopLink">Back to Top?</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "blog" // you can set a custom layout for the error page
};
</script>

<style lang="scss" scoped>
h1 {
  padding-top: 7rem;
}

.container {
  text-align: center;
  border-bottom: 1px solid #000;
  width: 100%;
  height: 80vh;
}
</style>