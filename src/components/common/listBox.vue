<template>
  <ul>
    <li v-for="(list, idx_1) in modelValue" :key="setKey(idx_1)">
      <router-link :to="list.path" v-if="list.path !== ''"> {{ list.title }}</router-link>
      <p class="parent icofont-caret-right" @click="setListShow(idx_1)" v-else>
        {{ list.title }}</p>
      <div v-if="list.children.length > 0" class="child"
        :style="{ height: list.show ? `calc(2rem * ${list.children.length})` : `0px` }">
        <list-box v-model="list.children" :idx="setKey(idx_1)"></list-box>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListBox",
  props: ["modelValue", "idx"],
  emits: ["update:modelValue"],
  data() {
    return {}
  },
  methods: {
    setKey(i) { return this.idx === null ? i : this.idx + '-' + i },
    setListShow(idx_1) {
      let new_model_value = this.modelValue;
      new_model_value[idx_1].show = !new_model_value[idx_1].show;
      this.$emit("update:modelValue", new_model_value);
    }
  }
};
</script>

<style lang="sass" scoped>
ul
  list-style: none
  --icon-size: .8rem
  --li-size: 2rem
  padding-left: .5rem
  li
    padding-left: var(--icon-size)
    line-height: var(--li-size)
    min-height: var(--li-size)
  .parent
    position: relative
    padding: 3px
    &::before
      position: absolute
      left: calc(var(--icon-size) * -1)
  .child
    transition: .5s
    height: 0px
    overflow: hidden

</style>
