<template>
    <div class="absolute flex space-y-2 inset-x-0 py-4 px-4 mx-auto top-0 w-2/4 rounded-lg bg-gray-200 shadow-2xl z-10">
   
   <div class="w-full mx-auto px-4">
          <fa icon="times" @click='close' class="inline-block float-right cursor-pointer"/>
    <Form class='' @submit="onSubmit" :validation-schema="schema">
    

    <div v-if="!isEdit">
            <span class="mt-2 mr-2">
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
    
    <div class="mb-4 font-semibold text-gray-800">
    
    
    <label class="" >Nom:</label>
    <Field  name='nom' :value='nom' class="field" type='text'/>
    <ErrorMessage name='nom' class="text-sm font-normal text-red-600"/>


    <label class="block" >Prénom:</label>
    <Field  name='prenom' :value='prenom'  class="field" type='text'/>
    <ErrorMessage name='prenom' class="text-sm font-normal text-red-600"/>


    <label class="block " >CNE:</label>
    <Field  name='cne' :value='cne' class="field" type='text'/>
    <ErrorMessage name='cne' class="text-sm font-normal text-red-600"/>
    
    
    
    <label class="block " >Adresse e-mail institutionnelle:</label>
    <Field  name='email' :value='email' class="field" type='email'/>
    <ErrorMessage name='email' class="text-sm font-normal text-red-600"/>
    
    
    
    <div v-if="!isEdit">
        
    <label class="block mt-2">Mot de passe:</label>
    <Field  name='password' class="field" type='password' />
    <ErrorMessage name='password' class="text-sm font-normal text-red-600"/>

    </div>    
    
    
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
import DDownButton from './DDownButton.vue';
import DDownItem from './DDownItem.vue';
export default {
  components: { SubmitButton, Field, Form , ErrorMessage , DDownButton, DDownItem },
  

    

    computed :{
      schema() {
        return yup.object({
          password :!this.isEdit? yup.string()
      .required('Ce champ est requi')
      .min(8,'Le mot de passe doit comporter au moins 8 caractères'):'',

        email: yup.string()
            .required('Ce champ est requi')
       .email('Pas un email valide'),
       prenom:yup.string().required('le prénom est requi').min(3,'Le prénom doit comporter au moins 3 caractères'),
       nom:yup.string().required('le nom est requi').min(3,'Le nom doit comporter au moins 3 caractères'),
       cne:yup.string()
            .required('Ce champ est requi')
            .min(10,' Le CNE doit comporter au moins 10 caractères')
            .max(10, 'Le CNE doit comporter au plus 10 caractères')
        });


      },

      classes() {
            
            return this.$store.state.admin.classes;
        },

      canShowClasses() {
        return this.showClasses;

      },

      classe() {
        return this.selectedClasse;
      },

      isLoading() {
        return this.isSubmitting
      },
     
    },

    

    methods :{
      

      async onSubmit(values){
          this.isSubmitting = true;
          values.classe_id  = this.classe.id;
          values.id= this.id;
          var data = JSON.stringify(values, null, 4)
          console.log(data);

          if(!this.isEdit) {
            

            await this.$store.dispatch('ajouterEtu', data);
          }else{
            await this.$store.dispatch('modifierEtu', data);
            
          }
        

        

        this.isSubmitting = false;
        this.close();
        this.$emit('reloadEtus');
      },
  
    close() {

          if(!this.isEdit) {
            this.$emit("handleCloseAdmission");

          }
          else {
            this.$emit("handleCloseEdit");

          }
    },
    toggleShowClasses() {
      this.showClasses = !this.showClasses;
    },

    selectClasse(classe) {
      this.selectedClasse = classe;
      this.toggleShowClasses();
    }
    
      


    },

    
    data() {
      var isSubmitting = false;
      var showClasses = false;
      var etuId;
      var selectedClasse = {
        classe:"Selectionner",
        id:1,
      };

    return {
      isSubmitting,
      showClasses,
      selectedClasse,
      etuId,
    }

    },

    props:[
        'isEdit',
        'nom',
        'prenom',
        'cne',
        'email',
        'id',
        
    ],

    
      
  
    
  
}
</script>



