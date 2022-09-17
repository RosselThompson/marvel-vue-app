<template>
  <Card :id="cardId" :title="cardTitle" :image="cardImage" @on-click-favorite="onClickFavorite" @on-click-card="onClickCard" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card/Card.vue';

export default defineComponent({
  name: "page-character",
  components: { Card },
  data() {
    return {
      cardId: 1,
      cardTitle: 'Example',
      cardImage: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
    }
  },
  methods:{
    onClickFavorite(id: number){
      console.log('favorite', id);
    },
    onClickCard(id: number){
      console.log('card', id);
    }
  }
})
</script>

<style lang="scss" scoped>

</style>