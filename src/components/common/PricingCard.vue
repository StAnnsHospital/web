<template>
  <div class="pricing-block col-lg-3 col-md-6 col-sm-12">
    <div class="inner-box">
      <div class="price-box">
        <h4 class="price">{{ plan.price }}</h4>
        <div class="validaty">{{ plan.period }}</div>
      </div>
      <h3 class="title">{{ plan.title }}</h3>
      <ul class="features">
        <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
      </ul>
      <div class="btn-box">
        <a href="#" class="theme-btn">Get Offer</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PricingPlan {
  id: number
  title: string
  price: string
  period: string
  features: string[]
}

defineProps<{
  plan: PricingPlan
}>()
</script>
