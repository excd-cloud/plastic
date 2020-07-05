<template>
  <div class="about">
    <transition name="slide-updown">
      <TheNavigation v-if="$store.state.nav.status" />
    </transition>
    <div class="aboutInner">
      <h3>About Sayonara Plastic</h3>
    </div>
  </div>
</template>

<script>
import TheNavigation from "../components/TheNavigation";

export default {
  components: {
    TheNavigation
  }
};
</script>

<style lang="scss" scoped>
// * - - slidefade for nav - - * //
.slide-updown-enter-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-updown-leave-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-updown-enter,
.slide-updown-leave-to {
  transform: translateY(-300px);
  opacity: 0;
}
// * - - - - - - - - - - - - - * //
.slide-fade-enter-active {
  transition: all 0.6s ease;
}

.slide-fade-leave-active {
  transition: all 0.6s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}

.about {
  .aboutInner {
    padding-top: 10rem;
  }
  h3 {
    text-align: center;
    padding-bottom: 3rem;
    margin-top: 2rem;
  }
  .articleSection {
    width: 90%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 576px) {
  .about {
    .postbutton {
      left: -9%;
      margin-top: 8%;
    }
    h3 {
      margin-top: 0px;
    }
  }
}
</style>
