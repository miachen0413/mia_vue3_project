<template>
  <div id="search-box">
    <el-input v-model="input_value" placeholder="Search" :prefix-icon="Search" />
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue';
</script>
<script>
export default {
  data() {
    return {
      input_value: ""
    }
  },
}
</script>
<style lang="sass" scoped>

</style>
