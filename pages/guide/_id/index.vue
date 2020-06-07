<template>
  <div class="guide-id">
    <img v-if="image" :src="require(`@/assets/img/${image.file}`)" />
    <div class="description" v-if="image">
      <p>{{ image.details }}</p>
    </div>
    <div class="detailstable">
      <div class="detailsleft">
        <h5>This not That<br /><span class="small">まとめ</span></h5>
        <p v-if="image" class="paddingbtm">
          <span><font-awesome-icon icon="smile" class="icon" /> </span>
          {{ image.yes }}
        </p>
        <p v-if="image">
          <span><font-awesome-icon icon="frown" class="icon"/></span>
          {{ image.no }}
        </p>
      </div>
      <div class="detailsright" v-if="image">
        <h5>Items<br /><span class="small">アイテム</span></h5>

        <p v-for="link in image.links" :key="link.section">
          <span> <font-awesome-icon icon="hand-pointer" class="icon" /> </span
          ><a :href="link.url" target="_blank">{{ link.name }}</a>
        </p>
      </div>
    </div>
    <div class="references" v-if="image">
      <h5>References<br /><span class="small">おもしろい読みもの</span></h5>
      <p v-for="reference in image.references" :key="reference.section">
        <span> <font-awesome-icon icon="book-open" class="icon" /> </span
        ><a :href="reference.url" target="_blank">{{ reference.name }}</a>
      </p>
    </div>
    <div class="buy" v-if="image">
      <h5>
        Where to Buy {{ image.name }}<br /><span class="small"
          >量り売りできる場所</span
        >
      </h5>
      <p v-for="location in image.locations" :key="location.section">
        <span> <font-awesome-icon icon="map-marker-alt" class="icon" /> </span
        ><a :href="location.url" target="_blank">{{ location.name }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const image = this.$store.getters["image/getImage"](id);

    console.log(image);
    this.image = image;
  }
};
</script>

<style lang="scss" scoped>
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
  p {
    width: 70%;
    margin: 0 auto;
  }
}

.guide-id {
  padding-top: 3rem;
}

img {
  max-width: 100%;
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
  padding: 2rem 0rem;
  height: auto;
  width: 100%;
  border-bottom: 1px solid black;
  p {
    width: 80%;
    margin: 0 auto;
  }
}
.icon {
  margin-right: 0.5rem;
}
.detailstable {
  display: grid;
  grid-template-columns: 50% 50%;
  border-bottom: 1px solid black;

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
    padding: 2.5rem 1rem;
  }
  .detailsright {
    @include spacing();
    padding: 2.5rem 1rem;
  }
}

.references {
  @include bottomcell();
}

.buy {
  @include bottomcell();
}
</style>
