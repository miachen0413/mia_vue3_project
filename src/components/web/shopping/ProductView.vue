<template>
  <div id="product-view">
    <div class="top">
      <div class="img-box">
        <img :src="getImagePath(product.img_name)" alt="">
      </div>
      <div class="infor">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
      </div>
    </div>
    <div class="product-content">
      <p>{{ product.describe }}</p>
    </div>
    <div class="btn-box">
      <button type="button" class="btn">馬上購買</button>
      <button type="button" class="btn" @click="addShoppingCart">添加購物車</button>
    </div>
  </div>
</template>
<script>
import { getImagePath } from '@/utils/image';
import { getProducts } from '@/servies/get';
import { addShoppingCart } from '@/servies/post';
export default {
  mounted() {
    console.log(this.$route.params.id);
    this.fetchProduct(this.$route.params.id)
  },
  data() {
    return {
      product: {}
    }
  },
  methods: {
    async fetchProduct(id) {
      try {
        const result = await getProducts(id)
        console.log("-->", result)
        this.product = result.data[0];
      } catch (err) {
        console.log(err)
      }
    },
    getImagePath(img_name) {
      return getImagePath(img_name, 'images')
    },
    addShoppingCart() {
      const data = [{
        product_id: this.product.id,
        product_name: this.product.name,
        produc_price: this.product.price,
        product_count: 1,
        product_img_name: this.product.img_name
      }]
      addShoppingCart(data);
    }
  }
}
</script>
<style lang="sass" scoped>
#product-view
  display: flex
  flex-direction: column
  align-items: center
  position: relative
  width: 100%
  height: calc(100% - 5rem)
  overflow: scroll
  .top
    display: grid
    grid-template-columns: 1fr 1fr
    width: 80%
    .img-box
      width: 100%
      img
        width: 100%
  .product-content
    width: 70%
  .btn-box
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    margin: .5rem 0
    .btn
      width: 12rem
      height: 3rem
      margin: 0 1rem
</style>