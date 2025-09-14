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

    <!-- Services Section -->
    <section class="services-section-two">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">Our Departments</span>
          <h2 class="text-reveal-anim">Medical Departments</h2>
          <span class="divider"></span>
        </div>

        <div class="row">
          <!-- Service Block -->
          <div v-for="dept in paginatedDepartments" :key="dept.id" class="service-block-two col-lg-4 col-md-6 col-sm-12">
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

        <!-- Styled Pagination -->
        <ul v-if="totalPages > 1" class="styled-pagination">
          <li :class="{ disabled: currentPage === 1 }">
            <a href="#" @click.prevent="goToPage(currentPage - 1)" :class="{ disabled: currentPage === 1 }">
              <span class="fa fa-angle-left"></span>
            </a>
          </li>
          
          <li v-for="page in visiblePages" :key="page" :class="{ active: page === currentPage }">
            <a href="#" @click.prevent="goToPage(page)">{{ page }}</a>
          </li>
          
          <li :class="{ disabled: currentPage === totalPages }">
            <a href="#" @click.prevent="goToPage(currentPage + 1)" :class="{ disabled: currentPage === totalPages }">
              <span class="fa fa-angle-right"></span>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <!-- End Services Section -->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import departmentsData from '@/data/departments.json'

const departments = ref(departmentsData)
const currentPage = ref(1)
const itemsPerPage = 6 // Show 6 departments per page (2 rows of 3)

// Computed properties for pagination
const totalPages = computed(() => Math.ceil(departments.value.length / itemsPerPage))

const paginatedDepartments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return departments.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value
  
  // Show up to 5 page numbers
  let start = Math.max(1, current - 2)
  let end = Math.min(total, start + 4)
  
  // Adjust start if we're near the end
  if (end - start < 4) {
    start = Math.max(1, end - 4)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// Navigation functions
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Scroll to top of departments section
    const departmentsSection = document.querySelector('.services-section-two')
    if (departmentsSection) {
      departmentsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.styled-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 5px;
}

.styled-pagination li {
  list-style: none;
  margin: 0 2px;
}

.styled-pagination li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f8f9fa;
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.styled-pagination li a:hover:not(.disabled) {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.styled-pagination li.active a {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.styled-pagination li.disabled a,
.styled-pagination li a.disabled {
  background: #f8f9fa;
  color: #ccc;
  cursor: not-allowed;
  border-color: #e9ecef;
}

.styled-pagination li.disabled a:hover,
.styled-pagination li a.disabled:hover {
  background: #f8f9fa;
  color: #ccc;
  border-color: #e9ecef;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .styled-pagination {
    margin-top: 30px;
  }
  
  .styled-pagination li a {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
}
</style>
