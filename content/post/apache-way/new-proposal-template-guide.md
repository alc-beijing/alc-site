
+++
author = "刘天栋 "
title = "[翻译]新孵化项目提案指导"
date = "2023-09-18"
description = "本文翻译了孵化提案指导文档， 详细描述了撰写进入ASF孵化器提案需要做的准备工作并提供了相关的文档示例."
tags = [
    "Apache Way",
    "孵化提案"
]
+++

* **原文链接：** https://cwiki.apache.org/confluence/display/INCUBATOR/New+Podling+Proposal?desktop=true&macroName=markdown
  
* **译者：** 刘天栋 Ted Liu
* **校对：** 姜宁 Willem Jiang

## 摘要 Abstract

评注： 对项目的简短描述性概述。一段简短的文字，长度最好为一句话。摘要应适合在毕业时用于创建正式项目的董事会决议中重复使用，并作为新孵化项目网站和项目描述 （DOAP: Description of a Project）文件的第一段。

Commentary: A short descriptive summary of the project. A short paragraph, ideally one sentence in length. The abstract should be suitable for reuse in the board resolution used to create the official project upon graduation, as the first paragraph on the podling web site and in the DOAP document.

示例 Examples:

> Geronimo 将是一个符合 J2EE 规范的容器。
>
> Geronimo will be a J2EE compliant container.
>
> Heraldry 将围绕以用户为中心的新兴身份空间开发技术。
>
> Heraldry will develop technologies around the emerging user-centric identity space.
>
> Yoko 将成为 CORBA 服务器。
>
> Yoko will be a CORBA server.

## 提案 Proposal

评注： 较长的建议说明。应具有合理的陈述性。更多的论述性材料应放在理由部分（或后面的其他部分）。

Commentary: A lengthier description of the proposal. Should be reasonably declarative. More discursive material should be included in the rationale (or other later sections).

示例 Example:
> XAP 提供了一个基于 XML 的声明式框架，用于构建、部署和维护丰富的交互式 Ajax 网络应用程序。XAP 的一个基本原则是利用现有的 Ajax 应用程序...
>
> XAP is to provide an XML-based declarative framework for building, deploying and maintaining rich, interactive, Ajax-powered web applications. A basic principle of XAP is to leverage existing Ajax...

## 背景介绍 Background

评论： 为不熟悉问题范畴和项目历史的人提供背景资料。解释含义可能被误解的术语（例如，没有一个被广泛采用的定义）。这些内容应该能够被领域专家安全地忽略。这些内容最终可能会出现在新孵化项目的网站上。

Commentary: Provides context for those unfamiliar with the problem space and the history of the project. Explain terms whose meanings may be misunderstood (for example, where there is not a single widely adopted definition). This content should be capable of being safely ignored by domain experts. It should probably find an eventual home on the Podling website.

示例 Example（Heraldry）:
> Higgins 项目是 Eclipse 正在积极开发的一个框架，它将使用户和企业能够跨多个系统集成身份、个人资料和关系信息。通过使用上下文提供者，现有的和新的系统，如目录、协作空间等，都可以使用 Higgins 项目。
>
> To provide some background, the Higgins Project is being actively developed within Eclipse and is a framework that will enable users and enterprises to integrate identity, profile, and relationship information across multiple systems. Using context providers, existing and new systems such as directories, collaboration spaces

## 合理性（提案理由）Rationale

评论：解释为什么这个项目需要存在，为什么它应该被 ASF 采用。这里适合讨论性材料。

Commentary: Explains why this project needs to exist and why should it be adopted by Apache. This is the right place for discursive material.

示例 Example (Beehive):
> 在构建 J2EE 应用程序时，我们亟需一个连贯、易用的编程模型。刚刚接触 Java 的开发人员不得不学习大量的 API 来构建简单的应用程序；高级 J2EE 开发人员不得不编写乏味的系统架构描述代码；由于底层的复杂性，工具作者在简化体验方面受到限制。
>
> There is a strong need for a cohesive, easy-to-use programming model for building J2EE applications. Developers new to Java are forced to learn a myriad of APIs just to build simple applications; advanced J2EE developers are forced to write tedious plumbing code; and tools authors are limited in what they can do to simplify the experience due to the underlying complexity.

## 初始的目标 Initial Goals

评注： 复杂的建议（例如，涉及多个现有代码库）可能会让人担心其实用性。解决这些问题的一个好办法是制定一个计划，证明该建议是可行的，并且经过了深思熟虑。

Commentary: A complex proposal (involving multiple existing code bases, for example) may cause concerns about its practicality. A good way to address these concerns is to create a plan that demonstrates the proposal is feasible and has been carefully thought through.

许多项目不需要本节。

Many projects will not need this section.

示例 Example（Heraldry）：

> 将 Yadis 和 OpenID 库扩展到现有 Python、Ruby、Perl 和 PHP 库之外的其他语言，以修订 OpenID 身份验证规范，解决已知的安全问题，研究与 DIX IETF 提案的兼容性，描述 Yadis 集成，并允许使用 URL 或 XRI 作为最终用户标识符
>
> Expansion of Yadis and OpenID libraries into additional languages beyond the existing Python, Ruby, Perl, and PHP libraries’ OpenID authentication specification revision to fix known security considerations, investigate compatibility with the DIX IETF proposal, describe Yadis integration, and allow either an URL or XRI be used as the End User's Identifier

## 目前状态 Current Status

评注： 本部分（以及包含的主题）描述了候选项目的现状和开发实践。这应该是一个诚实的评估，并将其与 Apache 的原则和开发理想相平衡。

Commentary: This section (and the contained topics) describes the candidate's current status and development practices. This should be an honest assessment balancing these against Apache's principles and development ideals.

对于某些提案来说，这是一个展示对毕业前需要解决的问题的理解的机会。而对于其他提案，这则是一个强调与已有 Apache 之道密切匹配的机会。没有初始代码库的提案应简单说明这一点。

For some proposals, this is a chance to demonstrate an understanding of the issues that will need to addressed before graduation. For others, this is a chance to highlight the close match with Apache Way that already exists. Proposals without an initial code base should just simply state that.

有些提案将这一部分命名为准则（虽然这个词有点误导）。

Some proposals name this section criteria (though the term is a little misleading).

### 任人唯贤 Meritocracy:

评注： ASF 是一个任人唯贤的地方。

Commentary: Apache is a meritocracy.

一旦开发人员提交了足够多的优秀补丁，他们就会很自然地当选为提交者。活跃的提交者被选入项目管理委员会（PMC）也是理所当然的。

Once a developer has submitted enough good patches, then it should be natural that they are elected to committer. It should be natural that active committers are elected to the project management committee (PMC).

这一更新过程对于 Apache 项目的长期健康发展至关重要。这份提案正是证明提案者理解这一过程的合适场所。

This process of renewal is vital to the long term health of Apache projects. This is the right place to demonstrate that this process is understood by the proposers.

示例 Example （OFBiz）：

> OFBiz 最初由 David E. Jones 和 Andy Zeneski 于 2001 年 5 月创建。该项目现在拥有来自世界各地的提交者和用户。项目中较新的提交者是在随后几年加入的，他们最初提交补丁，然后拥有部分应用程序的提交权限，再后来拥有更多应用程序的提交权限。
>
> OFBiz was originally created by David E. Jones and Andy Zeneski in May 2001. The project now has committers and users from around the world. The newer committers of the project joined in subsequent years by initially submitting patches, then having commit privileges for some of the applications, and then privileges over a larger range of applications.

示例 Example（Beehive）：

> 我们计划尽一切可能营造一个支持任人唯贤的环境。XMLBeans 的提交者们学到的经验之一是，优秀的社区不只是从良好的愿望中发展出来的；它们需要积极地向社区寻求帮助，列出/说明需要完成的工作，并跟踪和鼓励做出贡献的社区成员...
>
> We plan to do everything possible to encourage an environment that supports a meritocracy. One of the lessons that the XMLBeans committers have learned is that meritocracies don't just evolve from good intentions; they require actively asking the community for help, listing/specifying the work that needs to be done, and keeping track of and encouraging members of the community who make any contributions...

### 社区 Community

评注： 阿帕奇只对社区感兴趣。

Commentary: Apache is interested only in communities.

候选项目应从一个社区开始，并有可能通过吸引新用户和开发者来发展和更新这个社区。请说明您的提案如何符合这一愿景。

Candidates should start with a community and have the potential to grow and renew this community by attracting new users and developers. Explain how the proposal fits this vision.

示例 Example（Beehive）：

> 过去两年中，BEA 一直在围绕该框架的前身建立一个社区。目前有一个活跃的新闻组，可以帮助我们在 Apache 建立一个新的社区。
> 
> BEA has been building a community around predecessors to this framework for the last two years. There is currently an active newsgroup that should help us build a new community at Apache.

示例 Example（WebWork2）：

> WebWork 2 社区拥有活跃的邮件列表和论坛，追随者众多。
> 
> The WebWork 2 community has a strong following with active mailing lists and forums.

示例 Example（WADI）：

> 开源中对全服务集群和缓存组件的需求是巨大的，因为它可以应用于许多领域，从而为一个巨大的社区提供了潜力。
> 
> The need for a full service clustering and caching component in the open source is tremendous as its use can be applied in many areas, thus providing the potential for an incredibly large community.

### 核心开发者 Core Developers

ASF 是由个人组成的。

Apache is composed of individuals.

对初始提交者列表中的开发人员进行简要介绍是非常有用的。最好在这里进行（而不是在初始提交至列表部分才介绍）。本节可用于讨论核心开发团队的多样性。

It is useful to provide a brief introduction to the developers on the initial committers list. This is best done here (and not in that section). This section may be used to discuss the diversity of the core development team.

示例 Example（ServiceMix）

> 核心开发人员是一个多元化的开发团队，其中许多人已经是经验丰富的开源开发人员。他们中至少有一名 Apache 成员，还有其他一些现有的 Apache 提交者（Committer），以及来自不同公司的人员。http://servicemix.org/Team。
>
> The core developers are a diverse group of developers, many of which are already very experienced open source developers. There is at least one Apache Member together with a number of other existing Apache Committers along with folks from various companies. http://servicemix.org/Team

示例 Example（WADI）

> WADI 由 Jules Gosnell 于 2004 年创立，目前拥有来自 Geronimo、Castor、OpenEJB、Mojo、Jetty、ActiveCluster、ActiveMQ 和 ServiceMix 的强大开发人员基础。
>
> WADI was founded by Jules Gosnell in 2004, it now has a strong base of developers from Geronimo, Castor, OpenEJB, Mojo, Jetty, ActiveCluster, ActiveMQ, and ServiceMix.

### 相关性 Alignment 

说明为什么您的提案和 Apache 非常匹配。强调您的提案与 Apache 项目和开发理念的联系。

Describe why Apache is a good match for the proposal. An opportunity to highlight links with Apache projects and development philosophy.

示例 Example (Beehive):
> 初始代码库的目标是在 Tomcat 中运行，但我们的目标是让该框架在任何兼容的 Servlet 或 J2EE 容器上运行。基于 JSR-181 的 Web 服务组件将利用 Axis。NetUI 组件基于 Struts。底层控制组件框架使用 Velocity。我们还需要开发其他项目，如 Portals 和 Maven 项目。
>
> The initial code base is targeted to run within Tomcat, but the goal is to allow the framework to run on any compliant Servlet or J2EE container. The Web services component, based on JSR-181, will leverage Axis. The NetUI component builds on top of Struts. The underlying Controls component framework uses Velocity. There are other projects that we will need to work on, such as the Portals and Maven projects.

## 已知风险 Known Risks

自我认识的练习。风险并不意味着项目不可接受。如果认识到并注意到这些风险，就可以在孵化期间加以解决。

An exercise in self-knowledge. Risks don't mean that a project is unacceptable. If they are recognized and noted, then they can be addressed during incubation.

### 项目名称 Project Name

说明已采取哪些措施检查项目名称是否合适，以及项目是否获得继续使用其现有名称的法律许可。还请说明广泛使用该名称是否会在将来造成项目所有权人的混淆或品牌问题。

Describe what has been done to check that the name of the project is suitable and if the project has legal permission to continuing using its current name. Also indicate if the wide use of the name is likely to cause confusion about who owns the project or branding issues in the future.

### 被遗弃的产品 Orphaned Products

对未来发展做出公开承诺。

A public commitment to future development.

招募多样化的开发社区和强大的用户群需要时间。ASF 需要确信提议者是有决心的。

Recruiting a diverse development community and a strong user base takes time. Apache needs to be confident that the proposers are committed.

示例 Example (Yoko):
> 贡献者都是这一领域的领先者。不存在出现孤儿代码或废弃代码的任何常见警告信号的风险。
>
> The contributors are leading vendors in this space. There is no risk of any of the usual warning signs of orphaned or abandoned code.

示例 Example (Ivy):
>由于提交者人数较少，因此项目存在成为 "孤儿 "的风险。代码库的主要知识仍由 Xavier Hanin 掌握。即使 Xavier 没有离开 Ivy 开发团队的打算，我们也意识到了这个问题，并且知道需要努力减少项目对个人的依赖。
>
> Due to its small number of committers, there is a risk of being orphaned. The main knowledge of the codebase is still mainly owned by Xavier Hanin. Even if Xavier has no plan to leave Ivy development, this is a problem we are aware of and know that need to be worked on so that the project become less dependent on an individual.

示例 Example (Tika):
> 有许多处于不同成熟阶段的项目都实现了 Tika 中建议功能的一部分。对于许多潜在用户来说，现有的工具已经足够，这就减少了对更通用工具包的需求。这一点也可以从过去一年中该提案的缓慢进展中看出。不过，一旦项目启动，我们就可以根据下面提到的种子代码，迅速达到现有工具的功能水平。在此之后，我们相信，基于通用工具包优于定制工具包的优势，开发者和用户社区将迅速发展壮大。
>
> There are a number of projects at various stages of maturity that implement a subset of the proposed features in Tika. For many potential users the existing tools are already enough, which reduces the demand for a more generic toolkit. This can also be seen in the slow progress of this proposal over the past year. However, once the project gets started we can quickly reach the feature level of existing tools based on seed code from sources mentioned below. After that we believe to be able to quickly grow the developer and user communities based on the benefits of a generic toolkit over custom alternatives.

### 缺乏开源经验 Inexperience with Open Source

如果提案是基于现有的开源项目，并具备开放开发的历史，则应在此处重点说明。

If the proposal is based on an existing open source project with a history of open development, then highlight this here.

如果初始提交者名单中包含具有深厚开源背景的开发人员，则应在此处强调这一点。

If the list of initial committers contains developers with strong open source backgrounds, then highlight this here.

缺乏开源经验是封闭项目选择申请孵化的原因之一。多年来，Apache 在这方面积累了丰富的经验。成功开放一个封闭项目意味着所有参与者都要投入精力。这需要学习和回馈社区的意愿。如果提案是围绕一个封闭项目提出的，并且对开源领域知之甚少，那么请承认这一点，并表现出学习的意愿。

Inexperience with open source is one reason why closed projects choose to apply for incubation. Apache has developed over the years a store of experience in this area. Successfully opening up a closed project means an investment of energy by all involved. It requires a willingness to learn and to give back to the community. If the proposal is based around a closed project and comes with very little understanding of the open source space, then acknowledge this and demonstrate a willingness to learn.

示例 Example (Cayenne):
> Cayenne 于 2001 年作为开源项目启动，至今已有 5 年时间。
>
> Cayenne started as an open source project in 2001 and has remained so for 5 years.

示例 Example (Beehive):
> 许多提交者都有开源项目的工作经验。其中五人有在其他 Apache 项目中担任提交者的经验。
>
> Many of the committers have experience working on open source projects. Five of them have experience as committers on other Apache projects.

示例 Example (Ivy):
> 虽然 Ivy 是在开源许可证下发布的，但最初对它的访问是有限的，公众无法访问问题跟踪系统或 SVN 资源库。虽然后来情况有所改变 - SVN 仓库可以公开访问，JIRA 实例自 2005 年 6 月起就已建立，许多新功能都是先在论坛或 JIRA 上讨论的 - 但真正开源开发模式的经验目前还很有限。不过，Maarten 在真正的开放源代码开发流程方面已经有了很好的经验，他将把自己的经验带到项目中来。
>
> While distributed under an open source license, access to Ivy was initially limited with no public access to the issue tracking system or svn repository. While things have changed since then - the svn repository is publicly accessible, a JIRA instance has been setup since june 2005, many new features are first discussed on the forum or JIRA - experience with a true open source development model is currently limited. However, Maarten already has good experience with true open development process, and brings his experience to the project.

示例 Example (River):
> 最初的提交者在开源项目方面拥有不同程度的经验。他们都参与过以开源许可证发布的源代码，但使用开源开发流程开发代码的经验有限。不过，我们预计在正常的任人唯贤规则下执行不会有任何困难。
>
> The initial committers have varying degrees of experience with open source projects. All have been involved with source code that has been released under an open source license, but there is limited experience developing code with an open source development process. We do not, however, expect any difficulty in executing under normal meritocracy rules.

### 孵化期 Length of Incubation

说明：本节说明了项目在升级为顶级项目之前预计需要多长时间的孵化，以及孵化的原因。

Commentary: This section describes how long the project is expected to be in incubation before it's graduation as a top level project and the reasons for that.

这表明项目已经考虑了毕业所需的步骤，没有任何不切实际的期望。

This shows the project has thought about the steps required to graduate and that there are not any unrealistic expectations.

### 同质化的开发人员 Homogenous Developers:

健康的项目需要开发商的组合。开放式开发需要致力于鼓励多样化的混合。这包括在分布式环境中作为地理位置分散的小组的一部分开展工作的艺术。

Healthy projects need a mix of developers. Open development requires a commitment to encouraging a diverse mixture. This includes the art of working as part of a geographically scattered group in a distributed environment.

从一个单一的社区开始并不妨碍项目进入孵化阶段。但对于这些项目来说，致力于创建一个多样化的开发人员组合是有益的。那些已经拥有混合社区的项目应该借此机会突出自己的工作。

Starting with a homogenous community does not prevent a project from entering incubation. But for those projects, a commitment to creating a diverse mix of developers is useful. Those projects who already have a mix should take this chance to highlight what they do.

示例 Example (Beehive):
> 目前的提交者名单包括来自几家不同公司的开发人员和许多独立志愿者。提交者分布在美国、欧洲和亚洲。他们在分布式环境中工作经验丰富。
>
> The current list of committers includes developers from several different companies plus many independent volunteers. The committers are geographically distributed across the U.S., Europe, and Asia. They are experienced with working in a distributed environment.

示例 Example (River)
> 由于 Jini 技术入门套件迄今为止主要由 Sun Microsystems 开发，因此该项目的绝大多数初始提交者都来自 Sun。多年来，Sun 收到了其他开发人员提供的错误修复和增强功能，并将其纳入代码。我们的计划是与这些其他开发人员合作，并在取得进展时将他们添加为提交者。最初的提交者还有三位（非 Sun 开发人员）： Bill Venners、Dan Creswell 和 Mark Brouwer。Bill 是服务 UI API 工作的领导者，Dan 参与了许多基于 Jini 的开发，包括名为 Blitz http://www.dancres.org/blitz/ 的 JavaSpaces 服务的实现，而 Mark 则是许多基于 Jini 开发的资深人士，包括 Virgil  http://www.virgil.nl 的商业工作以及开源 Cheiron http://www.cheiron.org 项目的领导者。
>
> Since the Jini Technology Starter Kit has been mainly developed to date by Sun Microsystems, the vast majority of initial committers to the project are from Sun. Over the years, Sun has received bug fixes and enhancements from other developers which have been incorporated into the code. Our plan is to work with these other developers and add them as committers as we progress. There are three other initial committers (non-Sun): Bill Venners, Dan Creswell, and Mark Brouwer. Bill is the lead of the Service UI API work, Dan has been involved with much Jini-based development, including an implementation of the JavaSpaces service called Blitz http://www.dancres.org/blitz/, and Mark is veteran of much Jini-based development, including commercial work at Virgil http://www.virgil.nl as well as leading the open source Cheiron http://www.cheiron.org project.

示例 Example (Ivy):

> 只有两名核心开发人员，至少他们不是同质化的！Xavier 和 Maarten 之所以认识，完全是因为他们对 Ivy 的共同兴趣。
> With only two core developers, at least they are not homogenous! Xavier and Maarten knew each other only due to their common interest in Ivy.

### 对受雇开发人员的依赖 Reliance on Salaried Developers

一个由受雇开发人员主导的项目，如果他们只对自己受雇的代码感兴趣，那么这个项目的长期健康发展就会受到威胁。

A project dominated by salaried developers who are interested in the code only whilst they are employed to do so risks its long term health.

Apache 以人为本，而不是以公司为本。我们希望，无论开发人员目前的雇主是谁，他们都能继续参与 Apache 的工作。

Apache is about people, not corporations. We hope that developers continue to be involved with Apache no matter who their current employer happens to be.

这正是表明受雇开发人员和志愿者之间初步平衡的好时机。此外，还可以谈谈开发人员的投入程度。

This is the right place to indicate the initial balance between salaried developers and volunteers. It's also good to talk about the level of commitment of the developers.

示例 Example (OpenJPA):
> 大多数开发人员都是由他们的雇主支付工资来为这个项目做出贡献的，但是考虑到 Java 社区对 JPA 实现的期待以及提交者对代码的主人翁意识，如果没有受雇开发人员为这个项目做出贡献，这个项目的继续也不会有问题。
>
> Most of the developers are paid by their employer to contribute to this project, but given the anticipation from the Java community for the a JPA implementation and the committers' sense of ownership for the code, the project would continue without issue if no salaried developers contributed to the project.

示例Example (River):
> 预计 Jini 的开发工作将利用受雇时间和下班后的志愿者时间进行。虽然依赖于受薪开发人员（目前来自 Sun，但预计其他公司的受薪开发人员也会参与进来），但 Jini 社区非常活跃，事情应该很快就会平衡。与此同时，Sun 将在未来支持该项目，为 Jini 提供 "工作时间"，以便顺利过渡。
>
> It is expected that Jini development will occur on both salaried time and on volunteer time, after hours. While there is reliance on salaried developers (currently from Sun, but it's expected that other company's salaried developers will also be involved), the Jini Community is very active and things should balance out fairly quickly. In the meantime, Sun will support the project in the future by dedicating 'work time' to Jini, so that there is a smooth transition.

示例 Example (Wicket):
> 虽然有两位开发者 - Martijn和Eelco - 在业余时间编写了Wicket In Action（出版商Manning），但他们都不依赖Wicket做咨询工作。大多数开发者都在日常工作中使用Wicket，有些人还在多个项目中使用，而且随着他们的公司（特别是Topicus、Cemron和Teachscape）选择Wicket作为开发框架，他们还将在相当长的一段时间内使用Wicket。
>
> None of the developers rely on Wicket for consulting work, though two - Martijn and Eelco - are writing Wicket In Action (publisher Manning) in their spare time. Most of the developers use Wicket for their day jobs, some for multiple projects, and will do so for a considerable while as their companies (specifically Topicus, Cemron and Teachscape) choose Wicket as their development framework of choice.

### 与其他 Apache 产品的关系 Relationships with Other Apache Products

Apache 项目应愿意与 Apache 内部和外部的其他开源项目合作。候选项目应愿意走出自己的小圈子。

Apache projects should be open to collaboration with other open source projects both within Apache and without. Candidates should be willing to reach outside their own little bubbles.

您的提案是一个讨论现有联系的机会。这也是讨论未来潜在联系和计划的合适场所。

This is an opportunity to talk about existing links. It is also the right place to talk about potential future links and plans.

Apache 允许不同的项目有相互竞争或重叠的目标。不过，这应该意味着代码库之间的友好竞争和社区之间的真诚合作。

Apache allows different projects to have competing or overlapping goals. However, this should mean friendly competition between codebases and cordial cooperation between communities.

候选项目是现有项目的直接竞争者，还是间接竞争者（问题领域相同，生态利基不同），抑或只是有一些重叠的同行，并不总是很明显。在间接竞争的情况下，摘要必须准确描述生态利基。直接竞争者很有可能会被要求总结与现有项目在结构上的异同。

It is not always obvious whether a candidate is a direct competitor to an existing project, an indirect competitor (same problem space, different ecological niche) or are just peers with some overlap. In the case of indirect competition, it is important that the abstract describes the niche accurately. Direct competitors should expect to be asked to summarize architectural differences and similarities to existing projects.

示例 Example (OpenJPA):
> Geronimo 可能会使用 Open JPA，它需要一些 Apache 产品（regexp、commons collections、commons lang、commons pool），并支持 Apache commons 日志。
>
> Open JPA will likely be used by Geronimo, requires some Apache products (regexp, commons collections, commons lang, commons pool), and supports Apache commons logging.

示例 Example (River):
> 目前，与 Apache 项目的唯一联系是入门套件使用 Ant 构建工具。未来可能会有一些联系（http 服务器、数据库后台等），我们将对此进行探索。
>
> Currently, the only tie to Apache projects is the starter kit's use of the Ant build tool. There are potential future ties (http server, database backend, etc) that will be explored.

### 对 Apache 品牌的过度迷恋 An Excessive Fascination with the Apache Brand

过去曾有人担心，有些项目的提出似乎只是为了给提案者带来正面的宣传效果。本节正是让大家相信事实并非如此的好地方。

Concerns have been raised in the past that some projects appear to have been proposed just to generate positive publicity for the proposers. This is the right place to convince everyone that is not the case.

本节也是在过去曾施行过不端行为之后（例如，如果任何与提案有关的人在过去以与事实不符的方式将自己与 ASF 品牌联系在一起），重新与社区建立联系，并承诺未来良好行为的合适处所。

This is also the right place to build bridges with the community after past misdemeanors (for example, if any of those associated with the proposal have - in the past - sort to associate themselves with the Apache brand in factually incorrect ways) and promise good conduct for the future.

示例（CeltiXfire）Example (CeltiXfire):
> 虽然我们希望 Apache 品牌有助于吸引更多的贡献者，但我们对启动本项目的兴趣是基于前述 "合理性（提案理由）" 部分中提到的因素。不过，我们也会对无意中滥用 Apache 品牌的行为保持警惕，并将与孵化器项目管理委员会和项目管理委员会合作，确保品牌政策得到尊重。
>
> While we expect the Apache brand may help attract more contributors, our interests in starting this project is based on the factors mentioned in the Rationale section. However, we will be sensitive to inadvertent abuse of the Apache brand and will work with the Incubator PMC and the PRC to ensure the brand policies are respected.

示例 Example (Wicket):
> ASF 拥有强大的品牌，这个品牌本身就很有吸引力。不过，Wicket 的开发者已经在自己的道路上取得了相当大的成功，继续走下去完全没有问题。我们有兴趣加入 ASF，以增加我们在开源领域的人脉和知名度。此外，我们从一开始就是 Apache 的热心用户（还记得 JServ 吗？
>
> The ASF has a strong brand, and that brand is in itself attractive. However, the developers of Wicket have been quite successful on their own and could continue on that path with no problems at all. We are interested in joining the ASF in order to increase our contacts and visibility in the open source world. Furthermore, we have been enthusiastic users of Apache from the earliest hour (remember JServ anyone?), and feel honored at getting the opportunity to join the club.

示例 Example (OpenJPA):
> 我们认为，Open JPA 将受益于广泛的合作，能够建立一个开发者和提交者社区，其影响力将超过创始人，并将被其他 Apache 项目（如 Geronimo 项目）所接受。
>
> We think that Open JPA is something that will benefit from wide collaboration, being able to build a community of developers and committers that outlive the founders, and that will be embraced by other Apache efforts, such as the Geronimo project.

## 文档 Documentation

更多阅读材料参考。

References to further reading material.

示例 Examples (Heraldry):
> - 有关 Yadis 的信息，请访问： http://yadis.org http://www.openidenabled.com
> - Information on Yadis can be found at: http://yadis.org http://www.openidenabled.com
> - 有关 OpenID 的信息，请访问： http://www.openid.net http://www.openidenabled.com OpenID 和 Yadis 的邮件列表如下： http://lists.danga.com/mailman/listinfo/yadis
> - Information on OpenID can be found at: http://www.openid.net http://www.openidenabled.com The mailing list for both OpenID and Yadis is located at: http://lists.danga.com/mailman/listinfo/yadis


### 初始代码 Initial Source

描述本提案之代码库的来源。如果初始代码的来源不止一个，则应在此概述不同的历史。

Describes the origin of the proposed code base. If the initial code arrives from more than one source, this is the right place to outline the different histories.

如果没有初始代码，请在此处注明。

If there is no initial source, note that here.

示例 Example (Heraldry):
> OpenID 自 2005 年夏季开始开发。它目前拥有一个活跃的社区（超过 1,500 万个启用账户）和多种语言的库。此外，它还得到了 LiveJournal.com 的支持，并继续在开源社区中获得关注。Yadis 自 2005 年底开始开发，其规范自 2006 年初以来一直未变。与 OpenID 一样，它也有各种语言的库，两个社区之间有很大的重叠。
>
> OpenID has been in development since the summer of 2005. It currently has an active community (over 15 million enabled accounts) and libraries in a variety of languages. Additionally, it is supported by LiveJournal.com and is continuing to gain traction in the Open Source Community. Yadis has been in development since late 2005, and the specification has not changed since early 2006. Like OpenID, it has libraries in various languages, and there is a large overlap between the two communities.

## 代码和知识产权提交计划 Source and Intellectual Property Submission Plan

复杂的提案（通常涉及多个代码库）可能需要在此为提交代码制定一个初步计划，并证明本提案切实可行。

Complex proposals (typically involving multiple code bases) may find it useful to draw up an initial plan for the submission of the code here. Demonstrate that the proposal is practical.

示例 Example (Heraldry):
> - OpenID 规范和 openid.net 上的内容来自 Six Apart 公司的 Brad Fitzpatrick 和 VeriSign 公司的 David Recordon。
> - The OpenID specification and content on openid.net from Brad Fitzpatrick of Six Apart, Ltd. and David Recordon of VeriSign, Inc.
> - 域名 openid.net 和 yadis.org 来自 Six Apart, Ltd. 的 Brad Fitzpatrick 和 NetMesh, Inc.
> - The domains openid.net and yadis.org from Brad Fitzpatrick of Six Apart, Ltd. and Johannes Ernst of NetMesh, Inc.
> - JanRain 公司提供了 Python、Ruby、Perl、PHP 和 C# OpenID 库。
> - OpenID libraries in Python, Ruby, Perl, PHP, and C# from JanRain, Inc.
> - 来自 NetMesh 和 VeriSign 公司的 Yadis 一致性测试套件
> - Yadis conformance test suite from NetMesh and VeriSign, Inc.
> 我们还将为各种开源软件征集更多插件和补丁。
> We will also be soliciting contributions of further plugins and patches to various pieces of Open Source software.

### 外部依赖 External Dependencies

初始源的外部依赖性很重要。根据 Apache 政策，只有部分外部依赖是允许的。对于孵化中的项目，这些限制最初（在一定程度上）会比较宽松。

External dependencies for the initial source is important. Only some external dependencies are allowed by Apache policy. These restrictions are (to some extent) initially relaxed for projects under incubation.

如果初始源存在依赖关系，导致无法毕业，则应在此处说明如何解决这些问题。

If the initial source has dependencies which would prevent graduation, then this is the right place to indicate how these issues will be resolved.

示例 Example (CeltiXfire):
> 所有依赖项都有与 Apache 兼容的许可证。其中包括 BSD、CDDL、CPL、MPL 和 MIT 许可的依赖项。
> The dependencies all have Apache compatible licenses. These include BSD, CDDL, CPL, MPL and MIT licensed dependencies.

### 加密技术 Cryptography

如果提案直接或间接涉及加密代码，ASF 需要了解情况，以便获得相关文件。

If the proposal involves cryptographic code either directly or indirectly, Apache needs to know so that the relevant paperwork can be obtained.

## 所需资源 Required Resources

### 邮件列表 Mailing lists

最少需要的列表是 private@{podling}.incubator.apache.org（用于 PPMC 的私密讨论）和 dev@{podling}.incubator.apache.org 列表。请注意，项目历史上曾错误地命名了私有列表 PMC。为避免混淆适当的用法，ASF 决议将所有此类列表重新命名。

The minimum required lists are private@{podling}.incubator.apache.org (for confidential PPMC discussions) and dev@{podling}.incubator.apache.org lists. Note that projects historically misnamed the private list PMC. To avoid confusion over appropriate usage, it was resolved that all such lists be renamed.

如果该项目是开源的新项目，那么从这些最基本的清单开始是最好的方法。最初的重点是招募新的开发人员。早期采用者就是潜在的开发者。随着发展势头的增强，社区可能会决定在必要时创建提交和用户列表。

If this project is new to open source, then starting with these minimum lists is the best approach. The initial focus needs to be on recruiting new developers. Early adopters are potential developers. As momentum is gained, the community may decide to create commit and user lists as they become necessary.

迁移到 Apache 的现有开源项目可能希望在这里采用与它们相同的邮件列表设置。但是，并不是所有的邮件列表都必须在启动过程中创建。新的邮件列表可以通过新孵化项目列表上的投票来添加。

Existing open source projects moving to Apache will probably want to adopt the same mailing list set up here as they have already. However, there is no necessity that all mailing lists be created during bootstrapping. New mailing lists can be added by a VOTE on the Podling list.

默认情况下，{podling}的提交将通过电子邮件发送至 commits@{podling}.incubator.apache.org。因此建议采用此命名约定。

By default, commits for {podling} will be emailed to commits@{podling}.incubator.apache.org. It is therefore recommended that this naming convention is adopted.

邮件列表选项将在其他地方详细介绍。

Mailing list options are described at greater length elsewhere.

示例 Example (Beehive):
> - private@beehive.incubator.apache.org（有人管理主持的订阅列表）
> - private@beehive.incubator.apache.org (with moderated subscriptions)
> - dev@beehive.incubator.apache.org
> - commits@beehive.incubator.apache.org

### Subversion 目录 Subversion Directory
常规做法是使用全小写、以破折号（-）分隔的目录名。目录应位于孵化器目录空间内 (http://svn.apache.org/repos/asf/incubator).

It is conventional to use all lower case, dash-separated (-) directory names. The directory should be within the incubator directory space (http://svn.apache.org/repos/asf/incubator).

示例 Example (OpenJPA):
> https://svn.apache.org/repos/asf/incubator/openjpa

### Git 仓库 Git Repositories

传统的做法是使用全小写、以破折号（-）分隔的版本库名称。资源库的前缀应为 incubator，之后如果项目晋升为顶级项目（TLP），则应重新命名。

It is conventional to use all lower case, dash-separated (-) repository names. The repository should be prefixed with incubator and later renamed assuming the project is promoted to a TLP.

示例 Example (Batchee):
> https://gitbox.apache.org/repos/asf/incubator-batchee.git

### 问题跟踪 Issue Tracking

Apache 运行 JIRA 和 Bugzilla。请选择一个。指明项目在问题跟踪系统中的名称。

Apache runs JIRA and Bugzilla. Choose one. Indicate the name by which project should be known in the issue tracking system.

示例 Example (OpenJPA):
> JIRA Open-JPA (OPEN-JPA)

### 其他资源 Other Resources

在此说明提案所需的任何其他特殊基础设施要求。请注意，在允许在核心硬件上提供新服务之前，基础设施团队通常会要求提供令人信服的论据。大多数提案都不需要这一部分。

Describe here any other special infrastructure requirements necessary for the proposal. Note that the infrastructure team usually requires a compelling argument before new services are allowed on core hardware. Most proposals should not require this section.

上面未涉及的大多数标准资源（如持续集成）应在引导后添加。基础架构文档会解释这一过程。

Most standard resources not covered above (such as continuous integration) should be added after bootstrapping. The infrastructure documentation explains the process.

## 初始提交者 Initial Committers

用于引导社区的提交者列表（注明姓名和电子邮件地址）。标记每个已提交贡献者许可协议 (以下简称 CLA) 的提交者。现有的提交者应使用他们的 apache.org 电子邮件地址（因为他们只需要适当的因果关系）。其他提交者应使用 CLA 上的（或将要使用的）电子邮件地址。这样就可以很容易地将 CLA 与提议的项目提交者匹配起来。

List of committers (stating name and an email address) used to bootstrap the community. Mark each which has submitted a contributor license agreement (CLA). Existing committers should use their apache.org email address (since they require only appropriate karma). Others should use the email address that is (or will be) on the CLA. That makes it easy to match CLAs with proposed committers to the project.

最好在提交提案的同时提交 CLA。将 CLA 存放在 Apache 不会有任何损失，但处理可能需要一些时间。

It is a good idea to submit CLAs at the same time as the proposal. Nothing is lost by having a CLA on file at Apache, but processing may take some time.

注意这一点。考虑创建一个单独的板块，让感兴趣的开发人员表达他们的兴趣（并可能留下简要介绍），或请他们在普通邮件列表中发布信息。

Note this. Consider creating a separate section where interested developers can express an interest (and possibly leave a brief introduction) or ask them to post to the general list.

示例 Example (OpenJPA):
> Abe White (awhite at bea dot com)
> Marc Prud'hommeaux (mprudhom at bea dot com)
> Patrick Linskey (plinskey at bea dot com)
> ... 
> Geir Magnusson Jr (geirm at apache dot org)
>  * Craig Russell (clr at apache dot org) *

## 保荐者 Sponsors

这是一个有点争议的话题。Apache 的提交者都是个人，他们以自己的名义在这里工作。评判他们的标准是他们的优点，而不是他们的从属关系。不过，本着全面公开的精神，我们还是希望能在一开始就公开列出任何可能会影响最初提交者独立性的当前附属关系。

A little bit of a controversial subject. Committers at Apache are individuals and work here on their own behalf. They are judged on their merits, not their affiliations. However, in the spirit of full disclosure, it is useful for any current affiliations which may affect the perceived independence of the initial committers to be listed openly at the start.

例如，那些从事项目工作的受薪职位人员应列出其所属单位。有了这份名单，就可以判断初步名单的多样性程度，从而判断还有多少工作要做。

For example, those in salaried positions whose job is to work on the project should list their affiliation. Having this list helps to judge how much diversity exists in the initial list and so how much work there is to do.

这最好在提交者列表之外的单独部分进行。

This is best done in a separate section away from the committers list.

只有初始引导列表中的提交者的隶属关系是相关的。这些提交者并不是按照通常的任人唯贤的程序加入的。我们强烈建议，项目启动后，开发人员应根据其贡献而非背景来评判。引导完成后，不应再保留此列表。

Only the affiliations of committers on the initial bootstrap list are relevant. These committers have not been added by the usual meritocratic process. It is strongly recommended that once a project is bootstrapped, developers are judged by their contributions and not by their background. This list should not be maintained after the bootstrap has been completed.

### 引路者（倡导者）Champion:

引路者是已经与 ASF 有联系的人，他领导提案过程。通常情况下（但并非必须），"引领者" 也会被提名为 "导师"。

The Champion is a person already associated with Apache who leads the proposal process. It is common - but not necessary - for the Champion to also be proposed as a Mentor.

应在提案制定过程中找到一位 "引路者（倡导者）"。他的作用是帮助制定提案，并与您一起解决孵化项目管理委员会（IPMC）在审查提案时提出的意见和问题。

A Champion should be found while the proposal is still being formulated. Their role is to help formulate the proposal and work with you to resolve comments and questions put forth by the IPMC while reviewing the proposal.

### 被提名的导师 Nominated Mentors:

列出被提名为候选项目的导师[定义]的符合条件（且愿意）的个人的名单。

Lists eligible (and willing) individuals nominated as Mentors [definition] for the candidate.

三位导师提供了一个法定人数，并允许 Podling 从孵化器项目管理委员会获得更多自主权，因此目前的共识是三位导师是一个很好的数字。无论如何，任何有经验的 ASF 社区成员都可以提供非正式指导，重要的是确保 Podling 有足够的固定导师，以便顺利进行。对于 Podling 可以拥有的正式或非正式导师的数量没有限制。

Three Mentors gives a quorum and allows a Podling more autonomy from the Incubator PMC, so the current consensus is that three Mentors is a good number. Any experienced Apache community member can provide informal mentorship anyway, what's important is to make sure the podling has enough regularly available mentors to progress smoothly. There is no restriction on the number of mentors, formal or informal, that a Podling may have.

### 保荐者的实体 Sponsoring Entity

保荐者是 ASF 内负责此提案的组织单位。发起单位可以是
The Sponsor is the organizational unit within Apache taking responsibility for this proposal. The sponsoring entity can be:

- ASF 董事会 The Apache Board
- 孵化器 The Incubator
- 另一个 Apache 项目。相应项目的项目管理委员会将决定是否保荐/支持（通过投票）。除非与现有的 Apache 项目有紧密联系，否则建议提案请求孵化器赞助。
- Another Apache project. The PMC for the appropriate project will decide whether to sponsor (by a vote). Unless there are strong links to an existing Apache project, it is recommended that the proposal asks that the Incubator for sponsorship.

请注意，孵化项目最终在 ASF 组织结构中的去向将在孵化毕业时决定。

Note that the final destination within the Apache organizational structure will be decided upon graduation.