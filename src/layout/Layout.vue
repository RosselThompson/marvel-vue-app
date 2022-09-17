<template>
    <div class="h-screen flex flex-col">
        <div class="flex text-white justify-between bg-slate-800 p-4 shadow-lg drop-shadow-lg">
            <p class="text-lg font-semibold">Marvel App</p>
            <div class="flex justify-end">
                <ul class="space-x-4 mr-4">
                    <router-link class="hover:text-slate-300 transition" :to="charactersLink"> Characters </router-link>
                    <router-link class="hover:text-slate-300 transition" :to="comicsLink"> Comics </router-link>
                    <router-link class="hover:text-slate-300 transition" :to="storiesLink"> Stories </router-link>
                    <router-link class="hover:text-slate-300 transition" :to="favoritesLink"> Favorites </router-link>
                    
                </ul>
            </div>
        </div>
        <div class="flex m-8">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CHARACTERS_URL, COMICS_URL, FAVORITES_URL, STORIES_URL } from '@/constants/Urls';

export default defineComponent({
    name: 'm-layout',
    data() {
        return {
            charactersLink: CHARACTERS_URL,
            comicsLink: COMICS_URL,
            favoritesLink: FAVORITES_URL,
            storiesLink: STORIES_URL
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