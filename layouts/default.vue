<template>
  <div>
    <Header v-on:toggle-nav="toggleNav" />
    <nuxt />
    <Footer />
  </div>
  <!-- v-show="seeNav" -->
</template>


<script>
import Header from "../components/TheHeader";
import Footer from "../components/TheFooter";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      toggleNav: ""
    }
  }
};
</script>

<style>
#__layout {
  border: 1px solid #000;
}
</style>
