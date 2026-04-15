**Type**: concept
**Title**: SPEC（设计规格文档）
**Created**: 2026-04-09
**Updated**: 2026-04-09
**Sources**: [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]
**Related**: [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/rule.md]]
**Tags**: #spec #design #harness #requirement

---

# SPEC（设计规格文档）

## 定义

SPEC（设计规格文档）是搭建 Harness 的真正第一步——在写 Rule、拆 Agent 之前，先和 AI 反复磨透需求、目标、边界和验收标准。

## 详细解释

很多人一听到 Harness 就想先写 Rule、先拆 Agent、先上脚本。但如果一开始连"这个工程到底想怎么开发"都没说清楚，后面所有约束都会变成无源之水。

### SPEC 要解决的问题

- 这个版本到底要解决什么问题
- 哪些是核心目标，哪些只是顺手优化
- 改动会影响哪些模块
- 哪些行为必须保持兼容
- 最终什么样才算做完

### SPEC 的质量标准

最终 SPEC 必须：
- 清晰写明**所有**需求
- 指明**必要**的边界条件
- **没有**任何不确定的词语（如"建议""可以""推荐""可选"）

### SPEC 的局限

仅靠 SPEC 只能解决"知道做什么"的问题，解决不了"如何稳定地做到位"的问题。AI 不会百分百按文档执行、做完后你很难知道它做到哪了、很多错误会反复犯。这正是后续引入 Rule、Skill、Scripts 的原因。

## 关键要点

- SPEC 是 Harness 的起点，没有它后续约束都会飘
- 和 AI 反复来回是加深需求理解的过程
- SPEC 不能用模糊词，必须斩钉截铁
- 这一步偷懒，后面会用十倍时间还回来

## Related

- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/rule.md]]
- [[wiki/concepts/design-md.md]] — DESIGN.md 是 SPEC 在 UI 设计领域的具体应用
- [[wiki/summaries/2026-04-09-harness-engineering-practice.md]]
