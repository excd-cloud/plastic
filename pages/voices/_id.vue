<template>
  <div class="voices">
    <TheNavigation v-if="$store.state.nav.status" />
    <transition name="slide-fade">
      <SharePost v-if="togglePost" v-on:close-post="closePost" />
    </transition>
    <div class="postbutton" @click="openPost">
      <p>投稿する</p>
    </div>
    <div class="content" v-if="post">
      {{ post.fields.title }}
    </div>
  </div>
</template>

<script>
import TheNavigation from "../../components/TheNavigation";
import SharePost from "../../components/VoicesSharePost";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  asyncData({ params }) {
    console.log(params);
    return Promise.all([
      // get Entry id
      client.getEntry(params.id)
    ])
      .then(entry => {
        // return data that should be available
        // in the template
        return {
          post: entry[0]
        };
      })
      .catch(console.error);
  },
  components: {
    SharePost,
    TheNavigation
  },
  data() {
    return {
      togglePost: false,
      posts: null
    };
  },
  methods: {
    openPost() {
      this.togglePost = !this.togglePost;
    },
    closePost() {
      this.togglePost = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-300px);
}

.voices {
  padding-top: 46.5px;
  .postbutton {
    position: relative;
    margin-top: 10%;
    left: -9%;
    background-color: #000;
    width: 25%;
    padding: 10px;
    transform: rotate(90deg);
    z-index: 5;
    p {
      color: #fff;
      display: flex;
      justify-content: center;
    }
  }
  h3 {
    text-align: center;
  }
}
</style>
