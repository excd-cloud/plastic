<template>
  <div class="sharepost">
    <div class="closebutton" @click="closePost">
      <p>閉じる</p>
    </div>
    <!-- sharepostinner -->
    <div class="sharepostInner">
      <!-- share header -->
      <div class="shareHeader">
        <h3>
          Share With Us!
          <br />
          <span class="small">みんなの知恵を集めています。</span>
        </h3>
      </div>
      <form action method="post">
        <p class="entry">
          名前：
          <br />
          <input type="text" name="name" />
        </p>
        <p class="entry">
          画像を選択する（投稿にふさわしい画像があれば選択ください）:
          <br />
          <input type="file" @change="onFileSelected" />
          <button @click="onUpload">Upload</button>
        </p>
        <p class="entry">
          カテゴリー（※必須）:
          <br />
          <select name="category">
            <option value="A">A型</option>
            <option value="B">B型</option>
            <option value="O">O型</option>
            <option value="AB">AB型</option>
          </select>
        </p>
        <p class="entry">
          場所（※店舗情報の場合、必須）
          <br />
          <select name="category">
            <option value="A">A型</option>
            <option value="B">B型</option>
            <option value="O">O型</option>
            <option value="AB">AB型</option>
          </select>
        </p>
        <p class="entry">
          入れるもの（※容器情報の場合、必須）
          <br />
          <select name="category">
            <option value="A">A型</option>
            <option value="B">B型</option>
            <option value="O">O型</option>
            <option value="AB">AB型</option>
          </select>
        </p>
        <p class="entry">
          タイトル（※必須：最大30文字）
          <br />
          <input type="text" name="title" maxlength="30" />
        </p>
        <p class="entry">
          投稿（※必須：最大2500文字）
          <br />
          <input type="text" name="content" class="article" maxlength="2500" />
        </p>
        <input type="submit" value="投稿する" class="submitBtn" />
      </form>
    </div>
    <!-- end sharepostinner -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null
    };
  },
  props: {
    openPost: {
      type: String
    }
  },
  methods: {
    closePost() {
      this.$emit("close-post");
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {}
  }
};
</script>

<style lang="scss" scoped>
.small {
  font-size: 0.8rem;
}

.sharepost {
  background-color: #fff;
  position: absolute;
  width: 90%;
  border: 1px solid #000;
  height: auto;
  z-index: 10;
  padding: 3rem;
  .sharepostInner {
    width: 50%;
    margin: 0 auto;
  }
  input {
    width: 100%;
    padding: 10px;
    &.submitBtn {
      border: none;
      background-color: #000;
      color: #fff;
    }
  }
  .entry {
    padding-bottom: 20px;
    .article {
      height: 150px;
    }
  }
  .shareHeader {
    text-align: center;
    padding-bottom: 2rem;
    h3 {
      margin-top: -50px;
    }
  }

  .closebutton {
    position: relative;
    top: 5%;
    left: 93.2%;
    background-color: #000;
    width: 25%;
    padding: 10px;
    transform: rotate(90deg);
    margin-top: 8%;
    p {
      color: #fff;
      display: flex;
      justify-content: center;
    }
  }
}

@media screen and (max-width: 576px) {
  .sharepost {
    .closebutton {
      left: 111.5%;
      margin-top: -11%;
    }
    .sharepostInner {
      width: 90%;
    }
    input {
      padding: 10px;
    }
    .shareHeader {
      h3 {
        margin-top: 0px;
      }
    }
  }
}
</style>
