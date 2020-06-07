<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/TheHeader";
import Footer from "../components/TheFooter";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#__layout {
  border: 1px solid #000;
}
</style>
