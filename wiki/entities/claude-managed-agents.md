---
title: "Claude Managed Agents"
type: entity
created: "2026-04-12"
updated: "2026-04-14"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260413.md]]"
tags:
  - tool
  - ai-agent
  - anthropic
  - managed-service
  - enterprise
aliases:
  - "Anthropic Managed Agents"
  - "Claude Cowork"
---

# Claude Managed Agents

> Anthropic全托管Agent基础设施，Agent从原型到生产只需数天，RBAC+OAuth+按毫秒计费。

## Info

| Field | Value |
|-------|-------|
| Type | tool / managed AI agent infrastructure |
| Domain | AI Agent部署 |
| Developer | Anthropic |
| Launch | 2026-04-08 (公测) |
| Pricing | Sonnet 4.6: $3/$15/M tokens, 活跃会话 $0.08/小时 |

## Overview

Claude Managed Agents 是 Anthropic 于2026年4月8日发布的全托管Agent基础设施套件。提供安全沙箱、内置代码执行/网页浏览/文件操作工具，将Agent从原型到生产的时间从"数月缩短至数天"。

同日 Claude Cowork 全面GA（RBAC权限控制、群组支出限额、OpenTelemetry可观测性、Zoom MCP连接器）。早期采用者包括Notion、Asana、Sentry。

## Key Contributions

- 全托管Agent基础设施（无需自建容器编排/沙箱/权限管理）
- RBAC角色权限控制+群组支出限额
- 按毫秒计费（空闲不收费）
- 内置凭证库+原生OAuth（Slack/Notion/ClickUp集成）
- OpenTelemetry可观测性
- Zoom MCP连接器

## Key Architecture: Harness Decoupling (2026-04-13 新增)

Anthropic发布Managed Agents架构深度解析（Engineering Blog），核心创新：
- **Harness编排引擎**：将Agent的"大脑"（Claude推理循环）与"手"（工具执行容器）彻底解耦
- **Session虚拟化**：每个Agent Session是append-only日志，支持断点恢复、历史回溯
- **容器热池化**：预热容器池消除冷启动延迟，按毫秒计费（空闲不收费）
- **三步范式**：定义任务+工具+护栏 → 部署 → 托管运行（$0.05/任务）
- 开发周期从数月压缩至数天，Agent-as-a-Service正式可行

## Timeline

| Date | Event |
|------|-------|
| 2026-04-08 | Claude Managed Agents 公测版发布 |
| 2026-04-08 | Claude Cowork 全面GA |
| 2026-04-09 | Harness架构深度解析发布（Engineering Blog） |
| 2026-04-13 | 12强框架对比中位列企业级托管场景第一 |
| 2026-04-07 | Claude Mythos发布（安全限制，仅50家企业） |
| 2026-04-14 | GPT-6发布，超级Agent引擎挑战Managed Agents定位 |

## 2026-04-14 Update: Mythos安全封锁+Cowork GA+GPT-6竞争

Claude Mythos（Anthropic迄今最强模型）因安全顾虑（大规模零日漏洞识别能力）仅限50家企业使用，不对公众开放——"能力越大，限制越多"成为AI安全新范式。Cowork GA全面投产，企业级多Agent协作正式可用。

GPT-6超级Agent引擎（ChatGPT+Codex+Atlas三合一）今日发布，对Managed Agents的"全托管Agent"定位构成直接竞争。但Managed Agents在"零基建部署"和"$0.05/任务定价"方面仍有差异化优势。

## 2026-04-13 Update: Agent平台三方鼎立中的核心角色

Claude Managed Agents在[[agent-platform-triad|Agent平台三方鼎立]]格局中定位为"全托管零基建"路线——与GPT-5.4 Tool Search（成本优化路线）和[[meta-muse-spark]]（视觉理解路线）形成三足鼎立。

关键新证据：
- Anthropic ARR突破$30B，~$400M收购Coefficient Bio，验证Agent垂直商业化
- Cowork GA意味着多Agent协作场景（生成→审核→分发流水线）已过企业级验证
- $0.05/任务使高频低价值任务（如逐张检查品牌色合规）的自动化首次经济可行
- Session（只追加日志）+Harness（调用循环）+Tool（可组合MCP工具）三层抽象确认

## CODM Application

- 零基建Agent部署：设计师也能构建品牌审核Agent
- RBAC适合多成员设计团队（设计师/审核员/运营不同权限）
- MCP连接器对接现有协作工具（Slack/Notion）
- 与 [[microsoft-agent-framework]] 形成"全托管 vs 自建"的选型对比
- **（04.13新增）品牌审核自动化**：配置Agent读取品牌规范+色板，自动审核AI生成素材
- **（04.13新增）多语言版本批处理**：Agent自动翻译并重排KV海报至10+语言版本
- **（04.13新增）素材质检流水线**：Agent串联检查分辨率、色域、安全区、字体规范

## Related

- [[agent-stack-mcp-a2a]] — Agent标准协议栈
- [[microsoft-agent-framework]] — 竞品（自建SDK路线）
- [[agent-factory-pattern]] — Agent模板化
- [[ag-ui-protocol]] — 前端交互协议
- [[agent-platform-triad]] — Agent平台三方鼎立格局
- [[meta-muse-spark]] — 竞品（视觉理解路线）
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260414.md]]
