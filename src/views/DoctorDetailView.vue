<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Doctor Detail</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/doctors">Doctors</router-link></li>
            <li>Doctor Detail</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Doctor Detail Section -->
    <section class="doctor-detail-section">
      <div class="auto-container">
        <div class="row">
          <!-- Content Side -->
          <div class="content-side col-lg-8 col-md-12 col-sm-12 order-2">
            <div class="docter-detail">
              <h3 class="name text-reveal-anim">{{ doctor.name }}</h3>
              <span class="designation">{{ doctor.designation }}</span>
              <div class="text">{{ doctor.bio }}</div> 
              <ul class="doctor-info-list">
                <li>
                  <strong>Speciality</strong>
                  <p>{{ doctor.specialization }}</p>
                </li>
                <li>
                  <strong>Education</strong>
                  <p>{{ doctor.education }}</p>
                </li>
                <li>
                  <strong>Experience</strong>
                  <p>{{ doctor.experience }} years of Experience in Medicine</p>
                </li>
                <li>
                  <strong>Address</strong>
                  <p>{{ doctor.address }}</p>
                </li>
                <li>
                  <strong>Timing</strong>
                  <p>{{ doctor.timing }}</p>
                </li>
                <li>
                  <strong>Phone</strong>
                  <p><a :href="`tel:${doctor.phone}`">{{ doctor.phone }}</a></p>
                </li>
                <li>
                  <strong>Email</strong>
                  <p><a :href="`mailto:${doctor.email}`">{{ doctor.email }}</a></p>
                </li>
                <li>
                  <strong>Website</strong>
                  <p><a :href="doctor.website" target="_blank">{{ doctor.website }}</a></p>
                </li>
              </ul>
            </div>

            <div class="appointment-form default-form">
              <div class="sec-title">
                <span class="sub-title">Online Appoinment</span>
                <h2 class="text-reveal-anim">Make An Appointment</h2>
                <span class="divider"></span>
              </div>

              <!--Comment Form-->
              <form @submit.prevent="submitAppointment" id="email-form">
                <div class="row">
                  <div class="form-group col-lg-6 col-md-12">
                    <input type="text" v-model="appointmentForm.name" name="username" placeholder="Your Name" required>
                  </div>

                  <div class="form-group col-lg-6 col-md-12">
                    <input type="text" v-model="appointmentForm.phone" name="phone" placeholder="Your Phone" required>
                  </div>

                  <div class="form-group col-lg-12 col-md-12">
                    <input type="email" v-model="appointmentForm.email" name="email" placeholder="Your Email *" required>
                  </div>
                  
                  <div class="form-group col-lg-12 col-md-12">
                    <textarea v-model="appointmentForm.message" name="contact_message" placeholder="Tell us about Patient"></textarea>
                  </div>
                  
                  <div class="form-group col-lg-12 col-md-12">
                    <button class="theme-btn btn-style-one" type="submit" :disabled="isSubmitting">
                      <span class="btn-title">{{ isSubmitting ? 'Submitting...' : 'Submit Query' }}</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Sidebar Side -->
          <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <div class="sidebar"> 
              <!-- Team Block -->
              <div class="team-block wow fadeInUp">
                <div class="inner-box">
                  <figure class="image"><img :src="doctor.image" :alt="doctor.name"></figure>
                  <ul class="social-links">
                    <li><a :href="doctor.social.facebook" target="_blank"><span class="fab fa-facebook"></span></a></li>
                    <li><a :href="doctor.social.google" target="_blank"><span class="fab fa-google-plus-g"></span></a></li>
                    <li><a :href="doctor.social.twitter" target="_blank"><span class="fab fa-twitter"></span></a></li>
                    <li><a :href="doctor.social.pinterest" target="_blank"><span class="fab fa-pinterest"></span></a></li>
                  </ul>
                </div>
              </div>

              <!-- Doctor Availability -->
              <div class="docter-availability">
                <div class="inner">
                  <div class="sec-title">
                    <span class="sub-title">Timining</span>
                    <h2 class="text-reveal-anim">Availability</h2>
                    <span class="divider"></span>
                    <div class="text">Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Vestibulum bib volutpat accumsan non laoreet nulla luctus.</div>
                  </div>
                  <ul class="timing-list-two">
                    <li>Monday - Friday <span>08:00 - 20:00</span></li>
                    <li>Saturday <span>09:00 - 18:00</span></li>
                    <li>Sunday <span>09:00 - 18:00</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Doctor Detail Section -->

    <!-- Team Section -->
    <section class="team-section">
      <div class="auto-container">
        <div class="row">
          <!-- Team Block -->
          <div v-for="otherDoctor in otherDoctors" :key="otherDoctor.id" class="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div class="inner-box">
              <figure class="image">
                <router-link :to="`/doctor/${otherDoctor.id}`">
                  <img :src="otherDoctor.image" :alt="otherDoctor.name">
                </router-link>
              </figure>
              <ul class="social-links">
                <li><a :href="otherDoctor.social.facebook" target="_blank"><span class="fab fa-facebook"></span></a></li>
                <li><a :href="otherDoctor.social.google" target="_blank"><span class="fab fa-google-plus-g"></span></a></li>
                <li><a :href="otherDoctor.social.twitter" target="_blank"><span class="fab fa-twitter"></span></a></li>
                <li><a :href="otherDoctor.social.pinterest" target="_blank"><span class="fab fa-pinterest"></span></a></li>
              </ul>
              <div class="info-box">
                <h4 class="name">
                  <router-link :to="`/doctor/${otherDoctor.id}`">{{ otherDoctor.name }}</router-link>
                </h4>
                <span class="designation">{{ otherDoctor.designation }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import doctorsData from '@/data/doctors.json'

const route = useRoute()
const doctors = ref(doctorsData)
const isSubmitting = ref(false)

// Get doctor by ID from route params or default to first doctor
const doctor = ref(doctors.value[0])

// Appointment form
const appointmentForm = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
})

// Other doctors (excluding current doctor)
const otherDoctors = computed(() => {
  return doctors.value.filter(d => d.id !== doctor.value.id).slice(0, 4)
})

// Function to find and set doctor based on route
const setDoctorFromRoute = () => {
  const doctorId = route.params.id
  if (doctorId) {
    const foundDoctor = doctors.value.find(d => d.id === parseInt(doctorId as string))
    if (foundDoctor) {
      doctor.value = foundDoctor
    }
  }
}

// Watch for route changes
watch(() => route.params.id, () => {
  setDoctorFromRoute()
})

// Submit appointment form
const submitAppointment = async () => {
  isSubmitting.value = true
  
  try {
    console.log('Appointment submitted:', appointmentForm.value)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    appointmentForm.value = {
      name: '',
      phone: '',
      email: '',
      message: ''
    }
    
    alert('Appointment request submitted successfully!')
  } catch (error) {
    console.error('Error submitting appointment:', error)
    alert('Error submitting appointment. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  setDoctorFromRoute()
})
</script>
