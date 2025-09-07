<template>
  <div class="page-wrapper">
    <AppHeader />
    
    <!--Page Title-->
    <section class="page-title" style="background-image: url(/images/background/8.jpg);">
      <div class="auto-container">
        <div class="title-outer">
          <h1>Login</h1>
          <ul class="page-breadcrumb">
            <li><router-link to="/">Home</router-link></li>
            <li>Login</li>
          </ul> 
        </div>
      </div>
    </section>
    <!--End Page Title-->

    <!-- Login Section -->
    <section class="login-section">
      <div class="auto-container">
        <div class="row clearfix">
          <div class="column col-lg-6 col-md-6 col-sm-12">
            <!-- Login Form -->
            <div class="login-form">
              <h2>Login</h2>
              <!--Login Form-->
              <form @submit.prevent="submitLogin">
                <div class="form-group">
                  <label>Username or Email</label>
                  <input type="text" v-model="loginForm.username" placeholder="Name or Email" required>
                </div>
                
                <div class="form-group">
                  <label>Enter Your Password</label>
                  <input type="password" v-model="loginForm.password" placeholder="Password" required>
                </div>
                
                <div class="form-group">
                  <input type="checkbox" v-model="loginForm.remember" id="account-option-1">&nbsp; 
                  <label for="account-option-1">Remember me</label>
                </div>

                <div class="form-group">
                  <button class="theme-btn btn-style-one" type="submit" :disabled="isLoggingIn">
                    <span class="btn-title">{{ isLoggingIn ? 'LOGGING IN...' : 'LOGIN' }}</span>
                  </button>
                </div>

                <div class="form-group pass">
                  <a href="#" class="psw">Lost your password?</a>
                </div>
              </form>
            </div>
            <!--End Login Form -->
          </div>
          
          <div class="column col-lg-6 col-md-6 col-sm-12">
            <!-- Register Form -->
            <div class="login-form register-form">
              <h2>Register</h2>
              <!--Register Form-->
              <form @submit.prevent="submitRegister">
                <div class="form-group">
                  <label>User Name</label>
                  <input type="text" v-model="registerForm.username" placeholder="Your Name" required>
                </div>

                <div class="form-group">
                  <label>Email Address</label>
                  <input type="email" v-model="registerForm.email" placeholder="Your Email" required>
                </div>
                
                <div class="form-group">
                  <label>Your Password</label>
                  <input type="password" v-model="registerForm.password" placeholder="Password" required>
                </div>
                
                <div class="form-group text-right">
                  <button class="theme-btn btn-style-one" type="submit" :disabled="isRegistering">
                    <span class="btn-title">{{ isRegistering ? 'REGISTERING...' : 'Register' }}</span>
                  </button>
                </div>
              </form>      
            </div>
            <!--End Register Form -->
          </div>
        </div>
      </div>
    </section>
    <!--End Login Section-->

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const isLoggingIn = ref(false)
const isRegistering = ref(false)

const loginForm = reactive({
  username: '',
  password: '',
  remember: false
})

const registerForm = reactive({
  username: '',
  email: '',
  password: ''
})

const submitLogin = async () => {
  isLoggingIn.value = true
  
  try {
    console.log('Login submitted:', loginForm)
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Login successful!')
    
    // Reset form
    loginForm.username = ''
    loginForm.password = ''
    loginForm.remember = false
  } catch (error) {
    console.error('Error logging in:', error)
    alert('Login failed. Please try again.')
  } finally {
    isLoggingIn.value = false
  }
}

const submitRegister = async () => {
  isRegistering.value = true
  
  try {
    console.log('Register submitted:', registerForm)
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Registration successful!')
    
    // Reset form
    registerForm.username = ''
    registerForm.email = ''
    registerForm.password = ''
  } catch (error) {
    console.error('Error registering:', error)
    alert('Registration failed. Please try again.')
  } finally {
    isRegistering.value = false
  }
}
</script>
