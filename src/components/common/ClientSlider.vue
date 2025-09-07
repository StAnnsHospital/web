<template>
  <section class="clients-section">
    <div class="auto-container">
      <div class="swiper client-swiper">
        <div class="swiper-wrapper">
          <ClientLogo v-for="client in clients" :key="client.id" :client="client" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ClientLogo from './ClientLogo.vue'
import clientsData from '@/data/clients.json'

const clients = ref(clientsData)
let clientSwiper: Swiper | null = null

onMounted(() => {
  clientSwiper = new Swiper('.client-swiper', {
    modules: [Autoplay],
    loop: clients.value.length > 5,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: Math.min(5, clients.value.length),
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: Math.min(2, clients.value.length),
        spaceBetween: 20
      },
      768: {
        slidesPerView: Math.min(3, clients.value.length),
        spaceBetween: 25
      },
      1024: {
        slidesPerView: Math.min(5, clients.value.length),
        spaceBetween: 30
      }
    }
  })
})

onUnmounted(() => {
  if (clientSwiper) {
    clientSwiper.destroy(true, true)
  }
})
</script>
