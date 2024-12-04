<template>
  <div id="left-list" :class="{ 'show': is_left_show }">
    <list-box v-model="lists" :idx="null"></list-box>
  </div>
</template>

<script>
import ListBox from './common/listBox.vue';
export default {
  components: { ListBox },
  props: ["is_left_show"],
  data() {
    return {
      lists: [
        {
          title: '首頁', path: '/', children: [], show: false
        },
        {
          title: '遊戲', path: '',
          children: [
            { title: '貪食蛇', path: '/snake', children: [], show: false },
            { title: '梯子遊戲', path: '/ladder', children: [], show: false },
            { title: '翻牌遊戲', path: '/ladder', children: [], show: false },
          ],
          show: false
        },
        {
          title: '網頁',
          path: '',
          children: [
            {
              title: '購物車', path: '/shopping', children: [], show: false
            },
          ],
          show: false
        },
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
#left-list
  padding: 5px
  height: 100%
  background-color: #e8f2e8
  transition: .5s
</style>
