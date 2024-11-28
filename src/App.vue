<template>
  <header-box></header-box>
  <div class="content">
    <left-list class="left"></left-list>
    <RouterView class="right"></RouterView>
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
.content
  display: flex
  padding-top: 60px
  height: 100vh
.left
  background-color: #e8f2e8
.right
  flex-grow: 1
  
</style>
