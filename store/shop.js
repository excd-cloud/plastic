export const state = () => ({
  shops: [
    {
      name: "Oil And Vinegar",
      item: "オリーブオイル・ビネガー",
      address: "東京都目黒区自由が丘2-8-8 LeCielBleu 2階",
      description: "オリーブオイルとビネガーの量り売りをしている。",
      prefecture: "東京都",
      location: "自由が丘・二子玉川",
      station: "東横線自由が丘駅から徒歩4分",
      category: "量り売りOK",
      url: "https://oilvinegar.jp/",
      maplink: "https://goo.gl/maps/mZARoWaZ3QHT3Skj7"
    },
    {
      name: "職人醤油松屋銀座店",
      item: "醤油",
      address: "東京都中央区銀座3-6-1 松屋銀座店 地下2階",
      description:
        "瓶を持って来ると、しょうゆの価格だけで購入することができる。",
      prefecture: "東京都",
      location: "銀座",
      station:
        "東京メトロ銀座線、丸ノ内線、日比谷線「銀座駅」直結。JR「有楽町駅」徒歩8分",
      category: "量り売りOK",
      url: "https://www.s-shoyu.com/matsuya",
      maplink: "https://goo.gl/maps/ajFqazMJcUFM7AgQ9"
    },
    {
      name: "エコストア　アトレ恵比寿店",
      item: "洗剤・石鹸",
      address: "東京都渋谷区恵比寿南1-6 アトレ恵比寿西館 2階",
      description: "洗剤や石鹸などを量り売りしている。",
      prefecture: "東京都",
      location: "恵比寿・代官山・中目黒",
      station: "JR山手線「恵比寿駅」直結",
      category: "量り売りOK",
      url: "https://www.atre.co.jp/store/ebisu/shop/detail/1581",
      maplink: "https://goo.gl/maps/2suGRaRFLBqxL5vu9"
    },
    {
      name: "バルクフーズ　元住吉店",
      item: "食品",
      address: "神奈川県川崎市中原区木月祇園町7-13　メゾンSK102",
      description:
        "食べ物から日用品まで墓売りで購入できるお店。はちみつやナッツ、シャンプーや洗剤が買える。",
      prefecture: "神奈川県",
      location: "多摩川・武蔵小杉",
      station: "元住吉",
      url: "https://www.bulkfoods-market.com/",
      maplink: "https://goo.gl/maps/YzpGuD2zvYpUeZQS6"
    },
    {
      name: "バルクフーズ　新丸子店",
      item: "食品",
      address: "神奈川県川崎市中原区新丸子町769",
      description:
        "食べ物から日用品まで墓売りで購入できるお店。はちみつやナッツ、シャンプーや洗剤が買える。",
      prefecture: "神奈川県",
      location: "多摩川・武蔵小杉",
      station: "新丸子",
      url: "https://www.bulkfoods-market.com/",
      maplink: "https://goo.gl/maps/fBK2bhQ8SZHAZtpP7"
    },
    {
      name: "GAIA お茶の水店",
      item: "洗剤・石鹸",
      address: "東京都千代田区神田駿河台3-3-13",
      description: "すすぎがいらない洗剤「海へ…」を量り売りで買える。",
      prefecture: "神奈川県",
      location: "多摩川・武蔵小杉",
      station: "御茶ノ水駅",
      url: "http://www.gaia-ochanomizu.co.jp/shop/pages/shop_info.aspx",
      maplink: "https://goo.gl/maps/uBRTm6RiA6P6315R8"
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
