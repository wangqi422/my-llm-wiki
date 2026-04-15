**Type**: concept
**Title**: Obsidian
**Created**: 2026-04-08
**Updated**: 2026-04-12
**Sources**: [[raw/articles/Grok.md]], [[raw/articles/obsidian-ai-orange-book-full.md]]
**Related**: [[wiki/concepts/llm-wiki.md]], [[wiki/concepts/claude-md.md]], [[wiki/concepts/obsidian-skills.md]], [[wiki/concepts/vault-architecture.md]], [[wiki/concepts/agentic-note-taking.md]], [[wiki/people/steph-ango.md]], [[wiki/people/hua-shu.md]], [[wiki/topics/personal-knowledge-management.md]], [[wiki/comparisons/obsidian-vs-notion-vs-logseq.md]], [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
**Tags**: #obsidian #markdown #knowledge-management #tools

---

# Obsidian

## 定义

Obsidian 是一款免费的本地 Markdown 编辑器和知识管理工具，以其强大的双向链接和 Graph View（知识图谱视图）著称，是 [[wiki/concepts/llm-wiki.md|LLM Wiki]] 推荐的前端浏览工具。

## 详细解释

在 LLM Wiki 工作流中，Obsidian 的角色是"知识浏览器"——CodeBuddy / Claude Code 等 Agent 负责"写和维护" Wiki，Obsidian 负责"阅读和可视化"。

### 在 LLM Wiki 中的作用

- **浏览 Wiki 内容**：以 Vault（仓库）形式打开 Wiki 文件夹
- **Graph View**：可视化所有页面之间的链接关系，直观呈现知识网络
- **双向链接**：通过 `[[wikilink]]` 实现页面间的交叉引用
- **搜索**：全文搜索所有 Markdown 文件

### AI 时代的架构优势

Obsidian 在 AI 时代拥有三大决定性优势 — [[raw/articles/obsidian-ai-orange-book-full.md]]：

1. **Markdown 是 LLM 的母语**：同样信息用 Markdown 表示比 JSON/XML 少 30-50% token；Claude 1M token 窗口大约能装 200-300 万字 Markdown 内容
2. **本地文件 = AI 可直接读写**：Claude Code cd 进 vault 目录即可零配置零延迟完整操作所有笔记，无需 API/认证/网络请求
3. **三殊途同归**：Manus（task_plan.md）、OpenClaw（MEMORY.md）、Claude Code（CLAUDE.md）三个十亿级项目不约而同选择 Markdown 存储 AI 记忆

### CEO [[wiki/people/steph-ango.md|kepano]] 官方支持

2026 年 1 月，Obsidian CEO Steph Ango 在 GitHub 上发布 [[wiki/concepts/obsidian-skills.md|obsidian-skills]]（20,000+ 星），教 Claude Code 正确处理 Obsidian 独有语法。信号明确：AI Agent 操作 vault 是官方认可的核心使用场景。— [[raw/articles/obsidian-ai-orange-book-full.md]]

### 推荐插件

**必装**：
- **[[wiki/concepts/obsidian-skills.md|obsidian-skills]]**：kepano 官方 Claude Code Skills — [[raw/articles/obsidian-ai-orange-book-full.md]]

**强烈推荐**（橙皮书推荐）：
- **Claudian**：在 Obsidian 侧边栏嵌入 Claude Code 对话界面 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **Smart Connections**：AI embedding 语义搜索，支持本地模型 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **Copilot for Obsidian**：vault 级 RAG 问答系统 — [[raw/articles/obsidian-ai-orange-book-full.md]]

**其他**：
- **Obsidian Web Clipper**：浏览器插件，一键将网页保存为 Markdown
- **Dataview**：自动生成动态表格和列表
- **Kanban**：Markdown 看板视图 — [[raw/articles/obsidian-ai-orange-book-full.md]]

### 与 CodeBuddy IDE 的配合

推荐同时打开同一个 Wiki 文件夹：
- CodeBuddy IDE → 负责"写代码"（维护 Wiki）
- Obsidian → 负责"浏览 Graph View"

## 关键要点

- 官方网站：https://obsidian.md
- 免费使用，纯本地存储
- 是 LLM Wiki 工具链中的"前端"角色
- 图片自动下载设置：文件与链接 → 新建附件文件夹指向 `raw/images/`

## Related

- [[wiki/concepts/llm-wiki.md]]
- [[wiki/concepts/claude-md.md]]
- [[wiki/concepts/obsidian-skills.md]]
- [[wiki/concepts/vault-architecture.md]]
- [[wiki/concepts/agentic-note-taking.md]]
- [[wiki/concepts/ingest-query-lint.md]]
- [[wiki/people/andrej-karpathy.md]]
- [[wiki/people/steph-ango.md]]
- [[wiki/people/hua-shu.md]]
- [[wiki/topics/personal-knowledge-management.md]]
- [[wiki/comparisons/obsidian-vs-notion-vs-logseq.md]]
- [[wiki/summaries/2026-04-08-grok-karpathy-llm-wiki.md]]
- [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
