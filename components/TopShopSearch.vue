<template>
  <div class="topsearchsection">
    <div class="topsearchsectiontext">
      <p class="paddingbtm">まずは迷わず…</p>
      <h3>
        容器を持ち込める店を
        <br />探して
        <br />みよう！
      </h3>
      <button>
        <nuxt-link to="/shopsearch">検索する</nuxt-link>
      </button>
    </div>

    <figure>
      <img src="@/assets/img/breadshop.jpg" alt />
    </figure>
  </div>
</template>

<style lang="scss" scoped>
.topsearchsection {
  margin-top: 2rem;
  border-top: 1px solid black;
}

.topsearchsection {
  display: flex;
  h3 {
    text-align: center;
  }
}

.topsearchsectiontext,
figure {
  padding: 3rem 0rem;
  width: 50%;
}
.topsearchsectiontext {
  padding: 3rem 1rem;
}

button {
  margin-top: 3rem;
  background-color: white;
  border: 1px solid black;
  width: 100%;
  padding: 4px;
}

.paddingbtm {
  padding-bottom: 1rem;
}
</style>
