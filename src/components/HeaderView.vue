<template>
  <el-header id="header">
    <div class="header-left">
      <el-icon class="phone-btn" @click="setIsLeftShow"><Menu /></el-icon>
      <span class="brand-title">Mia</span>
    </div>
    <nav class="header-nav">
      <a href="/" class="nav-link">所有專案</a>
      <a href="/Resume.pdf" download class="nav-link nav-link--active">履歷下載</a>
    </nav>
  </el-header>
</template>

<script setup>

</script>

<style lang="sass" scoped>
@import url('/fonts/fonts.css')

#header
  width: 100%
  background-color: #f4e0bb
  padding: 20px 40px
  display: flex
  align-items: center
  justify-content: space-between
  height: auto
  box-sizing: border-box

  .header-left
    display: flex
    align-items: center
    gap: 12px

    .phone-btn
      font-size: 1.5rem
      color: #765a0b
      cursor: pointer

    .brand-title
      font-family: 'Libre Bodoni', serif
      font-size: 45px
      font-weight: 400
      line-height: 52px
      color: #765a0b
      white-space: nowrap

  .header-nav
    display: flex
    align-items: center
    gap: 40px

    .nav-link
      font-family: 'Roboto', sans-serif
      font-size: 22px
      font-weight: 400
      line-height: 28px
      color: #5a4300
      text-decoration: none
      white-space: nowrap

      &--active
        text-decoration: underline
        text-underline-position: from-font
        text-decoration-style: solid

      &:hover
        opacity: 0.75
</style>
