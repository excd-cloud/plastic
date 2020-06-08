<template>
  <div class="menu">
    <ul>
      <li>
        <font-awesome-icon icon="hand-point-up" class="icon" />
        <nuxt-link to="/shopsearch">Search Bulkshop</nuxt-link>
      </li>
      <li>
        <font-awesome-icon icon="hand-point-up" class="icon" />
        <nuxt-link to="/guide">Container Shopping Guide</nuxt-link>
      </li>
      <li>
        <font-awesome-icon icon="hand-point-up" class="icon" />
        <nuxt-link to="/voices">Voices</nuxt-link>
      </li>
      <li>
        <font-awesome-icon icon="hand-point-up" class="icon" />
        <nuxt-link to="/privacypolicy">Privacy Policy</nuxt-link>
      </li>
      <li>
        <font-awesome-icon icon="hand-point-up" class="icon" />
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
    <!-- <div class="menuFooter">
      <font-awesome-icon icon="envelope" class="icon" />
      <p>&copy; Sayonara Plastic 2020</p>
    </div> -->
  </div>
</template>

<script>
export default {};
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
  // animation-name: appear;
  // animation-fill-mode: forwards;
  // animation-iteration-count: 1;
  // transition: 1s;
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 95%;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
  ul {
    padding: 5rem 2rem;
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
