<template>
  <div class="feature-block col-lg-4 col-md-6 col-sm-12">
    <div class="inner-box">
      <span :class="`icon ${feature.icon}`"></span>
      <h4><a href="#">{{ feature.title }}</a></h4>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Feature {
  id: number
  icon: string
  title: string
  description: string
}

defineProps<{
  feature: Feature
}>()
</script>
