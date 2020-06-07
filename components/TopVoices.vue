<template>
  <div class="voices">
    <div class="tagline">
      <h3>Voices</h3>
      <p>リアルな声</p>
    </div>

    <div class="voicestagline">
      <p>
        プラごみ削減に熱心な人々の声を集めています。
        こんなところでも容器を持ち込めたよ。こんな容器を使っているけど、おすすめだよ。
        投稿するもよし、見に寄るもよし。
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
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #000;
  .tagline {
    padding-bottom: 2rem;
  }
  .voicestagline p {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
  button {
    background-color: #000;
    width: 60%;
    padding: 10px;
    border: none;
    a {
      color: #fff;
    }
  }
}
</style>
