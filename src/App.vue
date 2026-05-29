<template>
  <div class="common-layout">
    <header-box v-model:isLeftShow="is_left_show"></header-box>
    <RouterView></RouterView>
    <FooterBox></FooterBox>
  </div>
</template>

<script>
import HeaderBox from './components/HeaderView.vue'
import FooterBox from './components/FooterView.vue'
export default {
  components: { HeaderBox, FooterBox },
  data() {
    return {
      is_left_show: false
    }
  },
  methods: {
    setLeftShow(value) {
      this.is_left_show = value
    }
  }
}

</script>

<style lang="sass" scoped>
.el-main
  padding: 0
</style>
