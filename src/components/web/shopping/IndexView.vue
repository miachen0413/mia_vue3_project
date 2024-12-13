<template>
  <div id="shopping">
    <div class="shopping-head">
      <div class="logo">
        <img src="/LOGO.jpeg" alt="">
      </div>
      <search-box></search-box>
      <div class="right">
        <span class="shopping-cart" @click="setIsShowShoppingCart">
          <span class="cart-count"> {{ shopping_cart_count }}</span>
          <i class="icofont-cart"></i>
        </span>
        <span>登入</span>
        <span>註冊</span>
      </div>
    </div>
    <!-- <content-view></content-view> -->
    <shopping-cart v-show="is_show_shopping_cart"></shopping-cart>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchBox from '@/components/common/SearchBox.vue'
import ShoppingCart from './ShoppingCart.vue';
export default {
  components: { SearchBox, ShoppingCart },
  mounted() {
    console.log("fetchShoppingCart")
    this.$store.dispatch('shopping/fetchShoppingCart');
  },
  data() {
    return {
      is_show_shopping_cart: false
    }
  },
  computed: {
    shopping_cart_count() {
      return this.$store.state.shopping.shopping_cart.length;
    }
  },
  methods: {
    setIsShowShoppingCart() {
      this.is_show_shopping_cart = !this.is_show_shopping_cart;
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
  .shopping-cart
    font-size: 1.6rem
    position: relative
    .cart-count
      position: absolute
      top: -.5rem
      right: -.8rem
      font-size: .9rem
      text-align: center
      width: 1.1rem
      height: 1.1rem
      line-height: 1.1rem
      border-radius: 50%
      background-color: red
      color: white
</style>
