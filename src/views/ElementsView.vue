<template>
  <div class="page-wrapper">
    <!-- Preloader -->
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>UI Elements</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>UI Elements</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <div class="auto-container">
      <!-- Typography -->
      <div class="sec-title">
        <h2>Typography</h2>
        <span class="divider"></span>
      </div>
      <div class="row">
        <div class="col-lg-12 mb-5">
          <div class="typography">
            <h1>Heading 1</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <h2>Heading 2</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <h3>Heading 3</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <h4>Heading 4</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <h5>Heading 5</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <h6>Heading 6</h6>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
        </div>
      </div>
      <hr class="divider-one">
      <!-- End typography -->

      <!-- Info Boxes -->
      <div class="sec-title">
        <h2>Info Boxes</h2>
        <span class="divider"></span>
      </div>            
      <div class="row mb-5">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="message-box with-icon info">
            <div class="icon-box"><span class="icon fa fa-info"></span></div>   
            <p>Far far away, behind the word mountains</p>
            <a href="#" class="close-btn"><span class="icon fa fa-times"></span></a>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="message-box with-icon success">
            <div class="icon-box"><span class="icon fa fa-check"></span></div>   
            <p>Far far away, behind the word mountains</p>
            <a href="#" class="close-btn"><span class="icon fa fa-times"></span></a>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="message-box with-icon warning">
            <div class="icon-box"><span class="icon fa fa-exclamation"></span></div>   
            <p>Far far away, behind the word mountains</p>
            <a href="#" class="close-btn"><span class="icon fa fa-times"></span></a>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="message-box with-icon error">
            <div class="icon-box"><span class="icon fa fa-exclamation-triangle"></span></div>   
            <p>Far far away, behind the word mountains</p>
            <a href="#" class="close-btn"><span class="icon fa fa-times"></span></a>
          </div>
        </div>
      </div>
      <hr class="divider-one">
      <!-- End Info Boxes -->

      <!-- Accordion -->
      <div class="sec-title">
        <h2>Accordions</h2>
        <span class="divider"></span>
      </div>
      <div class="row mb-5">
        <div class="column col-lg-6 col-md-12 col-sm-12">
          <!--Accordian Box-->
          <ul class="accordion-box">
            <!--Block-->
            <li class="accordion block">
              <div class="acc-btn"> I can't remember my user id and/or password, can you reset it? <span class="icon fa fa-chevron-down"></span></div>
              <div class="acc-content">
                <div class="content">
                  <p>Track your results on the local or global market , depending on your needs. You can track everything in the most popular search engines - and increase traffic with our turn-key.</p>
                </div>
              </div>
            </li>

            <!--Block-->
            <li class="accordion block active-block">
              <div class="acc-btn active">How can I find out who is the hiring manager or lead recruiter. <span class="icon fa fa-chevron-down"></span></div>
              <div class="acc-content current">
                <div class="content">
                  <p>Track your results on the local or global market , depending on your needs. You can track everything in the most popular search engines - and increase traffic with our turn-key.</p>
                </div>
              </div>
            </li>
            
            <!--Block-->
            <li class="accordion block">
              <div class="acc-btn">Nam I have several accounts, can they be purged or deleted? <span class="icon fa fa-chevron-down"></span></div>
              <div class="acc-content">
                <div class="content">
                  <p>Track your results on the local or global market , depending on your needs. You can track everything in the most popular search engines - and increase traffic with our turn-key.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="column col-lg-6 col-md-12 col-sm-12">
          <!--Accordian Box-->
          <ul class="accordion-box style-two">
            <!--Block-->
            <li class="accordion block">
              <div class="acc-btn"> I can't remember my user id and/or password, can you reset it? <span class="icon fa fa-chevron-down"></span></div>
              <div class="acc-content">
                <div class="content">
                  <p>Track your results on the local or global market , depending on your needs. You can track everything in the most popular search engines - and increase traffic with our turn-key.</p>
                </div>
              </div>
            </li>

            <!--Block-->
            <li class="accordion block active-block">
              <div class="acc-btn active">How can I find out who is the hiring manager or lead recruiter. <span class="icon fa fa-chevron-down"></span></div>
              <div class="acc-content current">
                <div class="content">
                  <p>Track your results on the local or global market , depending on your needs. You can track everything in the most popular search engines - and increase traffic with our turn-key.</p>
                </div>
              </div>
            </li>
            
            <!--Block-->
            <li class="accordion block">
              <div class="acc-btn">Nam I have several accounts, can they be purged or deleted? <span class="icon fa fa-chevron-down"></span></div>
              <div class="acc-content">
                <div class="content">
                  <p>Track your results on the local or global market , depending on your needs. You can track everything in the most popular search engines - and increase traffic with our turn-key.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr class="divider-one">
      <!--End Accordion -->

      <!-- Tabs -->
      <div class="sec-title">
        <h2>Tabs</h2>
        <span class="divider"></span>
      </div>
      <div class="row mb-5">
        <div class="column col-lg-6 col-md-12 col-sm-12">
          <div class="default-tabs tabs-box">
            <!--Tabs Box-->
            <ul class="tab-buttons clearfix">
              <li class="tab-btn" data-tab="#tab1">Item 1</li>
              <li class="tab-btn active-btn" data-tab="#tab2">Item 2</li>
              <li class="tab-btn" data-tab="#tab3">Item 3</li>
            </ul>

            <div class="tabs-content">
              <!--Tab-->
              <div class="tab" id="tab1">
                <p>Sed bibendum quis orci sit amet fringilla. Suspendisse nec massa at sem condimentum rutrum id cursus odio. Phasellus sollicitudin ante vitae erat posuere faucibus. Pellentesque nec tristique purus. In dapibus fermentum nibh, ut imperdiet magna volutpat in. Vestibulum semper eleifend augue ac consectetur. Pellentesque tempus sit amet massa et rutrum.</p>
              </div>

              <!--Tab-->
              <div class="tab active-tab" id="tab2">
                <p>Sed bibendum quis orci sit amet fringilla. Suspendisse nec massa at sem condimentum rutrum id cursus odio. Phasellus sollicitudin ante vitae erat posuere faucibus. Pellentesque nec tristique purus. In dapibus fermentum nibh, ut imperdiet magna volutpat in. Vestibulum semper eleifend augue ac consectetur. Pellentesque tempus sit amet massa et rutrum.</p>
              </div>

              <!--Tab-->
              <div class="tab" id="tab3">
                <p>Sed bibendum quis orci sit amet fringilla. Suspendisse nec massa at sem condimentum rutrum id cursus odio. Phasellus sollicitudin ante vitae erat posuere faucibus. Pellentesque nec tristique purus. In dapibus fermentum nibh, ut imperdiet magna volutpat in. Vestibulum semper eleifend augue ac consectetur. Pellentesque tempus sit amet massa et rutrum.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column col-lg-6 col-md-12 col-sm-12">
          <div class="default-tabs style-two tabs-box">
            <!--Tabs Box-->
            <ul class="tab-buttons clearfix">
              <li class="tab-btn" data-tab="#tab4">Item 1</li>
              <li class="tab-btn active-btn" data-tab="#tab5">Item 2</li>
              <li class="tab-btn" data-tab="#tab6">Item 3</li>
            </ul>

            <div class="tabs-content">
              <!--Tab-->
              <div class="tab" id="tab4">
                <p>Sed bibendum quis orci sit amet fringilla. Suspendisse nec massa at sem condimentum rutrum id cursus odio. Phasellus sollicitudin ante vitae erat posuere faucibus. Pellentesque nec tristique purus. In dapibus fermentum nibh, ut imperdiet magna volutpat in. Vestibulum semper eleifend augue ac consectetur. Pellentesque tempus sit amet massa et rutrum.</p>
              </div>

              <!--Tab-->
              <div class="tab active-tab" id="tab5">
                <p>Sed bibendum quis orci sit amet fringilla. Suspendisse nec massa at sem condimentum rutrum id cursus odio. Phasellus sollicitudin ante vitae erat posuere faucibus. Pellentesque nec tristique purus. In dapibus fermentum nibh, ut imperdiet magna volutpat in. Vestibulum semper eleifend augue ac consectetur. Pellentesque tempus sit amet massa et rutrum.</p>
              </div>

              <!--Tab-->
              <div class="tab" id="tab6">
                <p>Sed bibendum quis orci sit amet fringilla. Suspendisse nec massa at sem condimentum rutrum id cursus odio. Phasellus sollicitudin ante vitae erat posuere faucibus. Pellentesque nec tristique purus. In dapibus fermentum nibh, ut imperdiet magna volutpat in. Vestibulum semper eleifend augue ac consectetur. Pellentesque tempus sit amet massa et rutrum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="divider-one">
      <!--End Tabs -->

      <!-- Buttons -->
      <div class="sec-title">
        <h2>Buttons</h2>
        <span class="divider"></span>
      </div>
      <div class="row mb-5">
        <div class="col-lg-12">
          <div class="button-group">
            <a href="#" class="theme-btn btn-style-one"><span class="btn-title">Button Style One</span></a>
            <a href="#" class="theme-btn btn-style-two"><span class="btn-title">Button Style Two</span></a>
            <a href="#" class="theme-btn btn-style-three"><span class="btn-title">Button Style Three</span></a>
            <a href="#" class="theme-btn btn-style-four"><span class="btn-title">Button Style Four</span></a>
          </div>
        </div>
      </div>
      <hr class="divider-one">
      <!--End Buttons -->

      <!-- Progress Bars -->
      <div class="sec-title">
        <h2>Progress Bars</h2>
        <span class="divider"></span>
      </div>
      <div class="row mb-5">
        <div class="col-lg-12">
          <div class="skills">
            <!--Skill Item-->
            <div class="skill-item">
              <div class="skill-header clearfix">
                <div class="skill-title">CARDIO-ONCOLOGY</div>
                <div class="skill-percentage"><div class="count-box"><span class="count-text" data-speed="3000" data-stop="55">0</span>%</div></div>
              </div>
              <div class="skill-bar">
                <div class="bar-inner"><div class="bar progress-line" data-width="55"></div></div>
              </div>
            </div>

            <!--Skill Item-->
            <div class="skill-item">
              <div class="skill-header clearfix">
                <div class="skill-title">HEART ASSESSMENT</div>
                <div class="skill-percentage"><div class="count-box"><span class="count-text" data-speed="3000" data-stop="72">0</span>%</div></div>
              </div>
              <div class="skill-bar">
                <div class="bar-inner"><div class="bar progress-line" data-width="72"></div></div>
              </div>
            </div>

            <!--Skill Item-->
            <div class="skill-item">
              <div class="skill-header clearfix">
                <div class="skill-title">Dental SURGERY</div>
                <div class="skill-percentage"><div class="count-box"><span class="count-text" data-speed="3000" data-stop="88">0</span>%</div></div>
              </div>
              <div class="skill-bar">
                <div class="bar-inner"><div class="bar progress-line" data-width="88"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="divider-one">
      <!--End Progress Bars -->
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

onMounted(() => {
  // Initialize accordion functionality
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$
    
    // Accordion Box
    if ($('.accordion-box').length) {
      $(".accordion-box").on('click', '.acc-btn', function(this: HTMLElement) {
        const $this = $(this)
        const outerBox = $this.parents('.accordion-box')
        const target = $this.parents('.accordion')
        
        if (!$this.hasClass('active')) {
          $(outerBox).find('.accordion .acc-btn').removeClass('active ')
        }
        
        if ($this.next('.acc-content').is(':visible')) {
          return false
        } else {
          $this.addClass('active')
          $(outerBox).children('.accordion').removeClass('active-block')
          $(outerBox).find('.accordion').children('.acc-content').slideUp(300)
          target.addClass('active-block')
          $this.next('.acc-content').slideDown(300)
        }
      })
    }

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

    // Progress bars animation - using appear function
    if ($('.count-box').length && typeof $.fn.appear === 'function') {
      $('.count-box').appear(function(this: HTMLElement) {
        const $this = $(this)
        const countTo = $this.find('.count-text').attr('data-stop')
        const speed = parseInt($this.find('.count-text').attr('data-speed') || '3000', 10)
        
        if (!$this.hasClass('counted')) {
          $this.addClass('counted')
          $({ countNum: $this.find('.count-text').text() }).animate({
            countNum: countTo
          }, {
            duration: speed,
            easing: 'linear',
            step: function(this: any) {
              $this.find('.count-text').text(Math.floor(this.countNum))
            },
            complete: function(this: any) {
              $this.find('.count-text').text(this.countNum)
            }
          })
        }
      }, { accY: 0 })
    }

    // Progress line animation - using appear function
    if ($('.progress-line').length && typeof $.fn.appear === 'function') {
      $('.progress-line').appear(function(this: HTMLElement) {
        const $this = $(this)
        const width = $this.attr('data-width')
        $this.css('width', width + '%')
      }, { accY: 0 })
    }
  }
})
</script>
