<template>
  <div id="search-box">
    <el-input v-model="search" placeholder="Search" :prefix-icon="Search" />
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue';
</script>
<script>
// import { sleep } from '@/utils/common';
// import { searchProduct } from '@/servies/get';
export default {
  data() {
    return {
    }
  },
  computed: {
    search:{
      get(){
        return this.$store.state.shopping.search;
      },
      set(value){
        this.$store.commit('shopping/setSearch', value)
      }
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
