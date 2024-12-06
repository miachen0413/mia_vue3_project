<template>
  <div id="shopping-content">
    advertise
    <advertise-view></advertise-view>
    Shopping content
    <div class="box-group">
      <box v-for="product in products" :key="product.id" :product="product"></box>
    </div>
  </div>
</template>

<script>
import Box from '@/components/common/BoxView.vue'
import { getProductions } from '@/servies/get'
import AdvertiseView from './AdvertiseView.vue'
export default {
  components: { Box, AdvertiseView },
  mounted() {
    this.fetchData()
  },
  data() {
    return {
      products: {}
    }
  },
  methods: {
    async fetchData() {
      console.log('fetchDAta')
      try {
        const response = await getProductions();
        this.products = response;
      } catch (err) {
        // error.value = 'Failed to fetch data';
        console.error(err);
      } finally {
        // loading.value = false;
      }
    }
  }
}

</script>

<style lang="sass" scoped>
#shopping-content
  padding: 15px
  height: calc(100vh - 120px - 5rem - 4px)
  overflow: auto
</style>