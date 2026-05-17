<script setup>
import { ref, provide, onMounted, onUnmounted, nextTick } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import DestinationsSection from './components/DestinationsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import StatsSection from './components/StatsSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'
import LoginPage from './components/LoginPage.vue'
import { loginApi } from './api/auth.js'

const showLogin = ref(false)
const loginRef = ref(null)
const transitionKey = ref(0)
let popStateHandler = null

function goToLogin() {
  if (showLogin.value) return
  showLogin.value = true
  transitionKey.value++
  history.pushState({ page: 'login' }, '')
}

function goToHome() {
  if (!showLogin.value) return
  showLogin.value = false
  transitionKey.value++
}

provide('showLogin', showLogin)
provide('goToLogin', goToLogin)
provide('goToHome', goToHome)

onMounted(() => {
  popStateHandler = () => {
    if (showLogin.value) {
      history.pushState({ page: 'login' }, '')
    }
  }
  window.addEventListener('popstate', popStateHandler)
})

onUnmounted(() => {
  if (popStateHandler) window.removeEventListener('popstate', popStateHandler)
})

async function handleLogin(payload) {
  loginRef.value?.setLoading(true)
  loginRef.value?.setError('')
  try {
    const res = await loginApi(payload)
    if (res.code === 0) {
      goToHome()
    } else {
      loginRef.value?.setError(res.message || '登录失败')
    }
  } catch (err) {
    loginRef.value?.setError(err.message || '网络错误，请稍后重试')
  } finally {
    loginRef.value?.setLoading(false)
  }
}
</script>

<template>
  <div id="app-root">
    <Transition name="page" mode="out-in">
      <div :key="'home-' + transitionKey" v-if="!showLogin">
        <NavBar />
        <HeroSection />
        <DestinationsSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
        <FooterSection />
        <BackToTop />
      </div>
      <div :key="'login-' + transitionKey" v-else>
        <LoginPage
          ref="loginRef"
          brand-name="旅行家"
          title="欢迎回来!"
          subtitle="登录您的旅行家账户"
          primary-color="#2D8BCF"
          @submit="handleLogin"
        />
      </div>
    </Transition>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from {
  opacity: 0;
  transform: scale(0.97) translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: scale(1.03) translateY(-8px);
}
</style>
