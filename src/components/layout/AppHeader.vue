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
                <li v-for="item in navigationItems" :key="item.label" 
                    :class="[{ 'dropdown': item.children, 'current': isCurrentRoute(item.path) }]">
                  <router-link v-if="item.children" :to="item.path!">{{ item.label }}</router-link>
                  <router-link v-else :to="item.path!">{{ item.label }}</router-link>
                  
                  <ul v-if="item.children" class="dropdown-menu desktop-dropdown">
                    <li v-for="child in item.children" :key="child.label" 
                        :class="[{ 'dropdown': child.children, 'current': isCurrentRoute(child.path) }]">
                      <a v-if="!child.children && child.path?.includes('#')" 
                         @click="handleAnchorNavigation(child.path!)" 
                         href="javascript:void(0)">{{ child.label }}</a>
                      <router-link v-else-if="!child.children" :to="child.path!">{{ child.label }}</router-link>
                      <router-link v-else :to="child.path!">{{ child.label }}</router-link>
                      
                      <ul v-if="child.children" class="dropdown-menu">
                        <li v-for="grandChild in child.children" :key="grandChild.label">
                          <router-link :to="grandChild.path!">{{ grandChild.label }}</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <!-- Main Menu End-->

            <div class="outer-box">
              <button class="search-btn" @click="toggleSearch" aria-label="Search" :aria-expanded="isSearchOpen" aria-controls="search-results-list"><span class="fa fa-search"></span></button>
              <router-link to="/appointment" id="appointment-btn" class="theme-btn btn-style-three">
                <span class="btn-title">Appointment</span>
                <span></span><span></span><span></span><span></span><span></span>
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
                <li v-for="item in navigationItems" :key="item.label" 
                    :class="[{ 'dropdown': item.children, 'current': isCurrentRoute(item.path) }]">
                  <router-link v-if="item.children" :to="item.path!">{{ item.label }}</router-link>
                  <router-link v-else :to="item.path!">{{ item.label }}</router-link>
                  
                  <ul v-if="item.children" class="dropdown-menu desktop-dropdown">
                    <li v-for="child in item.children" :key="child.label" 
                        :class="[{ 'dropdown': child.children, 'current': isCurrentRoute(child.path) }]">
                      <a v-if="!child.children && child.path?.includes('#')" 
                         @click="handleAnchorNavigation(child.path!)" 
                         href="javascript:void(0)">{{ child.label }}</a>
                      <router-link v-else-if="!child.children" :to="child.path!">{{ child.label }}</router-link>
                      <router-link v-else :to="child.path!">{{ child.label }}</router-link>
                      
                      <ul v-if="child.children" class="dropdown-menu">
                        <li v-for="grandChild in child.children" :key="grandChild.label">
                          <router-link :to="grandChild.path!">{{ grandChild.label }}</router-link>
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
              <router-link to="/appointment" id="appointment-btn" class="theme-btn btn-style-three">
                <span class="btn-title">Appointment</span>
                <span></span><span></span><span></span><span></span><span></span>
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
            <button class="search-btn mobile-search-btn" @click="toggleSearch"><i class="flaticon-magnifying-glass"></i></button>
          </div>
          <a href="#nav-mobile" class="mobile-nav-toggler navbar-trigger"><span class="fa fa-bars"></span></a>
        </div>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div id="nav-mobile"></div>

    <!-- Header Search -->
  <div class="search-popup" :class="{ active: isSearchOpen }" ref="searchPopupRef">
      <span class="search-back-drop" @click="closeSearch"></span>
      <button class="close-search" @click="closeSearch"><span class="fa fa-times"></span></button>
      
      <div class="search-inner">
        <form @submit.prevent="handleSearch">
          <div class="form-group">
            <input type="search" v-model="searchQuery" placeholder="Search..." required ref="searchInputRef" @keydown="onSearchKeydown" aria-autocomplete="list" aria-controls="search-results-list" :aria-activedescendant="activeDescendantId" :autofocus="isSearchOpen">
            <button type="submit"><i class="flaticon-magnifying-glass"></i></button>
          </div>
        </form>
        <div v-if="showResults" class="search-results">
          <ul v-if="filteredResults.length" class="results-list" id="search-results-list" role="listbox">
            <li v-for="(res, idx) in filteredResults" :key="res.path" class="result-item" :class="{ active: idx === activeResultIndex }" role="option" :id="'search-opt-'+idx" :aria-selected="idx===activeResultIndex">
              <router-link :to="res.path" @click="handleResultClick" class="result-link" tabindex="-1">
                <span class="result-label" v-html="res.highlightLabel"></span>
                <small class="result-path" v-html="res.highlightPath"></small>
              </router-link>
            </li>
          </ul>
          <div v-else class="no-results">No matches found.</div>
        </div>
      </div>
    </div>
    <!-- End Header Search -->
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import siteConfigData from '@/data/site-config.json'

const route = useRoute()
const router = useRouter()
interface SiteConfigSocial { facebook:string; twitter:string; skype:string; linkedin:string; instagram?:string; pinterest?:string }
interface NavItem { label:string; path?:string; children?: NavItem[] }
interface SiteConfig {
  site:{ name:string; tagline:string; description:string; logo:string; logoFooter:string; favicon:string }
  contact:{ address:string; phones:string[]; primaryPhone:string; emergency:string; email:string; hours:string }
  social: SiteConfigSocial
  navigation:{ main: NavItem[] }
}
const siteConfig = ref(siteConfigData as SiteConfig)

// Navigation computed property
const navigationItems = computed(() => {
  return siteConfig.value.navigation.main
})
const isSearchOpen = ref(false)
const searchPopupRef = ref<HTMLElement | null>(null)
const searchInputRef = ref<HTMLInputElement | null>(null)
const searchQuery = ref('')

// Mobile menu will be handled by mmenu plugin

// Flatten navigation for search
const flatNav = computed(() => {
  const out: { label: string; path: string }[] = []
  const walk = (items: NavItem[]) => {
    items.forEach(i => {
      if (i.path) out.push({ label: i.label, path: i.path })
      if (i.children) walk(i.children)
    })
  }
  const root = navigationItems.value
  if (root) walk(root)
  return out
})

const highlight = (text: string, q: string) => {
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return text.replace(new RegExp(esc, 'ig'), m => `<mark>${m}</mark>`)
}

const filteredResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []
  return flatNav.value
    .filter(r => r.label.toLowerCase().includes(q) || r.path.toLowerCase().includes(q))
    .map(r => ({
      ...r,
      highlightLabel: highlight(r.label, searchQuery.value.trim()),
      highlightPath: highlight(r.path, searchQuery.value.trim())
    }))
})

const showResults = computed(() => searchQuery.value.trim().length > 0)

// Keyboard navigation state for search results
const activeResultIndex = ref(-1)
const activeDescendantId = computed(() => activeResultIndex.value >= 0 ? `search-opt-${activeResultIndex.value}` : undefined)

const moveActive = (dir: 1 | -1) => {
  const total = filteredResults.value.length
  if (!total) { activeResultIndex.value = -1; return }
  if (activeResultIndex.value === -1) {
    activeResultIndex.value = dir === 1 ? 0 : total - 1
  } else {
    activeResultIndex.value = (activeResultIndex.value + dir + total) % total
  }
  // ensure item visible
  nextTick(() => {
    const el = document.getElementById(`search-opt-${activeResultIndex.value}`)
    el?.scrollIntoView({ block: 'nearest' })
  })
}

const activateCurrent = () => {
  if (activeResultIndex.value < 0) return
  const item = filteredResults.value[activeResultIndex.value]
  if (item) {
    // programmatic navigation via link click
    const link = document.querySelector(`#search-opt-${activeResultIndex.value} a`) as HTMLAnchorElement | null
    if (link) link.click()
  }
}

function focusSearchInput() {
  const el = searchInputRef.value
  if (!el) return
  let tries = 0
  const maxTries = 10
  const attempt = () => {
    if (!isSearchOpen.value) return
    if (document.activeElement !== el) {
      el.focus({ preventScroll: true })
    }
    if (document.activeElement !== el && tries < maxTries) {
      tries++
      setTimeout(attempt, 25)
    }
  }
  requestAnimationFrame(() => setTimeout(attempt, 10))
}

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
  applySearchState()
  if (isSearchOpen.value) {
    activeResultIndex.value = -1
    // Focus after animation / transition end
    nextTick(() => {
      const popup = searchPopupRef.value
      let focused = false
      const focusNow = () => { if (!focused) { focused = true; focusSearchInput() } }
      if (popup) {
        const onEnd = () => { popup.removeEventListener('transitionend', onEnd); focusNow() }
        popup.addEventListener('transitionend', onEnd, { once: true })
        // Fallback if no transition fires
        setTimeout(focusNow, 200)
      } else {
        focusNow()
      }
    })
  }
}

const closeSearch = () => {
  isSearchOpen.value = false
  searchQuery.value = ''
  applySearchState()
  activeResultIndex.value = -1
}

// Handle anchor navigation for hash links
const handleAnchorNavigation = (path: string) => {
  const [routePath, anchor] = path.split('#')
  
  if (routePath && anchor) {
    // Navigate to the route first
    router.push(routePath).then(() => {
      // Wait for the page to load, then scroll to the anchor
      nextTick(() => {
        setTimeout(() => {
          const element = document.getElementById(anchor)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      })
    })
  }
}

const handleSearch = () => {
  const first = filteredResults.value[0]
  if (first) {
    router.push(first.path)
    closeSearch()
  }
}

const onSearchKeydown = (e: KeyboardEvent) => {
  if (!isSearchOpen.value) return
  if (e.key === 'Enter') {
    e.preventDefault()
    if (activeResultIndex.value >= 0) {
      activateCurrent()
    } else {
      handleSearch()
    }
  } else if (e.key === 'Escape') {
    e.preventDefault(); closeSearch()
  } else if (e.key === 'ArrowDown') {
    e.preventDefault(); moveActive(1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault(); moveActive(-1)
  }
}

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

const BODY_SEARCH_CLASS = 'moblie-search-active'

const applySearchState = () => {
  if (typeof document === 'undefined') return
  const body = document.body
  if (isSearchOpen.value) {
    if (!body.classList.contains(BODY_SEARCH_CLASS)) body.classList.add(BODY_SEARCH_CLASS)
  } else {
    body.classList.remove(BODY_SEARCH_CLASS)
  }
}

const handleResultClick = () => {
  closeSearch()
  searchQuery.value = ''
}

// Mobile menu functions removed - handled by mmenu plugin

onMounted(() => {
  // Initialize mobile navigation using mmenu plugin with data-driven approach
  const $mobileNav = document.getElementById('nav-mobile')
  
  if ($mobileNav) {
    // Create mobile navigation structure from our data
    const createMobileNav = (items: any[]) => {
      const ul = document.createElement('ul')
      ul.className = 'navigation'
      
      items.forEach(item => {
        const li = document.createElement('li')
        if (item.children) {
          li.className = 'dropdown'
        }
        
        const link = document.createElement('a')
        link.href = item.path || '#'
        link.textContent = item.label
        
        li.appendChild(link)
        
        if (item.children) {
          const subUl = document.createElement('ul')
          item.children.forEach((child: any) => {
            const subLi = document.createElement('li')
            const subLink = document.createElement('a')
            subLink.href = child.path || '#'
            subLink.textContent = child.label
            subLi.appendChild(subLink)
            subUl.appendChild(subLi)
          })
          li.appendChild(subUl)
        }
        
        ul.appendChild(li)
      })
      
      return ul
    }
    
    // Create navigation from our data
    const mobileNav = createMobileNav(navigationItems.value)
    $mobileNav.appendChild(mobileNav)
    
    // Initialize mmenu
    if (window.$ && window.$.fn.mmenu) {
      window.$($mobileNav).mmenu({
        "counters": false,
        "navbars": [
          {
            "position": "top",
            "content": [
              "prev",
              "title"
            ]
          },
          {
            "position": "bottom",
            "content": [
              "<a class='fab fa-facebook-f' href='#'></a>",
              "<a class='fab fa-twitter' href='#'></a>",
              "<a class='fab fa-linkedin-in' href='#'></a>",
              "<a class='fab fa-instagram' href='#'></a>"
            ]
          }
        ]
      })
      
      // Force title color after mmenu initialization
      setTimeout(() => {
        const titleElements = document.querySelectorAll('.mm-navbar__title, .mm-navbar__title span')
        titleElements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.color = '#000000'
            el.style.fontWeight = '600'
          }
        })
      }, 100)
    }
  }

  // Pure JS sticky header using IntersectionObserver
  const mainHeader = document.querySelector<HTMLElement>('.main-header')
  const sticky = mainHeader?.querySelector<HTMLElement>('.sticky-header')
  if (mainHeader && sticky && 'IntersectionObserver' in window) {
    const sentry = document.createElement('div')
    sentry.style.position = 'absolute'
    sentry.style.top = '0'
    sentry.style.left = '0'
    sentry.style.width = '1px'
    sentry.style.height = '1px'
    mainHeader.prepend(sentry)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting && window.scrollY > 100) {
          sticky.classList.add('animated', 'slideInDown')
        } else {
          sticky.classList.remove('animated', 'slideInDown')
        }
      })
    })
    observer.observe(sentry)
  }
  applySearchState()
})

watch(isSearchOpen, (open) => {
  if (open) focusSearchInput()
})

watch(searchQuery, () => {
  activeResultIndex.value = -1
})

onUnmounted(() => {
  // Clean body class to avoid leakage when component unmounts
  if (typeof document !== 'undefined') {
    document.body.classList.remove(BODY_SEARCH_CLASS)
  }
})
 </script>

<style scoped>
.search-results { margin-top:20px; max-height:320px; overflow-y:auto; background:#fff; border:1px solid #e2e6ea; border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,0.08); }
.results-list { list-style:none; margin:0; padding:6px 0; }
.result-item { margin:0; }
.result-item.active > .result-link { background:rgba(19,112,181,0.15); }
.result-item.active > .result-link .result-label { color:#136fb5; }
.result-link { display:flex; flex-direction:column; gap:2px; padding:10px 16px; text-decoration:none; position:relative; }
.result-link:hover { background:rgba(19,112,181,0.08); }
.result-label { font-weight:600; color:#222; font-size:14px; }
.result-path { font-size:11px; letter-spacing:.5px; color:#555; text-transform:uppercase; }
mark { background:#ffe398; color:inherit; padding:0 2px; border-radius:3px; }
.no-results { padding:14px 16px; font-size:14px; color:#666; }

/* Mobile Menu Styles - using original mmenu plugin */
/* Aggressive fix for title color with high specificity */
.mm-navbar__title,
.mm-navbar__title span,
.mm-navbars_top .mm-navbar .mm-navbar__title,
.mm-navbars_top .mm-navbar .mm-navbar__title span,
#nav-mobile .mm-navbar__title,
#nav-mobile .mm-navbar__title span,
.mm-menu .mm-navbar__title,
.mm-menu .mm-navbar__title span {
  color: #000000 !important;
  font-weight: 600 !important;
  text-shadow: none !important;
  opacity: 1 !important;
}
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-menu.active {
  opacity: 1;
  visibility: visible;
}

.menu-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
}

.menu-box {
  position: absolute;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background: #ffffff;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
}

.mobile-menu.active .menu-box {
  transform: translateX(0);
}

.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  min-height: 80px;
}

.menu-logo {
  flex: 1;
}

.menu-logo img {
  max-height: 40px;
  width: auto;
}

.close-btn {
  width: 44px;
  height: 44px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.close-btn:hover {
  background: #0056b3;
  transform: scale(1.05);
}

.menu-content {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

.navigation {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  border-bottom: 1px solid #f1f3f4;
}

.nav-item:last-child {
  border-bottom: none;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  background: #f8f9fa;
  color: #007bff;
}

.nav-item.current .nav-link {
  background: #e3f2fd;
  color: #007bff;
  border-left: 4px solid #007bff;
}

.dropdown-icon {
  font-size: 14px;
  transition: transform 0.3s ease;
  color: #6c757d;
}

.nav-item.has-children.active .dropdown-icon {
  transform: rotate(180deg);
  color: #007bff;
}

/* Mobile dropdown styles - simple accordion */
.mobile-menu .dropdown-menu {
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  max-height: 0 !important;
  overflow: hidden !important;
  transition: max-height 0.3s ease !important;
  display: block !important;
}

.mobile-menu .dropdown-menu.active {
  max-height: 500px !important;
  overflow: visible !important;
  display: block !important;
}

.mobile-menu .dropdown-menu li {
  border-bottom: 1px solid #f1f3f4 !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.mobile-menu .dropdown-menu li:last-child {
  border-bottom: none !important;
}

.mobile-menu .dropdown-menu .dropdown-link {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 18px 24px 18px 40px !important;
  color: #2c3e50 !important;
  text-decoration: none !important;
  font-weight: 500 !important;
  font-size: 16px !important;
  transition: all 0.2s ease !important;
  cursor: pointer !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.mobile-menu .dropdown-menu .dropdown-link:hover {
  background: #f8f9fa !important;
  color: #007bff !important;
}

/* Desktop dropdown styles - matching original theme */
.main-menu .navigation > li.dropdown > a {
  padding-right: 10px;
}

/* Only show dropdown indicator for items that actually have children */
.main-menu .navigation > li.dropdown > a:after {
  position: absolute;
  right: -2px;
  top: 50%;
  margin-top: -10px;
  font-family: "Font Awesome 5 Free";
  content: "\f0d7";
  display: block;
  line-height: 20px;
  font-size: 12px;
  font-weight: 900;
  color: #222222;
  z-index: 5;
}

/* White dropdown indicators for other pages (header-style-two) */
.header-style-two .main-menu .navigation > li.dropdown > a:after {
  color: #ffffff;
}

.desktop-dropdown {
  position: absolute;
  top: 100%;
  left: -15px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 0;
  opacity: 0;
  z-index: 1;
  min-width: 200px;
  transition: all 0.5s;
  transform: translateY(50px);
  box-shadow: 0px 7px 10px -1px rgba(0, 0, 0, 0.2);
}

.desktop-dropdown:before {
  position: absolute;
  left: 20px;
  top: -8px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #ffffff;
  content: "";
}

.main-menu .navigation > li.dropdown:hover .desktop-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translate(0px);
}

.desktop-dropdown li {
  position: relative;
  display: block;
  z-index: 1;
}

.desktop-dropdown li:last-child {
  border-bottom: none;
}

.desktop-dropdown a {
  position: relative;
  display: block;
  padding: 10px 30px;
  z-index: 1;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #363636;
  white-space: nowrap;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.desktop-dropdown a:hover {
  color: #1370b5;
}

.dropdown-item {
  border-bottom: 1px solid #e9ecef;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 14px 40px;
  color: #495057;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.dropdown-link:hover {
  background: #e9ecef;
  color: #007bff;
}

.dropdown-item.current .dropdown-link {
  background: #e3f2fd;
  color: #007bff;
}

.sub-dropdown-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  background: #e9ecef;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.sub-dropdown-menu.active {
  max-height: 300px;
}

.sub-dropdown-item {
  border-bottom: 1px solid #dee2e6;
}

.sub-dropdown-item:last-child {
  border-bottom: none;
}

.sub-dropdown-link {
  display: block;
  padding: 12px 24px 12px 56px;
  color: #6c757d;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.sub-dropdown-link:hover {
  background: #dee2e6;
  color: #007bff;
}

.mobile-menu-footer {
  padding: 20px 24px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  margin-top: auto;
}

.appointment-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 20px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.appointment-btn:hover {
  background: #0056b3;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
}

.appointment-btn .fa-calendar {
  font-size: 18px;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .menu-box {
    width: 100%;
  }
  
  .menu-header {
    padding: 16px;
  }
  
  .nav-link {
    padding: 16px 20px;
    font-size: 15px;
  }
  
  .dropdown-link {
    padding: 12px 20px 12px 36px;
    font-size: 14px;
  }
  
  .sub-dropdown-link {
    padding: 10px 20px 10px 48px;
    font-size: 13px;
  }
  
  .mobile-menu-footer {
    padding: 16px 20px;
  }
  
  .appointment-btn {
    padding: 12px 16px;
    font-size: 15px;
  }
}
</style>
