<template>
  <el-header id="header">
    <div style="width: 20%">
      <el-icon class="phone-btn" @click="setIsLeftShow"><Menu /></el-icon>
    </div>
    <!-- <button type="button" class="phone-btn show-icon" @click="setIsLeftShow"><i class="icofont-navigation-menu"></i></button> -->
    <span>
      Mia vue3 Project
    </span>
    <div style="width: 20%"></div>
  </el-header>
</template>

<script>
export default {
  props:{
    isLeftShow: Boolean
  },
  emits: ['update:isLeftShow'],
  data() {
    return {
      window_width: document.body.offsetWidth,
    };
  },
  methods:{
    setIsLeftShow(){
      this.$emit("update:isLeftShow", !this.isLeftShow)
    },
  }
};
</script>

<style lang="sass" scoped>
#header
  width: 100%
  background-color: #598b59
  font-size: 2rem
  font-weight: 800
  display: flex
  align-items: center
  justify-content: space-between
  position: relative
  .show-icon
    position: absolute
    left: 0
    top: 0
    bottom: 0
    margin: auto 0
    font-size: 2rem

</style>
