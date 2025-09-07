<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Departments</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Departments</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Services Section -->
    <section class="services-section-two">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">Our Departments</span>
          <h2 class="text-reveal-anim">Medical Departments</h2>
          <span class="divider"></span>
        </div>

        <div class="row">
          <!-- Service Block -->
          <div v-for="dept in departments" :key="dept.id" class="service-block-two col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <router-link :to="`/department/${dept.slug}`">
                    <img :src="dept.image" :alt="dept.name">
                  </router-link>
                </figure>
              </div>
              <div class="lower-content">
                <div class="title-box">
                  <span :class="`icon ${dept.icon}`"></span>
                  <h4>
                    <router-link :to="`/department/${dept.slug}`">{{ dept.name }} Department</router-link>
                  </h4> 
                </div>
                <div class="text">{{ dept.description }}</div>
                <span :class="`icon-right ${dept.icon}`"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Styled Pagination -->
        <ul class="styled-pagination">
          <li class="prev"><a href="#"><span class="fa fa-angle-left"></span></a></li>
          <li class="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li class="next"><a href="#"><span class="fa fa-angle-right"></span></a></li>
        </ul>
      </div>
    </section>
    <!-- End Services Section -->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import departmentsData from '@/data/departments.json'

const departments = ref(departmentsData)
</script>
