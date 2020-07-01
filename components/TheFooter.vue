<template>
  <footer>
    <ul>
      <li>
        <nuxt-link to="/shopsearch">Search Bulkshop</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/guide">Container Shopping Guide</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/voices">Voices</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/privacypolicy">Privacy Policy</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
    <p class="copyright">&copy; Sayonara Plastic 2020</p>
  </footer>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
footer {
  padding-bottom: 1rem;
  ul {
    padding: 2rem 0rem 0rem;
    display: flex;
    justify-content: center;
  }
  li {
    padding: 0.3rem 1rem;
    font-size: 13px;
    a {
      font-size: 10px;
    }
  }
  .copyright {
    padding-top: 1rem;
    text-align: center;
    font-size: 10px;
  }
}

@media screen and (max-width: 576px) {
  footer {
    text-align: center;
    ul {
      padding: 2rem 0rem;
      display: block;
    }
    li {
      padding: 0.3rem 0rem;
      font-size: 13px;
    }
    .copyright {
      border-top: 1px solid #000;
    }
  }
}
</style>
