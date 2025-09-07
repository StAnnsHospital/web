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
              <!-- Content Swiper -->
              <div class="swiper testi-content-swiper">
                <div class="swiper-wrapper">
                  <div v-for="t in testimonials" :key="t.id" class="testimonial-block swiper-slide">
                    <div class="inner-box">
                      <div class="text">{{ t.text }}</div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>

              <!-- Thumbs / Avatars -->
              <div class="client-thumb-outer">
                <div class="swiper testi-thumbs-swiper">
                  <div class="swiper-wrapper">
                    <div v-for="t in testimonials" :key="t.id" class="thumb-item swiper-slide">
                      <figure class="thumb-box">
                        <!-- Always use icon (ignore image) -->
                        <span :class="['avatar-icon', t.author.icon]"></span>
                      </figure>
                      <div class="author-info">
                        <span class="icon fa fa-quote-left"></span>
                        <div class="author-name">{{ t.author.name }}</div>
                        <div class="designation">{{ t.author.designation }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper } from 'swiper'
import { Navigation, Autoplay, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import testimonialsData from '@/data/testimonials.json'

// Some builds of Swiper expose slideToLoop when loop module active; declare optional.
type LoopCapableSwiper = Swiper & {
  slideToLoop?: (index: number, speed?: number, runCallbacks?: boolean) => void
}

interface TestimonialAuthor { name: string; designation: string; image?: string; icon?: string }
interface Testimonial { id: number; text: string; author: TestimonialAuthor }
// Map a distinct flaticon icon to every testimonial (cycled if more testimonials than icons)
const iconPool = [
  'flaticon-tool','flaticon-bell','flaticon-music','flaticon-gift','flaticon-ring',
  'flaticon-like','flaticon-tree-of-love','flaticon-phone','flaticon-big-church','flaticon-open-book',
  'flaticon-clock','flaticon-speaker','flaticon-science','flaticon-communication','flaticon-phone-1',
  'flaticon-cash','flaticon-idea','flaticon-tablet','flaticon-map','flaticon-target',
  'flaticon-heart','flaticon-money-bag','flaticon-rich','flaticon-map-1','flaticon-internet'
]
const testimonials = ref((testimonialsData as Testimonial[]).map((t, idx) => ({
  ...t,
  author: {
    ...t.author,
    icon: iconPool[idx % iconPool.length] // force icon regardless of existing image
  }
})))

let contentSwiper: Swiper | null = null
let thumbsSwiper: Swiper | null = null

onMounted(() => {
  // Thumbs first
  thumbsSwiper = new Swiper('.testi-thumbs-swiper', {
    modules: [Thumbs],
    slidesPerView: 4,
    spaceBetween: 16,
    watchSlidesProgress: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    breakpoints: {
      0: { slidesPerView: 3, spaceBetween: 10 },
      640: { slidesPerView: 4, spaceBetween: 14 },
      1024: { slidesPerView: 5, spaceBetween: 18 }
    }
  })

  contentSwiper = new Swiper('.testi-content-swiper', {
    modules: [Navigation, Autoplay, Thumbs],
    loop: testimonials.value.length > 1,
    autoHeight: true,
    speed: 650,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: { swiper: thumbsSwiper }
  })

  // Keep active thumb in center manually (for some Swiper versions)
  contentSwiper.on('slideChange', () => {
    if (!thumbsSwiper) return
    const i = contentSwiper!.realIndex
    const loopThumbs = thumbsSwiper as LoopCapableSwiper
    if (typeof loopThumbs.slideToLoop === 'function') {
      loopThumbs.slideToLoop(i)
    } else {
      thumbsSwiper.slideTo(i)
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

<style scoped>
.testimonial-section {
  padding: 90px 0 70px;
  position: relative;
}

.testimonial-outer {
  max-width: 1040px;
  margin: 0 auto;
  position: relative;
  overflow: visible;
}

/* Content slider */
.testi-content-swiper { width: 100%; overflow: visible; padding-top: 12px; }
.testimonial-block { display: flex; justify-content: center; }
.testimonial-block .inner-box { max-width: 880px; }
.testimonial-block .text {
  font-size: 1.15rem;
  line-height: 1.7rem;
  font-weight: 400;
  color: #2c3a44;
  text-align: center;
  position: relative;
  padding: 0 50px 10px;
}

/* Quote marks via pseudo for subtle styling */
.testimonial-block .text:before, .testimonial-block .text:after {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  font-size: 28px;
  color: #0d5c8f33;
  top: -10px;
}
.testimonial-block .text:before { content: '\f10d'; left: 8px; }
.testimonial-block .text:after { content: '\f10e'; right: 8px; }

/* Thumbs / avatars row */
.client-thumb-outer { margin-top: 34px; }
.testi-thumbs-swiper { padding: 8px 10px 4px; }
.testi-thumbs-swiper .swiper-wrapper { align-items: stretch; }
.thumb-item { text-align: center; transition: .35s ease; cursor: pointer; width: 120px; }
.thumb-item .thumb-box { width: 70px; height: 70px; margin: 0 auto 10px; border-radius: 50%; overflow: hidden; position: relative; box-shadow: 0 4px 10px -2px rgba(0,0,0,.18); background: linear-gradient(135deg,#eef4f7,#ffffff); }
.thumb-item .thumb-box img { display:none; }
.thumb-item .thumb-box .avatar-icon { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 30px; color: #0d5885; }
.thumb-item .thumb-box .avatar-fallback { width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:22px;color:#0d5885; }
.thumb-item .author-info { font-size: 12px; line-height: 1.3; }
.thumb-item .author-name { font-weight: 600; font-size: 13.5px; color: #0d5885; margin-top: 4px; }
.thumb-item .designation { color: #6b7780; font-size: 11.5px; }
.thumb-item .icon { display: inline-block; color: #0d5885; margin-bottom: 4px; font-size: 14px; }

/* Active state (Swiper adds .swiper-slide-thumb-active) */
.thumb-item.swiper-slide-thumb-active { transform: translateY(-6px); }
.thumb-item.swiper-slide-thumb-active .thumb-box { box-shadow: 0 6px 16px -4px rgba(0,0,0,.35); }
.thumb-item.swiper-slide-thumb-active .author-name { color: #0a4063; }

/* Navigation arrows */
.testi-content-swiper .swiper-button-prev,
.testi-content-swiper .swiper-button-next { color: #0d5885; width: 44px; height: 44px; background: #fff; border-radius: 50%; box-shadow: 0 4px 14px -4px rgba(0,0,0,.25); top: calc(50% + 6px); transform: translateY(-50%); z-index: 20; }
.testi-content-swiper .swiper-button-prev:after,
.testi-content-swiper .swiper-button-next:after { font-size: 18px; font-weight: 600; }
.testi-content-swiper .swiper-button-prev { left: 8px; }
.testi-content-swiper .swiper-button-next { right: 8px; }

@media (max-width: 1200px) {
  .testi-content-swiper .swiper-button-prev { left: 6px; }
  .testi-content-swiper .swiper-button-next { right: 6px; }
}
@media (max-width: 991px) {
  .testi-content-swiper .swiper-button-prev { left: 4px; }
  .testi-content-swiper .swiper-button-next { right: 4px; }
  .testimonial-block .text { font-size: 1.05rem; padding: 0 35px 10px; }
  .thumb-item { width: 110px; }
}
@media (max-width: 767px) {
  .testimonial-section { padding: 70px 0 55px; }
  .testimonial-block .text { font-size: 0.98rem; line-height: 1.5rem; padding: 0 25px 6px; }
  .testi-content-swiper .swiper-button-prev,
  .testi-content-swiper .swiper-button-next { display: none; }
  .thumb-item { width: 95px; }
  .thumb-item .thumb-box { width: 60px; height: 60px; }
}
</style>
