<template>
  <header-box></header-box>
  <div class="content">
    <left-list></left-list>
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

    }
  },
}

</script>

<style lang="sass" scoped>
</style>
