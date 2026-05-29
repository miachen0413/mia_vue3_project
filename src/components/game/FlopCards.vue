<template>
  <CommonLayout title="翻牌遊戲" date="2024-02" description="經典翻牌配對記憶遊戲，考驗玩家的短期記憶力。翻開兩張牌，若圖案相同即配對成功，挑戰以最少次數完成全部配對。" :labels="labels">
    <template #content>
      <div id="flop-cards">
        <div class="setting">
          <div class="set-box">
            <span>幾組牌：</span>
            <select v-model="card">
              <option v-for="item in select_cards" :key="item.value" :value="item.value">{{ item.name }}</option>
            </select>
          </div>
          <button type="button" @click="createFlopCards">生成牌組</button>
        </div>
        <div class="flop-cards-box">
          <div class="card-box" v-for="item in cards" :key="item.id" @click="cardTurnOn(item)">
            <div class="front" :class="{ turn: item.turn, show: !item.show }">{{ item.value }}</div>
            <div class="back" :class="{ turn: item.turn, show: !item.show }"></div>
          </div>
        </div>
      </div>
    </template>
  </CommonLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CommonLayout from '@/components/common/CommonLayout.vue'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const card = ref(3)
const select_cards = ref([])
const cards = ref([])
const turn_card = ref([])
const is_click = ref(true)

const labels = [
  { text: 'VUE2', alt: 'Vue',  icon: '/icon/vue.png'  },
  { text: 'HTML', alt: 'HTML', icon: '/icon/html.png' },
  { text: 'SASS', alt: 'CSS',  icon: '/icon/css.png'  },
]

onMounted(() => {
  for (let i = 3; i <= 10; i++) {
    select_cards.value.push({ value: i, name: `${i} 副牌` })
  }
  createFlopCards()
})

function createFlopCards() {
  cards.value = []
  for (let i = 0; i < card.value; i++) {
    for (let j = 0; j < 2; j++) {
      cards.value.push({ value: i, turn: false, show: true })
    }
  }
  cards.value.sort(() => Math.random() - 0.5)
  cards.value = cards.value.map((c, idx) => ({ ...c, id: idx }))
}

async function cardTurnOn(item) {
  if (!is_click.value) return
  if (turn_card.value[0] && item.id === turn_card.value[0].id) return
  is_click.value = false
  item.turn = true
  turn_card.value.push(item)
  if (turn_card.value.length === 2) {
    if (turn_card.value.every(c => c.value === item.value)) {
      await sleep(1500)
      turn_card.value.forEach(({ id }) => (cards.value[id].show = false))
    } else {
      await sleep(1500)
      cards.value.forEach(c => (c.turn = false))
    }
    turn_card.value = []
    is_click.value = true
  } else {
    is_click.value = true
  }
}
</script>

<style lang="sass" scoped>
#flop-cards
  padding: 20px
  width: 100%
  height: 100%
  box-sizing: border-box
  overflow-y: auto

  .setting
    display: flex
    align-items: center
    gap: 12px
    margin-bottom: 12px

    .set-box
      display: flex
      align-items: center
      gap: 8px
      color: #ffffff

    button
      padding: 6px 16px
      border-radius: 4px
      border: none
      background-color: #496547
      color: white
      cursor: pointer
      &:hover
        opacity: 0.85

  .flop-cards-box
    border: 1px solid #ccc
    background-color: #f7f2ea
    max-width: 880px
    padding: 0 5px
    display: flex
    flex-wrap: wrap

    .card-box
      width: 100px
      height: 150px
      border-radius: 5px
      margin: 10px 5px
      overflow: hidden
      position: relative
      box-sizing: border-box
      cursor: pointer

    .front, .back
      width: 100%
      height: 100%
      position: absolute
      left: 0
      top: 0
      backface-visibility: hidden
      opacity: 1
      transition: transform 1s, opacity .5s
      &.show
        opacity: 0

    .front
      transform: rotateY(180deg)
      border: 1px solid
      box-sizing: border-box
      border-radius: 5px
      line-height: 150px
      text-align: center
      font-size: 80px
      font-weight: bold
      &.turn
        transform: rotateY(0deg)

    .back
      transform: rotateY(0deg)
      background-color: #ff5500
      &.turn
        transform: rotateY(180deg)
</style>
