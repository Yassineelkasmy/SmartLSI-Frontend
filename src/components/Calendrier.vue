<template>
    <div class="w-full grid grid-cols-6 bg-white shadow-lg border-2 rounded-lg">
        <div v-for="jour in jours" :key="jour.n" class="col-span-1 text-center border-l border-r border-gray-900">
            <div class="text-lg font-semibold capitalize px-3 py-2 border-b-2 border-gray-900">
                {{ jour.jour }}
            </div>

            <div class="relative m-2 block text-white bg-green-500 py-3 px-2 rounded-md" v-for="seance in seances.filter(seance => seance.jour===jour.n)" :key="seance.id">
                    <span class="block"> {{ seance.module.titre }} </span>
                    <span class="block font-semibold"> {{ seance.h_debut + "-->" + seance.h_fin }} </span>
                    <fa icon='times' class="absolute top-2 left-2 text-red-500 cursor-pointer" @click="supprimer(seance)" /> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'seances',
        'isAdmin',
    ],

    data() {
        var jours = this.$store.state.jours;

        return {
            jours
        }
    },
    methods: {
        supprimer(seance) {
            this.$emit('handleDelete',seance)
        }
    }
}
</script>
