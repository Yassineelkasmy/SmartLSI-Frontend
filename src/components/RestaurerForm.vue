<template>
    <div>
    <Form @submit="onSubmit" :validation-schema="schema">
    <div class="mb-4 font-semibold text-gray-800">

    <label class="mb-2" >Veuillez entrer votre adresse e-mail institutionnelle pour rechercher votre compte.</label>
    <Field  name='email' class="py-2 px-3 my-2 w-full rounded-lg border shadow border-gray-300 focus:outline-none focus:border-green-main focus:ring-1 focus:ring-green-main" type='email'/>
    <ErrorMessage name='email' class="text-sm font-normal text-red-600"/>
    <submit-button text="Chercher"/>
    
    </div>
  </Form>
    
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
        email: yup.string()
            .required('Ce champ est requi')
       .email('Pas un email valide')
        });
      }
    },

    setup() {
        const onSubmit = values => {
            
            alert(JSON.stringify(values, null, 4));
        }

        return {
          
            onSubmit
        };
    }
  
}
</script>

