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
      console.log("->", "setShoppingCart")
      state.shopping_cart = value;
    },
    addShippingCart(state, value) {
      state.cart.push(value)
    }
  },
  actions: {
    async fetchShoppingCart({
      commit
    }) {
      console.log("action")
      try {
        const res = await getShoppingCart();
        console.log("action-->", res)
        console.log(commit)
        commit('setShoppingCart', res.data);
        console.log("AAA")
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
