<template>
    <div class="relative">
     <div class="text w-auto flex" >
    




    <div class="w-full flex space-x-5">  
    


    
    </div>

    <new-admission @click="toggleShowNewAdmission" class="absolute right-10 top-0"/>
   </div>


   
    <div class="mt-10 p-5 " v-for="clss in classes" :key="clss.id">
        <div class="mb-5 text-lg text-center text-gray-900 border-gray-900 border-2 px-3 py-2 rounded-lg max-w-xl col-span-12">

       Classe :

        <span class="font-bold ">{{clss.classe}}</span>
        </div>
    
    <calendrier :seances="clss.seances" :isAdmin="true" @handleDelete="supprimer"/>

    </div>
    
    <div v-if="canShowNewAdmission">
        <new-seance-form  @realodEtus='getEtus' @handleCloseAdmission="toggleShowNewAdmission" />
    </div>
   
    
    </div>
</template>

<script>
import NewSeanceForm from '../../components/NewSeanceForm.vue';

import NewAdmission from '../../components/NewSeance.vue';
import Calendrier from '../../components/Calendrier.vue';


    export default {
  components: { NewAdmission, NewSeanceForm, Calendrier,  },
    mounted:async  function (){
        this.getEtus()
        await this.$store.dispatch('modules');

    },
    data(){
       
       var showNewAdmission = false;
       var showEdit = false;
       var moduleOnEdit = {};
       var jours = this.$store.state.jours;
      
       
      
    

       return {
           
            showNewAdmission,
            showEdit,
            moduleOnEdit,
            jours

           
         
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
        },


        
    } ,

    methods:{
      
        toggleShowNewAdmission() {
            this.showNewAdmission = !this.showNewAdmission;
        },
        toggleShowEdit(module) {
            this.moduleOnEdit = module;
            this.showEdit = true;

        },
        async supprimer(seance) {
            var r = confirm("Etes-vous sûr que vous voulez supprimer la seance " + seance.module.titre + " "+ this.jours[seance.jour-1] +" ?");
            if(r) {
                await this.$store.dispatch("supprimerSeance",seance.id);
            }


        },
      

        async getEtus() {
            await this.$store.dispatch('etudiants');
        },



    }
    

  
    
    

    
    }
</script>

