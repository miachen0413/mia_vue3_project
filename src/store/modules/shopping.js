import {
  getShoppingCart
} from "@/servies/get"
import {
  addShoppingCart
} from "@/servies/post";

export default {
  namespaced: true,
  state: {
    shopping_cart: [],
  },
  mutations: {
    setShoppingCart(state, value) {
      state.shopping_cart = value;
    },
    addShippingCart(state, value) {
      state.cart.push(value)
    }
  },
  actions: {
    async getShoppingCart({
      commit
    }) {
      try {
        const res = await getShoppingCart();
        commit.setShoppingCart = res.data;
      } catch (err) {
        console.log("getShoppingCart->", err)
      }
    },
    async postShoppingCart({
      commit
    }, value) {
      try {
        const res = await addShoppingCart(value);
        commit.addShippingCart = res.data;
      } catch (err) {
        console.log("postShoppingCart->", err)
      }
    },
  },
  getters: {}
}
