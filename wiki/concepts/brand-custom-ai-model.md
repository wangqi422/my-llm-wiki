---
title: "Brand Custom AI Model"
type: concept
created: "2026-04-10"
updated: "2026-04-11"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260409.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
tags:
  - brand-consistency
  - model-training
  - aigc
  - adobe
  - stability-ai
  - qwen
aliases:
  - "品牌自定义AI模型"
  - "Custom Model Training"
  - "品牌模型训练"
---

# Brand Custom AI Model

> 用品牌视觉资产训练专属AI模型，从根源确保所有AI生成内容继承品牌视觉DNA。

## Definition

Brand Custom AI Model 指用企业/品牌的专有视觉资产（KV、角色立绘、UI素材等）对基础AI模型进行微调训练，使其生成的所有内容自动继承品牌的视觉风格、色彩体系、构图习惯等"品牌DNA"。这是品牌级AI创意生产的基础设施。

## Core Content

### 2026年可用平台
- [[adobe-firefly]] Custom Models（公测中）：上传自有图像资产训练专属模型
- [[leonardo-ai]] Custom Models：Maestro计划支持自定义模型训练
- [[midjourney-v7]] Personalization：学习用户偏好的美学风格

### 训练工作流
```
品牌资产库整理（50-100张核心KV+角色立绘）
    ↓
上传至训练平台（Adobe Firefly / Leonardo）
    ↓
模型微调训练（学习品牌视觉DNA）
    ↓
验证测试（品牌一致性+多样性平衡）
    ↓
部署生产（团队共享使用）
```

## Key Points

- [[adobe-firefly]] 集成30+顶级模型，成为唯一支持"A模型生成→B模型优化→Adobe工具精修"的平台
- Project Moonlight 对话式AI创意代理标志着从"提示词驱动"到"对话式协作"的转变
- 品牌模型训练是一次性投入、长期受益的基础设施建设

## Three-Way Competition (2026-04-11 新增)

> 品牌定制AI赛道在2026年4月爆发，形成三方竞争格局：

| 平台 | 路线 | 优势 | 劣势 |
|------|------|------|------|
| [[adobe-firefly]] Custom Models | 平台集成 | PS/AE原生整合，设计师无感切换 | 平台锁定，数据出外网 |
| [[stability-brand-studio]] | 企业平台 | 智能模型路由，Producer Mode自动化 | 新平台，生态待验证 |
| [[qwen-image-trainer]] | 开放API | 自托管部署，中文原生，数据不出网 | 需要技术团队运维 |

### 选择建议
- 重视**工具链整合**（设计师体验）→ [[adobe-firefly]]
- 重视**自动化生产**（减少人工）→ [[stability-brand-studio]]
- 重视**数据安全+中文**（品牌资产保护）→ [[qwen-image-trainer]]

## Last Seen In

- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]] (2026-04-11)
- [[raw/daily-reports/AIGC_Daily_Report_20260409.md]] (2026-04-09)

## Related

- [[codm-visual-guide]]
- [[game-version-visual-guide]]

- [[adobe-firefly]]
- [[stability-brand-studio]]
- [[qwen-image-trainer]]
- [[brand-color-control-aigc]]
- [[character-consistency-aigc]]
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260409.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
