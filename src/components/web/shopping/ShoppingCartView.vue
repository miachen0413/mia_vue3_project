<template>
  <el-dialog v-model="cart_is_show" title="購物車" width="700" center>
    <!-- <ul>
      <li v-for="(item, idx) in shopping_cart" :key="item.id">
        <div class="box">
          <div class="sort">{{ idx + 1 }}</div>
          <div class="name">{{ item.product_name }}</div>
          <div class="count">{{ item.product_count }}</div>
          <div class="price">{{ item.product_price }}</div>
          <div class="delete icon"><i class="icofont-bin" @click="deleteShoppingCart(item.id)"></i></div>
        </div>
      </li>
    </ul> -->
    <el-table :data="shopping_cart">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="product_name" label="名稱" width="200"></el-table-column>
      <el-table-column prop="product_price" label="價格"></el-table-column>
      <el-table-column prop="product_count" label="數量"></el-table-column>
      <el-table-column label="">
        <template #default="scope">
          <el-button @click="deleteShoppingCart(scope.row)" :icon="DeleteFilled" link
            style="font-size: 1.2rem;margin: -2px 8px 0px;"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cart_is_show = false">Cancel</el-button>
        <el-button type="primary" @click="cart_is_show = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <!-- <div id="shopping-card">
    購物車
    <ul>
      <li v-for="(item, idx) in shopping_cart" :key="item.id">
        <div class="box">
          <div class="sort">{{ idx + 1 }}</div>
          <div class="name">{{ item.product_name }}</div>
          <div class="count">{{ item.product_count }}</div>
          <div class="price">{{ item.product_price }}</div>
          <div class="delete icon"><i class="icofont-bin" @click="deleteShoppingCart(item.id)"></i></div>
        </div>
      </li>
    </ul>
  </div> -->
</template>
<script setup>
import { DeleteFilled } from '@element-plus/icons-vue'
</script>
<script>
import { getImagePath } from '@/utils/image';
// import { getShoppingCart } from '@/servies/get'
export default {
  mounted() {
  },
  props: ["is_show"],
  emits: ["update:is_show"],
  data() {
    return {
      cart_is_show: this.is_show
    }
  },
  computed: {
    shopping_cart() {
      return this.$store.state.shopping.shopping_cart
    }
  },
  watch: {
    cart_is_show(val) {
      this.$emit("update:is_show", val)
    },
    is_show(val) {
      this.cart_is_show = val
    }
  },
  methods: {
    getImagePath(img_name) {
      return getImagePath(img_name, 'images')
    },
    async deleteShoppingCart(data) {
      const res = JSON.parse(JSON.stringify(data));
      console.log("res->", res)
      this.$store.dispatch("shopping/deleteShoppingCart", res.product_id)
    }
  }
}
</script>
<style lang="sass" scoped>
#shopping-card
  position: absolute
  background-color: white
  border-radius: .2rem
  border: 2px solid
  width: 60%
  left: 21%
  top: 80px
  z-index: 3
  ul li
    list-style: none
    .box
      display: grid
      grid-template-columns: 1fr 6fr 1fr 1fr 1fr
</style>