**Type**: concept
**Title**: dev-map 与任务看板（项目级知识库）
**Created**: 2026-04-09
**Updated**: 2026-04-09
**Sources**: [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]]
**Related**: [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/sub-agent.md]], [[wiki/concepts/workflow.md]]
**Tags**: #dev-map #task-board #project-context #harness #knowledge

---

# dev-map 与任务看板（项目级知识库）

## 定义

dev-map（开发导航地图）和任务看板是给 AI 配的"项目级记忆"——不是百科全书，而是一套够准的索引，让 AI 知道"这座工程从哪读起"。

## 详细解释

### dev-map：开发侧的导航

由**开发 Agent** 在干活过程中维护（谁改地貌，谁改地图）。它记录：

| 内容 | 作用 |
|------|------|
| 某个功能落在哪些文件 | 快速定位 |
| 某类服务怎么接入 | 避免重复造轮子 |
| 某类配置在哪定义 | 减少搜索时间 |
| 改一个模块牵动哪些链路 | 影响面评估 |
| 项目里的标准写法 | 保持一致性 |

核心就一条：**先搞清这里已经长成了什么样，再下手。**

仓库很大时，dev-map 可以拆成好几本薄册子，每本封面写清管哪一片。

### 任务看板：需求侧的总览

由 **PM** 维护，记录：当前有哪些任务在做、每个任务进行到哪个阶段、对应文档目录在哪、已完成任务的交付结论。

新的需求分析 Agent 进来时，先看一眼看板就能知道：是不是旧需求延续、有没有类似任务做过、上一轮设计怎么定的。

### 两者分工

| 模块 | 维护者 | 解决什么 | 像什么 |
|------|--------|---------|--------|
| dev-map | 开发 Agent | 代码结构从哪进门 | 开发导航图 |
| 任务看板 | PM | 需求和任务历史从哪进门 | 项目态势板 |

## 关键要点

- 不是堆字数的百科全书，而是索引
- 谁动代码谁改地图，实现 AI 闭环更新
- 项目越大、历史越长，这一层越重要
- 持续迭代阶段才需要，不必一开始就搭

## Related

- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/workflow.md]]
- [[wiki/concepts/sub-agent.md]]
- [[wiki/summaries/2026-04-09-harness-engineering-practice.md]]
