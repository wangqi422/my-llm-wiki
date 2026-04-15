---
title: "Wan2.7-Video"
type: entity
created: "2026-04-14"
updated: "2026-04-14"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260414.md]]"
tags:
  - tool
  - ai-video
  - alibaba
  - video-editing
  - director-level-control
aliases:
  - "Wan 2.7 Video"
  - "通义万相2.7视频"
  - "阿里Wan2.7-Video"
---

# Wan2.7-Video

> 阿里"导演级"AI视频生成+编辑模型，DesignArena Video-to-Video登顶，全模态输入让视频像文档一样可编辑。

## Info

| Field | Value |
|-------|-------|
| Type | tool / AI video generation+editing model |
| Domain | AI视频生成与编辑 |
| Developer | 阿里云通义实验室 |
| Website | https://tongyi.aliyun.com/wan |
| Launch | 2026-04-03 |
| Arena Ranking | DesignArena Video-to-Video #1 |
| Input Modality | 文本+图像+视频+音频 |

## Overview

Wan2.7-Video是[[wan27-image]]的视频姊妹模型，于2026年4月3日发布，4月10日在DesignArena Video-to-Video排行榜登顶。核心理念是"能导擅演"——不仅能生成视频，更能像导演一样精细控制和编辑已有视频。支持文本/图像/视频/音频全模态输入，让视频像文档一样可编辑。

与[[kling-3]]的统一架构（生成+编辑+音频一体化）不同，Wan2.7-Video在"编辑精度"上更进一步：支持台词+口型自动匹配、拍摄方法修改（机位/视角/景别/焦距）、多角色一致性（5主体参考+专属音色）。

## Key Contributions

- **元素增删替换**：一句话增删物体（"删掉火车""把胶片换成盘子"）
- **台词+口型匹配**：改台词自动匹配情绪、口型和音色统一
- **拍摄方法修改**：调整机位/视角/景别/焦距（"镜头从地面上升"）
- **环境+风格变换**：保持人物动作不变，改背景季节/一键风格转换
- **多角色一致性**：支持5个主体参考+专属音色+多镜头特征一致
- **DesignArena V2V #1**：国产视频模型首次在精细可控编辑维度超越海外竞品

## Timeline

| Date | Event |
|------|-------|
| 2026-04-01 | Wan2.7-Image 发布 |
| 2026-04-03 | Wan2.7-Video 正式发布 |
| 2026-04-10 | DesignArena Video-to-Video 登顶 |

## CODM Application

- **宣传片后期革命**：拍完后用自然语言微调镜头/氛围/季节
- **多语言一键适配**：改台词+自动口型匹配+音色统一，全球化宣发效率倍增
- **风格快速转换**：同一段素材一键转为不同风格，社媒多风格分发
- **精准元素控制**：CODM军事场景增删武器/载具/特效，无需重新渲染

## Related

- [[wan27-image]] — 同系列图像模型
- [[kling-3]] — 统一架构竞品
- [[ai-video-landscape-2026]]
- [[ai-video-production-strategy]]
- [[character-consistency-aigc]]
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260414.md]]
- https://tongyi.aliyun.com/wan
- https://www.ithome.com/0/935/731.htm
