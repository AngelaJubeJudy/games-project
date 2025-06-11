# 2048 Space - All 2048 Online Games

> 🌐 [English](#english) | [简体中文](#简体中文)

---

## English

### Who Should Use This Project

- **Puzzle game enthusiasts** seeking a curated, ad-free 2048 experience.
- **Web developers** looking for a modern, mobile-first React + Tailwind project.
- **Educators** or **students** interested in web game integration and UI/UX best practices.
- **Anyone** who wants to play or extend 2048 variants online, instantly and securely.

---

### Core Features

| Feature                | Tech Implementation                | User Benefit                                  |
|------------------------|------------------------------------|-----------------------------------------------|
| Multiple 2048 Games    | React, iframe embed                | Play classic & creative 2048 variants easily  |
| Lightning Fast         | Vite, SPA, code splitting          | Instant loading, no waiting                   |
| Mobile Optimized       | Tailwind CSS, responsive design    | Seamless experience on any device             |
| Dark/Light Mode        | Tailwind dark mode, localStorage   | Eye comfort, theme preference remembered      |
| No Registration Needed | Pure frontend, no backend required | Privacy, play instantly, no data risk         |
| SEO Optimized          | Meta tags, semantic HTML           | Discoverable, shareable, better ranking       |
| Community Driven       | Open source, easy to contribute    | Evolving features, user-driven improvements   |

---

### Quick Start

#### 1. Prerequisites

- Node.js >= 18
- npm >= 9

#### 2. Installation

```bash
git clone <your-repo-url>
cd <project-directory>
npm install
```

#### 3. Run Locally

```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

#### 4. Build for Production

```bash
npm run build
```
Static files will be output to the `dist/` directory.

#### 5. Preview Production Build

```bash
npm run preview
```

#### 6. Deploy

- **Static Hosting**: Upload `dist/` to Vercel, Netlify, GitHub Pages, or any static server.
- **SEO**: All meta tags are pre-configured in `index.html` for optimal search engine indexing.

---

### Developer Guide

#### Local Development

- Main code: `src/`
  - Entry: `src/main.tsx`
  - App logic: `src/App.tsx`
  - Styles: `src/index.css` (Tailwind + custom)
- Config:
  - Vite: `vite.config.ts`
  - Tailwind: `tailwind.config.js`
  - TypeScript: `tsconfig.*.json`
  - ESLint: `eslint.config.js`

#### Key Directories

| Directory/File      | Purpose                        |
|---------------------|-------------------------------|
| `src/`              | Main source code               |
| `public/`           | Static assets (if any)         |
| `.bolt/`            | Template & automation config   |
| `dist/`             | Production build output        |

#### Performance Benchmark

- **Cold start**: <1s on modern devices
- **Mobile**: Fully responsive, touch-optimized
- **Lighthouse**: 90+ scores (Performance, Accessibility, SEO)

---

### Contribution Guide

1. Fork this repo and create your branch from `main`.
2. Run `npm install` and `npm run dev` to start local development.
3. Follow code style (ESLint, Prettier, Tailwind conventions).
4. Commit descriptive messages and submit a pull request.
5. For new features, update the README and add tests if possible.

---

### License

MIT

---

## 简体中文

### 谁适合使用本项目

- **益智游戏爱好者**：想要无广告、优质的 2048 游戏体验。
- **Web 开发者**：需要现代化、移动优先的 React + Tailwind 项目模板。
- **教育者/学生**：关注网页游戏集成与 UI/UX 最佳实践。
- **任何人**：希望在线畅玩或扩展 2048 变体，安全、即开即玩。

---

### 核心特性

| 功能               | 技术实现                        | 用户收益                                   |
|--------------------|---------------------------------|--------------------------------------------|
| 多种 2048 游戏     | React，iframe 嵌入              | 轻松畅玩经典及创新 2048 变体               |
| 极速加载           | Vite，单页应用，代码分割         | 秒开无等待                                 |
| 移动端适配         | Tailwind CSS，自适应设计         | 任意设备流畅体验                           |
| 深色/浅色模式      | Tailwind dark mode，localStorage | 护眼，记忆主题偏好                         |
| 无需注册           | 纯前端，无需后端                 | 隐私安全，随时畅玩                         |
| SEO 优化           | Meta 标签，语义化 HTML           | 易于搜索、分享，排名更优                   |
| 社区驱动           | 开源，易于贡献                   | 持续进化，用户共建                         |

---

### 快速开始

#### 1. 环境要求

- Node.js >= 18
- npm >= 9

#### 2. 安装依赖

```bash
git clone <你的仓库地址>
cd <项目目录>
npm install
```

#### 3. 本地运行

```bash
npm run dev
```
浏览器访问 [http://localhost:5173](http://localhost:5173)。

#### 4. 构建生产环境

```bash
npm run build
```
静态文件输出至 `dist/` 目录。

#### 5. 预览生产环境

```bash
npm run preview
```

#### 6. 部署

- **静态托管**：将 `dist/` 上传至 Vercel、Netlify、GitHub Pages 或任意静态服务器。
- **SEO**：`index.html` 已预设所有 SEO 相关 meta 标签。

---

### 开发者指南

#### 本地开发

- 主代码目录：`src/`
  - 入口：`src/main.tsx`
  - 逻辑：`src/App.tsx`
  - 样式：`src/index.css`（Tailwind + 自定义）
- 配置文件：
  - Vite：`vite.config.ts`
  - Tailwind：`tailwind.config.js`
  - TypeScript：`tsconfig.*.json`
  - ESLint：`eslint.config.js`

#### 关键目录

| 目录/文件          | 作用                             |
|--------------------|----------------------------------|
| `src/`             | 主源码                           |
| `public/`          | 静态资源（如有）                 |
| `.bolt/`           | 模板与自动化配置                 |
| `dist/`            | 生产环境构建输出                 |

#### 性能基准

- **冷启动**：现代设备下 <1s
- **移动端**：全响应式，触控优化
- **Lighthouse**：性能、可访问性、SEO 均 90+ 分

---

### 贡献指南

1. Fork 本仓库并从 `main` 创建分支。
2. 运行 `npm install` 和 `npm run dev` 进行本地开发。
3. 遵循代码风格（ESLint、Prettier、Tailwind 规范）。
4. 提交有意义的 commit，并发起 Pull Request。
5. 新功能请同步更新 README 并尽量添加测试。

---

### 许可证

MIT
