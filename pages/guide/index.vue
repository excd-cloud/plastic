<template>
  <div class="guide">
    <transition name="slide-fade">
      <TheNavigation v-if="$store.state.nav.status" />
    </transition>
    <h3>The Beginner's Guide to Containers!</h3>
  </div>
</template>

<script>
import TheNavigation from "../../components/TheNavigation";
export default {
  components: {
    TheNavigation
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-300px);
}
</style>