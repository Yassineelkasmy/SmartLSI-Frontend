<template>
    <div>
        <fa icon='user-shield' v-if="user.admin" />
        <fa icon='user-tie' v-if="user.prof" />
        <fa icon='user-graduate' v-if="user.etu" />

    </div>
</template>

<script>
export default {
    

    data() {
        var user = JSON.parse(localStorage.currentUser);


        return {
            user
        }
    }
}
</script>

