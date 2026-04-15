---
title: "Sora 2"
type: entity
created: "2026-04-12"
updated: "2026-04-12"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
tags:
  - tool
  - ai-video
  - openai
  - physics-simulation
  - camera-control
aliases:
  - "Sora 2 Pro"
  - "OpenAI Sora 2"
---

# Sora 2

> OpenAI第二代视频生成模型，物理模拟最强+20秒时长+专业摄影机控制，但面临4月26日关停。

## Info

| Field | Value |
|-------|-------|
| Type | tool / AI video platform |
| Domain | AI视频生成 |
| Developer | OpenAI |
| Launch | 2025-10-01 |
| Shutdown | APP 2026-04-26 / API 2026-09-24 |
| Status | ⚠️ 关停倒计时中 |

## Overview

Sora 2 是 OpenAI 的第二代视频生成模型，因日运营成本$1500万于2026年3月25日宣布关停。APP端将于4月26日停服，API延续至9月24日。

尽管面临关停，Sora 2 Pro 在2026年4月初发布了重大更新：
- **20秒时长**：Pro版单片段从10-15秒提升至20秒
- **多片段连续性**：跨生成视觉记忆层，保持角色/场景/光照连续
- **原生音频合成**：环境音与画面物理同步（雨声密度=画面雨量）
- **7种摄影机预设**：推/拉/摇/环绕/升降/手持/静态锁定+运动组合
- **1080p默认**：从720p升级，支持24/30/60fps帧率选择

在物理模拟（流体/刚性碰撞/粒子效果）方面业界最强。

## Key Contributions

- 业界最强物理模拟（流体、碰撞、粒子效果）
- 20秒Pro版时长（最长单片段）
- 多片段跨生成视觉记忆（角色连续性）
- 7种专业摄影机预设+运动组合
- 1080p默认@24/30/60fps
- 原生环境音频合成（与画面物理同步）

## Timeline

| Date | Event |
|------|-------|
| 2025-10-01 | Sora 2 发布 |
| 2026-03-25 | 宣布关停（日运营$1500万） |
| 2026-04-02 | Pro版重大更新（20秒+音频+摄影机控制） |
| 2026-04-26 | ⚠️ APP端关停 |
| 2026-09-24 | ⚠️ API端关停 |

## CODM Application

- 物理模拟最强：爆炸/碎片/烟雾等军事场景最真实
- 多片段连续性可生成角色连贯战斗片段
- ⚠️ **关停风险**：APP 4月26日关停，API 9月24日关停，不建议新增依赖
- Disney终止$1.5亿合作的教训：任何单一平台都有风险

## Related

- [[ai-video-landscape-2026]] — Sora关停后市场格局
- [[ai-video-production-strategy]] — 三层架构替代方案
- [[runway-gen4]] — 第一梯队替代选择
- [[kling-3]] — 铺量级替代选择
- [[happyhorse-1]] — 自部署替代选择
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
- https://blog.picassoia.com/sora-2-just-added-features-nobody-expected
- https://www.w3resource.com/ai/sora-ai-by-openai-rise-evolution-and-sudden-shutdown.php
