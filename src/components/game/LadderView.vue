<template>
  <div class="labber-view game-box">
    <canvas id="labber" ref="labber" :width="box_size" :height="box_size" style="border: 2px solid"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      box_size: 400
    };
  },
};
</script>

<style lang="sass" scoped>
</style>
