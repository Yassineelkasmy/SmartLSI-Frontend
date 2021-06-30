<template>
    <div  class="pt-5 flex justify-center border-gray-200  ">
    <nav v-if="user.admin">
      <ul class="space-y-6 capitalize">
        <nav-link name="dashboard" route="dashboard" icon='border-all'/>
        <nav-link name="classes" route="classes" icon='address-book'/>
        <nav-link name="enseignants" route="enseignants" icon='user-tie'/>
        <nav-link name="étudiants" route="etudiants" icon='user-graduate'/>
        <nav-link name="modules" route="modules" icon='book'/>
        <nav-link name="seances"  icon='calendar-week' route="seances"/>

     </ul>
    </nav>

    <nav v-if="user.prof">
      <ul class="space-y-6 capitalize">
        <nav-link name="notes" route="notes" icon='pencil-alt'/>
        <nav-link name="Pfes" route="pfes" icon='newspaper'/>


     </ul>
    </nav>
    </div>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  components: { NavLink },
  

  data() {
    var user = JSON.parse(localStorage.currentUser);
  
  
  return {
    user
  }
  }
  
    
}
</script>

