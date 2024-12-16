<template>
  <div id="shopping-content">
    advertise
    <advertise-view></advertise-view>
    Shopping content
    <div class="box-group">
      <box v-for="product in products" :key="product.id" :product="product"></box>
    </div>
    <pagination-item :page="pages.page" :page_count="pages.page_count" :limit="pages.limit"
      @updatePage="updatePage"></pagination-item>
  </div>
</template>

<script>
import Box from '@/components/common/BoxView.vue'
import { getAllProducts } from '@/servies/get'
import AdvertiseView from './AdvertiseView.vue'
import PaginationItem from '@/components/common/PaginationItem.vue'
export default {
  components: { Box, AdvertiseView, PaginationItem },
  mounted() {
    this.fetchData()
  },
  data() {
    return {
      products: {},
      pages: {
        page: 1,
        page_count: -1,
        limit: 10
      }
    }
  },
  methods: {
    async fetchData() {
      console.log('fetchDAta')
      try {
        const response = await getAllProducts(this.pages.page);
        this.products = response.data;
        this.pages.page_count = parseInt(response.page_count, 10)
        this.pages.limit = response.limit || 10;
        this.pages.page = response.page || 1;
      } catch (err) {
        // error.value = 'Failed to fetch data';
        console.error(err);
      } finally {
        // loading.value = false;
      }
    },
    updatePage(page) {
      this.pages.page = page;
      this.fetchData();

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