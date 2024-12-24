<template>
  <div id="product-view">
    <el-scrollbar height="calc(100vh - 160px - 5rem - 4px)">
      <el-row :gutter="30">
        <el-col :span="12" :xs="{ span: 24 }">
          <el-image fit :src="getImagePath(product.img_name)"></el-image>
        </el-col>
        <el-col :span="12" :xs="{ span: 24 }">
          <p class="name">{{ product.name }}</p>
          <p>{{ product.price }} 元</p>
          <el-input-number v-model="count" :min="0" :max="10"></el-input-number>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="3">
          <p>{{ product.describe }}</p>
        </el-col>
      </el-row>
    </el-scrollbar>
    <el-affix position="bottom" :offset="40">
      <el-row>
        <el-col :md="{ span: 3, offset: 9 }" :xs="{ span: 6, offset: 6 }" :sm="{ span: 6, offset: 6 }">
          <el-button type="primary"> 馬上購買</el-button>
        </el-col>
        <el-col :md="{ span: 3 }" :xs="{ span: 6 }" :sm="{ span: 6 }">
          <el-button type="primary" @click="addShoppingCart"> 添加購物車</el-button>
        </el-col>
      </el-row>
    </el-affix>
  </div>
  <!-- <div id="product-view">
    <div class="top">
      <div class="img-box">
        <img :src="getImagePath(product.img_name)" alt="">
      </div>
      <div class="infor">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
      </div>
    </div>
    <div class="product-content">
      <p>{{ product.describe }}</p>
    </div>
    <div class="btn-box">
      <button type="button" class="btn">馬上購買</button>
      <button type="button" class="btn" @click="addShoppingCart">添加購物車</button>
    </div>
  </div> -->
</template>
<script>
import { getImagePath } from '@/utils/image';
import { getProducts } from '@/servies/get';
import { ElMessage } from 'element-plus';
import { getCookie } from '@/utils/common';
// import { addShoppingCart } from '@/servies/post';
export default {
  mounted() {
    this.fetchProduct(this.$route.params.id)
  },
  data() {
    return {
      product: {},
      count: 0
    }
  },
  methods: {
    async fetchProduct(id) {
      try {
        const result = await getProducts(id)
        this.product = result.data[0];
      } catch (err) {
        console.log(err)
      }
    },
    getImagePath(img_name) {
      return getImagePath(img_name, 'images')
    },
    async addShoppingCart() {
      if (this.count === 0) {
        ElMessage({
          message: '請確認數量，目前數量為' + this.count,
          type: 'warning'
        })
        return;
      }
      const user_id = getCookie("user_name") || 1
      const data = [{
        user_id,
        product_id: this.product.id,
        count: this.count,
      }]
      this.$store.dispatch('shopping/postShoppingCart', data)
    }
  }
}
</script>
<style lang="sass">
#product-view
  .el-row
    margin-bottom: 2rem
    width: 100%
//   display: flex
//   flex-direction: column
//   align-items: center
//   position: relative
//   width: 100%
//   overflow: scroll
//   .top
//     display: grid
//     grid-template-columns: 1fr 1fr
//     width: 80%
//     .img-box
//       width: 100%
//       img
//         width: 100%
//   .product-content
//     width: 70%
//   .btn-box
//     position: absolute
//     left: 0
//     bottom: 0
//     width: 100%
//     display: flex
//     align-items: center
//     justify-content: center
//     margin: .5rem 0
//     .btn
//       width: 12rem
//       height: 3rem
//       margin: 0 1rem
</style>