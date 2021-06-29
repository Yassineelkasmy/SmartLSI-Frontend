<template>
    <div class="absolute rounded-lg w-2/4 top-0 p-5 inset-x-0 bg-white shadow-2xl z-10 mx-auto">
        <div class="text-lg font-semibold text-gray-900">
            Etes-vous sûr que vous voulez supprimer {{ info }}
        </div>
    <div class="mt-5 flex justify-between px-10">
            <fa icon='times' class=" -0 text-red-500" @click="onCancel"/>
            <fa icon='times' class=" -0 text-red-500"/>
    
    

    
    
    </div>
    </div>

    
    
</template>

<script>
export default {
  components: {},
  

    

    computed :{
      

      
    },

    

    methods :{
      

       onConfirm(){
          

        

          
          this.$emit('handleConfirmed');
      },

       onCancel(){
        
        this.$emit('handleCancelled');
      },

      


    },
    data() {
     

    return {
     
    }

    },

    props:['info']
    
      
  
    
  
}
</script>

