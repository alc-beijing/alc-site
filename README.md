# StreamPark Website
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

[English](README.md) | [中文](README_ZH.md)

This is the repository containing all the source code of `http://streampark.apache.org`.
This guide will guide you how to contribute to the Apache StreamPark(Incubating) website.


## Branch
dev is the default branch. For all modifications, please fork first, and then proceed on the main branch.

```
dev #default branch
```


## 1. Preview and generate static files

This website is compiled using node, using Docusaurus framework components

1. Download and install nodejs (version>12.5.0)
2. Clone the code to the local `git clone git@github.com:apache/incubator-streampark-website.git`
2. Run `npm install` to install the required dependent libraries.
3. Run `npm run start` in the root directory, you can visit http://localhost:3000 to view the English mode preview of the site
4. Run `npm run start-zh` in the root directory, you can visit http://localhost:3000 to view the Chinese mode preview of the site
5. To generate static website resource files, run `npm run build`. The static resources of the build are in the build directory.

## 2. Directory structure
```html
|-- community
|-- docs     // The next version of the document that will be released soon
|-- download
|-- faq      // Q&A
|-- i18n
|   -- zh-CN  //Internationalized Chinese
|       |-- code.json
|       |-- docusaurus-plugin-content-docs
|       |-- docusaurus-plugin-content-docs-community
|       |-- docusaurus-plugin-content-docs-download
|       |-- docusaurus-plugin-content-docs-faq
|        -- docusaurus-theme-classic
|-- resource  // Original project files for architecture/timing diagram/flow chart, etc.
|-- src
|   |-- components
|   |-- css
|   |-- js
|   |-- pages
|   |   |-- home
|   |   |-- index.jsx
|   |   |-- team
|   |   |-- user
|   |    -- versions
|   |-- styles
|-- static // Picture static resource
|   |-- doc  // document picture
|        |-- image //document common picture
|        |-- image_en //English document picture
|        |-- image_zh //Chinese document picture
|   |-- user // users picture
|   |-- home // homepage picture
|   |-- image  // common picture
|-- docusaurus.config.js

```

## 3. Specification

### 3.1 Directory naming convention

Use all lowercase, separated by underscores. If there is a plural structure, use plural nomenclature, and do not use plural abbreviations

Positive example: `scripts / styles / components / images / utils / layouts / demo_styles / demo-scripts / img / doc`

Counter example: `script / style / demoStyles / imgs / docs`

### 3.2 javascript and the naming convention of static resource files

All lowercase, separated by a dash

Positive example: `render-dom.js / signup.css / index.html / company-logo.png`

Counter example: `renderDom.js / UserManagement.html`

### 3.3 Resource Path

Image resources are unified under `static/{module name}`

css and other style files are placed in the `src/css` directory

### 3.4 Page content modification
> Except for the homepage, team, user, Docs>All Version module page, all other pages can be directly jumped to the corresponding github resource modification page through the'Edit this page' button at the bottom

### 3.5 Home page modification
Visit the page http://streampark.apache.org
Located in `src/pages/home`

```
├─home
│ languages.json // Home page Chinese and English configuration
│ index.less     // homepage style
```
### 3.6 Team page modification
Visit the page http://streampark.apache.org/team
Located in `src/pages/team`
```
├─team
│ languages.json
│ index.js
│ index.less
```
### 3.7 User list page modification
Visit the page http://streampark.apache.org/user
```
Located in `src/pages/user`
└─versions
        data.json
        images.json
        index.js
        index.less
        languages.json
```
