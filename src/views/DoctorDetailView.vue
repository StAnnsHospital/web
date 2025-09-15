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
                <span class="sub-title">Book Your Consultation</span>
                <h2>Make An Appointment</h2>
                <span class="divider"></span>
              </div>
              
              <div class="text">
                <p>Ready to schedule your consultation with <strong>{{ doctor.name }}</strong>? Our experienced medical team is here to provide you with the best possible care. Book your appointment today and take the first step towards better health.</p>
                
                <p>For your convenience, you can:</p>
                <ul class="appointment-features">
                  <li><i class="fa fa-check"></i> Schedule appointments online 24/7</li>
                  <li><i class="fa fa-check"></i> Choose your preferred date and time</li>
                  <li><i class="fa fa-check"></i> Receive appointment confirmations via SMS/Email</li>
                  <li><i class="fa fa-check"></i> Get reminders before your visit</li>
                </ul>
              </div>
              
              <div class="appointment-actions">
                <router-link to="/appointment" class="theme-btn btn-style-one">
                  <span class="btn-title">Book Appointment Online</span>
                </router-link>
                
                <div class="contact-info">
                  <p><strong>Or call us directly:</strong></p>
                  <a :href="`tel:${doctor.phone}`" class="phone-link">{{ doctor.phone }}</a>
                </div>
              </div>
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
                    <span class="sub-title">Contact Information</span>
                    <h2>Get In Touch</h2>
                    <span class="divider"></span>
                    <div class="text">Please contact the hospital directly to schedule an appointment with Dr. {{ doctor.name.split(' ').slice(-1)[0] }}. Our staff will help you find the most convenient time for your consultation.</div>
                  </div>
                  <div class="contact-info">
                    <div class="contact-item">
                      <strong>Phone:</strong>
                      <a :href="`tel:${doctor.phone}`">{{ doctor.phone }}</a>
                    </div>
                    <div class="contact-item">
                      <strong>Email:</strong>
                      <a :href="`mailto:${doctor.email}`">{{ doctor.email }}</a>
                    </div>
                    <div class="contact-item">
                      <strong>Address:</strong>
                      <span>{{ doctor.address }}</span>
                    </div>
                  </div>
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

// Get doctor by ID from route params or default to first doctor
const doctor = ref(doctors.value[0])

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


onMounted(() => {
  setDoctorFromRoute()
})
</script>

<style scoped>
.contact-info {
  margin-top: 20px;
}

.contact-item {
  margin-bottom: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item strong {
  display: block;
  margin-bottom: 5px;
  color: #1370b5;
  font-weight: 600;
}

.contact-item a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #1370b5;
}

.contact-item span {
  color: #666;
  line-height: 1.6;
}

/* Simple styling to match theme */
.appointment-features {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.appointment-features li {
  padding: 8px 0;
  color: #666;
  display: flex;
  align-items: center;
}

.appointment-features li i {
  color: #1370b5;
  margin-right: 10px;
  font-size: 14px;
}

.appointment-actions {
  text-align: center;
  margin-top: 30px;
}

.appointment-actions .theme-btn {
  margin-bottom: 20px;
}

.contact-info {
  margin-top: 20px;
}

.contact-info p {
  margin-bottom: 10px;
  color: #333;
}

.phone-link {
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  color: #1370b5;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #1370b5;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.phone-link:hover {
  background: #1370b5;
  color: white;
}

/* Fix button hover text visibility */
.appointment-actions .theme-btn:hover .btn-title {
  color: white !important;
}

.appointment-actions .theme-btn .btn-title {
  color: white;
  transition: color 0.3s ease;
}
</style>
