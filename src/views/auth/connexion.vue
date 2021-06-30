<template>
  <div >
    <div class="text-lg text-center mb-4">
      Pour tester l`application utiliser <span class="font-bold"> admin@admin.com</span> comme email et<span class="font-bold"> 123456789</span> comme mot de passe
    </div>
  <connexion-form/>
  </div>
</template>

<script>
import ConnexionForm from '../../components/ConnexionForm.vue'


export default {

 components :{
  ConnexionForm
  
 
 },


}
</script>
