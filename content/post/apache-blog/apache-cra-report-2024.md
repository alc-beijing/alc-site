---
categories:
- 开源
- 法规政策
- 博客
- 翻译
date: 2024-01-29T15:42:05+08:00
description: "通过本文可以了解CRA（网络弹性法案）的最新进展及其对开源软件的影响。"
keywords:
- Open Source
- Culture
- Reading
- News
- Blog
tags:
- Apache blog
title: "【Apache 博客】之 关于欧盟软件法规的最新进展：诸多改进与利好消息"
url: ""
authors:
- Dirk-Willem van Gulik
translater:
- 孙振华 田凌侠 
  校对 姜宁
---

发布时间：2024 年 1 月

作者：Dirk-Willem van Gulik，Apache软件基金会公共事务副总裁

翻译：孙振华 田凌侠

校对：姜宁

## 关于欧盟软件法规的最新进展：诸多改进与利好消息

在过去两年中，Apache 软件基金会（ASF）和许多其他开源组织对即将出台的软件监管总体提出了[担忧](https://news.apache.org/foundation/entry/save-open-source-the-impending-tragedy-of-the-cyber-resilience-act)，尤其是《网络弹性法案》（CRA）/《产品责任指令》（PLD）。

这两项法案都将对我们的软件行业产生巨大影响。总的来说，这意味着在互联网上发布、销售等的软件需要被认为是“适合其用途的”。它需要在合理的时间内确保安全。而这项法规推翻或废除了我们大多数人所喜爱的“如果出现问题，后果自负（if it breaks you get the pieces）”的免责声明。

CRA 现在基本上已经([定稿](https://data.consilium.europa.eu/doc/document/ST-17000-2023-INIT/EN/pdf))，只剩下将其翻译成 24 种官方语言的法律文本，以及通常只是走个形式的批准程序。这是 ASF 和许多开源社区最关心的法案，其中也有不少好消息。

回顾 2023 年夏季的情况：CRA 在欧洲议会(（[复杂](https://en.wikipedia.org/wiki/European_Union_legislative_procedure))流程的一部分）获得通过，同时提出了一系列要求。保守地说，这些要求并不适合开源，也几乎不适合互联网上的每一款软件。

这包括在供应链早期就进行复杂的认证，以及对发布和贡献提出不切实际的监管要求。大多数这些要求似乎更有可能降低整体软件安全和网络弹性水平，而不是实现 CRA 值得称赞的目标——使事情更加安全可靠。

其中一个关键问题在于，当时所起草的CRA（《网络弹性法案》）并没有真正认识到到这样一个事实，即管理良好的开源软件在很大程度上构成了整个软件行业的基石（[根据欧盟的数据，欧洲范围内该部分产值约为650亿欧元](https://digital-strategy.ec.europa.eu/en/library/study-about-impact-open-source-software-and-hardware-technological-independence-competitiveness-and)）。围绕开源进行协作也是我们行业中创新的主要驱动力（[这一点也得到了欧盟的确认](https://commission.europa.eu/about-european-commission/departments-and-executive-agencies/digital-services/open-source-software-strategy_en)）。这些并非微不足道的经济问题：尽管我们的行业规模较小，但对几乎所有其他行业都产生了巨大的影响。

在过去的几个月里，[ASF, Eclipse, FSF Europe, the Linux Foundation Europe, the Python folks, the Open Source Initiative, Mozilla, NLNet-labs, the Internet Society](https://blog.opensource.org/the-ultimate-list-of-reactions-to-the-cyber-resilience-act/)（以及其他无数组织），以及许多使用开源的工业团体，花费了大量的时间和精力与政策制定者、西班牙欧盟轮值主席国、欧洲议会、欧盟委员会以及 25 个左右的欧洲国家政府进行沟通。不仅要解释开源软件的影响，还要解释什么是开源——以及为什么它对行业的创新能力至关重要，是行业创新的核心所在。同时，由于我们的代码构成了许多其他软件的基础，因此正确理解和对待开源软件对为何对实现CRA（提高安全性）的目标十分重要。

我们也花费大量时间来解释开源及其为何是一种独特且特殊的经济实体——几乎可以视为一种额外的生产要素（除了劳动力、土地、资本等）。就像知识一样，源代码可以被自由复制，而不会对贡献者造成损失或损害。然而，与知识不同的是，源代码既是事物的描述，又是事物本身。

这在几个方面都取得了回报。

首先，政策制定者引入了一个全新的概念：“开源管理人（open source stewards）”。本质上，他们为软件行业创造了一个全新的经济参与者(economic actors)类别，以区别与“将软件投放市场（place software onto the market）”的参与者，CRA 则专注于后者。

其次，CRA 目前的形式与现代软件行业的实际结构更加一致。例如，它现在认识到，开发和分发平台不是“销售”产品的经济参与者，也不是真正参与将人们放在其平台上的任何东西投放到市场的参与者。同样，CRA也承认存在着大量从事代码工作的人员，他们甚至可能将代码披露给他人，但他们并不完全是“将产品投放（place a product）”市场的“经济参与者”。

因此，总的来说，这对运行开源软件和在开源软件基础上进行创新的志愿者来说大多是好消息。或者，更准确地说，比我们大多数人去年夏末想象的要好得多。

话虽如此，这里需要注意的是，政治家和政策制定者并没有以任何方式削弱 CRA，也没有放弃 CRA 的目标：提升网络韧性（improving the resilience of society）和当前（令人遗憾的）软件安全水平。CRA 的这一部分没有改变——在欧洲市场上提供的软件将受到监管——并且必须满足最低（在“关键软件”的情况下相当广泛）的安全标准。

因此，CRA（PLD 和许多其他法律，如数据法案、DSA[注1]、DORA[注2]、NIS2及其金融变体[注3]、互操作性和 SEP 法规[注4]）将对软件行业产生巨大影响。整个行业都将不得不学习如何成为一个受监管的行业。我们将需要学习如何遵守 CE 法规和标志[注5]。这是一项艰巨的工作：影响分析估计额外的开发成本约为 30%（与先前的法规，如 MDD/MDR（欧盟医疗器械指令/欧盟医疗器械法规）大致相同）。

这将对我们开源社区产生的影响，其程度可能不亚于对商业参与者的影响。因为在现实情况下，一家商业公司投放市场的任何软件包中超过[90%](https://www.synopsys.com/content/dam/synopsys/sig-assets/reports/rep-ossra-2022.pdf)的部分通常依赖于开源技术。。很多时候，这些是公司并不十分了解的开源软件——它们的领域知识在于自己编写的那10%顶层代码，即实际实现部分。但底部的90%对他们来说更像是一个黑箱。然而，这家公司仍需要为整个100%的软件获得CE认证标记。

因此，我们有理由预期，社区中几乎每个人都将在面临类似严峻挑战的公司工作。而一旦克服了这个挑战，就意味着你可以进入欧洲市场，但你不会从中获得任何竞争优势。

似乎很可能，这些问题将再次在开源社区内集体解决。因为这对所有相关方来说都是双赢的。我预计，不久我们不仅会看到发布说明、文档和已修复 CVE 列表成为我们发布的一部分，而且一些社区将集体创建和维护一些基本的构建块，然后他们可以在自己的公司中单独使用这些构建块来保护公司的产品。我们可以用典型的开源协作方式做到这一点。

我们开源社区还有很多工作要直接与政策制定者合作。首先，“开源管理人（open source stewards）”的概念是全新的（他们确实试图避免让单一供应商、企业而非社区主导的“开源”获得免费通行证）。这种管理将需要大量的工作来实际定义。除此之外，还需要在国际标准组织中参与制定四十多项国际标准，而这些组织的流程对于由志愿者领导的开源项目来说，并不总是易于有效参与。

在“关键软件”周围还有一个复杂的领域，也没有什么好消息。这适用于防火墙、（硬件）安全模块、底层(low-level)内核和单点登录系统等应用程序。也就是非常暴露且非常关键的软件，存在潜在的系统性风险和影响。问题在于，从表面上看，一旦你深入软件栈并触及开源的基本构建模块时，关键软件下应用的场景可能相当广泛。例如，像APR这样较为晦涩难懂的C语言可移植性库，或是某些LDAP连接器，是否会被归入此类别呢？

这很重要：因为这些关键产品在进入市场时（即您获得实际安全修复的时间点）所需的认证级别需要大量工作。在确保轻松获取修复方案（并减少社区在创造优质方案时由于技能整合不足而产生的摩擦）的同时快速获得充分认证，需要找到一个艰难的平衡点。在这个过程中协助国际标准组织将非常重要。

关于这一切的另一个好消息是，实施期限已经延长了一年，CRA的所有方面都将在2027年初全面生效。

这一系列利好消息的出现，很大程度上要归功于所有开源基金会（以及[Open Forum Europe](https://openforumeurope.org/eu-cyber-resilience-act-takes-a-leap-forward/)的大量帮助和协调）、行业参与者，也归功于所有在国家和欧盟层面保持开放态度、真诚致力于理解开源并解决问题的政策制定者和政治家。

如果您感兴趣的话，接下来最好的信息来源将是下月初举行的权威的[FOSDEM](https://fosdem.org/2024/)大会的政策研讨环节。期待在那里与您相见！

### 为便于读者理解，文中注释为译者标注

* [注1] DSA，数字服务法案（Digital Services Act），是欧盟为了更新互联网平台规则而提出的一系列措施，以确保在线环境的安全与透明度，并打击非法内容和不良行为。
* [注2] DORA，数字运营韧性法案（Digital Operational Resilience Act），旨在增强金融服务行业对于网络风险的抵御能力，并确保金融机构能够应对日益严重的网络安全威胁。
* [注3] NIS2，修订后的网络与信息系统安全指令（Network and Information Systems Directive 2），是对原有NIS指令的升级版，进一步加强了关键基础设施运营商和服务提供商的信息系统安全要求。
* [注4] SEP，标准必要专利（Standard Essential Patents，SEP）相关规定，旨在确保SEP所有者以公平、合理和无歧视（FRAND）条款授权其专利。
* [注5] 在欧盟市场“CE”标志属强制性认证标志，不论是欧盟内部企业生产的产品，还是其他国家生产的产品，要想在欧盟市场上自由流通，就必须加贴“CE”标志，以表明产品符合欧盟《技术协调与标准化新方法》指令的基本要求，<https://single-market-economy.ec.europa.eu/single-market/ce-marking_en>。

## 关于作者

Dirk-Willem van Gulik, VP Public Affairs, Apache Software Foundation。

## 原文链接

[UPDATE ON EU SOFTWARE REGULATION: LOTS OF IMPROVEMENTS & GOOD NEWS](https://news.apache.org/foundation/entry/update-on-eu-software-regulation-lots-of-improvements-good-news)
