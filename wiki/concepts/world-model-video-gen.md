---
title: "World Model Video Generation"
type: concept
created: "2026-04-11"
updated: "2026-04-11"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
tags:
  - ai-video
  - world-model
  - physics-simulation
  - runway
aliases:
  - "世界模型视频生成"
  - "GWM"
  - "General World Model"
---

# World Model Video Generation

> 通过理解物理世界运作规则来生成更真实视频的新范式，以Runway Gen-4.5为代表。

## Definition

World Model Video Generation 指AI视频生成模型不仅学习视觉外观，还理解并模拟物理世界的运作规则（重力、流体、碰撞等），从而生成物理上合理的视频内容。[[runway-gen4]] Gen-4.5是首个自称"通用世界模型"(GWM)的AI视频产品。

## Core Content

### 传统AI视频 vs 世界模型AI视频

| 维度 | 传统方法 | 世界模型方法 |
|------|---------|-------------|
| 学习目标 | 视觉外观分布 | 物理规律+视觉外观 |
| 物理真实性 | 偶尔正确 | 系统性正确 |
| 复杂交互 | 经常穿模/穿透 | 合理碰撞/反弹 |
| 爆炸/烟雾 | 模式化/不真实 | 符合流体动力学 |
| 代表模型 | 大多数扩散模型 | Runway Gen-4.5 GWM |

### 对游戏CG制作的意义

对FPS游戏如CODM，物理真实感至关重要：
- 爆炸碎片的飞溅轨迹需符合物理
- 烟雾扩散需遵循流体动力学
- 角色运动/载具动力学需自然
- 枪口火焰/弹壳抛射需真实

## Key Points

- Runway Gen-4.5 GWM在独立基准测试中排名第一（超越Sora 2）
- 世界模型让战斗CG的物理特效（爆炸/碎片/烟雾）更加真实可信
- 配合Multi-shot Editing实现影片级叙事连贯性

## Last Seen In

- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]] (2026-04-11)

## CODM Application

- 用世界模型生成的战斗CG作为宣传片核心素材（物理真实感达标）
- Multi-shot Editing串联"角色登场→战斗→LOGO收尾"完整预告片
- Act-Two动捕工具设计角色宣传动作

## Related

- [[runway-gen4]]
- [[multi-shot-ai-video]]
- [[ai-video-production-strategy]]
- [[character-consistency-aigc]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
