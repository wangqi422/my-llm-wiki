---
title: "HappyHorse-1.0"
type: entity
created: "2026-04-11"
updated: "2026-04-13"
sources:
  - "[[raw/daily-reports/AIGC_Daily_Report_20260411.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260412.md]]"
  - "[[raw/daily-reports/AIGC_Daily_Report_20260413.md]]"
tags:
  - tool
  - ai-video
  - open-source
  - audio-sync
  - alibaba
aliases:
  - "HappyHorse"
  - "快乐马"
  - "Happy Horse AI"
---

# HappyHorse-1.0

> 首个在权威盲测中击败所有闭源巨头的开源AI视频生成模型，支持原生音视频同步。

## Info

| Field | Value |
|-------|-------|
| Type | tool / open-source AI video model |
| Domain | AI视频生成 |
| Developer | 阿里巴巴淘天集团未来生活实验室 |
| Website | https://happyhorses.io |
| GitHub | https://github.com/brooks376/Happy-Horse-1.0 |
| Launch | 2026-04-08 |
| Parameters | 150亿 |
| License | 开源 + 商用许可 |

## Overview

HappyHorse-1.0 于2026年4月8日横空出世，在 Artificial Analysis Video Arena 排行榜上文本生视频和图片生视频双项登顶（1355分），领先第二名 Seedance 2.0 达76分。采用创新的"单流Transformer架构"将文本、视频、音频token放入同一序列联合建模，实现原生音视频同步生成。支持7种语言唇形同步（WER仅14.6%），在H100上5秒1080p视频仅需38秒。

完全开源且允许商用，打破了顶级AI视频模型被闭源产品垄断的格局，为企业自部署提供了顶级质量的选择。

## Timeline

- **2026-04-08**: 首次发布，登顶 Artificial Analysis 排行榜
- **2026-04-09**: V2疑似曝光——V1与V2两个版本几乎同时出现在Artificial Analysis Video Arena盲测中，V2 ELO评分疑似超越V1的1355分后从榜单消失，引发社区广泛讨论
- **2026-04-12**: 社区大规模验证完成——150亿参数/单流Transformer/7语言唇形同步性能得到广泛确认；V2短暂曝光暗示阿里巴巴淘天集团正在加速迭代
- **2026-04-13**: V2 Arena双榜登顶确认——知乎深度解密V2 ELO 1357+同时刷新Text-to-Video和Image-to-Video双榜记录，确认开源视频模型首次匹配商业闭源质量。GitHub star 8000+快速增长，ComfyUI/WebUI社区生态活跃

## Key Contributions

- 首个开源模型登顶权威AI视频排行榜（超越Seedance 2.0、[[kling-3]]、[[google-veo-3]]、[[runway-gen4]]等闭源模型）
- 单流Transformer架构：文本/视频/音频统一建模
- 原生音视频同步 + 7种语言唇形同步
- DMD-2蒸馏推理（50步→8步）极大提升速度
- 完全开源+商用许可，支持企业自部署

## Technical Specs

| Spec | Value |
|------|-------|
| 参数量 | 150亿 |
| Transformer层 | 40层（4特定模态+32共享+4特定模态） |
| 最高分辨率 | 1080p |
| 生成速度 | 38秒/5秒@H100 |
| 推理步数 | 8步（DMD-2蒸馏） |
| 唇形同步语言 | 7种（中/英/粤/日/韩/德/法） |
| 最低显存 | 48GB（H100/A100推荐） |

## CODM Application

- 自部署意味着品牌资产完全不出内网，解决数据安全顾虑
- 原生音频同步让CG预告片可直接生成带音效的战斗片段
- 零API成本支持批量生产社交媒体短视频素材
- ⚠️ **限制**：1080p上限（vs [[kling-3]] 4K），自部署需48GB+显存

## Related

- [[ai-video-landscape-2026]]
- [[ai-video-production-strategy]] — 扩展为三层架构的第三层
- [[kling-3]] — 竞品对比（闭源/4K/更低成本门槛）
- [[runway-gen4]] — 竞品对比（闭源/世界模型/好莱坞级）
- [[google-veo-3]] — 竞品对比（免费/生态集成）
- [[luma-ray3]] — 竞品对比（专业HDR级 vs 开源通用级）
- [[reasoning-video-model]] — Ray3推理视频 vs HappyHorse传统扩散
- [[ltx-23]] — 第二开源4K视频选项（许可更清晰）
- [[codm-aigc-workflow]]

## Sources

- [[raw/daily-reports/AIGC_Daily_Report_20260411.md]]
- [[raw/daily-reports/AIGC_Daily_Report_20260413.md]]
- https://github.com/brooks376/Happy-Horse-1.0
- https://zhuanlan.zhihu.com/p/2025617384279479524
