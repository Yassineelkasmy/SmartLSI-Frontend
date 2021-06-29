<template>
    <div>
        <fa icon='user-shield' v-if="isAdmin" />
        <fa icon='user-tie' v-if="isProf" />
        <fa icon='user-graduate' v-if="isEtu" />

    </div>
</template>

<script>
export default {
    props:[
        'isAdmin',
        'isProf',
        'isEtu',
    ]
}
</script>

