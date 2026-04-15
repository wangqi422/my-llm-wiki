**Type**: topic
**Title**: 多 Agent 工程化（Multi-Agent Engineering）
**Created**: 2026-04-09
**Updated**: 2026-04-09
**Sources**: [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]
**Related**: [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/sub-agent.md]], [[wiki/concepts/workflow.md]]
**Tags**: #multi-agent #engineering #harness #structured-dispatch

---

# 多 Agent 工程化（Multi-Agent Engineering）

## 概述

多 Agent 工程化是 [[wiki/concepts/harness-engineering.md|Harness Engineering]] 的核心组成部分，指将复杂 AI 开发任务拆分为多个专业角色（Agent），通过结构化调度实现稳定、可审计、可维护的协作。

## 核心概念

- [[wiki/concepts/sub-agent.md]] — 角色拆分与七角色体系
- [[wiki/concepts/harness-engineering.md]] — 接力规则与流程定义
- [[wiki/concepts/harness-engineering.md]] — 整体工程系统
- [[wiki/concepts/harness-engineering.md]] — 反馈闭环

## 关键人物

（本文来自腾讯内部 KM 平台，作者未署名）

## 发展历程

| 阶段 | 状态 | 问题 |
|------|------|------|
| 单 Agent | SPEC + Rule + Skill | 复杂需求下角色冲突、上下文混杂 |
| 多 Agent 初版 | 拆出需求/方案/开发三层 | 缺闸门、缺收口 |
| 补齐七角色 | 加闸门总控 + 代码审查 + 测试 + PM | 下游改上游、PM 越界 |
| 补稳六轮 | 文档边界 + PM 收缩 + 专业性 + 脚本化 + 基线对比 + 流程资产化 | 趋于成熟 |

## 当前状态

三种多 Agent 路线对比详见 [[wiki/comparisons/single-agent-vs-multi-agent.md]]。

结构化调度（固定角色 + 固定流程）是工程实践中的主流选择，因为对长期维护的工程来说，可控、可追踪、可复用比"理论上更灵活"重要得多。

## Related

- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/sub-agent.md]]
- [[wiki/concepts/workflow.md]]
- [[wiki/concepts/managed-agents-platform.md]]
- [[wiki/comparisons/single-agent-vs-multi-agent.md]]
- [[wiki/summaries/2026-04-09-harness-engineering-practice.md]]
- [[wiki/summaries/2026-04-10-multica-managed-agents-platform.md]]
