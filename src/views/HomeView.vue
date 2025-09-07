<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <HeroSlider />
    
    <!-- Top Features -->
    <section class="top-features">
      <div class="auto-container">
        <div class="row">
          <FeatureBlock v-for="feature in features" :key="feature.id" :feature="feature" />
        </div>
      </div>
    </section>
    <!-- End Features Section -->

    <!-- About Section -->
    <section class="about-section">
      <div class="auto-container">
        <div class="row">
          <!-- Content Column -->
          <div class="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
            <div class="inner-column">
              <div class="sec-title">
                <span class="sub-title">ST. ANN’S HOSPITAL, FATHIMANAGAR</span>
                <h2 class="text-reveal-anim">72 Years of Care.<br>Future of Multispecialty <br> Excellence in Clinical Care.</h2>
                <span class="divider"></span>
                <p>Founded in 1954 with a modest 12-room building, St. Ann’s has grown—through faith, sacrifice, and service—into a 200-bed multispecialty hospital trusted by families across Warangal and beyond. Our mission remains simple and steadfast: provide dignified, affordable, and compassionate care to every person, especially the poor and underserved.</p>
                <p>Today we offer comprehensive services in General Medicine, General Surgery, Obstetrics & Gynaecology, Pediatrics, Orthopedics, Neurology, Nephrology, Endocrinology, Physiotherapy, Rehabilitation, Emergency Medicine, and Oncology. Modern operating theatres, intensive and neonatal care, digital imaging and laboratory services, and 24×7 emergency and ambulance support ensure timely, safe treatment.</p>
              </div>
              <div class="link-box">
                <figure class="signature"><img src="/images/resource/signature.png" alt=""></figure>
                <router-link to="/about" class="theme-btn btn-style-one"><span class="btn-title">More About</span></router-link>
              </div>
            </div>
          </div>

          <!-- Images Column -->
          <div class="images-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="video-link">
                <a href="https://www.youtube.com/watch?v=h0JczndhvKI" class="play-btn lightbox-image" data-fancybox="images">
                  <span class="flaticon-play-button-1"></span>
                </a>
              </div>
              <figure class="image-1"><img src="/images/resource/about-image-1.png" alt=""></figure>
              <figure class="image-2"><img src="/images/resource/about-image-2.png" alt=""></figure>
              <figure class="image-3">
                <span class="hex"></span>
                <img src="/images/resource/about-image-3.png" alt="">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->

    <!-- Services Section -->
    <section class="services-section">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">OUR SERVICES</span>
          <h2 class="text-reveal-anim">We Care Our Patients.</h2>
          <span class="divider"></span>
        </div>

        <div class="row">
          <ServiceBlock v-for="service in services" :key="service.id" :service="service" />
        </div>
      </div>
    </section>
    <!--End Services Section -->

    <!-- Team Section -->
    <section class="team-section">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">Our Doctor</span>
          <h2 class="text-reveal-anim">Our Dedicated Doctors Team</h2>
          <span class="divider"></span>
        </div>

        <div class="row">
          <DoctorCard v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
        </div>

        <div class="sec-bottom-text">Don't hesitate, contact us for better help and services <a href="#">Explore all Dr. Team</a></div>
      </div>
    </section>
    <!-- End Team Section -->

    <!-- Appointment Section -->
    <section class="appointment-section">
      <div class="image-layer" style="background-image: url(/images/background/2.jpg);"></div>
      <div class="auto-container">
        <div class="row">
          <!-- Content Column -->
          <div class="content-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <span class="title">Need a Doctor for Check-up?</span>
              <h2 class="text-reveal-anim">Just Make an Appointment <br>and You're Done!</h2>
              <div class="number">Get Your Quote or Call: <strong>{{ siteConfig.contact.emergency }}</strong></div>
              <router-link to="/appointment" class="theme-btn btn-style-three">
                <span class="btn-title">Get an Appointment</span>
              </router-link>
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

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">Our Pricing</span>
          <h2 class="text-reveal-anim">Pricing Plan</h2>
          <span class="divider"></span>
        </div>

        <div class="outer-box">
          <div class="row">
            <PricingCard v-for="plan in pricingPlans" :key="plan.id" :plan="plan" />
          </div>
        </div>

        <div class="sec-bottom-text">Don't hesitate, contact us for better help and services <a href="#">Explore all Dr. Team</a></div>
      </div>
    </section>
    <!--End Pricing Section -->

    <!-- News Section -->
    <section class="news-section">
      <div class="auto-container">
        <!-- Sec Title -->
        <div class="sec-title text-center">
          <span class="title">OUR BLOG</span>
          <h2 class="text-reveal-anim">Recent Articles and News</h2>
          <span class="divider"></span>
        </div>

        <div class="row">
          <NewsCard v-for="article in recentNews" :key="article.id" :article="article" />
        </div>
      </div>
    </section>
    <!--End News Section -->

    <ClientSlider />

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSlider from '@/components/common/HeroSlider.vue'
import FeatureBlock from '@/components/common/FeatureBlock.vue'
import ServiceBlock from '@/components/common/ServiceBlock.vue'
import DoctorCard from '@/components/common/DoctorCard.vue'
import TestimonialSlider from '@/components/common/TestimonialSlider.vue'
import PricingCard from '@/components/common/PricingCard.vue'
import NewsCard from '@/components/common/NewsCard.vue'
import ClientSlider from '@/components/common/ClientSlider.vue'

import siteConfigData from '@/data/site-config.json'
import featuresData from '@/data/features.json'
import servicesData from '@/data/services.json'
import doctorsData from '@/data/doctors.json'
import pricingData from '@/data/pricing.json'
import newsData from '@/data/news.json'

const siteConfig = ref(siteConfigData)
const features = ref(featuresData)
const services = ref(servicesData)
const doctors = ref(doctorsData)
const pricingPlans = ref(pricingData)
const news = ref(newsData)

// Limit to first 3 articles for home page
const recentNews = computed(() => news.value.slice(0, 3))

onMounted(() => {
  // Initialize interactive components
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$
    
    // Wait for libraries to load
    setTimeout(() => {
  // Banner Swiper is initialized inside HeroSlider component; avoid duplicate init here.
  // (Previously initializing here caused blank slides due to double Swiper instances.)

      if ($('.testi-three-swiper').length && typeof (window as any).Swiper === 'function') {
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

      if ($('.client-swiper').length && typeof (window as any).Swiper === 'function') {
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

      // Initialize lightbox for video links
      if ($('.lightbox-image').length && typeof $.fn.fancybox === 'function') {
        $('.lightbox-image').fancybox({
          openEffect: 'fade',
          closeEffect: 'fade',
          helpers: {
            media: {}
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
    }, 100) // Small delay to ensure libraries are loaded
  }
})
</script>