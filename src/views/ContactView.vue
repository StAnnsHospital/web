<template>
  <div class="page-wrapper">
    <!-- Preloader -->
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Contact Us</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Contact</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Map Section -->
    <section class="map-section">
      <div class="auto-container">
        <div class="map-outer">
          <div class="map-canvas">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.7378978586102!2d79.52546334091286!3d17.980989050548853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334fb76081f5e7%3A0xda34642eb6a616e9!2sSaint%20Anns%20Hospital!5e0!3m2!1sen!2sus!4v1757818939861!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="St. Ann's Hospital Location">
            </iframe>
          </div>
        </div>
      </div>
    </section>
    <!-- End Map Section -->

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="small-container">
        <div class="sec-title text-center">
          <span class="sub-title">Contact Now</span>
          <h2 class="text-reveal-anim">Write us a Message !</h2>
          <span class="divider"></span>
        </div>

        <!-- Contact box -->
        <div class="contact-box">
          <div class="row">
            <div class="contact-info-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner">
                <span class="icon flaticon-worldwide"></span> 
                <h4><strong>Address</strong></h4>
                <p>{{ siteConfig.contact.address }}</p>
              </div>
            </div>

            <div class="contact-info-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner">
                <span class="icon flaticon-phone"></span> 
                <h4><strong>Phone</strong></h4>
                <template v-if="Array.isArray(siteConfig.contact.phones)">
                  <p v-for="p in siteConfig.contact.phones" :key="p"><a :href="`tel:${p.replace(/\s+/g,'')}`">{{ p }}</a></p>
                </template>
                <template v-else>
                  <p><a :href="`tel:${(siteConfig.contact.primaryPhone||'').replace(/\s+/g,'')}`">{{ siteConfig.contact.primaryPhone }}</a></p>
                </template>
              </div>
            </div>

            <div class="contact-info-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner">
                <span class="icon flaticon-email"></span> 
                <h4><strong>Email</strong></h4>
                <p><a :href="`mailto:${siteConfig.contact.email}`">{{ siteConfig.contact.email }}</a></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Form box -->
        <div class="form-box">
          <div class="google-form-container">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdRkJG2Bv1H8h9vc5MrFkrrAQKCD91H2ic9TocEOvQ_YM5TOQ/viewform?embedded=true" 
              width="100%" 
              height="600" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0"
              title="Contact Form">
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
    <!--End Contact Section -->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import siteConfigData from '@/data/site-config.json'

const siteConfig = ref(siteConfigData)
</script>

<style scoped>
.google-form-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.google-form-container iframe {
  display: block;
  border: none;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .google-form-container iframe {
    height: 500px;
  }
}
</style>
