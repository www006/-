<script setup>
import { services } from '../data/index.js'
import { useScrollReveal } from '../composables/index.js'

const { observe } = useScrollReveal()
</script>

<template>
  <section id="services" class="py-[100px] bg-light-alt">
    <div class="max-w-[1200px] mx-auto px-6">
      <div :ref="el => observe(el)" class="text-center mb-[52px] reveal">
        <p class="inline-block text-[13px] font-semibold text-primary tracking-[3px] uppercase mb-3">
          <span class="inline-block w-[30px] h-[2px] bg-primary align-middle mr-2.5"></span>
          服务特色
          <span class="inline-block w-[30px] h-[2px] bg-primary align-middle ml-2.5"></span>
        </p>
        <h2 class="font-serif text-[38px] font-bold text-dark leading-[1.3] mb-[14px]">专业服务，让旅行更简单</h2>
        <p class="text-[16px] text-text-light max-w-[600px] mx-auto">从行程规划到旅途保障，我们为您提供全方位的专业旅行服务。</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(s, i) in services"
          :key="s.id"
          :ref="el => observe(el)"
          :class="['reveal', `reveal-delay-${i + 1}`]"
        >
          <div class="bg-white p-[40px_30px] rounded-xl text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-md group">
            <div class="w-[72px] h-[72px] mx-auto mb-6 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-[30px] text-white transition-all duration-500 group-hover:animate-pulse">
              <i :class="['fas', s.icon]"></i>
            </div>
            <h3 class="text-[19px] font-semibold text-dark mb-[14px]">{{ s.title }}</h3>
            <p class="text-[15px] text-text-light leading-[1.7] mb-[18px]">{{ s.desc }}</p>
            <a href="#" class="text-[14px] font-semibold text-primary inline-flex items-center gap-1.5 transition-all duration-300 hover:text-primary-dark group/link">
              了解更多 <i class="fas fa-arrow-right text-[12px] transition-transform duration-300 group-hover/link:translate-x-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
