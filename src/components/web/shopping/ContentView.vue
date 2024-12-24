<template>
  <div>
    <el-scrollbar height="calc(100vh - 200px - 5rem - 4px)">
      <advertise-view></advertise-view>
      <div class="box-group">
        <box v-for="product in products" :key="product.id" :product="product"></box>
      </div>
      <!-- <pagination-item :page="pages.page" :page_count="pages.page_count" :limit="pages.limit"
        @updatePage="updatePage"></pagination-item> -->
    </el-scrollbar>
    <el-pagination class="pagination" :page-count="pages.page_count" v-model:current-page="pages.page"
      @current-change="handleCurrentChange" background layout="prev, pager, next"></el-pagination>
  </div>
</template>

<script>
import Box from '@/components/common/BoxView.vue'
import { getAllProducts } from '@/servies/get'
import AdvertiseView from './AdvertiseView.vue'
import { sleep } from '@/utils/common';
export default {
  components: { Box, AdvertiseView },
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
      },
      is_search: true
    }
  },
  computed: {
    search() {
      return this.$store.state.shopping.search;
    }
  },
  watch: {
    async search() {
      if (this.is_search) {
        this.is_search = false
        await this.fetchData()
      }
      await sleep(200)
      this.is_search = true;
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await getAllProducts(this.pages.page, this.search);
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
    handleCurrentChange(page) {
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