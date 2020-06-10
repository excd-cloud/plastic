<template>
  <section class="container">
    <TheNavigation v-if="seeNav" />
    <TopFirstView />
    <TopShopSearch />
    <TopGuide />
    <TopVoices />
  </section>
  <!-- v-on:toggle-nav="toggleNav" -->
</template>

<script>
import TopFirstView from "../components/TopFirstView";
import TopShopSearch from "../components/TopShopSearch";
import TopGuide from "../components/TopGuide";
import TopVoices from "../components/TopVoices";

export default {
  components: {
    TopFirstView,
    TopShopSearch,
    TopGuide,
    TopVoices
  },
  data() {
    return {
      seeNav: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
