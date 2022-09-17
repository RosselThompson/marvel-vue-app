<template>
    <nav class="bg-slate-800" data-testid="navbar">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <p class="text-white text-lg font-semibold">Marvel App</p>
                    </div>
                    <div class="hidden lg:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <router-link v-for="menu in menuOptions" :key="menu.id"
                                :class="menu.isSelected? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer' "
                                :to="menu.to"
                                :data-testid="`menu-option-${menu.id}`"
                                >
                                {{menu.text}}
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="-mr-2 flex lg:hidden">
                    <button type="button"
                        class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        v-on:click="isMenuOpen = !isMenuOpen">
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div v-if="isMenuOpen" id="mobile-menu" class="lg:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <router-link v-for="menu in menuOptions" :key="menu.id"
                    :class="menu.isSelected ? 'bg-gray-900 block text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium cursor-pointer' "
                    :to="menu.to">
                    {{menu.text}}
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface IMenuOption {
    id:number,
    text: string,
    to: string,
    isSelected: boolean,
}

export default defineComponent({
    name: 'ui-navbar',
    props: {
        menuOptions: {
            type: Array as PropType<IMenuOption[]>,
            required: true
        }
    },
    data() {
        return {
            isMenuOpen: false
        }
    }
})
</script>