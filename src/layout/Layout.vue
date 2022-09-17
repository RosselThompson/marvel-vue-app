<template>
    <div class="layout">
        <div class="layout-menu">
            <ul class="layout-menu-list">
                <router-link :to="charactersLink"> Characters </router-link>
                <router-link :to="comicsLink"> Comics </router-link>
                <router-link :to="storiesLink"> Stories </router-link>
                <router-link :to="favoritesLink"> Favorites </router-link>

            </ul>
        </div>
        <div class="layout-content">
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