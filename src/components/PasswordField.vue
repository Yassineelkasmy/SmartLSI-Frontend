<template>
  <div class="mb-4 font-semibold text-gray-800">
    <label class="mb-2" :for="id">{{ label }}</label>
    <input v-model="value"  class="py-2 px-3 my-2 w-full rounded-lg border shadow border-gray-300 focus:outline-none focus:border-green-main focus:ring-1 focus:ring-green-main" type='password' :id="id">
    <span class="text-sm font-normal text-red-600">{{ errorMessage }}</span>
  </div>
</template>

<script>
import { useField } from 'vee-validate';
import * as yup from 'yup';
export default {
  props:['label','id'],
 
  
  setup() {

     
     const { errorMessage, value }   = useField(value, yup.string()
      .required('Ce champ est requi')
      .min(8,'Le mot de passe doit comporter au moins 8 caractères')
      
      );  
      
      
     

    return {
     
      errorMessage,
      value
    };
  }
}
</script>
