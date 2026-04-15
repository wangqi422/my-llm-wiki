**Type**: concept
**Title**: Agentic Note-Taking（AI 自动链接笔记）
**Created**: 2026-04-12
**Updated**: 2026-04-12
**Sources**: [[raw/articles/obsidian-ai-orange-book-full.md]]
**Related**: [[wiki/concepts/obsidian.md]], [[wiki/concepts/claude-md.md]], [[wiki/concepts/llm-wiki.md]], [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]], [[wiki/topics/personal-knowledge-management.md]]
**Tags**: #obsidian #claude-code #knowledge-management #automation

---

# Agentic Note-Taking（AI 自动链接笔记）

## 定义

Agentic Note-Taking 是由德国开发者 Stefan Imhoff 命名的工作流模式：用户正常写笔记（纯文本，不加任何链接），写完后由 AI Agent 自动识别所有人名、地名、书名、概念名词，搜索 vault 中是否已有对应笔记，自动替换为 [[wikilink]] 或创建新的实体笔记再链接。

## 核心要点

- **从手动到自动**：Stefan Imhoff 过去每天花 10-15 分钟手动添加 [[wikilinks]]，使用 Claude Code 后只需几秒钟 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **AI 更彻底**：人可能漏掉实体或忘记 vault 里已有某概念的笔记，AI 会全量搜索 vault，不遗漏 — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **降低笔记门槛**：用户不需要在写作时分心想链接，只管记录想法，整理交给 AI — [[raw/articles/obsidian-ai-orange-book-full.md]]
- **可进一步自动化**：做成 [[wiki/concepts/obsidian.md|Obsidian]] 模板命令或 [[wiki/concepts/claude-md.md|CLAUDE.md]] 里的自动规则，每次保存日记自动触发链接流程 — [[raw/articles/obsidian-ai-orange-book-full.md]]

## 典型 Prompt

```
读取今天的日记 daily/2026-04-11.md。
找出所有的人名、地名、书名、概念名词。
对于每一个实体：
1. 搜索vault中是否已有对应的笔记
2. 如果有，把日记中的纯文本替换为[[wikilink]]
3. 如果没有，创建一个新的实体笔记（包含基本信息），然后链接
修改后直接保存到原文件。
```

## 与其他概念的关系

- 是 [[wiki/concepts/llm-wiki.md|LLM Wiki]] 理念在日常笔记场景的具体应用
- 依赖 [[wiki/concepts/claude-md.md|CLAUDE.md]] 定义行为规则和 [[wiki/concepts/obsidian-skills.md|obsidian-skills]] 确保格式正确

## Related

- [[wiki/concepts/obsidian.md]]
- [[wiki/concepts/llm-wiki.md]]
- [[wiki/concepts/claude-md.md]]
- [[wiki/topics/personal-knowledge-management.md]]
- [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
