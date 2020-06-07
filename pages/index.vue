<template>
  <section class="container">
    <TheNavigation />
    <TopFirstView />
    <TopShopSearch />
    <TopGuide />
    <TopVoices />
  </section>
</template>

<script>
import TheNavigation from "../components/TheNavigation";
import TopFirstView from "../components/TopFirstView";
import TopShopSearch from "../components/TopShopSearch";
import TopGuide from "../components/TopGuide";
import TopVoices from "../components/TopVoices";

export default {
  components: {
    TheNavigation,
    TopFirstView,
    TopShopSearch,
    TopGuide,
    TopVoices
  }
};
</script>

<style></style>
