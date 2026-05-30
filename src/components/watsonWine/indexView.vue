<template>
<div id="work-box">
  <div class="work-content">
    <div class="info">
      <p class="work-title">{{ title }}</p>
    </div>
    <div class="description">
      <p class="desc-heading">作品說明</p>
      <div class="desc-body">
        <p>我曾參與屈臣氏酒莊 Watson’s Wine 電商平台的網頁改版，專案屬於大型零售電商系統，涵蓋商品瀏覽、購物車、結帳流程、配送方式、訂單查詢、會員功能與促銷活動等核心功能。</p>
        <p>在專案中，我主要負責前端功能開發、既有功能調整、API 串接、畫面互動邏輯與問題排查。開發過程中需與後端 API、SAP Commerce / Hybris、CMS 內容管理系統以及 QA 測試流程配合。</p>
        <p>我參與的工作包含：</p>
        <ul>
          <li>商品頁與活動相關功能開發，例如商品促銷、Flash Sale、活動標籤與價格顯示邏輯</li>
          <li>購物車與結帳流程功能維護，包含配送方式、取貨方式、時段選擇與訂單資料處理</li>
          <li>串接 REST API，處理商品、購物車、訂單、配送與會員相關資料</li>
          <li>使用 Angular、RxJS 與 NgRx 管理非同步資料流與前端狀態</li>
          <li>處理 CMS / SmartEdit 內容元件與頁面 Slot 顯示問題</li>
          <li>配合設計稿與商業需求，完成電商前台畫面與互動功能</li>
        </ul>
        <p>透過這個專案，我累積了大型電商系統的實務經驗，熟悉從商品展示、購物車、結帳到訂單完成的完整交易流程，也更理解前端在商業系統中需要兼顧使用者體驗、資料正確性、狀態管理與系統穩定性。</p>
      </div>
    </div>
  </div>
  <div class="image-box">
    <a class="link-btn" href="https://www.watsonswine.com/zh-hk">去網站</a>
    <img src="/public/watsonswine.png" />
  </div>
</div>
</template>
<script setup>
const title = 'watson\'s wine';
</script>
<style lang="sass" scoped>
#work-box
  padding: 40px
  display: flex
  flex-direction: column
  gap: 40px
.work-content
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
.image-box
  width: 80%
  display: flex
  flex-direction: column
  gap: 16px
  img
    width: 100%
  .link-btn
    align-self: flex-start
    display: inline-flex
    align-items: center
    justify-content: center
    padding: 10px 20px
    border-radius: 2px
    background-color: rgb(73, 101, 71)
    font-family: 'Roboto', sans-serif
    font-size: 14px
    font-weight: 400
    line-height: 20px
    letter-spacing: 0.25px
    color: #ffffff
    text-decoration: none
    transition: background-color 0.2s ease
    &:hover
      background-color: rgb(66, 91, 64)
</style>