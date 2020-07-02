<template>
  <div class="container">
    <transition name="slide-fade">
      <TheNavigation v-show="$store.state.nav.status" />
    </transition>
    <div class="inner">
      <div class="contactHeader">
        <h3>Contact Us</h3>
        <p class="small">
          Sayonara Plasticの
          <nuxt-link to="/shopsearch">店舗リスト</nuxt-link
          >への掲載を希望される事業主さまは
          <br />以下のフォームからご連絡ください。
        </p>
      </div>
      <div class="contact-form">
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
          tag="form"
          @submit.prevent="submit()"
        >
          <FormValidationInput
            rules="required|max:50"
            labelMessage="Name"
            inputType="text"
            formComponentName="name"
            maxLength="50"
            placeHolderMessage="名前を入力してください"
            :inputValue.sync="inputName"
          >
            <template v-slot="inputProps">
              <p>
                {{ inputProps.inputValue.length + "/" + inputProps.maxLength }}
              </p>
            </template>
          </FormValidationInput>
          <!-- メールアドレスには入力文字数を表示しない -->
          <FormValidationInput
            rules="required|email|max:256"
            labelMessage="E-Mail"
            inputType="email"
            formComponentName="email"
            maxLength="256"
            placeHolderMessage="メールアドレスを入力してください"
            :inputValue.sync="inputEmail"
          />
          <FormValidationTextarea
            rules="required|max:1000"
            labelMessage="Message"
            textareaCols="20"
            textareaRows="10"
            formComponentName="message"
            maxLength="1000"
            placeHolderMessage="お問い合わせ内容を入力してください"
            :inputValue.sync="inputMessage"
          >
            <template v-slot="inputProps">
              <p>
                {{ inputProps.inputValue.length + "/" + inputProps.maxLength }}
              </p>
            </template>
          </FormValidationTextarea>
          <button type="submit" :disabled="invalid">
            Submit
          </button>
        </validation-observer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    //     ContactSubmitButton: () =>
    //       import("@/components/contact/ContactSubmitButton"),
    FormValidationInput: () =>
      import("@/components/validation/FormValidationInput"),
    FormValidationTextarea: () =>
      import("@/components/validation/FormValidationTextarea")
  },
  data() {
    return {
      inputName: "",
      inputEmail: "",
      inputMessage: ""
    };
  },
  methods: {
    async submit() {
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        // バリデーション通過時の処理(例：サーバーに値を送信する等)
        // サンクスページに遷移
        this.$router.push("/contact/thanks");
      }
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
  padding: 8rem 0rem 3rem;
  line-height: 25px;
}

textarea #name {
  width: 40%;
}
</style>
