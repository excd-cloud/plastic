export const state = () => ({
  images: [
    {
      name: "Olive Oil",
      id: "oliveoil",
      file: "olive.jpg",
      description: "オリーブオイルを入れる容器",
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
          address: "東京都目黒区自由が丘2-8-8 LeCielBleu 2階",
          url: "https://goo.gl/maps/Bzq36uLt8cLnyxGX9"
        }
      ]
    },
    {
      name: "coffee",
      id: "coffee",
      file: "coffee.jpg",
      description: "コーヒー豆を入れる容器"
    },
    {
      name: "detergent",
      id: "detergent",
      file: "detergent.jpg",
      description: "洗剤を入れる容器"
    },
    {
      name: "meat",
      id: "meat",
      file: "meat.jpg",
      description: "お肉を入れる容器"
    },
    {
      name: "fish",
      id: "fish",
      file: "fish.jpg",
      description: "お魚を入れる容器"
    }
  ]
});

export const getters = {
  getImage: state => id => {
    return state.images.find(image => image.id == id);
  }
};
