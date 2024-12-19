<template>
  <div id="advertise" ref="advertise">
    <el-carousel :height="`${height}px`">
      <el-carousel-item v-for="(advertise, index) in advertises" :key="index">
        <img :src="getImagePath(advertise.img)" alt="" :style="{maxHeight : `${height}px`}">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { getAdvertises } from '@/servies/get';
import { getImagePath } from '@/utils/image';
export default {
  mounted() {
    this.fetchData();
    this.getIdAdvertiseWidth();
  },
  data() {
    return {
      advertises: [],
      height: 250
    }
  },
  methods: {
    async fetchData() {
      try {
        const res = await getAdvertises()
        this.advertises = res.data
      }
      catch (err) {
        console.error(err);
      }
    },
    getImagePath(img_name) {
      return getImagePath(img_name, 'advertise')
    },
    getIdAdvertiseWidth() {
      const advertise_width = this.$refs['advertise'].offsetWidth;
      if (advertise_width > 834) this.height = 350
    }
  }
}
</script>
<style lang="sass" scoped>
#advertise
  @media (min-width: 768px) 
    width: 75vw
  @media (min-width: 992px)
    width: 84vw
    // height: 350px
    overflow: hidden
    position: relative
  img
    position: relative
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  .inner
    height: 100%
    width: 100%
    display: flex
    transition: .5s
  .spot-box
    position: absolute
    width: 100%
    z-index: 2
    bottom: 0
    display: flex
    align-items: center
    justify-content: center
    .spot
      width: .5rem
      height: .5rem
      background-color: #ffffff
      opacity: .6
      border-radius: 50%
      overflow: hidden
      margin: .4rem .2rem
      &.light
        background-color: #000000
        opacity: .4
        box-shadow: 0px 0px 4px #ffffff
  [class ^= 'box']
    text-align: center
</style>