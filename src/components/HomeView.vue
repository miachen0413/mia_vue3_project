<template>
  <div id="hero">
    <!-- Portrait -->
    <div class="portrait">
      <div class="photo-wrap">
        <img class="photo" :src="photoUrl" alt="Mia" />
      </div>
      <!-- <div class="pop">
        <div class="pop-bubble">很高興認識你！</div>
        <img class="pop-tail" :src="vectorUrl" alt="" />
      </div> -->
    </div>

    <!-- Intro -->
    <div class="intro">
      <div class="mia-intro">
        <p>Hello，我是Mia! </p>
        <div class="title-line">
          <span>有 7 年以上的</span><span class="underline">前端工程師</span><span>。</span>
        </div>
      </div>

      <div class="frameworks">
        <img :src="vueIcon" alt="Vue.js" />
        <img :src="angularIcon" alt="Angular" />
        <img :src="reactIcon" alt="React" />
      </div>

      <p class="description">
        熟悉 Vue.js、Angular、TypeScript 與企業級電商平台開發。曾參與 Watson’s Wine 香港大型電商平台、遊戲平台、後台管理系統及多語系產品開發。具備從 0 到 1 建置專案經驗，熟悉 SAP Commerce(Hybris)、Spartacus、GraphQL、RESTful API
      </p>

      <div class="cta">
        <button class="btn btn-primary" @click="goTo('https://www.cake.me/resumes/s--xR3bTqte8vUKBsDe9wDf3A--/micchen-bfc5e3')">履歷</button>
        <button class="btn btn-secondary" @click="goto('https://medium.com/@spispil332')">部落格</button>
      </div>
    </div>
  </div>

  <!-- Card Section -->
  <div id="card-section">
    <div class="cards-row">
      <div v-for="card in cards" :key="card.title" class="word-card" @click="router.push(card.path)">
        <div class="card-inner">
          <img class="card-bg" :src="card.image" :alt="card.title" />
          <div class="card-overlay"></div>
          <p class="card-title">{{ card.title }}</p>
          <div class="card-labels">
            <div class="label" v-for="use in card.uses" :key="use.text">
              <img :src="use.icon" :alt="use.alt" class="label-icon" />
              <span>{{use.text}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const photoUrl = '/photo.jpg'
const vueIcon = '/icon/vue.png'
const angularIcon = '/icon/angular.svg'
const reactIcon = '/icon/react.svg'
const vectorUrl = '/icon/vector.svg'
const htmlIcon = '/icon/html.png'
const cssIcon = '/icon/css.png'
const vueIcon2 = '/icon/vue.png'

const cards = [
  { title: '貪食蛇', image: '/snake.png',
  path: '/snake',
  uses: [
    {text: 'VUE2', alt: 'Vue',icon: vueIcon2},
    {text: 'HTML', alt: 'HTML', icon: htmlIcon},
    {text: 'SASS', alt: 'CSS', icon: cssIcon},
  ] },
  { title: '梯子遊戲', image: '/ladder.png', 
  path: '/ladder',
  uses: [
    {text: 'VUE2', alt: 'Vue',icon: vueIcon2},
    {text: 'HTML', alt: 'HTML', icon: htmlIcon},
    {text: 'SASS', alt: 'CSS', icon: cssIcon},
  ] },
  { title: '翻牌記憶',   image: '/cards.png', 
  path: '/flap_cards', 
  uses: [
    {text: 'VUE2', alt: 'Vue',icon: vueIcon2},
    {text: 'HTML', alt: 'HTML', icon: htmlIcon},
    {text: 'SASS', alt: 'CSS', icon: cssIcon},
  ] },
  { title: '購物網站', image: '/shopping.png', 
  path: '/shopping',
  uses: [
    {text: 'VUE2', alt: 'Vue',icon: vueIcon2},
    {text: 'HTML', alt: 'HTML', icon: htmlIcon},
    {text: 'SASS', alt: 'CSS', icon: cssIcon},
  ] },
  { title: '屈臣氏酒莊', image: '/shopping.png', 
  path: '/watsonswine',
  uses: [] },
]

function goto(url) {
  window.open(url);
}
</script>

<style lang="sass" scoped>
@import url('/fonts/fonts.css')

#hero
  display: grid
  grid-template-columns: repeat(5, 1fr)
  column-gap: 40px
  padding: 40px 120px
  min-height: 400px
  width: 100%
  box-sizing: border-box

  .portrait
    grid-column: 1 / span 2
    position: relative

    .photo-wrap
      position: absolute
      inset: 0 auto 0 0
      aspect-ratio: 1
      max-width: 320px

      .photo
        width: 100%
        height: 100%
        border-radius: 160px
        overflow: hidden
        object-fit: cover
        display: block

    .pop
      position: absolute
      right: 0
      top: 124px
      width: 132px

      .pop-bubble
        background-color: #6b5d3f
        color: white
        font-family: 'Roboto', sans-serif
        font-size: 14px
        font-weight: 500
        line-height: 20px
        letter-spacing: 0.1px
        padding: 10px
        border-radius: 2px
        white-space: nowrap
        width: 119px
        box-sizing: border-box
        text-align: center

      .pop-tail
        display: block
        width: 34.5px
        height: 24px
        margin-left: 14px

  .intro
    grid-column: 3 / span 3
    display: flex
    flex-direction: column
    gap: 16px
    align-items: flex-start
    justify-content: center

    .mia-intro
      font-family: 'Libre Bodoni', serif
      font-size: 36px
      font-weight: 400
      line-height: 44px
      color: #000

      p
        margin: 0

      .title-line
        display: flex
        align-items: baseline
        flex-wrap: wrap

        .underline
          text-decoration: underline
          text-decoration-style: solid
          text-underline-position: from-font

    .frameworks
      display: flex
      align-items: center
      gap: 12px

      img
        width: 40px
        height: 40px
        object-fit: contain

    .description
      font-family: 'Roboto', sans-serif
      font-size: 16px
      font-weight: 400
      line-height: 24px
      letter-spacing: 0.5px
      color: #000
      margin: 0

    .cta
      display: flex
      gap: 12px
      align-items: center

      .btn
        font-family: 'Roboto', sans-serif
        font-size: 14px
        font-weight: 400
        line-height: 20px
        letter-spacing: 0.25px
        padding: 10px 20px
        border-radius: 2px
        border: none
        cursor: pointer
        white-space: nowrap

        &-primary
          background-color: #496547
          color: white

          &:hover
            opacity: 0.85

        &-secondary
          background-color: #cbebc5
          color: #000

          &:hover
            opacity: 0.85

#card-section
  background-color: #ffdf9b
  width: 100%
  padding-top: 20px
  box-sizing: border-box

  .cards-row
    display: flex
    align-items: stretch
    flex-wrap: wrap
    padding: 0 20px 20px

    .word-card
      flex: calc(100% / 4) 0 0
      min-width: 320px
      overflow: hidden
      padding: 20px
      border-radius: 2px
      cursor: pointer

      .card-inner
        position: relative
        display: flex
        flex-direction: column
        height: 320px
        align-items: flex-start
        justify-content: space-between
        padding: 20px
        border-radius: 2px
        overflow: hidden

        .card-bg
          position: absolute
          inset: 0
          width: 100%
          height: 100%
          object-fit: cover
          border-radius: 2px
          pointer-events: none

        .card-overlay
          position: absolute
          inset: 0
          background: transparent

        .card-title
          position: relative
          font-family: 'Roboto', sans-serif
          font-size: 24px
          font-weight: 400
          line-height: 32px
          color: #000
          white-space: nowrap
          margin: 0

        .card-labels
          position: relative
          display: flex
          gap: 8px
          align-items: center

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
</style>
