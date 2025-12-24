# LMArena Table Svelte Demo

本项目使用 **Antigravity Gemini3 Flash** 开发， 基于 **Svelte 5** 框架，仿照 [lmarena.ai](https://lmarena.ai/) 表格UI风格。

## 项目特点

- **Svelte 5 Runes**: 使用最新的 `$state`, `$derived` 等语法。
- **Tailwind CSS 4**: 采用极简的配置和现代化的样式。
- **响应式设计**: 完美适配移动端和桌面端。
- **Lucide Icons**: 精美的矢量图标支持。

## 快速开始

### 1. 安装依赖

确保你已经安装了 [pnpm](https://pnpm.io/)，然后在项目根目录下运行：

```bash
pnpm install
```

### 2. 启动开发服务器

运行下述命令开启热更新开发环境：

```bash
pnpm dev
```

### 3. 构建生产版本

```bash
pnpm build
```

## 目录结构

- `src/lib`: 存放 Svelte 组件和数据逻辑。
  - `Leaderboard.svelte`: 核心排行榜组件。
  - `data.ts`: 模拟数据源。
- `src/App.svelte`: 应用入口。
