import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchParam: '',
    books: [],
    cart:[],
    cartCount: 0,
    isShowOrderPopUp: false,
  },
  mutations: {
    addBooks(state, book){
      state.books = book
    },
    addToCart(state,book){
      let found = state.cart.find(item => item.book.id == book.book.id)
      if(found){
        found.quantity++
        found.totalPrice = found.quantity * found.book.saleInfo.listPrice.amount
      } else {
        state.cart.push(book)

        Vue.set(book, 'quantity', 1)
        Vue.set(book, 'totalPrice', book.book.saleInfo.listPrice.amount)
      }
      state.cartCount++
    }
  },
  actions: {
    addBooks({commit,state}){
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.searchParam}`)
          .then(response => response.json())
          .then(json => commit('addBooks', json.items))
    }
  },
  getters:{
    totalPrice(state){
      let result = []
      for (let item of state.cart){
        result.push(item.totalPrice)
      }
      result = result.reduce(function (sum, el) {
        return sum + el
      })
      return result.toFixed(2)
    }
  },
  modules: {}
});
