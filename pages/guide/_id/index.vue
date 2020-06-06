<template>
  <div class="guide-id">
    hello
    <img v-if="image" :src="require(`@/assets/img/${image.file}`)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const image = this.$store.getters["image/getImage"](id);
    console.log(image);
    this.image = image;
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
