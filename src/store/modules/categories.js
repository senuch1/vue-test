const state = {
  categories: [],
};

const mutations = {
  addCategory(state, category) {
    state.categories.push(category);
  },
  updateCategoryBalance(state, { categoryId, amount }) {
    const category = state.categories.find((c) => c.id === categoryId);
    if (category) {
      category.balance += amount;
    }
  },
};

const actions = {
  createCategory({ commit }, category) {
    category.balance = 0;
    commit("addCategory", category);
  },
  addExpense({ commit, rootState }, expenseData) {
    commit("updateCategoryBalance", {
      categoryId: expenseData.categoryId,
      amount: -expenseData.amount,
    });
    rootState.balance.balance -= expenseData.amount;
  },
};

export default {
  state,
  mutations,
  actions,
};
