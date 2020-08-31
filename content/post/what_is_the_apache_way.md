+++
author = "谭中意"
title = "到底什么是The Apache Way？"
date = "2020-08-30"
description = "What is the Apache Way?"
tags = [
    "Apache Way",
]
+++
# 到底什么是The Apache Way？
+ 作者：谭中意
+ 审核：姜宁 李健盛


我们有可能听到过很多次“The Apache Way”。可能会在某个Apache基金会项目的分享会上，它宣称它的日常工作遵循“The Apache Way”；也有可能在某个InnerSource的分享会上，宣称内部开源就是在企业内部推行“The Apache Way”；也有可能在Apache基金会的报告上或者文档上，看到apache基金会的治理遵循“The Apache Way”。那么“The Apache Way”究竟是什么？我们如何来应用它？

我们先看一看Apache开源基金会对此的解释。从它的官网
https://www.apache.org/theapacheway 能看到“The Apache Way”内涵很丰富，即使是Apache基金会的成员们，对什么是“The Apache Way”有很多种解释。

刷新这个页面，随机摘抄几种解释如下：
### “THE APACHE WAY TO ME…”
>"open, sharing, global team work"**

—Jason Zhong, 10 year user of Apache Kylin, Hadoop, contributor to Apache Kylin
Apache kylin的一个贡献者说它是一种开放/共享/国际团队合作的精神。

>"Guide lines or Bible"

—Koji, 18 year user of Apache Lucene, Solr, OpeNLP, Mahout, Spark, Commons, contributor to Apache Solr
一位18年Apache的用户说它是指南甚至是圣经。

>"Freedom, choice and affordability"
—Ajay, 8 year user of Apache Hadoop, Ozone, and contributor to Apache Hadoop, Ozone, Yarn, Ranger, Hive, HBase, Pig
一个8年的贡献者说它是自由，选择。
>"A way for me to change the world positively through my passion for coding."
—Eric Pugh, 16 year user of Apache Turbine, Jakarta, Torque, Solr/Lucene, and contributor to Apache Solr

一个16年的Apache贡献者说它是通过热情编码来改变世界的一种方式。

Apache基金会的Vice Chairman Shane Curcuru在2019 北美ApacheCon上分享上说：
>“The Apache Way is a set or behaviors and practices developed at the ASF and designed to promote long-lived successful projects by focusing on stable governance and encouraging new contributors.”
即“The Apache Way是Apache基金会制定的一套行为或者惯例，旨在通过专注于稳定的治理并鼓励新的贡献者来促进长期成功的项目。”
Apache基金会的副主席说“The Apache Way”是一些行为规范或者惯例。

那么， “The Apache Way”到底是什么？我们如何诠释它，并把它运用在我们的工作中，例如内部开源里面？

我的解读如下：
***“The Apache Way”是Apache开源软件基金会长期以来，一直奉行并证明行之有效的开源社区的一整套成体系的方法论，包括Vision/价值观/原则/行为规范等，用于实现可持续成功开源。***

见下图
![apache projects](../images/what_is_the_apache_way/the_apache_way.png)

不能孤立的把它认为是一种行为规范，也不能把仅仅认为它只是一种价值观。它的内容很丰富，是一整套互相配合/互相支持的方法论。


首先来看它的使命和愿景部分：
https://blogs.apache.org/foundation/entry/the-apache-way-to-sustainable

Apache开源软件基金会的使命描述如下：
>"The mission of the Apache Software Foundation（ASF） is to provide software for the public good. We do this by providing services and support for many like-minded software project communities consisting of individuals who choose to participate in ASF activities".

即为ASF的使命是为公共利益提供软件，我们通过为许多志同道合的软件项目社区提供服务和支持来实现这一目的，这些社区包括选择参加ASF活动的个人。
Apache开源软件基金会作为基于501（C）（3）规则运作的一个非盈利组织，目的就是指导和帮助各个apache开源项目来发展，确保可持续的健康发展。

然后看看它的价值观：Community Over Code.
Apache基金会认为：社区比代码更重要，因为有好的社区，代码会越变越好，即使一开始代码比较差，但是通过活跃社区的协同合作，差的代码会变好；反之如果没有好的社区，代码会逐渐腐化，最终死亡。同时，Apache基金会也认为，对社区的贡献，不仅仅局限于代码，bug report，文档，测试，撰写博客，参与线上线下活动等都是对该项目的贡献。
而要建设一个好的社区，是需要Open即开放，transparency即透明，collaboration即协同等基本价值观的。

再来看看它的原则：
http://www.apache.org/foundation/how-it-works.html

* Collaborative software development
* Commercial-friendly standard license
* Consistently high quality software
* Respectful, honest, technical-based interaction
* Faithful implementation of standards
* Security as a mandatory feature
这些价值观，可以对应翻译如下
* 协同软件开发
* 商业友好的许可证
* 持续的高质量软件
* 尊重，诚实，基于技术的交流
* 标准的准确实现
* 把安全作为高优先级

最后看看它的行为规范和惯例。
http://shaneslides.com/apachecon/TheApacheWay-ApacheConEU2019.html#7

关于行为准则和惯例，Shane又分为如下几个部分
1.	Community - Over code
2.	Merit – recognizing your work
3.	Open Development – for everything
4.	Decision Making – consensus & votes
5.	Communication – How we write

其中最重要的Community部分，解读如下：
Community，即社区，国内著名开源布道师适兕把他翻译为共同体并大力推广，Community是开源项目中最重要的一个组成部分，因为我们不在一起生活，工作，很多人未成谋面，是同一个开源项目把我们链接到了一起。Community包含开发者，文档工程师，测试工程师，系统管理员，当然还包括最终用户。
Apache Community的两个最重要规则是：No Jerks Allowed。Apache的Community不欢迎独狼或者独裁者，而欢迎集体贡献者。第二个规则即以个人身份参与。你参与Apache项目是以个人身份，而不是以某某公司雇员的身份。所以对于公司的团队参与者来说，他们必须以独立个人的身份参与Community活动，当然好处是贡献和口碑永远属于个人。

第二部分：Merit
Merit： 即你贡献的越多，你越有更多的权限（代码提交权限，在committer中vote的权限）。这是用于激励贡献者做出更多贡献的一个很重要措施。

第三部分：Open Development：
使用异步沟通方式，使用mail list。
提交一个大feature的方式：
1.	告诉你的意图 2. 给出你的设计 3.提交代码  4。每一步都欢迎社区的反馈

第四部分：决策机制
共识+投票
投票只在记录一个官方的共识，或者在时间很紧急的情况下快速达成共识。

第五部分：沟通
不欢迎Jerks，Be kind

那么，我们从“The Apache Way”中可以参考到什么？ 把哪些部分应用到我们的内部开源实践中呢？
很显然，它的核心价值观，开放（Open）/透明（transparency）/协作（Collaboration）/等等，是完全适用于企业内部开源环境的，
其次，它的一些基本原则，协同软件开发，持续保持高质量，尊重/诚实，基于共识的决策，这些也是能应用到InnerSource中的。
最后，它的一些行为准则和惯例，也是非常有参考价值的。包括使用工具使得决策公开透明并且可以追溯。


总结：“The Apache Way”是apache基金会用于实现可持续开源成功的一整套方法论体系，我们可以把它其中的价值观/原则/行为规范应用到我们的内部开源实践中，就是在企业内部推行“The Apache Way”。

参考资料：

* https://www.apache.org/theapacheway/
* https://blogs.apache.org/foundation/entry/the-apache-way-to-sustainable
* http://shaneslides.com/apachecon/TheApacheWay-ApacheConEU2019.html#7
