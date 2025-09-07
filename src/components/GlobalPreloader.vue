<template>
  <div class="preloader" v-if="isLoading"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

// Only show preloader on initial page load, not on navigation
onMounted(() => {
  // Simulate initial page load time
  setTimeout(() => {
    isLoading.value = false
  }, 1000) // 1 second initial load time
})
</script>
