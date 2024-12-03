<template>
  <div class="shopping-content">
    Shopping content
    <div class="box-group">
      <box v-for="production in productions" :key="production.id" :production="production"></box>
    </div>
  </div>
</template>

<script>
import Box from './BoxView.vue'
export default {
  components: { Box },
  data() {
    return {

    }
  },
  computed: {
    productions() {
      return this.$store.state.productions.production
    }
  }
}

</script>

<style lang="sass" scoped>
</style>