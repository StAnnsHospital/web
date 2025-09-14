<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    <AppHeader />

    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/gallery-header-bg.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Gallery</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Gallery</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio-section alternate">
      <div class="auto-container">
        <div class="mixitup-gallery">
          <div class="btns-outer">
            <ul class="filter-tabs filter-btns clearfix">
              <li
                v-for="filter in uiFilters"
                :key="filter.key"
                :class="['filter', { active: filter.key === activeFilter }]"
                data-role="button"
                :data-filter="filter.key === 'all' ? 'all' : '.' + filter.key"
                @click.prevent="setFilter(filter.key)"
              >
                {{ filter.label }}
              </li>
            </ul>
          </div>

          <div class="filter-list row mid-spacing">
            <div
              v-for="item in filteredItems"
              :key="item.id"
              :class="['portfolio-block', 'col-lg-4', 'col-md-6', 'col-sm-12', ...item.filters]"
            >
              <div class="image-box">
                <figure class="image"><img :src="item.image" :alt="item.title" /></figure>
                <div class="overlay">
                  <a :href="item.image" class="icon-box lightbox-image" data-fancybox="gallery">
                    <span class="fa fa-expand"></span>
                  </a>
                  <div class="title-box">
                    <h5>{{ item.title }}</h5>
                    <div class="cat">
                      <template v-for="(tag, idx) in item.tags" :key="tag">
                        <a href="#">{{ tag }}</a><span v-if="idx < item.tags.length - 1">,</span>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- /.filter-list -->
        </div>
        <div class="btn-box">
          <a href="#" class="theme-btn btn-style-three load-more"><span class="btn-title">Load More</span></a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import rawItems from '@/data/galleryItems.json'

// Allow vendor globals used by legacy scripts to be accessed safely from TS
declare global {
  interface Window {
    $?: any
    mixitup?: any
    __mixitupInstance?: { filter?: (selector: string) => void }
  }
}

const galleryItems = ref(rawItems)

const activeFilter = ref('all')

// Filtering is driven by Vue's computed `filteredItems` to avoid conflicts with vendor DOM plugins.
// Build UI-friendly filter list (keeps 'all' first)
const uiFilters = computed(() => {
  const set = new Set<string>()
  galleryItems.value.forEach(i => i.filters.forEach((f: string) => set.add(f)))
  const keys = ['all', ...Array.from(set)]
  return keys.map(k => ({
    key: k,
    label: k === 'all' ? 'All' : k.replace(/[-_]/g, ' ').replace(/\b\w/g, s => s.toUpperCase())
  }))
})

// Filtered items for Vue-driven filtering fallback (works when MixItUp isn't present)
const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return galleryItems.value
  return galleryItems.value.filter(i => Array.isArray(i.filters) && i.filters.includes(activeFilter.value))
})



const setFilter = (key: string) => {
  // Pure Vue-driven filter: update the active filter and let `filteredItems` recompute.
  activeFilter.value = key
}

onMounted(() => {
  // Small delay for vendor libraries to attach
  setTimeout(() => {
    if (typeof window === 'undefined') return
    // Initialize Fancybox if available
    try {
      if (window.$ && window.$.fn && typeof window.$.fn.fancybox === 'function') {
        window.$('.lightbox-image').fancybox({
          openEffect: 'fade',
          closeEffect: 'fade'
        })
      }
    } catch {
      // ignore
    }
  }, 120)
})
</script>
