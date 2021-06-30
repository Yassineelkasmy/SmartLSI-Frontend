<template>
  <div class="h-full min-h-screen flex">
  <div class="w-72 py-5  bg-white  shadow ">
    <nav-logo/>
    <side-nav/>

  </div>
  <div class="flex-1 bg-gray-200">
      <div  class="flex-wrap flex relative h-20 bg-white shadow border-b">
        <input type="text" placeholder="Chercher étudiants , professeurs , modules ..." class="mx-5 my-4 w-2/5 bg-gray-100 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-green-main focus:ring-1 focus:ring-green-main">
        <fa icon="search" class="absolute text-lg text-gray-400 left-8 top-8"/>
         
        <div class="absolute right-16 top-6 text-2xl text-gray-500">
        <avatar/>
        </div>
        <div class="absolute right-5 top-7">
        <d-down-button @click="toggleDropDown"/>
      </div>
        <span class="right-28 top-6 absolute capitalize text-lg text-gray-400">
            {{ 
               username
             }}
        </span>

    <div v-if="show" class="transition absolute right-2 top-20 py-2 w-48 bg-white rounded-md shadow-xl z-20">
    <d-down-item  text="Votre Profile"/>
    <d-down-item  text="aider"/>
    <d-down-item  text="paramètres"/>
    <d-down-item @click="logout" text="déconnexion"/>
  </div>
         
      <div class="text-gray-400 flex">
       
      </div>
      
      </div>
      <div class="py-6 px-5 relative">
    <router-view/>
    </div>
  </div>
  
  </div>
</template>

<script>
import Avatar from '../components/Avatar.vue'
import DDownButton from '../components/DDownButton.vue'
import DDownItem from '../components/DDownItem.vue'
import NavLogo from '../components/NavLogo.vue'
import SideNav from '../components/SideNav.vue'
export default {


  components: { 
       NavLogo,
    DDownItem,
    SideNav,
    DDownButton,
    Avatar
      },

      methods: {
          toggleDropDown() {
              this.dropDownOpen = !this.dropDownOpen
            //   alert(this.dropDownOpen)
              
          },
          logout(){
          this.$store.dispatch('logout')
          this.$router.push({ name: 'connexion' })

      }
      },
data() {
    var user = window.localStorage.currentUser;
    var username=''
    if(user){
      user = JSON.parse(user)
     username = user.nom + " " + user.prenom
    
     }
    var dropDownOpen = false;

    return {
        user,
        username,
        dropDownOpen
    }
} ,

computed: {
    show() {
        return this.dropDownOpen;
    }
}


      
      }
</script>

