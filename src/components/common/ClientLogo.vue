<template>
  <div class="client-block swiper-slide">
    <div class="inner-box">
      <figure class="image">
        <a href="#">
          <img :src="client.logo" :alt="client.name">
        </a>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Client {
  id: number
  name: string
  logo: string
}

defineProps<{
  client: Client
}>()
</script>
