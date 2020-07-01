<template>
  <div class="guide-id">
    <transition name="slide-fade">
      <TheNavigation v-if="$store.state.nav.status" />
    </transition>
    <div class="guideInner">
      <div class="guideTop">
        <img v-if="image" :src="require(`@/assets/img/${image.file}`)" />
      </div>
      <!-- detailsrightpc -->
      <div class="detailsrightpc">
        <div class="description" v-if="image">
          <h3>{{ image.name }}</h3>
          <p>{{ image.details }}</p>
        </div>
        <!-- detailstable -->
        <div class="detailstable">
          <div class="detailsleft">
            <h5>
              This not That
              <br />
              <span class="small">まとめ</span>
            </h5>
            <p v-if="image" class="paddingbtm">
              <span>
                <font-awesome-icon icon="smile" class="icon" />
              </span>
              {{ image.yes }}
            </p>
            <p v-if="image">
              <span>
                <font-awesome-icon icon="frown" class="icon" />
              </span>
              {{ image.no }}
            </p>
          </div>
          <div class="detailsright" v-if="image">
            <h5>
              Items
              <br />
              <span class="small">アイテム</span>
            </h5>
            <p v-for="link in image.links" :key="link.section">
              <span>
                <font-awesome-icon icon="hand-pointer" class="icon" />
              </span>
              <a :href="link.url" target="_blank">{{ link.name }}</a>
            </p>
          </div>
        </div>
      </div>
      <!-- /detailsrightpc -->
    </div>
    <!-- /guideinner -->
    <!-- /guide Inner Bottom -->
    <div class="guideInnerBtm">
      <!-- references -->
      <div class="references" v-if="image">
        <h5>
          References
          <br />
          <span class="small">おもしろい読みもの</span>
        </h5>
        <p v-for="reference in image.references" :key="reference.section">
          <span>
            <font-awesome-icon icon="book-open" class="icon" />
          </span>
          <a :href="reference.url" target="_blank">{{ reference.name }}</a>
        </p>
      </div>
      <!-- where to buy -->
      <div class="buy" v-if="image">
        <h5>
          Where to Buy {{ image.name }}
          <br />
          <span class="small">量り売りできる場所</span>
        </h5>
        <p v-for="location in image.locations" :key="location.section">
          <span>
            <font-awesome-icon icon="map-marker-alt" class="icon" />
          </span>
          <a :href="location.url" target="_blank">{{ location.name }}</a>
        </p>
      </div>
    </div>
    <!-- /guide Inner Bottom -->
    <div class="otherContainer">
      <h3>
        Find Other Containers!
        <br />
        <span class="small">ほかの保存容器も見てみよう！</span>
      </h3>
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
import TheNavigation from "../../../components/TheNavigation";
export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      image: null
    };
  },
  computed: {
    images() {
      return this.$store.state.image.images;
    }
  },
  // methods: {
  //   clickImage(image) {
  //     this.$store.state.store.updateImage(image);
  //   }
  // },
  mounted() {
    const id = this.$route.params.id;
    const image = this.$store.getters["image/getImage"](id);

    console.log(image);
    this.image = image;
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
@mixin spacing {
  width: 100%;
  height: auto;
}

@mixin bottomcell {
  @include spacing();
  padding: 2rem;
  border-bottom: 1px solid #000;
  h5 {
    padding-bottom: 1.5rem;
  }
}

.otherContainer {
  padding: 4rem 0rem;
  border-bottom: 1px solid #000;
  h3 {
    text-align: center;
  }
  .otherContainerInner {
    width: 60%;
    margin: 2rem auto;
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

.guideInner {
  display: grid;
  grid-template-columns: 60% 40%;
  border-bottom: 1px solid #000;
  padding-top: 3.6rem;
}

.guideTop {
  border-right: 1px solid #000;
  padding: 2rem;
}

.guideInnerBtm {
  display: grid;
  grid-template-columns: 50% 50%;
}

.guideTop img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  border: 1px solid #000;
}

p {
  line-height: 20px;
}

a {
  text-decoration: underline;
}

h5 {
  font-size: 1.5rem;
  line-height: 25px;
}

.small {
  font-size: 0.8rem;
}

.description {
  padding: 2rem 3rem;
  height: auto;
  width: 100%;
  border-bottom: 1px solid black;
  h3 {
    padding-bottom: 1rem;
  }
}
.icon {
  margin-right: 0.5rem;
}
.detailstable {
  display: grid;
  grid-template-columns: 50% 50%;

  h5 {
    padding-bottom: 1.5rem;
  }
  p {
    padding-bottom: 0.5rem;
  }

  .paddingbtm {
    padding-bottom: 0.5rem;
  }
  .detailsleft {
    @include spacing();
    border-right: 1px solid black;
    padding: 2.5rem 2rem;
  }
  .detailsright {
    @include spacing();
    padding: 2.5rem 2rem;
  }
}

.references {
  @include bottomcell();
  border-right: 1px solid #000;
  p {
    width: 70%;
    margin: 0 auto;
  }
}

.buy {
  @include bottomcell();
  p {
    width: 50%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 576px) {
  .guideInner {
    display: block;
    padding-top: 0;
  }
  .description {
    padding: 0rem 3rem 2rem;
  }
  .guideTop {
    border-right: none;
  }
  .references {
    border-right: none;
  }
  .guide-id {
    padding-top: 3rem;
  }
  .detailstable {
    .detailsleft {
      padding: 2.5rem 1rem;
    }
    .detailsright {
      padding: 2.5rem 1rem;
    }
  }
  .guideInnerBtm {
    display: block;
  }
  .otherContainer {
    h3 {
      line-height: 30px;
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
