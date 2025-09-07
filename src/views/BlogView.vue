<template>
  <div class="page-wrapper">
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Our Blog</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Blog</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <div class="auto-container">
      <div class="row">
        <NewsCard v-for="article in news" :key="article.id" :article="article" />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import NewsCard from '@/components/common/NewsCard.vue'
import newsData from '@/data/news.json'

const news = ref(newsData)
</script>
