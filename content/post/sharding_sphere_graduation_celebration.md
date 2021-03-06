+++
author = "潘娟（Trista）"
title = "Apache毕业贺礼—Apache ShardingSphere跌宕起伏的开源之路"
date = "2020-04-20"
description = "Apache毕业贺礼—Apache ShardingSphere跌宕起伏的开源之路"
tags = [
    "ASF-SS",
]
+++

作者介绍

> 潘娟，京东数科高级DBA，Apache ShardingSphere PMC
> 张亮，京东数科数据研发负责人，Apache ShardingSphere VP，Apache Dubbo PMC，人气开源项目Elastic-Job作者

### 前序
```
从Sharding-JDBC到Apache ShardingSphere；
从轻量级的分库分表中间件到完整闭环的分布式数据库中间件平台；
从2016年1月的第一行代码到现今的300K+行代码；
从寥寥无几的关注到GitHub 10K+的star；
从无人问津的社区到100+位贡献者；
从公司内部的应用类库到100+的采用公司列表；
从寻找mentor到顺利成为Apache顶级项目。
……
```

ShardingSphere在经历了500多天的ASF孵化器孵化，毕业成为Apache顶级项目。ASF孵化器作为进入ASF的通道，为进入ASF的项目提供Apache Way的辅导，协调孵化项目与ASF基础实施融合，帮助孵化项目发展社区，确保孵化器项目发布的软件符合ASF的软件发布规范。本文是Apache ShardingSphere核心开发团队分享的Apache孵化历程，很值得想加入ASF大家庭的新项目参考。

### 项目介绍

Apache ShardingSphere是一套开源的分布式数据库中间件解决方案组成的生态圈，它由3款相互独立，却又能够混合部署配合使用的产品组成。它们均提供标准化的数据分片、分布式事务和数据库治理功能，可适用于如Java同构、异构语言、云原生等各种多样化的应用场景，核心功能如1-1所示。

![1-1](../images/sharding_sphere_graduation_celebration/1-1.png)
1-1 ShardingSphere核心功能架构图

Apache ShardingSphere由三个子项目组成，形成一个完整的数据库解决方案，合称 J.P.S. 生态系统。

**ShardingSphere-JDBC**：定位为轻量级Java框架，在Java的JDBC层提供额外服务。 它使用客户端直连数据库，以jar包形式提供服务，无需额外部署和依赖，可理解为增强版的JDBC驱动，完全兼容JDBC和各种ORM框架。
**ShardingSphere-Proxy**：定位为透明化的数据库代理端，提供封装了数据库二进制协议的服务端版本，用于完成对异构语言的支持。 目前提供MySQL/PostgreSQL版本，它可以使用任何兼容MySQL/PostgreSQL协议的访问客户端操作数据，对DBA更加友好。
**ShardingSphere-Sidecar（TODO）**：定位为Kubernetes的云原生数据库代理，以Sidecar的形式代理所有对数据库的访问。 通过无中心、零侵入的方案提供与数据库交互的的啮合层，即Database Mesh，又可称数据网格。

**Apache ShardingSphere的亮点主要包括**：
1.  完整的分布式数据库解决方案：提供数据分片、分布式事务、数据弹性迁移、数据库和数据治理等核心能力。
2.  独立的SQL解析引擎：支持多SQL方言的完全独立化SQL解析引擎，能够脱离ShardingSphere独立使用。  
3.  可插拔微内核：所有的SQL方言、数据库协议和功能都能够通过SPI的可插拔方式加载或卸载，微内核甚至在未来可以运行于无任何功能的空白环境中。
 
### Apache基金会

The most popular open source software is Apache.
这是对Apache开源软件基金最好的描述和肯定。它旨在为全世界提供优质的开源软件，同时欢迎全世界的朋友加入Apache社区贡献力量，并在这个过程中不断成长、得到肯定、共建开源社区。无论是否从事软件开发工作，
大家多少都知道它的存在和它提供的优质开源项目，可见其影响之大、之深远。此外，参与Apache开源社区，并在自己的努力下成为Apache committer，更是大多数软件开发工程师心之所向。
ShardingSphere在开源之初，就有进入Apache开源组织基金会的计划。其原因有以下几点
1. Apache基金会独特的Apache way和社区建设思想会让一个开源项目更规范、更有生命力。
2. Apache基金会的导师制度会为一个开源社区带来优秀的指导和帮助。
3. Apache基金会会为其下的开源项目带来版权和商标上的法律保护。
4. Apache基金会在全世界范围内的影响不言而喻，若是能进入Apache基金会，则会扩大项目的影响力，使其进入世界范围的开源领域。
5. Apache基金会内的项目会更有机会登上世界舞台，并与其他开源项目建立友好交流，也能吸引更多贡献者加入社区。
但同样，进入Apache开源基金会的门槛可并不简单，特别对于国内的项目来说，语言和地域的障碍无疑雪上加霜。
    
### 为Apache做准备

找寻mentor是进入Apache基金的最初且最重要的一步。在了解了Apache基金会的运作方式后，我们便踏上了找寻mentor之旅。参加各种与开源相关的分享会或meetup，借此来认识Apache的member。但是，事情却并不顺利。多次的尝试，多次的接触换来的只是口头的认可。这段时间我们确实倍感压力和焦虑，甚至打算以后再说，一切随缘。
后来一个契机，我们认识了吴晟和姜宁。吴晟是Apache SkyWalking项目的VP，在开源领域有丰富的经验。他和ShardingSphere的前身Sharding-JDBC很有渊源，Sharding-JDBC项目原型也有他参与设计，因此，他最终作为ShardingSphere的PPMC一同建设社区。在参与ShardingSphere社区建设的这一年多的时间里，他又陆续担任了多个Apache孵化项目的Mentor，并在今年被选举为Apache Member；而姜宁同样是一位热心又有经验的老手，国内最资深的Apache Member之一，他是多个国内发起的Apache孵化项目的导师，有着丰富的项目孵化经验。 在与他交流的过程中，我们了解到项目孵化还需要再寻找到两位导师的支持，他也乐意帮助我们介绍导师。这终于让我们看到一些希望，他也最终成为了我们的mentor。再后来，团队VP张亮又前去上海参加HDC大会，认识了我们的另一位mentor—Craig L Russell，Craig当时是Apache的秘书长，所有的SGA、ICLA等法务文件均由他负责接收签署。在ShardingSphere孵化的过程中，Craig当选了Apache软件基金会的主席。他友善而和气，给予了我们很多有关社区规范的实用建议，也愿意助我们一臂之力；第三位mentor则是由Apache RocketMQ的核心成员冯嘉担任；最后由Roman Shaposhnik担任项目的Champion，为项目寻找导师之旅画上完美句号。
至今还记得我们当时的欣喜和激动。每个进入Apache基金会的项目，一定都有自己的故事。进入ASF孵化难这一问题是由于大家对ASF的孵化流程不了解， 同时缺少有经验的接口人（Champion）的介入引起的。 随着ALC Beijing的建立和越来越多本地开发者成为孵化器导师，我们相信这一问题能够很快得到解决。如果大家对加入ASF孵化器进行孵化感兴趣的话，欢迎大家与ALC Beijing的成员联系，在这里你可以结识到很多Apache的项目的开发者，ASF成员以及孵化器导师。 

### 进入Apache孵化器

为了正式进入Apache孵化器，项目代码、社区、文档等都需要进行一系列的规范化整理。这确实是个琐碎但很重要的事情。
代码层面，合规操作是首要原则。我们梳理第三方依赖的许可协议， 确保满足Apache软件许可协议（ASL）合规的要求；社区交流方面，我们开始由中文转变成英文；文档方面则需要我们准备英文文档，并准备相关的提案（proposal）。由于项目最开始的目标就是进入Apache基金会，所以在项目初期，依赖就尽可能地简单，社区相对规范，文档在不断翻译。不打无准备之仗，这些提前的准备让这部分工作进展顺利，而项目获得Apache域名的那一刻，大家才真切感受到所有付出得到了最有价值的回报。
除了学习写规范代码，团队成员也开始学习Apache的规范、社区运作方式、以及英文邮件沟通等细节问题。我们开始了解到如何关注社区，什么是consensus decision，如何用异步方式进行邮件沟通。特别是邮件列表的学习非常重要，你可以在其中找到历史问题记录、合规的解决方案、优秀的案例等。

### Apache way的探索

很多人认为只要代码开放，就叫做开源。但其实，这仅仅只是开源旅程的第一步。如何构建一个活跃的社区，如何理解Apache way，是一个更为重要的话题。Apache Way是Apache社区运作的经验的总结， 一句话概括就是社区大于代码。 
Apache Way包含了:
精英之治 - 个人通过他们的工作积累功绩，通过功绩获得相应的职位。
透明度 - 我们的项目是公开方式进行开发的，所以每个想参与的人都能够参与其中。
社区话运作 - 我们始终将社区健康放在首位发展开源项目。
ShardingSphere在进入Apache孵化器初期并未能完全理解Apache way，并且由于过度注重代码风格，以至于参与门槛较高、社区活跃度平平。起初，我们并不知道问题出在哪里，迷茫了很长一段时间，直到在跟Apache的member不断交流的过程中才渐渐意识到问题所在，因此社区发起了有关committer bar的讨论，见图1-2。
这是社区建设之路的转折点，因为从此community over code的理念开始逐渐渗入人心，并指导我们的行动。

![1-2](../images/sharding_sphere_graduation_celebration/1-2.png)
1-2 Committer bar讨论邮件

仔细阅读Apache way的关注点：**Earned Authority, Community of Peers, Open Communications, Consensus Decision Making, Responsible Oversight。你会发现它一直在强调合规、开放、平等、协作，为的就是建立合规且活跃的项目社区，尽可能地做到让更多的人参与，平等沟通，推动项目发展，促进个人成长。**
秉持这个理念，ShardingSphere开始在多维度进行调整，

*   代码：规整代码结构，划分模块功能，提供项目可插拔能力，从而允许用户局部参与某一模块的同时，尽量不破坏整体代码结构。
*   心态：开放的心态，编制社区任务，鼓励社区朋友参与，相关PPMC或Committer积极提供指导和帮助。    
*   规范：梳理文档和代码规范，并提供详细的订阅、参与指南，大范围促进用户自主进行社区贡献。   
*   交流：鼓励社区尽可能使用邮件和Issue进行讨论从而公开讨论内容，同时针对较为细节的讨论则放在微信群里进行。此外，官方公众号还会介绍社区的进展、Release、刊登技术文章等。    
*   合作：与其他Apache社区建立联系、增加沟通，从合作交流中进行学习和发展。

在孵化期间，Apache ShardingSphere先后与Apache SkyWalking、Apache ServiceComb进行项目的合作与集成，不仅彼此的产品功能更加完善，还增加了社区成员之间的交流。此外，还与Apache DolphinScheduler（Incubating）和Apache IoTDB（Incubating）举办了co-meetup，详见图1-3。还与Apach pulsar和Apache APISIX（Incubating）的核心成员们进行了多次交流和探讨。

![1-3](../images/sharding_sphere_graduation_celebration/1-3.png)
1-3 co-meetup

经过时间的积累，社区已有了质的变化。从社区的邮件讨论、GitHub的数据展示中，你会发现ShardingSphere的社区开始真正变得活跃与多元化。图1-4展示了ShardingSphere在Apache孵化器一年多的社区数据变化。

![1-4](../images/sharding_sphere_graduation_celebration/1-4.png)
1-4 社区数据变化

社区与贡献者之间的依赖和互赢也在整个过程中体现的淋漓尽致。对于贡献者来说，他们会在这个开源社区中与其他人交流、协作。而这个持续的过程，将带来以下成果，

*   扩大人际交友圈  
*   不断学习与成长    
*   提高自己的技术影响力    
*   拓宽职业渠道    
*   结合兴趣，享受过程
    
而对于社区来说，这个相互帮助和沟通的过程则会，

*   拓展项目的功能   
*   收获活跃多元化的生态圈    
*   增加项目知名度    
*   获得社区的可持续发展
    
从这个角度来看，不断探索Apache way不也是希望出现这样一种共赢而互助的局面吗？**Please remember community over code。**

### 从孵化器毕业

所有孵化器的项目最终都希望能走向TLP（Top Level Project）。在mentor的指导、PPMC的探索、committer和contributor的支持与付出下，ShardingSphere开始筹备Apache孵化器毕业。依据Apache的成熟度评估模型图1-5，在以下几个方面评估社区和项目是否成熟。其实在Apache项目社区的初建阶段，我们建议大家就在这几个方面发力，因为这是官方给予的毕业标准及指导方针。以此为方向，探索属于各自项目的独特社区运作方式，也可谓是百花齐放。

![1-5](../images/sharding_sphere_graduation_celebration/1-5.png)
1-5 Apache项目成熟度评估模型

经历Release、社区建设、Apache member的指导、meetup举办等一系列事件，ShardingSphere终于在社区发起了毕业讨论，开始接受Apache member及所有Apache成员的指导和评估。虽然最终以10 +1 binding votes，6 +1 non-binding votes和 no -1 or +/-0 votes通过毕业投票，但过程也是一波三折。
即便是经过1年多的社区建设，项目基本成熟，但面对毕业还是有很多工作要合乎毕业规范。例如确认商标是否可使用、完成项目官网有关Apache brand和trademark的陈述、网站符合Apache way等。在这个投票期间，由于官网存在fork me on github的slogan，而这一问题一直频繁出现并且没有结论，所以其他Apache成员借此单独开辟了thread来讨论这一问题，查看[Email List](https://lists.apache.org/api/source.lua/r84959a94322697b6b21cc003d4abb5a9a5b4e43e8ebeea223a0ccdfb@%3Cgeneral.incubator.apache.org%3E)了解详情。虽说这一举让ShardingSphere被成功推到前台，间接提高了项目的曝光，却也能看出Apache对于第三方独立、禁止参与商业行为的重视和严苛。**可喜可贺的是，2020年4月16日，Apache ShardingSphere最终通过基金会董事会决议，加入了TLP行业！**

### 未来的路
回首这一路，收获与付出兼存。这篇文章旨在用故事为大家带来更为生动、全面的阐述和论据支撑，而在文章结尾，我们也特别想对读者朋友说：
1. 愿这篇文章能为你打开新的思路，它像一扇窗，为有心的人呈现另一种职业风景，带来新的思潮。
2. 希望文章有关"参与开源社区意义"的部分能为你解答有关开源价值的问题。
3. 每一个Apache开源项目都有自己独特的社区发展方向和价值观。参与其中，选择与你气味相投的社区，是一件很有价值且很有意思的事情。
4. 有张有弛，有进有退；不妄自菲薄，也不目空一切；在开源的领域，更确切说在Apache开源社区，更多的是遵守规范、开放包容、平等交流、互相学习。
5. 低头工作，便全力以赴；耳闻窗外，便接收新潮，更新大脑。

从Apache孵化器毕业成为TLP，对ShardingSphere来说，并不是一个结束，而是另一个开始。在产品功能上，ShardingSphere将继续在分布式数据库中间件平台上深耕，打磨出以“分布式”为核心的数据库中间件生态圈，从而提供完整的解决方案，如图1-6所示。从社区角度讲，ShardingSphere仍将继续活跃社区，鼓励更多朋友成为社区的committer和contributor。所以，我们欢迎大家关注ShardingSphere，并加入到社区来，与更多知己结伴前行。
**未来之路不可预测，但立足当下，眺望未来，初心未改，即便亦步亦趋，也愿一苇以航！**

![1-6](../images/sharding_sphere_graduation_celebration/1-6.png)
1-6 Apache ShardingSphere生态圈



### Apache ShardingSphere committer列表

#### Mentor
Craig L Russell
冯嘉，阿里巴巴
姜宁，华为

#### PMC
张亮，京东数科
潘娟，京东数科
赵俊，京东数科
张永伦，京东数科
陈清阳，翼支付
曹昊，海南新软
马晓光
杜红军，领创智信
杨翊，京东数科
吴晟，tetrate.io
高洪涛，tetrate.io

#### Committer
李亚，九个小海豹
颜志一，DaoCloud
董宗磊，京东零售
孙海生，瓜子
王奇，京东零售
欧阳文，一卡易
蒋晓峰，阿里巴巴
王光远
秦金卫，京东数科
岳令
赵亚楠

> 官网：[https://shardingsphere.apache.org/](https://shardingsphere.apache.org/)
