---
title: "CODM AIGC Workflow — 2026 Integrated Strategy"
type: insight
created: "2026-04-10"
updated: "2026-04-14"
frozen_from: "codm-aigc-workflow-snapshot-20260413.md"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260409.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260413.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260414.md]]"
  - "[[raw/work-docs/codm-visual-style-text.md]]"
  - "[[raw/daily-reports/CODM_Competitive_Daily_20260413.md]]"
  - "[[raw/daily-reports/CODM_Competitive_Daily_20260414.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260414.md]]"
tags:
  - codm
  - aigc-workflow
  - strategy
  - production-pipeline
---

# CODM AIGC Workflow — 2026 Integrated Strategy

> CODM宣发设计团队应建立"三层AIGC生产体系"：品牌基础设施 → 内容分级生产 → Agent自动化分发。

## Core Insight（一句话）

2026年4月AIGC工具链在多维度同时成熟，构建CODM完整AIGC宣发管线的条件**首次成熟**——从"人工为主AI辅助"转向"AI为主人工精修"。

## 三层生产体系

### Layer 1: 品牌基础设施
- [[adobe-firefly]] 自定义模型继承品牌DNA + [[brand-color-control-aigc|品牌色API]] 锁定色板
- [[design-md-pattern|DESIGN.md]] 将品牌视觉DNA编码为AI可读格式
- 角色AI资产标准：每角色一套参考图+Face-Lock+LoRA

### Layer 2: 内容分级生产
| 内容类型 | 主力工具 | 预期提速 |
|----------|----------|----------|
| 赛季主KV | [[reallusion-ai-studio]] 3D+AI | 3-5x |
| 品牌CG预告 | [[runway-gen4]] 品牌级 | 2-3x |
| 社媒短视频 | [[kling-3]] 铺量级 | 10x+ |
| 品牌LOGO/图标 | [[recraft-v4]] SVG矢量 | 10x+ |
| 全套物料批量 | [[lovart-design-agent]] Agent | 5-10x |
| 宣传片后期编辑 | [[wan27-video]] 导演级 | 5-10x |

### Layer 3: Agent自动化分发
- [[mcp-protocol]] 标准下的多平台适配Agent
- [[claude-managed-agents]] 全托管品牌审核Agent（零基建）
- [[gpt-6]] 超级Agent引擎（ChatGPT+Codex+Atlas三合一）— 04-14新增

## Supporting Evidence（Top 5）

1. [[gpt-6]]: Symphony全模态+200万Token+40%性能提升，基座换代提升所有Agent天花板
2. [[adobe-firefly]]: PS 2026 v27.5多模型开放平台（25+模型），设计工具从单AI到多AI平台化
3. [[wan27-video]]: DesignArena V2V #1证明"导演级视频编辑"已可生产级使用
4. [[ai-content-homogenization]]: AI内容50%+，品牌视觉同质化紧迫，品牌DNA编码成必选项
5. [[agent-framework-landscape-2026]]: 12框架深度对比验证Agent生产级选型成熟

## Current Action Items（Top 3）

1. **GPT-6品牌全量测试**：申请API，用200万Token加载CODM全部品牌资产测试Symphony视觉理解效果
2. **PS 2026 v27.5全组升级**：开启AI Assistant+Firefly Boards，建立"30稿AI探索→人工筛选精修"工作流
3. **品牌DNA编码启动**：编写CODM [[design-md-pattern|DESIGN.md]]，应对[[ai-content-homogenization|AI同质化危机]]

## To Verify（Top 5）

- [ ] GPT-6 Symphony vs Claude Opus 4.6在设计稿理解和品牌合规审核中的对比
- [ ] PS 2026 参考图像Generate Fill在CODM角色海报合成中的光照匹配效果
- [ ] [[wan27-video]]多语言台词替换+口型匹配在CODM全球发行的可用性
- [ ] Gemma 4 本地部署在设计师设备上的实际性能（3.8B活跃参数MoE）
- [ ] MiniMax Music 2.6在CODM赛季BGM风格生成中的质量

## Related

- [[ai-video-production-strategy]]
- [[ai-video-landscape-2026]]
- [[character-consistency-aigc]]
- [[brand-color-control-aigc]]
- [[design-md-pattern]]
- [[mcp-protocol]]
- [[agent-stack-mcp-a2a]]
- [[lovart-design-agent]]
- [[recraft-v4]]
- [[claude-managed-agents]]

<details><summary>See Also</summary>

- [[gpt-6]]
- [[glm-51]]
- [[gemma-4]]
- [[deepseek-v4]]
- [[claude-mythos]]
- [[gemini-31]]
- [[google-veo-3]]
- [[microsoft-agent-framework]]

</details>

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260409.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260414.md]]
- [[raw/daily-reports/CODM_Competitive_Daily_20260413.md]]
