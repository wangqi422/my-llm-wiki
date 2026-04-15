**Type**: concept
**Title**: obsidian-skills（kepano 官方 Claude Code Skills）
**Created**: 2026-04-12
**Updated**: 2026-04-12
**Sources**: [[raw/articles/obsidian-ai-orange-book-full.md]]
**Related**: [[wiki/concepts/obsidian.md]], [[wiki/concepts/claude-md.md]], [[wiki/concepts/skill.md]], [[wiki/people/steph-ango.md]], [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
**Tags**: #obsidian #claude-code #skill

---

# obsidian-skills（kepano 官方 Claude Code Skills）

## 定义

obsidian-skills 是 [[wiki/concepts/obsidian.md|Obsidian]] CEO [[wiki/people/steph-ango.md|Steph Ango]]（kepano）在 GitHub 上发布的一组 Claude Code Skills，教 AI 正确处理 Obsidian 独有的 Markdown 扩展语法。截至 2026 年 4 月已获 20,000+ 星标。

## 核心要点

- **包含的 Skill 文件**：obsidian-markdown（处理 [[wikilinks]]、callouts、frontmatter）、obsidian-bases（处理 .base 数据库文件）、json-canvas（处理 .canvas 空间笔记）、defuddle（网页内容清洗工具）— [[raw/articles/obsidian-ai-orange-book-full.md]]
- **解决的问题**：Obsidian 的 Markdown 有自己的扩展语法（`[[wikilinks]]`、`> [!note]` callout blocks、`![[嵌入语法]]`、`.canvas` 文件），这些不是标准 Markdown，Claude Code 默认不认识 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **安装方式**：`claude install kepano/obsidian-skills`，30 秒搞定，装完无需配置 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **官方信号**：Obsidian CEO 亲自下场做 AI Agent 支持，表明官方认为 AI Agent 操作 vault 是核心使用场景 — [[raw/articles/obsidian-ai-orange-book-full.md]]

## 与其他概念的关系

- 与通用 [[wiki/concepts/harness-engineering.md|Skill]] 的关系：obsidian-skills 是 Skill 机制的一个专业应用实例
- 与 [[wiki/concepts/claude-md.md|CLAUDE.md]] 互补：CLAUDE.md 定义 vault 行为规则，obsidian-skills 教 AI 正确处理 Obsidian 格式

## Related

- [[wiki/concepts/obsidian.md]]
- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/claude-md.md]]
- [[wiki/people/steph-ango.md]]
- [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
