<template>
    <div class="absolute inset-x-0 mx-auto top-1/4 h-52 w-2/4 rounded-lg bg-gray-300">
            <div>
            <span class="mt-2 mr-2">
            saison : 
            </span>

            <div class="inline-block relative py-2 pl-3 pr-6 bg-white rounded-lg">
            {{ saison.saison }}

            <div class="absolute right-1 top-3">
                <d-down-button @click="toggleSaisons"/>
            </div>

            <div v-if="canShowSaisons" class="transition absolute top-12 left-0 right-0 py-2  bg-white rounded-md shadow-xl z-20">
            <div v-for="saison in infos.saisons" :key="saison.id">
                <d-down-item @click="selectSaison(saison)" :text="saison.saison"/>
            </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    computed:{
        infos() {
            return this.$store.state.admin.infos;
        },
    },

    pros:['saison']
}
</script>

