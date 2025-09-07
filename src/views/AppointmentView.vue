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

    <div class="auto-container">
      <div class="contact-form-two">
        <div class="title-box">
          <h4>Make an Appointment</h4>
          <div class="text">We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</div>
        </div>
        <form @submit.prevent="submitAppointment" id="contact-form">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="text" v-model="form.name" placeholder="Your Name" required>
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="text" v-model="form.phone" placeholder="Your Phone" required>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="email" v-model="form.email" placeholder="Email Address" required>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 form-group">
              <select v-model="form.department" required>
                <option value="" selected disabled>Select Departments</option>
                <option v-for="dept in departments" :key="dept.id" :value="dept.name">{{ dept.name }}</option>
              </select>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="date" v-model="form.date" placeholder="Select Date" required>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 form-group">
              <select v-model="form.time" required>
                <option value="" selected disabled>Select Time</option>
                <option value="10:00AM - 12:00AM">10:00AM - 12:00AM</option>
                <option value="12:00AM - 02:00AM">12:00AM - 02:00AM</option>
                <option value="02:00PM - 04:00PM">02:00PM - 04:00PM</option>
                <option value="04:00PM - 06:00PM">04:00PM - 06:00PM</option>
                <option value="06:00PM - 08:00PM">06:00PM - 08:00PM</option>
              </select>
            </div>
            
            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
              <textarea v-model="form.message" placeholder="Message" required></textarea>
            </div>
            
            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
              <button class="theme-btn btn-style-three small" type="submit" :disabled="isSubmitting">
                <span class="btn-title">{{ isSubmitting ? 'Submitting...' : 'Submit Now' }}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import departmentsData from '@/data/departments.json'

const departments = ref(departmentsData)
const isSubmitting = ref(false)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  department: '',
  date: '',
  time: '',
  message: ''
})

const submitAppointment = async () => {
  isSubmitting.value = true
  
  try {
    console.log('Appointment submitted:', form)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    Object.assign(form, {
      name: '',
      phone: '',
      email: '',
      department: '',
      date: '',
      time: '',
      message: ''
    })
    
    alert('Appointment request submitted successfully!')
  } catch (error) {
    console.error('Error submitting appointment:', error)
    alert('Error submitting appointment. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
