<template>
  <div class="menu">
    <ul>
      <li>
        <font-awesome-icon icon="hand-point-up" class="icon" />
        <nuxt-link to="/shopsearch" @click.native="close">Search Bulkshop</nuxt-link>
      </li>
      <li>
        <font-awesome-icon icon="hand-point-up" class="icon" />
        <nuxt-link to="/guide" @click.native="close">Container Shopping Guide</nuxt-link>
      </li>
      <li>
        <font-awesome-icon icon="hand-point-up" class="icon" />
        <nuxt-link to="/voices" @click.native="close">Voices</nuxt-link>
      </li>
      <li>
        <font-awesome-icon icon="hand-point-up" class="icon" />
        <nuxt-link to="/contact" @click.native="close">Contact</nuxt-link>
      </li>
    </ul>
    <!-- <div class="menuFooter">
      <font-awesome-icon icon="envelope" class="icon" />
      <p>&copy; Sayonara Plastic 2020</p>
    </div>-->
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      close: "nav/close"
    })
  }
};
</script>

<style lang="scss" scoped>
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}

.menu {
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 70%;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
  z-index: 10;
  ul {
    padding: 8rem 2rem;
    li {
      padding-bottom: 2rem;
    }
    a {
      font-size: 1.5rem;
      font-weight: 300;
      margin-left: 1rem;
    }
  }
  .menuFooter {
    position: absolute;
    bottom: 5%;
    right: 5%;
    display: flex;
    justify-content: space-between;
    .icon {
      margin-right: 1rem;
    }
  }
}
</style>
