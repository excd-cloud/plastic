<template>
  <div class="voices">
    <SharePost
      v-show="togglePost"
      v-on:close-post="closePost"
      v-bind:class="{slideOpen: togglePost, slideClose: !togglePost}"
    />
    <div class="postbutton" @click="openPost">
      <p>投稿する</p>
    </div>
    <h3>Voices</h3>
  </div>
</template>

<script>
import SharePost from "../components/VoicesSharePost";

export default {
  components: {
    SharePost
  },
  data() {
    return {
      togglePost: false
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
@keyframes slideRight {
  0% {
    transform: translateX(-300px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-300px);
  }
}

.slideOpen {
  animation: slideRight;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}

.slideClose {
  animation: slideLeft;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
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
