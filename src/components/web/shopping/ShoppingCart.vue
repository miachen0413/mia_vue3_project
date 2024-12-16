<template>
  <div id="shopping-card">
    購物車
    <ul>
      <li v-for="(item, idx) in shopping_cart" :key="item.id">
        <div class="box">
          <div class="sort">{{ idx + 1 }}</div>
          <div class="name">{{ item.product_name }}</div>
          <div class="count">{{ item.product_count }}</div>
          <div class="price">{{ item.product_price }}</div>
          <div class="delete icon"><i class="icofont-bin" @click="deleteShoppingCart(item.id)"></i></div>
        </div>
        <!-- {{ item }} -->
      </li>
    </ul>
  </div>
</template>
<script>
import { getImagePath } from '@/utils/image';
// import { getShoppingCart } from '@/servies/get'
export default {
  mounted() {
  },
  data() {
    return {
      cart_data: []
    }
  },
  computed: {
    shopping_cart() {
      return this.$store.state.shopping.shopping_cart
    }
  },
  methods: {
    // async fetchData() {
    //   console.log('fetchDAta')
    //   try {
    //     const response = await getShoppingCart();
    //     this.product = response.data[0];
    //   } catch (err) {
    //     console.error(err);
    //   } finally {
    //     // loading.value = false;
    //   }
    // },
    getImagePath(img_name) {
      return getImagePath(img_name, 'images')
    },
    deleteShoppingCart(id) {
      this.$store.dispatch("shopping/deleteShoppingCart", { id })
    }
  }
}
</script>
<style lang="sass" scoped>
#shopping-card
  position: absolute
  background-color: white
  border-radius: .2rem
  border: 2px solid
  width: 60%
  left: 21%
  top: 80px
  z-index: 3
  ul li
    list-style: none
    .box
      display: grid
      grid-template-columns: 1fr 6fr 1fr 1fr 1fr
</style>