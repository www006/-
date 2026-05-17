# 旅行家 - 探索世界之美

一个基于 Vue 3 + Vite + Tailwind CSS 构建的旅游品牌官方网站，包含交互式导航栏、目的地展示、服务介绍、用户评价轮播、数据统计交互动画以及带角色动画的登录页面。

## 技术栈

- **框架**: Vue 3 (Composition API + `<script setup>`)
- **构建工具**: Vite 6
- **样式方案**: Tailwind CSS v4 + 自定义主题变量
- **图标库**: Font Awesome 6 (CDN)
- **UI 组件**: Lucide Vue Next (登录页)
- **字体**: Playfair Display / Noto Sans SC (Google Fonts)

## 功能特性

- 响应式导航栏（桌面端 6 个一级菜单下拉 + 移动端侧滑面板）
- Hero 全屏主视觉（背景图、搜索栏、统计数据）
- 目的地卡片网格（悬浮上移动画）
- 服务特色卡片（图标脉冲动画）
- 数字滚动计数器（IntersectionObserver 触发）
- 用户评价自动轮播
- 滚动弹出动画（延迟递进效果）
- 登录页面（含 4 个交互式角色动画，眼珠跟随鼠标转动）
- 毛玻璃下拉菜单面板

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/<your-username>/travel-explorer.git
cd travel-explorer

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

### 在线访问

项目部署后可通过以下地址访问：

- 开发环境: `http://localhost:5173`
- 生产构建预览: `http://localhost:4173`

## 项目结构

```
travel-explorer/
├── public/
│   └── 样式图/
│       └── 背景图.png            # Hero 区域背景图片
├── src/
│   ├── api/
│   │   └── auth.js                # 登录认证 API 接口桩
│   ├── components/
│   │   ├── NavBar.vue             # 导航栏（一级菜单 + 半页面下拉）
│   │   ├── HeroSection.vue        # Hero 主视觉
│   │   ├── DestinationsSection.vue # 目的地展示
│   │   ├── ServicesSection.vue    # 服务特色
│   │   ├── StatsSection.vue       # 数据统计
│   │   ├── TestimonialsSection.vue # 用户评价轮播
│   │   ├── CtaSection.vue         # 行动号召
│   │   ├── FooterSection.vue      # 页脚
│   │   ├── BackToTop.vue          # 回到顶部按钮
│   │   ├── LoginPage.vue          # 登录页面
│   │   ├── AnimatedCharacters.vue # 交互角色动画
│   │   ├── EyeBall.vue            # 眼球组件
│   │   └── Pupil.vue              # 瞳孔组件
│   ├── composables/
│   │   └── index.js               # 通用 hooks
│   ├── data/
│   │   └── index.js               # 静态数据
│   ├── App.vue                    # 根组件
│   ├── main.js                    # 入口文件
│   └── style.css                  # Tailwind + 全局样式
├── index.html                     # HTML 模板
├── package.json
├── vite.config.js
├── .gitignore
├── LICENSE
└── README.md
```

## 部署

### 静态托管平台（Vercel / Netlify / GitHub Pages）

1. 构建项目: `npm run build`
2. 将 `dist/` 目录部署到静态托管平台
3. 如果使用 Vite 历史模式，需配置重写规则将所有路由指向 `index.html`

### 自定义服务器

```bash
npm run build
# 将 dist/ 目录复制到服务器 Web 根目录
```

## 浏览器兼容性

- Chrome >= 87
- Firefox >= 78
- Edge >= 88
- Safari >= 14

## License

本项目基于 MIT 许可证开源。详见 [LICENSE](LICENSE)。
