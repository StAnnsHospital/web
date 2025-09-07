<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Blog Standard</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Blog</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Sidebar Page Container -->
    <div class="sidebar-page-container">
      <div class="auto-container">
        <div class="row clearfix">
          <!--Content Side-->
          <div class="content-side col-lg-8 col-md-12 col-sm-12">
            <div class="blog-post">
              <!-- News Block -->
              <div class="news-block" v-for="article in news" :key="article.id">
                <div class="inner-box">
                  <div class="image"><img :src="article.image" :alt="article.title" /></div>
                  <div class="lower-content">
                    <ul class="post-info">
                      <li><span class="far fa-user"></span> {{ article.author }}</li>
                      <li><span class="far fa-comments"></span> Comments</li>
                      <li><span class="far fa-calendar"></span> {{ article.date }}</li>
                    </ul>
                    <h3><router-link :to="`/blog/${article.id}`">{{ article.title }}</router-link></h3>
                    <p>{{ article.excerpt }}</p>
                    <router-link :to="`/blog/${article.id}`" class="theme-btn btn-style-one small"><span class="btn-title">Read More</span></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Sidebar Side-->
          <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <aside class="sidebar">
              <!--search box-->
              <div class="sidebar-widget search-box">
                <form method="post" action="blog.html">
                  <div class="form-group">
                    <input type="search" name="search-field" value="" placeholder="Search....." required>
                    <button type="submit"><span class="icon fa fa-search"></span></button>
                  </div>
                </form>
              </div>

              <!-- Categories -->
              <div class="sidebar-widget category-list">
                <div class="sidebar-title"><h3>Categories</h3></div>
                <ul class="cat-list">
                  <li><a href="#">Procedures <span>(06)</span></a></li>
                  <li><a href="#">Transplantation <span>(02)</span></a></li>
                  <li class="active"><a href="#">Management <span>(05)</span></a></li>
                  <li><a href="#">Healthcare Tips <span>(25)</span></a></li>
                  <li><a href="#">Uncategorized <span>(04)</span></a></li>
                </ul>
              </div>

              <!-- Latest News -->
              <div class="sidebar-widget latest-news">
                <div class="sidebar-title"><h3>Popular Posts</h3></div>
                <div class="widget-content">
                  <article class="post" v-for="recentPost in recentPosts" :key="recentPost.id">
                    <div class="post-thumb">
                      <router-link :to="`/blog/${recentPost.id}`">
                        <img :src="recentPost.image" :alt="recentPost.title">
                      </router-link>
                    </div>
                    <h5><router-link :to="`/blog/${recentPost.id}`">{{ recentPost.title }}</router-link></h5>
                    <div class="post-info">{{ recentPost.date }}</div>
                  </article>
                </div>
              </div>

              <!-- Newslatters-->
              <div class="sidebar-widget newslatters">
                <div class="sidebar-title"><h3><span class="icon flaticon-rss-symbol"></span>Newsletter</h3></div>
                <div class="text">Enter your email address below to subscribe to our newsletter</div>
                <form @submit.prevent="subscribeNewsletter">
                  <div class="form-group">
                    <input type="email" v-model="email" placeholder="Your email address..." required>
                    <button type="submit" class="theme-btn"><span class="btn-title">Subscribe</span></button>
                  </div>
                </form>
              </div>

              <!-- Instagram Widget -->
              <div class="sidebar-widget instagram-widget">
                <div class="sidebar-title"> <h3>Instagram</h3> </div>
                <div class="widget-content">
                  <div class="clearfix">
                    <figure class="post-thumb"><img src="/images/resource/instagram-1.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-2.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-3.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-4.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-5.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <figure class="post-thumb"><img src="/images/resource/instagram-6.jpg" alt=""><a href="#" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                  </div>
                </div>
              </div>

              <!-- Tags -->
              <div class="sidebar-widget tags">
                <div class="sidebar-title"><h3>Tag Cloud</h3></div>
                <ul class="popular-tags clearfix">
                  <li><a href="#">Ideas</a></li>
                  <li><a href="#">Doctor</a></li>
                  <li><a href="#">Health</a></li>
                  <li><a href="#">Department</a></li>
                  <li><a href="#">Nurse</a></li>
                  <li><a href="#">Growth</a></li>
                  <li><a href="#">Expert</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Service</a></li>
                  <li><a href="#">Medical</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <!-- End Sidebar Container -->

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
import { ref, computed, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import newsData from '@/data/news.json'

const news = ref(newsData)
const email = ref('')

const recentPosts = computed(() => {
  return newsData.slice(0, 3)
})

const subscribeNewsletter = () => {
  if (email.value) {
    alert('Thank you for subscribing to our newsletter!')
    email.value = ''
  }
}

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
