---
title: "Wan2.7-Image"
type: entity
created: "2026-04-10"
updated: "2026-04-10"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260409.md]]"
tags:
  - tool
  - ai-image
  - alibaba
  - color-control
aliases:
  - "Wan 2.7 Image"
  - "通义万相2.7"
  - "阿里Wan2.7"
---

# Wan2.7-Image

> 阿里巴巴首创"统一架构"AI图像模型，支持精准色彩控制和骨骼级人脸定制。

## Info

| Field | Value |
|-------|-------|
| Type | tool / AI model |
| Domain | AI图像生成 |
| Developer | 阿里云通义实验室 |
| Website | https://tongyi.aliyun.com |
| Launch | 2026-04-01 |

## Overview

Wan2.7-Image 首创"统一架构"将文生图、图像编辑、多图融合整合至单一模型。其最突破性的能力是 `color_palette` API参数，可输入3-10种精确HEX色值及比例，确保生成图像严格遵循品牌配色方案。这一特性使其成为 [[brand-color-control-aigc]] 概念的标杆实现。

## Key Contributions

- **统一架构**：文生图+图像编辑+多图融合一体化
- **`color_palette` API**：输入精确HEX色值+比例，控制生成图色彩
- **骨骼级人脸定制**：眼型/脸型/骨相级别调控，告别"AI标准脸"
- **多语言文字渲染**：12种语言、3000+ tokens，解决AI文字乱码
- **像素级交互编辑**：选框局部修改且保持整体一致性
- **多图组合生成**：最多9张参考图→12张序列输出

## Timeline

| Date | Event |
|------|-------|
| 2026-04-01 | Wan2.7-Image 正式发布 |
| 2026-04-03 | CometAPI 发布详细评测 |

## CODM Relevance Score

**9.1/10** — 日报评分第2名（并列）。精准品牌色控制+骨骼级人脸定制对CODM宣发设计价值极高。

## Related

- [[brand-color-control-aigc]]
- [[character-consistency-aigc]]
- [[photoreal-game-art]]
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260409.md]]
- https://www.cometapi.com/alibaba-wan2-7-image-review-2026-revolutionary-unified-ai-image-model/
