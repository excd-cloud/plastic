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
    <ul class="articleSection">
      <li v-for="post in posts" :key="post.section">
        <nuxt-link :to="`/voices/${post.sys.id}`">
          <!-- <nuxt-link :to="`/voices/${post.fields.entry}`"> -->
          {{ post.fields.title }}
        </nuxt-link>
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
// * - - slidefade for nav - - * //
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
// * - - - - - - - - - - - - - * //
.slide-fade-enter-active {
  transition: all 0.6s ease;
}

.slide-fade-leave-active {
  transition: all 0.6s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}

.voices {
  padding-top: 46.5px;
  .postbutton {
    position: relative;
    margin-top: 10%;
    left: -11.5%;
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
    padding-bottom: 3rem;
    margin-top: -100px;
  }
  .articleSection {
    width: 90%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 576px) {
  .voices {
    .postbutton {
      left: -9%;
      margin-top: 8%;
    }
    h3 {
      margin-top: 0px;
    }
  }
}
</style>
