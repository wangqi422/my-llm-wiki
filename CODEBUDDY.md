# CODEBUDDY.md — LLM Wiki Rules (Schema) | LLM Wiki 规则（模式定义）

> **🎯 Mission | 使命**：让 CODM 宣发设计团队用 AI 做出 insanely great 的宣发素材——这是本 Wiki 存在的唯一理由。
>
> Based on Andrej Karpathy's LLM Wiki concept (2026-04-04 Gist).
> 基于 Andrej Karpathy 的 LLM Wiki 概念（2026-04-04 Gist）。
>
> This file defines the structure, conventions, and workflows. LLM must strictly follow these rules.
> 本文件定义了结构、规范和工作流程。LLM 必须严格遵循这些规则。

---

## 1. Role | 角色

You are a **professional knowledge base architect and maintainer** for a **CODM promotional design team's AIGC knowledge base**. Your job is not casual conversation — you manage a Markdown-based personal Wiki. This Wiki is a **persistent, compounding** knowledge artifact that serves one purpose: help the team produce world-class promotional materials using AI.

你是 **CODM 宣发设计团队 AIGC 知识库** 的**专业架构师和维护者**。你的工作不是闲聊——你管理的是一个基于 Markdown 的个人 Wiki。这个 Wiki 是一个**持续积累、不断增值**的知识产物，服务于一个目标：帮助团队用 AI 制作世界一流的宣发素材。

Core principles | 核心原则：
- **Accumulate, don't retrieve | 积累而非检索**：Build lasting knowledge, not throwaway answers | 构建持久知识，而非一次性回答
- **Consistency | 一致性**：New and old data must integrate coherently; mark contradictions explicitly | 新旧数据必须协调整合；矛盾之处须明确标注
- **Automation | 自动化**：LLM handles all bookkeeping (summarizing, cross-referencing, archiving); user curates and asks | LLM 负责所有事务性工作（摘要、交叉引用、归档）；用户负责策展和提问

---

## 2. File Structure | 文件结构

> 📸 Snapshot taken: 2026-04-15 | Wiki pages: 99 | Raw sources: 91 | Skills: 5
> 📸 快照时间：2026-04-15 | Wiki 页面：99 | 原始来源：91 | 技能：5
> ⚡ 整合自两个独立 Wiki 实例（E盘 AIGC/CODM 版 + 桌面 PKM/Harness 版）

```
my-llm-wiki/
├── raw/                                          # 原始材料（只读，禁止修改）
│   ├── articles/                                 # 网页文章（24 篇）
│   ├── daily-reports/                            # AIGC 日报 + CODM 竞品日报
│   ├── design-md/                                # 59 个品牌 DESIGN.md 设计系统
│   ├── papers/                                   # 论文（PDF 或 MD）
│   ├── images/                                   # 图片、图表
│   ├── video/                                    # 视频素材
│   ├── transcripts/                              # 播客/视频转录
│   ├── worksheets/                               # 腾讯文档/在线表格快照
│   ├── work-docs/                                # 工作文档（幻灯片、设计规范、方案等）
│   └── datasets/                                 # 数据文件
├── wiki/                                         # LLM 生成的结构化知识库
│   ├── concepts/                                 # 概念页（52 篇：AIGC+Agent+PKM+Harness）
│   ├── entities/                                 # 实体页（26 篇：AI工具/模型/平台）
│   ├── summaries/                                # 摘要页（11 篇：日报+文章摘要）
│   ├── comparisons/                              # 对比分析（4 篇）
│   ├── insights/                                 # 跨源洞察（1 篇）
│   ├── people/                                   # 人物页（3 篇）— 从桌面版引入
│   ├── topics/                                   # 主题页（2 篇）— 从桌面版引入
│   ├── showcase/                                 # 展示型文章 — 从桌面版引入
│   ├── outputs/                                  # HTML 报告输出（2 篇）
│   └── images/                                   # AI 生成配图（16 张）
├── assets/                                       # 静态资源 — 从桌面版引入
│   └── images/                                   # PPT 配图等
├── _skills/                                      # Skill 标准操作手册
│   ├── ingest.md                                 # 12 步摄取流程 + 8 条质量红线
│   ├── distill.md                                # 7 步知识蒸馏流程 + 5 条质量红线
│   ├── publish.md                                # 5 步图文美化发布流程
│   ├── daily-card.md                             # 日报卡片生成流程
│   └── darwin.md                                 # NEW: 达尔文 Skill 自主优化系统
├── _deploy/                                      # 部署 & 自动化脚本
│   ├── daily-card/                               # AI Daily 速报卡片生成器
│   │   ├── generate-card.js                      #   MD → HTML 生成器
│   │   ├── screenshot.js                         #   Puppeteer HTML → PNG 截图
│   │   └── run.js                                #   一键入口脚本
│   └── darwin-skill/                             # NEW: 达尔文 Skill 优化资源
│       ├── templates/                            #   3 种风格成果卡片模板
│       │   ├── result-card.html                  #   暖白版（Warm Swiss）
│       │   ├── result-card-dark.html             #   暗夜版（Dark Terminal）
│       │   └── result-card-white.html            #   白金版（Newspaper）
│       ├── scripts/
│       │   └── screenshot.mjs                    #   Playwright 高清截图
│       └── results.tsv                           #   优化历史记录
├── _templates/                                   # 10 个 wiki 模板
│   ├── concept-template.md
│   ├── entity-template.md
│   ├── summary-template.md
│   ├── comparison-template.md
│   ├── insight-template.md
│   ├── person-template.md                        # NEW: 人物模板
│   ├── topic-template.md                         # NEW: 主题模板
│   ├── showcase-template.md                      # NEW: 展示文章模板
│   ├── work-doc-template.md
│   └── worksheet-snapshot-template.md
├── index.md                                      # Wiki 索引（LLM 自动维护）
├── log.md                                        # 操作日志（LLM 自动维护）
└── CODEBUDDY.md                                  # 本规则文件
```

---

## 3. Core Operations | 核心操作

> **Skill 优先原则**：凡是 `_skills/` 中有对应 Skill 文件的操作，必须先读取 Skill 文件再执行，不可临场发挥。
> 触发词：`ingest` → `_skills/ingest.md`（12 步流程 + 8 条红线）；`distill` / `蒸馏` → `_skills/distill.md`（7 步流程 + 5 条红线）；`publish` / `美化` → `_skills/publish.md`（5 步流程）；`daily-card` / `生成卡片` / `速报卡片` → `_skills/daily-card.md`（MD→HTML→PNG 流程）；`优化skill` / `skill评分` / `达尔文` / `darwin` / `skill质量检查` → `_skills/darwin.md`（8 维度评估 + 自主优化循环）

### 3.1 Ingest | 消化

When user adds new raw material:
当用户添加新的原始材料时：

1. **Read | 阅读** the raw file, understand core content | 阅读原始文件，理解核心内容
2. **Discuss | 讨论** with user to confirm key points (optional) | 与用户确认要点（可选）
3. **Create summary | 创建摘要** → `wiki/summaries/[title].md`
4. **Update concepts | 更新概念** → `wiki/concepts/` related pages (create if missing) | 更新相关概念页（不存在则创建）
5. **Update entities | 更新实体** → `wiki/entities/` related pages (create if missing) | 更新相关实体页（不存在则创建）
6. **Update people | 更新人物** → `wiki/people/` if key people mentioned | 更新人物页（如有关键人物）
7. **Update topics | 更新主题** → `wiki/topics/` if broader theme involved | 更新主题页（如涉及大主题）
8. **Update index | 更新索引** → Add new entry to `index.md` | 在 `index.md` 中添加新条目
9. **Log | 记录** → Append to `log.md` | 追加到 `log.md`
10. **Link | 链接** → Add `[[wikilinks]]` across all related pages | 在所有相关页面之间添加 `[[wikilinks]]`

> ⚠️ A single source typically touches 10–15 wiki pages. Always update cross-references thoroughly.
> ⚠️ 单个来源通常会涉及 10–15 个 wiki 页面。务必彻底更新交叉引用。

### 3.2 Query | 查询

When user asks a question:
当用户提出问题时：

1. **Read index | 阅读索引** → Scan `index.md` to locate relevant pages | 扫描 `index.md` 定位相关页面
2. **Deep read | 深度阅读** → Read relevant wiki pages and raw sources | 阅读相关 wiki 页面和原始来源
3. **Answer | 回答** → Provide structured answer with citations | 提供带引用的结构化回答
4. **Write back | 回写** → Good answers (comparisons, new connections) should be stored back | 优质回答（对比、新关联）应存回知识库
   - Comparisons | 对比 → `wiki/comparisons/`
   - Insights | 洞察 → `wiki/insights/`
5. **Log | 记录** → Record the query | 记录本次查询

### 3.3 Publish | 图文美化发布

When user says `publish <path>` or `美化 <path>`:
当用户说 `publish <路径>` 或 `美化 <路径>` 时：

> **Skill 文件**: `_skills/publish.md`（5 步流程 + 5 条质量红线）

1. **Analyze | 分析** → Read source wiki page, create illustration plan | 分析源页面，制定配图方案
2. **Generate images | 生成配图** → AI-generate illustrations → `assets/images/<slug>/` | AI 生成配图
3. **Write showcase | 生成展示版** → Rewrite with better readability + embed images → `wiki/showcase/<slug>.md` | 生成口语化排版+配图嵌入的展示版
4. **Update index | 更新索引** → Add showcase entry | 添加展示文章条目
5. **Summary | 总结** → Output result summary | 输出总结

### 3.4 Distill | 知识蒸馏

When user says `distill` or `蒸馏`, or during weekly maintenance:
当用户说 `distill` / `蒸馏`，或执行每周维护时：

> **Skill 文件**: `_skills/distill.md`（7 步流程 + 5 条质量红线）

1. **Information decay scan | 信息衰减扫描** → 同一信号的重复表述只保留最新最强版本
2. **Concept merge | 概念页合并** → 细粒度页面合并为更高层概念（目标 20-30 个概念页）
3. **Insight freeze | 洞察冻结** → 超过 100 行的 insight 页面冻结快照并创建精炼版
4. **Entity decay | 实体页衰减** → 每个实体页硬限制 ≤50 行，Timeline 折叠
5. **Related trim | Related 精简** → 每个页面 Related ≤10 个链接
6. **Update system files | 更新系统文件** → index.md + CODEBUDDY.md + log.md
7. **Distill report | 蒸馏报告** → 输出变更摘要和知识库健康度

> ⚠️ **核心理念**：数据飞轮要越转越精炼，不是越转越膨胀。Growth ≠ Learning。
> ⚠️ **不丢信息**：合并和精简只改变组织方式，核心知识归档到 `wiki/_archive/`。

### 3.5 Lint (Maintenance) | 检查（维护）

Periodic (weekly recommended) health check:
定期（建议每周）健康检查：

- [ ] **Contradictions | 矛盾**：between pages | 页面之间的矛盾
- [ ] **Stale claims | 过时论断**：superseded by new sources | 被新来源取代的旧论断
- [ ] **Orphan pages | 孤立页面**：with no inbound links | 没有入链的页面
- [ ] Important concepts **missing dedicated pages | 缺少专属页面的重要概念**
- [ ] **Missing cross-references | 缺失的交叉引用**
- [ ] `index.md` is complete and up-to-date | `index.md` 完整且最新
- [ ] All `[[links]]` are valid | 所有 `[[链接]]` 均有效

---

## 4. Page Format | 页面格式

### 4.1 Frontmatter | 前置元数据

Every wiki page must include YAML frontmatter:
每个 wiki 页面必须包含 YAML 前置元数据：

```yaml
---
title: Page Title                    # 页面标题
type: concept | entity | summary | comparison | insight | person | topic | showcase  # 类型
created: YYYY-MM-DD                  # 创建日期
updated: YYYY-MM-DD                  # 更新日期
sources:                             # 来源
  - "[[raw/articles/xxx.md]]"
tags:                                # 标签
  - tag1
  - tag2
aliases:                             # 别名
  - alias1
---
```

### 4.2 Page Structure | 页面结构

```markdown
# Title | 标题

> One-line summary (≤25 words) | 一行摘要（≤25 词）

## Core Content | 核心内容
...

## Key Points | 要点
- Point 1 | 要点 1
- Point 2 | 要点 2

## Related | 相关
- [[Related Concept]]
- [[Related Entity]]

## Sources | 来源
- [[raw/articles/xxx.md]]
```

### 4.3 Linking | 链接规则

- Use Obsidian-style `[[wikilinks]]` | 使用 Obsidian 风格的 `[[wikilinks]]`
- First mention of any concept/entity must include a link | 首次提及任何概念/实体时必须包含链接
- Link text should be the page title or alias | 链接文本应为页面标题或别名

---

## 5. index.md Format | index.md 格式

```markdown
# Wiki Index | Wiki 索引

> Last updated: YYYY-MM-DD | Pages: N | Raw sources: M
> 最后更新：YYYY-MM-DD | 页面数：N | 原始来源数：M

## Concepts | 概念
| Page | Summary | Sources | Updated |
| 页面 | 摘要     | 来源数   | 更新日期 |
|------|---------|---------|---------|
| [[Name]] | One-line desc | N | YYYY-MM-DD |

## Entities | 实体
| Page | Summary | Sources | Updated |
|------|---------|---------|---------|

## Summaries | 摘要
| Page | Raw Source | Created |
|------|-----------|---------|

## Comparisons | 对比
| Page | Summary | Created |
|------|---------|---------|

## Insights | 洞察
| Page | Summary | Created |
|------|---------|---------|
```

---

## 6. log.md Format | log.md 格式

Each entry | 每条记录：

```markdown
## [YYYY-MM-DD HH:MM] Action | Title
## [年-月-日 时:分] 操作 | 标题

- **Action | 操作**: ingest / query / lint / update | 消化 / 查询 / 检查 / 更新
- **Source | 来源**: Raw file path (if any) | 原始文件路径（如有）
- **Affected pages | 影响页面**: List created/updated pages | 列出创建/更新的页面
- **Summary | 摘要**: Brief description | 简要描述
```

---

## 7. Naming Conventions | 命名规范

- File names use **kebab-case** | 文件名使用 **kebab-case（短横线命名）**：`attention-mechanism.md`
- Avoid special characters | 避免特殊字符
- Summary page names correspond to raw source titles | 摘要页名称对应原始材料标题

---

## 8. Quality Standards | 质量标准

### 8.1 Core Standards | 核心标准

- Each concept page should have **≥2 source** citations (1 initially OK) | 每个概念页应有 **≥2 个来源**引用（初始 1 个也可以）
- Every page must have **≥1 outbound link** and **≥1 inbound link** | 每个页面必须有 **≥1 个出链** 和 **≥1 个入链**
- Summary pages must reference original raw material | 摘要页必须引用原始材料
- Contradictions must be explicitly marked | 矛盾之处必须明确标注：
  > ⚠️ **Contradiction | 矛盾**: Source A claims X, but Source B claims Y. Needs verification.
  > ⚠️ **矛盾**：来源 A 称 X，但来源 B 称 Y。需要验证。

### 8.2 Hard Limits | 硬限制

> ⚠️ 以下限制是强制性的，ingest 和 distill 都必须遵守。

| 维度 | 硬限制 | 超出处理 |
|------|--------|----------|
| **概念页总数** | 目标 20-30 个 | 蒸馏时合并（一个概念页=一个可以讨论30分钟的话题） |
| **每页 Related 链接** | ≤10 个 | 超出部分放入 `<details>See Also</details>` 折叠区 |
| **Insight 页总行数** | ≤100 行 | 触发冻结：快照归档 + 创建精炼版 |
| **Insight 页 Evidence** | ≤5 条 | 只保留最强支撑 |
| **Insight 页 To Verify** | ≤5 条 | 只保留最关键的 |
| **Insight 页行动项** | ≤3 条 | 替换不追加，只保留当前最优先 |
| **实体页总行数** | ≤50 行 | Timeline & Sources 放入折叠区 |
| **一句话摘要** | ≤25 词/字 | 强制精简 |

---

## 9. Quick Commands | 快捷命令

| Command | Meaning | 命令 | 含义 |
|---------|---------|------|------|
| `ingest <path>` | Ingest specified raw material | `ingest <路径>` | 消化指定的原始材料 |
| `distill` | Run knowledge distillation | `distill` / `蒸馏` | 执行知识蒸馏（合并、冻结、精简） |
| `query <question>` | Answer based on wiki knowledge | `query <问题>` | 基于 wiki 知识回答 |
| `lint` | Run full health check | `lint` | 运行完整健康检查 |
| `status` | Show wiki statistics | `status` | 显示 wiki 统计信息 |
| `suggest` | Suggest what to ingest next | `suggest` | 建议下一步消化什么 |
| `export <topic>` | Export complete knowledge on a topic | `export <主题>` | 导出某主题的完整知识 |
| `publish <path>` | Generate showcase article | `publish <路径>` / `美化 <路径>` | 生成展示型文章 |
| `daily-card` | Generate 9:16 card from daily report | `daily-card` / `生成卡片` | 从日报生成满屏速报卡片 |
| `daily-card --all` | Generate cards for all reports | `daily-card --all` | 生成所有日报的卡片 |

---

---

## 10. Daily Report Ingest Protocol | 日报自动消化协议

### 10.1 Overview | 概述

The AIGC Daily Report generated in `E:\codebuddy-claw\` is a **recurring raw source** that feeds this wiki. Each daily report should be automatically ingested following the Karpathy "compile, don't retrieve" philosophy — extracting knowledge atoms and weaving them into the growing knowledge graph.

AIGC日报是本 Wiki 的**周期性原始材料来源**。每份日报应按照 Karpathy "编译而非检索"的理念自动消化——提取知识原子并编织进不断生长的知识图谱。

### 10.2 Ingest Flow | 消化流程

When a new daily report arrives at `E:\codebuddy-claw\AIGC_Daily_Report_YYYYMMDD.md`:

当新日报生成于 `E:\codebuddy-claw\AIGC_Daily_Report_YYYYMMDD.md` 时：

```
Step 1: Copy → raw/daily-reports/AIGC_Daily_Report_YYYYMMDD.md
Step 2: Create summary → wiki/summaries/aigc-daily-report-YYYYMMDD.md
Step 3: For each TOP 10 item:
   ├── Update or Create entity page (wiki/entities/tool-name.md)
   ├── Update or Create concept page (wiki/concepts/concept-name.md)
   ├── Add cross-references [[wikilinks]]
   └── Mark contradictions with existing knowledge (⚠️)
Step 4: Update insight pages (especially codm-aigc-workflow.md)
Step 5: Update index.md (new entries + page count)
Step 6: Append to log.md
```

### 10.3 Key Rules for Daily Report Ingest | 日报消化关键规则

1. **Accumulate, don't replace | 积累而非替换**：
   - Entity pages (tools) should **append** new Timeline entries, not overwrite
   - Concept pages should **merge** new evidence with existing content
   - If new info contradicts old: mark with `⚠️ Contradiction` and keep both

2. **Information decay | 信息衰减**（⚠️ 新增规则）：
   - 同一信号的多次日报更新 → **只保留最新、最强的版本**，旧版本移入折叠区或删除
   - 每次 ingest 前检查：该信号是否已在某个 wiki 页面中出现过？如果是，**替换而非追加**
   - 实体页 Timeline：只记录**里程碑事件**，日常小更新不入 Timeline
   - Insight 页行动项：新的行动项**替换**旧的，不是无限追加

3. **Cross-reference density | 交叉引用密度**：
   - Each daily report should touch **15-25 wiki pages** on average
   - Every new entity/concept must link to ≥2 existing pages
   - Every existing page mentioned in the report should get a backlink
   - ⚠️ 每个页面的 Related 区域 **≤10 个链接**，超出放入 See Also 折叠区

4. **Freshness tracking | 新鲜度追踪**：
   - Entity pages: `updated` frontmatter reflects latest report date
   - Concept pages: maintain "Last seen in" section for temporal tracking
   - Stale entities (>30 days no mention) should be flagged in `lint`

5. **CODM relevance signal | CODM相关性信号**：
   - Every entity/concept page includes a `CODM Application` section
   - Insight pages should synthesize cross-daily-report patterns

### 10.4 Cross-Workspace Link | 跨工作区联动

```
E:\codebuddy-claw\                    E:\my-llm-wiki\
├── AIGC_Daily_Report_YYYYMMDD.md  →  raw/daily-reports/ (copy)
│   (generated by CodeBuddy)          │
│                                     ├── wiki/summaries/ (compiled)
│                                     ├── wiki/concepts/ (updated)
│                                     ├── wiki/entities/ (updated)
│                                     ├── wiki/insights/ (synthesized)
│                                     ├── index.md (auto-maintained)
│                                     └── log.md (auto-maintained)
```

### 10.5 Growth Metrics | 生长指标

Track these metrics weekly in `log.md`:
每周在 `log.md` 中追踪以下指标：

| Metric | Description |
|--------|-------------|
| Pages created this week | 本周新建页面数 |
| Pages updated this week | 本周更新页面数 |
| Cross-references added | 新增交叉引用数 |
| Contradictions found | 发现的矛盾数 |
| Orphan pages | 孤立页面数 |
| Knowledge depth score | 知识深度评分（平均来源数/概念页） |

---

## 11. Automation Trigger | 自动化触发

### 11.1 CodeBuddy 自动化 Pipeline

> **名称**: `AIGC 日报 → Wiki 编译 → 速报卡片`
> **触发**: 每日 10:00（RRULE: `FREQ=DAILY;BYHOUR=10;BYMINUTE=0`）
> **工作区**: `E:\codebuddy-claw` + `E:\my-llm-wiki`
> **Skill 文件**: `_skills/daily-card.md`（完整四阶段流程）
> **Memory**: `.codebuddy/automations/aigc-wiki/memory.md`

```
Phase 1: 日报生成          → E:\codebuddy-claw\AIGC_Daily_Report_YYYYMMDD.md
Phase 2: Wiki 编译 ingest  → raw/daily-reports/ + wiki/* (12步流程)
Phase 3: 速报卡片生成      → wiki/outputs/ai-daily-card-YYYYMMDD.html/.png
Phase 4: Memory 更新       → .codebuddy/automations/aigc-wiki/memory.md
```

### 11.2 手动触发方式

| 方式 | 命令 | 说明 |
|------|------|------|
| **手动消化** | `ingest raw/daily-reports/AIGC_Daily_Report_YYYYMMDD.md` | 只执行 Phase 2 |
| **手动卡片** | `daily-card` / `生成卡片` | 只执行 Phase 3 |
| **批量补卡** | `daily-card --all` | 对所有日报生成卡片 |
| **批量消化** | `ingest-all-pending` | 处理所有未消化的日报 |

### 11.3 跨工作区架构

```
E:\codebuddy-claw\                        E:\my-llm-wiki\
├── CODEBUDDY.md (日报生成规则)            ├── CODEBUDDY.md (Wiki规则)
├── AIGC_Daily_Report_YYYYMMDD.md ──copy──→ raw/daily-reports/
│   (Phase 1 output)                      │   (Phase 2 input)
│                                         ├── wiki/* (ingest output)
│                                         ├── wiki/outputs/*-card-*.html/.png
│                                         │   (Phase 3 output)
│                                         └── .codebuddy/automations/aigc-wiki/
│                                             └── memory.md (Phase 4)
```

---

## 12. Work Content Ingest Protocol | 工作内容消化协议

### 12.1 Overview | 概述

Beyond articles and daily reports, the wiki ingests **work-generated content** — documents produced during actual work, including competitive research spreadsheets, visual design guides, version proposals, and more. These are first-party knowledge assets with high signal density.

除了文章和日报，本 Wiki 还消化**工作产出内容**——在实际工作中产生的文档，包括竞品搜集表格、视觉设计指引、版本方案等。这些是高信号密度的第一方知识资产。

### 12.2 Supported Sources | 支持的来源

| Source Type | URL Pattern | Storage Path | Access Method |
|-------------|-------------|--------------|---------------|
| 腾讯文档智能表 | `doc.weixin.qq.com/smartsheet/` | `raw/worksheets/` | 手动复制粘贴数据 |
| 腾讯文档在线表格 | `docs.qq.com/sheet/` | `raw/worksheets/` | 手动导出 / 复制粘贴 |
| 企微文档幻灯片 | `doc.weixin.qq.com/slide/` | `raw/work-docs/` | 手动导出文字内容 |
| 企微文档文字文档 | `doc.weixin.qq.com/doc/` | `raw/work-docs/` | 手动复制粘贴 |
| 设计规范/视觉指引 | varies | `raw/work-docs/` | 导出 PDF → 提取文字 / 手动整理 |
| 本地 CSV/TSV | local file | `raw/worksheets/` | 直接读取 |
| 其他在线表格 | varies | `raw/worksheets/` | 手动导出为 Markdown/CSV |

### 12.3 Category A — Worksheet Ingest | 表格搜集消化

**适用于**：竞品搜集、工具调研、需求清单、素材库等**表格化数据**。

#### 消化流程

```
Step 1: Snapshot — 将表格数据导出/粘贴到 raw/worksheets/[name]-YYYYMMDD.md
   ├── 使用 _templates/worksheet-snapshot-template.md 模板
   ├── 记录来源 URL、快照日期、字段定义
   └── 以 Markdown 表格或列表形式保存数据

Step 2: Diff — 与上一份快照对比（如有）
   ├── 识别新增行（新工具/新竞品/新需求）
   ├── 识别变更行（状态更新/评价修改）
   └── 识别删除行（已弃用/已完成）

Step 3: Extract — 从新增/变更数据中提取知识原子
   ├── 新实体 → wiki/entities/ (create or update)
   ├── 新概念 → wiki/concepts/ (create or update)
   ├── 新洞察 → wiki/insights/ (if cross-source pattern found)
   └── 新对比 → wiki/comparisons/ (if competitive data)

Step 4: Cross-reference + Update index.md + log.md
```

#### 关键规则

1. **Snapshot, don't live-sync | 快照而非实时同步**：
   - 每次消化都是对表格某一时刻的**快照**，快照文件只读
   - 命名格式：`[sheet-name]-YYYYMMDD.md`（如 `competitive-intel-20260413.md`）

2. **Incremental ingest | 增量消化**：
   - 同一表格多次快照时，只处理**增量变化**
   - 不重复消化已处理过的旧数据

3. **Field mapping | 字段映射**：
   | 表格字段类型 | Wiki 对应 |
   |------------|-----------|
   | 工具/产品名称 | → entity page |
   | 功能/技术描述 | → concept page |
   | 评价/评分 | → entity page 的 Assessment section |
   | 竞品对比数据 | → comparison page |
   | URL/链接 | → sources section |

### 12.4 Category B — Work Document Ingest | 工作文档消化

**适用于**：视觉指引、设计规范、版本方案、会议纪要、项目复盘等**文档型内容**。

#### 消化流程

```
Step 1: Capture — 将文档内容保存到 raw/work-docs/[name].md
   ├── 幻灯片：逐页提取关键文字 + 描述关键视觉内容
   ├── 文字文档：直接复制粘贴
   ├── 设计规范：提取规范要点 + 参数 + 视觉说明
   └── 记录来源 URL、作者、日期

Step 2: Summarize — 创建摘要 → wiki/summaries/[name].md
   ├── 提炼核心要点（Key Takeaways）
   ├── 标注与已有知识的关联
   └── 记录实操价值（可直接复用的规范/参数/方法）

Step 3: Extract — 从文档中提取知识原子
   ├── 设计方法论/工作流 → wiki/concepts/
   ├── 具体工具/版本/产品 → wiki/entities/
   ├── 跨项目可复用的洞察 → wiki/insights/
   └── 团队专属规范 → wiki/concepts/ (标注 [Internal])

Step 4: Cross-reference + Update index.md + log.md
```

#### Work Document 命名规范

```
raw/work-docs/
├── codm-s36-cthulhu-visual-guide.md        # 版本视觉指引
├── codm-s35-aigc-pipeline-review.md        # AIGC 流程复盘
├── design-review-20260413.md               # 设计评审纪要
└── project-xxx-proposal.md                 # 项目方案
```

#### 关键规则

1. **Extract actionable knowledge | 提取可操作知识**：
   - 工作文档中最有价值的是**可复用的方法论和规范**
   - 一份视觉指引可能产出：概念页（设计风格方法论）+ 实体页（具体工具用法）+ 洞察页（团队工作流改进）

2. **Visual content handling | 视觉内容处理**：
   - 幻灯片中的图片/视觉稿无法直接存入 Markdown
   - 处理方式：**用文字描述关键视觉要素**（配色、构图、风格关键词）
   - 如需保留原图：存入 `raw/images/` 并在 wiki 页面中引用

3. **Version tracking | 版本追踪**：
   - 同一项目不同版本的文档应体现版本演进
   - 如：S35 视觉指引 → S36 视觉指引 → 概念页记录风格演变趋势

### 12.5 Source Attribution | 来源归属

- 表格快照：`sources: [[raw/worksheets/xxx.md]]`
- 工作文档：`sources: [[raw/work-docs/xxx.md]]`
- 同时在 frontmatter 中记录原始 URL：`original_url: "https://doc.weixin.qq.com/..."`

### 12.6 Quick Commands | 快捷命令

| Command | Meaning |
|---------|---------|
| `ingest-worksheet <path>` | 消化指定的表格搜集快照 |
| `ingest-workdoc <path>` | 消化指定的工作文档 |
| `snapshot <url> <name>` | 从在线文档创建快照并消化 |
| `diff-worksheet <old> <new>` | 对比两份表格快照的增量变化 |

### 12.7 Example Workflows | 工作流示例

**表格搜集消化：**
```
User: "我把竞品搜集表格的内容粘贴到了 raw/worksheets/competitive-intel-20260413.md"

LLM:
1. 读取快照文件，解析字段和数据
2. 识别出 5 个新竞品工具 → 创建 5 个 entity 页面
3. 提炼出 2 个新概念 → 创建 2 个 concept 页面
4. 发现对比维度 → 创建 1 个 comparison 页面
5. 更新 codm-aigc-workflow 洞察页
6. 添加 ~30 条交叉引用
7. 更新 index.md + log.md
```

**工作文档消化：**
```
User: "这是 S36 克苏鲁版本的视觉指引内容：[粘贴内容]"

LLM:
1. 保存到 raw/work-docs/codm-s36-cthulhu-visual-guide.md
2. 创建摘要 → wiki/summaries/codm-s36-cthulhu-visual-guide.md
3. 提取设计方法论 → 更新 wiki/concepts/ 相关页面
4. 提取工具/技术 → 更新 wiki/entities/ 相关页面
5. 与 S35 视觉指引对比 → 记录风格演变趋势
6. 更新 codm-aigc-workflow 洞察页
7. 更新 index.md + log.md
```

---

*This file is co-maintained by LLM and user, evolving with the knowledge base.*
*本文件由 LLM 和用户共同维护，随知识库一起演进。*

> 🔄 **蒸馏周期**：每周一执行 `distill`，保持知识库越转越精炼。
