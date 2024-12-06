<template>
  <div class="box-view">
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
export default {
  name: 'BoxView',
  props: ['product'],
  data() {
    return {
    }
  },
  methods: {
    getImagePath(img_name) {
      return new URL(`/src/assets/imqges/${img_name}`, import.meta.url).href;
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