<template>
    <div  class="pt-5 flex justify-center border-gray-200  ">
    <nav>
      <ul class="space-y-6 capitalize">
        <nav-link name="dashboard" route="dashboard" icon='border-all'/>
        <nav-link name="classes" route="classes" icon='address-book'/>
        <nav-link name="enseignants" route="enseignants" icon='user-tie'/>
        <nav-link name="étudiants" route="etudiants" icon='user-graduate'/>
        <nav-link name="modules" route="modules" icon='book'/>
        <nav-link name="seances"  icon='calendar-week'/>
        <nav-link name="email" icon='envelope'/>
        <nav-link name="chat" icon='comment'/>

     </ul>
    </nav>
    </div>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  components: { NavLink },
  
    
}
</script>

