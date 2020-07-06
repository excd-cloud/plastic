<template>
  <div class="shopsearch">
    <transition name="slide-fade">
      <TheNavigation v-if="$store.state.nav.status" />
    </transition>
    <div class="shopsearchHeader">
      <h3>Search for Shops!</h3>
      <p>量り売りOK/保存容器OKの店舗を紹介します。</p>
    </div>
    <!-- filter search button -->
    <div class="searchFilterbtn" @click="filterSearch">
      <p>
        絞って検索する
        <font-awesome-icon icon="angle-down" class="icon" />
      </p>
    </div>

    <form class="filterMenu" v-show="seeFilter">
      <font-awesome-icon
        icon="times"
        class="closeFilter"
        @click="closeFilter"
      />
      <div class="filterMenuInner">
        <h3>Search for Shops!</h3>
        <!-- search by area -->
        <!-- dropdown header -->

        <div class="selectBoxArea">
          <div class="selectBox" @click="toggleLocation">
            <div class="select">
              <p>エリアから検索する</p>
              <font-awesome-icon icon="angle-down" class="icon" />
            </div>
          </div>

          <!-- checkbox section -->
          <transition name="slide-down">
            <div class="checkboxArea" v-show="showLocation">
              <div
                id="checkboxes"
                v-for="location in selectLocations"
                :key="location.name"
              >
                <label for="select" id="one">
                  <input type="checkbox" v-model="location.status" />
                  {{ location.name }}
                </label>
              </div>
            </div>
          </transition>
        </div>

        <!-- search by item -->
        <!-- dropdown header -->
        <div class="selectBoxArea">
          <div class="selectBox" @click="toggleItem">
            <div class="select">
              <p>買いたいものを検索する</p>
              <font-awesome-icon icon="angle-down" class="icon" />
            </div>
          </div>
          <!-- checkbox section-->
          <transition name="slide-down">
            <div class="checkboxArea" v-show="showItem">
              <div id="checkboxes" v-for="item in selectItems" :key="item.name">
                <label for="select" id="one">
                  <input type="checkbox" v-model="item.status" />
                  {{ item.name }}
                </label>
              </div>
            </div>
          </transition>
        </div>

        <div class="searchOptionBtn">
          <div class="searchOption" @click="clear">
            <span class="letterspace">クリアする</span>
          </div>
          <div class="searchOption" @click="search">
            <span class="letterspace">検索する</span>
          </div>
        </div>
      </div>
    </form>
    <div v-if="searchShops.length == 0">
      <p class="noMatch">一致するものはありませんでした。</p>
    </div>
    <div v-else>
      <div class="shopList">
        <!-- shoplist -->
        <div class="shopListTop">
          <p>店舗名</p>
          <p>アイテム</p>
        </div>
        <!-- shop table -->
        <div
          class="shopListingTable"
          v-for="(shop, index) in searchShops"
          :key="shop.table"
          @click="toggleDetails(index)"
        >
          <!-- shop table header -->
          <div class="shopListHeader">
            <p class="shopname">{{ shop.name }}</p>
            <p>{{ shop.item }}</p>
          </div>
          <!-- shop table details -->
          <div class="shopDetails" v-if="showDetails[index]">
            <p class="detailsHeader">{{ shop.name }}</p>
            <p class="address">
              <font-awesome-icon icon="map-marker-alt" class="icon" />
              <a :href="shop.maplink" target="_blank">{{ shop.address }}</a>
            </p>
            <p class="station">
              <font-awesome-icon icon="train" class="icon" />
              {{ shop.station }}
            </p>
            <p class="time">
              <font-awesome-icon icon="clock" class="icon" />
              {{ shop.hours }}
            </p>
            <p class="shoplink">
              <font-awesome-icon icon="hand-point-up" class="icon" />
              <a :href="shop.url" target="_blank">WEB</a>
            </p>
            <p class="description">
              <font-awesome-icon icon="comment" class="icon" />
              {{ shop.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavigation from "../components/TheNavigation";
import { mapState } from "vuex";
export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      currentDetail: null,
      seeFilter: false,
      showItem: false,
      showLocation: false,
      showDetails: [],
      categories: [],
      selectLocations: [],
      selectItems: [],
      searchShops: []
    };
  },
  created() {
    console.log(this.selectLocations);
    console.log(this.selectItems);
    this.searchShops = this.$store.state.shop.shops;

    let checkList = [];
    let count = 0;

    for (const index in this.$store.state.shop.shops) {
      const shop = this.$store.state.shop.shops[index];

      if (checkList.indexOf(shop.location) < 0) {
        // もし配列の中に値があったら、そのindexを教えてくれる。なければ-1を返す
        this.$set(this.selectLocations, count, {
          name: shop.location,
          status: false
        });
        this.$set(this.selectItems, count, {
          name: shop.item,
          status: false
        });
        checkList.push(shop.location);
        count++;
      }
      this.$set(this.showDetails, index, false);
    }
  },
  methods: {
    search() {
      let check1 = true;
      let check2 = true;
      for (const index in this.selectLocations) {
        const location = this.selectLocations[index];
        if (location.status) check1 = false;
      }
      for (const index in this.selectItems) {
        const item = this.selectItems[index];
        if (item.status) check2 = false;
      }
      let selectedShops1 = [];
      let selectedShops2 = [];
      if (check1) {
        selectedShops1 = this.$store.state.shop.shops;
      } else {
        for (const index in this.$store.state.shop.shops) {
          const shop = this.$store.state.shop.shops[index];
          for (const index2 in this.selectLocations) {
            const location = this.selectLocations[index2];
            if (location.status && location.name == shop.location) {
              selectedShops1.push(shop);
            }
          }
        }
      }
      if (check2) {
        selectedShops2 = selectedShops1;
      } else {
        for (const index in selectedShops1) {
          const shop = selectedShops1[index];
          for (const index2 in this.selectItems) {
            const item = this.selectItems[index2];
            if (item.status && item.name == shop.item) {
              selectedShops2.push(shop);
            }
          }
        }
      }
      console.log(selectedShops2); // これが最終的な検索結果
      this.searchShops = selectedShops2;
      this.seeFilter = false;
      // for (const a in this.$store.state.shop.shops) {
      //   const shop = this.$store.state.shop.shops[a];
      // }
    },
    clear() {
      this.searchShops = this.$store.state.shop.shops;
      let checkList = [];
      let count = 0;

      for (const index in this.$store.state.shop.shops) {
        const shop = this.$store.state.shop.shops[index];

        if (checkList.indexOf(shop.location) < 0) {
          // もし配列の中に値があったら、そのindexを教えてくれる。なければ-1を返す
          this.$set(this.selectLocations, count, {
            name: shop.location,
            status: false
          });
          this.$set(this.selectItems, count, {
            name: shop.item,
            status: false
          });
          checkList.push(shop.location);
          count++;
        }
        this.$set(this.showDetails, index, false);
      }
      /*

      for (const index in this.$store.state.shop.shops) {
        const shop = this.$store.state.shop.shops[index];
        this.$set(this.showDetails, index, false);
        this.$set(this.selectLocations, index, {
          name: shop.location,
          status: false
        });
        this.$set(this.selectItems, index, {
          name: shop.item,
          status: false
        });
      }*/
    },
    toggleLocation() {
      this.showLocation = !this.showLocation;
    },
    toggleItem() {
      this.showItem = !this.showItem;
    },
    toggleDetails(index) {
      if (this.currentDetail >= 0 && this.currentDetail != index) {
        this.showDetails[this.currentDetail] = false;
      }
      this.$set(this.showDetails, index, !this.showDetails[index]);
      this.currentDetail = index;
    },
    filterSearch() {
      this.seeFilter = true;
    },
    closeFilter() {
      this.seeFilter = false;
    }
  },
  computed: {
    locations() {
      let locations = [];
      const shops = this.$store.state.shop.shops;
      for (let i = 0; i < shops.length; i++) {
        locations.push(shops[i].location);
      }
      return locations;
    },
    items() {
      let items = [];
      const shops = this.$store.state.shop.shops;
      for (let i = 0; i < shops.length; i++) {
        items.push(shops[i].item);
      }
      return items;
    },
    shops() {
      return this.$store.state.shop.shops;
    }
  }
};
</script>

<style lang="scss" scoped>
// * * * slide-fade * * * //
.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.65, 0.2, 0.4, 0.65);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-300px);
  opacity: 0;
}
// * * * slide-fade * * * //

// * * * slide-down * * * //
.slide-down-enter-active {
  transition: all 0.4s cubic-bezier(0.3, 0.4, 0.4, 0.65);
}

.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.35, 0.4, 0.4, 0.65);
}

.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
// * * * slide-fade * * * //

@mixin fontformat {
  font-size: 12px;
  letter-spacing: 0.08rem;
}

.icon {
  margin-right: 5px;
}

.searchFilterbtn {
  width: 30%;
  border: 1px solid black;
  padding: 0.5rem 0rem;
  text-align: center;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
}

.shopsearch {
  border-bottom: 1px solid #000;
  padding-bottom: 6rem;
}
.shopsearchHeader {
  text-align: center;
  padding: 7rem 0rem 2rem;
  h2 {
    padding-bottom: 1rem;
  }
}

.noMatch {
  text-align: center;
  margin-top: 2rem;
}

.selectBox,
#checkboxes {
  cursor: pointer;
}
.selectBox,
#checkboxes input,
button {
  &:hover {
    cursor: pointer;
  }
}
.selectBoxArea {
  width: 50%;
  margin: 0 auto;
  .select {
    p {
      width: 70%;
      margin-left: 10%;
    }
  }
}

.tableHeader {
  display: grid;
  grid-template-columns: 50% 50%;
}

.shopListTop {
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 10px;
  p {
    font-weight: 700;
  }
}
.shopList {
  width: 70%;
  margin: 6rem auto;
  .shopListHeader {
    display: grid;
    grid-template-columns: 60% 40%;
    padding: 10px;
    transition: 0.5s;
    &:hover {
      background-color: orange;
      color: #fff;
      border-bottom: 1px solid #333333;
    }
  }
  .shopListingTable {
    border-bottom: 1px solid #000;

    p:first-child {
      margin-right: 20px;
    }
  }
  .shopDetails {
    display: grid;
    grid-template-columns: 100%;
    padding: 10px;
    .detailsHeader {
      font-size: 20px;
      margin-bottom: 5px;
    }
    .address {
      a {
        border-bottom: 1px solid #000;
      }
    }
    .shoplink {
      margin-bottom: 10px;
      a {
        border-bottom: 1px solid #000;
      }
    }
    .description {
      padding: 2rem;
      border: 1px solid #333333;
      width: 50%;
      margin: 0 auto;
    }
  }
}

.filterMenu {
  position: absolute;
  padding: 2rem 0rem 0rem;
  top: 5%;
  left: 20%;
  width: 60%;
  height: auto;
  z-index: 20;
  background-color: rgba(255, 255, 255, 0.97);
  border: black 1px solid;
  .closeFilter {
    position: relative;
    left: 95%;
    &:hover {
      cursor: pointer;
    }
  }
  h3 {
    text-align: center;
    padding: 3rem 0rem 5rem;
    width: 100%;
  }
  .filterMenuInner {
    width: 70%;
    margin: 0 auto;
    .select {
      padding: 0.5rem;
      width: 100%;
      border: black 1px solid;
      display: flex;
      justify-content: center;
      justify-content: space-around;
    }
    .selectBoxArea {
      margin-bottom: 5rem;
    }
  }
  #checkboxes {
    padding: 0.5rem 0rem 0rem 1rem;
    @include fontformat();
    label {
      display: block;
    }
    input {
      margin-right: 1rem;
    }
  }
  .checkboxArea {
    border: 0.5px solid #000;
    border-top: none;
    padding: 1rem 0rem;
    height: 150px;
    overflow-y: scroll;
  }
  .searchOptionBtn {
    display: flex;
    margin-bottom: 3rem;
    bottom: 0;
    right: 0;
    width: 100%;
    .searchOption {
      font-size: 12px;
      width: 100%;
      background-color: #000;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0rem 1rem;
      padding: 1rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .searchFilterbtn {
    width: 80%;
  }
  .filterMenu {
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    .searchOptionBtn {
      .searchOption {
        padding: 0.5rem;
        margin: 0;
        &:first-child {
          margin-right: 0.5rem;
        }
      }
    }
  }
  .selectBoxArea {
    width: 100%;
  }
  .shopList {
    width: 90%;
    margin: 4rem auto;
    .shopDetails {
      .description {
        width: 70%;
      }
    }
  }
}
</style>
