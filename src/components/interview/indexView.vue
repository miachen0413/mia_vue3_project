<template>
  <div id="interview">
    
  </div>
</template>

<script>
import CardView from './cardView.vue';
export default {
  components: { CardView },
  data() {
    return {
      MOCK_PRODUCTS: [
        {
          id: 1,
          name: "MacBook Air",
          price: 999,
          specs: {
            cpu: "Apple M1",
            ram: "8GB",
            storage: "256GB"
          }
        },
        {
          id: 2,
          name: "Dell XPS 13",
          price: 1299,
          specs: {
            cpu: "Intel i7-1165G7",
            ram: "16GB",
            storage: "512GB"
          }
        },
        {
          id: 3,
          name: "ThinkPad X1",
          price: 1499,
          specs: {
            cpu: "Intel i5-1135G7",
            ram: "16GB",
            storage: "1TB"
          }
        },
        {
          id: 4,
          name: "HP Spectre x360",
          price: 1199,
          specs: {
            cpu: "Intel i7-1185G7",
            ram: "16GB",
            storage: "512GB"
          }
        },
        {
          id: 5,
          name: "ASUS ROG Zephyrus",
          price: 1799,
          specs: {
            cpu: "AMD Ryzen 9 5900HS",
            ram: "32GB",
            storage: "1TB"
          }
        }
      ],
      compare_list: [],
      is_show_compare: false
    }
  },
  methods: {
    addList(product) {
      if (!this.compare_list.find(value => value.id === product.id) && this.compare_list.length < 4) this.compare_list.push(product)
    },
    deleteProduct(id) {
      console.log("->", id)
      this.compare_list = this.compare_list.filter(value => value.id !== id);
    },
    cleanAll() {
      this.compare_list = []
    }
  },
  watch: {
    compare_list(val) {
      if (val.length >= 3) this.is_show_compare = true;
    }
  }
}
</script>

<style lang="sass" scoped>
.product-bar
  margin-bottom: 10px
.compare-bar
  background-color: gray
  position: fixed
  bottom: 0
.clean-all
  margin-bottom: 10px

.flex
  display: flex
</style>

<!-- 1. ProductGrid（產品網格列表）  
    V 顯示多個產品卡片，每個卡片包含產品圖片、名稱、基本資訊，以及「加入比較」按鈕。  
    V 用戶可以點擊「加入比較」，將產品加入比較列表。
2. CompareBar（比較欄）  
    V 固定於頁面下方，顯示已選產品的縮圖和名稱。  
    V 支援最多選擇 3 個產品 進行比較。  
    V 提供「清除」按鈕，允許用戶移除單一產品或清空全部選擇。
3. CompareTable（比較表）  
    • 當用戶完成產品選擇後，下方直接展示比較表，顯示選定產品的詳細比較資訊（如價格、規格、功能等）。  
    • 支援動態更新：用戶增刪選擇後，表格即時更新。  
    • 表格支持水平滾動，以便展示更多產品或欄位資訊。
用戶互動流程

1. 選擇產品  
    用戶瀏覽產品列表，點擊「加入比較」，最多選擇 3 個產品。
    
2. 顯示比較表  
    一旦選定產品，頁面下方的比較表會自動顯示，展示選定產品的詳細資訊。
    
3. 移除產品  
    用戶可以在比較欄或比較表中移除產品，系統會即時更新比較內容。
    
4. 清空比較  
    點擊「清除」按鈕可清空所有選擇，並隱藏比較表。 -->