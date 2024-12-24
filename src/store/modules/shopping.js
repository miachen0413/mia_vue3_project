import {
  getShoppingCart
} from "@/servies/get"
import {
  addShoppingCart
} from "@/servies/post";
import {
  deleteShoppingCart
} from '@/servies/delete'
import {
  getCookie
} from '@/utils/common.js'
import {
  ElMessage
} from 'element-plus';

export default {
  namespaced: true,
  state: {
    shopping_cart: [],
    search: '',
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
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
        const id = getCookie('user_name') || 1;
        const res = await getShoppingCart(id);
        commit('setShoppingCart', res.data);
      } catch (err) {
        ElMessage({
          message: err.data.error,
          type: 'error'
        })
      }
    },
    async postShoppingCart({
      dispatch
    }, value) {
      try {
        const res = await addShoppingCart(value);
        ElMessage({
          message: res.message,
          type: 'sucess'
        })
        await dispatch('fetchShoppingCart')
      } catch (err) {
        ElMessage({
          message: err.data.error,
          type: 'error'
        })
      }
    },
    async deleteShoppingCart({
      dispatch
    }, value) {
      try {
        const user_id = getCookie('user_name') || 1;
        await deleteShoppingCart({
          product_id: value,
          user_id
        });
        await dispatch('fetchShoppingCart')
      } catch (err) {
        ElMessage({
          message: err.data.error,
          type: 'error'
        })
      }
    },
  },
  getters: {}
}
