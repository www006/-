<script setup>
import { useCountUp, useScrollReveal } from '../composables/index.js'
import { stats } from '../data/index.js'
const { observe: observeCount } = useCountUp()
const { observe: observeReveal } = useScrollReveal()
</script>

<template>
  <section :ref="el => observeReveal(el)" class="py-20 bg-gradient-to-br from-dark to-dark-light reveal">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <div v-for="(s, i) in stats" :key="s.id" :class="['text-white reveal', `reveal-delay-${i + 1}`]" :ref="el => { if(el) observeReveal(el) }">
          <i :class="['fas', s.icon, 'text-[40px] text-accent mb-4']"></i>
          <span :ref="el => { if(el && s.count) observeCount(el) }" :data-count="s.count" class="font-serif text-[48px] font-bold block mb-2">0</span>
          <span class="text-[16px] text-white/70 tracking-wider">{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
