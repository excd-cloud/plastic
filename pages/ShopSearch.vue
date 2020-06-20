<template>
  <div class="shopsearch">
    <TheNavigation v-if="$store.state.nav.status" />
    <div class="shopsearchHeader">
      <h2>Search for Shops!</h2>
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
          <div class="selectBox" @click="toggle">
            <div class="select">
              <p>エリアから検索する</p>
              <font-awesome-icon icon="angle-down" class="icon" />
            </div>
          </div>
          <!-- checkbox section -->
          <div class="checkboxArea" v-show="showOption">
            <div id="checkboxes" v-for="location in locations" :key="location">
              <label for="select" id="one">
                <input
                  type="checkbox"
                  :id="location.id"
                  :value="location.name"
                />
                {{ location.name }}
              </label>
            </div>
          </div>
        </div>

        <!-- search by item -->
        <!-- dropdown header -->
        <div class="selectBoxArea">
          <div class="selectBox" @click="toggle">
            <div class="select">
              <p>買いたいものを検索する</p>
              <font-awesome-icon icon="angle-down" class="icon" />
            </div>
          </div>
          <!-- checkbox section-->
          <div class="checkboxArea" v-show="showOption">
            <div id="checkboxes" v-for="item in items" :key="item.section">
              <label for="select" id="one">
                <input type="checkbox" :id="item.id" />
                {{ item.name }}
              </label>
            </div>
          </div>
        </div>

        <div class="searchOptionBtn">
          <button @click="close">クリアする</button>
          <button>検索する</button>
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
      showOption: false,
      seeFilter: false,
      categories: []
    };
  },
  created() {
    for (const index in this.$store.state.shop.shops) {
      this.$set(this.showDetails, index, false);
    }
  },
  // computed: {
  //   ...mapState({
  //     location: state => state.shops.location
  //   })
  // },
  methods: {
    toggleDetails(index) {
      if (this.currentDetail >= 0 && this.currentDetail != index) {
        this.showDetails[this.currentDetail] = false;
      }
      this.$set(this.showDetails, index, !this.showDetails[index]);
      this.currentDetail = index;
    },
    toggle() {
      this.showOption = !this.showOption;
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
      return this.$store.state.shop.shops.location;
    },
    shops() {
      return this.$store.state.shop.shops;
    },
    areas() {
      return this.$store.state.shop.areas;
    },
    items() {
      return this.$store.state.shop.items;
    },
    options() {
      return this.$store.state.shop.options;
    },
    selected() {
      return this.$store.selected;
    },
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
  width: 80%;
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
}

.tableHeader {
  display: grid;
  grid-template-columns: 50% 50%;
}

.shopListTop {
  display: grid;
  grid-template-columns: 60% 40%;
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  p {
    font-weight: 700;
  }
}
.shopList {
  margin-top: 2rem;
  .shopListHeader {
    display: grid;
    grid-template-columns: 60% 40%;
    padding: 10px;
    &:hover {
      background-color: orange;
      color: #fff;
      border-bottom: 1px solid #333333;
    }
  }
  .shopListingTable {
    border-bottom: 1px solid #000;
    width: 90%;
    margin: 0 auto;
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
  position: fixed;
  padding: 5rem 0rem 0rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: white;
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
    margin-bottom: 1rem;
    bottom: 0;
    right: 0;
    position: fixed;
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
</style>
