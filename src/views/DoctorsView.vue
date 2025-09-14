<template>
  <div class="page-wrapper">
    <!-- Preloader -->
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Dedicated Doctors</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Doctors</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Team Section Two -->
    <section class="team-section-two alternate alternate2">
      <div class="auto-container">
        <div class="row">
          <DoctorCardTwo v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
        </div>

        <div class="sec-bottom-text">Don't hesitate, contact us for better help and services. <a href="#">Explore all Dr. Team</a></div>
      </div>
    </section>
    <!--End Team Section -->

    <TestimonialSlider />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import DoctorCardTwo from '@/components/common/DoctorCardTwo.vue'
import TestimonialSlider from '@/components/common/TestimonialSlider.vue'
import doctorsData from '@/data/doctors.json'

const doctors = ref(doctorsData)
</script>
