<template>
    <div class="absolute flex space-y-2 inset-x-0 py-4 px-4 mx-auto top-0 w-2/4 rounded-lg bg-gray-200 shadow-2xl z-10">
   
   <div class="w-full mx-auto px-4">
          <fa icon="times" @click='close' class="inline-block float-right cursor-pointer"/>
    <Form class='' @submit="onSubmit" :validation-schema="schema">
    

    <div class="flex space-x-2 justify-around mb-4">
           <div>
              <span class="my-4 mr-2">
            Module : 
            </span>

            <div class="inline-block relative w-52 py-2 pl-3 pr-6 bg-white rounded-lg">
            {{ module.titre }}

            <div class="absolute right-1 top-3">
                <d-down-button @click="toggleShowModules"/>
            </div>

            <div v-if="canShowModules" class="transition absolute top-12 left-0 right-0 py-2  bg-white rounded-md shadow-xl z-20">
            <div v-for="module in modules" :key="module.id">
                <d-down-item @click="selectModule(module)" :text="module.titre"/>
            </div>
            </div>
            </div>
           </div>


           <div>
              <span class="my-4 mr-2">
            Jour : 
            </span>

            <div class="inline-block relative w-52 py-2 pl-3 pr-6 bg-white rounded-lg">
            {{ jour.jour }}

            <div class="absolute right-1 top-3">
                <d-down-button @click="toggleShowJours"/>
            </div>

            <div v-if="canShowJours" class="transition absolute top-12 left-0 right-0 py-2  bg-white rounded-md shadow-xl z-20">
            <div v-for="jour in jours" :key="jour.n">
                <d-down-item @click="selectJour(jour)" :text="jour.jour"/>
            </div>
            </div>
            </div>
           </div>


            
    </div>

    
    
    <div class="mb-4 font-semibold text-gray-800">
    
    <span class="block mb-2">Format: <span class="ml-2">XX : XX</span></span>
    <label class="" >Heure debut:</label>
    <Field  name='h_debut' class="field" type='text'/>
    <ErrorMessage name='h_debut' class="text-sm font-normal text-red-600"/>

    <label class="block" >Heure fin:</label>
    <Field  name='h_fin' class="field" type='text'/>
    <ErrorMessage name='h_fin' class="text-sm font-normal text-red-600"/>
    
  
    
    
    <div v-if="!isLoading">
        <submit-button :text="isEdit? 'Modifier' : 'Ajouter'"/>
    </div>

    <div v-if="isLoading">
        <submit-button :isSubmitting="true"/>
    </div>
    

    
    
    </div>
  </Form>
    </div>
    </div>
</template>



<script>
import { Field, Form, ErrorMessage} from 'vee-validate';
import * as yup from 'yup'
import SubmitButton from './SubmitButton.vue';
import DDownItem from './DDownItem.vue';
import DDownButton from './DDownButton.vue';

export default {
  components: { SubmitButton, Field, Form , ErrorMessage, DDownItem ,DDownButton, },
  

    
  
    
    computed :{
      schema() {
        return yup.object({

      
        h_debut:yup.string().min(5,'5 caractères au minimum')
                .max(5,'5 caractères au maximum')
            .required('l`heure de debut est requi'),
            h_fin:yup.string().min(5,'5 caractères au minimum')
                .max(5,'5 caractères au maximum')
            .required('l`heure de fin est requi'),
        
            
        });


      },
    

      canShowModules() {
        return this.showModules;

      },

      canShowJours() {
        return this.showJours;

      },
      
      module() {
        return this.selectedModule;
      },

      jour() {
          return this.selectedJour;
      },
     

      
        modules() {
            
            return this.$store.state.admin.modules;
        },
        jours() {
            return this.$store.state.jours;
        },

        isLoading() {
        return this.isSubmitting
      }
    },

        

     

    

      

    

    methods :{
      

      async onSubmit(values){
        this.isSubmitting = true;


          values.module_id  = this.module.id;
          values.jour = this.jour.n;
          const seance = JSON.stringify(values, null, 4);

          await this.$store.dispatch('ajouterSeance',seance);

          


        this.isSubmitting = false;
        this.close();

        
      },
    

    toggleShowModules() {
      this.showModules = !this.showModules;
    },



    selectModule(module) {
      this.selectedModule = module;
      this.toggleShowModules();
    },

    toggleShowJours() {
      this.showJours = !this.showJours;
    },



    selectJour(jour) {
      this.selectedJour = jour;
      this.toggleShowJours();
    },
    

  
    close() {

          if(!this.isEdit) {
            this.$emit("handleCloseAdmission");

          }
          else {
            this.$emit("handleCloseEdit");

          }
    },
    

   
      


    },

    
    data() {
      var showModules = false;
      var showJours = false;
      var isSubmitting = false;
       var selectedModule = {
        titre:"Selectionner",
        id:1,
      };

      var selectedJour = {
        jour:"Selectionner",
        n:0,
      };

      
      
    return {
      isSubmitting,
      selectedModule,
      selectedJour,
      showModules,
      showJours
     
    }

    },

    

    
      
  
    
  
}
</script>



