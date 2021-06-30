import { createStore } from "vuex";
import user from "./user"
import admin from "./admin"
import prof from "./prof"

export default createStore({
  state: {
    currentUser: {},
    jours:[
    {
      jour:"lundi",
      n:1,
    },
    {
      jour:"mardi",
      n:2,
    },
    {
      jour:"mercredi",
      n:3,
    },
    {
      jour:"jeudi",
      n:4,
    },
    {
      jour:"vendredi",
      n:5,
    },
    {
      jour:"samedi",
      n:6,
    },
    
  ]
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    admin,
    prof
  },
});
