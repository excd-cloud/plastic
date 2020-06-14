<template>
  <section class="container">
    <transition name="slide-fade">
      <TheNavigation v-if="$store.state.nav.status" />
    </transition>
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
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-300px);
  opacity: 0;
}
</style>
