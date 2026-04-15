---
name: daily-card
description: "每日速报卡片生成 Skill：从 AIGC 日报 MD 文件自动提取 TOP N 并生成 1080×1920 满屏 9:16 卡片。触发词：daily-card / 生成卡片 / 速报卡片 / 日报卡片。本 Skill 是 CODEBUDDY.md §10 日报消化协议的视觉输出扩展。"
---

# Skill: Daily Card（每日速报卡片生成）

> **触发词**: `daily-card` / `生成卡片` / `速报卡片` / `日报卡片`
> **职责**: 从 `raw/daily-reports/AIGC_Daily_Report_YYYYMMDD.md` 自动提取 TOP N 并生成 1080×1920 满屏 9:16 卡片
> **权威来源**: 本 Skill 是 CODEBUDDY.md §10 日报消化协议的视觉输出扩展
> **自动化**: CodeBuddy Automation 每日 10:00 触发完整 Pipeline（见下方 §完整 Pipeline）

---

## 概述

本 Skill 是 AIGC 日报完整 Pipeline 的**第三阶段**（视觉输出）。完整 Pipeline：

```
Phase 1: 日报生成（E:\codebuddy-claw）
   └── 爬取 AI 新闻 → 生成 AIGC_Daily_Report_YYYYMMDD.md

Phase 2: Wiki 编译（E:\my-llm-wiki）
   └── 复制日报到 raw/daily-reports/ → ingest 12步流程 → 更新 wiki 知识图谱

Phase 3: 速报卡片生成（E:\my-llm-wiki）  ← 本 Skill
   └── 解析 MD → 分类 → 排版 HTML → Puppeteer 截图 PNG

Phase 4: Memory 更新
   └── 记录本次执行结果到 .codebuddy/automations/aigc-wiki/memory.md
```

**本 Skill 具体执行**：
1. **解析** MD 文件中的 TOP N 条目（标题、摘要、评分、标签）
2. **分类** 按领域自动归类（视频生成 / 图像设计 / Agent 平台 / 3D 音频 / 行业趋势）
3. **排版** 生成 Notion 风格 1080×1920 满屏 HTML
4. **截图** Puppeteer 输出 PNG 图片

---

## 文件结构

```
_deploy/daily-card/
├── generate-card.js    # 核心：MD → HTML 生成器
├── screenshot.js       # Puppeteer HTML → PNG 截图
└── run.js              # 一键入口脚本

wiki/outputs/
├── ai-daily-card-YYYYMMDD.html   # 生成的 HTML 卡片
├── ai-daily-card-YYYYMMDD.png    # 截图的 PNG 图片
└── _manifest.json                # 生成记录
```

---

## 使用方法

### 方法 1: 命令行

```bash
# 处理最新日报
node _deploy/daily-card/run.js

# 处理所有日报
node _deploy/daily-card/run.js --all

# 处理指定日报
node _deploy/daily-card/run.js raw/daily-reports/AIGC_Daily_Report_20260413.md
```

### 方法 2: LLM 触发

用户说 `daily-card` 或 `生成卡片` 时：

1. 读取本 Skill 文件
2. 扫描 `raw/daily-reports/` 下的日报文件，确认：
   - 有哪些未生成卡片的日报（对比 `wiki/outputs/` 已有的 HTML/PNG）
   - 如果没有新日报，告知用户"当前无新日报需要生成卡片"
3. 运行生成命令：
   - 最新一份：`node _deploy/daily-card/run.js`
   - 全部未处理：`node _deploy/daily-card/run.js --all`
   - 指定文件：`node _deploy/daily-card/run.js raw/daily-reports/AIGC_Daily_Report_YYYYMMDD.md`
4. 检查执行结果：
   - **成功**：用 `preview_url` 预览 HTML 卡片，展示给用户确认
   - **Node 未安装**：提示用户安装 Node.js，或手动执行 HTML 生成（跳过 Puppeteer 截图）
   - **Puppeteer 截图失败**：HTML 卡片仍然可用，告知用户手动截图或安装 Chrome
   - **日报格式不符**：列出无法解析的条目，提示用户检查日报格式
5. 展示生成的卡片（HTML 预览 + PNG 截图路径）

---

## 日报 MD 格式要求

生成器从以下固定格式中提取数据：

```markdown
### #N ⭐ 标题文字

| 项目 | 详情 |
|------|------|
| **主题标签** | `#Tag1` `#Tag2` |

**📝 三句话摘要**
1. 第一句...
2. 第二句...
3. 第三句...

| **加权总分** | **X.X/10** |
```

**关键提取规则**：
- 标题：`### #N ⭐ ` 后面的文字
- 摘要：`三句话摘要` 后的第 1 条作为卡片描述
- 评分：`加权总分` 或 `综合评分` 后的数值
- 标签：`主题标签` 行中的 `#xxx` 格式

---

## 卡片排版规则

### 动态适配

| 条目数 | Cover 高度 | 标题字号 | 描述字号 | 条目间距 |
|--------|-----------|---------|---------|---------|
| ≤10    | 165px     | 19px    | 14px    | 12px    |
| 11-15  | 155px     | 18.5px  | 13.5px  | 11px    |
| 16+    | 140px     | 17px    | 12.5px  | 自动计算 |

### 满屏策略
- 固定区域（Cover + Header + DataStrip + BottomBar + Footer）≈ 440px
- 剩余 1480px 均分给分类标题 + 新闻条目
- 描述文字限制 ≤55 字符，超出截断

### 视觉风格
- Notion 白底风格，Inter + Noto Sans SC 字体
- 渐变 Cover 每日按星期轮换颜色
- TOP 1 用红色渐变序号，TOP 2-3 用蓝紫渐变，其余灰色
- 评分 ≥8.8 或排名第 1 的条目带 🔥 标签
- 底部数据栏：从 TOP 5 条目中提取关键数值（如模型参数量、性能提升百分比、用户增长数），格式为"指标名 数值"，最多展示 4 个数值

---

## 质量红线

1. **条目不丢失**：日报中所有 `### #N ⭐` 条目都必须出现在卡片中
2. **不溢出**：所有内容必须在 1920px 高度内完整显示
3. **不留白**：卡片底部不能有明显空白区域（≤20px 可接受）
4. **可读性**：标题完整可读，描述不截断到乱码
5. **分类正确**：视频/图像/Agent/3D 分类不错乱
6. **错误可恢复**：如果生成的 HTML 排版异常，可手动编辑 `wiki/outputs/` 下的 HTML 文件修正后重新截图

---

## 与其他 Skill 的关系

- `ingest` → 消化日报到 wiki → 本 Skill 从同一日报生成视觉卡片
- `publish` → 可将卡片进一步美化为公众号图文
- 建议工作流：`ingest` → `daily-card` → 分享卡片到团队群
