# TechPack 科技博客 🚀

一个现代化的响应式科技博客网站，集成了音乐播放、Live2D 看板娘、轮播图展示等多种交互功能。

![项目预览](https://img.shields.io/badge/Status-Active-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Live2D](https://img.shields.io/badge/Live2D-FF69B4?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9zdmc+&logoColor=white)

## 📋 项目概述

TechPack 是一个专注于科技内容分享的现代化博客网站，采用纯前端技术构建，具有优雅的 UI 设计和丰富的交互体验。网站集成了背景音乐播放、Live2D 虚拟角色、轮播图展示、打字机效果、点击特效等多种现代化功能。

### ✨ 主要特性

- 🎵 **背景音乐播放** - 可控制的背景音乐系统
- 👾 **Live2D 看板娘** - 智能交互的虚拟角色
- 🖼️ **轮播图展示** - 文章配图自动轮播
- ⌨️ **打字机效果** - 动态文字显示动画
- 🎨 **点击文字特效** - 增强用户交互体验
- 🎯 **自定义光标** - 个性化鼠标指针样式
- 📱 **响应式设计** - 完美适配各种设备尺寸
- 🌈 **现代化 UI** - 玻璃效果和渐变色设计

## 🛠️ 技术栈

### 前端技术
- **HTML5** - 语义化标签和现代 HTML 特性
- **CSS3** - Flexbox、Grid、动画和玻璃效果
- **JavaScript (ES6+)** - 模块化编程和现代 JS 特性
- **Font Awesome** - 矢量图标库
- **Google Fonts** - 自定义字体加载

### 第三方库和服务
- **Live2D Widget** - 虚拟角色展示
- **jQuery** - DOM 操作和事件处理
- **CDN 服务** - 静态资源加速

### 开发工具
- **Python HTTP Server** - 本地开发服务器
- **VS Code** - 代码编辑和调试
- **Git** - 版本控制

## 📁 项目结构

```
TechPack-Blog/
├── 📄 index.html              # 主页面文件
├── 🎨 styles.css              # 主样式表
├── ⚡ script.js               # 主 JavaScript 文件
├── 📖 README.md               # 项目说明文档
├── 📁 js/                     # JavaScript 配置文件
│   └── live2d-config.js       # Live2D 看板娘配置
├── 📁 img/                    # 图片资源目录
│   ├── 1.jpg                  # 用户头像
│   ├── article1/              # 第一篇文章图片
│   │   ├── 001.png
│   │   ├── 002.png
│   │   └── 003.png
│   ├── article2/              # 第二篇文章图片
│   │   ├── 001.png
│   │   ├── 002.png
│   │   └── 003.png
│   └── article3/              # 第三篇文章图片
│       ├── 001.png
│       ├── 002.png
│       └── 003.png
├── 📁 cursor/                 # 自定义光标文件
│   └── ZhiDan_MC_1.0/
│       ├── 正常选择.cur
│       ├── 精确选择.cur
│       ├── 链接选择.cur
│       └── 文本选择.cur
└── 📁 studio/                 # 音频资源
    └── backmusic.mp3          # 背景音乐文件
```

## 🏗️ 架构设计

### 模块化结构

项目采用模块化的 JavaScript 架构，主要包含以下模块：

```javascript
// 全局配置
CONFIG = {
    carousel: { autoplaySpeed: 4000 },
    music: { volume: 0.3 }
}

// 工具函数模块
Utils = {
    $(), $$(), createElement()
}

// 功能模块
├── MusicController        # 音乐播放控制
├── CarouselManager       # 轮播图管理
├── TypingEffect         # 打字机效果
├── TextClickEffect      # 点击文字特效
├── StatsCounter         # 数字统计动画
└── Live2DController     # Live2D 看板娘控制
```

### 样式架构

CSS 采用组件化和模块化的组织方式：

```css
/* 基础样式 */
├── 全局重置和变量定义
├── 通用组件样式
├── 响应式断点设置

/* 页面组件 */
├── 头部导航栏样式
├── 英雄区域样式
├── 文章卡片样式
├── 轮播图组件样式
├── 统计数据样式
├── 技术栈展示样式
├── 页脚样式

/* 交互功能 */
├── 音乐控制器样式
├── Live2D 看板娘样式
├── 点击特效动画
├── 光标自定义样式
└── 响应式适配
```

## 🚀 快速开始

### 环境要求

- Python 3.x（用于本地服务器）
- 现代浏览器（支持 ES6+）
- 稳定的网络连接（加载外部资源）

### 安装和运行

1. **克隆项目**
```bash
git clone <repository-url>
cd TechPack-Blog
```

2. **启动本地服务器**
```bash
# 使用 Python HTTP 服务器
python3 -m http.server 8000

# 或使用 Node.js（如果已安装）
npx serve -p 8000
```

3. **访问网站**
```
浏览器打开: http://localhost:8000
```

### VS Code 任务配置

项目包含预配置的 VS Code 任务，可以一键启动：

```json
{
    "label": "Serve Website",
    "type": "shell",
    "command": "python3",
    "args": ["-m", "http.server", "8000"],
    "group": "build",
    "isBackground": true
}
```

## 🎯 核心功能详解

### 1. 背景音乐系统
- **自动播放**: 页面加载时自动开始播放
- **音量控制**: 预设音量 0.3，可自定义调整
- **播放控制**: 右下角音乐按钮控制播放/暂停
- **循环播放**: 无缝循环播放背景音乐

### 2. Live2D 看板娘
- **智能交互**: 根据用户操作显示不同提示
- **时间问候**: 根据当前时间显示相应问候语
- **页面联动**: 与网站元素交互的专属反馈
- **多模型支持**: 可切换不同角色和材质
- **响应式设计**: 移动端自动缩放适配

### 3. 轮播图展示
- **自动播放**: 4秒间隔自动切换
- **手动控制**: 点击导航点切换图片
- **平滑过渡**: CSS 过渡动画效果
- **响应式图片**: 自适应不同屏幕尺寸

### 4. 打字机效果
- **动态文字**: 逐字符显示动画
- **可配置速度**: 自定义打字速度
- **光标闪烁**: 模拟真实打字体验
- **多行支持**: 支持多行文本动画

### 5. 交互特效
- **点击文字特效**: 点击时产生彩色文字飞散效果
- **悬停动画**: 卡片和按钮的悬停变换
- **数字计数**: 统计数据的动画计数效果
- **自定义光标**: 不同元素的专属光标样式

## 📱 响应式设计

项目采用移动优先的响应式设计策略：

### 断点设置
```css
/* 移动端 */
@media (max-width: 768px) { ... }

/* 小屏手机 */
@media (max-width: 480px) { ... }

/* 平板端 */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* 桌面端 */
@media (min-width: 1025px) { ... }
```

### 适配特性
- **流式布局**: Flexbox 和 Grid 自适应布局
- **弹性图片**: 图片自动缩放适配容器
- **触摸优化**: 移动端触摸交互优化
- **字体缩放**: 不同设备的字体大小调整

## 🎨 设计系统

### 色彩方案
```css
/* 主色调 */
--primary: #8699b1;
--secondary: #7d8fa3;
--accent: #667eea;

/* 背景色 */
--bg-gradient: linear-gradient(135deg, #e0e8f0 0%, #c5d1da 50%, #b6c5d8 100%);

/* 文字色 */
--text-primary: #505a64;
--text-secondary: #7d8fa3;
```

### 字体系统
- **主字体**: Poppins (现代无衬线字体)
- **装饰字体**: Orbitron (科技感字体)
- **字体权重**: 300, 400, 500, 600, 700

### 设计原则
- **简洁性**: 清晰的信息层次和布局
- **一致性**: 统一的设计语言和交互模式
- **可访问性**: 良好的对比度和可读性
- **现代感**: 玻璃效果和渐变色运用

## 🔧 自定义配置

### 音乐配置
```javascript
// script.js 中修改
CONFIG.music.volume = 0.3;  // 音量 (0.0-1.0)
```

### Live2D 配置
```javascript
// js/live2d-config.js 中修改
window.live2d_settings = {
    modelId: 1,              // 模型ID (1-6)
    modelTexturesId: 53,     // 材质ID
    display: {
        position: "left",     // 位置 (left/right)
        width: 280,          // 宽度
        height: 250          // 高度
    }
};
```

### 轮播图配置
```javascript
// script.js 中修改
CONFIG.carousel.autoplaySpeed = 4000;  // 自动播放间隔 (毫秒)
```

## 📈 性能优化

### 加载优化
- **字体预加载**: 关键字体文件预加载
- **图片懒加载**: 可选的图片延迟加载
- **资源压缩**: CSS 和 JS 文件压缩
- **CDN 加速**: 外部资源 CDN 分发

### 运行时优化
- **事件委托**: 减少事件监听器数量
- **节流防抖**: 高频事件的性能优化
- **内存管理**: 避免内存泄漏
- **动画优化**: 使用 CSS3 硬件加速

## 🌐 浏览器兼容性

| 浏览器 | 版本要求 | 支持状态 |
|--------|----------|----------|
| Chrome | 60+ | ✅ 完全支持 |
| Firefox | 55+ | ✅ 完全支持 |
| Safari | 12+ | ✅ 完全支持 |
| Edge | 79+ | ✅ 完全支持 |
| IE | 11 | ⚠️ 部分支持 |

## 📝 更新日志

### v1.2.0 (2025-06-05)
- ✨ 新增 Live2D 看板娘功能
- 🎵 优化音乐播放控制
- 📱 改进移动端响应式设计
- 🐛 修复轮播图在移动端的显示问题

### v1.1.0 (2025-05-20)
- 🎨 添加点击文字特效
- 🖱️ 实现自定义光标样式
- ⚡ 优化页面加载性能
- 📝 完善代码注释和文档

### v1.0.0 (2025-05-10)
- 🎉 项目初始化
- 🏗️ 基础页面结构搭建
- 🎵 背景音乐播放功能
- 🖼️ 轮播图展示系统
- ⌨️ 打字机效果实现

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支: `git checkout -b feature/AmazingFeature`
3. 提交更改: `git commit -m 'Add some AmazingFeature'`
4. 推送到分支: `git push origin feature/AmazingFeature`
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👨‍💻 作者信息

- **作者**: 李耘辉
- **学校**: 河南大学 软件学院
- **学号**: 2410250230
- **GitHub**: [@NIKOPACK](https://github.com/NIKOPACK)
- **邮箱**: info@techpack.com

## 🙏 致谢

感谢以下开源项目和服务：

- [Live2D Widget](https://github.com/stevenjoezhang/live2d-widget) - Live2D 看板娘实现
- [Font Awesome](https://fontawesome.com/) - 图标库支持
- [Google Fonts](https://fonts.google.com/) - 字体服务
- [jQuery](https://jquery.com/) - JavaScript 库

---

⭐ 如果这个项目对你有帮助，请给它一个星标！

🔗 [在线预览](http://localhost:8000) | 📖 [项目文档](README.md) | 🐛 [报告问题](https://github.com/NIKOPACK/issues)
