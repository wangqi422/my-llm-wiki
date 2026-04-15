**Type**: concept
**Title**: CLAUDE.md（AI 员工手册）
**Created**: 2026-04-12
**Updated**: 2026-04-12
**Sources**: [[raw/articles/obsidian-ai-orange-book-full.md]]
**Related**: [[wiki/concepts/obsidian.md]], [[wiki/concepts/llm-wiki.md]], [[wiki/concepts/skill.md]], [[wiki/concepts/vault-architecture.md]], [[wiki/concepts/obsidian-skills.md]], [[wiki/people/hua-shu.md]], [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
**Tags**: #claude-code #knowledge-management #obsidian

---

# CLAUDE.md（AI 员工手册）

## 定义

CLAUDE.md 是放在项目或 vault 根目录的 Markdown 文件，Claude Code 每次启动时自动读取。它充当 AI Agent 的「员工手册」，定义 AI 在该目录下的行为规则、结构认知和操作边界。

## 核心要点

- **四块必写内容**：(1) 你是谁（身份/领域/偏好），(2) vault 怎么组织（目录结构/命名规范），(3) 行为边界（什么能动什么不能动），(4) 笔记模板（frontmatter 字段定义）— [[raw/articles/obsidian-ai-orange-book-full.md]]
- **路由器模式**：[[wiki/people/hua-shu.md|花叔]] 演化出 9 个 CLAUDE.md 组成的路由系统——根目录 CLAUDE.md 根据关键词（"写文章"→公众号工作区、"橙皮书"→橙皮书工作区）分发任务到子目录的专属 CLAUDE.md — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **自然生长**：不要试图一上来就写完美版本。先写几行基础信息，每次 AI 做错就加一条规则。三个月后它会自然变成一份详尽的操作指南 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **独立于编辑器**：CLAUDE.md 不是 Cursor 或 [[wiki/concepts/obsidian.md|Obsidian]] 的概念，是 Claude Code 本身的机制。无论使用哪种编辑器，Claude Code 都会读取它 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **与 index.md 配合**：CLAUDE.md 定义全局规则，每个文件夹的 index.md 提供局部导航。两者组合完成 80% 的 AI 知识库导航工作 — [[raw/articles/obsidian-ai-orange-book-full.md]]

## 与其他概念的关系

- 与 [[wiki/concepts/harness-engineering.md|SPEC]] 类似，都是给 AI 的结构化上下文，但 CLAUDE.md 面向项目/vault 级别，SPEC 面向单个任务
- 与 [[wiki/concepts/harness-engineering.md|Skill]] 互补：CLAUDE.md 定义规则（"做什么"和"不做什么"），Skill 定义能力（"怎么做"）
- 本 Wiki 的 CODEBUDDY.md 即是 CLAUDE.md 的等价物

## Related

- [[wiki/concepts/obsidian.md]]
- [[wiki/concepts/vault-architecture.md]]
- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/llm-wiki.md]]
- [[wiki/people/hua-shu.md]]
- [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
