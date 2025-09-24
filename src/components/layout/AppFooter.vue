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
                    <p>We’re a 200-bed multispecialty center with 24×7 Emergency, ICU/NICU, a LINAC-equipped Cancer Block, and a School & College of Nursing.</p>
                  </div>
                  <ul class="social-icon-three">
                    <li v-if="siteConfig.social.facebook !== '#'"><a :href="siteConfig.social.facebook"><i class="fab fa-facebook-f"></i></a></li>
                    <li v-if="siteConfig.social.pinterest !== '#'"><a :href="siteConfig.social.pinterest"><i class="fab fa-pinterest"></i></a></li>
                    <li v-if="siteConfig.social.twitter !== '#'"><a :href="siteConfig.social.twitter"><i class="fab fa-twitter"></i></a></li>
                    <li v-if="siteConfig.social.skype !== '#'"><a :href="siteConfig.social.skype"><i class="fab fa-skype"></i></a></li>
                    <li v-if="siteConfig.social.linkedin !== '#'"><a :href="siteConfig.social.linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                    <li v-if="siteConfig.social.instagram !== '#'"><a :href="siteConfig.social.instagram"><i class="fab fa-instagram"></i></a></li>
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
                <div class="footer-widget services-widget">
                  <h2 class="widget-title">Our Services</h2>
                  <ul class="service-list">
                    <li v-for="s in servicesLimited" :key="s.id">
                      <span class="icon" :class="s.icon" aria-hidden="true"></span>
                      <span class="service-text">{{ s.title }}</span>
                    </li>
                  </ul>
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
                        <div class="phones">
                          <template v-if="Array.isArray(siteConfig.contact.phones)">
                            <div v-for="p in siteConfig.contact.phones" :key="p">
                              <a :href="`tel:${p.replace(/\s+/g,'')}`"><strong>{{ p }}</strong></a>
                            </div>
                          </template>
                          <template v-else>
                            <a :href="`tel:${(siteConfig.contact.primaryPhone||'').replace(/\s+/g,'')}`"><strong>{{ siteConfig.contact.primaryPhone }}</strong></a>
                          </template>
                        </div>
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
import servicesData from '@/data/services.json'

const siteConfig = ref(siteConfigData)
const departments = ref(departmentsData)
const services = ref(servicesData)
// show up to 5 services in footer
const servicesLimited = computed(() => services.value.slice(0,5))
</script>

<style scoped>
.services-widget .service-list { list-style:none; margin:0; padding:0; }
.services-widget .service-list li { display:flex; align-items:flex-start; gap:10px; margin:0 0 14px; line-height:1.3; }
.services-widget .service-list li .icon { font-size:20px; color:#ffffff; line-height:1; position:relative; top:2px; }
.services-widget .service-list li .service-text { font-size:14px; font-weight:500; color:#d5dde2; }
.services-widget .service-list li:last-child { margin-bottom:0; }
.contact-widget .phones { display:flex; flex-direction:column; gap:2px; margin-top:4px; }
.contact-widget .phones a { color:#ffffff; font-weight:600; font-size:14px; }
</style>
