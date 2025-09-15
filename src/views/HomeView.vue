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
                <span class="sub-title">ST. ANN'S MULTI-SPECIALTY HOSPITAL, FATHIMANAGAR</span>
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

        <!-- Doctors Slider -->
        <div class="doctors-swiper swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="doctor in featuredDoctors" :key="doctor.id">
              <DoctorCard :doctor="doctor" />
            </div>
          </div>
          <!-- Navigation -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <!-- Pagination -->
          <div class="swiper-pagination"></div>
        </div>

        <div class="sec-bottom-text">Don't hesitate, contact us for better help and services <router-link to="/doctors">Explore all Dr. Team</router-link></div>
      </div>
    </section>
    <!-- End Team Section -->

    <AppointmentSection />

    <TestimonialSlider />



    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSlider from '@/components/common/HeroSlider.vue'
import FeatureBlock from '@/components/common/FeatureBlock.vue'
import ServiceBlock from '@/components/common/ServiceBlock.vue'
import DoctorCard from '@/components/common/DoctorCard.vue'
import TestimonialSlider from '@/components/common/TestimonialSlider.vue'
import AppointmentSection from '@/components/common/AppointmentSection.vue'

import siteConfigData from '@/data/site-config.json'
import featuresData from '@/data/features.json'
import servicesData from '@/data/services.json'
import doctorsData from '@/data/doctors.json'

const siteConfig = ref(siteConfigData)
const features = ref(featuresData)
const services = ref(servicesData)
const doctors = ref(doctorsData)

// Show only first 6 doctors on home page
const featuredDoctors = ref(doctorsData.slice(0, 6))

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

      // Initialize doctors slider
      if ($('.doctors-swiper').length && typeof (window as any).Swiper === 'function') {
        new (window as any).Swiper(".doctors-swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          speed: 800,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
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

<style scoped>
/* Doctors Slider Styling */
.doctors-swiper {
  padding: 20px 0 60px;
  overflow: hidden;
}

.doctors-swiper .swiper-slide {
  height: auto;
}

/* Ensure doctor cards maintain original size */
.doctors-swiper .team-block {
  width: 100%;
  max-width: none;
}

.doctors-swiper .inner-box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.doctors-swiper .image {
  height: 280px;
  overflow: hidden;
}

.doctors-swiper .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.doctors-swiper .inner-box:hover .image img {
  transform: scale(1.05);
}

/* Fix hover text visibility */
.doctors-swiper .info-box {
  background: white;
  padding: 20px;
  text-align: center;
  flex-grow: 1;
}

.doctors-swiper .name a {
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.doctors-swiper .name a:hover {
  color: #1370b5;
}

.doctors-swiper .designation {
  color: #1370b5;
  font-size: 14px;
  font-weight: 500;
  display: block;
  margin: 5px 0;
}

.doctors-swiper .experience {
  color: #666;
  font-size: 13px;
  margin-top: 5px;
}

/* Social links hover fix */
.doctors-swiper .social-links {
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.doctors-swiper .inner-box:hover .social-links {
  opacity: 1;
}

.doctors-swiper .social-links li a {
  color: white;
  background: rgba(19, 112, 181, 0.8);
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 5px;
  transition: all 0.3s ease;
}

.doctors-swiper .social-links li a:hover {
  background: #1370b5;
  transform: scale(1.1);
}

.doctors-swiper .swiper-button-next,
.doctors-swiper .swiper-button-prev {
  color: #1370b5;
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.doctors-swiper .swiper-button-next:hover,
.doctors-swiper .swiper-button-prev:hover {
  background: #1370b5;
  color: white;
  transform: scale(1.1);
}

.doctors-swiper .swiper-button-next:after,
.doctors-swiper .swiper-button-prev:after {
  font-size: 18px;
  font-weight: bold;
}

.doctors-swiper .swiper-pagination {
  bottom: 0;
}

.doctors-swiper .swiper-pagination-bullet {
  background: #1370b5;
  opacity: 0.3;
  width: 12px;
  height: 12px;
}

.doctors-swiper .swiper-pagination-bullet-active {
  opacity: 1;
  transform: scale(1.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .doctors-swiper {
    padding: 20px 0 50px;
  }
  
  .doctors-swiper .swiper-button-next,
  .doctors-swiper .swiper-button-prev {
    width: 40px;
    height: 40px;
  }
  
  .doctors-swiper .swiper-button-next:after,
  .doctors-swiper .swiper-button-prev:after {
    font-size: 14px;
  }
  
  .doctors-swiper .image {
    height: 250px;
  }
}
</style>