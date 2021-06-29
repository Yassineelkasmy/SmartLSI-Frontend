<template>
    <div class="relative">
     <div class="text w-auto flex" >
    




    <div class="w-full flex justify-center space-x-5">  
    


   
    </div>

    <new-admission @click="toggleShowNewAdmission" class="absolute right-10 top-0"/>
        

    

        
        
           
           
            
           
           
           
    </div>

    <div class="mt-5 mx-auto" v-for="clss in classes.classes" :key="clss.id">
     <div class="text-lg text-center text-gray-900 border-gray-900 border-2 px-3 py-2 rounded-lg max-w-xl">

       Classe :

        <span class="font-bold ">{{clss.classe}}</span>
     </div>
        <table-etus :id="clss.id"/>
    </div>
    
    <div v-if="canShowNewAdmission">
        <admission-or-edit @handleCloseAdmission="toggleShowNewAdmission" />
    </div>
    </div>
</template>

<script>
import AdmissionOrEdit from '../../components/AdmissionOrEditEtu.vue';
import NewAdmission from '../../components/NewAdmission.vue';

import TableEtus from '../../components/TableEtus.vue';
    export default {
  components: {  NewAdmission, TableEtus, AdmissionOrEdit, },
    mounted:async  function (){
        this.getEtus(0)
    },
    data(){
       
       var showNewAdmission = false;
      
       
       

       

    

       return {
           
            showNewAdmission,
        
         
       }
    },

        
       computed:{
        infos() {
            return this.$store.state.admin.infos;
        },

        classes() {
            
            return this.$store.state.admin.classes;
        },

       
        
        canShowNewAdmission () {
            return this.showNewAdmission;
        }

        
    } ,

    methods:{
        
        toggleShowNewAdmission() {
            console.log('done');
            this.showNewAdmission = !this.showNewAdmission;
        }
        ,
        

        async getEtus() {
            await this.$store.dispatch('etudiants');
        },


    }
    

  
    
    

    
    }
</script>

