<template>
  <CommonLayout title="梯子遊戲" date="2024-02" description="經典梯子抽籤遊戲，點選上方角色後沿梯子路徑動畫追蹤，公平隨機分配結果，適合多人活動使用。" :labels="labels">
    <template #content>
      <div id="stairs">
        <div class="setting">
          <div class="set-box">
            <span>幾條路：</span>
            <select v-model="straight">
              <option v-for="item in straights" :key="item.name" :value="item.name">{{ item.value }}</option>
            </select>
          </div>
          <div class="set-box">
            <span>幾個橫軸：</span>
            <select v-model="horizontal">
              <option v-for="item in horizontals" :key="item.name" :value="item.name">{{ item.value }}</option>
            </select>
          </div>
          <button type="button" @click="createStairs">生成梯子</button>
        </div>
        <div class="stairs-box" ref="stairsBox"></div>
      </div>
    </template>
  </CommonLayout>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import * as PIXI from 'pixi.js'
import CommonLayout from '@/components/common/CommonLayout.vue'

const stairsBox = ref(null)

const labels = [
  { text: 'VUE2', alt: 'Vue',  icon: '/icon/vue.png'  },
  { text: 'HTML', alt: 'HTML', icon: '/icon/html.png' },
  { text: 'SASS', alt: 'CSS',  icon: '/icon/css.png'  },
]

// PIXI instances (non-reactive)
let app = null
let stairs_container = null
let road_container = null
let start_doll_container = null
let grey_filter = null
let start_doll_sprite = []
let roadSetUp = () => {}

const app_width = 900
const app_height = 600
const boundary = { min_x: 100, min_y: 50, max_x: 800, max_y: 550 }
const stairs_style = { width: 15, color: 0xb86741, alpha: 1 }
const road_style   = { width: 20, color: 0x48afa7, alpha: 1, join: 'round', miterLimit: 100 }
const start_doll_name = ['eggHead', 'flowerTop', 'helmlok', 'skully']

const straights          = ref([])
const straight           = ref(3)
const straight_position  = ref([])
const horizontals        = ref([])
const horizontal         = ref(8)
const horizontal_position = ref([])
const road_position      = ref([])
const is_start_doll_click = ref(false)

// 幾條路改變時重新計算橫軸選項
watch(straight, (val) => {
  horizontals.value = []
  for (let i = val - 1; i <= val + 3; i++)
    horizontals.value.push({ value: i, name: i })
  horizontal.value = horizontals.value[2].name
}, { immediate: true })

// 控制角色是否可點擊（灰階濾鏡）
watch(is_start_doll_click, (is_click) => {
  start_doll_sprite.forEach((sprite) => {
    sprite.eventMode = is_click ? 'static' : 'none'
    sprite.filters = is_click ? [] : [grey_filter]
  })
})

onMounted(async () => {
  straights.value = []
  for (let i = 3; i <= 5; i++)
    straights.value.push({ value: `${i} 列`, name: i })

  // PIXI v8: init 是 async
  app = new PIXI.Application()
  await app.init({ width: app_width, height: app_height, backgroundColor: 0xf7f2ea })

  grey_filter = new PIXI.ColorMatrixFilter()
  grey_filter.greyscale(0.2, false)

  stairs_container    = new PIXI.Container()
  road_container      = new PIXI.Container()
  start_doll_container = new PIXI.Container()
  app.stage.addChild(stairs_container, road_container, start_doll_container)

  // PIXI v8: app.canvas (原本是 app.view)
  stairsBox.value.appendChild(app.canvas)

  // PIXI v8: 用 Assets 取代 Loader
  await PIXI.Assets.load([
    { alias: 'eggHead',    src: '/doll/eggHead.png'    },
    { alias: 'flowerTop',  src: '/doll/flowerTop.png'  },
    { alias: 'helmlok',    src: '/doll/helmlok.png'    },
    { alias: 'skully',     src: '/doll/skully.png'     },
  ])

  createStairs()
})

onBeforeUnmount(() => {
  if (app) {
    app.destroy(true, { children: true })
    app = null
  }
})

function createStairs() {
  app.ticker.remove(roadSetUp)
  horizontal_position.value = []
  stairs_container.removeChildren()
  road_container.removeChildren()
  start_doll_container.removeChildren()
  start_doll_sprite.forEach((s) => s.destroy())
  start_doll_sprite = []

  const { min_x, min_y, max_y } = boundary
  const distance_x = Math.ceil((app_width - 2 * min_x) / (straight.value - 1))
  straight_position.value = []
  const horizontal_start = []

  for (let i = 0; i < straight.value; i++) {
    const x = min_x + distance_x * i
    initStartSprite(i, x)
    straight_position.value.push({ x, y: min_y })
    const line = new PIXI.Graphics()
    line.setStrokeStyle(stairs_style)
    line.moveTo(x, min_y).lineTo(x, max_y)
    line.stroke()
    stairs_container.addChild(line)
  }

  for (let i = 0; i < horizontal.value; i++) {
    const random_x = i < straight.value - 1
      ? i
      : Math.floor(Math.random() * (straight.value - 1))
    const x          = straight_position.value[random_x].x
    const last_point_x = random_x > 0 ? straight_position.value[random_x - 1].x : null
    const next_point_x = straight_position.value[random_x + 1]?.x ?? null

    let random_y
    const getRandomY = () => {
      random_y = Math.ceil(min_y + 50 + Math.random() * 400)
      for (const { x: px, y: py } of horizontal_start) {
        if ([x, last_point_x, next_point_x].includes(px) &&
            random_y >= py - 50 && random_y <= py + 50) {
          getRandomY()
          break
        }
      }
    }
    getRandomY()

    const horiz = new PIXI.Graphics()
    horiz.setStrokeStyle(stairs_style)
    horiz.moveTo(x, random_y).lineTo(x + distance_x, random_y)
    horiz.stroke()
    horizontal_start.push({ x, y: random_y })
    stairs_container.addChild(horiz)
  }

  horizontal_position.value = horizontal_start.sort((a, b) => a.y - b.y)
  is_start_doll_click.value = true
}

function initStartSprite(which_road, x) {
  const name    = start_doll_name[which_road % 4]
  const texture = PIXI.Texture.from(name)
  const sprite  = new PIXI.Sprite(texture)
  sprite.position.set(x, 0)
  sprite.anchor.set(0.5, 0)
  sprite.scale.set(0.4, 0.4)
  sprite.cursor     = 'pointer'
  sprite.eventMode  = 'static'
  sprite.on('pointerdown', () => getRoadPosition(which_road))
  start_doll_sprite.push(sprite)
  start_doll_container.addChild(sprite)
}

function getRoadPosition(road) {
  is_start_doll_click.value = false
  road_container.removeChildren()
  let start_road = road
  road_position.value = []
  let { x: now_x, y: now_y } = straight_position.value[start_road]
  road_position.value.push({ x: now_x, y: now_y })

  for (const { x: pos_x, y: pos_y } of horizontal_position.value) {
    const last_x = start_road === 0 ? null : straight_position.value[start_road - 1].x
    if (pos_y > now_y && [last_x, now_x].includes(pos_x)) {
      road_position.value.push({ x: now_x, y: pos_y })
      if (pos_x === now_x) start_road += 1
      else if (pos_x === last_x) start_road -= 1
      road_position.value.push({ x: straight_position.value[start_road].x, y: pos_y })
      now_x = straight_position.value[start_road].x
    }
  }
  road_position.value.push({ x: now_x, y: boundary.max_y })
  drawRoad()
}

function drawRoad() {
  const road = new PIXI.Graphics()
  road.setStrokeStyle(road_style)
  road_container.addChild(road)

  const pts = road_position.value
  let count = 0
  let now_x = pts[0].x, now_y = pts[0].y
  let next_x = now_x,   next_y = now_y

  roadSetUp = (ticker) => {
    const speed = 10 * ticker.deltaTime
    const last_x = now_x

    if (next_x === pts[count].x && next_y === pts[count].y) {
      now_x = pts[count].x
      now_y = pts[count].y
      count++
    }
    if (count >= pts.length) {
      app.ticker.remove(roadSetUp)
      is_start_doll_click.value = true
      return
    }

    const { x: tx, y: ty } = pts[count]

    if (last_x < tx)      { next_x = Math.min(next_x + speed, tx) }
    else if (last_x > tx) { next_x = Math.max(next_x - speed, tx) }
    else                  { next_x = tx }

    next_y = next_y + speed >= ty ? ty : next_y + speed

    // 每 tick 只新增一小段線段並 stroke（v8 會累積路徑）
    road.moveTo(now_x, now_y)
    road.lineTo(next_x, next_y)
    road.stroke()
  }

  app.ticker.add(roadSetUp)
}
</script>

<style lang="sass" scoped>
#stairs
  padding: 16px
  width: 100%
  height: 100%
  box-sizing: border-box
  overflow: auto

  .setting
    display: flex
    align-items: center
    gap: 12px
    margin-bottom: 12px
    color: #ffffff

    .set-box
      display: flex
      align-items: center
      gap: 6px

    button
      padding: 6px 16px
      border-radius: 4px
      border: none
      background-color: #496547
      color: white
      cursor: pointer
      &:hover
        opacity: 0.85

  .stairs-box
    canvas
      display: block
      max-width: 100%
</style>
