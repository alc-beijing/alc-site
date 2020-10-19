---
categories:
- 开源
- Apache way
- 本土
- 传播
- Event
date: 2020-10-12T17:55:29+08:00
description: "Apache顶级项目意味着你所开发的项目，得到了Apache 软件基金会的认可，有了一定的共同体意识和实力，那么在选择进入Apache，孵化的过程中要做些什么？怎么最快获得认可？成为顶级项目又能获得什么？"
keywords:
- Open Source
- Culture
- Reading
- News
- Blog
- Spread
tags:
- Apache local Communtiy 
title: "增长与挑战 —— Apache 中国路演2020在 COSCon'2020（项目孵化篇）  "
url: ""
authors:
- Apache Beijing
---

## 引言

最近的一次数据统计：

| 序号 | 项目名称         | 进入孵化器时间 | 毕业时间   | ppmc/pmc人数 | commiter人数(包含ppmc/pmc) |
| ---- | ---------------- | :------------- | :--------- | ------------ | -------------------------- |
| 1    | Kylin            | 2014年11月     | 2015年11月 | 23           | 39                         |
| 2    | Eagle            | 2015年10月     | 2016年12月 | 16           | 18                         |
| 3    | HAWQ             | 2015年9月      | 2018年8月  | 45           | 68                         |
| 4    | CarbonData       | 2016年6月      | 2017年4月  | 13           | 25                         |
| 5    | RocketMQ         | 2016年11月     | 2017年9月  | 13           | 26                         |
| 6    | Griffin          | 2016年12月     | 2018年11月 | 18           | 20                         |
| 7    | Weex             | 2016年11月     |            | 14           | 26                         |
| 8    | ServiceComb      | 2017年11月     | 2018年10月 | 20           | 23                         |
| 9    | SkyWalking       | 2017年12月     | 2019年4月  | 24           | 34                         |
| 10   | Dubbo            | 2018年2月      | 2019年5月  | 17           | 55                         |
| 11   | ECharts          | 2018年1月      |            | 13           | 19                         |
| 12   | Doris            | 2018年7月      |            | 13           | 17                         |
| 13   | brpc             | 2018年11月     |            | 9            | 9                          |
| 14   | IoTDB            | 2018年11月     | 2020.10    | 23           | 32                         |
| 15   | ShardingSphere   | 2018年11月     |            | 14           | 24                         |
| 16   | DolphinScheduler | 2019年8月      | 2020.5     | 13           | 22                         |
| 17   | Teaclave         | 2019年8月      |            | 15           | 15                         |
| 18   | APISIX           | 2019年10月     | 2020.7     | 18           | 20                         |
| 19   | TubeMQ           | 2019年11月     |            | 20           | 21                         |

为什们国内有这么多的项目要加入 Apache 软件基金会？

让我们听听项目导师和项目创始人现身说法。

## Apache 项目孵化该如何做？

来自十多年辅导项目孵化的“身经百战”的导师，指导和参与孵化上面列表中的Apache项目过半，那么这些所有的历程有哪些通用的法则？来自本土的项目有哪些常犯的错误？姜宁老师现身说法：

> ASF孵化器作为进入Apache软件基金会（ASF）的通道，为进入ASF的项目提供Apache way的辅导，协调孵化项目与ASF基础设施融合，帮助孵化项目发展社区，保证孵化项目软件发布符合ASF的软件发布规范。本次演讲我将结合实际案例讲解ASF的孵化器的运行机制，孵化辅导的基本原则，以及孵化过程需要注意的问题。

姜宁老师是Apache Member ， ALC Beijing 发起人，华为开源软件中心技术专家，前红帽软件首席软件工程师，有十五年以上企业级开源中间件开发经验，有丰富的 Java 开发和使用经验，函数式编程爱好者。从 2006 年开始一直从事 Apache 开源中间件项目的开发工作，先后参与 Apache CXF， Apache Camel，Apache ServiceMix，以及Apache ServiceComb的开发。2015年开始担任Apache 孵化器导师，参与孵化了 Apache Rocket， Apache Skywalking， Apache ShardingSphere， Apache iotDB， Apache Doris， Apache APISIX， Apache Weex。



## 如何才能更加快速的从孵化中毕业

ALC Beijing Podcast 在今年年中和 Apache APISIX 团队核心成员聊：[Apache APISIX 的快速之旅](https://alc-beijing.github.io/alc-site/post/podcast/episode-3-the-story-of-apisix-fulltext/) ,深度的谈及了整个过程，如果你没有读过此文或者听过播客的话，建议在听温铭老师的演讲之前最好是完整的过一遍，温铭老师如此描述他这次的分享：

> Apache APISIX 只用了 9 个月就从 Apache 孵化器顺利毕业，成为顶级项目。在其他人看来是顺风顺水，但其实不然，Apache APISIX 社区和贡献者们从最初对 Apache 文化的疑虑，到尝试，最终认同，背后也有不少波折。#在这次分享中，我将为大家带来 Apache APISIX 在 Apache 孵化器中的一些实践，来印证 Apache Way 在中国依然是行得通的。

**温铭**：深圳支流科技创始人，云原生 API 网关 Apache APISIX PMC 成员，360 开源委员会发起人，《OpenResty 从入门到实战》专栏作者。在互联网安全公司和黑产对抗多年，有 40 多项中美安全专利。

（音频版：[Apache APISIX 的快速之旅](https://alc-beijing.github.io/alc-site/post/podcast/episode-3-the-sotry-of-apisix-audio/) ）

## Apache 对孵化项目的要求

![](https://static001.infoq.cn/resource/image/f1/19/f1d5fb264c6eb92d682bbf81fb2c7a19.jpg)

Craig Russell 先生对于国内的朋友来说不是很陌生，他在2019年接受过InfoQ 二叉树的[专访](https://www.infoq.cn/article/G0JkM80HoYwW6zag7VpB)，在进一步聆听他在COSCon‘20的KeyNote之前，大家可以再温习一下他的主张～，对于这次分享，他如此描述：

>  Apache recently celebrated our 20-year anniversary as a software foundation. Our mission is to provide software for the public good, available at 100% no charge.#The Foundation now oversees over 300 projects with over 7,900 committers from more than 100 countries, and more than half a million contributors over the years, with nearly 40,000 this year alone.#Apache has many contributors and projects from China, including some that were originally developed in China and later became Apache projects through the Incubator.#The permissive Apache License ensures all Apache software is safe by allowing anyone to use, extend, and provide services. The only requirement is to acknowledge the source of the code.
>
> # Apache communities are safe for users and developers, with shared goals, a strict Code of Conduct, and the guidance and protection from the Foundation. 
>
> # The Apache community welcomes participation from all people willing to help make world-class software for the common good.

来，用心感受一下，还需要更多理由吗？

Craig Russell (clr@apache.org) is a Member and Director of The Apache Software Foundation, Assistant Secretary, and former Board Chair. He is a member of the Incubator Project Management Committee responsible for bringing new projects into Apache.
