import { createStore } from 'vuex'

export default createStore({
  state: {
    utilizador: [],
  },
  mutations: {
    login(state, utilizador) {
      state.utilizador = utilizador;
    }
  },
  actions: {
  },
  getters: {
  }

})
