<script setup>
import { useScrollReveal } from '../composables/index.js'
const { observe } = useScrollReveal()
</script>

<template>
  <section :ref="el => observe(el)" class="py-[100px] text-center bg-gradient-to-br from-primary to-primary-dark reveal">
    <div class="max-w-[1200px] mx-auto px-6">
      <h2 :ref="el => observe(el)" class="font-serif text-[40px] font-bold text-white mb-4 reveal reveal-delay-1">准备好开始你的旅行了吗？</h2>
      <p :ref="el => observe(el)" class="text-[18px] text-white/85 mb-9 reveal reveal-delay-2">立即联系我们，让专业旅行顾问为您规划完美的旅程。</p>
      <div :ref="el => observe(el)" class="flex justify-center gap-5 reveal reveal-delay-3">
        <a href="#" class="inline-flex items-center gap-2 px-[30px] py-[14px] bg-white text-primary text-[15px] font-semibold rounded hover:bg-accent hover:text-white hover:-translate-y-0.5 transition-all duration-300">
          立即咨询 <i class="fas fa-arrow-right"></i>
        </a>
        <a href="#" class="inline-flex items-center gap-2 px-[30px] py-[14px] bg-transparent text-white border-2 border-white/60 text-[15px] font-semibold rounded hover:bg-white hover:text-primary transition-all duration-300">
          <i class="fas fa-phone"></i> 400-888-9999
        </a>
      </div>
    </div>
  </section>
</template>
