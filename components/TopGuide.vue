<template>
  <div class="topguide">
    <div class="guideTagline">
      <p class="marginleft">でもどんな容器がいいのだろう?と思ったら。</p>
      <h3>A Beginner’s Guide to Containers!</h3>
      <p class="center">保存容器の買い物ガイド（簡単！）</p>
    </div>
    <figure v-for="image in images" :key="image.section">
      <img :src="require(`@/assets/img/${image.file}`)" :alt="image.name" />
      <div class="cover">
        <div class="textbox">
          <nuxt-link :to="{name:'guide-id', params:{id:image.id}}" @click="clickImage(image)">
            <p>{{image.description}}</p>
          </nuxt-link>
        </div>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  computed: {
    images() {
      return this.$store.state.image.images;
    }
  },
  methods: {
    clickImage(image) {
      this.$store.state.store.updateImage(image);
    }
  }
};
</script>

<style lang="scss" scoped>
.topguide {
  border-top: 1px solid #000;
  padding-top: 3rem;
  .guideTagline {
    padding-bottom: 3rem;
    line-height: 30px;
    p.marginleft {
      margin-left: 3%;
    }
  }
  h3 {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 1rem 0rem 0rem 0rem;
  }
  figure {
    display: inline-block;
    width: 50%;
    border: 1px solid #000;
    position: relative;
    .cover {
      position: absolute;
      // background-color: rgba(255, 255, 255, 0.4);
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 3;
    }
    .textbox {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      p {
        font-weight: 700;
        background-color: rgba(255, 255, 255, 1);
        padding: 0.4rem;
        width: 80%;
        text-align: center;
        font-size: 9px;
        border: 1px solid #000;
        border-bottom: none;
        border-left: none;
      }
    }
  }
}
</style>