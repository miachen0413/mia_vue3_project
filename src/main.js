import './assets/main.sass'
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import Paginate from "vuejs-paginate-next";

var app = createApp(App)
app.use(router)
app.use(store)
app.component("paginate-item", Paginate)
app.mount('#app')
