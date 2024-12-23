<template>
  <div id="login" class="web-box">
    <el-main>
      <el-row>
        <el-col :span="6" :offset="4" :xs="{ span: 8, offset: 2 }">帳號</el-col>
        <el-col :span="8" :xs="{ span: 12 }"><el-input v-model="user_name" placeholder="請輸入帳號"
            clearable></el-input></el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="4" :xs="{ span: 8, offset: 2 }">密碼</el-col>
        <el-col :span="8" :xs="{ span: 12 }"><el-input v-model="password" placeholder="請輸入密碼" type="password" clearable
            show-password></el-input></el-col>
      </el-row>
      <el-row>
        <el-button key="登入" @click="loginIn">登入</el-button>
      </el-row>
    </el-main>
  </div>
</template>
<script>
import { Login } from '@/servies/post';
import { ElMessage } from 'element-plus';
import MD5 from 'MD5'
export default {
  data() {
    return {
      user_name: "",
      password: "",
    }
  },
  methods: {
    async loginIn() {
      await Login({
        user_name: this.user_name,
        password: MD5(this.password)
      }).then(res => {
        const { token} = res
        document.cookie = `token=${token}; path=/; max-age=3600; secure; SameSite=Strict`;
        document.cookie = `user_name=${this.user_name}; path=/; max-age=3600; secure; SameSite=Strict`;
        this.$store.commit("setIsLogin", true)
        ElMessage({
          message: res.message,
          type: 'success'
        })
        this.$router.push('/shopping')
      }).catch(err => {
        ElMessage({
          message: err.message,
          type: 'error'
        })
      })
    }
  }
}
</script>
<style lang="sass" scoped>
#login
  .el-row
    margin-bottom: 20px
</style>