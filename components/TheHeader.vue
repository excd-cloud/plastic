<template>
  <header class="header">
    <h4>
      <nuxt-link to="/">Sayonara Plastic</nuxt-link>
    </h4>
    <div class="burger-icon" @click="showNav = !showNav">
      <div></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 2%;
  z-index: 10;
  h4 {
    margin-left: 2%;
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

.burger-icon:hover:before {
  transform: translateY(10px) rotate(133deg);
}

.burger-icon:hover:after {
  transform: translateY(-10px) rotate(-133deg);
}

.burger-icon:hover div {
  transform: scale(0);
}

.open {
  transform: translateX(300px);
}
</style>
