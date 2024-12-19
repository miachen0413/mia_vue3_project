<template>
  <div id="shopping">
    <el-page-header class="shopping-head" @back="onBack">
      <template #content>
        <div class="shopping-head-main">
          <el-avatar :size="60">
            <img src="/LOGO.jpeg" alt="">
          </el-avatar>
          <!-- <div class="logo">
            <img src="/LOGO.jpeg" alt="">
          </div> -->
        </div>
      </template>
      <template #extra>
        <div class="shopping-head-main">
          <search-box></search-box>
          <el-badge :value="shopping_cart_count" :offset="[-35, -8]">
            <el-button @click="is_show_shopping_cart = true" style="font-size: 1.4rem;margin: -2px 8px 0px;"
              :icon="ShoppingCart" link></el-button>
          </el-badge>
          <el-button v-if="!is_login" key="登入" @click="goTo('/login')" link>登入</el-button>
          <el-button v-else key="登出" @click="logout" link>登出</el-button>
          <!-- <el-button key="註冊" link>註冊</el-button> -->
        </div>
      </template>
    </el-page-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <shopping-cart-view v-model:is_show="is_show_shopping_cart"></shopping-cart-view>
      <loading-view></loading-view>
    </el-container>
    <!-- <content-view></content-view> -->
  </div>
</template>
<script setup>
import { ShoppingCart } from '@element-plus/icons-vue'
</script>
<script>
import SearchBox from '@/components/common/SearchBox.vue'
import ShoppingCartView from './ShoppingCartView.vue';
import { Logout } from '@/servies/post';
import { ElMessage } from 'element-plus';
import {
  getCookie
} from '@/utils/common.js'
export default {
  components: { SearchBox, ShoppingCartView },
  mounted() {
    this.$store.dispatch('shopping/fetchShoppingCart');
    this.setIsLogin()
  },
  data() {
    return {
      is_show_shopping_cart: false
    }
  },
  computed: {
    shopping_cart_count() {
      return this.$store.state.shopping.shopping_cart.length;
    },
    is_login() {
      return this.$store.state.is_login
    }
  },
  methods: {
    setIsShowShoppingCart() {
      this.is_show_shopping_cart = !this.is_show_shopping_cart;
    },
    goTo(url) {
      this.$router.push(url)
    },
    onBack() {
      this.$router.go(-1);
    },
    logout() {
      Logout().then(res => {
        ElMessage({
          message: res.message,
          type: 'success'
        })
        document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        this.setIsLogin()
        this.$router.push('/shopping')
      })
    },
    setIsLogin() {
      const token = getCookie('token')
      if (token === null) {
        this.$store.commit("setIsLogin", false)
      } else {
        this.$store.commit("setIsLogin", true)
      }
    }
  }
}

</script>

<style lang="sass" scoped>
#shopping
  margin: 15px
  border: 2px solid
  height: calc(100vh - 120px)
.shopping-head
  background-color: rgb(216.8, 235.6, 255)
  padding: 10px
  .shopping-head-main
    display: flex
    align-items: center
</style>
