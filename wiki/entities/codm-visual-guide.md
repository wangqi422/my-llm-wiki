---
title: "CODM Visual Guide（版本视觉指引）"
type: entity
created: "2026-04-13"
updated: "2026-04-13"
sources:
  - "[[raw/work-docs/codm-version-visual-guides-index.md]]"
tags:
  - codm
  - visual-guide
  - design-spec
  - production-pipeline
aliases:
  - CODM GUIDE
  - 版本视觉指引
  - CODM版本规范
---

# CODM Visual Guide（版本视觉指引）

> 使命召唤手游每个赛季的核心视觉规范文档，定义该赛季所有宣发物料的视觉风格、配色、构图等设计标准。

## Overview

CODM Visual Guide（版本视觉指引）是 CODM 宣发设计团队在每个赛季初期制定的**核心规范文档**。它为该赛季所有宣发设计物料（KV海报、社媒素材、运营Banner、视频包装等）提供统一的视觉方向和设计规范。

## Timeline

| 时间 | 事件 |
|------|------|
| S27.1 | 最早可追溯的版本规范，存储于 ArtHub |
| S28.2 | 首次出现 IP 联动专属视觉指引（白夜极光） |
| S29.1 | 5周年庆版本，特殊周年庆视觉规范 |
| S32.1-S32.2 | IP联动高峰期（尼尔 + 高达），出现"图形补充"子文档 |
| S35.1-S35.2 | 主题化加深（DMZ模式 + 冰汽时代联动 + 街霸联动） |
| S36.1 | 新年版本视觉指引 |
| S36.2 | 克苏鲁主题版本——最新版本，同时有 ArtHub 和企微文档版本 |

## 版本覆盖

- **总计**：~25 份视觉指引文档
- **时间跨度**：S27.1 – S36.2（约 2 年）
- **通用版本规范**：16 份
- **IP 联动指引**：6 份（白夜极光、莉可丽丝、尼尔、高达、街霸、冰汽时代）
- **特殊主题**：3 份（5周年庆、DMZ、新年、克苏鲁）

## 文档结构（典型内容）

基于历史经验，一份典型的 CODM Visual Guide 通常包含：

1. **赛季主题概述** — 本赛季的叙事主题和情感基调
2. **配色规范** — 主色、辅色、渐变、禁用色
3. **字体规范** — 标题字体、正文字体、特殊装饰字体
4. **构图模版** — KV 海报、Banner、社媒素材等标准构图
5. **视觉元素库** — 该赛季专属图形元素、纹理、图标
6. **角色形象规范** — 赛季主角的视觉处理标准
7. **IP 联动规范**（如适用） — 合作方品牌使用规范、联合LOGO规则
8. **动态/视频规范** — 转场、特效、动画风格

## IP 联动视觉指引特征

| 联动IP | 赛季 | 视觉特征（推测） |
|--------|------|------------------|
| 白夜极光 | S28.2 | 二次元+军事混合风格 |
| 莉可丽丝 | S31.1 | 动漫风格融合 |
| 尼尔：自动人形 | S32.1 | 末世机械美学+白色基调 |
| 高达 | S32.2 | 机甲+高饱和度热血风格 |
| 街头霸王 | S35.1 | 格斗游戏视觉+手绘风格 |
| 冰汽时代 | S35.2 | 蒸汽朋克+冰雪末世 |

## AIGC 应用价值

CODM 视觉指引对 [[codm-aigc-workflow]] 有重要价值：

1. **品牌色提取**：每版 GUIDE 的配色规范可直接转化为 [[brand-color-control-aigc|AI 品牌色控制]] 参数（如 [[wan27-image]] 的 `color_palette`）
2. **风格 Prompt 模版**：视觉指引中的风格关键词可转化为 AI 生成的标准 Prompt 模版
3. **LoRA 训练素材**：历代 GUIDE 中的视觉稿是训练 CODM 风格 LoRA 的优质素材
4. **一致性基准**：IP 联动指引定义了"如何将外部 IP 融入 CODM 军事世界观"的方法论，可指导 [[character-consistency-aigc|角色一致性]] 的 AI 实现
5. **版本演变分析**：25 份 GUIDE 的时间序列可分析 CODM 视觉风格的演变趋势，为 AI 风格预测提供训练数据

## 存储与访问

| 平台 | 用途 | URL 模式 |
|------|------|----------|
| ArtHub (外网) | `arthub.qq.com/j3_uxdc/pan` | 早期版本存储 |
| ArtHub (内网) | `arthub.woa.com/codm/pan` | 部分版本存储 |
| ArtHub (外网) | `arthub.qq.com/codm/pan` | 近期版本存储 |
| 企微文档 | `doc.weixin.qq.com/slide/` | 幻灯片版本（如 S36.2） |

## Related

- [[codm-aigc-workflow]]
- [[brand-color-control-aigc]]
- [[character-consistency-aigc]]
- [[brand-custom-ai-model]]
- [[photoreal-game-art]]
- [[aaa-game-aigc-adoption]]
- [[game-version-visual-guide]]

## Sources

- [[raw/work-docs/codm-version-visual-guides-index.md]]
