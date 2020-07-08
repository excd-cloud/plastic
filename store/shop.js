export const state = () => ({
  shops: [
    {
      name: "nue by Totoya",
      item: "食品全般",
      address: "東京都渋谷区代々木5-60-2（Wonderland内）",
      description:
        "ひよこ豆などの豆類からナッツ、チョコレート、ドライフルーツ、パスタ、オリーブオイルと数多くの食材を取り揃えている量り売り専門店。",
      prefecture: "東京",
      location: "渋谷・代々木・下北沢",
      station: "東京メトロ千代田線代々木公園駅から徒歩7分",
      hours: "日曜日 12pm-6pm",
      url: "https://www.nuebytotoya.com/",
      maplink: "https://goo.gl/maps/GuaC8ofEktbPXJUW8"
    },
    {
      name: "Oil And Vinegar",
      item: "オリーブオイル・ビネガー",
      address: "東京都目黒区自由が丘2-8-8 LeCielBleu 2階",
      description: "オリーブオイルとビネガーの量り売りをしている。",
      prefecture: "東京都",
      location: "自由が丘・二子玉川",
      station: "東横線自由が丘駅から徒歩4分",
      category: "量り売りOK",
      hours: "水-土: 12pm-2pm, 水-月: 5pm-10pm",
      url: "https://oilvinegar.jp/",
      maplink: "https://goo.gl/maps/mZARoWaZ3QHT3Skj7"
    },
    {
      name: "兎と寅",
      item: "食品全般",
      address: "東京都港区西麻布 2-25-11 1F 有限会社コンタクト・イースト内",
      description:
        "パスタやドライフルーツ、ナッツなど、イタリア・フランスを中心としたオーガニックの輸入食材が量り売りできる。",
      prefecture: "東京",
      location: "六本木・麻布・広尾",
      station: "東京メトロ日比谷線「広尾駅」から徒歩8分",
      hours: "不定休",
      url: "https://usatora.tokyo/",
      maplink: "https://goo.gl/maps/Zu886T8HPXTB1M4h6"
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
      hours: "10am-8pm",
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
      hours: "10am-9pm",
      category: "量り売りOK",
      url: "https://www.atre.co.jp/store/ebisu/shop/detail/1581",
      maplink: "https://goo.gl/maps/2suGRaRFLBqxL5vu9"
    },
    {
      name: "バルクフーズ　元住吉店",
      item: "食品全般",
      address: "神奈川県川崎市中原区木月祇園町7-13　メゾンSK102",
      description:
        "食べ物から日用品まで墓売りで購入できるお店。はちみつやナッツ、シャンプーや洗剤が買える。",
      prefecture: "神奈川県",
      location: "多摩川・武蔵小杉",
      hours: "月・火・水・金・土・日：10am-5:30pm",
      station: "東急東横線「元住吉駅」西口から徒歩8分ほど",
      url: "https://www.bulkfoods-market.com/",
      maplink: "https://goo.gl/maps/YzpGuD2zvYpUeZQS6"
    },
    {
      name: "バルクフーズ　元住吉駅前店",
      item: "食品全般",
      address: "神奈川県川崎市中原区木月1-35-36",
      description:
        "食べ物から日用品まで墓売りで購入できるお店。はちみつやナッツ、シャンプーや洗剤が買える。",
      prefecture: "神奈川県",
      location: "多摩川・武蔵小杉",
      hours: "月・火・水・金・土・日：11am-7pm",
      station: "東急東横線「元住吉駅」西口から徒歩1分ほど",
      url: "https://www.bulkfoods-market.com/",
      maplink: "https://goo.gl/maps/pMjgCJxc7naDtXBG8"
    },
    {
      name: "バルクフーズ　新丸子店",
      item: "食品全般",
      address: "神奈川県川崎市中原区新丸子町769",
      description:
        "食べ物から日用品まで墓売りで購入できるお店。はちみつやナッツ、シャンプーや洗剤が買える。",
      prefecture: "神奈川県",
      location: "多摩川・武蔵小杉",
      hours: "11am-8pm",
      station: "東急東横線「新丸子駅」西口から徒歩1分",
      url: "https://www.bulkfoods-market.com/",
      maplink: "https://goo.gl/maps/xkMcLiSrjMi1RD6X7"
    },
    {
      name: "GAIA お茶の水店",
      item: "洗剤・石鹸",
      address: "東京都千代田区神田駿河台3-3-13",
      description: "すすぎがいらない洗剤「海へ…」を量り売りで買える。",
      prefecture: "東京",
      location: "御茶ノ水・上野",
      hours: "11:30am-7:30pm",
      station: "御茶ノ水駅",
      url: "http://www.gaia-ochanomizu.co.jp/shop/pages/shop_info.aspx",
      maplink: "https://goo.gl/maps/uBRTm6RiA6P6315R8"
    },
    {
      name: "Groovy Nuts",
      item: "ナッツ",
      address: "	東京都目黒区東山1-1-5東山ATビル102",
      description: "さまざまなフレーバーナッツが量り売りできるお店。",
      prefecture: "東京",
      location: "恵比寿・代官山・中目黒",
      hours: "11am-8pm",
      station: "中目黒駅",
      url: "https://groovynuts.jp/",
      maplink: "https://goo.gl/maps/R2iFSvaojWjPPDZ36"
    },
    {
      name: "タップアンドグロウラー",
      item: "クラフトビール",
      address: "東京都世田谷区北沢2-33-6 飯嶋ビル 1階",
      description:
        "常時18種類のビールを用意しているクラフトビールショップ。店頭で購入できるリユースボトルにクラフトビールを注いでもらおう。二度目以降は、リユースボトルの購入は不要。",
      prefecture: "東京",
      location: "渋谷・代々木・下北沢",
      hours: "3pm-12am",
      station: "下北沢駅",
      url: "https://www.craftbeers.tokyo/",
      maplink: "https://goo.gl/maps/SZo9cGnFLpuyRG6V9"
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
