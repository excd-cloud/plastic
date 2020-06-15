<template>
  <div class="voices">
    <TheNavigation v-if="$store.state.nav.status" />
    <transition name="slide-fade">
      <SharePost v-if="togglePost" v-on:close-post="closePost" />
    </transition>
    <div class="postbutton" @click="openPost">
      <p>投稿する</p>
    </div>
    <h3>Voices</h3>
    <!-- render data of the person -->
    <!-- render blog posts -->
    <ul>
      <li v-for="post in posts" :key="post.section">
        {{ post.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import TheNavigation from "../../components/TheNavigation";
import SharePost from "../../components/VoicesSharePost";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        "sys.id": env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt"
      })
    ])
      .then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items
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
      posts: []
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
