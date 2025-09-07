<template>
  <section class="banner-section-one">
    <div class="swiper banner-swiper">
      <div class="swiper-wrapper">
        <div v-for="slide in slides" :key="slide.id" class="slide-item swiper-slide">
          <div class="bg bg-image" :style="{ backgroundImage: `url(${slide.backgroundImage})` }"></div>
          <div class="auto-container">
            <div class="content-outer">
              <div class="content-box text-contrast-panel">
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

<style scoped>
.text-contrast-panel {
  position: relative;
  padding: 2.2rem 2.4rem 2.4rem;
  border-radius: 14px;
  /* Pearly white with subtle translucency */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.78) 0%,
    rgba(255, 255, 255, 0.62) 40%,
    rgba(250, 250, 250, 0.55) 100%
  );
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  box-shadow: 0 6px 22px -6px rgba(0,0,0,0.25), 0 2px 6px -1px rgba(0,0,0,0.08);
  max-width: 640px;
}

.text-contrast-panel .title {
  display: inline-block;
  margin-bottom: .75rem;
  font-weight: 600;
  color: #0d3c61;
  letter-spacing: .5px;
}

.text-contrast-panel h2 {
  color: #0b2740;
  text-shadow: 0 1px 2px rgba(255,255,255,0.6);
}

.text-contrast-panel .text {
  color: #1f2f3c;
  font-size: 1.02rem;
  line-height: 1.5rem;
  margin-top: .85rem;
}

@media (max-width: 991px) {
  .text-contrast-panel {
    padding: 1.6rem 1.6rem 1.8rem;
    max-width: 100%;
  }
  .text-contrast-panel h2 { font-size: 1.9rem; }
}

@media (max-width: 575px) {
  .text-contrast-panel { padding: 1.25rem 1.25rem 1.4rem; }
  .text-contrast-panel h2 { font-size: 1.6rem; line-height: 1.25; }
  .text-contrast-panel .text { font-size: .92rem; }
}
</style>
