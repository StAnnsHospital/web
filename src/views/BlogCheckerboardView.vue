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
            <li>Blog Checkerboard</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Blog Section -->
    <section class="blog-section">
      <div class="auto-container">
        <!-- News Block -->
        <div class="news-block-three" :class="{ 'even': index % 2 === 1 }" v-for="(article, index) in news" :key="article.id">
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <router-link :to="`/blog/${article.id}`">
                  <img :src="article.image" :alt="article.title">
                </router-link>
              </figure>
              <a href="#" class="date">{{ article.date }}</a>
            </div>
            <div class="content-box">
              <h4><router-link :to="`/blog/${article.id}`">{{ article.title }}</router-link></h4>
              <div class="text">{{ article.excerpt }}</div>
              <router-link :to="`/blog/${article.id}`" class="theme-btn btn-style-one read-more"><span class="btn-title">Read More</span></router-link>
              <div class="post-info">
                <div class="post-author">By <a href="#">{{ article.author }}</a></div>
                <ul class="post-option">
                  <li><a href="#">{{ article.likes }} <i class="far fa-heart"></i></a></li>
                  <li><a href="#">{{ article.comments }} <i class="far fa-comments"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Blog Section -->

    <!-- Clients Section -->
    <section class="clients-section">
      <div class="auto-container">
        <div class="swiper client-swiper">
          <div class="swiper-wrapper">
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/1.png" alt="Image"></a></figure>
              </div>
            </div>
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/2.png" alt="Image"></a></figure>
              </div>
            </div>
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/3.png" alt="Image"></a></figure>
              </div>
            </div>
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/4.png" alt="Image"></a></figure>
              </div>
            </div>
            <!-- Client Block -->
            <div class="client-block swiper-slide">
              <div class="inner-box">
                <figure class="image"><a href="#"><img src="/images/clients/5.png" alt="Image"></a></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Clients Section -->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import newsData from '@/data/news.json'

const news = ref(newsData)

onMounted(() => {
  // Initialize client swiper
  if (typeof window !== 'undefined' && (window as any).Swiper) {
    const Swiper = (window as any).Swiper
    
    new Swiper('.client-swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 5,
      spaceBetween: 40,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        0: { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
      }
    })
  }
})
</script>
