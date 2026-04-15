**Type**: concept
**Title**: RAG（检索增强生成）
**Created**: 2026-04-08
**Updated**: 2026-04-12
**Sources**: [[raw/articles/Grok.md]], [[raw/articles/obsidian-ai-orange-book-full.md]]
**Related**: [[wiki/concepts/llm-wiki.md]], [[wiki/concepts/knowledge-compilation.md]], [[wiki/comparisons/llm-wiki-vs-rag.md]], [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
**Tags**: #rag #retrieval #llm #knowledge-management

---

# RAG（检索增强生成）

## 定义

RAG（Retrieval-Augmented Generation，检索增强生成）是一种让 LLM 在回答问题时，先从外部知识库检索相关片段，再基于检索结果生成答案的技术范式。

## 详细解释

传统 RAG 的工作流程是：每次用户提问时，系统先将问题转为向量，从文档库中检索最相关的文本片段，然后将这些片段作为上下文传给 LLM 生成答案。

### RAG 的局限性（Karpathy 视角）

根据 Karpathy 的分析，传统 RAG 存在以下问题：

- **无积累性**：每次提问都从原始文件临时检索片段，重新拼凑答案，没有知识沉淀
- **临时性**：答案生成后即丢弃，下次问同样问题需要重新检索和生成
- **缺乏结构化**：无法自动建立概念间的关联、索引、反向链接
- **无法发现矛盾**：不同来源之间的矛盾信息不会被主动发现和标注

这正是 [[wiki/concepts/llm-wiki.md|LLM Wiki]] 方法试图解决的问题——通过"编译"而非"检索"来管理知识。

## 关键要点

- RAG = 检索 + 生成，是目前最主流的 LLM 知识增强方式
- 核心优势：简单直接、实时性强、无需预处理
- 核心劣势：无积累、临时性、缺乏结构化
- [[wiki/people/hua-shu.md|花叔]] 的比喻：RAG 就像一个每天早上失忆的实习生——查资料写报告写得不错，但第二天忘了昨天写过什么，同样的话题从头来 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- 个人知识库 40 万字以内不需要向量数据库；超过百万字级别才需要 RAG 做语义检索辅助 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- 腾讯 IMA 等产品主要基于 RAG 机制 [[wiki/comparisons/llm-wiki-vs-ima-vs-youmind.md]]

## Related

- [[wiki/concepts/llm-wiki.md]]
- [[wiki/concepts/knowledge-compilation.md]]
- [[wiki/comparisons/llm-wiki-vs-rag.md]]
- [[wiki/summaries/2026-04-08-grok-karpathy-llm-wiki.md]]
- [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
