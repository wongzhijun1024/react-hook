import { USER_SET } from "../../action";

let user = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : {};

const state = () => ({
  user: user,
  title: "登录页面234",
});
const getters = {
  title: (state) => {
    return state.title;
  },
  user: (state) => {
    return state.user;
  },
};
const mutations = {
  [USER_SET](state, user) {
    state.user = user;
  },
};

const actions = {
  [USER_SET](context, user) {
    context.commit(USER_SET, user);
  },
};

export default {
  namespaced: true, // 增加命名空间
  state,
  mutations,
  actions,
  getters,
};
