import {
  createStore
} from "vuex";
import shopping from "./modules/shopping";

export default createStore({
  modules: {
    shopping
  },
  state: {
    is_login: false
  },
  mutations: {
    setIsLogin(state, value) {
      state.is_login = value
    }
  }
})
