<script setup>
import { destinations } from '../data/index.js'
import { useScrollReveal } from '../composables/index.js'

const { observe } = useScrollReveal()
</script>

<template>
  <section id="destinations" class="py-[100px] bg-light">
    <div class="max-w-[1200px] mx-auto px-6">
      <div :ref="el => observe(el)" class="text-center mb-[52px] reveal">
        <p class="inline-block text-[13px] font-semibold text-primary tracking-[3px] uppercase mb-3">
          <span class="inline-block w-[30px] h-[2px] bg-primary align-middle mr-2.5"></span>
          热门目的地
          <span class="inline-block w-[30px] h-[2px] bg-primary align-middle ml-2.5"></span>
        </p>
        <h2 class="font-serif text-[38px] font-bold text-dark leading-[1.3] mb-[14px]">探索热门目的地</h2>
        <p class="text-[16px] text-text-light max-w-[600px] mx-auto">精选全球最受欢迎的旅行目的地，每一处都是不可错过的风景。</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(d, i) in destinations"
          :key="d.id"
          :ref="el => observe(el)"
          :class="['reveal', `reveal-delay-${i + 1}`]"
        >
          <div class="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2.5 hover:shadow-lg">
            <div class="relative h-[220px] overflow-hidden">
              <img :src="d.img" :alt="d.name" class="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" />
              <span :class="['absolute top-4 left-4 px-3.5 py-1 text-[12px] font-semibold text-white rounded-full tracking-wider', d.badgeClass || 'bg-accent']">{{ d.badge }}</span>
            </div>
            <div class="p-[22px_22px_22px]">
              <p class="flex items-center gap-1.5 text-[13px] text-text-light mb-2">
                <i class="fas fa-map-marker-alt text-primary text-[12px]"></i>
                {{ d.location }}
              </p>
              <h3 class="text-[19px] font-semibold text-dark mb-2">{{ d.name }}</h3>
              <p class="text-[14px] text-text-light leading-[1.6] mb-[14px]">{{ d.desc }}</p>
              <div class="flex items-center justify-between pt-[14px] border-t border-border">
                <span class="font-serif text-[20px] font-bold text-primary">¥{{ d.price }} <small class="text-[13px] font-normal text-text-lighter">/人</small></span>
                <span class="text-[13px] text-text-light flex items-center gap-1">
                  <i class="fas fa-star text-accent text-[12px]"></i>
                  {{ d.rating }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :ref="el => observe(el)" class="text-center mt-14 reveal reveal-delay-5">
        <a href="#" class="inline-flex items-center gap-2.5 px-[30px] py-[14px] bg-primary text-white text-[15px] font-semibold rounded hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
          查看全部目的地 <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>
