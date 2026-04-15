---
title: "LTX 2.3"
type: entity
created: "2026-04-13"
updated: "2026-04-13"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260413.md]]"
tags:
  - tool
  - ai-video
  - open-source
  - audio-sync
  - lightricks
aliases:
  - "LTX-2.3"
  - "LTX Video 2.3"
  - "Lightricks LTX"
---

# LTX 2.3

> Lightricks开源4K音视频联合生成模型，220亿参数DiT架构，单次前向传递同步生成视频+音频，零授权费。

## Info

| Field | Value |
|-------|-------|
| Type | tool / open-source AI video model |
| Domain | AI视频生成 |
| Developer | Lightricks |
| GitHub | https://github.com/Lightricks/LTX-Video |
| Launch | 2026-03 |
| Parameters | 220亿 |
| License | 开源 / 零授权费 |
| Max Resolution | 4K |

## Overview

LTX 2.3 是 Lightricks 发布的开源音视频联合生成模型，基于DiT（Diffusion Transformer）架构，包含220亿参数。核心创新是在**单次前向传递**中同步生成视频和音频，实现真正的音视频一体化。

支持文本到视频、图像到视频、原生竖屏9:16、24/48 FPS选项、关键帧插值和last-frame插值。4K分辨率输出，完全开源且零授权许可费。

ComfyUI/WebUI社区插件已就绪，是[[happyhorse-1]]之外的第二个4K级开源视频选项，且许可状态比HappyHorse V2（仍为泄露状态）更为清晰。

## Key Contributions

- 首个DiT架构开源音视频联合生成模型
- 220亿参数，单次前向传递同步音视频
- 4K分辨率输出
- 原生竖屏9:16支持
- 24/48 FPS双速率
- 完全开源+零授权费（可自部署）
- ComfyUI/WebUI插件生态就绪

## Timeline

| Date | Event |
|------|-------|
| 2026-03 | LTX 2.3正式发布 |
| 2026-04 | 社区生态快速成长，ComfyUI/WebUI插件成熟 |

## CODM Application

- **内网自部署**：军事题材素材在完全隔离环境中生成，零数据泄露风险
- **竖屏原生**：9:16直出抖音/TikTok/Reels格式
- **音视频一体**：社媒短视频连背景音乐一次生成
- **成本优势**：零API费用+自有GPU，大规模铺量边际成本趋近零
- ⚠️ **对比**：许可比[[happyhorse-1|HappyHorse V2]]清晰，但社区活跃度和Arena排名低于HappyHorse

## Related

- [[ai-video-landscape-2026]] — 所属概念
- [[happyhorse-1]] — 主要竞品（开源视频）
- [[ai-video-production-strategy]] — 三层架构自部署层选项
- [[ai-video-landscape-2026|统一架构]] — 架构对比
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
- https://github.com/Lightricks/LTX-Video
- https://studio.aifilms.ai/blog/ltx-2-3-open-source-model
