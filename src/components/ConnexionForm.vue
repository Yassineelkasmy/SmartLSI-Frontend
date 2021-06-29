<template>
    <div>
    <Form @submit="onSubmit" :validation-schema="schema">
    <div class="mb-4 font-semibold text-gray-800">

    <label class="mb-2" >Adresse e-mail institutionnelle:</label>
    <Field  name='email' class="field" type='email'/>
    <ErrorMessage name='email' class="text-sm font-normal text-red-600"/>
    <label class="block mt-2">Mot de passe:</label>
    <Field  name='password' class="field" type='password' />
    <ErrorMessage name='password' class="text-sm font-normal text-red-600"/>
    <div v-if="!isLoading">
        <submit-button text="Connexion"/>
    </div>

    <div v-if="isLoading">
        <submit-button :isSubmitting="true"/>
    </div>
    

    
    
    </div>
  </Form>
    <div class="mt-3 text-center text-green-main hover:underline transition ">
      <router-link to="/auth/restaurer">
      Mot de passe oublié?
    </router-link>
    </div>
    </div>
</template>

<script>
import { Field, Form, ErrorMessage} from 'vee-validate';
import * as yup from 'yup'
import SubmitButton from './SubmitButton.vue'
export default {
  components: { SubmitButton, Field, Form ,ErrorMessage },
  

    

    computed :{
      schema() {
        return yup.object({
          password : yup.string()
      .required('Ce champ est requi')
      .min(8,'Le mot de passe doit comporter au moins 8 caractères'),

        email: yup.string()
            .required('Ce champ est requi')
       .email('Pas un email valide')
        });
      },

      isLoading() {
        return this.isSubmitting
      }
    },

    

    methods :{
      

      async onSubmit(values){
          this.isSubmitting = true;
          const loginInfo = JSON.stringify(values, null, 4)
          let user = await this.$store.dispatch('login', loginInfo);

          if(user.error){
          alert(user.error);
          }
          else {
            this.$router.push("/");
          }
          this.isSubmitting = false;
      },

      


    },
    data() {
      var isSubmitting = false;

    return {
      isSubmitting
    }

    },

    
      
  
    
  
}
</script>

