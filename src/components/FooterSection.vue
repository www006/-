<script setup>
import { footerLinks } from '../data/index.js'
import { useScrollReveal } from '../composables/index.js'
const { observe } = useScrollReveal()
</script>

<template>
  <footer :ref="el => observe(el)" class="bg-dark text-white/80 pt-20 pb-0 reveal">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 pb-[50px] border-b border-white/10">
        <div :ref="el => observe(el)" class="reveal reveal-delay-1">
          <a href="#" class="flex items-center gap-2.5 font-serif text-[24px] font-bold text-white mb-[18px]">
            <i class="fas fa-globe-asia text-accent"></i> 旅行家
          </a>
          <p class="text-[15px] leading-[1.8] mb-6 text-white/60">探索世界之美，发现旅行乐趣。专业旅行规划服务，让每一次旅行都成为难忘的回忆。</p>
          <div class="flex gap-3">
            <a v-for="s in ['fa-weixin', 'fa-weibo', 'fa-qq']" :key="s" href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-[18px] hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300">
              <i :class="['fab', s]"></i>
            </a>
          </div>
        </div>

        <div :ref="el => observe(el)" class="reveal reveal-delay-2">
          <h4 class="text-[17px] font-semibold text-white mb-5 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-primary">热门目的地</h4>
          <ul class="space-y-3">
            <li v-for="d in footerLinks.destinations" :key="d">
              <a href="#" class="text-[15px] text-white/60 hover:text-primary hover:pl-1 transition-all duration-300">{{ d }}</a>
            </li>
          </ul>
        </div>

        <div :ref="el => observe(el)" class="reveal reveal-delay-3">
          <h4 class="text-[17px] font-semibold text-white mb-5 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-primary">服务支持</h4>
          <ul class="space-y-3">
            <li v-for="s in footerLinks.support" :key="s">
              <a href="#" class="text-[15px] text-white/60 hover:text-primary hover:pl-1 transition-all duration-300">{{ s }}</a>
            </li>
          </ul>
        </div>

        <div :ref="el => observe(el)" class="reveal reveal-delay-4">
          <h4 class="text-[17px] font-semibold text-white mb-5 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-primary">联系我们</h4>
          <ul class="space-y-3">
            <li v-for="c in footerLinks.contact" :key="c.text">
              <span class="text-[15px] text-white/60 flex items-center gap-2.5">
                <i :class="['fas', c.icon, 'w-4 text-primary']"></i>
                {{ c.text }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-between py-7 text-[14px] text-white/50">
        <p>&copy; 2026 旅行家 Travel Explorer. All rights reserved.</p>
        <div class="flex gap-6 mt-3 lg:mt-0">
          <a href="#" class="text-white/50 hover:text-primary transition-all duration-300">隐私条款</a>
          <a href="#" class="text-white/50 hover:text-primary transition-all duration-300">用户协议</a>
          <a href="#" class="text-white/50 hover:text-primary transition-all duration-300">网站地图</a>
        </div>
      </div>
    </div>
  </footer>
</template>
