<template>
  <header-box v-model:isLeftShow="is_left_show"></header-box>
  <div class="content">
    <left-list :is_left_show="is_left_show"></left-list>
    <RouterView></RouterView>
  </div>
</template>

<script>
import HeaderBox from './components/HeaderView.vue'
import LeftList from './components/LeftListView.vue'
export default {
  components: { HeaderBox, LeftList },
  data() {
    return {
      is_left_show: false
    }
  },
}

</script>

<style lang="sass" scoped>
</style>
