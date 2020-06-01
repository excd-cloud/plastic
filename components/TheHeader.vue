<template>
  <header class="header">
    <h4>
      <nuxt-link to="/">
        Sayonara Plastic
      </nuxt-link>
    </h4>

    <div class="burger-menu-icon">
      <div class="burger-icon" v-on:click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu" v-show="showMenu">
        <ul>
          <li>
            <nuxt-link to="/shopsearch">
              Search Bulkshop
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/guide">
              Container Shopping Guide
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/voices">
              Voices
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/privacypolicy">
              Privacy Policy
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNav() {
      showMenu = true;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
}

.burger-icon {
  display: block;
  z-index: 11;
  span {
    display: block;
    background: #000;
    width: 10%;
    height: 3px;
    margin-bottom: 5px;
    cursor: pointer;
    position: relative;
    top: 0;
  }
  .open span:nth-child(2) {
    width: 0;
    opacity: 0;
  }
  .open span:nth-child(1) {
    transform: rotate(45deg);
    top: 15px;
  }
  .open span:nth-child(3) {
    transform: rotate(-45deg);
    top: -15px;
  }
}

input#burger {
  display: none;
}
</style>
