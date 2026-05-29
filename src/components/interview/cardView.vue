<template>
  <div>
    <!-- 圖片、名稱、基本資訊，以及「加入比較」 -->
    <img src="" alt="">
    <div class="name">{{ product.name }}</div>
    <div class="information">
      <p v-for="(key, idx) in specsKey" :key="idx">
        {{ key }} : {{ product.specs[key] }}
      </p>
    </div>
    <p>價格：{{ product.price }}</p>

    <button v-if="type === 'product'" type="button" @click="addList">加入比較</button>
    <button v-else-if="type === 'compare'" type="button" @click="deleteProduct">清除</button>

  </div>
</template>

<script>

export default {
  props: ['product', 'type'],
  data() {
    return {}
  },
  computed: {
    specsKey() {
      return Object.keys(this.product.specs)
    }
  },
  methods: {
    addList() {
      this.$emit("addList", this.product);
    },
    deleteProduct() {
      this.$emit("deleteProduct", this.product.id)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>