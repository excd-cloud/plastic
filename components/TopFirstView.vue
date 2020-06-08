<template>
  <div class="firstview">
    <div class="firstviewtophalf">
      <h1>Sayonara Plastic</h1>
      <figure>
        <img src="@/assets/img/frontpageimg.jpg" alt />
      </figure>
      <div class="topTagline">
        <h5>
          プラスチック包装の多さに
          <br />圧倒されているあなたへ
        </h5>
      </div>
    </div>

    <div class="tagline">
      <p>
        食料品の包装は、プラ、プラ…プラ！
        <br />全部プラスチックに包装されているではないか。
        <br />これではプラごみ汚染に貢献しているも同然。
        <br />でも減らすにはどうすれば？
      </p>
    </div>
    <p class="point">
      ※日本は、一人当たりの使い捨てプラスチックごみの量が
      最も多い国第２位です（国連環境計画調べ）。
    </p>
  </div>
</template>

<style lang="scss" scoped>
$lineheight: 25px;
.firstview {
  padding-bottom: 2rem;
}
.firstviewtophalf {
  padding-top: 5rem;
}

h1 {
  padding-bottom: 2rem;
  padding-left: 1rem;
}

figure {
  width: 80%;
  margin: 0 auto;
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
</style>
