<script setup>
import { useCarousel, useScrollReveal } from '../composables/index.js'
import { testimonials } from '../data/index.js'

const { current, start } = useCarousel()
const { observe } = useScrollReveal()
start(testimonials.length)
</script>

<template>
  <section id="testimonials" class="py-[100px] bg-white">
    <div class="max-w-[1200px] mx-auto px-6">
      <div :ref="el => observe(el)" class="text-center mb-[52px] reveal">
        <p class="inline-block text-[13px] font-semibold text-primary tracking-[3px] uppercase mb-3">
          <span class="inline-block w-[30px] h-[2px] bg-primary align-middle mr-2.5"></span>
          用户评价
          <span class="inline-block w-[30px] h-[2px] bg-primary align-middle ml-2.5"></span>
        </p>
        <h2 class="font-serif text-[38px] font-bold text-dark leading-[1.3] mb-[14px]">听听他们怎么说</h2>
        <p class="text-[16px] text-text-light max-w-[600px] mx-auto">来自真实用户的旅行体验分享，他们的满意是我们最大的动力。</p>
      </div>

      <div :ref="el => observe(el)" class="max-w-[700px] mx-auto overflow-hidden reveal reveal-delay-1">
        <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${current * 100}%)` }">
          <div v-for="t in testimonials" :key="t.id" class="flex-[0_0_100%] px-5 text-center">
            <div class="text-accent text-[18px] tracking-[4px] mb-[22px]">
              <i v-for="i in 5" :key="i" class="fas fa-star"></i>
            </div>
            <p class="text-[17px] leading-[1.8] text-text mb-[30px] italic">"{{ t.text }}"</p>
            <div class="flex items-center justify-center gap-4">
              <img :src="t.avatar" :alt="t.user" class="w-14 h-14 rounded-full border-3 border-primary-light" />
              <div class="text-left">
                <p class="font-semibold text-text">{{ t.user }}</p>
                <p class="text-[13px] text-text-light">来自 {{ t.location }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-3 mt-8">
          <button
            v-for="(t, i) in testimonials"
            :key="t.id"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              current === i ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400',
            ]"
            @click="current = i"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
