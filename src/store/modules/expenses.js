const state = {
    expenses: [],
};

const mutations = {
    addExpense(state, expense) {
        state.expenses.push(expense);
    },
};

const actions = {
    addExpense({ commit }, expenseData) {
        const expenseAmount = parseFloat(expenseData.amount);
        commit("updateBalance", -expenseAmount);
    },
};

export default {
    state,
    mutations,
    actions,
};
