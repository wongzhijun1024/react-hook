import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user/user";
import car from "./modules/car/car";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    car,
  },
});

export default store;
