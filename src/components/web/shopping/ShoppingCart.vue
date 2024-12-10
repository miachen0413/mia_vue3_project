<template>
  <div id="shopping-card">
    購物車
    <ul>
      <li v-for="item in shopping_cart" :key="item.id">{{ item }}</li>
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
  }
}
</script>
<style lang="sass" scoped>

</style>