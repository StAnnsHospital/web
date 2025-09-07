<template>
  <footer class="main-footer">
    <!--Widgets Section-->
    <div class="widgets-section" style="background-image: url(/images/background/7.jpg);">
      <div class="auto-container">
        <div class="row">
          <!--Big Column-->
          <div class="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div class="row">
              <!--Footer Column-->
              <div class="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                <div class="footer-widget about-widget">
                  <div class="logo">
                    <router-link to="/">
                      <img :src="siteConfig.site.logoFooter" :alt="siteConfig.site.name" />
                    </router-link>
                  </div>
                  <div class="text">
                    <p>{{ siteConfig.site.description }}</p>
                    <p>We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                  </div>
                  <ul class="social-icon-three">
                    <li><a :href="siteConfig.social.facebook"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a :href="siteConfig.social.pinterest"><i class="fab fa-pinterest"></i></a></li>
                    <li><a :href="siteConfig.social.twitter"><i class="fab fa-twitter"></i></a></li>
                    <li><a :href="siteConfig.social.skype"><i class="fab fa-skype"></i></a></li>
                    <li><a :href="siteConfig.social.linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                <div class="footer-widget">
                  <h2 class="widget-title">Departments</h2>
                  <ul class="user-links">
                    <li v-for="dept in departments" :key="dept.id">
                      <router-link :to="`/department/${dept.slug}`">{{ dept.name }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!--Big Column-->
          <div class="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div class="row">
              <!--Footer Column-->
              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                <!--Footer Column-->
                <div class="footer-widget recent-posts">
                  <h2 class="widget-title">Latest News</h2>
                  <!--Footer Column-->
                  <div class="widget-content">
                    <div v-for="article in latestNews" :key="article.id" class="post">
                      <div class="thumb">
                        <router-link :to="`/blog/${article.id}`">
                          <img :src="article.image" :alt="article.title">
                        </router-link>
                      </div>
                      <h4>
                        <router-link :to="`/blog/${article.id}`">{{ article.title }}</router-link>
                      </h4>
                      <span class="date">{{ article.date }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!--Footer Column-->
              <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                <!--Footer Column-->
                <div class="footer-widget contact-widget">
                  <h2 class="widget-title">Contact Us</h2>
                  <!--Footer Column-->
                  <div class="widget-content">
                    <ul class="contact-list">
                      <li>
                        <span class="icon flaticon-placeholder"></span>
                        <div class="text">{{ siteConfig.contact.address }}</div>
                      </li>

                      <li>
                        <span class="icon flaticon-call-1"></span>
                        <div class="text">Mon to Fri : 08:30 - 18:00</div>
                        <a :href="`tel:${siteConfig.contact.phone}`"><strong>{{ siteConfig.contact.phone }}</strong></a>
                      </li>

                      <li>
                        <span class="icon flaticon-email"></span>
                        <div class="text">Do you have a Question?<br>
                        <a :href="`mailto:${siteConfig.contact.email}`"><strong>{{ siteConfig.contact.email }}</strong></a></div>
                      </li>

                      <li>
                        <span class="icon flaticon-back-in-time"></span>
                        <div class="text">{{ siteConfig.contact.hours }}</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Footer Bottom-->
    <div class="footer-bottom">
      <!-- Scroll To Top -->
      <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"></span></div>
      
      <div class="auto-container">
        <div class="inner-container clearfix">
          <div class="footer-nav">
            <ul class="clearfix">
              <li><router-link to="/privacy">Privacy Policy</router-link></li> 
              <li><router-link to="/contact">Contact</router-link></li> 
              <li><router-link to="/supplier">Supplier</router-link></li>  
            </ul>
          </div>
          
          <div class="copyright-text">
            <p>Copyright © 2025 <a href="#">{{ siteConfig.site.name }}</a> All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import siteConfigData from '@/data/site-config.json'
import departmentsData from '@/data/departments.json'
import newsData from '@/data/news.json'

const siteConfig = ref(siteConfigData)
const departments = ref(departmentsData)
const news = ref(newsData)

const latestNews = computed(() => {
  return news.value.slice(0, 3)
})
</script>
