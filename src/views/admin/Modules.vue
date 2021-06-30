<template>
    <div class="relative">
     <div class="text w-auto flex" >
    




    <div class="w-full flex space-x-5">  
    


    
    </div>

    <new-admission @click="toggleShowNewAdmission" class="absolute right-10 top-0"/>
   </div>


   
    <div class="mt-10 grid grid-cols-4 gap-4 p-5 " v-for="clss in classes" :key="clss.id">
    <div class="text-lg text-center text-gray-900 border-gray-900 border-2 px-3 py-2 rounded-lg max-w-xl col-span-12">

       Classe :

        <span class="font-bold ">{{clss.classe}}</span>
     </div>
    <div class="relative text-center capitalize text-lg  px-10 py-5  text-gray-900 bg-white z-10 shadow-xl rounded-lg" v-for="module in clss.modules" :key="module.id">
        <fa icon='book' class="absolute text-2xl text-indigo-500 left-2 top-2" />
     
     <span class="mt-2 tracking-wider font-semibold">
       
        {{ module.titre }} 
        
     </span>


     <span class="text-base block mt-2 capitalize">
         <avatar :isProf="true" class="inline text-yellow-600 text-xl mr-2"/>
         {{ module.enseignant.user.nom + " " +  module.enseignant.user.prenom }}
     </span>

     
     <div class="flex mt-4 text-xl px-2 justify-around text-green-main ">
         <fa icon="edit" class="cursor-pointer" @click="toggleShowEdit(module)"/>
         <fa icon="times" class="cursor-pointer text-red-600" @click="supprimer(module)"/>
     </div>
    </div>
    </div>
    
    <div v-if="canShowNewAdmission">
        <new-module-or-edit  @realodEtus='getEtus' @handleCloseAdmission="toggleShowNewAdmission" />
    </div>
    <div v-if="canShowEdit">
        <new-module-or-edit isEdit="true" :module="module" @realodEtus='getEtus' @handleCloseEdit="showEdit = false" />
        </div>
    
    </div>
</template>

<script>
import NewModuleOrEdit from '../../components/NewModuleOrEdit.vue';

import NewAdmission from '../../components/NewModule.vue';
import Avatar from '../../components/Avatar.vue';


    export default {
  components: { NewAdmission, NewModuleOrEdit, Avatar, },
    mounted:async  function (){
        this.getEtus()

    },
    data(){
       
       var showNewAdmission = false;
       var showEdit = false;
       var moduleOnEdit = {};
      
       
      
    

       return {
           
            showNewAdmission,
            showEdit,
            moduleOnEdit,

           
         
       }
    },

        
       computed:{
        infos() {
            return this.$store.state.admin.infos;
        },

        classes() {
            
            return this.$store.state.admin.classes.classes;
        },

       

    
       
        canShowNewAdmission () {
            return this.showNewAdmission;
        },
        canShowEdit() {
            return this.showEdit;
        },
        module() {
            return this.moduleOnEdit;
        }

        
    } ,

    methods:{
      
        toggleShowNewAdmission() {
            this.showNewAdmission = !this.showNewAdmission;
        },
        toggleShowEdit(module) {
            this.moduleOnEdit = module;
            this.showEdit = true;

        },
        async supprimer(module) {
            var r = confirm("Etes-vous sûr que vous voulez supprimer le module " + module.titre + " ?");
            if(r) {
                await this.$store.dispatch("supprimerModule",module.id);
            }


        },
      

        async getEtus() {
            await this.$store.dispatch('etudiants');
        },



    }
    

  
    
    

    
    }
</script>

