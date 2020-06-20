<template>
  <div class="voices">
    <div class="tagline">
      <h3>リアルな声</h3>
      <p>Voices</p>
    </div>

    <div class="voicestagline">
      <p>
        プラごみ削減に熱心な人々の声を集めています。こんなところでも容器を持ち込めたよ。こんな容器を使っているけど、おすすめだよ。投稿するもよし、見に寄るもよし。
      </p>
    </div>
    <button>
      <nuxt-link to="/voices">覗いてみる</nuxt-link>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.voices {
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
    background-color: #000;
    width: 30%;
    padding: 15px;
    border: none;
    a {
      color: #fff;
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
