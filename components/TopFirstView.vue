<template>
  <div class="firstview">
    <div class="firstviewtophalf">
      <h1>Sayonara Plastic</h1>
      <div class="flex">
        <figure>
          <img src="@/assets/img/frontpageimg.jpg" alt />
        </figure>
        <div class="topText">
          <div class="topTagline">
            <h5>
              プラスチック包装の多さに
              <br />圧倒されているあなたへ
            </h5>
          </div>

          <div class="tagline">
            <p>
              食料品の包装は、プラ、プラ…プラ！
              <br />全部プラスチックに包装されているではないか。
              <br />これではプラごみ汚染に貢献しているも同然。
              <br />でも減らすにはどうすれば？
            </p>
          </div>
          <!-- end tagline -->
          <p class="point">
            ※日本は、一人当たりの使い捨てプラスチックごみの量が
            最も多い国第２位です（国連環境計画調べ）。
          </p>
        </div>
        <!-- /end topText -->
      </div>
      <!-- /end flex -->
    </div>
    <!-- /end firstviewtophalf -->
  </div>
</template>

<style lang="scss" scoped>
$lineheight: 25px;
.firstview {
  padding-bottom: 2rem;
}

.firstviewtophalf {
  padding-top: 8rem;
}

h1 {
  padding-bottom: 2rem;
  padding-left: 5rem;
}

figure {
  width: 50%;
  margin-left: 5%;
}

.flex {
  display: flex;
}

.topText {
  width: 50%;
  margin-top: 5%;
}

.topTagline {
  padding-top: 2rem;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  line-height: $lineheight;
}

.tagline {
  padding: 1rem 0rem 1rem 0rem;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  line-height: $lineheight;
}
p.point {
  font-size: 9px;
  width: 70%;
  margin: 0 auto;
}

@media screen and (max-width: 576px) {
  .firstviewtophalf {
    padding-top: 5rem;
  }
  figure {
    width: 80%;
    margin: 0 auto;
  }
  h1 {
    padding-left: 1rem;
  }
  .flex {
    display: block;
  }
  .topText {
    width: 80%;
    margin: 0 auto;
    margin-top: 0%;
  }
}
</style>
