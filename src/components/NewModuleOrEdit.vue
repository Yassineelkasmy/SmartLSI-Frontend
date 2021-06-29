<template>
    <div class="absolute flex space-y-2 inset-x-0 py-4 px-4 mx-auto top-0 w-2/4 rounded-lg bg-gray-200 shadow-2xl z-10">
   
   <div class="w-full mx-auto px-4">
          <fa icon="times" @click='close' class="inline-block float-right cursor-pointer"/>
    <Form class='' @submit="onSubmit" :validation-schema="schema">
    

    <div class="flex space-x-2 justify-around mb-4" v-if="!isEdit">
           <div>
              <span class="my-4 mr-2">
            Classe : 
            </span>

            <div class="inline-block relative w-52 py-2 pl-3 pr-6 bg-white rounded-lg">
            {{ classe.classe }}

            <div class="absolute right-1 top-3">
                <d-down-button @click="toggleShowClasses"/>
            </div>

            <div v-if="canShowClasses" class="transition absolute top-12 left-0 right-0 py-2  bg-white rounded-md shadow-xl z-20">
            <div v-for="classe in classes.classes" :key="classe.id">
                <d-down-item @click="selectClasse(classe)" :text="classe.classe"/>
            </div>
            </div>
            </div>
           </div>

            <div class="block">
              <span class="my-4 mr-2">
            Enseignant : 
            </span>

            <div class="inline-block relative capitalize w-52 py-2 pl-3 pr-6 bg-white rounded-lg">
            {{ En.user.nom + " " + En.user.prenom }}

            <div class="absolute right-1 top-3">
                <d-down-button @click="toggleShowEns"/>
            </div>

            <div v-if="canShowEns" class="transition absolute top-12 left-0 right-0 py-2  bg-white rounded-md shadow-xl z-20">
            <div v-for="en in ens" :key="en.id">
                <d-down-item @click="selectEn(en)" :text="en.user.nom + ' ' + en.user.prenom"/>
            </div>
            </div>
            </div>
            </div>
    </div>

    
    
    <div class="mb-4 font-semibold text-gray-800">
    
    
    <label class="" >Titre:</label>
    <Field  name='titre' :value='this.isEdit? module.titre : ""' class="field" type='text'/>
    <ErrorMessage name='titre' class="text-sm font-normal text-red-600"/>


    
  
    
    
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

       titre:yup.string()
            .required('le nom du titre  est requi')
            
        });


      },
    

      canShowClasses() {
        return this.showClasses;

      },
      canShowEns() {
        return this.showEns;

      },
      classe() {
        return this.selectedClasse;
      },
      En() {
        return this.selectedEn;

      },
      ens(){
           return this.$store.state.admin.enseignants;

      },

      classes() {
            
            return this.$store.state.admin.classes;
        },

        

     

    

      isLoading() {
        return this.isSubmitting
      }
    },

    

    methods :{
      

      async onSubmit(values){
        this.isSubmitting = true;

        console.log(module)
        if(this.isEdit) {

          values.module_id  = this.module.id;
          const module = JSON.stringify(values, null, 4);
          await this.$store.dispatch('modifierModule',module);

          
         }
         else{
          values.classe_id  = this.classe.id;
          values.enseignant_id = this.En.id;
          const module = JSON.stringify(values, null, 4);
          await this.$store.dispatch('ajouterModule',module);

         }

        this.isSubmitting = false;
        this.close();

        
      },
    

    toggleShowClasses() {
      this.showClasses = !this.showClasses;
    },

    toggleShowEns() {
      this.showEns = !this.showEns;
    },

    selectClasse(classe) {
      this.selectedClasse = classe;
      this.toggleShowClasses();
    },

    selectEn(en) {
      this.selectedEn = en;
      this.toggleShowEns();
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
      var showClasses = false;
      var showEns = false;
      var isSubmitting = false;
       var selectedClasse = {
        classe:"Selectionner",
        id:1,
      };

      var selectedEn = {
        user:{
          nom:"Selectionner",
          prenom:"",
        },
        
      };
      
    return {
      isSubmitting,
      selectedClasse,
      showClasses,
      showEns,
      selectedEn,
     
    }

    },

    props:[
        'isEdit',
        'module',
      
    ],

    
      
  
    
  
}
</script>



