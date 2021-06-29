import Api from "@/services/api";

export default {
  state: {
    currentUser: {}
  },
  mutations: {
    LOGOUT_USER(state) {
      state.currentUser = {}
      window.localStorage.removeItem('currentUser');
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    },
  },
  actions: {

    logout({commit}) {
      commit('LOGOUT_USER');
    },
    async login({commit}, loginInfo) {
      try {
        let response = await Api().post('/login', loginInfo);
        if(response.data.message==='invalid_email_and_password_combination'){
            
          return {error: "combinaison e-mail et mot de passe invalide"}

        }
        let user = response.data.user;
        user.token = response.data.token;

        commit('SET_CURRENT_USER', user);
        return user;
      } catch {
        return {error: "Erreur réseau"}
      }   
    },
    

    
  },
 
}
