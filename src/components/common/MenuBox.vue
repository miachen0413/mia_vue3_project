<template>
  <el-col v-for="(list, idx_1) in modelValue" :key="setKey(idx_1)">
    <el-menu-item v-if="list.path !== ''" :index="list.path">
      {{ list.title }}
    </el-menu-item>
    <el-sub-menu v-else :index="setKey(idx_1)">
      <template #title>
        <span>
          {{ list.title }}
        </span>
      </template>
      <menu-box v-model="list.children" :idx="setKey(idx_1)"></menu-box>
    </el-sub-menu>
  </el-col>
</template>

<script>
export default {
  name: "MenuBox",
  props: ["modelValue", "idx"],
  emits: ["update:modelValue"],
  data() {
    return {}
  },
  methods: {
    setKey(i) { return this.idx === null ? String(i + 1) : String(this.idx + '-' + `${i + 1}`) },
    setListShow(idx_1) {
      let new_model_value = this.modelValue;
      new_model_value[idx_1].show = !new_model_value[idx_1].show;
      this.$emit("update:modelValue", new_model_value);
    }
  }
};
</script>

<style lang="sass" scoped>
.path
  width: 100%

</style>
