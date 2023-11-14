+++
author = "刘天栋"
title = "开源项目进入 ASF 孵化器需要做的准备"
date = "2023-11-11"
description = "开源项目进入 ASF 孵化器需要阅读文档，以及相关的自我评估准备工作。"
tags = [
    "Apache Way",
    "孵化器"
]
+++

本文源自 ALC Beijing 9月份的 ASF 孵化讨论， Ted Liu 发起的 [ASF 项目孵化 101 倡议](https://kaiyuanshe.feishu.cn/docx/AVykdYCNUothfuxDnwJclwPrn0d)飞书文档，倡议发出之后，得到了 ASF 孵化器导师，以及 ALC Beijing 成员的大力支持和反馈， 期望这篇文档能够帮助到更多想捐赠到 ASF 进行孵化的项目。  

## 文档必读

### Apache 孵化器指南

* 原文：<https://incubator.apache.org/cookbook/>
* 译文：<https://github.com/alc-beijing/translation/blob/master/apache/incubator/cookbook-zh.md>
* 微信公众号：<https://mp.weixin.qq.com/s/egCh1ofUsxlKPkifPcwjWg>

### 新孵化项目提案参考

* 原文：<https://cwiki.apache.org/confluence/display/INCUBATOR/New+Podling+Proposal?desktop=true&macroName=markdown>
* 微信公众号：<https://mp.weixin.qq.com/s/2L5HSDxx2JkohjrYfkpiwQ>

### IPMC 新项目基础设施设置指南

* 原文：<https://incubator.apache.org/guides/mentor.html>
* 译文：[IPMC 新项目基础设施设置指南](https://github.com/alc-beijing/alc-site/wiki/IPMC%E5%BB%BA%E8%AE%BE%E6%96%B0%E9%A1%B9%E7%9B%AE%E5%9F%BA%E7%A1%80%E5%AE%9E%E6%96%BD%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97)

### ASF 孵化项目发版常见问题

* 原文：<https://incubator.apache.org/guides/releasemanagement.html>
* 译文：<https://alc-beijing.github.io/alc-site/post/apache-policy/asf-release-notes/>
* 微信公众号：<https://mp.weixin.qq.com/s/VYWkI_wrLvS1E6FQvnshVA>

### Apache 项目毕业指南

* 原文：<http://incubator.apache.org/guides/graduation.html>
* 译文：[Apache 项目毕业指南](https://github.com/alc-beijing/translation/blob/master/apache/incubator/Apache%E9%A1%B9%E7%9B%AE%E6%AF%95%E4%B8%9A%E6%8C%87%E5%8D%97.md)

### Apache 项目成熟度模型

* 原文：<https://community.apache.org/apache-way/apache-project-maturity-model.html>
* 译文：Apache 项目成熟度模型

## 进入ASF孵化的项目考量点

这里只是以活跃的GitHub项目为例，结合项目自身社群活跃度列举的考察点。 对孵化项目发展密切相关的技术定位，发展战略，商业策略不在ASF孵化器的评估考察范围之内，但是作为导师大家可以结合自身对行业的了解自行进行判断。

1. 有已经发展了一段时间的开发者社区 （开发者体验相关）
   * 项目要有基本的英文使用文档，快速入门手册，开发者使用手册
   * 项目代码可以正常 clone，并有完备的编译文档，部署文档，确保是一个能够正常从源代码编译安装部署运行的项目
   * 项目 GitHub 有长期的提交，不是单向从公司同步代码到 GitHub
   * 项目通过邮件列表， GitHub issue 等公开讨论开发相关的上下文信息
2. 项目有一定用户的基础 （社群的支持和维护）
   * 项目有实际的用户
   * 用户问题能够得到及时响应
   * 用户之间互帮互助
3. 项目是活跃的 （项目的开发活跃度）
   * GitHub issue和 PR 讨论活跃
   * GitHub 有持续的项目提交
   * 项目有公开的路线图，并能够与用户互动
4. PPMC 核心成员最好能多元化（最好有 1/2 甚至 2/3 来自于外部）
5. 有 3 位或更多愿意投入时间和精力的 mentors