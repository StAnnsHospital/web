<template>
  <div class="page-wrapper">
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Make an Appointment</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Appointment</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Appointment Form Section -->
    <section class="appointment-section">
      <div class="auto-container">
        <div class="row">
          <div class="col-lg-12">
            <div class="google-form-wrapper">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfNtYt6uySLNiXqK6MXtqPl-F2AdK_G_3-WecnpcR1-DyKfTQ/viewform?embedded=true" 
                width="100%" 
                height="1634" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
                title="Appointment Form"
                loading="lazy">
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Appointment Form Section -->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<style scoped>
.appointment-section {
  padding: 80px 0;
}

.google-form-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;
}

.google-form-wrapper iframe {
  width: 100%;
  height: 1634px;
  border: none;
  display: block;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .appointment-section {
    padding: 60px 0;
  }
  
  .google-form-wrapper iframe {
    height: 1400px;
  }
}

@media (max-width: 480px) {
  .appointment-section {
    padding: 40px 0;
  }
  
  .google-form-wrapper iframe {
    height: 1200px;
  }
}
</style>
