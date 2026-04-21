#!/usr/bin/env node
/**
 * CODM 竞品日报卡片生成器（9:16 长图版）
 * 
 * 从 CODM_Competitive_Daily_YYYYMMDD.md 提取竞品情报，
 * 生成固定 1080×1920 的 Dark Ops 风格卡片 HTML，用于截图推送。
 * 
 * Usage:
 *   node generate-competitive-card.js                          # 自动查找最新竞品日报
 *   node generate-competitive-card.js <path-to-md>             # 指定日报
 *   node generate-competitive-card.js --date 20260416          # 指定日期
 */

const fs = require('fs');
const path = require('path');

// ─── 配置 ───
const WIKI_ROOT = path.resolve(__dirname, '../../');
const RAW_DIR = path.join(WIKI_ROOT, 'raw', 'daily-reports');
const OUTPUT_DIR = path.join(WIKI_ROOT, 'wiki', 'outputs');

const WEEKDAY_CN = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

// ─── 竞品配色 ───
const COMPETITOR_COLORS = {
  '三角洲行动': { accent: '#FFE600', bg: 'rgba(255,230,0,0.06)', border: 'rgba(255,230,0,0.4)', icon: '🎯' },
  '暗区突围': { accent: '#00E5FF', bg: 'rgba(0,229,255,0.06)', border: 'rgba(0,229,255,0.3)', icon: '🏙️' },
  '使命召唤手游': { accent: '#FF6B35', bg: 'rgba(255,107,53,0.06)', border: 'rgba(255,107,53,0.3)', icon: '🔫' },
  'CODM': { accent: '#FF6B35', bg: 'rgba(255,107,53,0.06)', border: 'rgba(255,107,53,0.3)', icon: '🔫' },
  'Battlefield': { accent: '#4CAF50', bg: 'rgba(76,175,80,0.06)', border: 'rgba(76,175,80,0.3)', icon: '🪖' },
  'default': { accent: '#888888', bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.15)', icon: '📋' },
};

// ─── 解析竞品日报 MD ───
function parseCompetitiveReport(mdContent, filePath) {
  const lines = mdContent.split('\n');
  
  // 提取日期
  const dateMatch = filePath.match(/(\d{4})(\d{2})(\d{2})/);
  const year = dateMatch ? dateMatch[1] : '2026';
  const month = dateMatch ? dateMatch[2] : '04';
  const day = dateMatch ? dateMatch[3] : '01';
  const dateObj = new Date(`${year}-${month}-${day}`);
  const weekdayCN = WEEKDAY_CN[dateObj.getDay()];

  // 提取今日概览（第一段摘要文字）
  let overview = '';
  const overviewStart = lines.findIndex(l => l.match(/^## 📊|^## .*概览/));
  if (overviewStart >= 0) {
    let j = overviewStart + 1;
    while (j < lines.length && !lines[j].startsWith('##') && !lines[j].startsWith('---')) {
      const line = lines[j].trim();
      if (line && !line.startsWith('|') && !line.startsWith('>')) {
        overview += (overview ? ' ' : '') + line.replace(/\*\*/g, '');
      }
      j++;
    }
  }

  // 提取竞品板块（## 🔫 三角洲行动 / ## 🏙️ 暗区突围 / ## 📱 CODM）
  const competitors = [];
  // 匹配 ## + emoji + 竞品名，排除已知非竞品板块（概览/洞察/数据）
  const compRegex = /^## .{1,4}\s+(.+)/;
  const skipSections = ['今日概览', '运营洞察', '数据速览'];
  
  for (let i = 0; i < lines.length; i++) {
    const compMatch = lines[i].match(compRegex);
    if (!compMatch) continue;
    
    const name = compMatch[1].trim();
    // 跳过非竞品板块
    if (skipSections.some(s => name.includes(s))) continue;
    // 跳过没有内容的板块
    if (name.length < 2) continue;
    
    const highlights = [];
    const insights = [];
    let threatLevel = 'normal'; // normal / warning / critical
    
    // 收集该竞品的关键信息
    let j = i + 1;
    let inInsight = false;
    
    while (j < lines.length && !lines[j].match(/^## /)) {
      const line = lines[j].trim();
      
      // 检测运营洞察子标题
      if (line.match(/^### 运营洞察/)) {
        inInsight = true;
        j++;
        continue;
      }
      
      // 普通要点（带 🔥 标记的优先级更高）
      if (line.startsWith('- ') && !inInsight) {
        const text = line.replace(/^- /, '').replace(/\*\*/g, '').trim();
        if (text.includes('🔥🔥🔥') || text.includes('🔥🔥')) {
          threatLevel = 'critical';
          highlights.unshift(text.replace(/🔥/g, '').trim());
        } else if (text.includes('🔥')) {
          if (threatLevel !== 'critical') threatLevel = 'warning';
          highlights.push(text.replace(/🔥/g, '').trim());
        } else if (highlights.length < 3) {
          highlights.push(text);
        }
      }
      
      // 运营洞察要点
      if (line.startsWith('- ') && inInsight) {
        insights.push(line.replace(/^- /, '').replace(/\*\*/g, '').trim());
      }
      
      j++;
    }
    
    competitors.push({
      name,
      highlights: highlights.slice(0, 3),
      insights: insights.slice(0, 2),
      threatLevel,
    });
  }

  // 提取 💡 运营洞察 / CODM 启示板块
  const codmInsights = [];
  const insightStart = lines.findIndex(l => l.match(/^## .*运营洞察|^## 💡/));
  if (insightStart >= 0) {
    let j = insightStart + 1;
    let currentTitle = '';
    let currentCodm = '';
    
    while (j < lines.length && !lines[j].match(/^## .*数据速览|^## 📈/)) {
      const line = lines[j].trim();
      
      // ### N. 标题
      const titleMatch = line.match(/^### \d+\.\s+(.+)/);
      if (titleMatch) {
        if (currentTitle && currentCodm) {
          codmInsights.push({ title: currentTitle, insight: currentCodm });
        }
        currentTitle = titleMatch[1].replace(/\*\*/g, '');
        currentCodm = '';
      }
      
      // 对 CODM 的启示
      if (line.match(/对 CODM 的启示/)) {
        j++;
        while (j < lines.length && lines[j].trim().startsWith('- ')) {
          currentCodm += (currentCodm ? '\n' : '') + lines[j].trim().replace(/^- /, '').replace(/\*\*/g, '');
          j++;
        }
        continue;
      }
      
      j++;
    }
    
    if (currentTitle && currentCodm) {
      codmInsights.push({ title: currentTitle, insight: currentCodm });
    }
  }

  // 提取宣发节奏对比表格
  let tempoData = [];
  const tempoStart = lines.findIndex(l => l.match(/宣发节奏对比/));
  if (tempoStart >= 0) {
    let j = tempoStart + 1;
    while (j < lines.length && !lines[j].startsWith('---') && !lines[j].startsWith('##')) {
      const line = lines[j].trim();
      // 解析表格行：| 竞品 | 阶段 | 事件 | 强度 |
      if (line.startsWith('|') && !line.includes('---') && !line.includes('竞品') && !line.includes('------')) {
        const cols = line.split('|').filter(c => c.trim()).map(c => c.trim());
        if (cols.length >= 3) {
          tempoData.push({
            name: cols[0].replace(/\*\*/g, ''),
            phase: cols[1],
            event: cols[2],
            intensity: (cols[3] || '').match(/⭐/g)?.length || 0,
          });
        }
      }
      j++;
    }
  }

  return {
    year, month, day, weekdayCN, dateObj,
    overview: overview.slice(0, 200),
    competitors,
    codmInsights: codmInsights.slice(0, 3),
    tempoData: tempoData.slice(0, 4),
  };
}

// ─── 截断文本 ───
function truncate(text, maxLen) {
  if (!text) return '';
  text = text.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  if (text.length > maxLen) return text.slice(0, maxLen - 1) + '…';
  return text;
}

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ─── 生成 HTML ───
function generateHTML(data) {
  const { year, month, day, weekdayCN, competitors, codmInsights, tempoData, overview } = data;
  
  // 竞品卡片 HTML
  let competitorCards = '';
  for (const comp of competitors.slice(0, 4)) {
    // 模糊匹配竞品颜色
    let colors = COMPETITOR_COLORS['default'];
    for (const [key, val] of Object.entries(COMPETITOR_COLORS)) {
      if (key !== 'default' && comp.name.includes(key)) {
        colors = val;
        break;
      }
    }
    const threatLabel = comp.threatLevel === 'critical' ? 'HIGH THREAT' 
      : comp.threatLevel === 'warning' ? 'ACTIVE' : 'NORMAL';
    const threatClass = comp.threatLevel === 'critical' ? 'threat-critical' 
      : comp.threatLevel === 'warning' ? 'threat-warning' : 'threat-normal';
    
    let highlightsHtml = comp.highlights.slice(0, 3).map(h => 
      `<div class="comp-highlight">${escapeHtml(truncate(h, 80))}</div>`
    ).join('');
    
    competitorCards += `
      <div class="comp-card" style="border-left-color: ${colors.accent};">
        <div class="comp-header">
          <span class="comp-icon">${colors.icon}</span>
          <span class="comp-name">${escapeHtml(comp.name)}</span>
          <span class="comp-threat ${threatClass}">${threatLabel}</span>
        </div>
        ${highlightsHtml}
      </div>`;
  }

  // 宣发节奏条 HTML
  let tempoHtml = '';
  if (tempoData.length > 0) {
    tempoHtml = tempoData.map(t => {
      const stars = '⭐'.repeat(Math.min(t.intensity, 5));
      const barWidth = Math.min(t.intensity * 20, 100);
      return `
        <div class="tempo-row">
          <span class="tempo-name">${escapeHtml(truncate(t.name, 10))}</span>
          <div class="tempo-bar-bg">
            <div class="tempo-bar-fill" style="width:${barWidth}%"></div>
          </div>
          <span class="tempo-stars">${stars || '—'}</span>
        </div>`;
    }).join('');
  }

  // CODM 运营启发 HTML
  let insightsHtml = '';
  if (codmInsights.length > 0) {
    insightsHtml = codmInsights.map((ci, idx) => `
      <div class="insight-item">
        <span class="insight-num">${idx + 1}</span>
        <div class="insight-body">
          <div class="insight-title">${escapeHtml(truncate(ci.title, 40))}</div>
          <div class="insight-text">${escapeHtml(truncate(ci.insight, 120))}</div>
        </div>
      </div>`
    ).join('');
  }

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=1080">
<title>CODM 竞品日报 · ${year}.${month}.${day}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+SC:wght@400;500;700;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html, body {
    width: 1080px;
    overflow: hidden;
    font-family: 'Inter', 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #0D0D0D;
    color: #FFFFFF;
  }

  .page {
    width: 1080px;
    height: 1920px;
    background: #0D0D0D;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  /* ── 背景装饰 ── */
  .page::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 400px;
    background: radial-gradient(ellipse at 50% 0%, rgba(255,230,0,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .side-mark {
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    writing-mode: vertical-lr;
    font-size: 11px;
    letter-spacing: 0.6em;
    color: rgba(255,255,255,0.04);
    font-weight: 300;
    pointer-events: none;
  }

  /* ── Cover 区 ── */
  .cover {
    height: 220px;
    padding: 40px 56px 0;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  .cover-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .cover-brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .brand-bar {
    width: 4px;
    height: 22px;
    background: #FFE600;
  }

  .brand-label {
    background: #FFE600;
    color: #0D0D0D;
    padding: 4px 14px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.06em;
  }

  .brand-sub {
    font-size: 13px;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.02em;
    margin-left: 8px;
  }

  .cover-date {
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    text-align: right;
    line-height: 1.6;
  }

  .cover-date .brand-name {
    font-weight: 600;
    color: rgba(255,255,255,0.55);
  }

  .cover-title {
    font-size: 48px;
    font-weight: 900;
    letter-spacing: -1.5px;
    line-height: 1.1;
    margin-bottom: 6px;
  }

  .cover-title .hl { color: #FFE600; }

  .cover-sub {
    font-size: 14px;
    color: rgba(255,255,255,0.6);
    letter-spacing: 0.35em;
    text-transform: uppercase;
  }

  /* ── 分隔线 ── */
  .divider {
    height: 1px;
    background: rgba(255,255,255,0.08);
    margin: 0 56px;
    flex-shrink: 0;
  }

  /* ── 概览区 ── */
  .overview {
    padding: 22px 56px 16px;
    flex-shrink: 0;
  }

  .overview-text {
    font-size: 14px;
    color: rgba(255,255,255,0.65);
    line-height: 1.7;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .overview-text .hl { color: #FFE600; font-weight: 500; }

  /* ── 威胁条 ── */
  .threat-bar {
    display: flex;
    gap: 8px;
    padding: 0 56px;
    margin-bottom: 16px;
    flex-shrink: 0;
  }

  .threat-pill {
    font-size: 11px;
    font-weight: 700;
    padding: 4px 14px;
    letter-spacing: 0.06em;
    border: 1px solid;
  }

  .threat-pill-high {
    border-color: #FF3B3B;
    color: #FF3B3B;
    background: rgba(255,59,59,0.10);
  }

  .threat-pill-mid {
    border-color: rgba(255,255,255,0.25);
    color: rgba(255,255,255,0.6);
    background: rgba(255,255,255,0.03);
  }

  /* ── 内容区 ── */
  .content {
    flex: 1;
    padding: 0 56px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .section-label {
    font-size: 12px;
    font-weight: 700;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .section-label::after {
    content: '';
    flex: 1;
    height: 0.5px;
    background: rgba(255,255,255,0.08);
  }

  /* ── 竞品卡片 ── */
  .comp-cards {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    flex-shrink: 0;
  }

  .comp-card {
    background: #141414;
    border: 0.5px solid rgba(255,255,255,0.06);
    border-left: 3px solid #888;
    padding: 16px 20px;
  }

  .comp-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .comp-icon { font-size: 16px; }

  .comp-name {
    font-size: 15px;
    font-weight: 700;
    color: #FFFFFF;
    flex: 1;
    letter-spacing: 0.01em;
  }

  .comp-threat {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 3px 10px;
    text-transform: uppercase;
  }

  .threat-critical {
    background: #FF3B3B;
    color: #FFFFFF;
  }

  .threat-warning {
    background: rgba(255,230,0,0.12);
    color: #FFE600;
    border: 0.5px solid rgba(255,230,0,0.3);
  }

  .threat-normal {
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.5);
    border: 0.5px solid rgba(255,255,255,0.1);
  }

  .comp-highlight {
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    line-height: 1.6;
    padding-left: 14px;
    position: relative;
    margin-bottom: 5px;
  }

  .comp-highlight::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 4px;
    height: 4px;
    background: rgba(255,255,255,0.2);
  }

  /* ── 宣发节奏对比 ── */
  .tempo-section {
    margin-bottom: 22px;
    flex-shrink: 0;
  }

  .tempo-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 9px;
  }

  .tempo-name {
    width: 90px;
    font-size: 12px;
    font-weight: 600;
    color: rgba(255,255,255,0.7);
    flex-shrink: 0;
    text-align: right;
  }

  .tempo-bar-bg {
    flex: 1;
    height: 6px;
    background: rgba(255,255,255,0.06);
    position: relative;
  }

  .tempo-bar-fill {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    background: linear-gradient(90deg, #FFE600, rgba(255,230,0,0.4));
  }

  .tempo-stars {
    font-size: 10px;
    width: 80px;
    flex-shrink: 0;
  }

  /* ── CODM 运营启发 ── */
  .insights-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 0;
  }

  .insights-box {
    background: rgba(255,230,0,0.03);
    border: 1px solid rgba(255,230,0,0.12);
    padding: 24px 28px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 0;
  }

  .insights-header {
    font-size: 17px;
    font-weight: 800;
    color: #FFE600;
    letter-spacing: 0.03em;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .insights-header::before {
    content: '';
    width: 4px;
    height: 18px;
    background: #FFE600;
    flex-shrink: 0;
  }

  .insight-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 6px 0;
  }

  .insight-num {
    width: 28px;
    height: 28px;
    background: rgba(255,230,0,0.12);
    color: #FFE600;
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .insight-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .insight-title {
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
    letter-spacing: 0.02em;
    margin-bottom: 0;
  }

  .insight-text {
    font-size: 14px;
    color: rgba(255,255,255,0.55);
    line-height: 1.6;
    letter-spacing: 0.01em;
  }

  /* ── Footer ── */
  .footer {
    height: 72px;
    padding: 0 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.08);
    flex-shrink: 0;
    margin-top: auto;
  }


  .footer-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .footer-dot {
    width: 8px;
    height: 8px;
    background: #FFE600;
  }

  .footer-team {
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    font-weight: 500;
  }

  .footer-team strong {
    color: rgba(255,255,255,0.6);
  }

  .footer-right {
    font-size: 11px;
    color: rgba(255,255,255,0.25);
    text-align: right;
    letter-spacing: 0.06em;
  }

  .footer-deco {
    display: flex;
    gap: 4px;
    margin-top: 4px;
    justify-content: flex-end;
  }

  .footer-sq {
    width: 6px;
    height: 6px;
    background: #FFE600;
  }

  .footer-sq:nth-child(2) { opacity: 0.4; }
  .footer-sq:nth-child(3) { opacity: 0.15; }
</style>
</head>
<body>

<div class="page">

  <div class="side-mark">CALL OF DUTY MOBILE · COMPETITIVE INTEL</div>

  <!-- Cover -->
  <div class="cover">
    <div class="cover-top">
      <div class="cover-brand">
        <span class="brand-bar"></span>
        <span class="brand-label">竞品日报</span>
        <span class="brand-sub">COMPETITIVE INTEL</span>
      </div>
      <div class="cover-date">
        <div class="brand-name">CALL OF DUTY</div>
        <div>使命召唤手游</div>
      </div>
    </div>
    <div class="cover-title">CODM 竞品<span class="hl">日报</span></div>
    <div class="cover-sub">${year}.${month}.${day} · ${weekdayCN} · DAILY INTEL</div>
  </div>

  <div class="divider"></div>

  <!-- 概览 -->
  <div class="overview">
    <div class="overview-text">${escapeHtml(overview)}</div>
  </div>

  <!-- 威胁条 -->
  <div class="threat-bar">
    ${competitors.filter(c => c.threatLevel === 'critical').length > 0 
      ? `<span class="threat-pill threat-pill-high">[ 高威胁 ×${competitors.filter(c => c.threatLevel === 'critical').length} ]</span>` : ''}
    ${competitors.filter(c => c.threatLevel === 'warning').length > 0 
      ? `<span class="threat-pill threat-pill-mid">[ 关注 ×${competitors.filter(c => c.threatLevel === 'warning').length} ]</span>` : ''}
    ${competitors.filter(c => c.threatLevel === 'normal').length > 0 
      ? `<span class="threat-pill threat-pill-mid">[ 运营中 ×${competitors.filter(c => c.threatLevel === 'normal').length} ]</span>` : ''}
  </div>

  <div class="content">

    <!-- 竞品卡片 -->
    <div class="section-label">竞品动态 · INTEL</div>
    <div class="comp-cards">
      ${competitorCards}
    </div>

    <!-- 宣发节奏对比 -->
    ${tempoData.length > 0 ? `
    <div class="tempo-section">
      <div class="section-label">宣发强度 · TEMPO</div>
      ${tempoHtml}
    </div>` : ''}

    <!-- CODM 运营启发 -->
    <div class="insights-section">
      <div class="section-label">CODM 运营启发 · ACTION ITEMS</div>
      <div class="insights-box">
        <div class="insights-header">结合竞品动态，CODM 可以这样做</div>
        ${insightsHtml || `
        <div class="insight-item">
          <span class="insight-num">—</span>
          <div class="insight-body">
            <div class="insight-text">今日竞品动态暂无显著运营启发</div>
          </div>
        </div>`}
      </div>
    </div>

  </div>

  <!-- Footer -->
  <div class="footer">
    <div class="footer-left">
      <span class="footer-dot"></span>
      <span class="footer-team"><strong>J3 宣发设计组</strong> · 小柒运营日报</span>
    </div>
    <div class="footer-right">
      ${year}.${month}.${day}<br>
      POWERED BY CODEBUDDY
      <div class="footer-deco">
        <span class="footer-sq"></span>
        <span class="footer-sq"></span>
        <span class="footer-sq"></span>
      </div>
    </div>
  </div>

</div>

</body>
</html>`;
}

// ─── 主程序 ───
function main() {
  const args = process.argv.slice(2);
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let filePath;

  // 参数处理
  const dateIdx = args.indexOf('--date');
  if (dateIdx >= 0 && args[dateIdx + 1]) {
    const dateStr = args[dateIdx + 1].replace(/-/g, '');
    filePath = path.join(RAW_DIR, `CODM_Competitive_Daily_${dateStr}.md`);
  } else if (args.length > 0 && !args[0].startsWith('--')) {
    filePath = path.resolve(args[0]);
  } else {
    // 自动查找最新竞品日报
    const allFiles = fs.readdirSync(RAW_DIR)
      .filter(f => f.startsWith('CODM_Competitive_Daily_') && f.endsWith('.md'))
      .sort();
    if (allFiles.length === 0) {
      console.error('❌ raw/daily-reports/ 下没有找到竞品日报文件');
      process.exit(1);
    }
    filePath = path.join(RAW_DIR, allFiles[allFiles.length - 1]);
  }

  if (!fs.existsSync(filePath)) {
    console.error(`❌ 文件不存在: ${filePath}`);
    process.exit(1);
  }

  console.log(`📄 解析竞品日报: ${path.basename(filePath)}`);
  const mdContent = fs.readFileSync(filePath, 'utf-8');
  const data = parseCompetitiveReport(mdContent, filePath);

  console.log(`   竞品: ${data.competitors.length} 个`);
  console.log(`   CODM 启发: ${data.codmInsights.length} 条`);
  console.log(`   宣发节奏: ${data.tempoData.length} 行`);

  const html = generateHTML(data);

  const dateStr = `${data.year}${data.month}${data.day}`;
  const htmlPath = path.join(OUTPUT_DIR, `competitive-daily-card-${dateStr}.html`);
  
  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`✅ 生成卡片 HTML: ${path.basename(htmlPath)}`);
  console.log(`   尺寸: 1080×1920 (9:16)`);
  
  return { htmlPath, dateStr, data };
}

module.exports = { parseCompetitiveReport, generateHTML, main };

if (require.main === module) {
  main();
}
