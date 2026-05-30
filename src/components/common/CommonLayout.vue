<template>
  <div id="work-layout">
    <!-- Left: info panel -->
    <div class="work-content">
      <div class="info">
        <p class="work-title">{{ title }}</p>
        <p class="work-date">{{ date }}</p>
      </div>

      <div class="labels">
        <div v-for="label in labels" :key="label.text" class="label">
          <img :src="label.icon" :alt="label.alt" class="label-icon" />
          <span>{{ label.text }}</span>
        </div>
      </div>

      <div class="description">
        <p class="desc-heading">作品說明</p>
        <div class="desc-body">
          <p class="description">{{ description }}</p>
          <slot name="description"></slot>
        </div>
      </div>
    </div>

    <!-- Right: game / demo area -->
    <div class="work-preview">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  labels: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="sass" scoped>
@import url('/fonts/fonts.css')

#work-layout
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 40px
  padding: 40px 40px 80px
  width: 100%
  box-sizing: border-box

  .work-content
    grid-column: 1
    background-color: #fff8f2
    border-radius: 2px
    padding: 40px
    display: flex
    flex-direction: column
    gap: 20px
    align-items: flex-start

    .info
      display: flex
      flex-direction: column
      gap: 4px
      width: 100%

      .work-title
        font-family: 'Roboto', sans-serif
        font-size: 28px
        font-weight: 400
        line-height: 36px
        color: #000
        margin: 0

      .work-date
        font-family: 'Roboto', sans-serif
        font-size: 12px
        font-weight: 400
        line-height: 16px
        letter-spacing: 0.4px
        color: #496547
        margin: 0

    .labels
      display: flex
      gap: 8px
      align-items: center
      width: 100%

      .label
        background: rgba(255, 255, 255, 0.7)
        display: flex
        gap: 4px
        align-items: center
        justify-content: center
        padding: 4px 12px
        border-radius: 2px

        .label-icon
          width: 18px
          height: 18px
          object-fit: contain

        span
          font-family: 'Inter', sans-serif
          font-size: 12px
          font-weight: 400
          color: #000
          white-space: nowrap

    .description
      display: flex
      flex-direction: column
      gap: 4px
      width: 100%

      .desc-heading
        font-family: 'Roboto', sans-serif
        font-size: 16px
        font-weight: 700
        line-height: 24px
        letter-spacing: 0.5px
        color: #496547
        margin: 0

      .desc-body
        font-family: 'Roboto', sans-serif
        font-size: 16px
        font-weight: 400
        line-height: 24px
        letter-spacing: 0.5px
        color: #000

  .work-preview
    grid-column: 2 / span 2
    background-color: #181818
    border-radius: 2px
    position: relative
    overflow: hidden
    aspect-ratio: 16 / 9
    display: flex
    align-items: center
    justify-content: center
</style>
