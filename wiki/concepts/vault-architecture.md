**Type**: concept
**Title**: Vault 架构设计（六条原则与三种模板）
**Created**: 2026-04-12
**Updated**: 2026-04-12
**Sources**: [[raw/articles/obsidian-ai-orange-book-full.md]]
**Related**: [[wiki/concepts/obsidian.md]], [[wiki/concepts/claude-md.md]], [[wiki/concepts/llm-wiki.md]], [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]], [[wiki/topics/personal-knowledge-management.md]]
**Tags**: #obsidian #knowledge-management #architecture

---

# Vault 架构设计（六条原则与三种模板）

## 定义

Vault 架构是指 [[wiki/concepts/obsidian.md|Obsidian]] vault 中文件夹、文件、标签、链接的组织方式。好的架构让 AI 用最少的 token 理解最多的信息。

## 六条设计原则

1. **Markdown 是唯一格式** — 任何想让 AI 处理的信息，先转 .md 再放入 vault。原始文件（PDF/音频）存 vault 之外 — [[raw/articles/obsidian-ai-orange-book-full.md]]
2. **保持用词一致** — 统一术语（如始终用"RAG"而非"检索增强生成"），可维护 glossary.md 术语表 — [[raw/articles/obsidian-ai-orange-book-full.md]]
3. **扁平优先** — 文件夹不超过 3 层嵌套。用标签和链接做分类，文件夹只管生命周期 — [[raw/articles/obsidian-ai-orange-book-full.md]]
4. **每条笔记要有 summary** — frontmatter 中一句话摘要，AI 扫描时无需读全文即可判断相关性 — [[raw/articles/obsidian-ai-orange-book-full.md]]
5. **frontmatter 五字段** — title / tags / created / type（fleeting/literature/permanent）/ summary — [[raw/articles/obsidian-ai-orange-book-full.md]]
6. **区分人的输入和 AI 产出** — 分开存放，处理策略不同：人的笔记不能随意修改，AI 产出可自由更新 — [[raw/articles/obsidian-ai-orange-book-full.md]]

## 三种架构模板

| 模板 | 适用场景 | 核心目录 |
|------|---------|---------|
| **A：极简型** | 笔记 <200 条，新手 | daily/ + notes/ + projects/ + archive/ |
| **B：PARA 型** | 多项目并行管理 | Projects/ + Areas/ + Resources/ + Archive/ |
| **C：Karpathy Wiki 型** | 研究型、知识密集 | raw/（源材料）→ wiki/（结构化知识）→ output/（产出）|

## 三工具各司其职

- **文件夹**管生命周期（进行中/已完成/归档）
- **#标签**管主题（一条笔记可属于多个领域）
- **[[双向链接]]**管关系（语义层面的精确关联）

## 与其他概念的关系

- [[wiki/concepts/claude-md.md|CLAUDE.md]] 在 vault 架构中充当全局规则定义
- 模板 C 即 [[wiki/concepts/llm-wiki.md|LLM Wiki]] 的 raw→wiki→output 三层结构
- 本 Wiki（my-llm-wiki）采用的是模板 C 的变体

## Related

- [[wiki/concepts/obsidian.md]]
- [[wiki/concepts/claude-md.md]]
- [[wiki/concepts/llm-wiki.md]]
- [[wiki/topics/personal-knowledge-management.md]]
- [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
