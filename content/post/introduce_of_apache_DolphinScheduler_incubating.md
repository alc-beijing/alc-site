+++
author = "代立冬,李岗"
title = "DolphinScheduler介绍"
date = "2020-03-15"
description = "The introduction about DolphinScheduler"
tags = [
    "The introduction about DolphinScheduler",
]
+++
# DolphinScheduler介绍
DolphinScheduler，简称”DS”, 中文名 “小海豚调度”（海豚聪明、人性化，有左右脑可互相换班，终生不用睡觉）。希望 DolphinScheduler 就像它的名字一样，成为一个“开箱即用”的灵活易用的调度系统。
## 1概述
Apache DolphinScheduler（目前处在孵化阶段）是一个分布式、去中心化、易扩展的可视化DAG工作流任务调度系统，其致力于解决数据处理流程中错综复杂的依赖关系，使调度系统在数据处理流程中开箱即用。

DolphinScheduler是2019年开源的一个调度系统，在去年美国时间2019年8月29号，分布式任务调度引擎DolphinScheduler（原EasyScheduler）正式通过顶级开源组织Apache基金会的投票决议，根据Apache基金会邮件列表显示，在包含11个约束性投票(binding votes)和2个无约束性投票(non-binding votes)的投票全部持赞同意见，无弃权票和反对票，投票顺利通过，这样便以全票通过的优秀表现正式成为了Apache孵化器项目！

## 2背景
在2017年，易观在运营自己6.8Pb大小、6.02亿月活、每天近万个调度任务的大数据平台时，受到ETL复杂的依赖关系、平台易用性、可维护性及二次开发等方面掣肘，易观的技术团队渴望找到一个具有以下功能的数据调度工具：

易于使用，开发人员可以通过非常简单的拖拽操作构建ETL过程。不仅对于ETL开发人员，无法编写代码的人也可以使用此工具进行ETL操作，例如系统管理员和分析师；
解决“复杂任务依赖”问题，并且可以实时监视ETL运行状态；
支持多租户；
支持许多任务类型：Shell，MR，Spark，Flink，SQL（mysql，postgresql，hive，sparksql，clickhouse等），DataX，Sqoop，Python，Sub_Process，Procedure等；
支持HA和线性可扩展性。
易观技术团队意识到现有开源项目没有能够达到他们要求的，因此决定自行开发这个工具。他们在2017年底设计了DolphinScheduler的主要架构；2018年5月完成第一个内部使用版本，后来又迭代了几个内部版本后，系统逐渐稳定下来。

## 3特点
DolphinScheduler提供了许多易于使用的功能，可加快数据ETL工作开发流程的效率。其主要特点如下：

 * 通过拖拽以DAG 图的方式将 Task 按照任务的依赖关系关联起来，可实时可视化监控任务的运行状态；
 * 支持丰富的任务类型；
 * 支持工作流定时调度、依赖调度、手动调度、手动暂停/停止/恢复，同时支持失败重试/告警、从指定节点恢复失败、Kill 任务等操作；
 * 支持工作流全局参数及节点自定义参数设置；
 * 支持集群HA，通过 Zookeeper实现 Master 集群和 Worker 集群去中心化；
 * 支持工作流运行历史树形/甘特图展示、支持任务状态统计、流程状态统计；
 * 支持补数，并行或串行回填数据。

## 4系统架构
DolphinScheduler 是从数据处理的痛点出发，因此其解决的问题以及优化的方向都与上述我们提到的调度系统有所不同，主要有以下 5 点：

 * 可视化流程设计减轻了开发者配置工作流的复杂度，从繁琐的基础配置中解放出来，不用再靠编程来配置流程，提升开发效率；

 * 扩展性强，在当下这样一个业务变化快、技术迭代频繁的现在，丰富的任务类型、跨语言和自定义插件机制良好的可扩展性，无疑使这款框架具备了更长的寿命和更广泛的落地场景；

 * 支持工作流定时调度、依赖调度、手动调度、手动暂停 / 停止 / 恢复，同时支持失败重试 / 告警、从指定节点恢复失败、Kill 任务等操作

 * 支持集群 HA，通过 Zookeeper 实现 Master 集群和 Worker 集群的天然去中心化架构设计，使得系统的高可用性得到保证；

 * 通过拖拽以 DAG 图的方式将 Task 按照任务的依赖关系关联起来，可实时可视化监控任务的运行状态，完善的服务监控系统，方便运维人员快速进行问题定位。

目前，中国平安、美团、嘀嗒出行、多点互动等多家企业都已经将 Apache DolphinScheduler 应用到了实际场景中。

![avatar](../../images/ds/ds_architecture.jpg)


## 5开源推进路线
![avatar](../../images/ds/ds_development.png)

## 参考链接
[1] https://dolphinscheduler.apache.org/zh-cn/index.html
[2] https://www.infoq.cn/article/SeODu1bwlyjCUR70t6KD

