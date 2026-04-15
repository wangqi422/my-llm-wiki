**Type**: concept
**Title**: 知识图谱（Knowledge Graph）
**Created**: 2026-04-10
**Updated**: 2026-04-10
**Sources**: [[raw/articles/llm-wiki-desktop-app.md]]
**Related**: [[wiki/concepts/llm-wiki.md]], [[wiki/concepts/knowledge-compilation.md]], [[wiki/topics/personal-knowledge-management.md]]
**Tags**: #knowledge-graph #graph #visualization #community-detection

---

# 知识图谱（Knowledge Graph）

## 定义

在 LLM Wiki 语境下，知识图谱是将 Wiki 页面及其关系建模为图结构的技术，用于发现知识集群、隐含关联和覆盖缺口，超越简单 wikilink 的扁平链接。

## 详细解释

### 从 Wikilink 到知识图谱

[[wiki/concepts/llm-wiki.md|Karpathy 的原版 LLM Wiki]] 使用 `[[wikilink]]` 建立页面间的关系，依赖 [[wiki/concepts/obsidian.md|Obsidian]] 的 Graph View 做可视化。这种方式简洁但信息量有限——链接只表示"有关系"，不表示"多大关系"或"什么类型的关系"。

桌面 LLM Wiki（nashsu/llm_wiki）引入了**四信号知识图谱**，将页面关系量化为多维度的相关性分数：

| 信号 | 说明 |
|------|------|
| **直接链接** | 页面之间的 wikilink 数量和方向 |
| **来源重叠** | 两个页面是否引用了相同的原始资料 |
| **Adamic-Adar 指标** | 基于共同邻居的网络拓扑相似度（社交网络分析经典指标） |
| **类型亲和力** | 同类型页面（如两个概念页）之间的天然亲和力 |

### Louvain 社区检测

基于图谱结构，使用 Louvain 算法自动发现**知识集群**（Communities）——一组紧密关联的页面。每个集群有凝聚力评分，可以直观看出哪些知识领域已经形成体系，哪些还是孤立的碎片。

### 图谱洞察

在社区检测基础上，进一步自动发现两类有价值的模式：

- **惊讶连接（Surprising Connections）**：看似不相关但实际存在隐含联系的页面对
- **知识缺口（Knowledge Gaps）**：知识覆盖的空白区域，提示需要补充的方向

这两个功能将知识图谱从"被动展示"升级为"主动建议"。

### 技术实现

使用 **sigma.js**（WebGL 图渲染）+ **graphology**（图数据结构）+ **ForceAtlas2**（力导向布局算法）实现交互式图谱可视化。

## 关键要点

- 知识图谱是对 wikilink 的量化升级，从"有/无链接"到"多维相关性分数"
- Louvain 社区检测可自动发现知识集群，无需人工分类
- 图谱洞察能主动发现隐含关联和知识缺口，指导知识库的补充方向
- 目前在桌面 LLM Wiki（nashsu/llm_wiki）中实现，Karpathy 原版纯文本方案不具备此能力

## 示例

假设你的 Wiki 中有关于 Transformer、Attention、BERT、GPT 的概念页：
- 四信号图谱会计算它们之间的多维相关性，形成一个"NLP 架构"知识集群
- 如果你还有一个关于 Vision Transformer 的页面，图谱洞察可能发现它与 NLP 集群的"惊讶连接"
- 如果集群中缺少 Positional Encoding 的概念页，图谱洞察会标记为"知识缺口"

## Related

- [[wiki/concepts/llm-wiki.md]]
- [[wiki/concepts/knowledge-compilation.md]]
- [[wiki/concepts/obsidian.md]]
- [[wiki/topics/personal-knowledge-management.md]]
- [[wiki/summaries/2026-04-10-llm-wiki-desktop-app.md]]
