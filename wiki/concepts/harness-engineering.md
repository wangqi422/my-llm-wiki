---
title: "Harness Engineering（Agent 工程化控制）"
type: concept
created: "2026-04-08"
updated: "2026-04-13"
sources:
  - "[[raw/articles/Grok.md]]"
  - "[[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]"
  - "[[raw/articles/obsidian-ai-orange-book-full.md]]"
tags:
  - harness
  - agent
  - engineering
  - llm
  - control
  - multi-agent
  - practice
aliases:
  - "Agent工程化"
  - "Harness"
  - "Rule"
  - "Skill"
  - "Workflow"
  - "Scripts/验证"
  - "SPEC设计规格"
  - "dev-map"
merged_from:
  - rule
  - skill
  - workflow
  - scripts-verification
  - spec-design-doc
  - dev-map
---

# Harness Engineering（Agent 工程化控制）

> 一整套让 AI 在工程里稳定产出正确结果的工程系统——可约束、可协作、可校验、可持续维护。

## 核心理念

> "AI 不是助手，AI 更像是一支执行力极强但必须被制度化管理的团队。"

- **稳定**：换需求、换维护人仍能稳定工作
- **产出**：不只是代码，还包括需求、方案、验证、交付等完整过程产物
- **正确结果**：有办法判断做得对不对

## 九层全貌（六大核心零件 + 三层扩展）

| 层次 | 零件 | 回答什么 | 比喻 |
|------|------|---------|------|
| 1 | **SPEC** | 到底要做什么 | 作战目标 |
| 2 | **Rule** | 什么事绝对不能乱来 | 纪律红线 |
| 3 | **Skill** | 这件事具体怎么做 | 标准动作SOP |
| 4 | **Sub Agent** | 复杂任务由谁分工 | 兵种分工 |
| 5 | **Workflow** | 角色按什么顺序接力 | 指挥链 |
| 6 | **Scripts** | 最后谁来判断做没做好 | 验收闸机 |
| 7 | **dev-map** | 代码结构从哪进门 | 开发导航图 |
| 8 | **任务看板** | 需求历史从哪进门 | 项目态势板 |
| 9 | **MCP** | AI怎么安全接外部系统 | 标准插座 |

### SPEC（设计规格文档）

Harness的真正第一步——先和 AI 反复磨透需求、目标、边界和验收标准。SPEC必须清晰写明**所有**需求，**没有**模糊词（"建议""可选"）。仅靠SPEC解决不了"如何稳定做到位"——这是后续引入Rule/Skill/Scripts的原因。

### Rule（AI工程规矩）

告诉AI什么能做、什么不能做。但Rule是**软约束不是硬门禁**——AI会忽略、绕过、解释性执行。正确用法：Rule保留红线，固定步骤拆成Skill，能判定的约束下沉为Scripts。

### Skill（AI标准操作手册）

高频固定动作的SOP——让AI"按剧本完成"而非"临场发挥"。适合做成Skill的标志：执行步骤固定、每次都要做、做错一次就很恶心、不值得每次重新思考。花叔实战积累55个Skills（人物视角20+、内容创作、工具类）。

### Workflow（AI协作接力规则）

多Agent的接力赛规则——规定每次前进、暂停、打回、重跑都有明确依据。三层：写给人看（整体路径）→ 写给系统看（流程定义文件）→ 写给角色看（角色契约）。核心纪律：**每一棒只给当前该看的那份材料**。

### Scripts（硬门禁与事后验证）

Harness里最"硬"的东西——不告诉AI怎么做，而是直接检查做没做到。三类检查：A类静态规范、B类基础交付门槛（编译+测试）、C类工程一致性。含基线对比机制（开发前后对比，堵住"历史遗留"借口）。

> AI的完成定义从"我觉得我做完了"变成"脚本判定你通过了，你才算做完"。

### dev-map（开发导航）+ 任务看板

dev-map是AI的"项目级记忆"索引（功能在哪些文件、怎么接入、改一个模块牵动哪些链路）。任务看板记录需求侧总览。不是百科全书，而是够准的索引。

## 搭建顺序

```
1.先磨SPEC → 2.补最关键Rule → 3.高频动作下沉为Skill
→ 4.单Agent失稳时拆多Agent → 5.补Workflow
→ 6.补dev-map和看板 → 7.最后考虑MCP
```

## 与 LLM Wiki 的关系

Harness解决"Agent怎么靠谱干活"（行为控制层），LLM Wiki解决"知识怎么越积累越聪明"（知识内容层）。CODEBUDDY.md既是Wiki的Schema，也是Agent的Harness。

## Key Points

- 不是一次设计到位，而是"跑一段、撞墙、补洞、再跑一段"
- 真正贵的不是token，真正贵的是失控
- 真正成熟的Harness会越来越依赖脚本，而不是提示词
- 先从最痛的问题开始，四块拼图会自己长全

## Related

- [[sub-agent]] — 多角色AI分工
- [[mcp-protocol]] — 外接能力标准插座
- [[llm-wiki]] — 知识内容层
- [[design-md-pattern]] — SPEC在UI设计领域的具体实现
- [[codm-aigc-workflow]]

<details>
<summary>See Also</summary>

- [[claude-md]]
- [[obsidian-skills]]
- [[multi-agent-engineering]]
- [[single-agent-vs-multi-agent]]
- [[personal-knowledge-management]]

</details>

## Sources

- [[raw/articles/Grok.md]]
- [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]
- [[raw/articles/obsidian-ai-orange-book-full.md]]
