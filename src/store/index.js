import { createStore } from "vuex";
import balanceModule from './modules/balance'
import categories from './modules/categories'

export default createStore({
  state() {
    return {};
  },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      balance: balanceModule,
      categories,

  },
});