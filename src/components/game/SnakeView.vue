<template>
  <div class="snake-view game-box" @keyup="up">
    <canvas id="snake" ref="snake" :width="box_size" :height="box_size" style="border: 2px solid"></canvas>
    <button type="submit" v-show="is_start" @click="startGame" class="start-game"
      :style="`top: ${box_size / 2 - 15}px; left: ${box_size / 2 - 40}px`">Start Game!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proportion: document.body.offsetWidth / 1024,
      game_width: 40,
      /** @type {HTMLCanvasElement} */
      game: null,
      /** @type {CanvasRenderingContext2D} */
      ctx: null,
      animation: null,
      head: [0, 0],
      body: [],
      apple: [],
      size: 9,
      bor_s: 1,
      direction: [1, 0],
      snake_length: 5,
      level: 0,
      is_start: true,
      is_run: true, //方向是否已在畫布上改變
    };
  },
  created() {
    const proportion = document.body.offsetWidth / 1024;
    // this.size = Math.ceil(this.size * proportion);
    // this.bor_s = Math.ceil(this.bor_s * proportion);
    this.game_width = Math.ceil(this.game_width * proportion);
  },
  mounted() {
    this.init();
    document.addEventListener("keydown", (e) => {
      this.updateDirection(e.keyCode)
    })
  },
  methods: {
    init() {
      this.game = this.$refs.snake;
      this.ctx = this.game.getContext('2d');
      this.render();

    },
    startGame() {
      this.is_start = false;
      this.ctx.clearRect(0, 0, this.box_size, this.box_size)
      this.render();
      this.getApple();
      this.update();
    },
    stopGame() {
      cancelAnimationFrame(this.animation);
      this.head = [0, 0];
      this.body = [];
      this.apple = [];
      this.direction = [1, 0];
      this.snake_length = 5;
      this.level = 0;
      this.ctx.fillStyle = "rgba(0, 0, 0,0.4)";
      this.ctx.fillRect(0, 0, this.box_size, this.box_size);
      this.ctx.font = `${this.game_width * 0.8 * this.proportion}px Arial`;
      this.ctx.fillStyle = "rgba(0, 0, 0)";
      this.ctx.textAlign = "center"
      this.ctx.width = `${this.box_size}`
      this.ctx.fillText("Game Over !", this.box_size / 2, this.box_size / 2 + 50);
      this.is_start = true;
    },
    render() {
      this.ctx.fillStyle = "rgba(255, 255, 255)";
      this.ctx.fillRect(0, 0, this.box_size, this.box_size);
      for (let i = 0; i < this.game_width; i++) {
        for (let j = 0; j < this.game_width; j++) {
          this.drawBox([i, j], "rgba(0, 0,0,0.3)")
        }
      }
      if (this.is_start) return;
      this.body.forEach((v) => {
        this.drawBox(v, "rgba(0,0,0)")
      })
      this.apple.forEach((v) => {
        this.drawBox(v, "rgba(209,81,95)")
      })
      this.animation = requestAnimationFrame(() => { this.render() })
    },
    drawBox(v, color) {
      this.ctx.fillStyle = color;
      const [x, y] = v
      let pos_x = x * this.size + (x - 1) * this.bor_s;
      let pos_y = y * this.size + (y - 1) * this.bor_s;
      this.ctx.fillRect(pos_x, pos_y, this.size, this.size);
    },
    update() {
      this.is_run = true;
      // 撞到牆結束遊戲
      if (this.head[0] < 0 || this.head[0] > this.game_width || this.head[1] < 0 || this.head[1] > this.game_width) {
        this.stopGame();
        // console.log("撞到牆壁！！")
        return;
      }
      // 撞到自己
      if (this.body.some(b => JSON.stringify(b) === JSON.stringify(this.head))) {
        this.stopGame();
        // console.log("撞到自己！！")
        return;
      }
      this.updateSnake();
      const is_eat_apple = this.apple.some(([a_x, a_y]) => this.head[0] === a_x && this.head[1] === a_y)
      // 吃到蘋果
      if (is_eat_apple) {
        // console.log("吃到蘋果！！")
        this.apple = this.apple.filter(arr => JSON.stringify(arr) !== JSON.stringify(this.head))
        this.snake_length++;
        this.apple.length === 0 && this.getApple();
      }
      let timer = setTimeout(() => {
        this.update();
        clearTimeout(timer);
      }, (1000 - 20) / this.speed);

    },
    updateSnake() {
      this.body.push(this.head);
      this.head = this.head.map((v, idx) => v + this.direction[idx])
      this.body.length > this.snake_length && this.body.shift();
    },
    updateDirection(code) {
      if (!this.is_run) return;
      switch (code) {
        case 37://左
          if (this.direction[0] !== 1) this.direction = [-1, 0]
          break;
        case 38://上
          if (this.direction[1] !== 1) this.direction = [0, -1]
          break;
        case 39://右
          if (this.direction[0] !== -1) this.direction = [1, 0]
          break;
        case 40://下
          if (this.direction[1] !== -1) this.direction = [0, 1]
          break;
        default:
          break;
      }
      this.is_run = false;
    },
    getApple() {
      this.level++;
      for (let i = 0; i < this.level; i++) {
        const x = Math.floor(Math.random() * this.game_width);
        const y = Math.floor(Math.random() * this.game_width);
        this.apple.push([x, y])
      }
    }
  },
  computed: {
    box_size() {
      return ((this.size + this.bor_s) * this.game_width - this.bor_s);
    },
    speed() {
      return this.level * 1.5;
    }
  }
};
</script>

<style lang="sass" scoped>
.snake-view
  position: relative
.start-game
  position: absolute
  // width: 100px
  // height: 40px
  min-width: 80px
  min-height: 30px
</style>
