<template>
  <section class="testimonial-section">
    <div class="auto-container">
      <!-- Sec Title -->
      <div class="sec-title text-center">
        <span class="title">Testimonials / Reviews</span>
        <h2 class="text-reveal-anim">What Our Patients Say</h2>
        <span class="divider"></span>
      </div>
      
      <div class="testimonial-outer">
        <!-- Client Testimonial Carousel -->
        <div class="swiper testi-content-swiper">
          <div class="swiper-wrapper">
            <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-block swiper-slide">
              <div class="inner-box">
                <div class="text">{{ testimonial.text }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="client-thumb-outer">
          <div class="swiper testi-thumbs-swiper">
            <div class="swiper-wrapper">
              <div v-for="testimonial in testimonials" :key="testimonial.id" class="thumb-item swiper-slide">
                <figure class="thumb-box">
                  <img :src="testimonial.author.image" :alt="testimonial.author.name">
                </figure>
                <div class="author-info">
                  <span class="icon fa fa-quote-left"></span>
                  <div class="author-name">{{ testimonial.author.name }}</div>
                  <div class="designation">{{ testimonial.author.designation }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper } from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import testimonialsData from '@/data/testimonials.json'

const testimonials = ref(testimonialsData)
let contentSwiper: Swiper | null = null
let thumbsSwiper: Swiper | null = null

onMounted(() => {
  // Initialize testimonial swiper
  contentSwiper = new Swiper('.testi-content-swiper', {
    modules: [Navigation, Autoplay],
    loop: testimonials.value.length > 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  thumbsSwiper = new Swiper('.testi-thumbs-swiper', {
    modules: [],
    loop: false,
    spaceBetween: 10,
    slidesPerView: Math.min(3, testimonials.value.length),
    freeMode: true,
    watchSlidesProgress: true,
  })

  // Simple click navigation for thumbs
  thumbsSwiper.on('slideChange', () => {
    if (contentSwiper) {
      contentSwiper.slideTo(thumbsSwiper!.activeIndex)
    }
  })
  
  contentSwiper.on('slideChange', () => {
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(contentSwiper!.activeIndex)
    }
  })
})

onUnmounted(() => {
  if (contentSwiper) {
    contentSwiper.destroy(true, true)
  }
  if (thumbsSwiper) {
    thumbsSwiper.destroy(true, true)
  }
})
</script>
