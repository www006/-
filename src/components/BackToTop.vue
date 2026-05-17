<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
function handleScroll() { visible.value = window.scrollY > 500 }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <button
    v-show="visible"
    class="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center text-[18px] z-50 hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300"
    @click="scrollToTop"
    aria-label="回到顶部"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>
