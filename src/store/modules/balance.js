const state = {
  balance: 0,
};
const mutations = {
  updateBalance(state, amount) {
    state.balance += amount;
  },
}

const actions = {
  addProfit({ commit }, profitData) {
    commit("updateBalance", profitData.amount);
  },
  addExpense({ commit }, expenseData) {
    commit("addExpense", expenseData);
    const expenseAmount = parseFloat(expenseData.amount);
  },
};

export default {
  state: {
    balance: 0,
  },
  mutations,
  actions,
};
