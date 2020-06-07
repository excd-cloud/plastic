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

<style lang="scss" scoped>
footer {
  text-align: center;
  padding-bottom: 1rem;
  ul {
    padding: 2rem 0rem;
  }
  li {
    padding: 0.3rem 0rem;
    font-size: 13px;
  }
  .copyright {
    padding-top: 1rem;
    border-top: 1px solid #000;
  }
}
</style>
