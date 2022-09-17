<template>
    <Layout v-if="isWrapped">
      <router-view></router-view>
    </Layout>
      <router-view v-else></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '@/layout/Layout.vue';
import {NOT_FOUND_NAME} from '@/router/Router';

export default defineComponent({
  name: "app",
  components: { Layout },
  computed: {
    isWrapped() {
      return this.$route.name !== NOT_FOUND_NAME
    }
  }
})
</script>
