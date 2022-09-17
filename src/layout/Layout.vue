<template>
    <div class="h-screen flex flex-col">
       <navbar :menuOptions="menuOptions" />
        <div class="flex m-8">
            <slot></slot>
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
    computed:{
        menuOptions(){
            return menuOptionsData.map(menu => ({...menu, isSelected: this.$route.name === menu.routeName}))
        }
    }
})
</script>

<style>
.layout {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
}

.layout-menu {
    display: flex;
    width: 200px;
    background-color: #eee;
    border-right: 1px solid #ddd;
}

.layout-menu-list {
    display: flex;
    flex-direction: column;
}

.layout-content {
    display: flex;
    flex-grow: 1;
}
</style>