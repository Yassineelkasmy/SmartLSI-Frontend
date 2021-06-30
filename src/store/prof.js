import Api from "@/services/api";
export default {
    state: {
        

        classes:{
          
        },
        enseignants:{

        },
        modules:{

        }
    },
    mutations: {

        SET_INFOS(state,infos) {
            state.infos = infos;
        },
        SET_CLASSES(state,classes){
          state.classes = classes;
        }
        ,
        SET_ENSEIGNANTS(state,enseignants){
          state.enseignants = enseignants;
        }
        ,
        ADD_CLASSE(state,newClasse) {
          state.classes.classes.push(newClasse);
        },
        MODIFIER_CLASSE(state,newClasse) {
          state.classes.classes.push(newClasse);
        },
        SET_MODULES(state,modules) {
          state.modules = modules;
        }


    },
    actions: {
  
  
      async infos({commit}) {
        let response = await Api().get('/infos');
        let infos = response.data;
        commit('SET_INFOS',infos )
      },

      async etudiants({commit},) {
        
        
    
        let response = await Api().post('/etudiants');
        let classes = response.data;
        console.log(classes)
        commit('SET_CLASSES',classes);
        

      },

      async modules({commit},) {
        
        
    
        let response = await Api().get('/modules');
        let modules = response.data;
        console.log(modules)
        commit('SET_MODULES',modules);
        

      },

      async enseignants({commit},) {
        
        
    
        let response = await Api().post('/enseignants');
        let ens = response.data;
        console.log(ens)
        commit('SET_ENSEIGNANTS',ens);
        

      },
      async ajouterClasse({commit},classe) {
        console.log(classe);
        let response =  await Api().post('/ajouterclasse',classe);
       let newClasse = response.data;

        commit("ADD_CLASSE",newClasse);

      },
      async modifierClasse({commit},classe) {
        console.log(classe);
        let response =  await Api().post('/modifierclasse',classe);
        let classes = response.data;

        commit("SET_CLASSES",classes);

      },
      async supprimerClasse({commit},id) {
        var param = {
          classe_id:id
        }
        param = JSON.stringify(param)
        let response =  await Api().post('/supprimerclasse',param);
        let classes = response.data;

        commit("SET_CLASSES",classes);

      },

      async ajouterEtu({commit},data) {
        
        let response =  await Api().post('/ajouteretu',data);
        let classes = response.data;

        commit("SET_CLASSES",classes);

      },

      async modifierEtu({commit},data) {
        console.log(data)
        let response =  await Api().post('/modifieretu',data);
        let classes = response.data;

        commit("SET_CLASSES",classes);

      },

      async ajouterProf({commit},data) {
        console.log(data)
        let response =  await Api().post('/ajouterprof',data);
        let ens = response.data;

        commit("SET_ENSEIGNANTS",ens);

      },


      async modifierProf({commit},data) {
        console.log(data)
        let response =  await Api().post('/modifierprof',data);
        let ens = response.data;

        commit("SET_ENSEIGNANTS",ens);

      },

      async ajouterModule({commit},data) {
        console.log(data)
        let response =  await Api().post('/ajoutermod',data);
        let classes = response.data;

        commit("SET_CLASSES",classes);

      },

      async modifierModule({commit},data) {
        console.log(data)
        let response =  await Api().post('/modifiermod',data);
        let classes = response.data;

        commit("SET_CLASSES",classes);

      },

      async supprimerModule({commit},id) {
        console.log(id)
        var data = {
          id:id,
        }
        let response =  await Api().post('/supprimermod',data);
        let classes = response.data;

        commit("SET_CLASSES",classes);

      },

      async deleteUser({commit},data) {
        await Api().post('/deleteuser',data);
        

        commit("SET_ENSEIGNANTS",{});
        commit("SET_CLASSES",{});


      },


      async ajouterSeance({commit},data) {
        console.log(data)
        let response =  await Api().post('/ajouterseance',data);
        let classes = response.data;

        commit("SET_CLASSES",classes);

      },

      async supprimerSeance({commit},id) {
        console.log(id)
        var data = {
          id:id,
        }
        let response =  await Api().post('/supprimerseance',data);
        let classes = response.data;

        commit("SET_CLASSES",classes);

      },

     
    },
    
  }
  