import {
  createStore
} from "vuex";
import cart from "./modules/cart"
import productions from "./modules/productions";

export default createStore({
  modules: {
    cart,
    productions
  }
})
