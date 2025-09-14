<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Departments</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Departments</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!--Sidebar Page Container-->
    <div class="sidebar-page-container">
      <div class="auto-container">
        <div class="row clearfix">
          <!--Content Side / Our Blog-->
          <div class="content-side col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2">
            <div class="service-detail">
              <div class="images-box">
                <figure class="image wow fadeIn">
                  <a :href="department.image" class="lightbox-image" data-fancybox="services">
                    <img :src="department.image" :alt="department.name">
                  </a>
                </figure>
              </div>

              <div class="content-box">
                <div class="title-box">
                  <h2 class="text-reveal-anim">{{ department.name }} Department</h2>
                  <span class="theme_color">{{ department.description }}</span>
                </div>
                <div v-html="departmentContent.mainDescription"></div>
                
                <!-- Two Column -->
                <div class="two-column">
                  <div class="row">
                    <div class="image-column col-xl-6 col-lg-12 col-md-12">
                      <figure class="image">
                        <a :href="department.secondaryImage" class="lightbox-image">
                          <img :src="department.secondaryImage" :alt="department.name">
                        </a>
                      </figure>
                    </div>
                    <div class="text-column col-xl-6 col-lg-12 col-md-12">
                      <p>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness.</p>
                      <ul class="list-style-one">
                        <li v-for="service in department.services" :key="service">{{ service }}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>Why Choose Our {{ department.name }} Department</h3>
                <div v-html="departmentContent.whyChoose"></div>

                <!--Product Info Tabs-->
                <div class="product-info-tabs">
                  <!--Product Tabs-->
                  <div class="prod-tabs tabs-box">
                    <!--Tab Btns-->
                    <ul class="tab-btns tab-buttons clearfix">
                      <li data-tab="#prod-details" class="tab-btn active-btn">{{ departmentContent.tabs.tab1.title }}</li>
                      <li data-tab="#prod-spec" class="tab-btn">{{ departmentContent.tabs.tab2.title }}</li>
                      <li data-tab="#prod-reviews" class="tab-btn">{{ departmentContent.tabs.tab3.title }}</li>
                    </ul>
                    
                    <!--Tabs Container-->
                    <div class="tabs-content">
                      <!--Tab / Active Tab-->
                      <div class="tab active-tab" id="prod-details">
                        <div class="content" v-html="departmentContent.tabs.tab1.content"></div>
                      </div>
                      
                      <!--Tab -->
                      <div class="tab" id="prod-spec">
                        <div class="content" v-html="departmentContent.tabs.tab2.content"></div>
                      </div>
                      
                      <!--Tab-->
                      <div class="tab" id="prod-reviews">
                        <div class="content" v-html="departmentContent.tabs.tab3.content"></div>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Sidebar Side-->
          <div class="sidebar-side col-xl-3 col-lg-4 col-md-12 col-sm-12">
            <aside class="sidebar services-sidebar">
              <!-- Category Widget -->
              <div class="sidebar-widget categories">
                <div class="widget-content">
                  <!-- Services Category -->
                  <ul class="services-categories">
                    <li><router-link to="/departments">All Departments</router-link></li>
                    <li v-for="dept in departments" :key="dept.id" :class="{ active: dept.id === department.id }">
                      <router-link :to="`/department/${dept.slug}`">{{ dept.name }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!--Brochures Box-->
              <div v-if="department.brochures && department.brochures.length > 0" class="brochures-box">
                <div class="inner">
                  <h4>Download Brochures</h4>
                  <div class="text">Download our comprehensive guides and information about {{ department.name }} services.</div>
                  <a v-for="brochure in department.brochures" :key="brochure.title" 
                     class="theme-btn btn-style-one" 
                     :href="brochure.url" 
                     target="_blank">
                    <span class="btn-title"><i class="fa fa-file-pdf"></i> {{ brochure.title }}</span>
                  </a>
                </div>
              </div>

              <div class="help-box">
                <span>Quick Contact</span>
                <h4>Need Help?</h4>
                <p>Have questions about {{ department.name }} services? Contact our team for personalized assistance and expert guidance.</p>
                <router-link to="/contact" class="theme-btn btn-style-one">
                  <span class="btn-title">Contact Us</span>
                </router-link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <!-- End Sidebar Page Container -->

    <!-- Services Section -->
    <section class="services-section-two">
      <div class="auto-container">
        <div class="carousel-outer">
          <div class="swiper service-swiper">
            <div class="swiper-wrapper">
              <!-- Service Block -->
              <div v-for="dept in departments" :key="dept.id" class="service-block-two swiper-slide">
                <div class="inner-box">
                  <div class="image-box">
                    <figure class="image">
                      <router-link :to="`/department/${dept.slug}`">
                        <img :src="dept.image" :alt="dept.name">
                      </router-link>
                    </figure>
                  </div>
                  <div class="lower-content">
                    <div class="title-box">
                      <span :class="`icon ${dept.icon}`"></span>
                      <h4>
                        <router-link :to="`/department/${dept.slug}`">{{ dept.name }} Department</router-link>
                      </h4> 
                    </div>
                    <div class="text">{{ dept.description }}</div>
                    <span :class="`icon-right ${dept.icon}`"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import departmentsData from '@/data/departments.json'

const route = useRoute()
const departments = ref(departmentsData)

// Get department by name from route params or default to first department
const department = ref(departments.value[0])

// Department-specific content - now comes from JSON
const departmentContent = ref({
  mainDescription: '',
  whyChoose: '',
  tabs: {
    tab1: { title: '', content: '' },
    tab2: { title: '', content: '' },
    tab3: { title: '', content: '' }
  }
})

// Function to set department-specific content from JSON
const setDepartmentContent = (dept: any) => {
  if (dept.content) {
    departmentContent.value = dept.content
  } else {
    // Fallback content if no content is defined in JSON
    departmentContent.value = {
      mainDescription: `<p>Our ${dept.name} Department provides comprehensive medical services with state-of-the-art facilities and experienced healthcare professionals.</p>`,
      whyChoose: `<p>Our ${dept.name} Department offers advanced medical care with experienced specialists and modern technology.</p>`,
      tabs: {
        tab1: { title: 'Services', content: `<p>Our ${dept.name} services include comprehensive medical care.</p>` },
        tab2: { title: 'Treatment', content: `<p>We provide advanced treatment options for ${dept.name} conditions.</p>` },
        tab3: { title: 'Specializations', content: `<p>Our ${dept.name} specialists focus on various medical conditions.</p>` }
      }
    }
  }
}

// Function to find and set department based on route
const setDepartmentFromRoute = () => {
  let departmentName = route.params.name as string
  
  // If no name param, try to get from route name or path
  if (!departmentName) {
    departmentName = route.name as string || route.path.split('/').pop() || ''
  }
  
  if (departmentName) {
    const foundDepartment = departments.value.find(d => 
      d.name.toLowerCase() === departmentName.toLowerCase() ||
      d.slug === departmentName ||
      d.slug === departmentName.toLowerCase()
    )
    
    if (foundDepartment) {
      department.value = foundDepartment
      setDepartmentContent(foundDepartment)
    }
  }
}

// Watch for route changes
watch(() => route.params.name, () => {
  setDepartmentFromRoute()
})

watch(() => route.name, () => {
  setDepartmentFromRoute()
})

watch(() => route.path, () => {
  setDepartmentFromRoute()
})

onMounted(() => {
  setDepartmentFromRoute()
  
  // Set initial content if no department found
  if (!department.value || department.value.id === departments.value[0].id) {
    setDepartmentContent(departments.value[0])
  }

  // Initialize interactive components
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$
    
    // Wait for libraries to load
    setTimeout(() => {
      // Initialize tabs functionality
      if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(this: HTMLElement, e: Event) {
          e.preventDefault()
          const $this = $(this)
          const target = $($this.attr('data-tab'))
          
          if (target.is(':visible')) {
            return false
          } else {
            target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn')
            $this.addClass('active-btn')
            target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0)
            target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn')
            target.fadeIn(300)
            target.addClass('active-tab animated fadeIn')
          }
        })
      }

      // Initialize lightbox for images
      if ($('.lightbox-image').length && typeof $.fn.fancybox === 'function') {
        $('.lightbox-image').fancybox({
          openEffect: 'fade',
          closeEffect: 'fade',
          helpers: {
            media: {}
          }
        })
      }

      // Initialize Swiper for related services
      if ($('.service-swiper').length && typeof (window as any).Swiper === 'function') {
        new (window as any).Swiper(".service-swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }
        })
      }
    }, 100) // Small delay to ensure libraries are loaded
  }
})
</script>
