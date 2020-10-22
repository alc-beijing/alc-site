---
categories:
- 开源
- Apache way
- 本土
- 传播
- Event
date: 2020-10-12T17:55:29+08:00
description: "在本土会将open source community 翻译为开源社区，这样的翻译对于多数人来讲是会和居委会相混淆的，失去了计算机、信息领域的职业共同体的意味，也就是说开源本来就很小众了，如果加上知识产权方面的伤害，真的吃不消。这可能是中国本土开源一直萎靡不振的一个重要原因吧。那么在如此恶劣的情形下，加入Apache的项目如何在建立共同体方面突围了呢？"
keywords:
- Open Source
- Culture
- Reading
- News
- Blog
- Spread
tags:
- Apache local Communtiy 
title: "文化融合 —— Apache 中国路演2020在 COSCon'2020（Community 建设篇）  "
url: ""
authors:
- Apache Beijing
---

## 引言

开源发展至今，来自community 的力量是无法忽视的，甚至有的观点认为，开源的核心就是开源community。我们在上篇：

* [增长与挑战 —— Apache 中国路演2020在 COSCon'2020（项目孵化篇）](https://alc-beijing.github.io/alc-site/post/event/apache-roadshow-china-2020-virtual/)

介绍 在Apache孵化项目的过程，需要做什么，以及如何避免走弯路，并给出了完美的实践。Apache SkyWalking的 VP 吴晟先生在 ApacheCon 2020 的Keynote分享上，明确的指出了摆在本土面前重要的障碍之一就是：**共同体建设**，如何吸引来自全球的开发者，不仅在语言上，更多在文化上有非常大的挑战。

在COSCon‘2020 + Apache 中国路演的论坛上，我们看看有哪些关于开源共同体方面的建设的分享：

## Apache Way

正确把握Apache 之道，从来不是一件容易的事，因为它从来也不是事无巨细的规则，而是一种哲学思想、一种向导指南，除了日常的融入已有的Apache项目进行感受之外，还要听听哪些前辈们对此如何解读：

>  Apache recently celebrated our 20-year anniversary as a software foundation. Our mission is to provide software for the public good, available at 100% no charge.#The Foundation now oversees over 300 projects with over 7,900 committers from more than 100 countries, and more than half a million contributors over the years, with nearly 40,000 this year alone.#Apache has many contributors and projects from China, including some that were originally developed in China and later became Apache projects through the Incubator.#The permissive Apache License ensures all Apache software is safe by allowing anyone to use, extend, and provide services. The only requirement is to acknowledge the source of the code.#Apache communities are safe for users and developers, with shared goals, a strict Code of Conduct, and the guidance and protection from the Foundation. #The Apache community welcomes participation from all people willing to help make world-class software for the common good.

### Apache Community建设

高校向来是被认为是本土发展开源的可能之地，几代人一次次从希望中放弃，不是没有道理的，开源至今，在多个领域内高校都是空白，这和美国本土的开源不仅是难以动摇的基石，还是引领前沿，甚至是商业的青睐有加，差别甚远。但是，即使在这片荒芜之地，还是出现了一种可能性。那就是 Apache IoTDB：

>  物联网数据库 Apache IoTDB 是目前唯一一个由中国高校发起，并从 Apache 孵化成功的顶级项目。本次分享将介绍 IoTDB 社区的发展历程。包括如何帮助学生参与系统开发和了解开源文化；从社区寻找志同道合的项目贡献者和维护者；打造好用、管用的产品并吸引用户使用。同时，作为项目的初始成员，作者也会分享从零开始构建社区做出的尝试和心路历程。

#### 企业实践

Upsteam first 是企业走开源之路的不二法门，小米作为新一代IT公司，在开源方面做的可圈可点，但是在数据分析方面算是一个突破口，以崔宝秋为首的拥抱开源，公共做的不错，那么有什么底气没有？那就是屡屡斩获各种开源奖项的张铎，小米如何做Upstream，进而满足自身的业务需求，且成就一干开发者的故事。

> 张铎将介绍小米存储团队在HBase，Kudu等几个Apache旗下开源项目上的实践经验，以及捐赠Pegasus项目到Apache基金会的始末，同时对公司和个人如何参与开源项目提出一些指导和建议。

在从来没有接触过开源，然后突然将自己的项目开源，这应该是一个当今很多公司常犯的错误，嗯，进入Apache 孵化是不是可以让人更加省劲了呢？或许未必，但是共同体的教训和收获绝对是一堂重要的课：

>  做开源项目要经历哪些槛？郭炜将以自己的实际经历来分享前几次失败后的反思，终于将大数据任务调度 DolphinScheduler 贡献给Apache，并在1年时间社区用户达到了3000多人

>  Apache Pulsar是Apache软件基金会顶级项目，是下一代云原生分布式消息流平台。除了在功能特性发面不断发展演进，Apache Pulsar社区也在最近一年取得不断成长和发展，全球贡献者人数突破300位，周边生态快速发展，国内社区发展也是一大特色。在本演讲中，将为大家详细介绍Apache Pulsar社区最新进展与动态、所取得的成绩与后续发展计划，并分享我们在Apache Pulsar社区运营方面的经验与心得。

### 不走寻常路

对于沟通的工具上，本土有着巨大的阻力，异步、公开这两项是严重不符合中国本土的现有文化的，那么在邮件列表很难推行，微信群、QQ群大行其道的当下，是否有可能通过技术手段，将这个文化差异打通了呢？我们来看看国人的尝试：

> OSS.Chat 项目的使命是为开源项目开发社群搭建一道打通 WeChat 及其它社交平台 (未来) 和 GitHub Issues 与邮件列表的三向沟通和翻译壁垒的桥梁，让 ASF 的文化、技术和协作流程能尽快地容易地被接受，而不是一开始就磕磕绊绊。通过 Chatbot 这种自动化流程机制，让开发者能够更加便捷的分享和沟通开源项目的开发信息。尤其是对社区开放资料的存档和二次归纳处理，是我们认为很有意义的一件事情。透过 OSS.Chat 项目，我们希望能进一步推广、传播乃至于优化 Apache 项目社区的文化、技术、与协作。

该演讲的题目叫做：**OSS.Chat - 通往 Apache Way 的一道虹桥**

## 主讲嘉宾介绍

**Craig Russell **(clr@apache.org) is a Member and Director of The Apache Software Foundation, Assistant Secretary, and former Board Chair. He is a member of the Incubator Project Management Committee responsible for bringing new projects into Apache.

**张铎 **,毕业于清华大学计算机科学与技术系，长年从事开源软件的开发与维护。2015年成为Apache HBase项目的Committer，2016年成为Apache HBase项目在大陆的第一位PMC成员，2019年7月成为Apache HBase项目的主席，2020年4月成为Apache软件基金会member。2018年，在Apache软件基金会全球近7000名Committer中，贡献数量排名第三。在开发和维护HBase项目的同时，也是数个Apache孵化项目的mentor，例如NuttX，Pegasus等。目前在小米公司云平台部负责存储相关工作，兼任小米开源委员会主席。

**李卓桓**，Tencent TVP of Chatbot。清华大学本科，中欧国际工商学院EMBA，北京邮电大学计算机系博士在读。现任PreAngel合伙人，Plug and Play Venture Partner，关注钟子期AI创业项目。zixia BBS、叽歪网创始人，曾任优酷网首席科学家、水木清华BBS站长，ChinaRen系统工程师。拥有丰富的互联网创业投资和编程经验，著有《Linux网络编程》《反垃圾邮件完全手册》《智能对话与深度学习》《Chatbot从0到1》《简明的 TensorFlow 2》等技术图书。2016 年在 GitHub 发布基于 Apache-2.0 许可证的 Conversational SDK Wechaty 开源项目，现有数十位 Committers，百余位 Contributors ，并被近万名 GitHub 开发者 Star 。

**郭炜**，2015年加入易观，担任易观CTO，负责构建易观技术团队、完成易观大数据采集、平台、数据挖掘等技术架构与体系；从无到有完成易观混合云的搭建、以及易观SDK的升级，并发布易观秒算实时计算平台。目前易观大数据平台日处理数据量达30T，日处理数据200亿条。# 郭炜先生毕业于北京大学，加入易观之前，曾任联想研究院大数据总监，万达电商数据部总经理，并曾在中金、IBM、Teradata公司担任大数据方向重要岗位，对大数据前沿领域颇有研究。#并在 infoq、TGO、CSDN、51CTO、ArchSummit等会议上多次做过分享.

**乔嘉林**（笔名铁头乔），物联网数据库 Apache IoTDB 项目初始成员及 PMC，清华大学软件学院博士生，负责 IoTDB 核心模块研发和实施运维，同时致力于社区运营与宣传，帮助开源小白加入社区。#曾参加过IoTDB与Pulsar见面会的演讲《时序数据全生命周期的开源解决方案》#即将在Apache con2020介绍IoTDB用户案例及优化。

**王殿进**： 目前就职于由 Apache Pulsar 、Apache BookKeeper 原生核心开发者组建的开源团队 StreamNative，负责 Apache Pulsar 社区运营及市场工作。个人始终保持对开源的关注，拥有数年的开源行业经验，贡献过多个开源项目，曾服务于技术媒体、云计算、SaaS等行业公司，在社区运营方面经验丰富。