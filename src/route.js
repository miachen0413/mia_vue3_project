import {
  // createMemoryHistory,
  createWebHistory,
  createRouter
} from 'vue-router'
import HomeView from './components/HomeView.vue'
import LadderView from './components/game/LadderView.vue'
import SnakeView from './components/game/SnakeView.vue'
import Shopping from './components/web/shopping/IndexView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/ladder',
    component: LadderView
  },
  {
    path: '/snake',
    component: SnakeView
  },
  {
    path: '/shopping',
    component: Shopping
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
