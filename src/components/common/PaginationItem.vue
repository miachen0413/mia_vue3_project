<template>
  <div id="pagination-item">
    <paginate-item :page="page || 1" :page-count="page_count || 1" :page-range="limit || 10" :prev-text="'上一頁'"
      :next-text="'下一頁'" :click-handler="clickCallback" :container-class="'pagination'" :page-class="'page-item'"
      :page-link-class="'page-link'" :active-class="'active'" :disabled-class="'disabled'"></paginate-item>
  </div>
</template>
<script>
export default {
  props: ["page", "page_count", "limit"],
  mounted() {
  },
  data() {
    return {
    }
  },
  methods: {
    clickCallback(page_num) {
      console.log("--->", page_num)
      this.$emit("updatePage", page_num)
    }
  }

}
</script>
<style lang="sass">
.pagination
  display: flex
  list-style: none
  padding: 0
  justify-content: center
  gap: 5px
  margin: 2rem 0rem .5rem

.pagination li
  margin: 0

.pagination li a
  display: inline-block
  padding: 4px 6px
  text-decoration: none
  border: 1px solid #007bff
  border-radius: 4px
  color: #007bff
  transition: background-color 0.3s, color 0.3s

.pagination li a:hover
  background-color: #007bff
  color: #fff

.pagination li a.disabled
  pointer-events: none
  opacity: 0.5

.pagination li a.active
  background-color: #007bff
  color: #fff
  pointer-events: none

.pagination .page-item
  margin: 0 5px

.pagination .page-link
  padding: 4px 6px
  border: 1px solid #007bff
  border-radius: 4px
  color: #007bff
  text-decoration: none

.pagination .page-link:hover
  background-color: #007bff
  color: white

.pagination .page-item.active .page-link
  background-color: #007bff
  color: white
  pointer-events: none

.pagination .page-item.disabled .page-link
  color: #ccc
  pointer-events: none
  border-color: #ccc

</style>