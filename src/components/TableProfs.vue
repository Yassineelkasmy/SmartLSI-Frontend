<template>
    <div class="capitalize -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    nom
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    prénom
                                </th>

                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    cnp
                                </th>
                                
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email Institutionnelle
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr v-for="en in ens" :key="en.id">
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
                                    <p class="text-gray-900 whitespace-no-wrap">{{ en.user.nom }}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{en.user.prenom}}
                                    </p>
                                </td>

                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{en.cnp}}
                                    </p>
                                </td>

                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{en.user.email}}
                                    </p>
                                </td>

                                <td class="px-5 py-5 text-lg border-b border-gray-200 bg-white">
                                    <fa class="mr-5 text-green-main cursor-pointer" icon='edit' @click="toggleShowEdit(en.user.nom,en.user.prenom,en.cnp,en.user.email,en.user.id)"/>
                                   <fa class="ml-5 text-red-600 cursor-pointer" icon='times' @click="deleteUser(en.user.id)"/>
                                </td>
                            </tr>
                            
                           
                        </tbody>
                    </table>
                    
                </div>
                <admission-or-edit @handleCloseEdit='showEdit=false' :id="id" :prenom="Prenom" :nom="Nom" :cnp="Cnp" :email="Email" v-if="canShowEdit" :isEdit="true"/>
            </div>
</template>

<script>
import AdmissionOrEdit from './AdmissionOrEditProf.vue';

export default {
  components: { AdmissionOrEdit},
    data() {
        var email = '';
        var nom = '';
        var prenom = '';
        var cnp = '';
        var userId = '';
        var showEdit = false;

        return {
            email,
            nom,
            prenom,
            cnp,
            showEdit,
            userId,
        }
    },
    
    computed:{
        
        

       
        Nom() {
            return this.nom;
        },
        Prenom() {
            return this.prenom;;
        },
        Email(){
            return this.email;
        }, 
        Cnp() {
            return this.cnp;
        },
        canShowEdit() {
            return this.showEdit;
        },
        id() {
            return this.userId;
        }
        
        
    },


    methods: {
    
        toggleShowEdit( nom,prenom,cnp,email,id){
            this.nom = nom;
            this.prenom = prenom;
            this.cnp = cnp;
            this.userId=id;
            this.email = email;
            this.showEdit = true;
        
        },
        async deleteUser(id) {
            var r = confirm("Êtes-vous sûr de vouloir supprimer cet enseignant ?");
            if (r) {
                var data = {
                    id:id
                }
                await this.$store.dispatch("deleteUser",data);
                await this.$store.dispatch("enseignants");
            }
        }

    },
    props:['ens']
}
</script>

