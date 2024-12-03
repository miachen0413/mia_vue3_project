<template>
  <div id="shopping">
    <content-view></content-view>
  </div>
</template>

<script>
import ContentView from './content/ContentView.vue'
export default {
  components: { ContentView },
  data() {
    return {
    }
  },
}

</script>

<style lang="sass" scoped>
#shopping
  padding: 15px
</style>
