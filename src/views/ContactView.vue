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
          <div class="map-canvas"
              data-zoom="12"
              data-lat="-37.817085"
              data-lng="144.955631"
              data-type="roadmap"
              data-hue="#ffc400"
              data-title="Envato"
              data-icon-path="/images/icons/map-marker.png"
              data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
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
                <p><a :href="`tel:${siteConfig.contact.phone}`">{{ siteConfig.contact.phone }}</a></p>
                <p><a :href="`tel:${siteConfig.contact.emergency}`">{{ siteConfig.contact.emergency }}</a></p>
              </div>
            </div>

            <div class="contact-info-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner">
                <span class="icon flaticon-email"></span> 
                <h4><strong>Email</strong></h4>
                <p><a :href="`mailto:${siteConfig.contact.email}`">{{ siteConfig.contact.email }}</a></p>
                <p><a :href="`mailto:${siteConfig.contact.email}`">{{ siteConfig.contact.email }}</a></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form box -->
        <div class="form-box">
          <div class="contact-form">
            <form @submit.prevent="submitForm" id="email-form">
              <div class="row">
                <div class="form-group col-lg-12">
                  <div class="response"></div>
                </div>

                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <input type="text" v-model="form.name" class="username" placeholder="Full Name *" required>
                  </div>

                  <div class="form-group">
                    <input type="email" v-model="form.email" class="email" placeholder="Email Address *" required>
                  </div>

                  <div class="form-group">
                    <input type="text" v-model="form.phone" class="username" placeholder="Your Phone">
                  </div>
                </div>
                
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <textarea v-model="form.message" class="message" placeholder="Message" required></textarea>
                  </div>
                </div>

                <div class="form-group col-lg-12 text-center pt-3">
                  <button class="theme-btn btn-style-one" type="submit" :disabled="isSubmitting">
                    <span class="btn-title">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!--End Contact Section -->

    <ClientSlider />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ClientSlider from '@/components/common/ClientSlider.vue'
import siteConfigData from '@/data/site-config.json'

const siteConfig = ref(siteConfigData)
const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    
    alert('Message sent successfully!')
  } catch (error) {
    console.error('Error sending message:', error)
    alert('Error sending message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
