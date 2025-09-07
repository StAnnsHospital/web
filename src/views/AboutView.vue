<template>
  <div class="page-wrapper">
    <!-- Preloader handled globally -->
    
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">            
          <h1>About Us</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- About Section -->
    <section class="about-section">
      <div class="auto-container">
        <div class="row">
          <!-- Content Column -->
          <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div class="inner-column">
              <div class="sec-title">
                <span class="sub-title">OUR MEDICAL</span>
                <h2 class="text-reveal-anim">We're setting Standards in <br> Research what's more, <br> Clinical Care.</h2>
                <span class="divider"></span>
                <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
                <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
              </div>
              <div class="link-box">
                <figure class="signature"><img src="/images/resource/signature.png" alt=""></figure>
                <a href="#" class="theme-btn btn-style-one"><span class="btn-title">More About</span></a>
              </div>
            </div>
          </div>

          <!-- Images Column -->
          <div class="images-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="video-link">
                <a href="https://www.youtube.com/watch?v=4UvS3k8D4rs" class="play-btn lightbox-image" data-fancybox="images">
                  <span class="flaticon-play-button-1"></span>
                </a>
              </div>
              <figure class="image-1"><img src="/images/resource/image-1.png" alt=""></figure>
              <figure class="image-2"><img src="/images/resource/image-2.png" alt=""></figure>
              <figure class="image-3">
                <span class="hex"></span>
                <img src="/images/resource/image-3.png" alt="">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->
    
    <!-- Fun Fact Section Two-->
    <section class="fun-fact-section-two">
      <div class="auto-container">
        <div class="row">
          <!--Column-->
          <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div class="count-box">
              <div class="icon-box"><span class="icon flaticon-user-experience"></span></div>
              <h4 class="counter-title">Years of Experience</h4>
              <span class="count-text" data-speed="3000" data-stop="25">0</span>
            </div>
          </div>

          <!--Column-->
          <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
            <div class="count-box">
              <div class="icon-box"><span class="icon flaticon-team"></span></div>
              <h4 class="counter-title">Medical Specialties</h4>
              <span class="count-text" data-speed="3000" data-stop="470">0</span>
            </div>
          </div>

          <!--Column-->
          <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
            <div class="count-box">
              <div class="icon-box"><span class="icon flaticon-hospital"></span></div>
              <h4 class="counter-title">Medical Specialties</h4>
              <span class="count-text" data-speed="3000" data-stop="689">0</span>
            </div>
          </div>

          <!--Column-->
          <div class="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
            <div class="count-box">
              <div class="icon-box"><span class="icon flaticon-add-friend"></span></div>
              <h4 class="counter-title">Happy Patients</h4>
              <span class="count-text" data-speed="3000" data-stop="9036">0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Fun Fact Section Two -->

    <!-- Appointment Section Three -->
    <section class="appointment-section-three" style="background-image: url(/images/background/2.jpg);">
      <div class="auto-container">
        <div class="row">
          <!-- Content Column -->
          <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div class="inner-column">
              <span class="title">Need a Doctor for Check-up?</span>
              <h3 class="text-reveal-anim">Just Make an Appointment <br>and You're Done!</h3>
              <div class="text">Get Your Quote or Call: <strong>(0080) 123-453-789</strong></div>

              <div class="timetable-info">
                <h3>Opening Hours</h3>
                <ul class="timing-list">
                  <li>Monday - Thursday <span>08:00 - 20:00</span></li>
                  <li>Friday <span>09:00 - 19:00</span></li>
                  <li>Saturday - Thursday <span>09:00 - 18:00</span></li>
                  <li>Sunday - Thursday <span>09:00 - 18:00</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="form-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="appointment-form default-form">
                <!--Comment Form-->
                <form action="#" method="post" id="email-form">
                  <div class="form-group">
                    <div class="response"></div>
                  </div>

                  <div class="form-group">
                    <input type="text" name="username" placeholder="Your Name">
                  </div>

                  <div class="form-group">
                    <input type="email" name="email" placeholder="Your Email *">
                  </div>

                  <div class="form-group">
                    <input type="text" name="phone" placeholder="Your Phone">
                  </div>
                  
                  <div class="form-group">
                    <textarea name="contact_message" placeholder="Tell us about Patient"></textarea>
                  </div>
                  
                  <div class="form-group">
                    <button class="theme-btn btn-style-one" type="button" name="submit-form"><span class="btn-title">Submit Query</span></button>
                  </div>
                </form>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
    <!--End Appointment Section Three -->

    <!-- Team Section Two -->
    <section class="team-section-two alternate">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-title">MEET OUR EXPERIENCED TEAM</span>
          <h2 class="text-reveal-anim">Our Dedicated Doctors Team.</h2>
          <span class="divider"></span>
        </div>

        <div class="row">
          <DoctorCard v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
        </div>

        <div class="sec-bottom-text">Don't hesitate, contact us for better help and services. <a href="#">Explore all Dr. Team</a></div>
      </div>
    </section>
    <!--End Team Section -->

    <!-- Skill Section -->
    <section class="skill-section">
      <div class="outer-container clearfix">
        <div class="skill-column">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">BEST OF THE BEST</span>
              <h2 class="text-reveal-anim">High End Equipments.</h2>
              <span class="divider"></span>
              <div class="text">Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.</div>
            </div>

            <!--Skills-->
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

              <!--Skill Item-->
              <div class="skill-item">
                <div class="skill-header clearfix">
                  <div class="skill-title">HEART ASSESSMENT</div>
                  <div class="skill-percentage"><div class="count-box"><span class="count-text" data-speed="3000" data-stop="78">0</span>%</div></div>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner"><div class="bar progress-line" data-width="78"></div></div>
                </div>
              </div>
            </div>

            <div class="btn-box"><a href="#" class="theme-btn btn-style-three"><span class="btn-title">Learn More</span></a></div>
          </div>
        </div>

        <div class="image-column" style="background-image: url(/images/resource/image-7.jpg);">
          <div class="image-box">
            <figure class="image"><img src="/images/resource/image-7.jpg" alt=""></figure>
          </div>
        </div>
      </div>
    </section>
    <!--End Skill Section -->

    <TestimonialSlider />
    <ClientSlider />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import DoctorCard from '@/components/common/DoctorCard.vue'
import TestimonialSlider from '@/components/common/TestimonialSlider.vue'
import ClientSlider from '@/components/common/ClientSlider.vue'
import doctorsData from '@/data/doctors.json'

const doctors = ref(doctorsData)

onMounted(() => {
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
})
</script>