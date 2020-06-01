import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    bulkshops: [
      {
        name: "Oil And Vinegar",
        sells: "オリーブオイル・ビネガー",
        address: "東京都目黒区自由が丘2-8-8 LeCielBleu 2階",
        description: "オリーブオイルとビネガーの量り売りをしている。",
        prefecture: "東京都",
        location: "自由が丘・二子玉川",
        category: "量り売りOK"
      },
      {
        name: "職人醤油松屋銀座店",
        sells: "醤油",
        address: "東京都中央区銀座3-6-1 松屋銀座店 地下2階",
        description:
          "瓶を持って来ると、しょうゆの価格だけで購入することができる。",
        prefecture: "東京都",
        location: "銀座・東京",
        category: "量り売りOK"
      },
      {
        name: "エコストア　アトレ恵比寿店",
        sells: "洗剤・石鹸",
        address: "東京都渋谷区恵比寿南1-6 アトレ恵比寿西館 2階",
        description: "洗剤や石鹸などを量り売りしている。",
        prefecture: "東京都",
        location: "渋谷・恵比寿",
        category: "量り売りOK"
      }
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
