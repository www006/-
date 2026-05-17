<script setup>
import { ref } from 'vue'
import { useCountUp } from '../composables/index.js'

const { observe } = useCountUp()
const searchText = ref('')
</script>

<template>
  <section id="hero" class="relative h-screen min-h-[700px] flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(29,133,207,0.85)] via-[rgba(142,197,232,0.5)] via-[rgba(45,117,166,0.6)] to-[rgba(1,21,46,0.85)]"></div>
    <div class="absolute inset-0 z-0 bg-[url('/样式图/背景图.png')] bg-center bg-cover bg-no-repeat"></div>
    <!-- Overlay -->
    <div class="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>

    <div class="relative z-10 w-full max-w-[1200px] mx-auto px-6">
      <div class="max-w-[800px] text-white">
        <p class="text-[18px] font-light tracking-[6px] uppercase mb-5 opacity-90 animate-fadeIn">探索世界，发现美好</p>
        <h1 class="font-serif text-[56px] font-bold leading-[1.15] mb-6 animate-fadeIn [animation-delay:0.1s]">
          寻找属于你的
          <span class="block text-[#FFD166]">旅行故事</span>
        </h1>
        <p class="text-[18px] font-light leading-[1.8] mb-9 opacity-85 max-w-[600px] animate-fadeIn [animation-delay:0.2s]">
          从雄伟的山川到蔚蓝的海洋，从古老的文化到现代的繁华，让我们一起踏上探索世界的旅程。
        </p>

        <!-- Search -->
        <div class="mb-[50px] animate-fadeIn [animation-delay:0.3s]">
          <div class="flex items-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full p-[6px] max-w-[500px] transition-all duration-300 focus-within:bg-white/25 focus-within:border-white/40">
            <i class="fas fa-search text-white/70 text-[16px] px-4"></i>
            <input
              v-model="searchText"
              type="text"
              placeholder="搜索目的地、景点或攻略..."
              class="flex-1 py-3 text-[15px] bg-transparent text-white placeholder:text-white/60 outline-none"
            />
            <button class="px-6 py-3 bg-white text-primary text-[14px] font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300">探索</button>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex gap-12 animate-fadeIn [animation-delay:0.4s]">
          <div class="flex flex-wrap items-baseline gap-0.5" v-for="s in [{n:500,l:'精选目的地'},{n:12000,l:'满意旅客'},{n:150,l:'合作酒店'}]" :key="s.l">
            <span :ref="el => { if(el && s.n) observe(el) }" :data-count="s.n" class="font-serif text-[36px] font-bold">0</span>
            <span class="text-[26px] font-bold text-accent">+</span>
            <span class="w-full text-[13px] text-white/75 tracking-wider">{{ s.l }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 text-[13px] tracking-widest animate-[bounce_2s_infinite]">
      <span>向下探索</span>
      <i class="fas fa-chevron-down text-[14px]"></i>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 0.8s ease both; }
</style>
