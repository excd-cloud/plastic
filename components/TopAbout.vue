<template>
  <div class="about">
    <div class="tagline">
      <h3>Sayonara Plasticについて</h3>
      <p>About</p>
    </div>

    <div class="voicestagline">
      <p>
        Sayonara
        Plasticはプラスチック包装の多さにげっそりしてはじめたウェブサイトです。できるところから少しずつプラスチックの削減に貢献できる簡単な方法をサイトを通してお伝えしていくことが目的です。
      </p>
    </div>
    <nuxt-link to="/about">
      <button>
        <span class="letterspace">もっと知ろう</span>
      </button>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.about {
  border-top: 1px solid #000;
  text-align: center;
  padding: 6rem 0rem;
  border-bottom: 1px solid #000;
  .tagline {
    padding-bottom: 2rem;
  }
  .voicestagline p {
    width: 40%;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
  button {
    background-color: #fff;
    width: 20%;
    padding: 15px;
    border: 1px solid #000;
    color: #000;
    transition: 0.5s;
    &:hover {
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 576px) {
  .voices {
    padding: 3rem 0rem;
    .voicestagline p {
      width: 80%;
    }
    button {
      width: 60%;
      padding: 10px;
    }
  }
}
</style>
