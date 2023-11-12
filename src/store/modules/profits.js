const state = {
    profits: [],
};

const mutations = {
    addProfit(state, profit) {
        state.profits.push(profit);
    },
};

const actions = {
    addProfit({ commit }, profitData) {
        commit("addProfit", profitData);
    },
};

export default {
    state,
    mutations,
    actions,
};
