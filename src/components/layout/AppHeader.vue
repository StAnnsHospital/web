<template>
  <header class="main-header" :class="headerStyle">
    <!-- Header top -->
    <div :class="headerTopClass">
      <div class="auto-container">
        <div class="inner-container">
          <div class="top-left">
            <ul class="contact-list clearfix">
              <li><i class="flaticon-hospital-1"></i>{{ siteConfig.contact.address }}</li>
              <li><i class="flaticon-back-in-time"></i>{{ siteConfig.contact.hours }}</li>
            </ul>
          </div>
          <div class="top-right">
            <ul class="social-icon-one">
              <li><a :href="siteConfig.social.facebook"><span class="fab fa-facebook-f"></span></a></li>
              <li><a :href="siteConfig.social.twitter"><span class="fab fa-twitter"></span></a></li>
              <li><a :href="siteConfig.social.skype"><span class="fab fa-skype"></span></a></li>
              <li><a :href="siteConfig.social.linkedin"><span class="fab fa-linkedin-in"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Top -->
    
    <!-- Header Lower -->
    <div class="header-lower">
      <div class="auto-container">    
        <!-- Main box -->
        <div class="main-box">
          <div class="logo-box">
            <div class="logo">
              <router-link to="/">
                <img :src="siteConfig.site.logo" :alt="siteConfig.site.name" :title="siteConfig.site.name">
              </router-link>
            </div>
          </div>

          <!--Nav Box-->
          <div class="nav-outer">
            <nav class="nav main-menu">
              <ul class="navigation" id="navbar">
                <li v-for="item in siteConfig.navigation.main" :key="item.label" 
                    :class="['dropdown', { current: isCurrentRoute(item.path) }]">
                  <span v-if="item.children">{{ item.label }}</span>
                  <router-link v-else :to="item.path">{{ item.label }}</router-link>
                  
                  <ul v-if="item.children" class="dropdown-menu">
                    <li v-for="child in item.children" :key="child.label" 
                        :class="['dropdown', { current: isCurrentRoute(child.path) }]">
                      <router-link v-if="!child.children" :to="child.path">{{ child.label }}</router-link>
                      <span v-else>{{ child.label }}</span>
                      
                      <ul v-if="child.children" class="dropdown-menu">
                        <li v-for="grandChild in child.children" :key="grandChild.label">
                          <router-link :to="grandChild.path">{{ grandChild.label }}</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <!-- Main Menu End-->

            <div class="outer-box">
              <button class="search-btn" @click="toggleSearch"><span class="fa fa-search"></span></button>
              <router-link to="/appointment" id="appointment-btn" class="theme-btn btn-style-one">
                <span class="btn-title">Appointment</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky Header  -->
    <div class="sticky-header">
      <div class="auto-container">            
        <div class="main-box">
          <div class="logo-box">
            <div class="logo">
              <router-link to="/">
                <img :src="siteConfig.site.logo" :alt="siteConfig.site.name" :title="siteConfig.site.name">
              </router-link>
            </div>
          </div>

          <!--Nav Box-->
          <div class="nav-outer">
            <nav class="nav main-menu">
              <ul class="navigation" id="navbar">
                <li v-for="item in siteConfig.navigation.main" :key="item.label" 
                    :class="['dropdown', { current: isCurrentRoute(item.path) }]">
                  <span v-if="item.children">{{ item.label }}</span>
                  <router-link v-else :to="item.path">{{ item.label }}</router-link>
                  
                  <ul v-if="item.children" class="dropdown-menu">
                    <li v-for="child in item.children" :key="child.label" 
                        :class="['dropdown', { current: isCurrentRoute(child.path) }]">
                      <router-link v-if="!child.children" :to="child.path">{{ child.label }}</router-link>
                      <span v-else>{{ child.label }}</span>
                      
                      <ul v-if="child.children" class="dropdown-menu">
                        <li v-for="grandChild in child.children" :key="grandChild.label">
                          <router-link :to="grandChild.path">{{ grandChild.label }}</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <!-- Main Menu End-->

            <div class="outer-box">
              <button class="search-btn" @click="toggleSearch"><span class="fa fa-search"></span></button>
              <router-link to="/appointment" id="appointment-btn" class="theme-btn btn-style-one">
                <span class="btn-title">Appointment</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div><!-- End Sticky Menu -->

    <!-- Mobile Header -->
    <div class="mobile-header">
      <div class="logo">
        <router-link to="/">
          <img :src="siteConfig.site.logo" :alt="siteConfig.site.name" :title="siteConfig.site.name">
        </router-link>
      </div>

      <!--Nav Box-->
      <div class="nav-outer clearfix">
        <div class="outer-box">
          <!-- Search Btn -->
          <div class="search-box">
            <button class="search-btn mobile-search-btn"><i class="flaticon-magnifying-glass"></i></button>
          </div>
          <a href="#nav-mobile" class="mobile-nav-toggler navbar-trigger"><span class="fa fa-bars"></span></a>
        </div>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div id="nav-mobile"></div>

    <!-- Header Search -->
    <div class="search-popup" :class="{ active: isSearchOpen }">
      <span class="search-back-drop" @click="closeSearch"></span>
      <button class="close-search" @click="closeSearch"><span class="fa fa-times"></span></button>
      
      <div class="search-inner">
        <form @submit.prevent="handleSearch">
          <div class="form-group">
            <input type="search" v-model="searchQuery" placeholder="Search..." required>
            <button type="submit"><i class="flaticon-magnifying-glass"></i></button>
          </div>
        </form>
      </div>
    </div>
    <!-- End Header Search -->
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import siteConfigData from '@/data/site-config.json'

const route = useRoute()
const router = useRouter()
const siteConfig = ref(siteConfigData)
const isSearchOpen = ref(false)
const searchQuery = ref('')

const isCurrentRoute = (path: string | undefined) => {
  return path ? route.path === path : false
}

const headerStyle = computed(() => {
  // Home page uses header-style-one
  if (route.path === '/') {
    return 'header-style-one'
  }
  
  // Most other pages use header-style-two
  return 'header-style-two'
})

const headerTopClass = computed(() => {
  // Home page uses header-top
  if (route.path === '/') {
    return 'header-top'
  }
  
  // Most other pages use header-top-two
  return 'header-top-two'
})

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}

const closeSearch = () => {
  isSearchOpen.value = false
  searchQuery.value = ''
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // For now, just show an alert. In a real app, you'd navigate to a search results page
    alert(`Searching for: ${searchQuery.value}`)
    closeSearch()
  }
}

onMounted(() => {
  // Initialize sticky header functionality
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$
    
    // Sticky header show/hide functionality
    const stickyHeader = $('.main-header .sticky-header')
    
    if (stickyHeader.length) {
      $(window).on('scroll', () => {
        if ($(window).scrollTop() > 100) {
          stickyHeader.addClass('animated slideInDown')
        } else {
          stickyHeader.removeClass('animated slideInDown')
        }
      })
    }
  }
})
</script>
