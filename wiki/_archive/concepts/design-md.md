**Type**: concept
**Title**: DESIGN.md — AI Agent 的 UI 设计规格文件
**Created**: 2026-04-11
**Updated**: 2026-04-11
**Sources**: [[raw/articles/getdesign-md-design-systems-for-ai-agents.md]], [[raw/design-md/]]
**Related**: [[wiki/concepts/spec-design-doc.md]], [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/rule.md]], [[wiki/summaries/2026-04-11-getdesign-md-design-systems.md]]
**Tags**: #design-system #ai-agent #ui #DESIGN.md

---

# DESIGN.md — AI Agent 的 UI 设计规格文件

## 定义

DESIGN.md 是一种放置在项目根目录的 Markdown 文件，用于向 AI 编码代理（如 Cursor、Claude Code、Copilot）描述项目的视觉设计规范。AI Agent 在生成前端代码时会读取这个文件，自动遵循其中定义的设计风格。

## 核心思想

- **设计即代码上下文**：将品牌设计系统（色彩、字体、间距、组件风格等）编码为结构化的 Markdown 文档
- **零配置风格约束**：只需放入一个文件，AI 就能理解并遵循设计规范
- **可复用、可共享**：不同项目可以复用同一份 DESIGN.md，保持设计一致性

## 与 Harness Engineering 的关系

在 [[wiki/concepts/harness-engineering.md|Harness Engineering]] 体系中，DESIGN.md 本质上是 [[wiki/concepts/spec-design-doc.md|SPEC（设计规格文档）]] 在 UI/视觉设计领域的具体实现：

| Harness 概念 | DESIGN.md 对应 |
|-------------|---------------|
| SPEC | DESIGN.md 文件本身 |
| Rule | 颜色/字体/间距等硬性约束 |
| Skill | 特定组件的实现模式 |

## 典型文件结构

一份 DESIGN.md 通常包含：

```markdown
# Design System

## Brand
- Colors: primary, secondary, accent
- Typography: heading font, body font, monospace font
- Logo usage guidelines

## Layout
- Grid system (12-column, etc.)
- Spacing scale (4px base)
- Breakpoints

## Components
- Buttons (primary, secondary, ghost)
- Cards
- Navigation
- Forms

## Patterns
- Dark mode / Light mode
- Animation & transitions
- Iconography style
```

## 资源

- **getdesign.md** (voltagent/awesome-design-md): 收录了 62 个品牌的 DESIGN.md 文件
  - 详见摘要: [[wiki/summaries/2026-04-11-getdesign-md-design-systems.md]]
- **本地完整副本**: 58 个品牌的完整 DESIGN.md 已存入 `raw/design-md/` 目录
  - 每个文件包含完整的调色板（十六进制代码）、排版规则、组件样式、布局原则、响应式行为等
  - 可直接复制到项目根目录使用

### 品牌文件速查

| 分类 | 品牌（文件名） |
|------|--------------|
| **AI & LLM** | [[raw/design-md/claude.md\|claude]], [[raw/design-md/cohere.md\|cohere]], [[raw/design-md/elevenlabs.md\|elevenlabs]], [[raw/design-md/minimax.md\|minimax]], [[raw/design-md/mistral.ai.md\|mistral.ai]], [[raw/design-md/ollama.md\|ollama]], [[raw/design-md/opencode.ai.md\|opencode.ai]], [[raw/design-md/replicate.md\|replicate]], [[raw/design-md/runwayml.md\|runwayml]], [[raw/design-md/together.ai.md\|together.ai]], [[raw/design-md/voltagent.md\|voltagent]], [[raw/design-md/x.ai.md\|x.ai]] |
| **开发者工具** | [[raw/design-md/cursor.md\|cursor]], [[raw/design-md/expo.md\|expo]], [[raw/design-md/lovable.md\|lovable]], [[raw/design-md/raycast.md\|raycast]], [[raw/design-md/superhuman.md\|superhuman]], [[raw/design-md/vercel.md\|vercel]], [[raw/design-md/warp.md\|warp]] |
| **后端 & DevOps** | [[raw/design-md/clickhouse.md\|clickhouse]], [[raw/design-md/composio.md\|composio]], [[raw/design-md/hashicorp.md\|hashicorp]], [[raw/design-md/mongodb.md\|mongodb]], [[raw/design-md/posthog.md\|posthog]], [[raw/design-md/sanity.md\|sanity]], [[raw/design-md/sentry.md\|sentry]], [[raw/design-md/supabase.md\|supabase]] |
| **生产力 & SaaS** | [[raw/design-md/cal.md\|cal]], [[raw/design-md/intercom.md\|intercom]], [[raw/design-md/linear.app.md\|linear.app]], [[raw/design-md/mintlify.md\|mintlify]], [[raw/design-md/notion.md\|notion]], [[raw/design-md/resend.md\|resend]], [[raw/design-md/zapier.md\|zapier]] |
| **设计 & 创意** | [[raw/design-md/airtable.md\|airtable]], [[raw/design-md/clay.md\|clay]], [[raw/design-md/figma.md\|figma]], [[raw/design-md/framer.md\|framer]], [[raw/design-md/miro.md\|miro]], [[raw/design-md/webflow.md\|webflow]] |
| **金融 & 加密** | [[raw/design-md/coinbase.md\|coinbase]], [[raw/design-md/kraken.md\|kraken]], [[raw/design-md/revolut.md\|revolut]], [[raw/design-md/stripe.md\|stripe]], [[raw/design-md/wise.md\|wise]], [[raw/design-md/binance.md\|binance]] |
| **电商 & 零售** | [[raw/design-md/airbnb.md\|airbnb]], [[raw/design-md/nike.md\|nike]], [[raw/design-md/shopify.md\|shopify]], [[raw/design-md/pinterest.md\|pinterest]] |
| **媒体 & 消费科技** | [[raw/design-md/apple.md\|apple]], [[raw/design-md/ibm.md\|ibm]], [[raw/design-md/nvidia.md\|nvidia]], [[raw/design-md/spacex.md\|spacex]], [[raw/design-md/spotify.md\|spotify]], [[raw/design-md/uber.md\|uber]] |
| **汽车** | [[raw/design-md/bmw.md\|bmw]], [[raw/design-md/ferrari.md\|ferrari]], [[raw/design-md/lamborghini.md\|lamborghini]], [[raw/design-md/renault.md\|renault]], [[raw/design-md/tesla.md\|tesla]] |

## 使用建议

1. **选择参考品牌**：根据产品定位从上方速查表选择
2. **复制到项目**：`cp raw/design-md/<brand>.md <你的项目>/DESIGN.md`
3. **AI 自动遵循**：AI 编码代理在生成 UI 代码时会读取并遵循其中的规范
4. **持续迭代**：随项目演化更新 DESIGN.md，保持设计与代码同步
5. **混搭**：可以从多个品牌文件中摘取元素，组合成自己的 DESIGN.md

## Related

- [[wiki/concepts/spec-design-doc.md]] — SPEC 设计规格文档（Harness Engineering）
- [[wiki/concepts/harness-engineering.md]] — Harness Engineering 体系
- [[wiki/concepts/rule.md]] — AI 工程规矩与底线
- [[wiki/summaries/2026-04-11-getdesign-md-design-systems.md]] — getdesign.md 摘要
