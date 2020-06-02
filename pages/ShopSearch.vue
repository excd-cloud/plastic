<template>
  <div class="shopsearch">
    <div class="shopsearchHeader">
      <h2>Search for Shops!</h2>
      <p>量り売りOK/保存容器OKの店舗を紹介します。</p>
    </div>

    <div class="searchFilter">
      <p>
        絞って検索する
        <i class="arrow down"></i>
      </p>
    </div>
    <div class="searchDetails">
      <div class="searchFilter">
        <p>
          エリアから検索する
          <i class="arrow down"></i>
        </p>
      </div>
    </div>

    <div class="tableHeader">
      <p>店舗名</p>
      <p>買えるもの</p>
    </div>

    <div class="shopListingTable" v-for="shop in shops" :key="shop.table" @click="toggleDetails">
      <p>{{ shop.name }}</p>
      <p>{{shop.product}}</p>
      <div class="shopDetails" v-show="details">
        <p>{{shop.name}}</p>
        <p>{{shop.address}}</p>
        <p>{{shop.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: false
    };
  },
  computed: {
    shops() {
      return this.$store.state.shop.shops;
    }
  },
  methods: {
    toggleDetails() {
      this.details = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.shopsearch {
  padding-bottom: 5rem;
}

.searchFilter {
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
</style>
