<template>
  <div class="common-layout">
    <el-container>
      <header-box v-model:isLeftShow="is_left_show"></header-box>
    </el-container>
    <el-container class="content-box">
      <menu-view :is_left_show="is_left_show"></menu-view>
      <el-main id="right-list">
        <RouterView></RouterView>
      </el-main>
    </el-container>
    <div class="overlay" v-show="is_left_show" @click="setLeftShow(false)"></div>
  </div>
</template>

<script>
import HeaderBox from './components/HeaderView.vue'
import MenuView from './components/MenuView.vue'
export default {
  components: { HeaderBox, MenuView },
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
</style>
