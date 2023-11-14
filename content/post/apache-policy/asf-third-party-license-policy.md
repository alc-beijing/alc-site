---
categories:
- Apache Policy
- Third Party License
date: 2023-11-02T17:07:07+08:00
description: "本政策向 Apache 软件基金会的项目提供许可指引，列出了第三方开源组件纳入 Apache 软件基金会产品时可接受的许可证。"
keywords:
- Open Source
- ASF
- License
- Blog
tags:
- License
title: "ASF 第三方许可证政策"
authors:
- missing-9
---

missing-9 翻译，郭雪雯、薛杨洁 修改，姜宁、王荷舒审校

原文出处: https://www.apache.org/legal/resolved.html

## 目的

本政策向 Apache 软件基金会的项目提供许可指引，列出了第三方开源组件纳入 Apache 软件基金会产品时可接受的许可证。

项目可将许可问题提交给法务委员会[JIRA](https://issues.apache.org/jira/browse/LEGAL)进行讨论。

### 许可证标准

下列标准作为本页许可证分类指引。

- 1、许可证必须符合[开源定义](https://opensource.org/osd-annotated)₁。

- 2、在实践中适用的许可证不得在 Apache 2.0许可证所设限制之外再设置实质限制。

₁.（最后访问：2019-02-16）

### 宏观分类

本政策在宏观上将许可证分为三类。

- **A 类**：Apache 软件基金会产品中可以纳入 A 类许可证。它们可称之为“类 Apache”的许可证。

- **B 类**：Apache 软件基金会产品在特定条件下可以纳入 B 类许可证。该类许可证“有可能”被纳入。

- **X 类**：Apache 软件基金会产品中不得纳入 X 类许可证。

## A 类：我们能在 ASF 项目中纳入什么？

从可否纳入 Apache 软件基金会产品的角度考虑，我们认为以下许可证与 Apache 2.0许可证条款类似：

- [Apache 许可证2.0](http://apache.org/licenses/LICENSE-2.0)
- [Apache 软件许可证1.1](http://apache.org/licenses/LICENSE-1.1)，包括其变体：
- [PHP 许可证3.01](http://www.php.net/license/3_01.txt)
- [MX4J 许可证](http://mx4j.sourceforge.net/docs/ch01s06.html)
- BSD（不含广告条款）- 包括其变体：
       - [BSD 2条](http://opensource.org/licenses/bsd-license.php)
       - [BSD 3条](https://opensource.org/licenses/BSD-3-Clause)
       - [DOM4J 许可证](http://dom4j.sourceforge.net/dom4j-1.6.1/license.html)
       - [PostgreSQL 许可证](https://opensource.org/licenses/postgresql)
       - [Eclipse 分发许可证1.0](http://www.eclipse.org/org/documents/edl-v10.php)
       - [Lawrence Berkeley 国家实验室 BSD](https://spdx.org/licenses/BSD-3-Clause-LBNL.html)
- [MIT / X11](https://opensource.org/licenses/mit-license.php)
       - [ISC](https://opensource.org/licenses/ISC)
       - [新泽西州标准 ML](https://www.smlnj.org/license.html)
       - [杯形语法分析器生成器](http://www2.cs.tum.edu/projects/cup/licence.php)
- [ICU](http://source.icu-project.org/repos/icu/icu/trunk/LICENSE)
- [伊利诺伊大学/ NCSA](https://opensource.org/licenses/UoI-NCSA.php)
- [W3C 软件许可证](https://opensource.org/licenses/W3C.php)
- [W3C 社区贡献者许可协议](https://www.w3.org/community/about/agreements/cla/)-在发布至少45天后适用
- [X.Net](https://opensource.org/licenses/xnet.php)
- [zlib/libpng](https://opensource.org/licenses/zlib-license.php)
- FSF autoconf 许可证
- [DejaVu 字体（Bitstream Vera / Arev 许可证）](https://dejavu-fonts.org/)
- [学术自由许可证3.0](https://opensource.org/licenses/afl-3.0.php)
- [服务+组件+架构+技术规范](http://web.archive.org/web/20080704184203/http://www.osoa.org/xmlns/sca/1.0/license.txt)
- OOXML XSD ECMA 许可证
- [Microsoft 公共许可证（MsPL）](https://opensource.org/licenses/ms-pl.html)
- [知识共享仅版权贡献](https://creativecommons.org/licenses/publicdomain/deed.zh)
- [Python 软件基金会许可证](http://www.opensource.org/licenses/PythonSoftFoundation.php)
- [Python Imaging 库软件许可证](https://github.com/python-pillow/Pillow/blob/master/LICENSE)
- [Adobe Postcript（R）AFM 文件](https://spdx.org/licenses/APAFML.html)
- [Boost 软件许可证1.0版](https://opensource.org/licenses/BSL-1.0)
- [COLT 中 CERN 程序包许可证](https://dst.lbl.gov/ACSSoftware/colt/license.html)，但请注意，这**仅**适用于 COLT 中的 CERN 软件包，**不**适用于其他
- [英国开放政府许可证](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)。该许可允许许可方提供自定义归属通知。如有，请在 NOTICE 中注明。如果没有提供，那么在 NOTICE 上注明“包含根据开放政府许可证3.0版许可的公共部门信息”。
- [WTF 公共许可证](http://www.wtfpl.net/)
- [浪漫 WTF 公共许可证](https://github.com/pygy/gosub/blob/master/LICENSE)
- [UNICODE 公司许可协议-数据文件和软件](http://www.unicode.org/copyright.html#Exhibit1)
- [Zope 公共许可证2.0](https://opensource.org/licenses/ZPL-2.0)
- [ACE 许可证](http://www.cs.wustl.edu/~schmidt/ACE-copying.html)
- [Oracle 通用宽松许可证（UPL）1.0版](https://oss.oracle.com/licenses/upl/)
- [开放网格论坛许可证](https://www.ogf.org/ogf/doku.php/about/copyright)
- [谷歌“附加知识产权授权(专利)”文件](https://chromium.googlesource.com/external/webrtc/+/master/PATENTS)
- [零限制许可证](https://chromium.googlesource.com/external/webrtc/+/master/PATENTS)
- [历史许可声明和免责声明](https://opensource.org/licenses/HPND)
- [木兰宽松型软件许可证, 第2版](https://license.coscl.org.cn/MulanPSL2/)
- [蓝橡树模型许可证1.0.0](https://blueoakcouncil.org/license/1.0.0)

此类中多个许可证都包含项目需要遵守的特定署名条款，通常是[将其添加到 NOTICE 文件中](https://www.apache.org/dev/licensing-howto.html)。请确保您在纳入这些作品时有这样做。

### 对于“已许可”至公共领域的作品

您可以将处于公共领域（或被与之具有相似效果的许可证所覆盖）的作品纳入 Apache 产品中。您必须（以与 A 类清单相似的方式）提供署名。

满足下列条件之一的作品应被视为处于公共领域：

- 该作品带有
  - 知识共享[公共领域标识](https://creativecommons.org/publicdomain/mark/1.0/deed.zh)
  - 由作者提供的适当的贡献（至公共领域）声明
  - 有明确的证据证明该作品的美国版权
    - 保护期届满
    - 无法被主张
  
我们视为与公共领域具有相似效果的许可证有：

- 知识共享 [CC0 “无权利保留”](https://creativecommons.org/about/cc0)
- 知识共享[公共领域证明](https://creativecommons.org/licenses/publicdomain/)
  
**请注意**某作品是否处于公共领域可能是个[疑难](http://fairuse.stanford.edu/Copyright_and_Fair_Use_Overview/chapter8/)问题。判断某作品的版权保护期是否届满可能很重要，并且在不同的司法管辖区中可能有不同的结论。如果您对某作品是否属于公共领域存疑，请在 legal-discuss@ 上或者通过 JIRA 议题来提交话题。

## B 类：我们或许能在 ASF 项目中纳入什么？

您可以在 Apache 软件基金会产品中纳入本节所述的许可证和/或项目，前提是其满足特定条件。

### 恰当标记的条件

在所有 B 类相关情形下，其被纳入我们的产品这一事实都不应使我们的用户感到意外。如果我们能为发行版附上恰当且显著的标记，用户更有可能知道存在与 
 Apache 许可证明显不同的限制。恰当且显著的标记是指用户在了解发行版时会读到的标记（例如在 README 文件中），且该标记应该指明第三方产品及其许可证，并且提供其主页链接。也请遵守该特定许可证中的任何署名/声明要求。

### 仅以二进制形式纳入的条件

任何 B 类许可下的作品仅得以二进制的形式纳入 Apache 软件基金会的便利二进制发行版中。不得将 B 类许可下的作品纳入源代码形式的发行版本中。

### “弱著佐权”许可证

本节中提及的每个许可证都要求某种程度的互惠性。这可能要求采取额外行动，以尽量减少 Apache 产品的用户在不了解适用要求的情况下对 Apache 产品中基于不同许可要求部分进行衍生创作的可能性。

如果您进行恰当标记（见上文），您可以在 Apache 产品中以二进制形式纳入基于以下许可证的软件：

- 通用发展和分发许可证：[CDDL 1.0](https://opensource.org/licenses/CDDL-1.0)和 [CDDL 1.1](https://spdx.org/licenses/CDDL-1.1.html)
- 通用公共许可证：[CPL 1.0](https://opensource.org/licenses/cpl1.0.php)
- Eclipse 公共许可证：[EPL 1.0](http://www.eclipse.org/legal/epl-v10.html)
- IBM 公共许可证：[IPL 1.0](http://www.opensource.org/licenses/ibmpl.php)
- Mozilla 公共许可证：[MPL 1.0](https://website-archive.mozilla.org/www.mozilla.org/mpl/mpl/1.0/)，[MPL 1.1](https://www.mozilla.org/en-US/MPL/1.1/)和 [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/)
- Sun 公共许可证：[SPL 1.0](https://opensource.org/licenses/SPL-1.0)
- [开放软件许可证3.0](https://opensource.org/licenses/OSL-3.0)
- [Erlang 公共许可证](https://www.erlang.org/EPLICENSE)
- [UnRAR 许可证](https://github.com/jukka/java-unrar/blob/master/license.txt)（仅用于解压缩）
- [SIL 开放字体许可证](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)
- [Ubuntu 字体许可版本 1.0版](https://ubuntu.com/legal/font-licence)
- [IPA 字体许可协议 1.0版](https://fedoraproject.org/wiki/Licensing/IPAFontLicense)
- [Ruby 许可证](https://www.ruby-lang.org/en/about/license.txt)（包括将 GPLv2 列为可选的 [Ruby 1.9.2 旧版本许可证](https://svn.ruby-lang.org/cgi-bin/viewvc.cgi/tags/v1_9_2_320/COPYING?view=markup)
- Eclipse 公共许可证2.0：[EPL 2.0](https://www.eclipse.org/legal/epl-2.0/)
  
通过仅以目标码/二进制形式纳入，减小了基于第三方作品进行衍生创作的可能。这回应了本政策的第二个指导原则。

对于 ASF 产品在运行时直接使用的少量源代码的情况，该源代码未经修改且无论如何也不太可能被修改的（如因被某一标准所规定），您可以纳入经过适当标记的源代码。例如 web-facesconfig_1_0.dtd，纳入此代码是 JSR 127:JavaServer Faces 技术参数的强制规定。

### 纳入知识共享署名许可下的内容

[知识共享署名（CC-BY）](https://creativecommons.org/licenses/by/4.0/deed.zh)许可证（第2.5、3.0和4.0版）下的作品包含与“有效技术措施”相关的条款，这可能会让用户感到意外。因此您应当对其作出恰当标记并且仅以二进制形式纳入。

### 在知识共享署名-以相同方式分享下所许可的未经修改的媒体内容

您可以在 Apache 产品中纳入在[知识共享署名-以相同方式共享2.5版](https://creativecommons.org/licenses/by-sa/2.5/deed.zh)、[知识共享署名-以相同方式共享3.0版](https://creativecommons.org/licenses/by-sa/3.0/deed.zh)和[知识共享署名-以相同方式共享4.0版](https://creativecommons.org/licenses/by-sa/4.0/deed.zh)下许可的未经修改的媒体内容，只要您遵守许可证中的署名条款，这可能要求对 LICENSE/NOTICE/README 作出修改。如果涉及其他类型知识共享-以相同方式分享许可证下许可的作品，请联系 Legal PMC。

请注意，媒体内容是指在我们的文档中使用的二进制视觉/视频/音频元素。我们无意将其纳入源代码中。

### 我能从 Stack Overflow 复制代码并将其贡献给 ASF 项目吗？

不能，除非您联系原作者并从其处获得在 Apache 项目中根据 Apache 2.0许可证使用其代码的权利。

### Doug Lea 并发库

Doug Lea 并发库属于公共领域，但其中包含的某些 Sun 文件不属于公共领域。您可以按类似上述“弱著佐权”列表资源的纳入方式将该库纳入 ASF 产品中。“如果进行恰当标记，可以将其以二进制形式纳入 Apache 产品中”。如果要使用源代码，则请移除 Sun 许可给 Doug 的文件，并将其按 A 类处理（或者从 [Harmony](http://svn.apache.org/repos/asf/harmony/standard/classlib/trunk/modules/concurrent/src/main/java/java/util/concurrent/) 获取文件）。

#### 将 OSGi 元数据添加到弱著佐权许可下的二进制文件中

您可将 OSGi 元数据插入“B 类”许可下的 Jar 文件中，只要您在对 Jar 文件的显著标记中说明您这样做了。

#### Cobertura 报告

您可以将 Cobertura 报告纳入 ASF 发行版中。

#### 对于禁止修改的许可证

有些许可证对**未经修改**的副本的再分发赋予了广泛的权利。此类许可证不是开源的，但它们确实满足上述第二条和第三条指导原则。

Apache 项目不得在版本控制或发布的源码包中包含此类许可证下许可的材料。但在构建过程中自动下载诸如字体和标准化数据之类的非软件材料，并将它们纳入生成的二进制文件中的情况是允许的。此种使用方式明确表明，这些依赖不是该项目开源代码的一部分。

如上所述，您可以使用基于下列许可证许可的材料：

- [用于 PDF CJK 字体的 CMaps](https://www.adobe.com/devnet/font.html#pcfi)
- JCR API jar 文件（[Day Spec 许可证](http://www.day.com/maven/jsr170/licenses/day-spec-license.htm)+[附加许可](http://www.day.com/maven/jsr170/jars/LICENSE.txt)）
- [WSDL（2004）schema 文件许可证](https://issues.apache.org/jira/browse/LEGAL-385)

### 在 ASF 产品中纳入构建工具

许多语言已经发展出相关工具的生态，这些工具帮助构建发行版的构件。鉴于这些工具可能并不总在其他兼容许可证下可得，我们已经批准了允许纳入 Apache 产品发行版的特定工具，以便其用于该特定目的。

请注意，该工具不得影响项目源代码的许可。我们也期望使用该工具构建源代码也是该工具的典型用途。

截至目前，我们已经为此类用途批准下列工具：

- Autotools 产品族，特别是：
        - [Autoconf](http://www.gnu.org/software/autoconf/)
        - [Automake](http://www.gnu.org/software/automake/)
        - [Libtool](http://www.gnu.org/software/libtool/)
        - [mkinstalldirs.sh](http://www.gnu.org/software/hello/manual/gettext/mkinstalldirs.html)
- [OCamlMakefile](http://hg.ocaml.info/release/ocaml-make/)
- [setup.rb](https://i.loveruby.net/en/projects/setup/)

### 在创建动态加载的 XS 模组时纳入 Perl 许可的头文件

对链接已编译的 C 语言代码以创建动态加载的 XS 模组的 Perl 绑定程序进行开发，需要纳入 Perl 许可证（http://dev.perl.org/licenses/- GPL-any/Artistic1, 包含例外）下许可的头文件。

您可以纳入这些头文件—— XSUB.h, perl.h 和 EXTERN.h (参见：[LEGAL-79](https://issues.apache.org/jira/browse/LEGAL-79))。

### 纳入 Doxygen 生成的配置文件

您可以使用这些文件，只要您移除了生成的注释。

### Apache 项目能够包含基于 Ruby 许可作品的外部依赖吗？

一个主要且明显使用 Ruby 编写的项目可以依赖于 Matz's Ruby Interpreter (MRI)，也可以依赖于任何 [Ruby 许可证](http://www.ruby-lang.org/en/LICENSE.txt)许可的 Gem。

当然，依赖于其他许可证（如 MIT）下编写的其他 Gem 可能也可以，这取决于具体的许可证。

还请注意，Ruby 许可证是被列在上述用于二进制形式的“B 类”弱著佐权列表中（例如 JRuby）。

### 从 Java 9开始，Javadoc 允许纳入搜索功能，该功能包含在其他开源许可证下许可的 JavaScript。Apache 项目可以包含Javadoc 吗?

从 Java 9开始，Javadoc 可以包含在 MIT、MIT OR GPL-3.0或 GPL-2.0 WITH classpath Exception-2.0下许可的 JavaScript。Apache 二进制发行版本（包括 Maven javadoc jar）和 Apache 网站可能会因使用 javadoc 而包含这个 JavaScript。但其不得包含在源代码发行版本中。

## X 类：我们不能在 ASF 项目中纳入什么？

您**不得**在 Apache 产品中包含下列许可证：

- 不符合“开源定义”：
  - 二进制码许可证（BCL）
  - 英特尔简化软件许可证
  - [JSR-275许可证](https://software.intel.com/content/www/us/en/develop/articles/end-user-license-agreement.html#inpage-nav-3)
  - 对使用领域有限制：
    - [微软限制公共许可证](https://www.openhub.net/licenses/mslpl)
    - [亚马逊软件许可证（ASL）](https://aws.amazon.com/cn/asl/)
    - [Satori RTM 的 Java SDK 许可证](https://aws.amazon.com/cn/asl/)
    - [Redis 可用源代码许可证（RSAL）](https://redislabs.com/legal/licenses/)
    - [Booz Allen 公共许可证](http://boozallen.github.io/licenses/bapl)
    - [Confluent 社区许可证 1.0版](https://www.confluent.io/confluent-community-license/)
    - [商业源代码许可证 1.1](https://spdx.org/licenses/BUSL-1.1.html)
    - 任何包含[共享条款许可条件 1.0版的许可证](https://commonsclause.com/)
  - 非商业许可证：
    - [知识共享非商用](https://en.wikipedia.org/wiki/Creative_Commons_license#Non-commercial_licenses)变体
    - [Sun 社区源代码许可证3.0](http://jcp.org/aboutJava/communityprocess/SCSL3.0.rtf)
- 对更大的作品施加限制：
  - [GNU GPL 1,2,3](http://www.opensource.org/licenses/gpl-license.php)
    - 本页其他部分明确允许的 GNU GPL 的特殊例外(例如 GNU Classpath)。
  - [GNU Affero GPL 3](http://www.opensource.org/licenses/agpl-v3.html)
  - [GNU LGPL 2,2.1,3](http://www.opensource.org/licenses/lgpl-license.php)
  - [QPL](https://opensource.org/licenses/QPL-1.0)
  - [Sleepycat 许可证](http://www.opensource.org/licenses/sleepycat.php)
  - [服务器端公共许可证（SSPL）第1版](https://www.mongodb.com/licensing/server-side-public-license)
  - [代码项目开放许可证（CPOL）](http://www.codeproject.com/info/cpol10.aspx)

- 其他关切：
  - [BSD-4条款](https://spdx.org/licenses/BSD-4-Clause.html) / [BSD-4条款（加州大学专用）](https://spdx.org/licenses/BSD-4-Clause-UC.html)
  - [Facebook BSD + 专利许可证](https://code.facebook.com/pages/850928938376556)
  - [NPL1.0](https://spdx.org/licenses/NPL-1.0.html) / [NPL1.1](https://spdx.org/licenses/NPL-1.1.html)
  - 荒唐的许可证：
    - The Solipsistic Eclipse 公共许可证
    - [“不要做个鸟人”公共许可证](https://dbad-license.org/)
    - [JSON 许可证](http://www.json.org/license.html)

“其他关切”的详细说明：

**Facebook BSD + 专利许可证**

Facebook BSD + 专利许可证中包含一份 PATENTS 文件的详细说明，以有利于许可方而非被许可方的方式将风险转嫁给我们软件的下游消费者，因而违反了 Apache 法律政策关于[普适性捐赠者](http://www.apache.org/legal/ramblings.html#head-62def7ee9e2cb64eb757533133a99da472b1e88a)的要求。Facebook BSD + 专利许可证的条款内容并非 ALv2 条款的一个子集，它们也不能像 ALv2 那样进行分许可。

**NPL**

Netscape 公共许可证是 Mozilla 原始许可证，包含针对 Netscape 适用的修订内容。这些修订内容允许 “Netscape”（现在是 AOL 的一部分）无需遵守其他被许可方所必须遵守的互惠性要求。这使得该许可证不符合开源定义第5条（“不歧视个人或团体”）。

**荒唐的许可证**

这些许可证尽管对其创作者来说很有趣味，但从法律上看存在问题。它们通常包含一些主观的使用领域限制，例如“不要作恶”，却没有给出确定该主观限制的定义。在某些情形中，它们甚至可能没有给出符合 OSI 开源定义的充分授权。我们不希望让我们的下游消费者感到意外，所以我们禁止使用这样的许可证。

**JSON 许可证**

从2016年11月3日起，JSON license 被归到“X 类”许可证列表中。在此之前，是允许使用 [Json Java 库](https://github.com/stleary/JSON-java)。请参阅 Debian 的页面获得[替代选择列表](https://wiki.debian.org/qa.debian.org/jsonevil)。

### 它们不能被分发

Apache 项目不得在 ASF 源代码版本或便利二进制版本中分发 X 类许可证下许可的组件，不论该组件是源码形式还是二进制形式。与有关平台的问题一样，如果组件适用的许可证条款不影响 Apache 产品的许可，您可以依赖该组件。例如，在构建过程中使用 GPL 下许可的工具是可以的，但是不可以纳入 GPL 下许可的源代码。

### 当它们支持可选功能时，您可以依赖它们

Apache 项目可以依赖于在禁止类许可证下许可的组件，如果该组件在可选功能上。在这样做时，项目应向用户说明如何获取和安装不包含该组件的作品。可选就意味着该组件不是产品标准使用或产品达到理想质量水平所必需的。在这种情况下，您需要问自己的问题是:

- “大多数用户是否希望使用我未添加可选组件的产品？”

## 常见问题

### Apache 产品在什么平台运行重要吗？

不重要，除非该平台的条款影响到 Apache 产品的许可。例如，创建一个在 Windows 或 Java 上运行的产品、创建一个使用网络服务（如 Google Services 或 Yahoo Search）的产品、或是创建一个产品（如 JBoss 或 JIRA）的插件都是可以的，而创建一个 Linux 内核模块则不行，因为 Apache 产品本身在这种情况下将不得不以 Apache 许可证第2.0版之外的其他许可证进行许可。

请注意，这并不意味着您可以重新分发平台代码本身。这当然地取决于所述代码的许可证。如果您对平台的许可证是否会影响到 Apache 代码有任何疑问，请查阅 legal-discuss@ 邮件列表归档看是否之前存在此类问题，如果没有，请给 legal-discuss@ 发送邮件以解决您的疑问。

### 库依赖是否必须进行知识产权审查？

不用。

[知识产权审查](https://incubator.apache.org/ip-clearance/index.html)适用于从 Apache 之外导入代码库以在 Apache 进一步开发的情形。

### 当有许可证可供选择时，我应该如何管理作品？

在纳入作品许可证时，请说明您所用的许可证，并只纳入您所选的许可证。优先选择 A 类，其次是 B 类，再次是 X 类。如果（比如说）作品在源代码头部已提及有多种许可证可选，则您不必修改作品本身。

### 什么是必要的第三方声明？

当一个发行版包含第三方作品时，覆盖这些作品的许可证可能会要求您以特定的方式告知消费者。这些第三方声明因许可证而异。Apache 发行版应当包含每个许可证的副本，这些副本通常包含在 LICENSE 文档中。对于很多许可证来说，这种声明方式足以满足声明要求。某些许可证要求某些额外声明。在很多情况下，您可以在所依赖的该构件中包含此声明。

一个必要的第三方声明是指上述情况以外的任何第三方声明。

当发行版包含另一个 Apache 产品时，请参阅[绑定其他 ASF 产品](https://infra.apache.org/licensing-howto.html#bundle-asf-product)，获得所需声明的指引。

---

*Chinese translation contributed under CC-BY 4.0 by ALC Beijing and OpenAtom Legal & IP Team: translated by missing-9，modified by Vanessa Guo and Hazel Xue, and reviewed by Willem Jiang and Lotus Wang.中文翻译内容由 ALC 北京和开放原子法务与知识产权团队基于 CC-BY 4.0贡献：missing-9翻译，郭雪雯、薛杨洁修改，姜宁、王荷舒审校*
