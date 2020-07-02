<template>
  <div class="container">
    <transition name="slide-fade">
      <TheNavigation v-show="$store.state.nav.status" />
    </transition>
    <div class="inner">
      <h3>Thank You For Your Message!<br /></h3>
      <p class="small">
        ご連絡いただきありがとうございます。<br />返信までは1週間ほどお時間をいただくことがございます。<br />あらかじめご了承ください。<br />
        Keep Saving Plastic!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// * - - slidefade for nav - - * //
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
// * - - - - - - - - - - - - - * //
.container {
  width: 100%;
}

.inner {
  border-bottom: 1px solid #000;
  padding-bottom: 6rem;
}
h3 {
  padding-top: 10rem;
  line-height: 25px;
  text-align: center;
}

p {
  text-align: center;
  padding-top: 3rem;
}
</style>
