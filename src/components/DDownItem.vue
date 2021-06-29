<template>
    <div class="block cursor-pointer px-4 py-2 text-sm capitalize text-gray-700 hover:bg-green-main hover:text-white">
        
      {{ text }}
    
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
    props:['text']
}
</script>

