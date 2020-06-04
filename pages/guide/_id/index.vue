<template>
  <div class="guide-id">
    hello
    <figure>
      <img :src="require(`@/assets/img/${image.file}`)" />
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    }
  },
  computed: {
    image() {
      return images.find(image => image.id === this.$route.params.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.guide-id {
  padding-top: 3rem;
}

img {
  max-width: 100%;
}
</style>
