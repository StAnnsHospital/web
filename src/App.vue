<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import GlobalPreloader from '@/components/GlobalPreloader.vue'
</script>

<template>
  <GlobalPreloader />
  <RouterView />
</template>

<style>
/* Global styles will be handled by the existing CSS files */
</style>
