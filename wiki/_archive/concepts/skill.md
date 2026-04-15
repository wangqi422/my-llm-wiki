**Type**: concept
**Title**: Skill（AI 标准操作手册）
**Created**: 2026-04-09
**Updated**: 2026-04-12
**Sources**: [[raw/articles/万字长文教你如何打造自己的 Harness Engineering - KM平台.md]], [[raw/articles/obsidian-ai-orange-book-full.md]]
**Related**: [[wiki/concepts/harness-engineering.md]], [[wiki/concepts/rule.md]], [[wiki/concepts/scripts-verification.md]], [[wiki/concepts/claude-md.md]], [[wiki/concepts/obsidian-skills.md]], [[wiki/people/hua-shu.md]], [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
**Tags**: #skill #harness #sop #standardization

---

# Skill（AI 标准操作手册）

## 定义

Skill 是告诉 AI"这件事具体应该怎么做"的固定步骤。它本质上是 AI 的标准操作手册（SOP），让 AI 对高频固定动作"按剧本完成"而非"临场发挥"。

## 详细解释

适合做成 Skill 的事情有四个特征：执行步骤固定、每次都要做、做错一次就很恶心、不值得让 AI 每次重新思考。

### Rule 与 Skill 的分工

- **Rule** 只保留一句话："你必须做这件事"
- **Skill** 负责把"这件事具体怎么做"写清楚

### 做成 Skill 的好处

1. **Rule 变轻了**：以前 Rule 既讲原则又讲流程，越写越长；现在 Rule 保留红线，复杂步骤交给 Skill
2. **AI 执行稳定性变高了**：AI 不是临场理解，而是调用现成方法
3. **维护成本更低了**：修改编译流程只需改编译 Skill，不用搜索所有 Rule

### 典型 Skill 示例

- 编译 Skill（找对 MSBuild、固定配置、还原、日志输出、错误模式检查）
- 测试 Skill
- 事后验证 Skill

## 关键要点

- Skill 是 Rule 和 Scripts 之间的桥梁
- 适合执行步骤固定、高频、不容出错的动作
- 在 Harness 六层中解决"关键流程不要靠临场发挥"

### 花叔的 55 个 Skills 实战体系

[[wiki/people/hua-shu.md|花叔]] 在内容创作实践中积累了 55 个 Skills，分三类 — [[raw/articles/obsidian-ai-orange-book-full.md]]：

1. **人物视角**（20+ 个）：将费曼、芒格、纳瓦尔、塔勒布、Karpathy、Paul Graham 等思想者的思维方式和表达风格蒸馏成 Skills。项目名「女娲」，GitHub 6000+ 星
2. **内容创作**：从选题、调研、写初稿、三审三校、配图、排版到发布公众号/X/小红书，每个环节对应一个 Skill
3. **工具类**：PDF 生成、视频素材分析、弹幕生成、飞书文档操作、图片上传图床

### 自定义 Skill 开发要点

写自定义 Skill 不需要会编程，它就是自然语言指令 — [[raw/articles/obsidian-ai-orange-book-full.md]]：
- **触发条件要明确**：「当我说XX的时候」比「你觉得合适的时候」好
- **操作范围要限定**：「读取 raw/ 目录下的文件」比「读取所有文件」好
- **输出格式要指定**：给 AI 模板才能保持一致性
- **先小范围测试**：几个文件试效果，满意再推广

## Related

- [[wiki/concepts/rule.md]]
- [[wiki/concepts/harness-engineering.md]]
- [[wiki/concepts/scripts-verification.md]]
- [[wiki/concepts/claude-md.md]]
- [[wiki/concepts/obsidian-skills.md]]
- [[wiki/people/hua-shu.md]]
- [[wiki/summaries/2026-04-09-harness-engineering-practice.md]]
- [[wiki/summaries/2026-04-11-obsidian-ai-second-brain.md]]
