**Type**: concept
**Title**: MCP（Model Context Protocol）
**Created**: 2026-04-09
**Updated**: 2026-04-09
**Sources**: [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]
**Related**: [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/scripts-verification.md]]
**Tags**: #mcp #protocol #harness #integration #tool

---

# MCP（Model Context Protocol）

## 定义

MCP（Model Context Protocol）是一种标准方式，把"仓库之外的能力"接进 AI 的工作链路里——既能拉取信息，也能在明确边界内触发外部系统的动作。它是 Harness 的**外接能力接口**。

## 详细解释

### 角色定位

如果 Rule 像制度、Skill 像操作手册、Scripts 像闸机，那么 MCP 更像**把 AI 接进更大工程系统的标准插座**。

MCP 不是 Harness 的主体，而是 Harness 的外接能力接口——接什么、接到多细、何时允许接，本身也要被制度与门禁管住。

### 没有 MCP 时 AI 被锁在

- 本地代码仓库
- 本地脚本
- 当前对话上下文

### 有 MCP 后可延伸到

| 环节 | 能力 |
|------|------|
| 构建闭环 | 发起标准 CI 构建，拿到统一环境构建结果 |
| 签名闭环 | 调用受控签名服务 |
| 制品闭环 | 上传产物到制品库/下载源 |
| 发布闭环 | 调用发布平台、推进灰度、记录版本状态 |
| 结果回写 | 把外部系统状态回写到任务文档和看板 |

### Unity 场景案例

通过 MCP 把 AI 开发工具与 Unity Editor 连通：暴露编译、场景与资产、日志与快照、命令路由等接口，让 AI 在受控边界内完成"感知—操作—验证"。

## 关键要点

- 当前阶段 MCP 是辅助，但当闭环延伸到构建/发布时会变得"决定性"
- MCP 提供受控、结构化、可审计的能力接口
- 先把开发闭环跑通，再考虑通过 MCP 接外部系统

## Related

- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/scripts-verification.md]]
- [[wiki/summaries/2026-04-09-harness-engineering-practice.md]]
