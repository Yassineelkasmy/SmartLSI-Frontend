<template>

<div class="flex justify-center h-full min-h-screen bg-gray-100">
  <div class="w-1/4">

   <Logo/>

  <div class="mb-2 px-5 pt-5 pb-5 rounded-lg ">
   <router-view> </router-view>
  </div>

  </div>

</div>

</template>

<script>
import Logo from '../../components/Logo.vue';
export default {

    components :{
        Logo
    }

}
</script>