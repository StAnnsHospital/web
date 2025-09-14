<template>
  <div class="page-wrapper">
    <!-- Preloader -->
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Our Services</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Services</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Services Section -->
    <section class="services-section">
      <div class="auto-container">
        <div class="row">
          <ServiceBlock v-for="service in services" :key="service.id" :service="service" />
        </div>
      </div>
    </section>
    <!--End Services Section -->
    
    <AppointmentSection />

    <TestimonialSlider />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ServiceBlock from '@/components/common/ServiceBlock.vue'
import TestimonialSlider from '@/components/common/TestimonialSlider.vue'
import AppointmentSection from '@/components/common/AppointmentSection.vue'
import servicesData from '@/data/services.json'

const services = ref(servicesData)

onMounted(() => {
  // Initialize interactive components
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$
    
    // Initialize counter animations
    if ($('.count-box').length) {
      $('.count-box').each(function(this: HTMLElement) {
        const $this = $(this)
        const countTo = $this.find('.count-text').attr('data-stop')
        const speed = parseInt($this.find('.count-text').attr('data-speed') || '3000', 10)
        
        $({ countNum: $this.find('.count-text').text() }).animate({
          countNum: countTo
        }, {
          duration: speed,
          easing: 'linear',
          step: function(this: any) {
            $this.find('.count-text').text(Math.floor(this.countNum))
          },
          complete: function(this: any) {
            $this.find('.count-text').text(this.countNum)
          }
        })
      })
    }

    // Initialize Swiper sliders
    if ($('.testi-three-swiper').length) {
      new (window as any).Swiper(".testi-three-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      })
    }

    if ($('.client-swiper').length) {
      new (window as any).Swiper(".client-swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        speed: 800,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 }
        }
      })
    }

    // Initialize GSAP ScrollTrigger animations
    if (typeof (window as any).gsap !== 'undefined' && typeof (window as any).ScrollTrigger !== 'undefined') {
      const gsap = (window as any).gsap
      const ScrollTrigger = (window as any).ScrollTrigger
      
      gsap.registerPlugin(ScrollTrigger)
      
      // Initialize text reveal animations
      const textRevealElements = document.querySelectorAll('.text-reveal-anim')
      if (textRevealElements.length) {
        textRevealElements.forEach((element) => {
          if (typeof (window as any).SplitType !== 'undefined') {
            const SplitType = (window as any).SplitType
            const split = new SplitType(element as HTMLElement, {
              types: 'chars'
            })
            
            gsap.from(split.chars, {
              scrollTrigger: {
                trigger: element,
                start: 'top 75%',
                end: 'top 25%',
                scrub: true,
                duration: 0.5
              },
              opacity: 0.1,
              stagger: 5,
              ease: 'back.out'
            })
          }
        })
      }
    }
  }
})
</script>
