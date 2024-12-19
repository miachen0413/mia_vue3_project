<template>
  <div class="box-view" @click="goto">
    <div class="inner-box" ref="BoxView">
      <div class="pic">
        <img :src="getImagePath(product.img_name)" alt="">
      </div>
      <div class="name" :style="{ width: box_view_width }">{{ product.name }}</div>
      <div class="price"><span>{{ product.price }} 元</span></div>
    </div>
  </div>
</template>

<script>
import { getImagePath } from '@/utils/image';
export default {
  name: 'BoxView',
  props: ['product'],
  mounted() {
    this.getBoxViewWidth()
  },
  data() {
    return {
      box_view_width: '0px'
    }
  },
  methods: {
    getImagePath(img_name) {
      return getImagePath(img_name, 'images')
    },
    goto() {
      this.$router.push(`/shopping/product/${this.product.id}`)
    },
    getBoxViewWidth() {
      this.box_view_width = parseInt(this.$refs['BoxView'].clientWidth - 20) + 'px'
    }
  }
}

</script>

<style lang="sass" scoped>
.box-view
  width: 100%
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
  .name
    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
  .price
    font-size: 1.6rem
    span
      float: right
      color: red
      
</style>