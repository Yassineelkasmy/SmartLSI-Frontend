<template>
    <div class="relative">
     <div class="text w-auto flex" >
    




    <div class="w-full flex space-x-5">  
    


    
    </div>

    <new-admission @click="toggleShowNewAdmission" class="absolute right-10 top-0"/>
   </div>
    <div class="mt-10 grid grid-cols-5 gap-4 p-5 ">
    <div class="relative text-center capitalize text-lg  px-10 py-5  text-gray-900 bg-white z-10 shadow-xl rounded-lg" v-for="clss in classes" :key="clss.id">
        <fa icon='address-book' class="absolute text-3xl text-red-500 left-2 top-2" />
     <span class="tracking-wider font-semibold">
       
        {{ clss.classe }} 
        
     </span>

     <span class="text-base block mt-2">
         {{ clss.etudiants.length }} étudiants
     </span>
     <div class="flex mt-4 text-xl px-2 justify-around text-green-main ">
         <fa icon="edit" class="cursor-pointer" @click="toggleShowEdit(clss)"/>
         <fa icon="times" class="cursor-pointer text-red-600" @click="supprimer(clss)"/>
     </div>
    </div>
    </div>
    
    <div v-if="canShowNewAdmission">
        <new-classe-or-edit  @realodEtus='getEtus' @handleCloseAdmission="toggleShowNewAdmission" />
    </div>
    <div v-if="canShowEdit">
        <new-classe-or-edit isEdit="true" :classe="classe" @realodEtus='getEtus' @handleCloseEdit="showEdit = false" />
        </div>
    
    </div>
</template>

<script>
import NewClasseOrEdit from '../../components/NewClasseOrEdit.vue';

import NewAdmission from '../../components/NewClasse.vue';

    export default {
  components: { NewAdmission, NewClasseOrEdit, },
    mounted:async  function (){
        this.getEtus()
    },
    data(){
       
       var showNewAdmission = false;
       var showEdit = false;
       var classeOnEdit = {};
      
       
      
    

       return {
           
            showNewAdmission,
            showEdit,
            classeOnEdit
           
         
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
        classe() {
            return this.classeOnEdit;
        }

        
    } ,

    methods:{
      
        toggleShowNewAdmission() {
            this.showNewAdmission = !this.showNewAdmission;
        },
        toggleShowEdit(classe) {
            this.classeOnEdit = classe;
            this.showEdit = true;

        },
        async supprimer(classe) {
            var r = confirm("Etes-vous sûr que vous voulez supprimer la classe " + classe.classe+ " ?");
            if(r) {
                await this.$store.dispatch("supprimerClasse",classe.id);
            }


        },
      

        async getEtus() {
            await this.$store.dispatch('etudiants');
        },



    }
    

  
    
    

    
    }
</script>

