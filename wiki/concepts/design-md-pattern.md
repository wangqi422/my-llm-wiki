---
title: "DESIGN.md Pattern"
type: concept
created: "2026-04-11"
updated: "2026-04-13"
sources:
  - "[[raw/articles/getdesign-md-design-systems-for-ai-agents.md]]"
  - "[[raw/articles/awesome-design-md.md]]"
tags:
  - design-system
  - ai-agent
  - vibe-coding
  - markdown
  - google-stitch
  - brand-design
  - protocol
  - harness
aliases:
  - "DESIGN.md"
  - "DESIGN.md模式"
  - "设计系统Markdown化"
  - "awesome-design-md"
  - "AI Agent 的 UI 设计规格文件"
merged_from:
  - design-md
---

# DESIGN.md Pattern

> 由 Google Stitch 催生的设计系统 Markdown 化范式——用纯文本向 AI 编码代理传递品牌视觉规范，46.3k Star 验证社区强需求。

## Definition

DESIGN.md Pattern 指2026年兴起的将品牌设计系统以 Markdown 纯文本形式描述的规范。由 Google Stitch 项目引入，核心理念是：**Markdown 是 LLM 读取效果最好的格式**，通过结构化文字描述（而非 Figma 导出或 JSON Schema）将设计意图传递给 AI 编码代理，使其生成视觉一致的 UI。

与 `AGENTS.md`（告诉编码代理"如何构建"）互补，`DESIGN.md` 告诉设计代理"项目应该长什么样"。

## Core Content

### 核心理念

```
传统路径：Figma Design Token → JSON Schema → 代码主题配置
                    ↓
DESIGN.md：Markdown 纯文本 → AI 编码代理直接读取 → 生成一致 UI
```

- 不需要 Figma 导出、JSON 架构或特殊工具
- 放入项目根目录，任何 AI 编码代理或 Google Stitch 即可理解
- Markdown 是 LLM 最佳阅读格式——零转换损耗

### AI 原生开发规范体系

| 文件 | 角色 | 功能 | 类比 |
|------|------|------|------|
| `AGENTS.md` | 编码代理 | 定义如何构建项目 | 开发规范 |
| `DESIGN.md` | 设计代理 | 定义项目外观和感觉 | 设计规范 |
| `CODEBUDDY.md` | 知识库架构师 | 定义知识库结构和工作流 | 知识管理规范 |
| Cursor Rules | 编码代理 | IDE 级别编码偏好 | 编辑器配置 |

### DESIGN.md 文件标准结构（9 章节）

1. **视觉主题与氛围**：情绪、密度、设计哲学
2. **调色板与角色**：语义名称 + 十六进制值 + 功能角色
3. **排版规则**：字体系列、完整层次结构表
4. **组件样式**：按钮、卡片、输入框、导航及其状态
5. **布局原则**：间距比例、网格、留白哲学
6. **深度与海拔**：阴影系统、表面层次
7. **做与不做**：设计指导原则和反模式
8. **响应式行为**：断点、触摸目标、折叠策略
9. **代理提示指南**：快速颜色参考、现成提示词

### 生态数据（2026-04-13）

- **awesome-design-md** 仓库：46.3k Star / 5.7k Fork（MIT License）
- 收录 **66 个品牌**设计系统，跨 **9 大行业**
- 行业覆盖：AI & LLM 平台 / 开发者工具 / 后端DevOps / 生产力SaaS / 设计工具 / 金融科技 / 电商零售 / 媒体消费科技 / 汽车
- 顶级品牌：Apple, Nike, Tesla, Stripe, Figma, Vercel, Spotify, NVIDIA 等
- 每个品牌包含 `DESIGN.md`（代理读取）+ `preview.html`（视觉预览）

### 与 Vibe Coding 运动的关系

DESIGN.md 是 **Vibe Coding** 运动的组成部分——开发者通过自然语言描述意图，AI 代理执行实现。三大支柱：
1. **Cursor Rules / AGENTS.md** → 编码意图
2. **DESIGN.md** → 设计意图
3. **MCP / A2A 协议** → 工具连接和代理协作

### 与传统设计系统的区别

| 维度 | 传统设计系统 | DESIGN.md |
|------|-------------|-----------|
| 格式 | Figma + JSON Token + 代码主题 | Markdown 纯文本 |
| 消费者 | 开发者（人类） | AI 编码代理 |
| 维护成本 | 高（多工具同步） | 低（单文件维护） |
| 品牌还原 | 依赖开发者理解 | AI 直接解析 |
| 可扩展性 | 需要工具链支持 | 任何文本编辑器 |
| LLM 兼容性 | 需要转换 | 原生最优 |

## Key Points

- DESIGN.md 是 Google Stitch 催生的"设计系统 Markdown 化"范式
- 核心价值：Markdown 是 LLM 最佳阅读格式，零转换传递设计意图
- 与 AGENTS.md 互补——一个管"怎么建"，一个管"长什么样"
- 46.3k Star + 66 品牌 + 9 行业 证明强社区需求
- 标准 9 章节结构覆盖从色彩到响应式到 Agent 提示的完整设计规范
- 属于 Vibe Coding 运动的设计端——自然语言描述意图，AI 执行
- **对品牌设计 AIGC 的启示**：可为 CODM 创建专属 DESIGN.md，将品牌视觉 DNA 编码为 AI 可读格式

## 与 Harness Engineering 的关系

在 [[harness-engineering]] 体系中，DESIGN.md 本质上是 SPEC 在 UI/视觉设计领域的具体实现：

| Harness 概念 | DESIGN.md 对应 |
|-------------|---------------|
| SPEC | DESIGN.md 文件本身 |
| Rule | 颜色/字体/间距等硬性约束 |
| Skill | 特定组件的实现模式 |

## 品牌资源

**awesome-design-md** 仓库（46.3k Star / 5.7k Fork / MIT License）收录 66 个品牌，本地完整副本 58 个存于 `raw/design-md/`。

<details>
<summary>品牌文件速查（按行业分类）</summary>

| 分类 | 品牌 |
|------|------|
| AI & LLM | claude, cohere, elevenlabs, minimax, mistral.ai, ollama, replicate, runwayml, together.ai, x.ai |
| 开发者工具 | cursor, expo, lovable, raycast, superhuman, vercel, warp |
| 后端DevOps | clickhouse, composio, hashicorp, mongodb, posthog, supabase |
| 生产力SaaS | cal, intercom, linear.app, mintlify, notion, resend, zapier |
| 设计创意 | airtable, clay, figma, framer, miro, webflow |
| 金融科技 | coinbase, kraken, revolut, stripe, wise, binance |
| 电商零售 | airbnb, nike, shopify, pinterest |
| 媒体消费 | apple, ibm, nvidia, spacex, spotify, uber |
| 汽车 | bmw, ferrari, lamborghini, renault, tesla |

</details>

## CODM Application

- **创建 CODM DESIGN.md**：将 [[codm-ppt-visual-style|CODM 视觉风格规范]]（深色#151619+荧光黄#FCFF34+军事HUD等）编码为 DESIGN.md 格式，供 AI 代理在生成物料时自动遵循
- **版本级 DESIGN.md**：为每个赛季/IP 联动创建专属 DESIGN.md（基于 [[codm-visual-guide|版本视觉指引]]），实现"一份文件控制整赛季 AI 生成风格"
- **与 [[lovart-design-agent]] 结合**：将 DESIGN.md 作为 Lovart 的品牌输入，实现全链路自动化 + 品牌一致性
- **与 [[recraft-v4]] 结合**：DESIGN.md 中的调色板和排版规则可直接指导 Recraft 的品牌色控制
- **参考 awesome-design-md 中的游戏/媒体案例**：PlayStation、SpaceX 等品牌的 DESIGN.md 可作为 CODM 版本的参考模板
- **与 [[brand-color-control-aigc]] 协同**：DESIGN.md 的调色板章节是品牌色 API 参数化的上游定义

## Related

- [[design-agent-paradigm]] — DESIGN.md 是设计 Agent 化的输入端
- [[lovart-design-agent]] — 全链路设计 Agent，DESIGN.md 的最佳消费者
- [[recraft-v4]] — 品牌设计单点工具，通过 DESIGN.md 获取品牌规范
- [[brand-color-control-aigc]] — 品牌色控制，DESIGN.md 调色板章节的实现
- [[brand-custom-ai-model]] — 品牌自定义模型，DESIGN.md 补充文字描述维度
- [[agent-stack-mcp-a2a]] — DESIGN.md + MCP/A2A 构成完整 Agent 工作规范
- [[agent-framework-landscape-2026]] — 框架选型中 DESIGN.md 可作为设计输入标准
- [[mcp-protocol]] — MCP 连接工具，DESIGN.md 定义设计意图
- [[codm-aigc-workflow]] — CODM 工作流中的设计规范标准化

## Sources

- [[raw/articles/awesome-design-md.md]]
- https://github.com/VoltAgent/awesome-design-md
