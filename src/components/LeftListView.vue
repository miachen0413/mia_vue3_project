<template>
  <div id="left-list">
    <ul>
      <li>
        <RouterLink to="/">首頁</RouterLink>
      </li>
      <li>遊戲
        <ul>
          <li>
            <RouterLink to="/snake">貪食蛇</RouterLink>
          </li>
          <li>
            <RouterLink to="/ladder">梯子遊戲</RouterLink>
          </li>
          <li>
            <RouterLink to="/ladder">翻牌遊戲</RouterLink>
          </li>
        </ul>
      </li>
      <li>網頁
        <ul>
          <li>
            <RouterLink to="/shopping">購物車</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="sass" scoped>
#left-list
  padding: 5px
  height: 100%
</style>
