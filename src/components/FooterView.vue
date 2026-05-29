<template>
  <footer id="footer">
    <a v-for="icon in icons" :key="icon.alt"
       :href="icon.href" target="_blank" rel="noopener noreferrer"
       class="footer-icon">
      <img :src="icon.src" :alt="icon.alt" />
    </a>
  </footer>
</template>

<script setup>
const icons = [
  {
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/%E7%BE%8E%E9%9B%85-%E9%99%B3-773999175/',
    src: '/public/icon/linkdin.svg',
  },
  {
    alt: 'GitHub',
    href: 'https://github.com/miachen0413/mia_vue3_project',
    src: '/public/icon/github.svg',
  },
  {
    alt: 'Medium',
    href: 'https://medium.com/@spispil332',
    src: '/public/icon/medium.svg',
  },
  {
    alt: 'Cake',
    href: 'https://www.cake.me/dashboard',
    src: '/public/icon/cake.svg',
  },
]
</script>

<style lang="sass" scoped>
#footer
  background-color: #496547
  width: 100%
  padding: 40px 0
  display: flex
  gap: 20px
  align-items: center
  justify-content: center
  box-sizing: border-box

  .footer-icon
    display: flex
    align-items: center
    justify-content: center
    width: 30px
    height: 30px
    opacity: 1
    transition: opacity 0.2s

    &:hover
      opacity: 0.7

    img
      width: 100%
      height: 100%
      object-fit: contain
</style>
