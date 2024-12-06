<template>
  <div id="advertise">
    <div v-for="(advertise, index) in advertises" :key="index">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      advertises: [
        {
          url: "",
          img_name: ''
        },
        {
          url: "",
          img_name: ''
        },
        {
          url: "",
          img_name: ''
        },
      ]
    }
  }
}
</script>
<style lang="">

</style>