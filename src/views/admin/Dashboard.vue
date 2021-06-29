<template>
   <div >
        <div class="w-full capitalize grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 ">
        

        <div class="text-yellow-600 m-2 rounded-md shadow-md bg-white text-center w-full h-40">
            <fa class="mt-5 text-6xl " icon='user-tie'/>
            <span class="block mt-5 text-lg ">{{ infos.enseignants }} enseignants</span>
        </div>
        <div class="text-green-main m-2 rounded-md shadow-md bg-white text-center w-full h-40">
            <fa class="mt-5 text-6xl " icon='user-graduate'/>
            <span class="block mt-5 text-lg ">{{ infos.etudiants }} etudiants</span>
        </div>

        <div class="text-indigo-400 m-2 rounded-md shadow-md bg-white text-center w-full h-40">
            <fa class="mt-5 text-6xl " icon='book'/>
            <span class="block mt-5 text-lg ">{{ infos.modules }} modules</span>
        </div>

        <div class="text-red-500 m-2 rounded-md shadow-md bg-white text-center w-full h-40">
            <fa class="mt-5 text-6xl " icon='address-book'/>
            <span class="block mt-5 text-lg ">{{ infos.classes }} classes</span>
        </div>

        
        
    </div>
    <div>
        
    </div>
   </div>
</template>

<script>

export default { 
    computed:{
        infos() {
            return this.$store.state.admin.infos;
        }
    }
}
</script>

