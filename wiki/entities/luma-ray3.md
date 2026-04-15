---
title: "Luma Ray3"
type: entity
created: "2026-04-13"
updated: "2026-04-13"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260413.md]]"
tags:
  - ai-video
  - reasoning-model
  - hdr
  - exr
  - film-pipeline
  - luma-ai
aliases:
  - Ray3
  - Luma Ray 3
  - Ray 3
---

# Luma Ray3

> 全球首个"推理视频模型"，原生16位HDR/EXR输出，将AI视频接入专业影视后期管线

## Info

| Field | Value |
|-------|-------|
| Type | tool / AI video model |
| Developer | Luma AI |
| Domain | AI视频生成 / 影视后期 |
| Website | https://ray-3.com/ |
| Release | 2026-04-08 |

## Overview

Luma Ray3是Luma AI推出的新一代AI视频模型，核心突破在于两点：

1. **推理视频**（Reasoning Video）：内置多模态推理系统，生成前先"思考"场景物理、光影逻辑、运动轨迹，然后再渲染输出。这种"先推理后生成"的范式显著提升了物理真实性和场景连贯性。

2. **原生HDR/EXR输出**：全球首个支持真正10/12/16位HDR ACES2065-1 EXR格式输出的AI视频模型，可直接接入DaVinci Resolve/Nuke等专业调色合成软件，无色域/位深损失。

## Key Contributions

- 首创"推理视频"概念——AI生成前先思考物理规律和视觉逻辑
- 打破AI视频与专业影视后期之间的格式壁垒（16位EXR）
- 支持4K HDR最终输出 + Draft Mode快速迭代
- 已集成Adobe Firefly生态
- 物理真实性在六模型基准测试中领先

## CODM Application

- **CG预告片**：16位EXR输出直接接入CODM赛季CG预告片的调色合成管线
- **Draft Mode**：概念验证阶段快速生成多版本草稿
- **军事场景**：推理视频对爆炸、车辆运动等高难度物理效果的表现优于传统扩散模型
- **定位**：AI视频四梯队中的"专业影视级"选项

## Timeline

| Date | Event |
|------|-------|
| 2026-04-08 | Ray3正式发布，全球首个推理视频模型 |
| 2026-04-13 | 六模型基准测试中物理真实性和HDR色彩领先 |

## Related

- [[ai-video-landscape-2026]] — Ray3定义新的"专业影视级"梯队
- [[runway-gen4]] — Runway在创意控制上仍领先，但HDR不及Ray3
- [[happyhorse-1]] — 开源替代，ELO更高但无HDR输出
- [[ai-video-landscape-2026|统一架构]] — Ray3走专精路线vs Kling统一架构路线
- [[hybrid-3d-ai-rendering]] — Ray3 + 3D预可视化构成新的混合管线选项
- [[codm-aigc-workflow]] — CODM宣发CG预告片管线的新选项

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
