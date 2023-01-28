# StreamPark Website
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

[English](README.md) | [中文](README_ZH.md)

这是包含 `http://streampark.apache.org` 的所有源代码的存储库。
本指南将指导您如何为 Apache StreamPark(Incubating) 的网站做出贡献。


## 分支
dev 为默认主分支，修改请先fork到自己的仓库，然后在main分支上进行开发修改。
```
dev  默认分支
```


## 1.预览并生成静态文件

本网站是使用node编译的，使用的是Docusaurus框架组件

1. 下载并安装 nodejs(version>12.5.0)
2. 克隆代码到本地 `git clone git@github.com:apache/incubator-streampark-website.git`
2. 运行 `npm install` 来安装所需的依赖库。
3. 在根目录运行`npm run start`，可以访问http://localhost:3000查看站点英文模式预览
4. 在根目录运行`npm run start-zh`，可以访问http://localhost:3000查看站点的中文模式预览
5. 要生成静态网站资源文件，运行 `npm run build`。构建的静态资源在build目录中。

## 2.目录结构
```html

|-- community //社区
|-- docs     //文档  存方下一个即将发布的版本
|-- download //下载
|-- faq      //Q&A
|-- i18n
|   -- zh-CN  //国际化中文
|       |-- code.json
|       |-- docusaurus-plugin-content-docs
|       |-- docusaurus-plugin-content-docs-community
|       |-- docusaurus-plugin-content-docs-download
|       |-- docusaurus-plugin-content-docs-faq
|        -- docusaurus-theme-classic
|-- resource // 架构/时序/流程图等的原始工程文件
|-- src
|   |-- components
|   |-- css
|   |-- js
|   |-- pages
|   |   |-- home
|   |   |-- index.jsx
|   |   |-- team
|   |   |-- user
|   |-- styles
|-- static //静态资源
|   |-- doc  //文档的静态资源
|        |-- image //文档通用图片
|        |-- image_en //英文文档图片
|        |-- image_zh //中文文档图片
|   |-- user //用户的图片
|   |-- home //首页的图片
|   |-- image  //模块公用图片
|-- docusaurus.config.js

```

## 3.规范

### 3.1 目录命名规范

全部采用小写方式， 以中下划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数

正例： `scripts / styles / components / images / utils / layouts / demo_styles / demo-scripts / img / doc`

反例： `script / style / demoStyles / imgs / docs`

### 3.2 javascript 以及静态资源文件命名规范

全部采用小写方式， 以中划线分隔

正例： `render-dom.js / signup.css / index.html / company-logo.png`

反例： `renderDom.js / UserManagement.html`

### 3.3 资源路径

图片资源统一放在`static/{模块名}`下

css等样式文件放在`src/css`目录下

### 3.4 页面内容修改
> 除了首页、团队、用户、Docs>All Version 模块页面外，其余页面都能通过底部的'Edit this page'按钮 直接跳转至对应的github的资源修改页

### 3.5 首页页面修改
访问页面  http://streampark.apache.org/
位于 `src/pages/home`

```
├─home
│      languages.json 首页中英文的配置
│      index.less  首页样式
```
### 3.6 团队页面修改
访问页面  http://streampark.apache.org/zh-CN/team
位于 `src/pages/team`
```
├─team
│ languages.json
│ index.js
│ index.less
```
### 3.7  用户 列表页面修改
访问页面  http://streampark.apache.org/zh-CN/user/
```
位于 `src/pages/user`
└─versions
        data.json
        images.json
        index.js
        index.less
        languages.json
```
