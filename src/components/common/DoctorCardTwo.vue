<template>
  <div class="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
    <div class="inner-box">
      <div class="image-box">
        <figure class="image">
          <router-link :to="`/doctor/${doctor.id}`">
            <img :src="doctor.image" :alt="doctor.name">
          </router-link>
        </figure>
        <ul class="social-links">
          <li><a :href="doctor.social.facebook" target="_blank"><span class="fab fa-facebook-f"></span></a></li>
          <li><a :href="doctor.social.twitter" target="_blank"><span class="fab fa-twitter"></span></a></li>
          <li><a :href="doctor.social.instagram" target="_blank"><span class="fab fa-instagram"></span></a></li>
          <li><a :href="doctor.social.linkedin" target="_blank"><span class="fab fa-linkedin-in"></span></a></li>
        </ul>
      </div>
      <div class="info-box">
        <h5 class="name">
          <router-link :to="`/doctor/${doctor.id}`">{{ doctor.name }}</router-link>
        </h5>
        <span class="designation">{{ doctor.designation }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Doctor {
  id: number
  name: string
  designation: string
  image: string
  specialization: string
  experience: number
  bio?: string
  education?: string
  address?: string
  timing?: string
  phone?: string
  email?: string
  website?: string
  social: {
    facebook: string
    linkedin: string
    twitter: string
    pinterest: string
    instagram?: string
    google?: string
  }
}

defineProps<{
  doctor: Doctor
}>()
</script>
