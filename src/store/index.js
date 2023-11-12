import { createStore } from "vuex";
import balanceModule from './modules/balance'
import categories from './modules/categories'
import profits from "./modules/profits";
import expenses from './modules/expenses';

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
    profits,
    expenses,
  },
});