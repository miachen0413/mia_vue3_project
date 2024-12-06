<template>
  <div class="box-view" @click="goto">
    <div class="inner-box">
      <div class="pic">
        <img :src="getImagePath(product.img_name)" alt="">
      </div>
      <p>{{ product.name }}</p>
      <p>{{ product.price }} 元</p>
    </div>
  </div>
</template>

<script>
import { getImagePath } from '@/utils/image';
export default {
  name: 'BoxView',
  props: ['product'],
  data() {
    return {
    }
  },
  methods: {
    getImagePath(img_name) {
      return getImagePath(img_name, 'images')
    },
    goto() {
      console.log("goto")
      console.log(this.$route)
      this.$router.push(`/shopping/product/${this.product.id}`)
    }
  }
}

</script>

<style lang="sass" scoped>
.box-view
  .inner-box
    height: 100%
    width: 100%
    border: 2px solid #000
    padding: 10px
  .pic
    width: 100%
    height: 75%
    display: flex
    align-items: center
    justify-content: center
    img
      max-width: 100%
      max-height: 75%
      
</style>