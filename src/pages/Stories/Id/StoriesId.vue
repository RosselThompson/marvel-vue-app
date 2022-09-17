<template>
    <div>
        Story {{storyId}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'story-id',
    computed: {
        storyId() {
            return this.$route.params?.id
        }
    }
})
</script>

<style scoped>

</style>