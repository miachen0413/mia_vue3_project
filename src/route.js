import {
  // createMemoryHistory,
  createWebHistory,
  createRouter
} from 'vue-router'
import HomeView from './components/HomeView.vue'
import Login from './components/web/LoginView.vue'
import LadderView from './components/game/LadderView.vue'
import SnakeView from './components/game/SnakeView.vue'
import Shopping from './components/web/shopping/IndexView.vue'
import ProductView from './components/web/shopping/ProductView.vue'
import ContentView from './components/web/shopping/ContentView.vue'
import FlopCards from './components/game/FlopCards.vue'
import Interview from './components/interview/indexView.vue'

const routes = [{
    path: '/',
    component: HomeView
  },
  {
    path: '/ladder',
    component: LadderView
  },
  {
    path: '/flap_cards',
    component: FlopCards
  },
  {
    path: '/snake',
    component: SnakeView
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/interview',
    component: Interview
  },
  {
    path: '/shopping',
    component: Shopping,
    children: [{
        path: '',
        component: ContentView
      },
      {
        path: 'product/:id',
        component: ProductView
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
