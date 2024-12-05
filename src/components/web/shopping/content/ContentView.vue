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
import { getProductions } from '@/servies/get'
export default {
  components: { Box },
  mounted() {
    this.fetchData()
  },
  data() {
    return {
      productions: {}
    }
  },
  methods: {
    async fetchData() {
      console.log('fetchDAta')
      try {
        const response = await getProductions();
        console.log(response)
        this.productions = response;
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
</style>