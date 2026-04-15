**Type**: concept
**Title**: 知识编译（Knowledge Compilation）
**Created**: 2026-04-08
**Updated**: 2026-04-12
**Sources**: [[raw/articles/Grok.md]], [[raw/articles/llm-wiki-desktop-app.md]], [[raw/articles/obsidian-ai-orange-book-full.md]]
**Related**: [[wiki/concepts/llm-wiki.md]], [[wiki/concepts/rag.md]], [[wiki/concepts/ingest-query-lint.md]], [[wiki/concepts/knowledge-graph.md]], [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
**Tags**: #knowledge-compilation #llm-wiki #karpathy

---

# 知识编译（Knowledge Compilation）

## 定义

知识编译是 [[wiki/concepts/llm-wiki.md|LLM Wiki]] 的核心机制——LLM 将原始资料主动"编译"（Compile）成结构化的持久知识页面，而非每次临时检索后丢弃。

## 详细解释

知识编译的类比来自软件工程：就像编译器将源代码转换为可执行程序，LLM 将原始资料（raw 矿石）"冶炼"成结构化的 Wiki 页面（精炼金属）。编译后的知识具有以下特征：

- **持久化**：编译结果保存为 Markdown 文件，永久留存
- **结构化**：自动建立总结页、概念页、实体页、反向链接、索引
- **可演进**：新资料进来时触发增量更新，而非重新编译
- **可溯源**：每个事实都通过 wikilink 链接回原始来源

### 编译 vs 检索

| 特征 | 编译（LLM Wiki） | 检索（RAG） |
|------|------------------|-------------|
| 时机 | 资料进入时预处理 | 查询时实时处理 |
| 结果 | 永久结构化页面 | 临时生成的回答 |
| 积累性 | 知识不断累积 | 无积累 |
| 维护成本 | 需要 Lint 维护 | 无需维护 |

## 关键要点

- 编译是一次性前置投入，换取后续持续收益
- 编译后的知识是 artifact，不会因为对话结束而消失
- [[wiki/people/andrej-karpathy.md|Karpathy]] 表示"大部分 token 现在都花在'操纵知识'而不是写代码上了"
- [[wiki/people/hua-shu.md|花叔]] 的「越写越厚，越厚越好写」正反馈循环验证了编译模式的知识复利效应——写到第七篇 Claude Code 文章时，AI 已知道之前说了什么、测试过什么、观点是什么，初稿不再需要从零解释 — [[raw/articles/obsidian-ai-orange-book-full.md]]

## Related

- [[wiki/concepts/llm-wiki.md]]
- [[wiki/concepts/rag.md]]
- [[wiki/concepts/ingest-query-lint.md]]
- [[wiki/comparisons/llm-wiki-vs-rag.md]]
- [[wiki/summaries/2026-04-08-grok-karpathy-llm-wiki.md]]
- [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
