const state = {
  userInfo: {name:'Open Source'}
};

const getters = {
  userInfo: state => state.userInfo
};

const actions = {
  setUserInfo({ commit, state }, data) {
    commit('SET_USER_INFO', data);
  }
};

const mutations = {
  SET_USER_INFO(state, data) {
    state.userInfo = data;
  }
};

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}
