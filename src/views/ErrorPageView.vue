<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>404 - Page Not Found</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>404 Error</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!--Error Section-->
    <section class="error-section">
      <div class="auto-container">
        <div class="content-box">
          <figure class="error-image"><img src="/images/icons/error.png" alt=""></figure>
          <h2>Page not found</h2>
          <div class="text">Please try one of the following pages:</div>
          <router-link to="/" class="theme-btn btn-style-one">
            <span class="btn-title">Home Page</span>
          </router-link>
          <router-link to="/contact" class="theme-btn btn-style-one">
            <span class="btn-title">Contact Us</span>
          </router-link>
        </div>
      </div>
    </section>
    <!--Error Section-->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>
