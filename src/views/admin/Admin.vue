<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
export default {
    created:async function (){
        await this.$store.dispatch('infos');
        await this.$store.dispatch('enseignants');
        // console.log(this.$store.state.admin.enseignants[0])
    }
}
</script>

