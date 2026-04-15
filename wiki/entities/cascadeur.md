---
title: "Cascadeur"
type: entity
created: "2026-04-13"
updated: "2026-04-13"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260413.md]]"
tags:
  - 3d-animation
  - ai-motion
  - unreal-engine
  - game-art
  - root-motion
aliases:
  - Cascadeur 2026.1
  - Nekki Cascadeur
---

# Cascadeur

> AI驱动的物理基础角色动画工具，2026.1版本实现UE5 Live Link实时同步 + AI Root Motion生成

## Info

| Field | Value |
|-------|-------|
| Type | tool / 3D animation DCC |
| Developer | Nekki |
| Domain | 3D角色动画 / 游戏开发 |
| Website | https://cascadeur.com/ |
| Latest | 2026.1 (2026-04-09) |
| Funding | Epic MegaGrant |

## Overview

Cascadeur是一款基于物理的AI辅助角色动画工具。2026.1版本三大突破：

1. **AI Root Motion**：新增AI驱动的根运动生成系统——自动计算角色位移轨迹，关键帧间智能补间。传统流程中Root Motion需要动画师手动调校，现在一键生成。

2. **Unreal Engine Live Link（重建版）**：由Epic MegaGrant资助重建，支持实时动画流式传输到UE5——在Cascadeur中调整时直接在UE5中预览timing、摄像机和光影效果。反馈循环从"导出→导入→查看→返回修改"变成实时同步。

3. **Filament渲染引擎**：全面切换Google Filament渲染器，支持PBR材质+IBL预览，DCC内直接查看接近最终品质的渲染效果。

## Key Contributions

- AI Root Motion：首个将AI应用于根运动生成的DCC工具
- UE Live Link重建：DCC到引擎的实时动画预览
- Filament渲染：PBR+IBL让动画师在DCC中看到接近最终品质的效果
- 碰撞穿透检测：自动检测角色动画中的穿模问题

## CODM Application

- **角色展示动画**：赛季新角色的展示动画（旋转/武器检视/idle）用AI Root Motion加速制作
- **赛季过场**：CG过场动画在Cascadeur制作时通过Live Link直接在UE5中预览效果
- **动画预审**：反馈周期从小时级压缩到秒级，适配CODM快节奏的赛季更新周期
- **与[[reallusion-ai-studio]]互补**：Reallusion侧重3D+AI混合渲染，Cascadeur侧重AI动画制作

## Timeline

| Date | Event |
|------|-------|
| 2026-04-09 | Cascadeur 2026.1发布：AI Root Motion + UE Live Link + Filament |

## Related

- [[reallusion-ai-studio]] — 互补关系：Reallusion=渲染管线，Cascadeur=动画管线
- [[hybrid-3d-ai-rendering]] — AI动画 + AI渲染构成完整的3D+AI管线
- [[nvidia-dlss-5]] — DLSS 5在引擎内，Cascadeur在DCC端，协同优化
- [[codm-aigc-workflow]] — CODM角色动画管线新工具

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
