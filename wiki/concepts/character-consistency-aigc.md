---
title: "Character Consistency in AIGC"
type: concept
created: "2026-04-10"
updated: "2026-04-12"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260409.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
tags:
  - character-design
  - aigc
  - consistency
  - game-art
  - face-lock
aliases:
  - "AIGC角色一致性"
  - "角色外观一致性"
  - "Character Identity Preservation"
---

# Character Consistency in AIGC

> 确保同一角色在AI生成的不同图像/视频场景中保持外观一致的技术集合。2026年从"圣杯难题"变为"标配能力"。

## Definition

Character Consistency in AIGC 指在使用AI生成多张图像或多段视频时，确保同一角色（人物、生物、IP形象等）在不同构图、场景、光照条件下保持面容、服装、体型、标志特征等外观要素一致的能力。这是游戏宣发中最关键的AI能力之一——角色是品牌资产的核心。

## Core Content

### 2026年各工具角色一致性能力对比

| 工具 | 技术路径 | 一致性等级 | 适用场景 |
|------|----------|-----------|----------|
| [[reallusion-ai-studio]] | 3D模型锚定+AI渲染 | ⭐⭐⭐⭐⭐ | 最高精度，需3D模型 |
| [[runway-gen4]] | 跨场景角色跟踪 | ⭐⭐⭐⭐ | 视频级一致性最佳 |
| [[midjourney-v7]] | Omni-Reference+Style Reference | ⭐⭐⭐⭐ | 图像级风格锁定 |
| [[wan27-image]] | 骨骼级人脸定制 | ⭐⭐⭐⭐ | 精确面部控制 |
| [[seedance-2]] | Face-Lock面部特征锁定 | ⭐⭐⭐⭐ | 视频级面部保持（新增） |
| [[kling-3]] | 多镜头角色保持 | ⭐⭐⭐⭐ | 6镜头连贯一致（新增） |
| [[sora-2]] | 多镜头物理连贯 | ⭐⭐⭐⭐ | 20s长视频角色保持（04.12新增）|
| [[leonardo-ai]] | ControlNet+Elements | ⭐⭐⭐ | 姿态控制强 |

### 四种技术路径（2026-04-11 更新，从三种扩展为四种）

1. **3D锚定法**（最可控）：用3D模型确保几何一致 → AI渲染增强视觉品质
2. **参考图驱动**（最灵活）：上传角色参考图 → AI在新场景中保持外观（Midjourney Omni-Reference / Runway Gen-4）
3. **Face-Lock技术**（新路径）：面部特征锁定 → 跨镜头面部一致（[[seedance-2]] / [[kling-3]]）
4. **模型微调法**（最深度）：用角色资产训练自定义LoRA → 从根源学习角色特征（ComfyUI / [[leonardo-ai]]）

### 从"圣杯"到"标配"（2026-04-11 新增）

2026年4月，角色一致性问题在多个层面被大幅解决，从"AI生成的圣杯难题"变成了"可选择多种成熟方案"的标配能力。这一转变意味着可以构建**"一次设定、全链路复用"**的角色资产管线：

- 每个角色一套标准参考图 + Face-Lock配置 + LoRA权重
- 作为所有AI生成（图像/视频/多平台素材）的统一输入
- 跨工具（MJ→Runway→Kling）保持一致外观

## Key Points

- [[reallusion-ai-studio]] 的 AI Actor Creator 通过3D模型锚定实现最高一致性
- [[midjourney-v7]] 的 Omni-Reference + Style Reference 可锁定角色风格DNA
- [[wan27-image]] 的骨骼级人脸定制解决了"AI标准脸"问题
- [[adobe-firefly]] 自定义模型可从品牌资产库学习角色视觉DNA
- [[seedance-2]] Face-Lock 和 [[kling-3]] 多镜头保持是新增的视频级方案
- 对CODM：角色一致性已从"能不能做"变成"怎么标准化管理"
- **（04.12新增）** [[sora-2|Sora 2 Pro]] 20秒长视频+物理模拟+镜头控制提供了新的多镜头角色连贯路径，但平台即将关停
- **（04.12新增）** [[kling-3|Kling 3.0]] 统一架构下的多镜头叙事功能强化了角色跨场景一致性的"一站式"实现

## Related

- [[codm-visual-guide]]
- [[game-version-visual-guide]]

- [[reallusion-ai-studio]]
- [[hybrid-3d-ai-rendering]]
- [[midjourney-v7]]
- [[wan27-image]]
- [[seedance-2]]
- [[kling-3]]
- [[sora-2]]
- [[ai-video-production-strategy]]
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260409.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
