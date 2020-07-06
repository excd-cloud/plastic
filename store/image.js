export const state = () => ({
  images: [
    {
      name: "Olive Oil",
      id: "oliveoil",
      file: "olive.jpg",
      description: "オリーブオイルを入れる容器",
      katakana: "オリーブオイル",
      details:
        "抗酸化作用を豊富に含むことから健康にもいいと知られるオリーブオイル。保存するうえで気をつけなければいけないのは「紫外線」「空気」「熱」。これらにさらしてしまうとオリーブオイルの風味や品質が失われてしまいます。長持ちさせるためには、紫外線を通さない黒い遮光瓶がおすすめのようです。透明のガラス瓶の場合、アルミホイルで包むなどすると紫外線から守れます。ペットボトルやプラスチックの容器は空気を通してしまうため不向きで、ガラス製の密閉容器がいいようです。",
      yes: "ガラス製容器（黒い遮光瓶がおすすめ）",
      no: "プラスチック製の容器、銅製品、金属製品",
      links: [
        {
          name: "アデリアのスイングストッパーボトル",
          url:
            "https://www.amazon.co.jp/アデリア-ウォーターボトル-720ml-スイングストッパーボトル-M-6446/dp/B01MRKS24B/ref=sr_1_6?dchild=1&qid=1591427398&sr=8-6&srs=5378113051"
        }
      ],
      references: [
        {
          name:
            "山田オリーブ園：オリーブオイルの保存方法についてオリーブ農家からのお願い",
          url: "https://organic-olive.com/olive-labo/olive-oil/3916/"
        }
      ],
      locations: [
        {
          name: "OIL&VINEGAR レストラン瑞穂",
          address: "東京都目黒区自由が丘2-8-8 LeCielBleu 2階",
          url: "https://goo.gl/maps/Bzq36uLt8cLnyxGX9"
        },
        {
          name: "OIL&VINEGAR 池袋店",
          address: "東京都豊島区西池袋1丁目1−25東武百貨店池袋店 B1F 11番地",
          url: "https://goo.gl/maps/ZcaC4PXf2sqjq5u7A"
        }
      ]
    },
    {
      name: "Bread",
      id: "bread",
      file: "breadcontainer.jpg",
      katakana: "パン",
      description: "パンを入れる容器",
      details:
        "パンは、かばんのスペースを占領しない布袋に入れてあげましょう。フランスパンなど背の高いパンは布で包むのがおすすめです。そうして持ち帰ったパンはすぐにでも食べてあげない限り、カビと乾燥との戦いがはじまります。この二つが早々に起きないためにも、水分を失うスピードをできるだけ遅らせたいところです。そのお手伝いをするのがブレッドケース。布袋、またはビーズワックスラップで包んだままブレッドケースに入れれば、2日から3日ほどもちます。ブレッドケースはステンレスのポットやダッチオーブンで代用できます。あるいは日の当たらないところで保存しておくのもいいようです。",
      yes: "持ち帰り容器には巾着袋または布、家での保存にはブレッドケースを",
      no: "プラスチック袋での保存。多湿の状態をつくり、カビが生えやすくなる",
      links: [
        {
          name: "フランスパンを包む布",
          url: "https://www.etsy.com/search?q=bread%20cloth",
          id: "bread"
        },
        {
          name: "小さいパンを入れる布袋",
          url: "https://www.etsy.com/search?q=bread%20bag",
          id: "bread"
        },
        {
          name: "パンを包むビーズワックスラップ",
          url: "https://www.etsy.com/search?q=beeswax+wrap",
          id: "bread"
        }
      ],
      references: [
        {
          name: "オランダの「パンは布袋に」運動",
          url: "https://note.com/trinity705/n/na9d0deaa06bf"
        }
      ],
      locations: [
        {
          name: "OIL&VINEGAR レストラン瑞穂",
          url: "https://goo.gl/maps/Bzq36uLt8cLnyxGX9"
        }
      ]
    },
    {
      name: "Coffee",
      id: "coffee",
      katakana: "コーヒー",
      file: "coffee.jpg",
      description: "コーヒー豆を入れる容器",
      details:
        "コーヒー豆は新鮮のうちが味わいどき。ところが最も新鮮なのは焙煎したすぐあとで、そこからは新鮮さが刻一刻と失われていきます。新鮮さをできるだけ長く保つには、(1)空気(2)湿気(3)熱(4)紫外線に触れないよう扱うことが肝です。保存容器には、紫外線を中に通さないステンレスの密閉容器を選びましょう。空気を吸引できるものであればなおいいでしょう。冷蔵・冷凍保存についてはいろいろな意見があるものの、冷蔵庫・冷凍庫から出し入れする際に結露ができて豆を悪くしてしまうのは否めないようです。暗所で常温保存すると温度や湿度の影響を受けることなく保存ができそうです。いずれにしても、お豆を悪くしてしまわないためには、一週間ほどで飲みきれる分量だけ購入しましょう。",
      yes: "密閉できるステンレス容器。空気を吸引できるものであればなお望ましい",
      no:
        "クラフトバッグに入れたままの保存。空気に触れないように、を意識しましょう",
      links: [
        {
          name: "野田琺瑯の2重蓋保存容器",
          url:
            "https://www.favoritestyle.jp/products/detail.php?product_id=1523",
          id: "coffee"
        },
        {
          name: "ZEROJAPANのセラミックキャニスター",
          url:
            "https://www.amazon.co.jp/ZEROJAPAN-%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%E3%82%AD%E3%83%A3%E3%83%8B%E3%82%B9%E3%82%BF%E3%83%BCM-%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88-SC-43-WH/dp/B00AH6I4ZK",
          id: "coffee"
        }
      ],
      references: [
        {
          name: "知ってるつもり？！正しいコーヒー豆の保存の方法（準備編）",
          url:
            "https://www.thecoffeeshop.jp/theshortissue/how-to-save-coffee-beans/"
        }
      ],
      locations: [
        {
          name: "近くの自家焙煎珈琲店を探す",
          url: "https://www.google.co.jp/maps/?hl=ja"
        }
      ]
    },
    {
      name: "Detergent",
      id: "detergent",
      katakana: "洗剤",
      file: "detergent.jpg",
      description: "洗剤を入れる容器",
      details:
        "衣類洗剤の量り売り販売をしている店舗は都心に数カ所あります。持ち帰る際にバッグの中でぶちまけてしまわないためにも、密閉性の高さが決め手です。衣類洗剤の詰め替え用は1リットルのものが一般的ですが、必要に応じて保存容器の大きさを選びましょう。なかには持ち帰った衣類洗剤をドリンクサーバーに移し替える人もいるようです。必要な分量は計量カップに注いで。おうちの中では直射日光に当たらない場所に置いてあげましょう。",
      yes:
        "持ち帰り容器にはこぼれない密閉容器を、家での保存にはドリンクサーバーでも",
      no: "リサイクルがむずかしいプラスチックの容器は最終手段に",
      links: [
        {
          name: "メイソンジャー（1L）",
          url:
            "https://www.amazon.co.jp/Ball-メイソンジャー-ワイドマウス-500cc-48703/dp/B00S136A8O"
        },
        {
          name: "ビバレッジサーバーアイヴィー（ダルトン）",
          url: "https://www.dulton.jp/onlineshop/g/gM411-216/"
        },
        {
          name: "計量カップ（パール金属）",
          url:
            "https://www.amazon.co.jp/dp/B078JXQF9S/?coliid=I3AWRYRVQWLUIN&colid=1AVX8O4ZJS6AM&psc=1&ref_=lv_ov_lig_dp_it"
        }
      ],
      references: [
        {
          name:
            "洗濯洗剤&柔軟剤/ドリンクディスペンサー/3COINS/IKEA/バス/トイレ のインテリア実例",
          url: "https://roomclip.jp/photo/MG2k"
        }
      ],
      locations: [
        {
          name: "エコ ストア　アトレ恵比寿店",
          url: "https://www.atre.co.jp/store/ebisu/shop/detail/1581"
        },
        {
          name: "バルクフーズ",
          url: "https://www.bulkfoods-market.com/store"
        }
      ]
    },
    {
      name: "Meat",
      id: "meat",
      katakana: "肉",
      file: "meat.jpg",
      description: "お肉を入れる容器",
      details:
        "お肉の大敵は空気。空気にさらさないように保存をしてあげないと雑菌がついたりカビが繁殖したりと食べられない状態になる恐れもあります。そのため、お肉にぴたりとくっつき空気を通さないサランラップで巻いてあげるのがいまや王道の保存法。打開策として挙げられるのは、再利用可能のシリコンバッグに入れての保存です。サランラップの代用品としても知られるシリコンバッグの多くは、オーブンやレンジ、食洗機でも使えて（※）プラスチックフリーです（※商品の表記を確認してからお買い求めください）。",
      yes:
        "密閉できるシリコンバッグ。ものによってはオーブンに入れられたり、湯煎で温めることもできます",
      no: "サランラップでの保存とはさようならをしましょう",
      links: [
        {
          name: "スタッシャー",
          url: "https://stasherbag.jp/",
          id: "meat"
        }
      ],
      references: [
        {
          name:
            "スタッシャーを早速使い始めました。肉の冷凍保存の仕組みづくり。",
          url:
            "https://daysandthings.com/2020/03/15/%E3%82%B9%E3%82%BF%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC%E3%82%92%E6%97%A9%E9%80%9F%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%E8%82%89%E3%81%AE%E5%86%B7%E5%87%8D%E4%BF%9D/"
        }
      ],
      locations: [
        {
          name: "近くの精肉店を探す",
          url: "https://www.google.co.jp/maps/?hl=ja"
        }
      ]
    },
    {
      name: "Fish",
      id: "fish",
      katakana: "魚",
      file: "fish.jpg",
      description: "お魚を入れる容器",
      details:
        "魚は肉と同様、空気にさらすと乾燥や酸化が進み鮮度が落ちてしまいます。保存容器には密閉できるシリコンバッグを選びましょう。すぐに調理しないのであれば、帰宅後、すみやかに冷凍庫へ。冷凍庫には二週間ほど保存しておけるようですが、開け閉めの回数によって保ちのよさも少しずつ変わります。サランラップの代用品としても知られるシリコンバッグの多くは、オーブンやレンジ、食洗機でも使えて（※）プラスチックフリーです（※商品の表記を確認してからお買い求めください）。",
      yes: "シリコンバッグに入れて保存。すぐに調理しない場合は冷凍庫へ",
      no: "ラップに包む日々とはさようならを",
      links: [
        {
          name: "スタッシャー",
          url: "https://stasherbag.jp/",
          id: "fish"
        }
      ],
      references: [
        {
          name: "切り身魚の上手な保存方法とは？（損保ジャパン）",
          url: "http://japanda-ch.jp/trouble/life/500371.html"
        }
      ],
      locations: [
        {
          name: "近くの鮮魚店を探す",
          url: "https://www.google.co.jp/maps/?hl=ja"
        }
      ]
    }
  ]
});

export const getters = {
  getImage: state => id => {
    return state.images.find(image => image.id == id);
  }
};
