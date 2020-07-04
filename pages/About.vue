<template>
  <div class="about">
    <transition name="slide-updown">
      <TheNavigation v-if="$store.state.nav.status" />
    </transition>
    <h3>About Sayonara Plastic</h3>
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
  padding-top: 46.5px;
  .postbutton {
    position: relative;
    margin-top: 10%;
    left: -11.5%;
    background-color: #000;
    width: 25%;
    padding: 10px;
    transform: rotate(90deg);
    z-index: 5;
    p {
      color: #fff;
      display: flex;
      justify-content: center;
    }
  }
  h3 {
    text-align: center;
    padding-bottom: 3rem;
    margin-top: -100px;
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
