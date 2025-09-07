<template>
  <div class="service-block col-lg-4 col-md-6 col-sm-12">
    <div class="inner-box">
      <span :class="`icon ${service.icon}`"></span>
      <h5><a href="#">{{ service.title }}</a></h5>
      <div class="text">{{ service.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Service {
  id: number
  icon: string
  title: string
  description: string
}

defineProps<{
  service: Service
}>()
</script>
