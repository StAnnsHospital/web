<template>
  <section class="banner-section-one">
    <div class="swiper banner-swiper">
      <div class="swiper-wrapper">
        <div v-for="slide in slides" :key="slide.id" class="slide-item swiper-slide">
          <div class="bg bg-image" :style="{ backgroundImage: `url(${slide.backgroundImage})` }"></div>
          <div class="auto-container">
            <div class="content-outer">
              <div class="content-box">
                <span class="title animate-2">{{ slide.title }}</span>
                <h2 class="animate-3" v-html="slide.heading"></h2>
                <div class="text animate-4">{{ slide.description }}</div>
                <div class="btn-box animate-5">
                  <router-link 
                    v-for="button in slide.buttons" 
                    :key="button.text"
                    :to="button.path" 
                    :class="`theme-btn ${button.style}`"
                  >
                    <span class="btn-title">{{ button.text }}</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="default-btn">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper } from 'swiper'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import slidesData from '@/data/hero-slides.json'

const slides = ref(slidesData)
let bannerSwiper: Swiper | null = null

onMounted(() => {
  // Initialize Swiper
  bannerSwiper = new Swiper('.banner-swiper', {
    modules: [Navigation, Autoplay, EffectFade],
    loop: slides.value.length > 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  })
})

onUnmounted(() => {
  if (bannerSwiper) {
    bannerSwiper.destroy(true, true)
  }
})
</script>
