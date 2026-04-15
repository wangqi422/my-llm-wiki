**Type**: concept
**Title**: Sub Agent（多角色 AI 分工）
**Created**: 2026-04-09
**Updated**: 2026-04-09
**Sources**: [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]
**Related**: [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/workflow.md]], [[wiki/topics/multi-agent-engineering.md]], [[wiki/concepts/managed-agents-platform.md]]
**Tags**: #sub-agent #multi-agent #role #harness

---

# Sub Agent（多角色 AI 分工）

## 定义

Sub Agent 是将一个大任务拆成多个"分工明确的 AI 角色"的机制。每个 Agent 只负责自己那一段，把产出写进文档，然后交给下一个 Agent。

## 详细解释

### 为什么需要拆分

单 Agent 在复杂链路中同时扮演所有角色会出现四个问题：
1. **上下文混杂**：需求、推断与临时补丁边界不清
2. **天然缺乏制衡**：审校与执行角色未分离，一路带着偏差往下跑
3. **过程不可追踪**：难区分真实进度与口头完成
4. **错误反复出现**：复杂度上升时问题叠加

### JK Launcher 的七角色体系

这七个角色不是拍脑袋拆出来的，而是被问题一步步逼出来的：

| 角色 | 职责 | 解决什么 |
|------|------|---------|
| 1. **PM（项目经理）** | 路由、交接、回退、进度管理 | 整条链怎么有序串起来 |
| 2. **需求分析** | 把模糊诉求变成结构化需求 | 想做什么 |
| 3. **方案设计** | 把需求翻译成技术方案 | 打算怎么做 |
| 4. **闸门总控** | 开发前可行性和风险把关 | 现在能不能做 |
| 5. **开发实现** | 落地代码和实现细节 | 真正做出来 |
| 6. **代码审查** | 实现质量、需求/方案一致性收口 | 是不是按要求做的 |
| 7. **测试验证** | 功能正确性、稳定性、边界收口 | 做出来能不能用 |

### 模型分层配置

不同 Agent 配不同档位的模型：PM 用简单模型（守流程、做路由），需求分析/方案设计/代码审查/测试用更强模型（专业判断）。"不是每个岗位都配同一把最贵的锤子。"

## 关键要点

- 七个角色各自解决了前一个角色解决不了的问题
- PM 是"总路由器"而非"总专家"，严禁越界
- 下游不能直接改上游文档，必须通过 PM 正式打回
- 模型分层配置是成本控制的关键

## Related

- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/harness-engineering.md]]
- [[wiki/topics/multi-agent-engineering.md]]
- [[wiki/comparisons/single-agent-vs-multi-agent.md]]
- [[wiki/summaries/2026-04-09-harness-engineering-practice.md]]
