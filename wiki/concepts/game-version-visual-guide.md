---
title: "Game Version Visual Guide（版本视觉指引）"
type: concept
created: "2026-04-13"
updated: "2026-04-13"
sources:
  - "[[raw/work-docs/codm-version-visual-guides-index.md]]"
tags:
  - design-methodology
  - visual-guide
  - brand-consistency
  - game-production
aliases:
  - 版本视觉指引
  - Visual Guide
  - 赛季视觉规范
  - Season Style Guide
---

# Game Version Visual Guide（版本视觉指引）

> 长线运营游戏在每个赛季/版本初期制定的视觉规范文档，是所有宣发物料的设计基准和品牌一致性保障。

## Definition

版本视觉指引（Visual Guide）是长线运营游戏（Live Service Game）的核心设计规范文档。它在每个赛季/版本更新时由美术团队制定，为该赛季所有视觉产出（海报、Banner、社媒素材、视频包装、UI等）提供统一的设计方向和规范约束。

## 核心要素

一份完整的版本视觉指引通常包含：

| 要素 | 内容 | 作用 |
|------|------|------|
| **主题叙事** | 赛季故事线、情感基调 | 统一创意方向 |
| **配色系统** | 主色/辅色/渐变/禁色 | 视觉统一性 |
| **字体系统** | 标题/正文/装饰字体 | 排版一致性 |
| **构图模版** | KV/Banner/社媒标准构图 | 产出效率 |
| **视觉元素库** | 纹理/图标/图形元素 | 设计素材复用 |
| **角色规范** | 主角视觉处理标准 | 角色一致性 |
| **动态规范** | 转场/特效/动画风格 | 视频一致性 |
| **IP联动规范** | 合作方品牌使用规则 | 法务+品牌合规 |

## 版本视觉指引的两种模式

### 模式 A：通用版本规范
- 每个赛季标配
- 定义该赛季的视觉风格基线
- 如 CODM 的 S27.1-S34.2 系列

### 模式 B：IP 联动规范
- 与外部 IP 合作时额外制定
- 需平衡游戏品牌 DNA 与合作方视觉要求
- 如 CODM × 白夜极光、CODM × 尼尔、CODM × 高达
- 通常与通用版本规范并行存在

## AIGC 时代的变革

版本视觉指引在 AIGC 时代获得了新的战略价值：

### 从"人读规范"到"机器可执行规范"

传统流程：
```
GUIDE（PDF/PPT）→ 设计师阅读理解 → 手工执行
```

AIGC 流程：
```
GUIDE → 提取参数化规范 → AI 配置
├── 配色 → color_palette 参数（如 [[wan27-image]]）
├── 风格 → Style Prompt 模版
├── 角色 → Face-Lock / LoRA 配置
├── 构图 → ControlNet 参考图
└── 品牌元素 → 自定义模型训练素材（如 [[adobe-firefly]]）
```

### 关键转变

1. **参数化**：视觉规范从"指导性文档"变为"可执行配置"
2. **可复用**：一份 GUIDE 的参数可同时驱动多个 AI 工具
3. **可验证**：AI 生成物可自动对照 GUIDE 参数进行合规检查
4. **可追溯**：每个赛季的 GUIDE 参数变化可量化分析风格演变

## 行业趋势

- **标准化程度提升**：从自由格式 PPT 向结构化模版演进
- **IP 联动常态化**：FPS 品类几乎每个版本都有 IP 联动，对应的视觉指引成为标配
- **数字化交付**：从 ArtHub 文件分享向在线协作文档（企微文档）迁移
- **AI-Ready 规范**：未来的 GUIDE 可能直接包含 AI 工具配置参数

## Related

- [[codm-visual-guide]] — CODM 的版本视觉指引实体
- [[codm-aigc-workflow]] — CODM AIGC 全链路工作流
- [[brand-color-control-aigc]] — AI 品牌色控制
- [[brand-custom-ai-model]] — 品牌自定义 AI 模型
- [[character-consistency-aigc]] — 角色一致性
- [[photoreal-game-art]] — 照片级写实游戏美术

## Sources

- [[raw/work-docs/codm-version-visual-guides-index.md]]
