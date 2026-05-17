<template>
  <div class="page">
    <!-- Left: Brand + Characters -->
    <div class="left" :style="{ background: `linear-gradient(135deg, ${primaryColor}e6, ${primaryColor}, ${primaryColor}cc)` }">
      <div class="brand">
        <div class="brand-icon"><i class="fas fa-globe-asia text-[16px]"></i></div>
        <span>{{ brandName }}</span>
      </div>
      <div class="characters-area">
        <AnimatedCharacters
          :is-typing="isTyping"
          :has-secret="!!password"
          :secret-visible="showPassword"
        />
      </div>
      <div class="footer-links">
        <a href="#" @click.prevent="goHome">返回首页</a>
        <a href="#">隐私政策</a>
        <a href="#">服务条款</a>
      </div>
      <div class="deco-grid" />
      <div class="deco-circle deco-circle-1" />
      <div class="deco-circle deco-circle-2" />
    </div>

    <!-- Right: Form -->
    <div class="right">
      <div class="form-wrapper">
        <div class="mobile-brand">
          <div class="brand-icon"><i class="fas fa-globe-asia text-[16px]"></i></div>
          <span>{{ brandName }}</span>
        </div>
        <div class="header">
          <h1>{{ title }}</h1>
          <p>{{ subtitle }}</p>
        </div>
        <form @submit.prevent="onSubmit" class="form">
          <div class="field">
            <label for="login-email">邮箱</label>
            <input id="login-email" type="email" :placeholder="emailPlaceholder" v-model="email"
              autocomplete="off" @focus="isTyping = true" @blur="isTyping = false" required />
          </div>
          <div class="field">
            <label for="login-password">密码</label>
            <div class="password-wrap">
              <input id="login-password" :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••" v-model="password" required />
              <button type="button" class="eye-btn" @click="showPassword = !showPassword">
                <i v-if="showPassword" class="fas fa-eye-slash text-[18px]"></i>
                <i v-else class="fas fa-eye text-[18px]"></i>
              </button>
            </div>
          </div>
          <div class="options">
            <label class="remember"><input type="checkbox" v-model="remember" /> 30天内免登录</label>
            <a href="#" class="forgot" @click.prevent>忘记密码?</a>
          </div>
          <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
          <button type="submit" class="btn-primary" :disabled="loading"
            :style="{ background: loading ? '#ccc' : primaryColor }">
            {{ loading ? '登录中...' : '登 录' }}
          </button>
        </form>
        <button v-if="showGoogleLogin" type="button" class="btn-google">
          <i class="fab fa-google text-[18px]"></i> 使用 Google 登录
        </button>
        <p class="signup-link">还没有账号? <a href="#" @click.prevent="goHome">立即注册</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import AnimatedCharacters from './AnimatedCharacters.vue'

const props = defineProps({
  brandName: { type: String, default: '旅行家' },
  title: { type: String, default: '欢迎回来!' },
  subtitle: { type: String, default: '请输入您的账户信息' },
  emailPlaceholder: { type: String, default: '请输入邮箱地址' },
  primaryColor: { type: String, default: '#2D8BCF' },
  showGoogleLogin: { type: Boolean, default: true },
})

const emit = defineEmits(['submit'])

const goHome = inject('goToHome', () => {})

const showPassword = ref(false)
const email = ref('')
const password = ref('')
const remember = ref(false)
const errorMsg = ref('')
const loading = ref(false)
const isTyping = ref(false)

defineExpose({
  setError: (msg) => { errorMsg.value = msg },
  setLoading: (v) => { loading.value = v },
})

function onSubmit() {
  errorMsg.value = ''
  emit('submit', {
    email: email.value,
    password: password.value,
    remember: remember.value,
  })
}
</script>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.left {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px;
  color: white;
  overflow: hidden;
}
.brand {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
}
.brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.characters-area {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 500px;
}
.footer-links {
  position: relative;
  z-index: 20;
  display: flex;
  gap: 32px;
  font-size: 13px;
}
.footer-links a { color: rgba(255,255,255,0.6); transition: color 0.2s; }
.footer-links a:hover { color: white; }
.deco-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}
.deco-circle { position: absolute; border-radius: 50%; filter: blur(48px); }
.deco-circle-1 { top: 25%; right: 25%; width: 256px; height: 256px; background: rgba(255,255,255,0.1); }
.deco-circle-2 { bottom: 25%; left: 25%; width: 384px; height: 384px; background: rgba(255,255,255,0.05); }
.right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: #fff;
}
.form-wrapper { width: 100%; max-width: 420px; }
.mobile-brand { display: none; }
.header { text-align: center; margin-bottom: 40px; }
.header h1 {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
  color: #1a1a2e;
}
.header p { color: #666; font-size: 14px; }
.form { display: flex; flex-direction: column; gap: 20px; }
.field { display: flex; flex-direction: column; gap: 8px; }
.field label { font-size: 14px; font-weight: 500; color: #333; }
.field input {
  height: 48px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  outline: none;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.field input:focus {
  border-color: #2D8BCF;
  box-shadow: 0 0 0 3px rgba(45,139,207,0.15);
}
.password-wrap { position: relative; }
.password-wrap input { width: 100%; padding-right: 44px; }
.eye-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  transition: color 0.2s;
  cursor: pointer;
}
.eye-btn:hover { color: #666; }
.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
}
.remember { display: flex; align-items: center; gap: 8px; cursor: pointer; color: #666; }
.remember input { width: 16px; height: 16px; accent-color: #2D8BCF; }
.forgot { color: #2D8BCF; font-weight: 500; }
.forgot:hover { text-decoration: underline; }
.error-msg {
  padding: 12px;
  font-size: 14px;
  color: #f87171;
  background: rgba(127,29,29,0.08);
  border: 1px solid rgba(127,29,29,0.15);
  border-radius: 8px;
}
.btn-primary {
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  letter-spacing: 2px;
}
.btn-primary:hover { opacity: 0.92; transform: translateY(-1px); }
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
.btn-google {
  width: 100%;
  height: 48px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background: #fff;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-google:hover { background: #f8f9fa; }
.signup-link { text-align: center; font-size: 14px; color: #666; margin-top: 32px; }
.signup-link a { color: #333; font-weight: 500; }
.signup-link a:hover { color: #2D8BCF; }

@media (max-width: 1023px) {
  .page { grid-template-columns: 1fr; }
  .left { display: none; }
  .mobile-brand { display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 20px; font-weight: 600; margin-bottom: 48px; color: #1a1a2e; }
  .right { padding: 24px 20px; }
}
</style>
