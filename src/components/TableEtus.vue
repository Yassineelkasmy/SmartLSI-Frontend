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
                                    nom
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    prénom
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    cne
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email Institutionnelle
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr v-for="etu in classe.etudiants" :key="etu.id" >
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
                                      {{etu.user.prenom}}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{etu.cne}}
                                    </p>
                                </td>

                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {{etu.user.email}}
                                    </p>
                                </td>

                                <td class="px-5 py-5 text-lg border-b border-gray-200 bg-white">
                                   <fa class="mr-5 text-green-main cursor-pointer" icon='edit' @click="toggleShowEdit(etu.user.nom,etu.user.prenom,etu.cne,etu.user.email,etu.user.id)"/>
                                   <fa class="ml-5 text-red-600 cursor-pointer" icon='times' @click="deleteUser(etu.user.id)"/>
                                </td>
                            </tr>
                            
                           
                        </tbody>
                    </table>
                    
                </div>
                <admission-or-edit :id="UserId" @handleCloseEdit='toggleShowEdit' :prenom="Prenom" :nom="Nom" :cne="Cne" :email="Email" v-if="canShowEdit" :isEdit="true"/>
            </div>
</template>

<script>
import AdmissionOrEdit from './AdmissionOrEditEtu.vue';

export default {
  components: { AdmissionOrEdit},
    props:['id'],
    data() {
        var email = '';
        var userId = '';
        var nom = '';
        var prenom = '';
        var cne = '';
        var showEdit = false;

        return {
            email,
            nom,
            prenom,
            cne,
            showEdit,
            userId,
        }
    },
    mounted:function () { 
        console.log(this.id)
     },
    computed:{
        classes(){
            return this.$store.state.admin.classes;
        },

        classe() {
            return this.classes.classes.find(clss=>clss.id==this.id);
        },
        Nom() {
            return this.nom;
        },
        Prenom() {
            return this.prenom;;
        },
        Email(){
            return this.email;
        }, 
        Cne() {
            return this.cne;
        },

        UserId() {
            return this.userId;
        },
        canShowEdit() {
            return this.showEdit;
        }
        
        
    },


    methods: {
        printClasse() {
            console.log(this.classe.etudiants);
        },
        toggleShowEdit( nom,prenom,cne,email,id){
            this.nom = nom;
            this.prenom = prenom;
            this.cne = cne;
            this.email = email;
            this.userId = id;
            this.showEdit = !this.showEdit;
        
        },
        reloadEtus() {
            this.$emit('reloadEtus');
        },
       async deleteUser(id) {
            var r = confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?");
            if (r) {
                var data = {
                    id:id
                }
                await this.$store.dispatch("deleteUser",data);
                await this.$store.dispatch("etudiants");
            }
        }

    },
}
</script>

