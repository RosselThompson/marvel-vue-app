<template>
    <div data-testid="card" class="flex flex-col w-80 h-96 rounded-lg shadow-md bg-white">
        <div class="flex justify-between items-center w-ful p-4">
            <div class="w-60">
                <p class="text-sm text-gray-800 truncate">{{title}}</p>
            </div>
            <IconButton data-testid="card-button" @on-click-icon-button="onClickFavorite">
                <template v-slot:icon>
                    <span v-if="isFavorited" class="material-icons-outlined text-red-700" data-testid="card-favorite-icon">
                        favorite
                    </span>
                    <span v-else class="material-icons-outlined text-gray-700">
                        favorite_border
                    </span>
                </template>
            </IconButton>
        </div>
        <div data-testid="card-image-button" class="overflow-hidden w-full h-full cursor-pointer" @click="onClickCard">
            <div data-testid="card-image" class="w-full h-full bg-cover bg-center hover:scale-125 hover:opacity-90 transition" :style="`background-image: url(${image})`"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconButton from '../IconButton/IconButton.vue';

export default defineComponent({
    name: "ui-card",
    components: { IconButton },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        isFavorited: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        onClickFavorite(){
            this.$emit('on-click-favorite', this.id)
        },
        onClickCard(){
            this.$emit('on-click-card', this.id)
        }
    }
})
</script>