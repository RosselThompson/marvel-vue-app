<template>
    <button class="p-2 rounded-full hover:bg-gray-100" data-testid="icon-button" @click="onClick" >
        <div class="flex align-center justify-center">
            <slot name="icon"></slot>
        </div>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ui-icon-button',
    methods:{
        onClick(){
            this.$emit('on-click-icon-button');
        }
    }
})
</script>

<style scoped>

</style>