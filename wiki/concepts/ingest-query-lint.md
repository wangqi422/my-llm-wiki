**Type**: concept
**Title**: Ingest / Query / Lint（LLM Wiki 三大操作）
**Created**: 2026-04-08
**Updated**: 2026-04-08
**Sources**: [[raw/articles/Grok.md]]
**Related**: [[wiki/concepts/llm-wiki.md]], [[wiki/concepts/knowledge-compilation.md]]
**Tags**: #ingest #query #lint #llm-wiki #workflow

---

# Ingest / Query / Lint（LLM Wiki 三大操作）

## 定义

Ingest、Query、Lint 是 [[wiki/concepts/llm-wiki.md|LLM Wiki]] 的三大核心操作，分别对应知识的摄取、查询和维护，构成知识库的完整生命周期。

## 详细解释

### Ingest（摄取）

将新原始资料纳入知识体系的过程。LLM 会：
1. 阅读 `raw/` 中的原始文件
2. 创建总结页（`wiki/summaries/`）
3. 提取并创建/更新概念页（`wiki/concepts/`）
4. 提取并创建/更新人物页（`wiki/people/`）
5. 创建交叉引用和反向链接
6. 更新索引（`index.md`）和日志（`log.md`）

一个文件通常会自动触动 10-15 个页面。

### Query（查询）

直接向知识库提问，LLM 从 Wiki 中合成答案。特点：
- 支持复杂跨文件问题
- 每个事实附上来源链接
- 好答案可以"文件化"回 Wiki，成为永久知识
- 可生成 Markdown、幻灯片、图表等输出

### Lint（维护）

定期对知识库进行健康检查，包括：
- 找矛盾信息
- 补缺失链接
- 发现新连接
- 修复孤立页面
- 标记过时信息

推荐每周执行一次 Lint。

## 关键要点

- 三大操作形成闭环：Ingest（输入）→ Query（使用）→ Lint（维护）
- Ingest 是最核心的操作，触发知识编译 [[wiki/concepts/knowledge-compilation.md]]
- 日常使用口诀："三板斧"——扔资料、问问题、做检查

## Related

- [[wiki/concepts/llm-wiki.md]]
- [[wiki/concepts/knowledge-compilation.md]]
- [[wiki/people/andrej-karpathy.md]]
- [[wiki/summaries/2026-04-08-grok-karpathy-llm-wiki.md]]
