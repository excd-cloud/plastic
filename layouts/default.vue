<template>
  <div>
    <Header v-on:toggle-nav="toggleNav" />
    <TheNavigation v-show="seeNav" />
    <nuxt />
    <Footer />
  </div>
  <!-- v-show="seeNav" -->
</template>


<script>
import Header from "../components/TheHeader";
import Footer from "../components/TheFooter";
import TheNavigation from "../components/TheNavigation";

export default {
  components: {
    Header,
    Footer,
    TheNavigation
  },
  data() {
    return {
      seeNav: false
    };
  },
  methods: {
    toggleNav() {
      this.seeNav = !this.seeNav;
    }
  }
};
</script>

<style>
#__layout {
  border: 1px solid #000;
}
</style>
