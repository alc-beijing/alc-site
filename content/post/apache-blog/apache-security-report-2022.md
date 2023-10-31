---
categories:
- 开源
- Apache Way
- 博客
- 传播
date: 2023-10-30T16:06:05+08:00
description: "本文翻译了 Apache 安全团队的2022年度报告，介绍了Apache软件基金会是的安全响应流程， 安全响应团队的日常的工作任务， 以及2022年度Apache软件基金会旗下项目关键安全事件。"
keywords:
- Open Source
- Culture
- Reading
- News
- Blog
tags:
- Apache blog
title: "【Apache 博客】之 ASF 软件安全报告 2022"
url: ""
authors:
- Mark Cox
translater:
- 王嘉树 校对 姜宁
---
## ALC Beijing 引言

2021年末的log4jshell问题让开源软件的安全问题再次成为大家关注的热点问题。 ASF的这篇2022年的软件安全报告向大家展示了Apache软件基金会的安全响应流程， 安全响应团队的最新进展，以及日常的安全问题是如何处理的， 以及2022年度Apache软件基金会旗下项目关键安全事件。 希望这篇报告能够帮助大家对Apache软件基金会软件安全处理有更加全面的了解。

# Apache软件基金会博客

Apache 软件基金会安全报告：2022年

本报告探讨了 2022 年所有 Apache 软件基金会 (Apache Software Foundation ASF) 项目的安全状况。我们回顾了关键指标、特定漏洞以及 ASF 项目用户受安全问题影响的最常见方式。

发布时间：2023 年 1 月

作者：Mark Cox，Apache软件基金会安全副总裁

## 背景

**Apache 软件基金会** （ASF） 的安全委员会负责监督和协调 350 多个 Apache 项目中的漏洞处理，每天要处理收到的60多封电子邮件。成立于 2002 年，我们对于如何处理问题有一个[一致流程](https://s.apache.org/cveprocess)，这个流程包括我们的项目必须如何披露安全问题。2022 年期间，ASF 聘请了一名管理员来帮助处理接收到的漏洞响应工作，团队的其他成员都是志愿者。

在任何 ASF 项目中发现安全问题的任何人都可以将其报告给 [security@apache.org](mailto:security@apache.org)，这些问题将被记录下来并传递给相关的[专门安全团队](https://apache.org/security/projects.html)或**项目管理委员会** （project management committees PMC）在私下里进行处理。一般来说; 每个社区或 PMC 负责处理自己的漏洞。安全委员会监控所有项目报告的所有问题，并在整个漏洞生命周期中跟踪问题。它还帮助各个社区进行安全响应和流程。最后，安全委员会将此情况向 ASF 董事会报告，作为 ASF 监督和治理职能的一部分。

安全委员会负责确保问题得到妥善处理，并积极提醒项目方未解决的问题和责任。作为董事会委员会，我们有能力采取行动，包括阻止项目未来的发布；或者在最坏的情况下，如果项目对处理其安全问题没有回应，则将项目存档。它与 Apache License v2.0 一起，是 ASF 围绕官方版本进行总体监督功能的关键部分，使 ASF 能够保护个人开发人员，并让用户有信心部署和依赖 ASF 软件。

对所有安全报告的监管以及我们开发的工具使我们能够轻松创建有关问题的指标。我们的上一份报告[涵盖了 2021 年的指标](https://news.apache.org/foundation/entry/apache-software-foundation-security-report2)。

## 2022年统计数据

2022 年，我们的安全电子邮件地址总共收到了 22,600 多封电子邮件（2021 年：18,500 封）。在垃圾邮件过滤和讨论主题分组之后，有 1402 个非垃圾邮件主题（2021 年：1272 个、2020 年：946 个、2019 年：620 个）。不幸的是，安全报告有时看起来像垃圾邮件，特别是当它们包含大量附件或大视频时，因此我们会仔细审查所有邮件，以确保不会错过真实的报告。

![image](https://github.com/alc-beijing/translation/assets/39830125/d7917507-9a42-4512-8f68-a176b00cbd6d)


图 1 给出了这 1402 个主题的细分。305 个主题（22%）是人们对 Apache 许可证感到困惑的地方。由于许多项目都使用 Apache 许可证，而不仅仅是 ASF 项目，因此人们在看到 Apache 许可证时可能会感到困惑，不明白它是什么。这是最常见的，例如，在设置菜单中显示许可证的手机上，通常是由于包含 Google 根据 Apache 许可证发布的软件。我们不会回复这些电子邮件。这与我们 2021 年收到的 359 份类似。

1402 个中的接下来的 415 个 (30%) 是电子邮件主题，人们询问非安全（通常是支持类型）问题。我们会向这些电子邮件发送模板回复。

接下来的 83 份报告（6%）是研究人员报告的基础设施问题，例如影响我们网站的问题。这些几乎总是误报；研究人员报告我们启用了目录列表、源代码可见、公共“.git”目录等等。这些报告通常是某些公开可用的扫描工具的未经过滤的输出，并且通常伴随着某种金钱奖励（赏金）的请求。

到 2022 年，新漏洞报告数量为 599 个（42%）（高于 2021 年：441 个、2020 年：376 个、2019 年：320 个），涵盖 122 个顶级项目。这 599 份报告既包括外部报告，也包括项目及其社区内部发现的问题。我们不跟踪这些类别之间的细分。例如，如果项目自己发现了问题，他们将遵循相同的 ASF 流程为其分配 **CVE**（Common Vulnerabilities and Exposures 常见漏洞和暴露）名称并解决它，我们仍然在这里计算它。

下一步是让项目对报告进行分类，看看这是否确实是一个问题。无效报告和实际上不是漏洞的报告将被拒绝返回给报告者。对于已接受的其余问题，它们会被分配适当的 CVE 名称，并最终发布修复程序。

截至 2023 年 1 月 1 日，这 599 份报告中的 109 份仍在分类和调查中。这是项目正在处理某个问题但尚未拒绝该问题或为其分配 CVE 的情况。这个数字看起来相当高，但它确实在这年中有所不同，并且在年末往往会更高，当时许多开发商都在休假。严重程度较低的问题在成为新版本的一部分之前需要一段时间的情况并不罕见，因此在任何给定时间总会有许多问题处于开放状态并且当前正在处理中。

其余 490 份报告（2021 年：391 个、2020 年：341 个、2019 年：301 个）导致我们分配了 210 个 CVE 名称（2021 年：183 个、2020 年：151 个、2019 年：122 个）。有些漏洞报告可能包含多个问题，有些报告跨多个项目，有些报告是重复的，不同的报告者发现相同的问题，因此接受的报告与 CVE 名称之间不存在精确的一对一映射。

2022 年报告最多的四个项目是 Airflow，有 49 份报告（2022 年发布了 19 个 CVE），Commons 有 37 份报告（4 个 CVE），HTTP Server 有 36 份报告（13 个 CVE），Tomcat 有 26 份报告（6 个 CVE）。Airflow 和 HTTP Server 是 [HackerOne Internet Bug Bounty  计划](https://hackerone.com/ibb)的一部分。

Apache 安全委员会负责处理 CVE 名称分配，并且是 MITRE **候选命名机构** （Candidate Naming Authority CNA），因此任何 ASF 项目中对 CVE 名称的所有请求都通过我们进行路由，即使报告者不知情并直接联系 MITRE 或公开问题在联系我们之前。

## 值得注意的漏洞和事件

2022 年有一些漏洞值得强调；要么是因为它们严重且高风险，要么是因为它们容易被利用，要么是因为受到了媒体的关注。其中包括：

- 1 月：Apache ShenYu 中的一个缺陷可能允许未经身份验证的访问（[CVE-2022-23944](https://www.cve.org/CVERecord?id=CVE-2022-23944)）
- 2 月：Apache APISIX 中存在允许绕过 IP 限制的缺陷 （[CVE-2022-24112](https://www.cve.org/CVERecord?id=CVE-2022-24112)），这可能会影响仍在使用默认 API 密钥的实例。针对此问题有各种公开的漏洞利用。
- 4 月：**网络安全和基础设施安全局**（Cybersecurity and Infrastructure Security Agency CISA）将 Log4Shell 列入其[15 个经常利用的漏洞](https://www.cisa.gov/uscert/ncas/current-activity/2022/04/27/2021-top-routinely-exploited-vulnerabilities)列表中。
- 4 月：Apache APISIX 中的缺陷可能允许攻击者通过泄露的机密获得访问权限 ([CVE-2022-29266](https://www.cve.org/CVERecord?id=CVE-2022-29266))
- 4 月：如果 CouchDB 在安装时没有得到适当的保护，Apache CouchDB 中的一个缺陷 ([CVE-2022-24706](https://www.cve.org/CVERecord?id=CVE-2022-24706)) 可能会允许远程用户无需进行身份验证即可获得管理员权限。针对此问题存在许多公共漏洞，包括 MetaSploit 漏洞。
- 4 月：4 月份 Apache Camel 中报告了一个影响 GitHub 工作流程使用的配置/脚本文件的缺陷，第二天修复了，几个月后在媒体上提到：[合并请求和不安全的 GitHub 工作流程可能会导致供应链攻击](https://www.theregister.com/2022/09/01/google_firebase_apache_camel_github/)。没有发布 CVE，因为 Camel 本身不存在安全漏洞，最终用户也无需采取任何行动。
- 7 月：Apache Spark UI（[CVE-2022-33891](https://www.cve.org/CVERecord?id=CVE-2022-33891)）中的缺陷可能允许恶意授权用户在启用 ACL 的情况下执行任意代码。针对此问题存在公共漏洞，包括 MetaSploit 漏洞。
- 9 月：Apache Pulsar 中存在缺陷（[CVE-2022-33682](https://www.cve.org/CVERecord?id=CVE-2022-33682)），无法启用 TLS 主机名验证。
- 10 月：Apache Commons Text 已更新，默认删除变量插值 ([CVE 2022-42889](https://www.cve.org/CVERecord?id=CVE-2022-42889))。这被其他人称为 “Text4Shell”，但此问题与 Log4Shell ([CVE-2021-44228](https://www.cve.org/CVERecord?id=CVE-2021-44228)) 不同，因为在 Log4Shell 中，字符串插值是可能来自日志消息正文，其中通常包含不受信任的输入。在 Apache Common Text 问题中，相关方法是明确意图并明确记录的，以执行字符串插值，因此应用程序在未经适当验证的情况下无意中传递不受信任的输入的可能性要小得多。
- 12 月：[微软报告称 Zerobt 僵尸网络](https://www.microsoft.com/en-us/security/blog/2022/12/21/microsoft-research-uncovers-new-zerobot-capabilities/)已更新，试图利用 ([CVE-2021-43013](https://www.cve.org/CVERecord?id=CVE-2021-43013))（Apache HTTP Server）和 ([CVE-2022-33891](https://www.cve.org/CVERecord?id=CVE-2022-33891))（Apache Spark）。

## 结论

Apache软件基金会的项目是高度多样化和独立的。他们有不同的语言、社区、管理和安全模型。但是，每个项目的共同点之一是如何处理报告的安全问题的一致过程。

ASF 安全委员会与项目团队、社区和报告者密切合作，确保快速正确地处理问题。2022 年，我们聘请了一名管理员与志愿者资源一起处理问题。这种负责任的监督是 Apache Way 的一项原则，有助于确保 Apache 软件稳定且值得信赖。

该报告提供了 2022 年的指标，显示我们从收到的 22,600 封电子邮件中对超过 599 个与 ASF 项目相关的漏洞报告进行了分类，最终解决了 210 个（CVE）问题。与 2021 年相比，处理的非垃圾邮件主题数量增加了 23%，实际漏洞报告数量增加了 36%，分配的 CVE 数量增加了 15%。我们还重点介绍了我们在帮助组织了解 Log4Shell 问题以及 ASF 等基金会的作用方面所做的工作，并重点介绍了我们开展的一些新的安全举措。

如果您有想要分享的漏洞信息，[请联系我们](https://apache.org/security/#reporting-a-vulnerability)，或者使用[公共安全讨论邮件列表](https://lists.apache.org/list.html?security-discuss@community.apache.org)来获取对此报告的评论。

由安全副总裁 Mark Cox 发布 2023 年 1 月 31 日
[Apache Software Foundation Security Report: 2022](https://blogs.apache.org/security/entry/asf-security-report-2022)
