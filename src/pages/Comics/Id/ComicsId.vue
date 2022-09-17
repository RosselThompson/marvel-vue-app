<template>
    <div>
        Comic {{comicId}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'comics-id',
    computed: {
        comicId() {
            return this.$route.params?.id
        }
    }
})
</script>

<style scoped>

</style>