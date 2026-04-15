**Type**: concept
**Title**: Workflow（AI 协作接力规则）
**Created**: 2026-04-09
**Updated**: 2026-04-09
**Sources**: [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]
**Related**: [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/sub-agent.md]], [[wiki/topics/multi-agent-engineering.md]]
**Tags**: #workflow #harness #process #collaboration

---

# Workflow（AI 协作接力规则）

## 定义

Workflow 不是"写了几个 Agent"那么简单，而是一套**接力赛规则**——规定每一次前进、暂停、打回、重跑都有明确依据。

## 详细解释

接力赛最重要的不是有四个跑得快的人，而是：第一棒是谁跑、第二棒什么时候接、接棒时必须交什么、哪种情况算犯规、犯规后是重跑还是取消。

### 三层 Workflow 结构

在 JK Launcher 项目中，Workflow 被拆成三层：
1. **写给人看**：告诉大家研发链路整体怎么走
2. **写给系统看**：把阶段和迁移边固定下来（流程定义文件）
3. **写给角色看**：每个角色接棒时该读什么、交棒时该写什么（角色契约）

### 配套的上下文纪律

**每一棒只给当前该看的那一份材料。** 不是要隐瞒信息，而是避免上下文越长重点越散。Rule 慢慢长、dev-map 晚一点上，与 Workflow 拆阶段是同一思路。

### 流程维护升级

当流程变复杂后，需要三层升级：
1. **流程定义文件**：把阶段、迁移边、回退边从长文中抽出
2. **角色契约**：每个 Agent 的输入输出边界接口说明
3. **流程校验脚本**：检查流程定义文件和契约的完整性和一致性

## 关键要点

- Workflow 的核心不是"有一张图"，而是让每次前进、打回都有依据
- 没有 Workflow 的多 Agent 只是"有几个人在干活"
- 流程本身也必须成为可维护的工程资产

## Related

- [[wiki/concepts/sub-agent.md]]
- [[wiki/concepts/harness-engineering.md]]
- [[wiki/topics/multi-agent-engineering.md]]
- [[wiki/summaries/2026-04-09-harness-engineering-practice.md]]
