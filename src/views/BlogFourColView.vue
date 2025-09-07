<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Our Blog</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Blog Four Columns</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Blog Section -->
    <section class="blog-section blog-four-col">
      <div class="auto-container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12" v-for="article in news" :key="article.id">
            <!-- News Block -->
            <div class="news-block-three">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <router-link :to="`/blog/${article.id}`">
                      <img :src="article.image" :alt="article.title">
                    </router-link>
                  </figure>
                  <div class="date">{{ article.date }}</div>
                </div>
                <div class="content-box">
                  <div class="category">{{ article.category }}</div>
                  <h3><router-link :to="`/blog/${article.id}`">{{ article.title }}</router-link></h3>
                  <div class="text">{{ article.excerpt }}</div>
                  <div class="post-meta">
                    <ul class="clearfix">
                      <li><span class="icon fa fa-user"></span> {{ article.author }}</li>
                      <li><span class="icon fa fa-heart"></span> {{ article.likes }}</li>
                      <li><span class="icon fa fa-comment"></span> {{ article.comments }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Blog Section -->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import newsData from '@/data/news.json'

const news = ref(newsData)
</script>
