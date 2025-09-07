<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Pricing Plans</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Pricing</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="auto-container">
        <div class="tabs-box outer-box">
          <!--Tabs Box-->
          <ul class="tab-buttons clearfix">
            <li class="tab-btn active-btn" data-tab="#tab1">Monthly</li>
            <li class="tab-btn" data-tab="#tab2">Yearly</li>
          </ul>

          <div class="tabs-content">
            <!--Tab-->
            <div class="tab active-tab" id="tab1">
              <div class="row">
                <!-- Pricing Block -->
                <div class="pricing-block col-lg-3 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="price-box">
                      <h4 class="price">$299</h4>
                      <div class="validaty">Per Month</div>
                    </div>
                    <h3 class="title">Cardiology</h3>
                    <ul class="features">
                      <li>Functional Diagnotics</li>
                      <li>Allergens Drugs</li>
                      <li>Pollen Allergens</li>
                      <li>Food Allergens</li>
                    </ul>
                    <div class="btn-box">
                      <a href="#" class="theme-btn">Get Offer</a>
                    </div>
                  </div>
                </div>

                <!-- Pricing Block -->
                <div class="pricing-block col-lg-3 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="price-box">
                      <h4 class="price">$120</h4>
                      <div class="validaty">Per Month</div>
                    </div>
                    <h3 class="title">Dental Care</h3>
                    <ul class="features">
                      <li>Tooth implantation</li>
                      <li>Lase Dentistry</li>
                      <li>Tests and Treatment</li>
                      <li>Medical Consultation</li>
                    </ul>
                    <div class="btn-box">
                      <a href="#" class="theme-btn">Get Offer</a>
                    </div>
                  </div>
                </div>

                <!-- Pricing Block -->
                <div class="pricing-block col-lg-3 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="price-box">
                      <h4 class="price">$150</h4>
                      <div class="validaty">Per Month</div>
                    </div>
                    <h3 class="title">Body Checkup</h3>
                    <ul class="features">
                      <li>Tests and Treatment</li>
                      <li>Tests and Treatment</li>
                      <li>Laboratory Services</li>
                      <li>Food Allergens</li>
                    </ul>
                    <div class="btn-box">
                      <a href="#" class="theme-btn">Get Offer</a>
                    </div>
                  </div>
                </div>

                <!-- Pricing Block -->
                <div class="pricing-block col-lg-3 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="price-box">
                      <h4 class="price">$100</h4>
                      <div class="validaty">Per Month</div>
                    </div>
                    <h3 class="title">Blood Test</h3>
                    <ul class="features">
                      <li>Blood Test Service</li>
                      <li>Safety Training Tips</li>
                      <li>Tests and Treatment</li>
                      <li>Food Allergens</li>
                    </ul>
                    <div class="btn-box">
                      <a href="#" class="theme-btn">Get Offer</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Tab-->
            <div class="tab" id="tab2">
              <div class="row">
                <!-- Pricing Block -->
                <div class="pricing-block col-lg-3 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="price-box">
                      <h4 class="price">$2,999</h4>
                      <div class="validaty">Per Year</div>
                    </div>
                    <h3 class="title">Cardiology</h3>
                    <ul class="features">
                      <li>Functional Diagnotics</li>
                      <li>Allergens Drugs</li>
                      <li>Pollen Allergens</li>
                      <li>Food Allergens</li>
                    </ul>
                    <div class="btn-box">
                      <a href="#" class="theme-btn">Get Offer</a>
                    </div>
                  </div>
                </div>

                <!-- Pricing Block -->
                <div class="pricing-block col-lg-3 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="price-box">
                      <h4 class="price">$1,200</h4>
                      <div class="validaty">Per Year</div>
                    </div>
                    <h3 class="title">Dental Care</h3>
                    <ul class="features">
                      <li>Tooth implantation</li>
                      <li>Lase Dentistry</li>
                      <li>Tests and Treatment</li>
                      <li>Medical Consultation</li>
                    </ul>
                    <div class="btn-box">
                      <a href="#" class="theme-btn">Get Offer</a>
                    </div>
                  </div>
                </div>

                <!-- Pricing Block -->
                <div class="pricing-block col-lg-3 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="price-box">
                      <h4 class="price">$1,500</h4>
                      <div class="validaty">Per Year</div>
                    </div>
                    <h3 class="title">Body Checkup</h3>
                    <ul class="features">
                      <li>Tests and Treatment</li>
                      <li>Tests and Treatment</li>
                      <li>Laboratory Services</li>
                      <li>Food Allergens</li>
                    </ul>
                    <div class="btn-box">
                      <a href="#" class="theme-btn">Get Offer</a>
                    </div>
                  </div>
                </div>

                <!-- Pricing Block -->
                <div class="pricing-block col-lg-3 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="price-box">
                      <h4 class="price">$1,000</h4>
                      <div class="validaty">Per Year</div>
                    </div>
                    <h3 class="title">Blood Test</h3>
                    <ul class="features">
                      <li>Blood Test Service</li>
                      <li>Safety Training Tips</li>
                      <li>Tests and Treatment</li>
                      <li>Food Allergens</li>
                    </ul>
                    <div class="btn-box">
                      <a href="#" class="theme-btn">Get Offer</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Pricing Section -->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

onMounted(() => {
  // Initialize tabs functionality
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$
    
    // Tabs Box
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

    // Initialize GSAP ScrollTrigger animations
    if (typeof (window as any).gsap !== 'undefined' && typeof (window as any).ScrollTrigger !== 'undefined') {
      const gsap = (window as any).gsap
      const ScrollTrigger = (window as any).ScrollTrigger
      
      gsap.registerPlugin(ScrollTrigger)
      
      // Initialize text reveal animations
      const textRevealElements = document.querySelectorAll('.text-reveal-anim')
      if (textRevealElements.length) {
        textRevealElements.forEach((element) => {
          if (typeof (window as any).SplitType !== 'undefined') {
            const SplitType = (window as any).SplitType
            const split = new SplitType(element as HTMLElement, {
              types: 'chars'
            })
            
            gsap.from(split.chars, {
              scrollTrigger: {
                trigger: element,
                start: 'top 75%',
                end: 'top 25%',
                scrub: true,
                duration: 0.5
              },
              opacity: 0.1,
              stagger: 5,
              ease: 'back.out'
            })
          }
        })
      }
    }
  }
})
</script>
