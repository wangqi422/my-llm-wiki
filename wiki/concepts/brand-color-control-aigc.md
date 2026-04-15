---
title: "Brand Color Control in AIGC"
type: concept
created: "2026-04-10"
updated: "2026-04-13"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260409.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260413.md]]"
tags:
  - brand-consistency
  - color-management
  - aigc
  - visual-identity
aliases:
  - "AIGC品牌色控制"
  - "AI生图色彩管理"
  - "Brand Color AIGC"
---

# Brand Color Control in AIGC

> 通过API参数或模型训练，确保AI生成图像严格遵循品牌配色方案的技术与方法论。

## Definition

Brand Color Control in AIGC 指在AI图像生成过程中，通过精确的色彩指定机制（如HEX色值输入、色板参数、自定义模型训练等），确保产出素材100%符合品牌VI规范的能力。这是AI生成内容从"创意探索"走向"品牌级生产"的关键技术门槛。

## Core Content

### 技术路径

| 路径 | 工具 | 精准度 | 可行性 |
|------|------|--------|--------|
| API色板参数 | [[wan27-image]] `color_palette` | ⭐⭐⭐⭐⭐ | 已可用 |
| 自定义模型训练 | [[adobe-firefly]] Custom Models | ⭐⭐⭐⭐ | 公测中 |
| 提示词色彩描述 | [[midjourney-v7]] / Stable Diffusion | ⭐⭐ | 不够精确 |
| 品牌设计专用模型 | [[recraft-v4]] Brand Studio | ⭐⭐⭐⭐⭐ | 已可用（04.12新增）|
| 后期色彩校正 | Photoshop / LUT | ⭐⭐⭐ | 增加工序 |

### Wan2.7-Image 的突破
- 通过 `color_palette` API参数可输入3-10种精确HEX色值及比例
- 生成图像严格遵循品牌配色方案
- 这是首个在API层面支持精确色彩控制的主流AI生图模型

### 品牌色管理工作流
```
品牌VI手册 → 提取核心色板(HEX值+占比)
    ↓
color_palette 参数配置
    ↓
AI生图（自动遵循品牌色）
    ↓
人工色彩QA验收
    ↓
输出合规品牌素材
```

## Key Points

- [[wan27-image]] 首创API级精准色彩控制，可直接输入HEX色值和比例
- [[adobe-firefly]] 自定义模型训练从根源学习品牌视觉DNA
- 对CODM：可直接输入军绿/橙金/暗灰等品牌色HEX值，所有AI素材自动遵循
- 多语言文字渲染（12种语言）配合品牌色=一次性生成多区域版本KV
- **（04.12新增）** [[recraft-v4]] 作为首个品牌设计专用AI图像模型，原生支持SVG矢量输出+品牌色精确控制，ELO 1172 位居品牌设计领域榜首
- **（04.13新增）** [[recraft-v4]] Hugging Face T2I总榜登顶——品牌调色板功能已被生产工作室验证（Apostle: "顶级品牌设计资产选择"），$0.04/张使大规模品牌资产生成经济可行
- **（04.13新增）** Firefly AI Assistant嵌入Photoshop + 参考图合成 = 品牌色控制从"生成时控制"扩展到"修改时保持"——Generative Fill参考品牌规范图片进行局部重绘时自动继承品牌DNA

## CODM Application

- 输入CODM品牌色板（军绿#xxx/橙金#xxx/暗灰#xxx）→ API自动遵循
- 多语言海报一次性生成中/英/日/韩版本，色彩统一
- 赛季主题色变体探索（如暗夜主题、热带主题）在品牌色框架内

## Related

<!-- Related ≤10 个链接，超出放入 See Also 折叠区 -->
- [[codm-visual-guide]]
- [[game-version-visual-guide]]
- [[wan27-image]]
- [[adobe-firefly]]
- [[brand-custom-ai-model]]
- [[character-consistency-aigc]]
- [[recraft-v4]]
- [[lovart-design-agent]]
- [[design-md-pattern]] — DESIGN.md 调色板章节是品牌色控制的上游定义
- [[codm-aigc-workflow]]

<details><summary>See Also</summary>

- [[design-agent-paradigm]]

</details>

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260409.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
