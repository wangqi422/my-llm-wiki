**Type**: concept
**Title**: Scripts / 总验证脚本（硬门禁与事后验证）
**Created**: 2026-04-09
**Updated**: 2026-04-09
**Sources**: [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]
**Related**: [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/rule.md]], [[wiki/concepts/skill.md]]
**Tags**: #scripts #verification #harness #feedback-loop #gate

---

# Scripts / 总验证脚本（硬门禁与事后验证）

## 定义

Scripts 是整个 Harness 里最"硬"的东西——不是告诉 AI 应该怎么做，而是直接检查它做没做到。总验证脚本是"研发后验证总入口"，把"完成"从 AI 的主观汇报变成可检查的客观结果。

## 详细解释

> "你说你做完了没用，得跑过我这关才算。"

### 三类检查项

**A 类：静态规范**（XAML 中文/Emoji、C# 版本语法、硬编码 UI 文本、日志格式、本地化合规等）

**B 类：基础交付门槛**（编译必须成功、测试必须全通过、测试数量不能异常减少）

**C 类：工程一致性**（规则文件多格式同步、.cs 文件进 .csproj）

### 为什么是 Harness 最关键的基础设施

前面的 SPEC、Rule、Skill、多 Agent 都在解决"怎样让 AI 去做事"；但如果没有事后验证，你始终不知道 AI 做出来的结果到底是正确的、错误的，还是只是看起来像完成了。

事后验证补上的不是一个步骤，而是**整个反馈闭环**：做事 → 校验结果 → 发现问题 → 回退修复 → 再次验证。

### 基线对比机制

为防止 AI 用"这个错误本来就存在"偷懒，补了一层基线对比：开发前跑一次、开发后再跑一次，对比新增错误。"是不是你这次引入的"靠前后报告对比，不靠嘴解释。

### 质变时刻

> AI 的完成定义从"我觉得我做完了"变成"脚本判定你通过了，你才算做完"。

## 关键要点

- 真正成熟的 Harness 会越来越依赖脚本，而不是提示词
- 总验证脚本把散落的检查收成统一入口
- 事后验证让 Harness 具备"结果感知能力"
- 基线对比堵住"历史遗留问题"的借口

## Related

- [[wiki/concepts/rule.md]]
- [[wiki/concepts/skill.md]]
- [[wiki/concepts/harness-engineering.md]]
- [[wiki/summaries/2026-04-09-harness-engineering-practice.md]]
