<template>
  <header class="header">
    <div class="headerflex">
      <h4>
        <nuxt-link to="/" @click.native="close">Sayonara Plastic</nuxt-link>
      </h4>
      <div class="burger-icon" @click="toggle">
        <div></div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      toggle: "nav/toggle"
    }),
    ...mapMutations({
      close: "nav/close"
    })
  }
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  height: auto;
  padding: 2% 0%;
  z-index: 15;
  background-color: white;
  top: 0;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  h4 {
    margin-left: 2%;
  }
  .headerflex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.burger-icon {
  width: 25px;
  margin: 0 5% 0 0;
}

.burger-icon:after,
.burger-icon:before,
.burger-icon div {
  background-color: #000;
  border-radius: 3px;
  content: "";
  display: block;
  height: 1px;
  margin: 7px 0;
  transition: all 0.2s ease-in-out;
}

// .burger-icon:hover:before {
//   transform: translateY(10px) rotate(135deg);
// }

// .burger-icon:hover:after {
//   transform: translateY(-7px) rotate(-135deg);
// }

// .burger-icon div:hover {
//   transform: scale(0);
// }

.open {
  transform: translateX(300px);
}
</style>
