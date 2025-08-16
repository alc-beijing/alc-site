# ALC Beijing Hugo Theme

一个专为Apache基金会北京本地组织(ALC Beijing)设计的现代化Hugo主题，参考Apache官网的设计风格。

## 特性

- 🎨 **Apache品牌色彩**: 使用Apache官方的蓝色系配色方案
- 📱 **响应式设计**: 完美适配桌面、平板和移动设备
- ⚡ **高性能**: 优化的CSS和JavaScript，快速加载
- 🎯 **现代化UI**: 卡片式布局，清晰的视觉层次
- 🔍 **搜索功能**: 内置文章搜索功能
- 📝 **代码高亮**: 支持代码块语法高亮
- 🏷️ **标签系统**: 完整的标签和分类支持
- 📱 **移动端优化**: 移动端友好的导航和交互

## 安装

1. 将主题文件夹复制到你的Hugo站点的`themes/`目录
2. 在你的`config.toml`中设置主题：

```toml
theme = "alc-beijing"
```

## 配置

### 基本配置

在你的`config.toml`中添加以下配置：

```toml
[params]
  # 网站描述
  description = "ALC Beijing - Apache Local Community Beijing"
  
  # 网站副标题
  subtitle = "介绍 Apache 之道，推广开源项目，传播开源精神"
  
  # 关键词
  keywords = ["ALC Beijing", "Apache", "开源", "社区"]
  
  # 头像
  avatar = "images/avatar.png"
  
  # 数学公式支持
  math = true

# 导航菜单
[menu]
  [[menu.main]]
    identifier = "home"
    name = "首页"
    url = "/"
    weight = 1
  
  [[menu.main]]
    identifier = "posts"
    name = "博客"
    url = "/post/"
    weight = 2
  
  [[menu.main]]
    identifier = "about"
    name = "关于我们"
    url = "/about/"
    weight = 3

# 社交媒体链接
[[params.social]]
  name = "GitHub"
  icon = "fab fa-github"
  url = "https://github.com/alc-beijing"

[[params.social]]
  name = "Email"
  icon = "fas fa-envelope"
  url = "mailto:contact@alc-beijing.org"
```

### 文章前置参数

在文章的前置参数中可以设置：

```yaml
---
title: "文章标题"
date: 2024-01-01
draft: false
author: "作者名"
description: "文章描述"
keywords: ["关键词1", "关键词2"]
tags: ["标签1", "标签2"]
categories: ["分类1"]
featured_image: "images/featured.jpg"
featured: true
---
```

## 自定义

### 颜色主题

主题使用CSS变量，你可以轻松自定义颜色：

```css
:root {
  --apache-blue: #1a4b84;
  --apache-dark-blue: #0d2b4a;
  --apache-light-blue: #4a90e2;
  --apache-orange: #ff6b35;
}
```

### 布局自定义

主题支持以下布局模板：

- `layouts/_default/baseof.html` - 基础布局
- `layouts/index.html` - 首页布局
- `layouts/_default/list.html` - 列表页布局
- `layouts/_default/single.html` - 单页布局

### 部分模板

- `layouts/partials/header.html` - 头部导航
- `layouts/partials/footer.html` - 页脚

## 功能

### 搜索功能

主题内置了搜索功能，在文章列表页面会自动启用。

### 代码高亮

支持代码块语法高亮，使用Prism.js。

### 响应式图片

支持响应式图片加载，使用`data-src`属性实现懒加载。

### 返回顶部

自动显示返回顶部按钮，当页面滚动超过300px时显示。

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- IE 11+

## 开发

### 本地开发

1. 克隆主题仓库
2. 在Hugo站点中设置主题
3. 运行`hugo server`进行本地开发

### 构建

```bash
hugo --minify
```

## 贡献

欢迎提交Issue和Pull Request来改进这个主题！

## 许可证

MIT License - 详见LICENSE文件

## 致谢

- 感谢Apache软件基金会的设计灵感
- 感谢Hugo社区的支持
- 感谢所有贡献者的付出 
