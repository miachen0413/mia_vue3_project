<template>
  <div id="shopping">
    <button @click="fetchProducts">Add product</button>
    <div class="shopping-head">
      <div class="logo">
        <img src="/LOGO.jpeg" alt="">
      </div>
      <search-box></search-box>
      <div class="right">
        <span>登入</span>
        <span>註冊</span>
      </div>
    </div>
    <!-- <content-view></content-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
import SearchBox from '@/components/common/SearchBox.vue'
// import ContentView from './ContentView.vue'
import { addAdvertisess } from '@/servies/post';
import db from './db.json'
export default {
  components: { SearchBox },
  data() {
    return {
    }
  },
  methods: {
    fetchProducts() {
      addAdvertisess(db.advertises)
    }
  }
}

</script>

<style lang="sass" scoped>
#shopping
  margin: 15px
  border: 2px solid
  height: calc(100vh - 120px)
.shopping-head
  background-color: pink
  display: flex
  justify-content: space-between
  align-items: center
  height: 5rem
  .logo
    flex: 1
    margin-left: .5rem
    img
      width: 4rem
      height: 4rem
      border-radius: 50%
      overflow: hidden
  .right
    span
      margin: 0 .5rem
</style>
