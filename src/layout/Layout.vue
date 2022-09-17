<template>
    <div class="h-screen flex flex-col">
        <navbar :menuOptions="menuOptions" />
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { menuOptionsData } from '@/data/MenuOptions';
import Navbar from '@/components/Navbar/Navbar.vue';

export default defineComponent({
    name: "m-layout",
    components: { Navbar },
    computed: {
        menuOptions() {
            return menuOptionsData.map(menu => ({ ...menu, isSelected: this.$route.name === menu.routeName }))
        }
    }
})
</script>

<style>
.z-overlap {
    z-index: -9999;
}
</style>