<template>
  <div></div>
</template>
<script>
import { ElLoading } from 'element-plus'
export default {
  name: "LoadingView",
  data() {
    return {
      loading: null,
    }
  },
  computed: {
    is_loading() {
      return false
    }
  },
  watch: {
    is_loading(val) {
      if (val) this.openLoading()
      else this.closeLoading()
    }
  },
  methods: {
    openLoading() {
      this.loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
    },
    closeLoading() {
      this.loading.close();
    }
  }
}
</script>
<style lang="">

</style>