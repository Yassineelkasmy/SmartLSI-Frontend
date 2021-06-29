<template>
    <div class="relative">
     <div class="text w-auto flex" >
    




    <div class="w-full flex justify-center space-x-5">  
    


   
    </div>

    <new-enseignant @click="toggleShowNewAdmission" class="absolute right-10 top-0"/>
        

    

        
        
           
           
            
           
           
           
    </div>

    <div class="mt-16 mx-auto">
     
        <table-profs :ens='enseignants'/>
    </div>
    
    <div v-if="canShowNewAdmission">
        <admission-or-edit @realodEtus='getEtus()' @handleCloseAdmission="toggleShowNewAdmission" />
    </div>
    </div>
</template>

<script>
import AdmissionOrEdit from '../../components/AdmissionOrEditProf.vue';
import NewEnseignant from '../../components/NewEnseignant.vue';

import TableProfs from '../../components/TableProfs.vue';
    export default {
  components: { TableProfs, AdmissionOrEdit, NewEnseignant, },
    
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

        enseignants() {
            return this.$store.state.admin.enseignants;
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
        

        async getProfs() {
            await this.$store.dispatch('enseignants');
        },


    }
    

  
    
    

    
    }
</script>

