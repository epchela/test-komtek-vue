import Vue from "vue";
import Vuex from "vuex";
import { admin } from "./modules/admin";
import { user } from "./modules/user";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    admin,
    user,
  },
});
