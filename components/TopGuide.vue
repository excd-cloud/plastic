<template>
  <div class="topguide">
    <div class="guideTagline">
      <p class="marginleft">でもどんな容器がいいの?と思ったら。</p>
      <h3>保存容器の買い物ガイド</h3>
    </div>
    <figure v-for="image in images" :key="image.section">
      <img :src="require(`@/assets/img/${image.file}`)" :alt="image.name" />
      <div class="cover">
        <div class="textbox">
          <nuxt-link
            :to="{ name: 'guide-id', params: { id: image.id } }"
            @click="clickImage(image)"
          >
            <p>{{ image.description }}</p>
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
  padding-top: 6rem;
  border-bottom: 1px solid #000;
  .guideTagline {
    padding-bottom: 6rem;
    line-height: 30px;
    p.marginleft {
      margin-left: 30%;
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
    width: 25%;
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

@media screen and (max-width: 576px) {
  .topguide {
    padding-top: 3rem;
    .guideTagline {
      padding-bottom: 3rem;
    }
    p.marginleft {
      margin-left: 3%;
    }
    figure {
      width: 50%;
    }
  }
}
</style>
