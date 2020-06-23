<template>
  <div class="shopsearch">
    <TheNavigation v-if="$store.state.nav.status" />
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
          <div class="checkboxArea" v-show="showLocation">
            <div id="checkboxes" v-for="(location, index) in locations" :key="index.location">
              <label for="select" id="one">
                <input type="checkbox" :value="location" v-model="selectLocations[index].status" />
                {{ location }}
              </label>
            </div>
          </div>
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
          <div class="checkboxArea" v-show="showItem">
            <div id="checkboxes" v-for="(value, index) in items" :key="index">
              <label for="select" id="one">
                <input type="checkbox" :value="value" v-model="selectItems[index].status" />
                {{ value }}
              </label>
            </div>
          </div>
        </div>

        <div class="searchOptionBtn">
          <div @click="clear">
            <span class="letterspace">クリアする</span>
          </div>
          <button>
            <span class="letterspace">検索する</span>
          </button>
        </div>
      </div>
    </form>
    <div class="shopList">
      <!-- shoplist -->
      <div class="shopListTop">
        <p>店舗名</p>
        <p>アイテム</p>
      </div>
      <!-- shop table -->
      <div
        class="shopListingTable"
        v-for="(shop, index) in shops"
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
            {{ shop.address }}
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
      showDetails: [],
      currentDetail: null,
      seeFilter: false,
      categories: [],
      showItem: false,
      showLocation: false,
      selectLocations: [],
      selectItems: []
    };
  },
  created() {
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
    }
  },
  methods: {
    clear() {
      for (const index in this.$store.state.shop.shops) {
        this.$set(this.selectItems, index, false);
        this.$set(this.selectLocations, index, false);
      }
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
    close() {
      this.showOption = false;
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
    },
    // selected() {
    //   return this.$store.selected;
    // },
    filteredShops() {
      return this.shops.filter(shop => {
        return shop.location.match();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
    .shoplink {
      margin-bottom: 10px;
      a {
        border-bottom: 1px solid #000;
      }
    }
    .description {
      padding: 2rem;
      border: 1px solid #333333;
      width: 70%;
      margin: 0 auto;
    }
  }
}

.filterMenu {
  position: absolute;
  padding: 5rem 0rem 0rem;
  top: 5%;
  left: 20%;
  width: 60%;
  height: auto;
  z-index: 20;
  background-color: rgba(255, 255, 255, 0.97);
  border: black 1px solid;
  h3 {
    text-align: center;
    padding-bottom: 5rem;
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
  }
  .searchOptionBtn {
    display: flex;
    margin-bottom: 3rem;
    bottom: 0;
    right: 0;
    width: 100%;
    button {
      background: #000;
      color: #fff;
      border: none;
      padding: 0.5rem;
      width: 100%;
      margin: 0rem 0.5rem;
    }
  }
}

@media screen and (max-width: 576px) {
  .searchFilterbtn {
    width: 80%;
  }
  .shopList {
    width: 90%;
    margin: 4rem auto;
  }
  .selectBoxArea {
    width: 100%;
  }
  .filterMenu {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
