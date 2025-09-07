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
    
    <!-- Appointment Section -->
    <section class="appointment-section alternate">
      <div class="image-layer" style="background-image: url(/images/background/2.jpg);"></div>
      <div class="auto-container">
        <div class="row">
          <!-- Content Column -->
          <div class="content-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <span class="title">Need a Doctor for Check-up?</span>
              <h2 class="text-reveal-anim">Just Make an Appointment <br>and You're Done!</h2>
              <div class="number">Get Your Quote or Call: <strong>(0080) 123-453-789</strong></div>
              <a href="#" class="theme-btn btn-style-three"><span class="btn-title">Get an Appointment</span></a>
            </div>
          </div>
          <div class="image-column col-lg-6 col-md-12 col-sm-12">
            <figure class="image"><img src="/images/resource/image-4.png" alt=""></figure>
          </div>
        </div>

        <div class="fun-fact-section">
          <div class="row">
            <!--Column-->
            <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div class="count-box">
                <div class="icon-box"><span class="icon flaticon-user-experience"></span></div>
                <h4 class="counter-title">Years of Experience</h4>
                <span class="count-text" data-speed="3000" data-stop="25">0</span>
              </div>
            </div>

            <!--Column-->
            <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
              <div class="count-box">
                <div class="icon-box"><span class="icon flaticon-team"></span></div>
                <h4 class="counter-title">Medical Specialties</h4>
                <span class="count-text" data-speed="3000" data-stop="470">0</span>
              </div>
            </div>

            <!--Column-->
            <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
              <div class="count-box">
                <div class="icon-box"><span class="icon flaticon-hospital"></span></div>
                <h4 class="counter-title">Medical Specialties</h4>
                <span class="count-text" data-speed="3000" data-stop="689">0</span>
              </div>
            </div>

            <!--Column-->
            <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
              <div class="count-box">
                <div class="icon-box"><span class="icon flaticon-add-friend"></span></div>
                <h4 class="counter-title">Happy Patients</h4>
                <span class="count-text" data-speed="3000" data-stop="9036">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Appointment Section -->

    <TestimonialSlider />
    <ClientSlider />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ServiceBlock from '@/components/common/ServiceBlock.vue'
import TestimonialSlider from '@/components/common/TestimonialSlider.vue'
import ClientSlider from '@/components/common/ClientSlider.vue'
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
