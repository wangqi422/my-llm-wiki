---
title: "AG-UI Protocol"
type: concept
created: "2026-04-12"
updated: "2026-04-12"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
tags:
  - ai-agent
  - protocol
  - frontend
  - copilotkit
  - microsoft
aliases:
  - "AG-UI"
  - "Agent-User Interaction Protocol"
  - "Agent前端交互协议"
---

# AG-UI Protocol

> MCP+A2A之后的第三个关键Agent协议——定义Agent与用户前端的实时交互标准，补齐Agent系统最后一块拼图。

## Definition

AG-UI (Agent-User Interaction Protocol) 由CopilotKit社区发起，是一个开放的、轻量的、基于事件(SSE)的协议，标准化AI Agent后端与用户前端应用之间的实时双向通信。它补齐了Agent生态三协议栈的最后一环：

```
MCP  → Agent ↔ 工具/数据（资源层）
A2A  → Agent ↔ Agent（网络层）
AG-UI → Agent ↔ 用户前端（交互层）
```

## Core Content

### 三协议栈闭环

2026年4月，Agent生态的三个关键协议完成闭环：
1. **[[mcp-protocol|MCP]] v2.1**：Agent→工具/数据连接（月下载9700万+）
2. **A2A 1.0**：Agent→Agent跨框架协作（150+组织，三大云支持）
3. **AG-UI**：Agent→用户前端实时交互（Microsoft+AWS+Google采纳）

### AG-UI核心能力

- **实时流式传输**：基于SSE，延迟比传统API改善20-30%
- **人工审批步骤**：Agent动作可设置人工审批节点
- **状态同步**：多Agent系统的执行状态实时可见
- **多Agent透明度**：Agent间交接流程可视化（非黑盒）

### Microsoft支持的意义

Microsoft于2026年4月8日开发者博客展示AG-UI多Agent协作Demo（分流/退款/订单Agent协同），标志着AG-UI从社区项目升级为企业级标准。AWS Bedrock、Google ADK、LlamaIndex也已采纳。

## Key Points

- AG-UI补齐MCP+A2A后的Agent前端交互层
- Microsoft支持标志着"厂商锁定→协议标准化"转向
- SSE流式传输延迟改善20-30%
- 人工审批+状态同步让Agent系统不再是黑盒
- 与MCP/A2A互补而非替代

## Last Seen In

- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]] (2026-04-12)

## CODM Application

- 构建"品牌审核Agent"的可视化前端：审核员实时看到AI审核过程和决策
- Agent动作审批节点：关键素材发布前需人工确认
- 多Agent管线状态面板："生成→审核→分发"全链路可视

## Related

- [[agent-stack-mcp-a2a]] — 双层协议栈（现升级为三层）
- [[mcp-protocol]] — 资源层协议
- [[microsoft-agent-framework]] — AG-UI集成方
- [[claude-managed-agents]] — 竞品Agent平台
- [[agent-factory-pattern]] — Agent模板化
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
- https://asksurf.ai/pulse/en/microsoft-ag-ui-open-protocol-shift
- https://www.copilotkit.ai/ag-ui
- https://github.com/ag-ui-protocol/ag-ui/
