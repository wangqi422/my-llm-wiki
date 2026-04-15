---
title: "CODM AIGC Workflow — 2026 Integrated Strategy"
type: insight
created: "2026-04-10"
updated: "2026-04-13"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260409.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
  - "[[raw/work-docs/codm-visual-style-text.md]]"
tags:
  - codm
  - aigc-workflow
  - strategy
  - production-pipeline
  - standardization
---

# CODM AIGC Workflow — 2026 Integrated Strategy

> 综合2026年4月行业动态，为CODM宣发设计团队构建的AIGC全链路工作流方案。

## Background

2026年4月，AIGC工具链在多个维度同时成熟：3D+AI混合渲染进入生产级（[[reallusion-ai-studio]]）、品牌色精准控制突破（[[wan27-image]]）、AI视频双引擎策略验证（[[runway-gen4]]+[[kling-3]]）、品牌自定义模型公测（[[adobe-firefly]]）、AI Agent生产部署加速（[[mcp-protocol]]）。这些能力的叠加使得构建CODM完整AIGC宣发管线的条件首次成熟。

**2026-04-11 更新**：本周三大信号加速了AIGC管线从"试验"到"标准化"的转变：
1. **AI视频三梯队格局确立**（[[ai-video-market-tiers]]）——工具选型有了清晰的分层指导
2. **角色一致性从"圣杯"变"标配"**（[[character-consistency-aigc]]）——核心痛点已有多种成熟方案
3. **Agent栈固化为MCP+A2A**（[[agent-stack-mcp-a2a]]）——自动化基础设施就绪

**2026-04-12 更新**：本周第二波信号将AIGC管线从"标准化"推向"全栈生产就绪"：
1. **Agent全栈成熟**：A2A v1.0稳定版+150组织+三大云落地+[[claude-managed-agents]]全托管，Agent系统不再需要自建基建
2. **AI视频一体化新选项**：[[kling-3|Kling 3.0]] [[unified-video-architecture|统一架构]]将生成/编辑/音频一体化，挑战多工具组合范式
3. **写实渲染双路径**：[[midjourney-v7|Midjourney V8]] 5倍速+原生2K + [[reallusion-ai-studio|Reallusion]]正式版 + [[nvidia-dlss-5|DLSS 5]]神经渲染

## Core Insight

**CODM宣发设计团队应建立"三层AIGC生产体系"：**

### Layer 1: 品牌基础设施层
- 用CODM品牌资产库训练 [[adobe-firefly]] 自定义模型 → 所有生成自动继承品牌DNA
- 用 [[wan27-image]] `color_palette` 锁定品牌色板 → API级色彩合规
- 建立标准反向提示词库 → 排除不符合品牌调性的元素
- **（新增）建立"CODM角色AI资产标准"**——每个角色一套标准参考图+Face-Lock配置+LoRA权重
- **（新增）遵循 [[codm-ppt-visual-style]] PPT视觉规范**——所有内部演示文稿统一使用暗黑军事科技风格（深色#151619+荧光黄#FCFF34+微软雅黑）

### Layer 2: 内容生产层
| 内容类型 | 主力工具 | 辅助工具 | 预期提速 |
|----------|----------|----------|----------|
| 赛季主KV海报 | [[reallusion-ai-studio]] 3D+AI | [[midjourney-v7]] 概念探索 | 3-5x |
| 角色立绘序列 | [[wan27-image]] 骨骼级定制 | [[leonardo-ai]] ControlNet | 5-8x |
| 品牌CG预告片 | [[runway-gen4]] 品牌级 | [[reallusion-ai-studio]] Layout | 2-3x |
| 社媒短视频 | [[kling-3]] 铺量级 | [[seedance-2]] 音乐同步 | 10x+ |
| 军事写实纹理 | [[leonardo-ai]] PhotoReal | - | 5-8x |
| **概念验证/原型** | **[[google-veo-3]] 免费层** | - | **∞ (零成本)** |
| **多语言版本** | **[[kling-3]] 5语言口型** | **[[seedance-2]] Face-Lock** | **5-10x** |
| **品牌LOGO/图标** | **[[recraft-v4]] SVG矢量** | **[[lovart-design-agent]] 全套编排** | **10x+** |
| **全套物料批量** | **[[lovart-design-agent]] Agent** | **[[recraft-v4]] 品质保障** | **5-10x** |

### Layer 3: 自动化分发层
- [[mcp-protocol]] 标准下的素材多平台适配Agent
- 品牌一致性自动检查Agent
- 效果数据自动回收Agent
- 参考 [[agent-factory-pattern]] 构建标准化Agent模板库
- **（新增）基于 [[microsoft-agent-framework|MS Agent Framework 1.0]] 构建生产级Agent系统**
- **（新增）通过 MCP Server Cards 将内部工具自动暴露给Agent生态**

## Supporting Evidence

1. From [[reallusion-ai-studio]]: 3D可控构图+AI渲染是解决"不可控vs太慢"矛盾的最佳方案
2. From [[wan27-image]]: `color_palette` API是首个模型级品牌色精准控制能力
3. From [[ai-video-dual-engine-strategy]]: Runway做品牌+Kling做铺量的双引擎已被行业验证
4. From [[aaa-game-aigc-adoption]]: Activision已公开在COD系列使用AIGC，行业背书已有
5. From [[mcp-protocol]]: AI Agent"窄范围+人机回环"模式可用于宣发流程自动化
6. **（新增）From [[ai-video-market-tiers]]: Sora关停后三梯队格局确立，制作成本下降91%**
7. **（新增）From [[google-veo-3]]: 首个免费顶级AI视频模型，零成本概念验证成为可能**
8. **（新增）From [[kling-3]]: $3亿ARR验证+6镜头连贯+5语言口型，铺量级能力全面成熟**
9. **（新增）From [[character-consistency-aigc]]: 四种成熟路径（3D锚定/参考图/Face-Lock/LoRA），"一次设定全链路复用"可行**
10. **（新增）From [[agent-stack-mcp-a2a]]: MCP+A2A双层标准栈固化，Agent系统不再是实验**
11. **（新增）From [[ai-video-quality-standards]]: 行业首次定义AI视频质量三大支柱，可直接适配为CODM内部标准**
12. **（04.13新增）From [[luma-ray3]]: 推理视频+16位HDR/EXR直接接入DaVinci/Nuke，AI视频打通专业影视后期管线**
13. **（04.13新增）From [[recraft-v4]]: HF T2I排行榜登顶+原生SVG+品牌调色板，品牌设计AI从"通用生图附属品"独立为专用赛道**
14. **（04.13新增）From [[cascadeur]]: AI Root Motion+UE Live Link将角色动画DCC到引擎反馈循环从小时级压缩到秒级**
15. **（04.13新增）From [[agent-framework-landscape-2026]]: 12强框架对比确认三协议标准化(MCP+A2A+AG-UI)为选型首要标准**
16. **（04.13新增）From [[adobe-firefly]]: AI Assistant嵌入Photoshop + 限时无限生成 = 现有Adobe工作流无缝获得AI能力**
17. **（04.13新增）From Sora倒计时: 13天App关停最终确认，四梯队替代格局清晰分化**

## Implications

1. **CODM宣发效率将实现量级提升**：从"人工为主、AI辅助"转向"AI为主、人工精修"
2. **品牌一致性反而更强**：通过自定义模型+色板API，AI比人工更能保证品牌规范
3. **团队角色转型**：设计师从"执行者"转向"AI导演/审核员"
4. **需要新的QA流程**：参考Activision教训，建立AI素材专项审核Checklist
5. **成本结构变化**：视频素材成本大幅下降（91%），品质天花板大幅上升
6. **（新增）标准化时机已到**：工具分层清晰+角色一致性成熟+Agent栈固化=建设标准化生产线的最佳窗口期
7. **（新增）零成本探索**：Veo 3.1免费层+Kling免费版使创意探索成本趋近零
8. **（04.12新增）Agent全托管时代**：[[claude-managed-agents]]证明Agent部署不再需要DevOps团队，设计师可直接通过Console配置Agent
9. **（04.12新增）一体化 vs 分层张力**：[[unified-video-architecture|统一架构]]（Kling单平台覆盖全流程）与三层架构（多工具分级组合）代表两种哲学，需A/B测试确定最优路径
10. **（04.12新增）写实渲染三路径并行**：AI生图(MJ V8 5倍速) + 3D+AI混合(Reallusion GA) + 引擎内神经渲染(DLSS 5)，品牌KV生产有了前所未有的选择空间

## 2026-04-11 关键行动项（新增）

1. **工具矩阵升级**：将 [[google-veo-3|Veo 3.1]] 和 [[seedance-2|Seedance 2.0]] 纳入评估，更新内部工具选型文档
2. **角色资产标准化**：为5-10个核心角色建立 AI 参考资产标准包（参考图+Face-Lock+LoRA）
3. **质量标准建设**：参考 [[ai-video-quality-standards|三大支柱]] 草拟 CODM AI 素材质量标准文档
4. **Agent系统架构**：确定 [[agent-stack-mcp-a2a|MCP+A2A]] 标准栈，用 [[microsoft-agent-framework|MS Agent Framework]] DevUI 原型验证"品牌审核Agent"
5. **三梯队测试**：在CODM军事场景下对 Runway / Veo 3.1 / Kling 三款工具进行 A/B 测试

## 2026-04-12 关键行动项（新增）

1. **Agent全托管PoC**：申请[[claude-managed-agents]]公测权限，用CODM品牌审核场景验证"零基建Agent"可行性
2. **统一架构评估**：用[[kling-3|Kling 3.0]]统一架构制作CODM赛季预告片Demo，对比多工具组合流程
3. **MJ V8迁移**：全团队迁移至alpha.midjourney.com，测试V8 `--hd`原生2K和文字渲染在CODM KV中的表现
4. **DLSS 5预研**：联合引擎团队评估DLSS 5在CODM引擎中的集成时间线
5. **Agent选型评审**：组织Claude Managed Agents / MS Agent Framework / Google ADK三方选型会，确保双协议(MCP+A2A)支持

## 2026-04-13 关键行动项（新增）

1. **Claude Managed Agents品牌审核PoC**：申请公测资格，配置"CODM品牌色合规检查Agent"作为首个零基建Agent
2. **设计Agent评估**：用当前赛季物料需求测试[[lovart-design-agent]]全链路输出质量，对比传统"AI生图+人工排版"工作流
3. **Recraft V4品牌测试**：用CODM品牌LOGO和色板测试[[recraft-v4]]的SVG矢量输出和品牌色还原精度
4. **开源视频权重调整**：基于HappyHorse V2 Arena #1和LTX 2.3数据，重新评估三层视频架构中自部署层的权重分配
5. **虚拟品牌大使探索**：评估[[pikastream-1]]用于CODM角色抖音直播互动的技术可行性和成本模型

## 2026-04-13 竞品动态洞察（新增）

> 来源：[[raw/daily-reports/CODM_Competitive_Daily_20260413.md]]

1. **三角洲行动联动《古墓丽影》**：跨IP联动已成FPS品类标准宣发手段，CODM需评估自身IP联动策略的节奏和视觉方案。联动角色融入军事世界观的视觉处理是设计AI可辅助的典型场景（角色风格迁移+场景融合）。
2. **三角洲行动S9前瞻直播视觉包装**：「回声」赛季围绕声波/水下核心，蓝绿色调+声波纹理的视觉方向值得CODM赛季KV参考。这类赛季主题视觉可通过[[midjourney-v7]]快速生成概念方案。
3. **Battlefield 6 Season更迭节奏**：Hunter/Prey更新包含进度系统校准+网络优化，Season视觉连续性处理手法成熟，说明长线运营FPS的Season包装已形成工业化流程。
4. **竞品宣发强度不均**：三角洲行动本周宣发强度远超其他竞品（前瞻直播+IP联动+电竞赛事），CODM当前处于宣发低谷期，需关注S4测试服内容转化为正式宣发的时间窗口。

## To Verify

- [ ] Wan2.7 `color_palette` 对CODM品牌色的实际遵循精度
- [ ] Reallusion AI Studio Beta 对CODM 3D角色的兼容性
- [ ] Adobe Firefly 自定义模型用50-100张资产训练的效果
- [ ] Kling 3.0 多镜头序列在军事场景的角色一致性
- [ ] n8n自托管Agent在内网环境的部署可行性
- [ ] **（新增）Veo 3.1 免费层在 CODM 军事场景的生成质量**
- [ ] **（新增）Seedance 2.0 Face-Lock 对 CODM 写实角色的保持精度**
- [ ] **（新增）MS Agent Framework 1.0 替代 n8n 方案的可行性和迁移成本**
- [ ] **（新增）MCP Server Cards 封装内部工具的实施方案**
- [ ] **（04.12新增）Kling 3.0统一架构vs多工具组合在CODM场景的效率-质量A/B测试结果**
- [ ] **（04.12新增）Midjourney V8 `--hd`原生2K在CODM海报印刷场景的输出质量**
- [ ] **（04.12新增）Claude Managed Agents品牌审核Agent原型的响应延迟和准确率**
- [ ] **（04.12新增）HappyHorse V2的发布时间和相比V1的质量增益**
- [ ] **（04.13新增）Recraft V4 SVG矢量输出在CODM LOGO/图标场景的还原精度**
- [ ] **（04.13新增）Lovart Design Agent对中文设计brief的理解能力和品牌还原度**
- [ ] **（04.13新增）GPT-5.4 Tool Search在CODM 50+宣发工具Agent中的实际token节省率**
- [ ] **（04.13新增）Meta Muse Spark API开放时间线及在设计稿自动评审中的表现**
- [ ] **（04.13新增）PikaStream 480p在品牌直播场景的可接受度**
- [ ] **（04.13新增）LTX 2.3 4K音视频质量在CODM宣传片中的可用性**

## Related

- [[codm-visual-guide]]
- [[game-version-visual-guide]]
- [[hybrid-3d-ai-rendering]]
- [[brand-color-control-aigc]]
- [[ai-video-dual-engine-strategy]]
- [[ai-video-market-tiers]]
- [[ai-video-quality-standards]]
- [[character-consistency-aigc]]
- [[brand-custom-ai-model]]
- [[photoreal-game-art]]
- [[mcp-protocol]]
- [[agent-factory-pattern]]
- [[agent-stack-mcp-a2a]]
- [[microsoft-agent-framework]]
- [[google-veo-3]]
- [[seedance-2]]
- [[aaa-game-aigc-adoption]]
- [[unified-video-architecture]]
- [[claude-managed-agents]]
- [[nvidia-dlss-5]]
- [[agent-framework-landscape-2026]]
- [[agent-platform-triad]]
- [[meta-muse-spark]]
- [[recraft-v4]]
- [[lovart-design-agent]]
- [[design-agent-paradigm]]
- [[design-md-pattern]] — DESIGN.md 模式：品牌视觉规范 Markdown 化
- [[pikastream-1]]
- [[realtime-ai-video-interaction]]
- [[ltx-23]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260409.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260412.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
