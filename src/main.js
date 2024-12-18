import './assets/main.sass'
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import Paginate from "vuejs-paginate-next";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'


var app = createApp(App)
app.use(router)
app.use(store)
app.component("paginate-item", Paginate)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
