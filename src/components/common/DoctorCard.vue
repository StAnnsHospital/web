<template>
  <div class="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
    <div class="inner-box">
      <figure class="image">
        <img :src="doctor.image" :alt="doctor.name">
      </figure>
      <ul class="social-links">
        <li><a :href="doctor.social.facebook"><span class="fab fa-facebook"></span></a></li>
        <li><a :href="doctor.social.linkedin"><span class="fab fa-linkedin-in"></span></a></li>
        <li><a :href="doctor.social.twitter"><span class="fab fa-twitter"></span></a></li>
        <li><a :href="doctor.social.pinterest"><span class="fab fa-pinterest"></span></a></li>
      </ul>
      <div class="info-box">
        <h4 class="name">
          <router-link :to="`/doctor/${doctor.id}`">{{ doctor.name }}</router-link>
        </h4>
        <span class="designation">{{ doctor.designation }}</span>
        <div class="experience">{{ doctor.experience }} years experience</div>
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
    google?: string
  }
}

defineProps<{
  doctor: Doctor
}>()
</script>
