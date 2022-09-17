<template>
    <div class="h-screen flex flex-col">
        <navbar :menuOptions="menuOptions" />
        <div class="z-overlap absolute top-16 p-4 w-full h-full lg:p-0 lg:justify-around lg:flex">
            <div class="d-none lg:flex"></div>
            <div class="lg:flex lg:justify-center lg:w-3/4 xl:w-1/2">
                <slot></slot>
            </div>
            <div class="d-none lg:flex"></div>
        </div>
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