<template>
  <section class="container">
    <TheNavigation v-if="seeNav" v-on:toggle-nav="toggleNav" />
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
import TheNavigation from "../components/TheNavigation";

export default {
  components: {
    TopFirstView,
    TopShopSearch,
    TopGuide,
    TopVoices,
    TheNavigation
  },
  data() {
    return {
      seeNav: false
    };
  },
  mounted() {
    this.$nuxt.$on("toggle-nav", toggleNav);
  },
  methods: {
    toggleNav() {
      this.seeNav = !this.seeNav;
    }
  }
};
</script>

<style lang="scss" scoped></style>
