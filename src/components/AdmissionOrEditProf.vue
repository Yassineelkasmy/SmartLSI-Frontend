<template>
    <div class="absolute flex space-y-2 inset-x-0 py-4 px-4 mx-auto top-0 w-2/4 rounded-lg bg-gray-200 shadow-2xl z-10">
   
   <div class="w-full mx-auto px-4">
          <fa icon="times" @click='close' class="inline-block float-right cursor-pointer"/>
    <Form class='' @submit="onSubmit" :validation-schema="schema">
    

    
    
    <div class="mb-4 font-semibold text-gray-800">
    
    
    <label class="" >Nom:</label>
    <Field  name='nom' :value='nom' class="field" type='text'/>
    <ErrorMessage name='nom' class="text-sm font-normal text-red-600"/>


    <label class="block" >Prénom:</label>
    <Field  name='prenom' :value='prenom'  class="field" type='text'/>
    <ErrorMessage name='prenom' class="text-sm font-normal text-red-600"/>


    <label class="block " >CNP:</label>
    <Field  name='cnp' :value='cnp' class="field" type='text'/>
    <ErrorMessage name='cnp' class="text-sm font-normal text-red-600"/>
    
    
    
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
export default {
  components: { SubmitButton, Field, Form , ErrorMessage ,  },
  

    

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
       cnp:yup.string()
            .required('Ce champ est requi')
            .min(10,' Le CNP doit comporter au moins 10 caractères')
            .max(10, 'Le CNP doit comporter au plus 10 caractères')
        });


      },

      

      isLoading() {
        return this.isSubmitting
      }
    },

    

    methods :{
      

      async onSubmit(values){
        this.isSubmitting = true;
          
        values.id= this.id;
        
        const data = JSON.stringify(values, null, 4)
        if(!this.isEdit){
            await this.$store.dispatch('ajouterProf', data);
          
        }else {

            await this.$store.dispatch('modifierProf', data);

        }

        

        this.isSubmitting = false;
        this.close();
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
      var isSubmitting = false;
      
    return {
      isSubmitting,
     
    }

    },

    props:[
        'isEdit',
        'nom',
        'prenom',
        'cnp',
        'email',
        'id',
    ],

    
      
  
    
  
}
</script>



