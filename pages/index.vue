<template>
  <section class="container">
    <TopFirstView />
    <TopShopSearch />
    <TopGuide />
    <TopVoices />
  </section>
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
  }
};
</script>

<style>
.container {
  width: 90%;
  margin: 0 auto;
}
</style>
