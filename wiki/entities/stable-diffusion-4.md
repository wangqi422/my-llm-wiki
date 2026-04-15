---
title: "Stable Diffusion 4"
type: entity
created: "2026-04-12"
updated: "2026-04-12"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
tags:
  - tool
  - ai-image
  - ai-video
  - open-source
  - controlnet
  - self-hosted
aliases:
  - "SD4"
  - "Stable Diffusion 4"
  - "ControlNet 2.0"
---

# Stable Diffusion 4

> 首个统一图像+视频的开源模型，内置ControlNet 2.0精确控制，消费级GPU（12GB）即可运行。

## Info

| Field | Value |
|-------|-------|
| Type | tool / open-source AI image+video model |
| Domain | AI图像+视频生成 |
| Developer | Stability AI |
| Architecture | DiT (Diffusion Transformer) |
| Launch | 2026-03-03 |
| License | 开源 |
| Min VRAM | 12GB (基础) / 8GB (量化版) |

## Overview

Stable Diffusion 4 是 Stability AI 的里程碑式发布，首次在单一开源模型中统一图像和视频（30秒/720p）生成能力。采用全新 DiT（Diffusion Transformer）架构替代传统 U-Net，扩展效率大幅提升。同步发布 ControlNet 2.0，提供构图/深度/姿势/风格的精确控制。

关键特性：
- **图像质量**：匹配 [[midjourney-v7]] 水平的照片级真实感
- **视频能力**：30秒/720p连贯视频，保持时间一致性和角色身份稳定
- **消费级GPU**：基础版12GB（RTX 4070），量化版8GB即可运行
- **ControlNet 2.0**：构图/深度/姿势/风格精确控制

## Key Contributions

- 首个开源统一图像+视频模型
- DiT架构替代U-Net，扩展效率提升
- ControlNet 2.0同步发布（构图/深度/姿势/风格控制）
- 消费级GPU门槛（12GB基础/8GB量化）
- 视频时间一致性和跨帧角色稳定

## Timeline

| Date | Event |
|------|-------|
| 2026-03-03 | SD4 正式发布 |
| 2026-03-03 | ControlNet 2.0 同步发布 |

## CODM Application

- ControlNet 2.0的深度图+姿势控制可精确还原CODM角色海报构图
- 本地化部署确保未发布角色/版本信息完全保密（比 [[happyhorse-1]] 显存门槛更低）
- 30秒720p视频能力适合生成社媒短素材原型
- 与 [[happyhorse-1]] 形成自部署方案的图像+视频互补
- ⚠️ **限制**：视频仅720p（vs [[kling-3]] 4K）；30秒时长有限；画质仍落后最新闭源模型

## Related

- [[ai-video-landscape-2026]] — 开源AI视频/图像生态
- [[happyhorse-1]] — 开源视频竞品（更高画质但更高显存需求）
- [[ai-video-production-strategy]] — 三层架构的自部署层补充
- [[midjourney-v7]] — 画质对标参考
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
- https://www.bestaitoolswiki.com/news/stability-ai-stable-diffusion-4-release
