import { createStore } from "vuex";
import user from "./user"
import admin from "./admin"

export default createStore({
  state: {
    currentUser: {},
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    admin,
  },
});
