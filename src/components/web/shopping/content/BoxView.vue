<template>
  <div class="box-view">
    <div class="inner-box">
      <div class="pic">
        <img :src="`/imqges/${production.name}.jpg`" alt="">
      </div>
      <p>{{ production.name }}</p>
      <p>{{ production.price }} 元</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxView',
  props: ['production'],
  data() {
    return {
    }
  },
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