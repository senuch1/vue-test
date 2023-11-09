// const name = "RECORDS";
// const namespaced = true;
// const state = {
//   profits:[],
//   expances:[]
// };
// const getters = {
//   STATE: (s) => s,
// };
// const mutations = {

// };
// const actions = {

// };
// export default {
//   name,
//   namespaced,
//   state,
//   getters,
//   mutations,
//   actions,
// };


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
