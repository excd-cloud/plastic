<template>
  <div class="topsearchsection">
    <div class="topsearchsectiontext">
      <p class="paddingbtm">まずは迷わず…</p>
      <h3>
        容器を持ち込める店を
        <br />探してみよう！
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
  display: grid;
  grid-template-columns: 50% 50%;
  h3 {
    text-align: center;
  }
}

.topsearchsectiontext {
  padding: 10rem 1rem;
}

button {
  background-color: white;
  border: 1px solid black;
  padding: 15px;
  width: 50%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
}

.paddingbtm {
  padding-bottom: 1rem;
  padding-left: 10rem;
}

figure {
  max-height: 100%;
  max-width: 100%;
  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
}

@media screen and (max-width: 576px) {
  .topsearchsectiontext {
    padding: 2rem 0rem;
  }
  .topsearchsectiontext {
    padding: 3rem 1rem;
  }
  .paddingbtm {
    padding-left: 0rem;
  }
  button {
    width: 100%;
    margin-top: 3rem;
    padding: 4px;
  }
  figure img {
    height: 100%;
  }
}
</style>
