<template>
    <div class="absolute flex space-y-2 inset-x-0 py-4 px-4 mx-auto top-0 w-2/4 rounded-lg bg-gray-200 shadow-2xl z-10">
   
   <div class="w-full mx-auto px-4">
          <fa icon="times" @click='close' class="inline-block float-right cursor-pointer"/>
    <Form class='' @submit="onSubmit" :validation-schema="schema">
    

    
    
    <div class="mb-4 font-semibold text-gray-800">
    
    
    <label class="" >Classe:</label>
    <Field  name='classe' :value='this.isEdit? classe.classe : ""' class="field" type='text'/>
    <ErrorMessage name='classe' class="text-sm font-normal text-red-600"/>


    
  
    
    
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
  components: { SubmitButton, Field, Form , ErrorMessage , },
  

    
  
    
    computed :{
      schema() {
        return yup.object({

       classe:yup.string()
            .required('le nom du classe  est requi')
            
        });


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
        if(this.isEdit) {
            values.classe_id  = this.classe.id;
            const classe = JSON.stringify(values, null, 4);
            await this.$store.dispatch('modifierClasse',classe);
         }else{
          const classe = JSON.stringify(values, null, 4);
          await this.$store.dispatch('ajouterClasse',classe);


        
        

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
        'classe',
      
    ],

    
      
  
    
  
}
</script>



