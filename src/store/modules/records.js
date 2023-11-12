const state = {
  records: [],
};

const mutations = {
  addRecord(state, record) {
    state.records.push(record);
  },
};

const actions = {
  addProfitRecord({ commit }, profitData) {
    commit("addRecord", profitData);
  },
  addExpenseRecord({ commit }, expenseData) {
    commit("addRecord", expenseData);
  },
};

export default {
  state,
  mutations,
  actions,
};
