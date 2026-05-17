<script setup>
import { ref, inject } from 'vue'
import { useScrollHeader } from '../composables/index.js'

const { scrolled } = useScrollHeader()
const mobileOpen = ref(false)
const hoveredNav = ref(null)
const openPanel = ref(null)

const toggleLogin = inject('goToLogin', () => {})

const navItems = [
  {
    label: '浏览发现',
    groups: [
      {
        title: '目的地浏览',
        items: [
          { icon: 'fa-mountain', text: '景点大全', desc: '按省份、城市、景区类型分类浏览' },
          { icon: 'fa-book-open', text: '游记广场', desc: '用户旅游心得发布与旅途文案分享' },
          { icon: 'fa-map-signs', text: '攻略专区', desc: '出行路线规划、省钱技巧与避坑指南' },
          { icon: 'fa-utensils', text: '美食探店', desc: '各地特色美食分享及美食打卡测评' },
        ],
      },
      {
        title: '热点推荐',
        items: [
          { icon: 'fa-fire', text: '本周热门', desc: '本周最受欢迎的目的地推荐' },
          { icon: 'fa-tag', text: '特惠活动', desc: '限时优惠，精选线路低至8折' },
        ],
      },
    ],
  },
  {
    label: '社交出游',
    groups: [
      {
        title: '出游方式',
        items: [
          { icon: 'fa-home', text: '首页', desc: '热门景点展示与最新游记推荐', href: '#hero' },
          { icon: 'fa-user-friends', text: '结伴同行', desc: '拼游组队发布与同城/异地找旅友' },
          { icon: 'fa-city', text: '同城游玩推荐', desc: '本地周边游玩推荐' },
          { icon: 'fa-compass', text: '热门景点展示', desc: '精选热门目的地展示' },
        ],
      },
    ],
  },
  {
    label: '社区交流',
    groups: [
      {
        title: '社区互动',
        items: [
          { icon: 'fa-comments', text: '评论留言区', desc: '景点评论互动与游记留言点评' },
          { icon: 'fa-question-circle', text: '问答社区', desc: '旅游问题提问与出行经验解答' },
          { icon: 'fa-heart', text: '心愿旅行地', desc: '用户心仪目的地投票与热门榜单' },
        ],
      },
    ],
  },
  {
    label: '决策反馈',
    groups: [
      {
        title: '用户反馈',
        items: [
          { icon: 'fa-vote-yea', text: '投票选地点', desc: '热门旅行地与节假日出游地点投票' },
          { icon: 'fa-exclamation-triangle', text: '吐槽避雷', desc: '景区踩坑吐槽与旅游消费差评反馈' },
        ],
      },
    ],
  },
  {
    label: '出行准备',
    groups: [
      {
        title: '行前必备',
        items: [
          { icon: 'fa-cloud-sun', text: '出行天气', desc: '目的地实时天气查询与出行预判推荐' },
          { icon: 'fa-train', text: '交通指南', desc: '高铁、飞机、自驾出行攻略及路线规划' },
          { icon: 'fa-hotel', text: '住宿推荐', desc: '优质酒店推荐测评与特色民宿打卡分享' },
        ],
      },
    ],
  },
  {
    label: '游玩服务',
    groups: [
      {
        title: '游玩服务',
        items: [
          { icon: 'fa-ticket-alt', text: '门票预约', desc: '各大景区线上购票与入园预约入口' },
          { icon: 'fa-calendar-alt', text: '旅游日历', desc: '节假日出游推荐与月度优质旅行方案' },
        ],
      },
    ],
  },
]

function togglePanel(label) {
  openPanel.value = openPanel.value === label ? null : label
}

function closePanel() {
  openPanel.value = null
}

function toggleMobile() { mobileOpen.value = !mobileOpen.value }
function closeMobile() { mobileOpen.value = false }

</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 shadow-[0_1px_20px_rgba(0,0,0,0.08)]' : 'bg-black/20 backdrop-blur-md',
    ]"
  >
    <div class="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
      <!-- LOGO -->
      <a href="#" class="flex items-center gap-2.5 z-[1001] flex-shrink-0">
        <i :class="['fas fa-globe-asia text-[28px] transition-colors', scrolled ? 'text-primary' : 'text-white']"></i>
        <span :class="['font-serif text-[24px] font-bold transition-colors', scrolled ? 'text-dark' : 'text-white']">旅行家</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden lg:block h-full">
        <ul class="flex items-center h-full gap-0">
          <li
            v-for="item in navItems"
            :key="item.label"
            class="relative h-full flex items-center"
            @mouseenter="hoveredNav = item.label"
            @mouseleave="hoveredNav = null"
          >
            <div
              class="flex items-center gap-0.5 px-3.5 py-2 rounded-md cursor-pointer transition-all duration-200"
              :class="[
                scrolled
                  ? 'text-text/80 hover:text-primary hover:bg-primary/6'
                  : 'text-white/85 hover:text-white hover:bg-white/10',
                openPanel === item.label && (scrolled ? 'bg-primary/8 text-primary' : 'bg-white/12 text-white'),
              ]"
              @click="togglePanel(item.label)"
            >
              <span class="text-[14px] font-medium tracking-wide">{{ item.label }}</span>
              <i
                :class="[
                  'fas fa-chevron-down text-[8px] transition-all duration-300',
                  openPanel === item.label ? 'opacity-60 rotate-180' : 'opacity-0',
                  hoveredNav === item.label && openPanel !== item.label ? '!opacity-35' : '',
                ]"
              ></i>
            </div>
          </li>
        </ul>
      </nav>

      <!-- User Area (Desktop) -->
      <div class="hidden lg:flex items-center gap-1.5 ml-auto pl-6 z-[1001] flex-shrink-0">
        <a
          href="#"
          :class="[
            'flex items-center gap-1.5 px-3.5 py-[6px] text-[13px] font-semibold rounded-full transition-all duration-200 whitespace-nowrap',
            scrolled ? 'text-text/70 hover:text-primary hover:bg-primary/6' : 'text-white/80 hover:text-white hover:bg-white/10',
          ]"
          @click.prevent="toggleLogin"
        >
          <i class="fas fa-user-circle text-[16px]"></i>
          登录
        </a>
        <a
          :href="'#'"
          :class="[
            'flex items-center gap-1.5 px-3.5 py-[6px] text-[13px] font-semibold rounded-full transition-all duration-200 whitespace-nowrap',
            scrolled ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-white/90 text-primary hover:bg-white hover:shadow-md',
          ]"
        >
          注册
        </a>
      </div>

      <!-- Hamburger -->
      <button
        class="lg:hidden flex flex-col justify-center gap-[5px] w-[30px] h-[30px] z-[1001] cursor-pointer"
        @click="toggleMobile"
        :aria-label="mobileOpen ? '关闭菜单' : '打开菜单'"
      >
        <span :class="['block w-full h-[2px] rounded-sm transition-all duration-300', mobileOpen && 'rotate-45 translate-x-[5px] translate-y-[5px]', scrolled || mobileOpen ? 'bg-dark' : 'bg-white']"></span>
        <span :class="['block w-full h-[2px] rounded-sm transition-all duration-300', mobileOpen && 'opacity-0', scrolled || mobileOpen ? 'bg-dark' : 'bg-white']"></span>
        <span :class="['block w-full h-[2px] rounded-sm transition-all duration-300', mobileOpen && '-rotate-45 translate-x-[5px] -translate-y-[5px]', scrolled || mobileOpen ? 'bg-dark' : 'bg-white']"></span>
      </button>
    </div>
  </header>

  <!-- ====== Half-Page Panel Overlay ====== -->
  <div
    v-if="openPanel"
    class="fixed inset-0 z-40 bg-black/10"
    @click="closePanel"
  ></div>

  <Transition name="panel">
    <div
      v-if="openPanel"
      class="fixed left-0 right-0 z-40 flex justify-center overflow-hidden"
      :style="{ top: '80px', height: '52vh' }"
    >
      <div
        class="w-full h-full border-b border-white/15"
        :class="[
          'backdrop-blur-2xl backdrop-saturate-150',
          scrolled ? 'bg-white/70' : 'bg-white/60',
        ]"
        @click.stop
      >
        <div class="max-w-[1200px] mx-auto px-6 h-full flex items-stretch">
          <div class="flex gap-16 w-full py-10">
            <div
              v-for="(group, gi) in (navItems.find(i => i.label === openPanel)?.groups || [])"
              :key="gi"
              :class="gi === 0 ? 'flex-1' : 'flex-1 pl-12 border-l border-gray-100'"
            >
              <h4
                v-if="(navItems.find(i => i.label === openPanel)?.groups?.length || 0) > 1"
                class="text-xs font-bold text-primary/60 uppercase tracking-[2px] mb-6"
              >
                {{ group.title }}
              </h4>
              <ul class="space-y-1">
                <li v-for="sub in group.items" :key="sub.text">
                  <a
                    :href="sub.href || '#'"
                    class="flex items-center gap-5 px-4 py-3.5 rounded-xl transition-all duration-200 hover:bg-primary/5 group/item"
                  >
                    <span class="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary text-base group-hover/item:bg-primary group-hover/item:text-white transition-all duration-200">
                      <i :class="['fas', sub.icon]"></i>
                    </span>
                    <span class="flex-1 min-w-0">
                      <span class="block text-[15px] font-medium text-text/90 group-hover/item:text-primary transition-colors duration-200">{{ sub.text }}</span>
                      <span class="block text-[13px] text-text-lighter mt-0.5">{{ sub.desc }}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- ====== Mobile ====== -->

  <!-- Mobile Overlay -->
  <div
    :class="['fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden', mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible']"
    @click="closeMobile"
  ></div>

  <!-- Mobile Drawer -->
  <div
    :class="[
      'fixed top-0 right-0 w-[280px] h-full bg-white shadow-lg z-50 transition-all duration-300 lg:hidden overflow-y-auto',
      mobileOpen ? 'translate-x-0' : 'translate-x-full',
    ]"
  >
    <div class="pt-24 px-8 pb-10">
      <ul class="flex flex-col gap-1">
        <li v-for="item in navItems" :key="item.label" class="mb-2">
          <span class="block text-[11px] font-bold text-primary uppercase tracking-[2px] px-4 py-2">{{ item.label }}</span>
          <ul>
            <li v-for="sub in item.groups.flatMap(g => g.items)" :key="sub.text">
              <a
                :href="sub.href || '#'"
                class="flex items-center gap-3 px-4 py-2.5 text-[14px] font-medium text-text/80 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200"
                @click="closeMobile"
              >
                <span class="w-7 h-7 rounded-md bg-primary/8 flex items-center justify-center text-primary text-[12px] flex-shrink-0">
                  <i :class="['fas', sub.icon]"></i>
                </span>
                <span>
                  <span class="block">{{ sub.text }}</span>
                  <span class="block text-[11px] text-text-lighter">{{ sub.desc }}</span>
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="mt-6 pt-4 border-t border-gray-100 px-4 flex flex-col gap-2">
        <a href="#" class="flex items-center gap-3 py-2.5 text-[14px] font-medium text-text/70 hover:text-primary" @click.prevent="toggleLogin()">
          <i class="fas fa-user-circle text-primary/60 w-5 text-center"></i>
          登录
        </a>
        <a href="#" class="flex items-center justify-center gap-2 py-2.5 text-[14px] font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark mt-1">
          注册
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.panel-enter-active {
  transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
}

.panel-leave-active {
  transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
}

.panel-enter-from {
  opacity: 0 !important;
  transform: translateY(-24px) !important;
}

.panel-leave-to {
  opacity: 0 !important;
  transform: translateY(-24px) !important;
}

.nav-arrow-hint {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.nav-item-hover:hover .nav-arrow-hint {
  opacity: 0.35 !important;
}
</style>
