export const state = () => ({
  images: [
    {
      name: "oliveoil",
      id: "store-olive-oil",
      file: "olive.jpg",
      description: "オリーブオイルを入れる容器"
    },
    {
      name: "breadcontainer",
      id: "store-your-bread",
      file: "breadcontainer.jpg",
      description: "パンを入れる容器"
    },
    {
      name: "coffee",
      id: "pour-your-coffee",
      file: "coffee.jpg",
      description: "コーヒーを入れる容器"
    },
    {
      name: "detergent",
      id: "pour-your-coffee",
      file: "detergent.jpg",
      description: "洗剤を入れる容器"
    },
    {
      name: "meat",
      id: "place-your-meat",
      file: "meat.jpg",
      description: "お肉を入れる容器"
    },
    {
      name: "fish",
      id: "place-your-fish",
      file: "fish.jpg",
      id: "place-your-fish",
      description: "お魚を入れる容器"
    }
  ]
});

export const getters = {
  getImage: state => id => {
    return state.images.find(image => image.id == id);
  }
};
