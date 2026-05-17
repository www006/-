import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  )

  function observe(el) {
    if (el) observer.observe(el)
  }

  onUnmounted(() => observer.disconnect())

  return { observe }
}

export function useCountUp() {
  const counters = ref([])

  function animateCounter(el, target) {
    const duration = 2000
    const start = performance.now()
    function update(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.floor(eased * target)
      if (progress < 1) requestAnimationFrame(update)
      else el.textContent = target
    }
    requestAnimationFrame(update)
  }

  function initCounters(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const count = parseInt(el.dataset.count, 10)
        animateCounter(el, count)
        observer.unobserve(el)
        counters.value.push(el)
      }
    })
  }

  const observer = new IntersectionObserver(initCounters, { threshold: 0.5 })

  function observe(el) {
    if (el) observer.observe(el)
  }

  onUnmounted(() => observer.disconnect())

  return { observe, animateCounter }
}

export function useCarousel() {
  const current = ref(0)
  let timer = null

  function start(itemsLength) {
    timer = setInterval(() => {
      current.value = (current.value + 1) % itemsLength
    }, 4000)
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null }
  }

  onUnmounted(() => stop())

  return { current, start, stop }
}

export function useScrollHeader() {
  const scrolled = ref(false)

  function handleScroll() {
    scrolled.value = window.scrollY > 60
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  return { scrolled }
}

export function useMobileNav() {
  const open = ref(false)

  function toggle() { open.value = !open.value }
  function close() { open.value = false }

  return { open, toggle, close }
}
