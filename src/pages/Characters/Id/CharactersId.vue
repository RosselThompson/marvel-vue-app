<template>
    <div>
        Character {{characterId}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'characters-id',
    computed: {
        characterId() {
            return this.$route.params?.id
        }
    }
})
</script>

<style scoped>

</style>