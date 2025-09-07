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
                  <h2 class="text-reveal-anim">Departments Of {{ department.name }}</h2>
                  <span class="theme_color">{{ department.description }}</span>
                </div>
                <p>Resofus combines MR imaging and focused ultrasound into MR guided Focused Ultrasound technology, and provides a transcranial, non-invasive image-guided personalized treatment modality with no incisions and with no ionizing radiation.</p>
                <p>This combination of continuous MR imaging and very highly focused acoustic sound waves provides the ability to provide pinpoint precision treatment at the planned target, without causing damage to any of the normal surrounding tissue. This precise local lesioning stops the improper transfer of electrical signals that induce the tremor, and it stops.</p>
                
                <!-- Two Column -->
                <div class="two-column">
                  <div class="row">
                    <div class="image-column col-xl-6 col-lg-12 col-md-12">
                      <figure class="image">
                        <a href="/images/resource/post-img.jpg" class="lightbox-image">
                          <img src="/images/resource/post-img.jpg" alt="">
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

                <h3>Why Choose This Service</h3>
                <p>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful anyone who loves or pursues.</p>

                <!--Product Info Tabs-->
                <div class="product-info-tabs">
                  <!--Product Tabs-->
                  <div class="prod-tabs tabs-box">
                    <!--Tab Btns-->
                    <ul class="tab-btns tab-buttons clearfix">
                      <li data-tab="#prod-details" class="tab-btn active-btn">Precautions</li>
                      <li data-tab="#prod-spec" class="tab-btn">Intelligence</li>
                      <li data-tab="#prod-reviews" class="tab-btn">Specializations</li>
                    </ul>
                    
                    <!--Tabs Container-->
                    <div class="tabs-content">
                      <!--Tab / Active Tab-->
                      <div class="tab active-tab" id="prod-details">
                        <div class="content">
                          <p>Suspendisse laoreet at nulla id auctor. Maecenas in dui cursus, lacinia nisl non, blandit lorem. Aliquam vel risus hendrerit, faucibus nisl a, porta sapien. Etiam iaculis mattis quam, nec iaculis velit feugiat quis. Pellentesque sed feugiat dui, ac euismod leo.</p>
                        </div>
                      </div>
                      
                      <!--Tab -->
                      <div class="tab" id="prod-spec">
                        <div class="content">
                          <p>Suspendisse laoreet at nulla id auctor. Maecenas in dui cursus, lacinia nisl non, blandit lorem. Aliquam vel risus hendrerit, faucibus nisl a, porta sapien. Etiam iaculis mattis quam, nec iaculis velit feugiat quis. Pellentesque sed feugiat dui, ac euismod leo.</p>
                        </div>
                      </div>
                      
                      <!--Tab-->
                      <div class="tab" id="prod-reviews">
                        <div class="content">
                          <p>Suspendisse laoreet at nulla id auctor. Maecenas in dui cursus, lacinia nisl non, blandit lorem. Aliquam vel risus hendrerit, faucibus nisl a, porta sapien. Etiam iaculis mattis quam, nec iaculis velit feugiat quis. Pellentesque sed feugiat dui, ac euismod leo.</p>
                        </div>
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
              <div class="brochures-box">
                <div class="inner">
                  <h4>Download Brochures</h4>
                  <div class="text">Etiam tortor lorem, auctor ut orci ut, vehicula ultricies mauris. scelerisque gravida.</div>
                  <a class="theme-btn btn-style-one" href="#">
                    <span class="btn-title"><i class="fa fa-file-pdf"></i> Info Company</span>
                  </a>
                  <a class="theme-btn btn-style-one" href="#">
                    <span class="btn-title"><i class="fa fa-file-pdf"></i> Brochure Newest</span>
                  </a>
                </div>
              </div>

              <div class="help-box">
                <span>Quick Contact</span>
                <h4>Get Solution</h4>
                <p>Contact us at the Medicoz office nearest to you or submit a business inquiry online.</p>
                <router-link to="/contact" class="theme-btn btn-style-one">
                  <span class="btn-title">Contact</span>
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
