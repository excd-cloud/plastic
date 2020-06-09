<template>
  <div class="shopsearch">
    <div class="shopsearchHeader">
      <h2>Search for Shops!</h2>
      <p>量り売りOK/保存容器OKの店舗を紹介します。</p>
    </div>

    <div class="searchFilterbtn">
      <p>
        絞って検索する
        <font-awesome-icon icon="angle-down" class="icon" />
      </p>
    </div>

    <form class="filterMenu">
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
            <div id="checkboxes" v-for="area in areas" :key="area.section">
              <label for="select" id="one">
                <input type="checkbox" :id="area.id" />
                {{ area.name }}
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
          <!-- checkbox section -->
          <div class="checkboxArea" v-show="showOption">
            <div id="checkboxes" v-for="item in items" :key="item.section">
              <label for="select" id="one">
                <input type="checkbox" :id="item.id" />
                {{ item.name }}
              </label>
            </div>
          </div>
        </div>
        <!-- search by bulk or package free -->
        <!-- dropdown header -->
        <div class="selectBoxArea">
          <div class="selectBox" @click="toggle">
            <div class="select">
              <p>量り売りOK／持ち込み容器OK</p>
              <font-awesome-icon icon="angle-down" class="icon" />
            </div>
          </div>
          <!-- checkbox section -->
          <div class="checkboxArea" v-show="showOption">
            <div id="checkboxes" v-for="option in options" :key="option.section">
              <label for="select" id="one">
                <input type="checkbox" :id="option.id" />
                {{ option.name }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="searchOptionBtn">
        <button>クリアする</button>
        <button>検索する</button>
      </div>
    </form>

    <div class="shopListingTable" v-for="shop in shops" :key="shop.table" @click="toggleDetails">
      <p>{{ shop.name }}</p>
      <p>{{ shop.product }}</p>
      <div class="shopDetails" v-show="details">
        <p>{{ shop.name }}</p>
        <p>{{ shop.address }}</p>
        <p>{{ shop.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: false,
      showOption: false
    };
  },
  computed: {
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
    }
  },
  methods: {
    toggleDetails() {
      this.details = true;
    },
    toggle() {
      showOption = !showOption;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin fontformat {
  font-size: 12px;
  letter-spacing: 0.08rem;
}

.shopsearch {
  padding-bottom: 5rem;
}

.searchFilterbtn {
  width: 80%;
  border: 1px solid black;
  padding: 0.5rem 0rem;
  text-align: center;
  margin: 0 auto;
}

.shopsearchHeader {
  text-align: center;
  padding: 2rem 0rem;
}

.tableHeader {
  display: grid;
  grid-template-columns: 50% 50%;
}

.shopListingTable {
  display: grid;
  grid-template-columns: 50% 50%;
}

.shopDetails {
  display: grid;
  grid-template-columns: 100%;
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
    position: fixed;
    width: 100%;

    button {
      background: #000;
      color: #fff;
      border: none;
      padding: 0.5rem;
      width: 50%;
      margin: 0rem 0.5rem;
    }
  }
}
</style>
