<template>
  <div class="guide">
    <transition name="slide-fade">
      <TheNavigation v-if="$store.state.nav.status" />
    </transition>
    <div class="otherContainer">
      <h3>
        A Guide to Containers!
        <br />
        <span class="small">保存容器の初心者ガイド</span>
      </h3>
      <p
        class="otherContainerIntro"
      >プラスチック包装とさようならするために携えておきたいのが、保存容器。買ったモノをできる限り新鮮に保つためにも、うっかりダメにしてしまわないためにも、肝心なのは容器選びです。買いたいモノに合わせて、適した容器を見つけましょう。</p>
      <div class="otherContainerInner">
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
    </div>
  </div>
</template>

<script>
import TheNavigation from "../../components/TheNavigation";
export default {
  components: {
    TheNavigation
  },
  computed: {
    images() {
      return this.$store.state.image.images;
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-300px);
  opacity: 0;
}

.otherContainer {
  padding: 10rem 0rem 4rem;
  border-bottom: 1px solid #000;
  h3 {
    text-align: center;
    padding-bottom: 3rem;
  }
  .otherContainerInner {
    width: 60%;
    margin: 0 auto;
    figure {
      display: inline-block;
      width: 25%;
      border: 1px solid #000;
      position: relative;
      .cover {
        position: absolute;
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
          background-color: white;
          padding: 0.4rem;
          width: 80%;
          text-align: center;
          font-size: 9px;
          border: 1px solid #000;
          border-bottom: none;
          border-left: none;
        }
        a {
          text-decoration: none;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .otherContainer {
    padding-top: 7rem;
    h3 {
      line-height: 30px;
      padding-bottom: 1.5rem;
    }
    .otherContainerIntro {
      width: 80%;
      margin: 0 auto;
      padding-bottom: 2rem;
    }
    .otherContainerInner {
      width: 100%;
      figure {
        width: 50%;
        .textbox p {
          width: 100%;
        }
      }
    }
  }
}
</style>
