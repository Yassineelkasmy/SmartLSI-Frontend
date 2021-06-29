<template>
    <div @click="printClasse" class="capitalize -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    module
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    enseignant
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr v-for="module in classe.modules" :key="module.id" @click="toggleShowEdit(etu.user.nom,etu.user.prenom,etu.cne,etu.user.email)">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="mx-auto">
                                            <img class="w-10 h-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
                                        
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{{ etu.user.nom }}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{module.titre}}
                                    </p>
                                </td>

                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{module.enseignant}}
                                    </p>
                                </td>

                                
                            </tr>
                            
                           
                        </tbody>
                    </table>
                    
                </div>
            </div>
</template>

<script>


export default {
  components: { },
    props:['id'],
    
    mounted:function () { 
        console.log(this.id)
     },
    computed:{
        classes(){
            return this.$store.state.admin.classes;
        },

      
        
        
    },


    methods: {
       
        reloadEtus() {
            this.$emit('reloadEtus');
        }

    },
}
</script>


