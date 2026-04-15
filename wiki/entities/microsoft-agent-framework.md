---
title: "Microsoft Agent Framework 1.0"
type: entity
created: "2026-04-11"
updated: "2026-04-12"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
tags:
  - tool
  - ai-agent
  - microsoft
  - mcp
  - a2a
  - production-grade
aliases:
  - "Agent Framework"
  - "MS Agent Framework"
  - "Semantic Kernel + AutoGen"
---

# Microsoft Agent Framework 1.0

> 微软生产级Agent SDK，统一Semantic Kernel+AutoGen，首个MCP+A2A双协议生产实现。

## Info

| Field | Value |
|-------|-------|
| Type | tool / AI Agent SDK |
| Domain | AI Agent开发 |
| Developer | Microsoft |
| Website | https://devblogs.microsoft.com/agent-framework/ |
| GitHub | microsoft/agent-framework |
| Launch | 2026-04-03 |
| Runtime | .NET 10 / Python |

## Overview

Microsoft Agent Framework 1.0 于 2026 年 4 月 3 日正式发布，是首个将 Semantic Kernel 的企业级能力与 AutoGen 的多Agent编排模式统一为单一生产级 SDK 的框架。核心价值：结束了此前开发者在 SK（企业集成强、编排弱）和 AutoGen（编排强、.NET 弱）之间的二选一困境。

### 核心架构组件

1. **统一服务连接器**：基于 `IChatClient` 标准接口，内置 Azure OpenAI / Claude / Gemini / Ollama 等多提供商一方连接器
2. **多Agent编排模式**：顺序 / 并发 / 交接 / 群聊 / Magentic-One，研究验证的生产级模式
3. **MCP + A2A 双协议**：[[mcp-protocol|MCP]]（工具发现与调用）+ A2A 1.0（跨框架Agent协作）
4. **中间件管道**：可插拔的行为拦截和转换管道
5. **可插拔记忆**：对话历史 / 键值状态 / 向量检索

### DevUI 调试器

基于浏览器的调试工具，实时可视化Agent执行流、消息传递和工具调用，大幅降低Agent系统的调试难度。

## Key Contributions

- 首个 MCP + A2A 双协议的生产级实现
- 统一 Semantic Kernel + AutoGen 为单一 SDK
- DevUI 浏览器调试器实时可视化Agent执行
- 5行代码最小化Agent创建
- 多提供商无关性（一行代码切换LLM）
- 标志着AI Agent开发进入"工程化时代"

## Timeline

| Date | Event |
|------|-------|
| 2024 | Semantic Kernel 和 AutoGen 作为独立项目发展 |
| 2025 | 微软宣布统一Agent框架计划 |
| 2026-04-03 | Agent Framework 1.0 正式发布 |
| 2026-04-07 | 首周即获广泛行业报道和社区采用 |
| 2026-04-14 | 持续验证：核心新增Agent Skills功能，架构 = Brain + Skills + Memory |

## CODM Application Scenarios

- **品牌审核Agent**：用 DevUI 原型验证"品牌规范自动检查Agent"
- **多平台适配Agent**：多Agent编排实现 KV→多平台尺寸裁剪→自动发布
- **效果数据Agent**：通过 MCP 接入各渠道数据源，自动汇聚分析
- **替代n8n方案**：评估作为当前自托管 n8n Agent 方案的升级替代

## Related

- [[mcp-protocol]]
- [[agent-factory-pattern]]
- [[agent-stack-mcp-a2a]]
- [[claude-managed-agents]] — 竞品对比（Anthropic全托管 vs MS SDK自建）
- [[agent-framework-landscape-2026]] — 12大SDK全景定位
- [[ag-ui-protocol]] — 前端交互协议（三层栈第三层）
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
- https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/
- https://startdebugging.net/2026/04/microsoft-agent-framework-1-0-ai-agents-in-csharp/
