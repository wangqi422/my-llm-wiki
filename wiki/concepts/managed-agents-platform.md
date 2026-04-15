**Type**: concept
**Title**: 托管代理平台（Managed Agents Platform）
**Created**: 2026-04-10
**Updated**: 2026-04-10
**Sources**: [[raw/articles/multica-managed-agents-platform.md]]
**Related**: [[wiki/concepts/sub-agent.md]], [[wiki/concepts/harness-engineering.md]], [[wiki/topics/multi-agent-engineering.md]], [[wiki/concepts/workflow.md]]
**Tags**: #managed-agents #platform #multi-agent #orchestration

---

# 托管代理平台（Managed Agents Platform）

## 定义

托管代理平台是一类用于**管理、调度和可视化**多个 AI Coding Agent 协作的中间件平台。它不创建新的 Agent，而是将已有的 Agent CLI（如 Claude Code、Codex）包装为"团队成员"，提供任务分配、进度追踪和技能复用等能力。

## 详细解释

### 核心问题

随着 AI Coding Agent 的成熟，团队面临新的管理问题：
1. **多 Agent 协调**：多个 Agent 同时工作时，如何分配任务、避免冲突？
2. **进度可视化**：Agent 在做什么、做到哪了、卡在哪里？
3. **技能沉淀**：Agent 解决过的问题如何变成可复用的能力？
4. **运行时管理**：本地和云端的计算资源如何统一调度？

### 典型能力

| 能力 | 说明 |
|------|------|
| 任务看板 | 以看板形式展示任务，Agent 自动认领和执行 |
| 实时进度 | WebSocket 推送 Agent 的实时工作状态 |
| 技能复用 | 将历史解决方案沉淀为可复用的技能库 |
| 统一运行时 | 管理多种 Agent CLI 的本地和云端执行环境 |
| 多工作区 | 工作区级别的隔离，支持多团队多项目 |

### 与结构化调度的区别

[[wiki/concepts/harness-engineering.md|Harness Engineering]] 采用"固定角色 + 固定流程"的结构化调度，强调**确定性、可审计性和工程控制**。托管代理平台则更偏向"动态调度"：Agent 可以自主认领任务，平台提供管理和可视化能力，但不强制规定角色分工和执行流程。

两者的关系是互补的：
- 结构化调度适合需要严格工程控制的单项目场景
- 托管代理平台适合多人多项目并行的团队协作场景

### 代表项目

- **Multica**（https://github.com/multica-ai/multica）：5.4k Stars，支持 Claude Code / Codex / OpenClaw / OpenCode，技术栈 Next.js + Go + PostgreSQL

## 关键要点

- 托管代理平台是 Agent 生态从"工具"到"团队成员"演进的产物
- 核心价值在于将分散的 Agent CLI 统一管理，提供可视化和技能复用
- 与 Harness Engineering 的结构化调度是互补关系，不是替代关系
- 目前仍处于早期阶段（代表项目 Multica 为 v0.x）

## 示例

Multica 的典型工作流：
1. 用户在看板上创建任务（如"修复登录页 Bug"）
2. 配置好的 Agent（如 Claude Code）自动认领该任务
3. Agent 执行代码修复，通过 WebSocket 实时汇报进度
4. 遇到阻碍时 Agent 主动创建 Issue 并报告
5. 完成后技能自动沉淀（如"登录模块修复"技能），可复用于未来类似任务

## Related

- [[wiki/concepts/sub-agent.md]]
- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/harness-engineering.md]]
- [[wiki/topics/multi-agent-engineering.md]]
- [[wiki/comparisons/single-agent-vs-multi-agent.md]]
- [[wiki/summaries/2026-04-10-multica-managed-agents-platform.md]]
