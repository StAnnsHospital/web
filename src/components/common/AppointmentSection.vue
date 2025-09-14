<template>
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
          <figure class="image"><img src="/images/resource/appointment.png" alt=""></figure>
        </div>
      </div>

      <div class="fun-fact-section">
        <div class="row">
          <!--Column-->
          <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div class="count-box">
              <div class="icon-box"><span class="icon flaticon-user-experience"></span></div>
              <h4 class="counter-title">Years of Experience</h4>
              <span class="count-text" data-speed="3000" data-stop="72">0</span>
            </div>
          </div>

          <!--Column-->
          <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
            <div class="count-box">
              <div class="icon-box"><span class="icon flaticon-hospital"></span></div>
              <h4 class="counter-title">Hospital Beds</h4>
              <span class="count-text" data-speed="3000" data-stop="200">0</span>
            </div>
          </div>

          <!--Column-->
          <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
            <div class="count-box">
              <div class="icon-box"><span class="icon flaticon-team"></span></div>
              <h4 class="counter-title">Medical Specialties</h4>
              <span class="count-text" data-speed="3000" data-stop="12">0</span>
            </div>
          </div>

          <!--Column-->
          <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
            <div class="count-box">
              <div class="icon-box"><span class="icon flaticon-first-aid"></span></div>
              <h4 class="counter-title">Community Health Camps</h4>
              <span class="count-text" data-speed="3000" data-stop="150">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Appointment Section -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import siteConfigData from '@/data/site-config.json'

interface SiteConfig {
  contact: {
    emergency: string
  }
}

const siteConfig = ref(siteConfigData as SiteConfig)
</script>
