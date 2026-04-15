---
title: "MCP Protocol (Model Context Protocol)"
type: concept
created: "2026-04-09"
updated: "2026-04-13"
sources:
  - "[[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260409.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
tags:
  - ai-agent
  - protocol
  - automation
  - mcp
  - server-cards
  - harness
aliases:
  - "MCP协议"
  - "Model Context Protocol"
  - "模型上下文协议"
  - "MCP v2.1"
  - "MCP"
merged_from:
  - mcp
---

# MCP Protocol (Model Context Protocol)

> Agent-工具通信的行业标准"插座"协议，v2.1 Server Cards+月下载9700万+，也是Harness的外接能力接口。

## Definition

MCP (Model Context Protocol) 是2026年确立的AI Agent与外部工具/服务之间的标准通信协议。它定义了Agent如何发现、调用和组合外部工具能力，类似于Web世界的HTTP协议之于浏览器和服务器。MCP使不同AI平台的Agent可以统一调用同一套工具生态。

## Core Content

### 核心价值
- **互操作性**：不同LLM平台的Agent可以调用同一套MCP工具
- **生态统一**：开发者只需实现一次MCP接口，所有Agent平台均可调用
- **安全治理**：标准化的权限管理和审计机制

### 行业支持
- Anthropic（发起方）、OpenAI、Google 全面支持
- Zapier、Make、n8n 等自动化平台原生集成
- Claude Desktop 实测通过MCP在90秒内完成自动化流程创建
- **月下载量超 9700 万次**（2026-04-11 更新）

### MCP v2.1 更新（2026-04-11 新增）

MCP v2.1 规范新增 **Server Cards** 功能：
- 通过 `.well-known` URL 暴露结构化服务器元数据
- 使注册表和爬虫可在**不建立连接**的情况下发现服务器能力
- 解决了MCP生态中"工具发现"的最后一公里问题
- 支持 Dremio 和 Apache Iceberg 数据目录集成

### 在Agent栈中的定位（2026-04-11 新增）

MCP 在 [[agent-stack-mcp-a2a|Agent标准栈]] 中定位为**资源层**：
- MCP = 资源层（连接工具/API/数据）
- A2A = 网络层（跨框架Agent协调）
- 二者构成企业级Agent系统的生产就绪默认标准
- [[microsoft-agent-framework|MS Agent Framework 1.0]] 首个生产级双协议实现

### 2026年AI Agent部署现状
- 成功模式集中于"窄范围+人机回环"
- 让Agent处理单一明确任务，不确定案例路由给人工
- 预计2026年底40%商业应用采用AI Agent（2025年不足5%）
- **90%专业开发者定期使用AI工具**（JetBrains 2026-04 调查）

## Key Points

- MCP已成为Agent-工具通信的事实标准（月下载9700万+）
- v2.1 Server Cards解决工具自动发现问题
- MCP+A2A构成Agent双层标准栈
- "窄范围+人机回环"是当前AI Agent成功的关键模式
- n8n自托管方案适合需要数据安全的游戏公司
- 微软Agent Governance Toolkit保护Agent免受10种关键攻击

## CODM Application Scenarios

- 构建素材自动分发Agent（主KV → 多平台尺寸裁剪+发布）
- 设计规范自动检查Agent（品牌一致性审核）
- 效果数据汇聚Agent（各渠道投放数据 → 分析报告）
- **将内部工具封装为MCP Server**：素材库/审核系统/数据面板通过Server Cards自动暴露给Agent生态

## 在 Harness Engineering 中的角色

MCP 是 [[harness-engineering]] 的**外接能力接口**——把"仓库之外的能力"接进 AI 工作链路。如果 Rule 像制度、Skill 像操作手册、Scripts 像闸机，MCP 更像**标准插座**。

有 MCP 后，AI 可延伸到：构建闭环（CI构建）→ 签名闭环 → 制品闭环 → 发布闭环 → 结果回写。

> 先把开发闭环跑通，再考虑通过 MCP 接外部系统。MCP 当前阶段是辅助，但闭环延伸到构建/发布时会变得"决定性"。

## Related

- [[agent-stack-mcp-a2a]]
- [[agent-factory-pattern]]
- [[microsoft-agent-framework]]
- [[design-md-pattern]] — DESIGN.md + MCP 构成设计 Agent 完整规范
- [[codm-aigc-workflow]]
- [[ai-video-production-strategy]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260409.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
