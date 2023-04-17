---
categories:
- Apache way
- Release
date: 2023-04-07T17:07:07+08:00
description: "对于每个初入 ASF 的项目来说，第一次发版都会多少遇到不少小问题和麻烦事，尤其以 License/Notice/Copyright 相关的问题为典型代表"
keywords:
- Open Source
- ASF
- Release
- Blog
tags:
- Release
title: "【Release】ASF 孵化项目发版常见问题"
url: ""
authors:
- imbajin
---

> 这篇文档基于 ASF 官方的[发版指南](https://infra.apache.org/release-distribution.html)做提取和精简, 关注我们在发版过程中最容易**忽视/犯错**的部分, 初次**参与发版**的同学, 
> 尤其是每个仓库/模块的负责人都需要完整, 仔细的通读一遍, 不确定的地方请及时沟通询问
>
> **注:** 本文主要以已加入 `incubator` , 也就是正在**孵化**中的项目为背景进行描述, 不再对**已毕业**项目和其他类型做额外解释说明

## 0. 前言

相信对于每个初入 `ASF` 的孵化项目来说，**第一次**发版都会遇到不少小问题和麻烦事，尤其以 `License/Notice/Copyright` 相关的问题为典型代表，思考了下主要原因可能有:

- ASF 官方的文档颇为零散，社区的普通开发者和未参与发版的经常没有耐心通读所有文档以及注意到**关键**事项 (或理解有偏差)
- ASF 官方文档对于有些描述仍较为**模糊**, 或者它直接建议 PMC/Mentor/Mail 来讨论决策，但这部分结论通常没有更新记录到文档中
- ASF 官方没有给大家推荐类似 `skywalking-eye` (header/dependency) 的自动化检查，这些对初次发版的同学可能会有许多帮助
- ASF 文档中对有些规范/规则并未**严格**要求, 但发版投票时不同的 Reviewer 可能有不同的习惯/偏好, 从而会提出一些改进"**建议**"
- "中/英"语言/语义上的理解偏差，从而误解了某些内容

借着 [HugeGraph](https://github.com/apache/incubator-hugegraph) 首次发版的机会，我也顺便总结了一些 PR / 邮件中遇到的事项和经验，由于是个人理解，可能存在不严谨的地方，欢迎大家一起来 review 和补充完善，避免相似的问题反复出现在 incubator 项目的发版过程中:)

#### 名词

一些文中出现的常见**名词**缩写:

- **ASF**: Apache Software Foundation
- **ASL2.0**: Apache Software License 2.0

#### ASF & Apache

新同学可能会比较困惑为何常看到 ASF 的邮件/文档中不直接使用 `Apache 项目` 这样的描述, 而建议/习惯使用 `ASF 项目`. 这是因为 `Apache 项目` 容易产生歧义:**任何**使用 `Apache` 许可协议的项目都可这样称呼, 但是 `ASF` (基金会) 的项目有一些单独的**要求/限定**的, 描述上加以区分可避免大家**误解**对应的含义, 
也就能更好理解引入非 ASF 名下的 `Apache` 项目和引入 `ASF`名下项目依赖的区别了


## 1. LICENSE

`LICENSE` 这块是最容易产生小问题的地方, 请务必逐条确认检查: (不确定的一律以[官方说明](https://infra.apache.org/licensing-howto.html)/邮件/导师沟通为准)

1. 每个**源码 & 二进制**包(包括发行的 `jar` 包)**都**都必须提供 `LICENSE + NOTICE + DISCLAIMER`  文件
   - 源码(source)包必须位于项目**根目录**下
   - 二进制包一般也在根目录下 (注: 此项参考其他 ASF 项目, 目前没发现 `ASF` 有硬性要求)
2. `LICENSE` 文件原始版本必须**格式/内容**完整正确, 请直接**下载**官方提供[版本](https://www.apache.org/licenses/LICENSE-2.0.txt)然后放在项目目录中 (避免手动复制粘贴文本)
3. 建议 `LICENSE/NOTICE` 文件不要包含**不必要**的信息, 比如不要包含你没有使用到的依赖的 LICENSE, 如果**移除/更新**了依赖则需要及时更新/移除对应的 `LICENSE/NOTICE` 信息
4. 引用的第三方`license`, 必须将详细信息附加到我们的 `LICENSE` 文件后, 如果引用的 `LICENSE` 很长, 则需要单独存储一个文件并**指向**它们, 如 `LICENSE-<dependency-name>.txt`
5. **二进制包**还需要特别注意, 通常它携带的 `LICENSE + NOTICE` 文件内容和源码包有许多区别, 请勿直接**复用**同一文件
   - 源码包通常不携带二进制/jar 包/图片等依赖, 所以它的 `LICENSE` 和` NOTICE` 会简单干净得多, 它主要是对**源码**引用做声明
   - 二进制包一般是在源码包的两个文件引用基础上, 还需补充所有引用的**第三方**依赖/图片/二进制等文件及其对应指向的 `LICENSE` 文件
6. 一个第三方依赖如果有多个 `LICENSE`许可(例如 `ASL2.0` & `GPL`), **建议**仅选择一个 `LICENSE`引用 , 而不是列出所有 (不方便他人 review)
   - 一般多选一的基本依据是选择 ASF 文档中提到的 [A 类](https://www.apache.org/legal/resolved.html#category-a)宽松许可, 如没有再考虑 B 类等
   - 如果这个依赖的 `LICENSE` 文件是独立存在的, 也应该只选取其中所选的内容 (例如去掉其中 `GPL` 或其他多余的声明引用)
   - 的确可见有 ASF 项目在 `LICENSE` 文件中引入了依赖所有 LICENSE 条目, 但可能并非提倡的写法 (应避免参考照搬)

除了阅读文档外, 最好的办法之一就是参考**官方示例**/其他 incubator 项目, 然后仍不确定的地方及时询问导师/社区 (不要自己猜测)

- [httpd - source](https://svn.apache.org/repos/asf/httpd/httpd/trunk/LICENSE)
- [seatunnel - source](https://github.com/apache/incubator-seatunnel/blob/dev/LICENSE)
- [seatunnel - binary](https://github.com/apache/incubator-seatunnel/blob/dev/seatunnel-dist/release-docs/LICENSE)
- [linkis - source](https://github.com/apache/linkis/blob/master/LICENSE)
- [linkis - binary](https://github.com/apache/linkis/blob/master/linkis-dist/release-docs/LICENSE)

**注:**  `linkis` 现已毕业, 请谨慎参考最新的文档, 可跳转到毕业前的**快照**

## 2. License Header

上面说完了项目整体的 `LICENSE` 引用, 再来说一下许多同学可能比较困惑的`License Header`(例如为何全局声明过, 每个文件还需单独声明)

- 首先, 大部分开源组织都要求项目的每个**源文件**都有一个明显的 `License` 声明, 这样当他人单独引用某个文件时才最容易保留声明/也最直观清晰
- 其次, 考虑到原始的 [LICENSE](https://www.apache.org/licenses/LICENSE-2.0.txt) 文件一般很长, 为了简洁起见它就规定在**文件头部**引用一个简略版本, 简称  `license header`, 然后完整版本放在根下(`LICESEN`文件), 形成一个**引用**关系
- 所以可以看到哪怕同为 `ASL2.0`协议, 不同项目的 `license header`可能并不完全相同, 有增/减部分内容都是正常的 (请勿随意"统一")

#### 核心

1. ASF 规定名下项目 `license header` (文件头)中**不能**包含 `Copyright` 声明, 这部分应该考虑:
   - 若不必要, 例如捐赠之前的 Copyright 自愿舍弃, 那直接**移除**即可
   - 若需要, 则在 `NOTICE` 文件头部单独声明
2. 特别注意, 如果是引用了**第三方**的代码, 切**勿**删除/修改对方 `header` 及其包含的 `Copyright` 声明, 更不要添加额外的 `ASL2.0`头
   - 大家一般习惯通过**插件**/脚本进行批量格式化, 此时要单独检查**第三方代码**没有添加额外的 `ASL2.0` 声明
   - 另一个常见的问题就是只引用了**部分**代码, 此时应如何处理呢?
     1. 小修改/增加(对第三方代码), 一般应使用**原文件**的 license, 不修改原本的 license/author 内容
     2. 大修改, ASF 建议是 PMC 具体讨论处理 (这里没有严格定义"大/小"修改的区分方式, 所以如无必要就视作小修改处理吧:)
     3. 如果是在一个(上千行)大文件中引用了一个内部结构体/类 (几十行), 此时该如何保留它的 license 头引用呢? (应尽量避免, 详见文尾单独讨论)
3. 哪怕第三方代码的 `header` 格式/语法/标点等有问题, 或者不完整(精简版), 也请勿修改原始的 `License Header` 
4. 同前文, 如果一个软件/代码整体包含**多个**可选许可, 请考虑以下二选一:
   - 优先选择 Apache 最适配的 [A 类](https://www.apache.org/legal/resolved.html#category-a)宽松许可作为 `license header`, 避免不必要麻烦
   - 如果原代码 `license header` 中已经同时提到了多种可选许可, 则**不用修改** (因通常原代码作者才**有权**修改)

#### 特殊例子

ASF 规定了[部分](https://www.apache.org/legal/src-headers.html#faq-exceptions)文件**不需要**添加 `license header`, 原则是基于"内容/结构上没有任何创造性", 如果不能确定, 则**默认**需要添加, 以下是参考各大社区项目/邮件和官方说明的几个典型**不需要**添加的例子:

1. 简短的文本信息 (典型 `READEME`, `CONTRIBUTING`, `*.txt`, `*.md`, `*.log` 以及各种 `lint` 文件)
2. 增加了头注释可能会报错的文件 (典型 `json`文件)
3. 源码打包时**可排除**的文件, 例如 `.github`下的专用 action 文件, `.git` 或类似文件

以下是比较典型的**建议**添加(但非强制)的例子:

1. 包管理/依赖配置文件, 例如 `Makefile/pom.xml` 等, ASF 建议如无必要, 都加一下免得引入纠纷 (参考邮件[讨论](https://lists.apache.org/thread/l6w0ytfodywfsb6ky0gd41qfzb148r50))
2. 程序生成的模板/用户使用的 `*.conf, *.properties` 文件可视具体情况 PMC 讨论, 不确定的或单元测试中使用的配置文件建议建议默认都带上 (或向上咨询)
3. 如果存在压缩的 `css/js` 等文件, 如果是自己项目开发产生的, 则建议使用[简短版本](https://www.apache.org/legal/src-headers.html#is-a-short-form-of-the-source-header-available)的声明, 而不建议使用原始的 header 版本

简而言之, ASF 建议除开明确不用/很难添加的例子外, 应考虑一律加上 `license header` 以减少麻烦

## 3. NOTICE

`LICENSE/Header`存放自己 + 第三方的许可证比较容易理解, `NOTICE` 文件又是做啥的呢? 简单说它可以存放 **Copyright + (法律)强制性许可**要求

1. NOTICE 文件必须遵循 ASF 的标准规范, 不可随意修改格式 (建议参考**已发版**过的 `incubating` 项目, 已毕业项目可能有历史原因请勿直接照搬)
2. NOTICE 文件的 `Copyright` 年份尽量保持统一(例如有多个repo), 并且**最终年份**应该随发版时进行更新 (例如 `2017-20xx`, 发版应检查 xx 年份)
3. 如果我们引用了其他 ASF 的项目, 参考[此处](https://infra.apache.org/licensing-howto.html#bundle-asf-product) (注意这和引用了普通 `Apache2.0` 协议的项目不是等同的)
4. 尽可能保持 `NOTICE` 简洁, 不确定的引用请咨询社群/导师, 这里不应先假定需要, 因为它会给使用方(下游)带来额外负担 (传递性)
5. `BSD/MIT` 许可证内嵌的 Copyright 通知**不需要**重新引用 ([LEGAL-59](https://issues.apache.org/jira/browse/LEGAL-59))
6. 如果第三方依赖的 `NOTICE` 文件错误的引用了 `LICENSE` 或者其他信息, 我们该如何选择?
   - 一般情况不用照搬错误部分, 只需要选取需要/合规的部分即可 (refer [issue](https://github.com/apache/incubator-hugegraph-computer/pull/227#discussion_r1081107569))
   - 不能确定的可以咨询导师/邮件 `incubator` 社区

官方 + incubator示例:

- [官方最简模板](https://www.apache.org/licenses/NOTICE-2.0.txt) (推荐)
- [seatunnel](https://github.com/apache/incubator-seatunnel/blob/dev/NOTICE) (推荐)
- [HTTP Server](https://www.apache.org/licenses/example-NOTICE.txt) (不太推荐)

## 4. Disclaimer

**孵化中**的项目的任何发行包(包括网站)都需要携带 `DISCLAIMER` (免责声明)文件, 这个听起来很法务化的文件有两个选择: (详见官方[说明](https://incubator.apache.org/policy/incubation.html#disclaimers))

1. **标准版:** 可以遵循 ASF 的所有发布政策的孵化项目, 命名为 `DISCLAIMER` 文件
2. **WIP ** (Work In Progress) 版本: 意味着发版过程中会**有部分**不能满足 ASF 要求的发布政策, 命名为 `DISCLAIMER-WIP`

两个说明的模板内容是不一样的, WIP 版本需要具体列出"**已知问题列表**", 也就是提醒使用方这些地方可能需要留意检查, 另外要注意的是, 孵化项目在毕业前需要转为标准的 DISCLAIMER 声明 (也就意味着相关发布问题都被解决了)

 TODO: 哪些情况是 `WIP` 版本的免责声明可以容忍/携带的呢? 例如说 `GPL` 或是` CC-By` 协议的二进制依赖可以么? 还是说它只适用于一些比较模糊的许可或者是合规性问题呢? (这个需要确认一下)

## 5. Copyright

> *Copyright notices are only relocated if they are donated to the ASF as part of a software grant.*

关于**版权**的单独说明:

ASF 的项目要求 `Copyright` 需放在 `NOTICE` 文件中而不能是 `license header` 里, 这个是 ASF 单独要求的, 和其他自由使用并添加 Copyright 的项目无关, 并非 `Apache License`(ASL2.0) 原本的要求. 特别说明一下以免误会, 这也是开头提到的 **ASF 项目**和 Apache 项目的显著区别之一

## 6. GPL

以 `*GPL` 许可为代表的**代码/二进制**引用基本都不能被包含在 ASF 的项目中, 或简单说: 严格**限制分发**/商业化/的许可证基本都不能被引入 (详细列表参考[官方禁止引用列表](https://www.apache.org/legal/resolved.html#category-x))

这里的不能被包含不止是说**源码**中不包含, 编译产生的**二进制**包理论上也不能包含, 所以使用了类似依赖/插件的部分代码需要移除/重构, 否则会非常棘手, 有以下可供参考的常见做法:

1. 将这种 ASF 不允许携带的引用变为**可选项**, 例如 oracle 的 `ojdbc.jar` 包, 可以写文档告诉需要的用户去自行下载然后关联/启用上
2. 若一个项目协议允许 **多种许可**, 只要包含和 `ASL2.0` 兼容的许可即可使用，并且在项目 `LICENSE` 文件中指定我们选择的许可
3. 另外要注意 `CC (Creative Commons)` 洗了, 如果单独出现 ASF 也是[不允许](https://www.apache.org/legal/resolved.html#cc-by)的 (这个可能大家很容易忽视, 建议使用插件扫描)

## 7. Binary/Archive

二进制文件 +  单独的 jar 包(视作 `Archive` 文件) 同样需要特别关注, 可规避大量不必要的发版时麻烦:

1. 二进制文件在**源码**包中尽量不要出现, 如果 已存在的考虑通过**编译/测试时**通过**下载** or **临时生成**代替 (新 PR 应避免重新引入)
2. 比较巨大/难以 review 的压缩文件 (例如 `swagger-ui` 虽是 Apache 许可的前端包), 也尽量不要直接引入到源码, 而应在编译时**下载**解压代替
3. 大部分**图片**也会被视为二进制文件, 这部分如非源码必要, 可考虑打包时**排除**
4. 如果是必要的图片/二进制, 则需要在 `LICENSE` 文件中有单独的引用说明 (*待补充好的示例*)

## 8. Git/GitHub/官网相关

这里主要是一些容易误解的**杂项**细节点, 但是出错也可能会导致发版重回:
1. 发版分支可以进行单独更新, 但是一旦发版 `VOTE` 邮件发出, 则必须**固化**下来/停止后续任何更新提交 (否则会被视为不合规)
2. 发版的时候, 因为很可能有**多轮**, 所以建议 tag 使用 rc 后缀, 例如 `1.0.0-rc1` 代表第一次投票, 打回则递增 rc 数字 (非强制但建议)
3. 分支 (branch) 按 ASF [邮件](https://lists.apache.org/thread/k08vq5r4nfos2ptn69w2fbm2mvmkb91n)中提到并不需要, 所以保留 `release-1.0.0` 复用即可 
4. 可以在发版邮件里携带 tag 最近一次的  `Commit-ID` (缩略位即可), 方便确认
5. 发版**未完成**之前, 官网的下载页面**不可**携带临时下载地址 (同理 Github 的 Release 页面务必使用 `pre-release` 而不可使用 `latest release`
6. 官网下载页面或项目的 `README` 中最好有基本的 "完整性校验" + "如何编译源码" 的**文档**说明 (非必要但建议)

#### 自动化检查 (强烈建议)

为了避免大量不必要的小问题以及人工/手工操作疏忽带来的隐患, 强烈建议增加一些自动化的`CI/Action` 来辅助我们进行检查:

1. maven `RAT` check 二进制/header/archives (maven 插件, 仅适用 Java 系 - 必要)
2. [skywalking-license-header check](https://github.com/apache/skywalking-eyes) (还可提供 PR 内 comment 提醒, 很棒 - 必要)
3. skywalking-dependencies generation & check (建议至少开启 check 部分, 文档同上 - 可选)
4. validate release package (可参考 HugeGraph 编写的自动验证 [action](https://github.com/apache/incubator-hugegraph-doc/blob/master/.github/workflows/validate-release.yml), 提前检查`GPG/SHA/二进制文件/空文件`(夹)等 - 推荐)
5. [dependency-review-action](https://github.com/actions/dependency-review-action) (GitHub 官方提供可检查/排除 license 的 Action - 可选)

然后人工的主要检查聚焦在一些脚本无法覆盖到的地方, 重点关注 "LICENSE + NOTICE + 第三方依赖的头声明" 等问题上, 可以减少大量精力

## 9. 疑难问题

这里是一些 `ASF` 官方没有直接说明/缺少清晰的定义, 但是可能会实际遇到的比较麻烦的问题/建议, 有一些结论可以参考, 复杂的建议和**导师/社区**一起讨论:

1. 如果引用第三方的代码(源码)后, 需要同时在 **source & binary release** 的不同 `LICENSE` 文件中都添加引用么

   A: 是的, 都需要 (refer [issue](https://github.com/apache/incubator-hugegraph-computer/pull/227#issuecomment-1396795029))

2. 关于 `license header` 的几个点:

   - (**原则**)不建议大家片段化使用第三方代码, 应**优先考虑**分离开 or 自己重写, 不得已引用的时候需要保留原有代码的 `license header`
   - (**原则**)将第三方代码从一种**编程语言**转换成**另一种**编程语言, 不属于重大修改, 需保留原 `license header` (在一些**算法**相关的代码中较常见)
   - (**特殊情况**) 如果引入的第三方代码只是某个代码文件中的一小部分, 是否应该用它的 `license header` 作为整个文件的头? (**待定**)
     1. 如果引入的是一个接口定义/子类/结构体, 可否直接在这部分代码片段上引入它的 `license header`
     2. 如果不能在代码中间位置引入 `license header`, 那么头部是否允许保留两个`license header` (一个是 ASF 的, 一个是引入的)
     3. 如果建议如无必要, 仅保留一个`license header`, 是否需要在 `LICENSE` 文件中说明引入的代码行范围, 不引入的话似乎有点模糊(其他人不知道哪部分代码是 refer 的)
     4. 比较建议的还是避免在大文件中引入一小段第三方代码, 

_持续更新 ing_

---

参考资料:
1. https://incubator.apache.org/guides/releasemanagement.html (incubator 项目发版指南①)
2. https://www.apache.org/foundation/preFAQ.html (常见 ASL2.0 协议使用问题)
3. https://www.apache.org/legal/src-headers.html (常见 License 头引用问题, 包括第三方引用)
4. https://infra.apache.org/licensing-howto.html (如何编写你的 `LICENSE/NOTICE` 文件)
5. https://www.apache.org/legal/resolved.html#category-x (官方禁止引用列表, 包括 CC-BY)
6. https://lists.apache.org/list.html?general@incubator.apache.org (`ASF-incubator` 邮件列表)
7. ...
