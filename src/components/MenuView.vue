<template>
  <el-aside id="menu-box" :class="{ 'sidebar': window_width <= 833, 'open': is_left_show }">
    <el-menu class="menu" :router="true" style="height: 100%">
      <menu-box v-model="lists" :idx="null"></menu-box>
    </el-menu>
  </el-aside>
</template>

<script>
import MenuBox from './common/MenuBox.vue';
export default {
  components: { MenuBox },
  props: ["is_left_show"],
  data() {
    return {
      window_width: document.body.offsetWidth,
      lists: [
        {
          title: '首頁', path: '/', children: [],
        },
        {
          title: '遊戲', path: '',
          children: [
            { title: '貪食蛇', path: '/snake', children: [], },
            { title: '梯子遊戲', path: '/ladder', children: [], },
            { title: '翻牌遊戲', path: '/ladder', children: [], },
          ]
        },
        {
          title: '網頁',
          path: '',
          children: [
            {
              title: '購物車', path: '/shopping', children: [],
            },
          ],

        },
      ]
    };
  }
};
</script>

<style lang="sass" scoped>

</style>
