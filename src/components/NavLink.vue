<template>
  <li>
    <router-link :to="{name:route}" class="hover:text-green-main transition" :class="{'text-green-main':routeName==route,'text-gray-500':routeName!=route}">
        <span class="text-2xl mr-4">
          <fa :icon="icon" />
        </span>
        <span class="text-lg">
          {{ name }}
        </span>
    </router-link>

  </li>
</template>

<script>


export default {
  props: ['name', 'icon','route'],
  
  computed:{
    routeName(){
      return this.$route.name;
    }
  }
  


}
</script>
