---
categories:
- 开源
- Apache Way
- 博客
- 传播
date: 2022-01-12T16:06:05+08:00
description: "本文翻译了 Apache 安全团队的2021年度报告，介绍了Apache软件基金会是的安全响应流程， 安全响应团队的日常的工作任务， 以及2021年度Apache软件基金会旗下项目关键安全事件。"
keywords:
- Open Source
- Culture
- Reading
- News
- Blog
tags:
- Apache blog
title: "【Apache 博客】之 ASF 软件安全报告"
url: ""
authors:
- Mark Cox
translater:
- 焦颖 校对 姜宁
---

## ALC Beijing 引言
2021年末的log4jshell问题让开源软件的安全问题再次成为大家关注的热点问题。 ASF最近的这篇2021年的软件安全报告让我们可以更加深入了解Apache软件基金会是的安全响应流程， 安全响应团队的日常的工作任务， 以及2021年度Apache软件基金会旗下项目关键安全事件。希望这篇报告能够帮助大家对Apache软件基金会基于志愿者的软件安全处理有更加全面的了解。  


# Apache软件基金会博客
Apache 软件基金会安全报告：2021年

概要：本报告探讨了2021年 Apache 软件基金会所有项目的安全状况。我们回顾了关键指标、特定漏洞以及 ASF 项目用户受安全问题影响的最常见方式。

发布时间：2022 年 1 月

作者：Mark Cox，Apache软件基金会安全副总裁

## 背景

 Apache 软件基金会 (ASF) 的安全委员会负责监督和协调所有 350 多个 Apache 项目中漏洞的处理。我们成立于 2002 年，由所有志愿者组成，我们对如何处理问题有一个[标准流程](https://s.apache.org/cveprocess)，这个流程包括我们的项目必须如何披露安全问题。

在 Apache 项目中发现安全问题的任何人都可以将它们报告给 security@apache.org，在那里它们会被记录下来并传递给相关的[专门安全团队](https://apache.org/security/projects.html)或项目管理委员会 (PMC) 来处理。安全委员会监控所有项目报告的所有问题，并在整个漏洞生命周期中跟踪问题。  

安全委员会负责确保问题得到妥善处理，并积极提醒项目突出的问题和责任。作为董事会委员会，我们有能力采取行动，包括阻止其未来的发布，或者在最坏的情况下，如果项目对处理其安全问题没有响应，则将项目退休归档。这与 Apache 许可证 v2.0一起，是 ASF 围绕官方发布的一般治理功能的关键部分，使 ASF 能够保护个人开发人员，并让用户有信心部署和依赖 ASF 软件。  

对所有安全报告的监督以及我们开发的工具使我们能够轻松创建有关问题的指标。我们的上一份报告[涵盖了2020年的指标](https://blogs.apache.org/foundation/entry/apache-software-foundation-security-report1)。

## 2021年统计数据

2021 年，我们的安全电子邮件地址总共收到了约 18,500 封电子邮件。在垃圾邮件过滤和讨论主题分组之后，有 1272 个（2020年：946个，2019年：620个）非垃圾邮件主题。不幸的是，安全报告有时确实看起来像垃圾邮件，尤其是当它们包含大量附件或大型视频时，因此安全团队会仔细审查所有邮件，以确保真实安全报告不会错过太长时间。  
![img](https://lh4.googleusercontent.com/JkcSHlIicN0zI32I7IObMaAMJKNhGiOyIONHk2PpOTjNH2xO69iLKhx57es3x4wwTlHvF1mXt1o-OVXiFHQ647vjhxsp6XQ_bkL6F4Kl3zcwwz43H2C4DxihbFvUZ5rWPc7e-CgS)

*图1：2021 年 ASF 安全电子邮件主题的细分*

图1给出了这 1272 个电子邮件主题的细分。359 个电子邮件主题 (28%) 与 Apache 许可证使用困惑相关的问题。由于许多项目都使用 Apache 许可证，而不仅仅是那些在 ASF 保护伞下的项目，当人们看到 Apache 许可证并且他们不明白它是什么时，他们可能会感到困惑。这在手机上最常见，例如在设置菜单中显示许可证的手机上，通常是由于包含 Google 根据 Apache 许可证发布的软件。我们不再回复这些电子邮件。这比 2020 年收到的 257 个有所增加。

接下来的 1272 个（26%）中，337 个电子邮件主题是大家询问非安全（通常是支持类型）问题。

接下来的 135 份报告是研究人员在 Apache 网站上报告的问题。这些几乎总是误报；研究人员报告我们启用了目录列表、源代码可见、公共“.git”目录等等。这些报告通常是一些公开可用的扫描工具的未经过滤的输出，并且通常是报告者要求我们为他们的报告提供某种金钱奖励（赏金）的地方。

剩下的 441 份（2020年：376份，2019年：320份）报告，涉及2021年的新漏洞，涵盖99个顶级项目。这 441 份报告是外部报告者和内部报告者的混合体。例如，如果一个项目自己发现了一个问题，并按照ASF流程为其分配了一个 CVE（通用漏洞和暴露）名称并解决了它，我们仍然会在这里计算它。我们不会保留能够提供内部报告与外部报告细分的指标。   

下一步是相应的项目对报告进行分类，以查看它是否真的是一个问题。无效的报告和实际上不是漏洞的报告将被拒绝返回给报告者。在接受的其余问题中，它们被分配了适当的CVE名称，并最终发布了修复程序。

截至 2022 年 1 月 1 日，这 441 份报告中有 50 份仍在分类和调查中。这是指一个项目正在处理一个问题，但截至 2022 年 1 月 1 日的快照，还没有拒绝该问题或为其分配一个 CVE。这个数字高于我们通常的预期，这是由于 2021 年 12 底有大量的报告涌入造成的。

剩下的 391 个（2020：341 份、2019：301 份）报告导致我们分配了 183 个（2020：151、2019：122）个 CVE 名称。有些漏洞报告可能包含多个问题，有些报告跨多个项目，有些报告是重复的，即不同的报告者发现了相同的问题，因此所接受的报告与 CVE 名称之间并没有一个精确的一对一的映射。Apache 安全委员会负责处理 CVE 名称分配，并且是 MITRE 候选命名机构 (CNA)，因此任何 ASF 项目中所有关于 CVE 名称的请求都要通过我们来处理，即使报告者不知道，直接联系 MITRE 或者在联系我们之前公开一个问题。

## 值得注意的事件

2021 年有几件事值得讨论；要么是因为它们是严重的、高风险的，它们有现成的漏洞利用情况，要么是受到媒体的关注。这些事件包括：  

- 1 月：在 Apache Velocity ( [CVE-2020-13959](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13959) )的默认错误页面中发现了一个跨站点脚本 (XSS) 漏洞，该[漏洞](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13959)影响了许多公共可访问的网站。尽管已经有了修复方法，但需要几个月的时间才能制作一个包含修复程序的新版本，导致报告者提前公布了它。因此，安全团队深入研究了受影响 PMC 的所有未解决问题，以确保它们都得到处理。
- 1 月：发布了一份报告，显示[恶意软件](https://www.redpacketsecurity.com/new-pro-ocean-crypto-miner-targets-apache-activemq-oracle-weblogic-and-redis-installs/)仍在利用(https://www.redpacketsecurity.com/new-pro-ocean-crypto-miner-targets-apache-activemq-oracle-weblogic-and-redis-installs/)超过 5 年未打补丁的[Apache ActiveMQ](https://www.redpacketsecurity.com/new-pro-ocean-crypto-miner-targets-apache-activemq-oracle-weblogic-and-redis-installs/)实例 ( [CVE-2016-3088](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-3088) )
- 6 月：Airflow PMC 发布了一篇博客(https://blogs.apache.org/foundation/entry/success-at-apache-security-in)，介绍了他们如何处理安全问题，用户有时部署更新的速度很慢 ( [CVE-2020-17526](https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2020-17526) ) ，以及依赖关系中的缺陷会如何影响 Airflow[的博客](https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2020-17526)。
- 7 月：第三方博客解释了[威胁参与者](https://www.trendmicro.com/en_us/research/21/g/threat-actors-exploit-misconfigured-apache-hadoop-yarn.html)如何[利用配置错误的 Apache Hadoop YARN](https://www.trendmicro.com/en_us/research/21/g/threat-actors-exploit-misconfigured-apache-hadoop-yarn.html)服务
- 8 月：一位研究人员发现了[ HTTP/2 实现中](https://portswigger.net/research/http2)的[一些问题](https://portswigger.net/research/http2)。Apache HTTP 服务器受到中等漏洞 ( [CVE-2021-33193](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-33193) ) 的影响
- 9 月：在[ApacheCon 2021 的主题演讲](https://www.youtube.com/watch?v=1bExbql_-AI)中，讨论了安全委员会、美国关于改善国家网络安全的行政命令，以及第三方安全项目，例如 OpenSSF 下的安全项目。
- 9 月：Apache OpenOffice 中的一个漏洞可能允许恶意文档在打开后运行任意代码 ( [CVE-2021-33035](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2021-33035) )
- 10 月：在 Apache HTTP 服务器中发现了一个严重问题。默认配置保护了这个漏洞，但在没有这些保护的自定义配置中，如果启用了 CGI 支持，这可能导致远程代码执行 ( [CVE-2021-41773](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-41773) )。在向安全团队报告该问题 5 天后，该问题在一个更新中得到修复，但很快发现该修复不充分，并在 3 天后发布了进一步的更新来完全解决该问题 ( [CVE-2021-42013](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42013) )。对于这个问题存在一个 MetaSploit 漏洞。
- 10 月：HackerOne的互联网漏洞悬赏[Internet Bug Bounty](https://hackerone.com/ibb)计划扩展到(https://lists.apache.org/thread/k27wqlr1zpppmorvo36r1nvxrg1yolq1)，包括 Apache Airflow、Apache HTTP Server 和 Apache Commons。与其他许多项目不同，该项目依赖于漏洞发现者遵循标准的 ASF 通知流程，并允许发现者在修复后和问题公开后为符合条件的问题索取奖励。
- 12 月：Log4J 2（[CVE-2021-44228](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228)，“Log4Shell”）是一个流行和常见的Java日志库，其中的一个[漏洞](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228)允许远程攻击者在默认和可能的安装中实现远程代码执行。该问题被广泛利用，在发布修复程序的前一天就开始了。有一个 MetaSploit 模块来解决这个问题。在修复版发布后，一些后续的 Log4J 漏洞也被修复，但没有一个具有相同的影响或默认条件。  
- 12 月：ASF 受邀参加 2022 年的一个围绕开源安全的论坛。[白宫发出邀请以提高开源安全性](https://www.bloomberg.com/news/articles/2021-12-23/white-house-extends-invitation-to-improve-open-source-security)。我们在会议之前制作了一份[立场文件](https://cwiki.apache.org/confluence/display/COMDEV/Position+Paper)。
- 2021年还发布了其他RCE漏洞，这些漏洞在 Apache OFBiz ( [CVE-2020-9496](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-9496)、[CVE-2021-26295](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-26295) )、Apache Airflow（例如[CVE-2020-11978](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11978)）、Apache Druid ( [CVE-2021-25646](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25646) )、 Apache Tapestry ( [CVE-2021-27850](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-27850) ) 和 Apache Storm ( [CVE-2021-38294](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-38294) )得到修复。

## 时间表

我们的安全团队和项目管理团队都是志愿者，因此我们不会就问题的处理给出任何正式的 SLA。但是，我们可以分解流程每个部分的目的和目标：

分类：我们的目标是在三个工作日内处理发送到[security@apache.org](mailto:security@apache.org)的邮件。我们不会对此流程进行度量或报告，因为我们会评估每个接受到问题的严重性，并适当地应用我们拥有的有限资源。该团队由来自不同项目 PMC 的极少数志愿者组成。安全团队将报告转发给 PMC 后，PMC 将回复报告者。有时，由于收到电子邮件的大小限制，报告者发送的报告附有大型 PDF 文件甚至是开发视频，但由于收到的电子邮件的大小限制，这些文件无法发送给我们，所以请确保任何后续行动是一个简单的纯文本电子邮件。

调查：一旦将报告发送到项目管理委员会的私有邮件列表中，分类和调查的过程会根据项目、资源的可用性和要评估的问题数量而有所不同。由于安全问题是私下处理的，我们会将报告发送到仅由 PMC 组成的私有邮件列表中。因此，这些报告不会传达给每个项目提交者，因此每个项目中只有一小部分人能够进行调查并作出响应。作为一般准则，我们尽量确保项目在报告后 90 天内对问题进行分类。ASF 安全团队会跟进任何超过 90 天的未处理问题。

修复：一旦安全问题被分类和接受，修复问题的时间表取决于项目本身的时间表。严重程度较低的问题最常被保留到预先计划的版本。  

公告：我们的流程允许项目在发布修复版本和发布漏洞之间最多有几天的时间。所有漏洞和缓解软件版本都通过[announce@apache.org](mailto:announce@apache.org)列表[公布](mailto:announce@apache.org)。我们现在的目标是让它们在发布后的一天内出现在公共 CVE 项目列表中，对于关键问题甚至更快。

## 结论

Apache 软件基金会的项目是高度多样化和独立的。他们有不同的语言、社区、管理和安全模式。然而，每个项目都有一个共同点，那就是在处理报告的安全问题时有一个一致的流程。 

ASF 安全委员会与项目团队、社区和报告者密切合作，以确保问题得到快速、正确的处理。这种负责任的监督是 The Apache Way 的一项原则，有助于确保Apache软件的稳定性和可信赖性。

该报告提供了 2021 年的指标，显示从收到的18500封电子邮件中，我们筛选出超过 390 份与 ASF 项目相关的漏洞报告，从而修复了 183 (CVE) 问题。与 2020 年相比，处理的非垃圾邮件主题数量增加了 34%，实际漏洞报告数量增加了 17%，分配的 CVE 增加了 21%。

虽然 ASF 经常会快速推出关键问题的更新，但报告显示，用户正被 ASF 软件中多年未能更新的旧问题所利用，而供应商（以及他们的用户）仍然在使用有已知未修复漏洞的生命周期结束的版本。这将继续是一个大问题，我们致力于解决这个全行业的问题，以找出我们可以做些什么来提供帮助。

如果您有想要分享的漏洞信息，[请与我们联系](http://apache.org/security/#reporting-a-vulnerability)或对此报告发表评论，请参阅[公共安全讨论邮件列表](https://lists.apache.org/list.html?security-discuss@community.apache.org)。

[Apache Software Foundation Security Report: 2021](https://blogs.apache.org/foundation/entry/apache-software-foundation-security-report2)
