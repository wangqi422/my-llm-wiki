**Type**: concept
**Title**: Rule（AI 工程规矩）
**Created**: 2026-04-09
**Updated**: 2026-04-09
**Sources**: [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]
**Related**: [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/skill.md]], [[wiki/concepts/scripts-verification.md]]
**Tags**: #rule #harness #constraint #engineering

---

# Rule（AI 工程规矩）

## 定义

Rule 是给 AI 写的一套"工程规矩"，告诉 AI 什么能做、什么不能做、什么做完必须验证。它像团队的"研发制度"，不是拿来创造价值的，而是拿来减少混乱的。

## 详细解释

Rule 的核心作用不是帮 AI "变聪明"，而是帮 AI **少犯本来不该反复犯的低级错误**。例如："改完代码后必须编译、测试、事后验证，三步不全过不算完成。"

### Rule 的天花板

Rule 有一个非常重要的前提：**Rule 只是软约束，不是硬门禁。** AI 理论上应该遵守，但不一定每次都遵守。随着 Rule 越来越多、需求越来越复杂，会出现三种典型情况：

1. **忽略**：AI 在复杂任务下"局部遗忘"某条 Rule
2. **绕过**：AI 会给自己找理由（"这次场景特殊"、"不是我引入的"）
3. **解释性执行**：AI 知道 Rule 但偷懒没做

> "Rule 不是没用，而是 Rule 只能做'原则约束'，不能做'流程执行'。"

### 正确使用 Rule 的方式

- Rule 应该保留真正的红线和底线
- 固定执行步骤应拆出去做成 [[wiki/concepts/skill.md|Skill]]
- 能判定的约束应继续下沉为 [[wiki/concepts/scripts-verification.md|Scripts]]
- 一开始只补最关键的 Rule，不要贪多

## 关键要点

- Rule 像制度，减少混乱而非创造价值
- Rule 是软约束，最终需要 Scripts 做硬门禁
- Rule 越多越容易被稀释，应保持精简
- 在 [[wiki/concepts/harness-engineering.md|Harness Engineering]] 六层中处于最底层

## Related

- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/skill.md]]
- [[wiki/concepts/scripts-verification.md]]
- [[wiki/concepts/workflow.md]]
- [[wiki/summaries/2026-04-09-harness-engineering-practice.md]]
