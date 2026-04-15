---
title: "GPT-6"
type: entity
created: "2026-04-14"
updated: "2026-04-14"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260414.md]]"
tags:
  - tool
  - ai-model
  - openai
  - multimodal
  - agent
  - symphony-architecture
aliases:
  - "GPT-6 Spud"
  - "Spud"
  - "OpenAI GPT-6"
---

# GPT-6

> OpenAI旗舰大模型，Symphony原生多模态统一架构+200万Token上下文+Agent自主运行，2026-04-14全球发布。

## Info

| Field | Value |
|-------|-------|
| Type | tool / foundation AI model |
| Domain | 多模态AI（文本+图像+视频+音频） |
| Developer | OpenAI |
| Codename | Spud（土豆） |
| Launch | 2026-04-14 |
| Architecture | Symphony原生多模态统一架构 |
| Context Window | 200万 Token（GPT-5.4的2倍） |
| Parameters | ~5-6万亿 |
| Performance | 较GPT-5.4提升40% |

## Overview

GPT-6于2026年4月14日全球同步发布，是OpenAI关停Sora后的全力一搏。采用全新Symphony架构，彻底摒弃传统多模态的分支融合模式，在统一向量空间中原生编码文本、图像、视频和音频——模型"看到什么就理解什么"。被Sam Altman定位为"AGI的最后一公里"。

GPT-5.4的Tool Search功能已证明了Agent系统降本潜力（50+工具动态检索），GPT-6在此基础上将Agent自主运行能力推向新高度。200万Token上下文使完整品牌规范+历史设计参考的一次性加载成为现实。

## Key Contributions

- **Symphony架构**：原生统一向量空间底层编码，跨模态深度融合而非拼接
- **200万Token**：前代2倍，品牌规范全量加载不再需要RAG
- **Agent自主运行**：从"执行指令"到"规划+执行+验证"闭环
- **40%性能提升**：代码生成、逻辑推理、Agent任务三维飞跃
- **Sora算力转移**：Sora关停后全部算力投入GPT-6

## Timeline

| Date | Event |
|------|-------|
| 2026-03-05 | GPT-5.4发布（Tool Search+Computer Use+100万Token） |
| 2026-03-17 | GPT-6预训练完成 |
| 2026-03-25 | Sora正式关停，算力全部投入GPT-6 |
| 2026-04-05 | OpenAI确认4月14日发布 |
| 2026-04-14 | GPT-6全球同步发布 |

## CODM Application

- **品牌全量上下文**：200万Token加载CODM全部品牌资产+设计规范+历史参考
- **Symphony跨模态理解**：同时理解设计稿图像+文字brief+参考视频+语音反馈
- **Agent全流程自动化**：分析brief→生成方案→调用工具→品牌合规检查→交付成品
- **Tool Search降本**：50+宣发工具的Agent调度成本降低60-80%

## Related

- [[agent-framework-landscape-2026]]
- [[agent-stack-mcp-a2a]]
- [[claude-managed-agents]] — Agent平台竞品
- [[meta-muse-spark]] — 多模态竞品
- [[adobe-firefly]] — PS集成GPT系列
- [[glm-51]] — 开源竞品（SWE-Bench超越GPT-5.4）
- [[gemini-31]] — 竞品（Intelligence Index并列第一）
- [[claude-mythos]] — 受限竞品（SWE-bench 93.9%）
- [[deepseek-v4]] — 即将发布的开源竞品
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260414.md]]
- https://openai.com/gpt-6
