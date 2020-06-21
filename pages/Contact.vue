<template>
  <div class="container">
    <transition name="slide-fade">
      <TheNavigation v-show="$store.state.nav.status" />
    </transition>
    <div class="inner">
      <div class="contactHeader">
        <h3>
          Contact Us
        </h3>
        <p class="small">
          Sayonara Plasticの店舗リストへの掲載を希望される事業主さまは<br />こちらからご連絡ください。
        </p>
      </div>
      <div class="content">
        <form name="contact" action method="post" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <div class="labelcell">
            <label class="form-label" for="name"><p>お名前:</p></label>
            <input class="form-field" name="name" id="name" />
          </div>
          <div class="labelcell">
            <label class="form-label" for="email"><p>メールアドレス:</p></label>
            <input class="form-field" name="email" id="email" />
          </div>
          <div class="labelcell">
            <label class="form-label" for="message"><p>本文:</p></label>
            <textarea class="form-field" name="message" id="message"></textarea>
          </div>
          <input class="form-button" type="submit" value="送信する" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavigation from "../components/TheNavigation";
export default {
  components: {
    TheNavigation
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

.container {
  border-bottom: 1px solid #000;
  height: 100%;
  .inner {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 8rem;
  }
  .contactHeader {
    p {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
}
h3 {
  text-align: center;
  padding: 10rem 0rem 3rem;
  line-height: 25px;
}

.labelcell {
  padding-bottom: 1rem;
  input,
  textarea {
    width: 100%;
    height: auto;
    padding: 10px;
    border: 1px solid #303030;
    margin-bottom: 5%;
  }
}

form {
  width: 50%;
  margin: 0 auto;
}

form input.form-button {
  background-color: #fff;
  border: 1px solid #303030;
  color: #000;
  padding: 1rem;
  font-family: "Source Code Pro", monospace;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  transition: 0.5s;
  &:hover {
    background-color: #000;
    border: none;
    color: #fff;
    cursor: pointer;
  }
}

@media screen and (max-width: 576px) {
  form {
    width: 100%;
  }
  .container {
    .inner {
      padding-bottom: 4rem;
    }
  }
}
</style>
