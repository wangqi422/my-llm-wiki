---
title: "Seedance 2.0"
type: entity
created: "2026-04-11"
updated: "2026-04-11"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
tags:
  - tool
  - ai-video
  - bytedance
  - multimodal
  - lip-sync
aliases:
  - "Seedance"
  - "即梦"
  - "ByteDance Seedance"
---

# Seedance 2.0

> 字节跳动统一多模态音视频联合生成平台，支持四模态输入，2K分辨率，API公开Beta。

## Info

| Field | Value |
|-------|-------|
| Type | tool / AI video platform |
| Domain | AI视频生成 |
| Developer | 字节跳动 Seed Team |
| Website | https://seed.bytedance.com/zh/seedance2_0 |
| API Beta | 2026-04-02 公开 |
| Pricing | 免费 / $8/月 |

## Overview

Seedance 2.0 采用统一的多模态音视频联合生成架构，是业界首个支持文字/图片/音频/视频四种模态同时输入的视频生成模型。核心差异化在于"多模态组合输入"——可以同时给定参考图+配音音频+背景视频+文字指令来生成视频。

在 Sora 关停后的三梯队格局中位于第二梯队，定位"动作与舞蹈专家"——特别擅长音乐同步生成、舞蹈编排和 TikTok/抖音原生导出。

### 核心能力

- **四模态输入**：文字 + 图片 + 音频 + 视频同时作为条件
- **Director Mode**：导演模式精细控制镜头运动和构图
- **Face-Lock**：角色面部特征锁定，确保跨镜头一致性
- **原生口型同步**：5种语言音频口型对齐
- **原生2K分辨率**：生产级画质输出
- **多镜头叙事**：连贯分镜故事生成

## Key Contributions

- 首个四模态（文/图/音/视）统一输入的视频生成模型
- Face-Lock 技术确保角色跨镜头外观一致
- Director Mode 精细控制满足品牌级创意需求
- API 公开 Beta 可集成到自动化生产管线
- 音乐同步和舞蹈编排行业领先

## Timeline

| Date | Event |
|------|-------|
| 2025 | Seedance 1.0 发布，获行业关注 |
| 2026-03 | Seedance 2.0 发布，四模态统一架构 |
| 2026-04-02 | API 公开 Beta |

## CODM Application Scenarios

- **角色宣传视频**：Face-Lock 锁定角色面部 + 参考图输入 → 生成角色介绍短片
- **多素材组合**：海报(图) + 配音(音) + 背景(视频) + 文案(文) → 完整宣发短片
- **多语言版本**：5语言口型同步辅助全球化宣发
- **社媒短视频**：TikTok/抖音原生导出，音乐同步生成

## Related

- [[kling-3]]
- [[runway-gen4]]
- [[google-veo-3]]
- [[character-consistency-aigc]]
- [[ai-video-landscape-2026]]
- [[multi-shot-ai-video]]
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
- https://seed.bytedance.com/zh/seedance2_0
- https://theplanettools.ai/tools/seedance-2
