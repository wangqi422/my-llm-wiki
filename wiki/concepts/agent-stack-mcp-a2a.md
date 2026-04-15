---
title: "Agent Stack: MCP + A2A"
type: concept
created: "2026-04-11"
updated: "2026-04-13"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260409.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260413.md]]"
tags:
  - ai-agent
  - mcp
  - a2a
  - protocol
  - infrastructure
  - enterprise
  - server-cards
aliases:
  - "Agent标准栈"
  - "MCP+A2A双层架构"
  - "Agent Infrastructure Stack"
  - "MCP协议"
  - "Model Context Protocol"
  - "模型上下文协议"
  - "MCP v2.1"
---

# Agent Stack: MCP + A2A

> 2026年4月固化的企业级Agent基础设施标准：MCP资源层+A2A网络层，月下载9700万+，150+组织采用。

## Definition

Agent Stack: MCP + A2A 指2026年4月确立的AI Agent系统双层标准架构：MCP (Model Context Protocol) 作为资源层（连接工具/API/数据），A2A (Agent-to-Agent) 作为网络层（跨框架Agent协调）。这一架构被 [[microsoft-agent-framework|Microsoft Agent Framework 1.0]] 首次实现为生产级方案，标志着Agent栈从实验走向工程化。

## Core Content

### 双层架构

```
┌─────────────────────────────────────┐
│         Application Layer           │
│    (Business Agent Logic)           │
├─────────────────────────────────────┤
│     A2A Network Layer (网络层)       │
│  跨框架/跨运行时Agent协调通信        │
│  → Agent发现、消息传递、任务委派     │
├─────────────────────────────────────┤
│     MCP Resource Layer (资源层)      │
│  工具/API/数据的标准化连接           │
│  → 工具发现(Server Cards)、调用、   │
│    权限管理                          │
└─────────────────────────────────────┘
```

### MCP 资源层（v2.1）
- MCP是AI Agent与外部工具/服务之间的标准通信协议，类似于Web的HTTP
- 月下载量超 **9700 万次**
- Anthropic（发起方）、OpenAI、Google 全面支持；Zapier/Make/n8n 原生集成
- v2.1 新增 **Server Cards**：通过 `.well-known` URL 暴露服务器元数据，解决"工具发现"最后一公里
- 支持 Dremio / Apache Iceberg 数据目录
- Claude Desktop 实测通过MCP在90秒内完成自动化流程创建
- n8n自托管方案适合需要数据安全的游戏公司

### A2A 网络层（1.0）
- 跨框架、跨运行时的 Agent 结构化消息协调
- [[microsoft-agent-framework|MS Agent Framework 1.0]] 首个生产级实现
- 支持多种编排模式：顺序/并发/交接/群聊/Magentic-One

### 2026-04-12 重大里程碑：A2A v1.0稳定版 + 三大云平台全面落地

> **来源**：Linux Foundation 2026-04-09 公告

A2A协议发布一周年达成以下里程碑：
- **组织采用**：从50+增长至**150+组织**（AWS、Cisco、Google、IBM、Microsoft、Salesforce、SAP、ServiceNow）
- **GitHub**：22,000+星
- **SDK扩展**：Python→5种生产就绪语言（JavaScript、Java、Go、.NET）
- **三大云落地**：Azure AI Foundry + Copilot Studio / AWS Bedrock AgentCore Runtime / Google Cloud
- **v1.0稳定规范**：引入**Signed Agent Cards**加密认证 + 企业级多租户 + 多协议支持
- **AP2扩展**：Agent Payments Protocol (AP2) 发布，60+支付和金融服务组织支持
- **与MCP互补**确认：A2A（跨组织Agent通信）+ MCP（内部工具/数据连接）= 完整基础层
- **[[claude-managed-agents]]** 发布进一步验证Agent全托管模式的可行性

### 栈固化的行业信号
- JetBrains 调查：90% 专业开发者定期使用AI工具
- Claude Code 崛起至 18% 份额（SWE-bench 80.8%）
- Google 发布 Gemma 4 开源模型（Apache 2.0）
- Forrester 定义 "Agent Control Plane" 市场类别，将 MCP 视为基础管道

## Key Points

- MCP+A2A 成为企业级Agent系统的生产就绪默认标准
- Server Cards 解决"工具发现"最后一公里
- Agent栈固化意味着企业可放心投入Agent系统建设
- 从"自建标准"到"采用行业标准"的转变
- 90%开发者使用AI工具，Agent不再是实验
- **[2026-04-12]** AG-UI协议得到Microsoft支持，三协议栈闭环完成：MCP(资源层)+A2A(网络层)+[[ag-ui-protocol|AG-UI]](交互层)
- **[2026-04-12]** A2A v1.0稳定版发布，150+组织采用，三大云平台（Azure/AWS/GCP）全面落地
- **[2026-04-12]** [[claude-managed-agents]] 全托管Agent发布，Agent从原型到生产数天
- **[2026-04-12]** 8大Agent SDK同台竞技进入"百框大战"窗口期
- **[2026-04-13]** [[agent-platform-triad|Agent平台三方鼎立]]格局确立：Claude全托管+GPT-5.4 Tool Search+Meta Muse Spark，三方均兼容MCP+A2A
- **[2026-04-13]** GPT-5.4 Tool Search动态检索使50+工具Agent成本降低60-80%（token节省），标准栈的经济性大幅改善
- **[2026-04-13]** [[meta-muse-spark]]加入Agent生态：CharXiv视觉推理86.4%为Agent带来"看懂设计"的新维度
- **[2026-04-13]** Anthropic发布Managed Agents Harness架构详解——"大脑与手解耦"虚拟化Agent Session，$0.05/任务使Agent-as-a-Service正式可行
- **[2026-04-13]** MS Agent Framework AG-UI集成正式GA——首个在单一框架内完整实现MCP+A2A+AG-UI三层协议栈
- **[2026-04-13]** 12强Agent框架深度对比出炉——三协议标准化(MCP+A2A+AG-UI)成为选型首要标准
- **[2026-04-13]** Agent栈从"能跑"到"能用"的转变：AG-UI补全前端展示层，Managed Agents消除运维负担

## CODM Application Scenarios

- **标准栈选型**：确定 CODM Agent 系统基于 MCP+A2A 标准
- **工具封装**：将内部工具（素材库/审核系统/数据面板）封装为 MCP Server，通过 Server Cards 自动暴露给Agent生态
- **自动发现**：通过 Server Cards 让 Agent 自动发现并接入新工具
- **跨框架协作**：不同团队开发的 Agent 通过 A2A 协作
- **素材自动分发Agent**：主KV → 多平台尺寸裁剪+发布（MCP连接发布平台）
- **设计规范自动检查Agent**：品牌一致性审核（MCP连接品牌规范库）
- **效果数据汇聚Agent**：各渠道投放数据 → 分析报告（MCP连接数据面板）

## Related

- [[agent-factory-pattern]]
- [[microsoft-agent-framework]]
- [[ag-ui-protocol]] — 第三层：前端交互协议
- [[claude-managed-agents]] — 全托管Agent竞品
- [[agent-framework-landscape-2026]] — Agent框架全景（含平台三方鼎立）
- [[meta-muse-spark]] — 视觉理解路线
- [[ai-video-production-strategy]]
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260409.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
- https://dev.to/alexmercedcoder/ai-tools-race-heats-up-week-of-april-3-9-2026-37fl
- https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
