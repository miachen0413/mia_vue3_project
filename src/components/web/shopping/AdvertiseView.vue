<template>
  <div id="advertise" ref="advertise">
    <div class="inner" :style="{ width: `calc(100% * ${advertises.length})`, marginLeft: inner_margin_left }">
      <div v-for="(advertise, index) in advertises" :key="index" :class="'box' + index"
        :style="{ width: advertise_width }">
        <img :src="getImagePath(advertise.img)" alt="" :max-width="advertise_width">
        <!-- {{ advertise }} -->
      </div>
    </div>
    <div class="spot-box">
      <div class="spot" v-for="item in advertises.length" :key="item" @click="setScrollIdx(item)"
        :class="{ 'light': this.scroll_idx === item }"></div>
    </div>
  </div>
</template>
<script>
import { getAdvertises } from '@/servies/get';
import { getImagePath } from '@/utils/image';
export default {
  mounted() {
    this.fetchData();
    this.getIdAdvertiseWidth();
    console.log(this.$refs['advertise'].offsetWidth)
    this.setScrollAnimation()
  },
  data() {
    return {
      advertises: [],
      scroll_idx: 1,
      advertise_width: '100%'
    }
  },
  computed: {
    inner_margin_left() {
      return (this.scroll_idx - 1) * -100 + '%'
    }
  },
  methods: {
    async fetchData() {
      try {
        const res = await getAdvertises()
        this.advertises = res
      }
      catch (err) {
        console.error(err);
      }
    },
    getImagePath(img_name) {
      return getImagePath(img_name, 'advertise')
    },
    setScrollIdx(idx) {
      this.scroll_idx = idx;
      this.scroll_idx < this.advertises.length && this.setScrollAnimation();
    },
    getIdAdvertiseWidth() {
      this.advertise_width = this.$refs['advertise'].offsetWidth + 'px';
    },
    setScrollAnimation() {
      let timer = setInterval(() => {
        if (this.scroll_idx >= this.advertises.length) clearInterval(timer);
        else this.scroll_idx++
      }, 1000)
    }
  }
}
</script>
<style lang="sass" scoped>
#advertise
  @media (min-width: 834px) 
  width: 75vw
  @media (min-width: 1024px)
    width: 84vw
  height: 250px
  overflow: hidden
  position: relative
  .inner
    height: 100%
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
    img
      position: relative
      top: 50%
      transform: translate(0, -50%)
      max-height: 250px
</style>