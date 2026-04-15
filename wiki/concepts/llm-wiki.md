**Type**: concept
**Title**: LLM Wiki
**Created**: 2026-04-08
**Updated**: 2026-04-12
**Sources**: [[raw/articles/Grok.md]], [[raw/articles/llm-wiki-desktop-app.md]], [[raw/articles/obsidian-ai-orange-book-full.md]]
**Related**: [[wiki/concepts/rag.md]], [[wiki/concepts/knowledge-compilation.md]], [[wiki/concepts/ingest-query-lint.md]], [[wiki/concepts/obsidian.md]], [[wiki/concepts/knowledge-graph.md]], [[wiki/concepts/claude-md.md]], [[wiki/concepts/vault-architecture.md]], [[wiki/concepts/agentic-note-taking.md]], [[wiki/people/andrej-karpathy.md]], [[wiki/people/hua-shu.md]], [[wiki/topics/personal-knowledge-management.md]], [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
**Tags**: #llm-wiki #karpathy #knowledge-management #second-brain

---

# LLM Wiki

## 定义

LLM Wiki 是 Andrej Karpathy 于 2026 年提出的个人知识管理方法，让 LLM 作为"知识编译器"将原始资料主动加工成持久化的、结构化的 Markdown Wiki，实现知识的持续累积和自我进化。

## 详细解释

LLM Wiki 的核心思想是将 LLM 的角色从"临时检索回答器"（如传统 [[wiki/concepts/rag.md|RAG]]）转变为"知识编译器"。用户将原始资料（文章、论文、图片等）存入 `raw/` 文件夹，LLM 主动读取并"编译"成结构化的 Markdown 页面（总结页、概念页、实体页、反向链接、索引等），存储在 `wiki/` 文件夹中。

### 三层架构

1. **Raw Sources（原始层）**：不可变的原始资料，包括文章、论文、图片、代码、数据集等。一旦放入永不修改。
2. **Wiki（编译层）**：LLM 自动生成的结构化知识库，包含总结页、概念页、人物页、对比表、索引等。
3. **Schema（规则层）**：配置文件（如 `CLAUDE.md` / `CODEBUDDY.md`），定义 LLM 如何组织 Wiki、摄取资料、维护一致性。

### 核心特征

- **编译而非检索**：知识一旦被"编译"进 Wiki，就成为永久结构化 artifact
- **持续进化**：新资料进来时，LLM 会更新相关页面、创建新连接、标记矛盾
- **知识复利**：Wiki 像"第二大脑的代码库"，越用越"聪明"
- **完全可控**：纯 Markdown 文件，本地存储，可版本控制

## 关键要点

- LLM 是维护者，用户负责提供资料和提问
- 三大操作：[[wiki/concepts/ingest-query-lint.md|Ingest / Query / Lint]]
- 推荐工具链：[[wiki/concepts/obsidian.md|Obsidian]] + Claude Code / CodeBuddy IDE
- 与传统 RAG 形成鲜明对比 [[wiki/comparisons/llm-wiki-vs-rag.md]]
- Karpathy 官方 Gist: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f

## 示例

典型文件夹结构：
```
my-wiki/
├── raw/          # 原始资料（不变）
├── wiki/         # LLM 编译的知识库
├── _templates/   # 笔记模板
└── CLAUDE.md     # 规则文件
```

### SCHEMA.md：将通用 AI 变成专业 wiki 管理员

[[wiki/people/hua-shu.md|花叔]] 在实践中进一步发展了 LLM Wiki，提出用 SCHEMA.md 定义 wiki 的命名规范、标签体系、wikilink 规则和文章模板。SCHEMA.md + [[wiki/concepts/claude-md.md|CLAUDE.md]] 的组合，将通用 AI 变成严格执行规范的 wiki 管理员。— [[raw/articles/obsidian-ai-orange-book-full.md]]

### 规模验证

根据花叔的实际测试和社区反馈，40 万字规模以内完全不需要向量数据库。Claude 的大上下文窗口（200K-1M token）配合 wiki/INDEX.md 导航，纯文本方案在绝大多数个人知识库场景下成立。超过百万字级别才需要考虑加 RAG 辅助。— [[raw/articles/obsidian-ai-orange-book-full.md]]

### 三殊途同归

Manus（task_plan.md）、OpenClaw（MEMORY.md / SOUL.md）、Claude Code（CLAUDE.md）三个完全独立的十亿级项目，不约而同选择 Markdown 文件作为 AI Agent 的记忆层——不是向量数据库、不是 SQL、不是 JSON。— [[raw/articles/obsidian-ai-orange-book-full.md]]

## Related

- [[wiki/concepts/rag.md]]
- [[wiki/concepts/knowledge-compilation.md]]
- [[wiki/concepts/ingest-query-lint.md]]
- [[wiki/concepts/obsidian.md]]
- [[wiki/concepts/claude-md.md]]
- [[wiki/concepts/vault-architecture.md]]
- [[wiki/concepts/agentic-note-taking.md]]
- [[wiki/concepts/harness-engineering.md]]
- [[wiki/people/andrej-karpathy.md]]
- [[wiki/people/hua-shu.md]]
- [[wiki/topics/personal-knowledge-management.md]]
- [[wiki/comparisons/llm-wiki-vs-rag.md]]
- [[wiki/comparisons/llm-wiki-vs-ima-vs-youmind.md]]
- [[wiki/summaries/2026-04-08-grok-karpathy-llm-wiki.md]]
- [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
