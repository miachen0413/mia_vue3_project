import {
  getShoppingCart
} from "@/servies/get"
import {
  addShoppingCart
} from "@/servies/post";
import {
  deleteShoppingCart
} from '@/servies/delete'

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
    async fetchShoppingCart({
      commit
    }) {
      try {
        const res = await getShoppingCart();
        commit('setShoppingCart', res.data);
      } catch (err) {
        console.log("getShoppingCart->", err)
      }
    },
    async postShoppingCart({
      dispatch
    }, value) {
      try {
        await addShoppingCart(value);
        await dispatch('fetchShoppingCart')
      } catch (err) {
        console.log("postShoppingCart->", err)
      }
    },
    async deleteShoppingCart({
      dispatch
    }, value) {
      try {
        await deleteShoppingCart(value);
        await dispatch('fetchShoppingCart')
      } catch (err) {
        console.log("deleteShoppingCart->", err)
      }
    },
  },
  getters: {}
}
