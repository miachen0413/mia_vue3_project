<template>
  <div id="header">
    <button type="button" class="phone-btn show-icon" @click="setIsLeftShow"><i class="icofont-navigation-menu"></i></button>
    <span>
      Mia vue3 Project
    </span>
  </div>
</template>

<script>
export default {
  props:{
    isLeftShow: Boolean
  },
  emits: ['update:isLeftShow'],
  data() {
    return {};
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
    position: relative
    background-color: #598b59
    text-align: center
    line-height: 60px
    font-size: 2rem
    font-weight: 800
  .show-icon
    position: absolute
    left: 0
    top: 0
    bottom: 0
    margin: auto 0
    font-size: 2rem

</style>
