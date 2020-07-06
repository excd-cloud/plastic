<template>
  <div class="about">
    <transition name="slide-updown">
      <TheNavigation v-if="$store.state.nav.status" />
    </transition>
    <div class="aboutInner">
      <h3>About Sayonara Plastic</h3>
      <div class="textAndImg">
        <figure><img src="@/assets/img/plastic-trash.jpg" alt="" /></figure>

        <div class="text">
          <p>
            ある調査結果では、<span class="large"
              >世界が出した年間のプラスチックごみが3億9600万トン</span
            >にも及ぶと発表されています。一人当たりに換算すると、53キログラム。なかでも最もプラスチックごみを排出しているのはアメリカ、続いて日本です（年間940万トンほど）。<br /><br />環境省は、2018年に発表した「プラスチック資源循環戦略」で<span
              class="thick"
              >2030年までにはプラスチックごみの量を25%抑制すること</span
            >を掲げています。とはいえ、数円払えばプラスチック袋が買えてしまい、毎日の食料品や日用品のほとんどがプラスチックで包まれているなか「この25%に貢献するにはどうすればいいの？」と悩む人もいるのでは、と思いました。<br /><br />
            Sayonara
            Plasticは保存容器を活用する、という観点から、誰でも簡単にプラスチック包装に触れ合う機会を減らせる方法を紹介するウェブサイトです。
          </p>
          <div class="links">
            <p class="small">参考：</p>

            <p>
              <a
                class="small"
                href="https://www.wwf.or.jp/activities/activity/3891.html#:~:text=WWF%E3%81%AF2019%E5%B9%B43,%E8%B2%A0%E6%8B%85%E3%82%92%E3%81%8B%E3%81%91%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82"
                >・プラスチック汚染問題の解決に向けた最新報告書を発表（2019年3月5日、WWF）</a
              >
            </p>
            <p>
              <a
                class="small"
                href="https://www.scmp.com/news/asia/east-asia/article/3002566/can-japan-end-its-love-affair-single-use-plastic"
                target="_blank"
                >・Can Japan end its love affair with single-use plastic?
                （2019年3月20日、South China Morning Post）</a
              >
            </p>
            <p>
              <a
                class="small"
                href="https://www.env.go.jp/press/files/jp/111747.pdf"
                target="_blank"
                >・プラスチック資源循環戦略（消費者庁、外務省、財務省、文部科学省、厚生労働省、農林水産省、経済産業省、国土交通省、環境省）</a
              >
            </p>
          </div>
        </div>
        <!-- /text -->
      </div>
      <!-- /textandimg -->
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
.slide-updown-enter-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-updown-leave-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-updown-enter,
.slide-updown-leave-to {
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

.about {
  border-bottom: 1px solid #000;
  padding-bottom: 3rem;
  .aboutInner {
    padding-top: 6rem;
    width: 80%;
    margin: 0 auto;
    .textAndImg {
      display: flex;
      figure {
        width: 100%;
      }
      .text {
        width: 70%;
        padding-left: 3rem;
        .thick {
          font-weight: 600;
        }
        .links {
          padding-top: 2rem;
          a {
            border-bottom: 1px solid #000;
          }
        }
      }
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
  h3 {
    text-align: center;
    padding-bottom: 3rem;
    margin-top: 2rem;
  }
  .articleSection {
    width: 90%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 576px) {
  .about {
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
