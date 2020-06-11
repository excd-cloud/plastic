export const state = () => ({
  shops: [
    {
      name: "Oil And Vinegar",
      product: "オリーブオイル・ビネガー",
      address: "東京都目黒区自由が丘2-8-8 LeCielBleu 2階",
      description: "オリーブオイルとビネガーの量り売りをしている。",
      prefecture: "東京都",
      location: "自由が丘・二子玉川",
      category: "量り売りOK",
      url: "https://oilvinegar.jp/"
    },
    {
      name: "職人醤油松屋銀座店",
      product: "醤油",
      address: "東京都中央区銀座3-6-1 松屋銀座店 地下2階",
      description:
        "瓶を持って来ると、しょうゆの価格だけで購入することができる。",
      prefecture: "東京都",
      location: "銀座",
      category: "量り売りOK",
      url: "https://www.s-shoyu.com/matsuya"
    },
    {
      name: "エコストア　アトレ恵比寿店",
      product: "洗剤・石鹸",
      address: "東京都渋谷区恵比寿南1-6 アトレ恵比寿西館 2階",
      description: "洗剤や石鹸などを量り売りしている。",
      prefecture: "東京都",
      location: "恵比寿・代官山・中目黒",
      category: "量り売りOK",
      url: "https://www.atre.co.jp/store/ebisu/shop/detail/1581"
    }
  ],
  areas: [
    {
      name: "銀座",
      id: 1
    },
    {
      name: "恵比寿・代官山・中目黒",
      id: 2
    },
    {
      name: "自由が丘・二子玉川",
      id: 3
    }
  ],
  items: [
    {
      name: "オリーブオイル",
      id: 1
    },
    {
      name: "醤油",
      id: 2
    },
    {
      name: "洗剤",
      id: 3
    }
  ],
  options: [
    {
      name: "量り売りOK",
      id: 1
    },
    {
      name: "保存容器OK",
      id: 2
    }
  ]
});
