# ALC-Beijing new Website

The web site for host the pages of alc-beijing, normally we publish a WeChat public account article after creating a new post in this site.


## Branch
dev is the default branch. For all modifications, please fork first, and then proceed on the main branch.

```
dev #default branch
```


## 1. Preview and generate static files

This website is compiled using node, using Docusaurus framework components

1. Download and install nodejs (version>12.5.0)
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
