<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <!-- Coming Soon -->
    <section class="coming-soon" style="background-image: url(/images/background/9.jpg);">
      <div class="">
        <div class="row">
          <div class="content-column col-lg-7 offset-6 col-md-12 order-2">
            <div class="content">
              <div class="content-inner">
                <div class="logo"><router-link to="/"><img src="/images/logo.png" alt="" /></router-link></div>
                <h2>We Are Working</h2>
                <h4>How long you ask? We are going live on!</h4>
                <div class="time-counter">
                  <!-- Time Countdown -->
                  <div class="time-countdown clearfix" data-countdown="2027/11/1"></div>
                </div>                            

                <!--Emailed Form-->
                <div class="emailed-form">
                  <div class="text">stay tuned for something amazing! Subscribe to be notified</div>
                  <form @submit.prevent="subscribeNewsletter">
                    <div class="form-group">
                      <input type="email" v-model="email" placeholder="Your Email" required>
                      <button type="submit"><span class="fa fa-paper-plane"></span></button>
                    </div>
                  </form>
                </div>
                <ul class="social-icon-one">
                  <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                  <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                  <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                  <li><a href="#"><span class="fab fa-linkedin-in"></span></a></li>
                  <li><a href="#"><span class="fab fa-whatsapp"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="image-column col-lg-5 col-md-12">
            <div class="bg-shape"></div>
            <figure class="image"><img src="/images/resource/cs-img.png" alt=""></figure>
            <!-- Clock / Bg Clock -->
            <div class="clock-wrapper">
              <div class="clock-base">
                <div class="click-indicator">
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                  <div><span></span></div>
                </div>
                <div class="clock-hour"></div>
                <div class="clock-minute"></div>
                <div class="clock-second"></div>
                <div class="clock-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Coming Soon -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const email = ref('')
let countdownInterval: number

const subscribeNewsletter = () => {
  if (email.value) {
    alert('Thank you for subscribing! We\'ll notify you when we launch.')
    email.value = ''
  }
}

onMounted(() => {
  // Initialize countdown timer
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$
    
    // Initialize countdown
    if ($('.time-countdown').length && typeof $.fn.countdown === 'function') {
      $('.time-countdown').countdown('2027/11/1', function(this: HTMLElement, event: any) {
        const $this = $(this).html(event.strftime('' +
          '<div class="counter-column"><div class="inner"><span class="count">%D</span><div class="text">Days</div></div></div> ' +
          '<div class="counter-column"><div class="inner"><span class="count">%H</span><div class="text">Hours</div></div></div> ' +
          '<div class="counter-column"><div class="inner"><span class="count">%M</span><div class="text">Minutes</div></div></div> ' +
          '<div class="counter-column"><div class="inner"><span class="count">%S</span><div class="text">Seconds</div></div></div>'
        ))
      })
    }

    // Initialize clock animation
    if ($('.clock-base').length) {
      const updateClock = () => {
        const now = new Date()
        const hours = now.getHours() % 12
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()
        
        const hourAngle = (hours * 30) + (minutes * 0.5)
        const minuteAngle = minutes * 6
        const secondAngle = seconds * 6
        
        $('.clock-hour').css('transform', `rotate(${hourAngle}deg)`)
        $('.clock-minute').css('transform', `rotate(${minuteAngle}deg)`)
        $('.clock-second').css('transform', `rotate(${secondAngle}deg)`)
      }
      
      updateClock()
      countdownInterval = setInterval(updateClock, 1000)
    }
  }
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>
