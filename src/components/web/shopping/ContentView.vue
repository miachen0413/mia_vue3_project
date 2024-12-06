<template>
  <div id="shopping-content">
    Shopping content
    <div class="box-group">
      <box v-for="production in productions" :key="production.id" :production="production"></box>
    </div>
  </div>
</template>

<script>
import Box from '@/components/common/BoxView.vue'
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
#shopping-content
  padding: 15px
  height: calc(100vh - 120px - 5rem - 4px)
  overflow: auto
</style>