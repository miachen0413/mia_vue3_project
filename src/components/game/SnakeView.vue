<template>
  <CommonLayout title="貪食蛇" date="2024-02" description="經典貪食蛇遊戲，用方向鍵控制蛇移動吃蘋果，每吃一顆蘋果蛇身變長且速度加快，碰到牆壁或自身即結束遊戲。" :labels="labels">
    <template #content>
      <div class="snake-view" ref="containerRef" @keyup="up">
        <canvas id="snake" ref="snakeRef" :width="box_size" :height="box_size"></canvas>
        <button
          type="button"
          v-show="is_start"
          @click="startGame"
          class="start-game"
        >Start Game!</button>
      </div>
    </template>
  </CommonLayout>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import CommonLayout from '@/components/common/CommonLayout.vue'

const labels = [
  { text: 'VUE2', alt: 'Vue',  icon: '/icon/vue.png'  },
  { text: 'HTML', alt: 'HTML', icon: '/icon/html.png' },
  { text: 'SASS', alt: 'CSS',  icon: '/icon/css.png'  },
]

const snakeRef      = ref(null)
const containerRef  = ref(null)

const proportion = document.body.offsetWidth / 1024
const size   = ref(9)
const bor_s  = ref(1)
const box_size   = ref(400)
const game_width = ref(40)

/** @type {HTMLCanvasElement|null} */
let game = null
/** @type {CanvasRenderingContext2D|null} */
let ctx  = null
let animation = null

const head          = ref([0, 0])
const body          = ref([])
const apple         = ref([])
const direction     = ref([1, 0])
const snake_length  = ref(5)
const level         = ref(0)
const is_start      = ref(true)
const is_run        = ref(true)

const speed = computed(() => level.value * 1.5)

function onKeyDown(e) { updateDirection(e.keyCode) }

let resizeObserver = null

function updateSize(w, h) {
  const side = Math.min(w, h)
  box_size.value   = side
  game_width.value = Math.floor((side + bor_s.value) / (size.value + bor_s.value))
}

onMounted(() => {
  game = snakeRef.value
  ctx  = game.getContext('2d')

  resizeObserver = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect
    updateSize(Math.floor(width), Math.floor(height))
    render()
  })
  resizeObserver.observe(containerRef.value)

  render()
  document.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeyDown)
  cancelAnimationFrame(animation)
  resizeObserver?.disconnect()
})

function startGame() {
  is_start.value = false
  ctx.clearRect(0, 0, box_size.value, box_size.value)
  render()
  getApple()
  update()
}

function stopGame() {
  cancelAnimationFrame(animation)
  head.value        = [0, 0]
  body.value        = []
  apple.value       = []
  direction.value   = [1, 0]
  snake_length.value = 5
  level.value       = 0
  ctx.fillStyle = 'rgba(0,0,0,0.4)'
  ctx.fillRect(0, 0, box_size.value, box_size.value)
  ctx.font      = `${game_width.value * 0.8 * proportion}px Arial`
  ctx.fillStyle = 'rgba(0,0,0)'
  ctx.textAlign = 'center'
  ctx.fillText('Game Over !', box_size.value / 2, box_size.value / 2 + 50)
  is_start.value = true
}

function render() {
  ctx.fillStyle = 'rgba(255,255,255)'
  ctx.fillRect(0, 0, box_size.value, box_size.value)
  for (let i = 0; i <= game_width.value; i++)
    for (let j = 0; j <= game_width.value; j++)
      drawBox([i, j], 'rgba(0,0,0,0.3)')
  if (is_start.value) return
  body.value.forEach(v  => drawBox(v, 'rgba(0,0,0)'))
  apple.value.forEach(v => drawBox(v, 'rgba(209,81,95)'))
  animation = requestAnimationFrame(render)
}

function drawBox(v, color) {
  const [x, y] = v
  ctx.fillStyle = color
  ctx.fillRect(
    x * size.value + (x - 1) * bor_s.value,
    y * size.value + (y - 1) * bor_s.value,
    size.value,
    size.value
  )
}

function update() {
  is_run.value = true
  if (head.value[0] < 0 || head.value[0] > game_width.value ||
      head.value[1] < 0 || head.value[1] > game_width.value) {
    stopGame(); return
  }
  if (body.value.some(b => JSON.stringify(b) === JSON.stringify(head.value))) {
    stopGame(); return
  }
  updateSnake()
  const is_eat = apple.value.some(([ax, ay]) => head.value[0] === ax && head.value[1] === ay)
  if (is_eat) {
    apple.value = apple.value.filter(arr => JSON.stringify(arr) !== JSON.stringify(head.value))
    snake_length.value++
    if (apple.value.length === 0) getApple()
  }
  const timer = setTimeout(() => { update(); clearTimeout(timer) }, (1000 - 20) / speed.value)
}

function updateSnake() {
  body.value.push(head.value)
  head.value = head.value.map((v, idx) => v + direction.value[idx])
  if (body.value.length > snake_length.value) body.value.shift()
}

function updateDirection(code) {
  if (!is_run.value) return
  switch (code) {
    case 37: if (direction.value[0] !== 1)  direction.value = [-1, 0]; break
    case 38: if (direction.value[1] !== 1)  direction.value = [0, -1]; break
    case 39: if (direction.value[0] !== -1) direction.value = [1, 0];  break
    case 40: if (direction.value[1] !== -1) direction.value = [0, 1];  break
  }
  is_run.value = false
}

function getApple() {
  level.value++
  for (let i = 0; i < level.value; i++) {
    apple.value.push([
      Math.floor(Math.random() * game_width.value),
      Math.floor(Math.random() * game_width.value),
    ])
  }
}
</script>

<style lang="sass" scoped>
.snake-view
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%

  canvas
    border: 2px solid rgba(255,255,255,0.3)

  .start-game
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    min-width: 80px
    min-height: 30px
    cursor: pointer
</style>
