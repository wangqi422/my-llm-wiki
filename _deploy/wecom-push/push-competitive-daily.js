/**
 * CODM 竞品日报 → 企业微信群推送 v2.0
 * 
 * 精简推送：直接从竞品日报 MD 提取精简 Markdown 摘要 + 9:16 PNG 长图
 * 
 * 使用方式：
 *   node push-competitive-daily.js                          # 推送最新竞品日报
 *   node push-competitive-daily.js --date 20260416          # 推送指定日期
 *   node push-competitive-daily.js --dry-run                # 预览推送内容
 *   node push-competitive-daily.js --webhook <url>          # 指定 Webhook
 * 
 * 推送内容：
 *   1. 精简 Markdown 文字摘要（≤4096 字节）
 *   2. 9:16 PNG 长图卡片（1080×1920，≤2MB）
 * 
 * 摘要包含：标题 → 概览一句话 → 竞品要点（每个1-2句）→ CODM 运营启发 → 链接
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

// ── 配置 ──────────────────────────────────────────
const WIKI_ROOT = path.resolve(__dirname, '..', '..');
let configWebhook = '';
let configGitPages = 'https://wangqi422.github.io/my-llm-wiki';

try {
  const configPath = path.join(__dirname, 'config.json');
  if (fs.existsSync(configPath)) {
    const cfg = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    configWebhook = cfg.webhook || '';
    if (cfg.githubPagesBase) configGitPages = cfg.githubPagesBase;
  }
} catch (e) { /* ignore */ }

const DEFAULT_WEBHOOK = process.env.WECOM_WEBHOOK || configWebhook;
const GITHUB_PAGES_BASE = process.env.GITHUB_PAGES_BASE || configGitPages;

// ── 路径解析辅助 ───────────────────────────────────
function collectReportDates(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath)
    .map(fileName => fileName.match(/^CODM_Competitive_Daily_(\d{8})\.md$/))
    .filter(Boolean)
    .map(match => match[1]);
}

function resolveLatestReportDate() {
  const rawDir = path.join(WIKI_ROOT, 'raw', 'daily-reports');
  const docsDir = path.join(WIKI_ROOT, 'docs', 'competitive-daily');
  const dates = new Set([
    ...collectReportDates(rawDir),
    ...collectReportDates(docsDir),
  ]);

  const latestDate = Array.from(dates).sort().reverse()[0];
  if (latestDate) return latestDate;

  const today = new Date();
  return `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
}

function resolveMdPath(dateStr) {
  const candidates = [
    path.join(WIKI_ROOT, 'raw', 'daily-reports', `CODM_Competitive_Daily_${dateStr}.md`),
    path.join(WIKI_ROOT, 'docs', 'competitive-daily', `CODM_Competitive_Daily_${dateStr}.md`),
  ];

  return candidates.find(filePath => fs.existsSync(filePath)) || null;
}

// ── 参数解析 ──────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const config = { date: null, webhook: DEFAULT_WEBHOOK, dryRun: false };
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--date' && args[i + 1]) {
      config.date = args[i + 1].replace(/-/g, '');
      i++;
    } else if (args[i] === '--webhook' && args[i + 1]) {
      config.webhook = args[i + 1];
      i++;
    } else if (args[i] === '--dry-run') {
      config.dryRun = true;
    }
  }
  
  if (!config.date) {
    config.date = resolveLatestReportDate();
  }
  
  return config;
}


// ── 从 MD 源文件提取精简推送摘要 ──────────────────
function extractPushMarkdown(mdContent, dateStr) {
  const lines = [];
  const mdLines = mdContent.split('\n');
  
  const formattedDate = `${dateStr.slice(0, 4)}.${dateStr.slice(4, 6)}.${dateStr.slice(6, 8)}`;
  lines.push(`**🎯 CODM 竞品日报 | ${formattedDate}**`);
  lines.push('');

  // ── 1. 概览摘要（提取第一段，截断到 120 字）──
  const overviewStart = mdLines.findIndex(l => l.match(/^## 📊|^## .*概览/));
  if (overviewStart >= 0) {
    let overview = '';
    let j = overviewStart + 1;
    while (j < mdLines.length && !mdLines[j].startsWith('##') && !mdLines[j].startsWith('---')) {
      const line = mdLines[j].trim();
      if (line && !line.startsWith('|') && !line.startsWith('>')) {
        overview += (overview ? ' ' : '') + line.replace(/\*\*/g, '');
      }
      j++;
    }
    if (overview) {
      if (overview.length > 150) overview = overview.slice(0, 147) + '...';
      lines.push(`> ${overview}`);
      lines.push('');
    }
  }

  // ── 2. 竞品要点（每个竞品：名称 + 威胁等级 + 最关键 1 句 + 来源链接）──
  const compRegex = /^## .{1,4}\s+(.+)/;
  const skipSections = ['今日概览', '运营洞察', '数据速览', '宣发强度', '宣发节奏'];
  const competitors = [];
  
  for (let i = 0; i < mdLines.length; i++) {
    const compMatch = mdLines[i].match(compRegex);
    if (!compMatch) continue;
    
    const name = compMatch[1].trim();
    if (skipSections.some(s => name.includes(s))) continue;
    if (name.length < 2) continue;
    
    let topHighlight = '';
    let threatLevel = 'normal';
    const sourceLinks = [];
    let j = i + 1;
    let inSourceBlock = false;
    
    while (j < mdLines.length && !mdLines[j].match(/^## /)) {
      const line = mdLines[j].trim();
      
      // 检测来源区块
      if (line.match(/^来源[：:]/)) {
        inSourceBlock = true;
        j++;
        continue;
      }
      
      // 提取来源链接（- https://... 格式）
      if (inSourceBlock && line.startsWith('- ')) {
        const url = line.replace(/^- /, '').trim();
        if (url.startsWith('http')) {
          sourceLinks.push(url);
        }
        j++;
        continue;
      }
      
      // 遇到空行或其他内容结束来源区块
      if (inSourceBlock && line && !line.startsWith('- ')) {
        inSourceBlock = false;
      }
      
      if (!inSourceBlock && line.startsWith('- ') && !line.match(/^### /)) {
        const text = line.replace(/^- /, '').replace(/\*\*/g, '').trim();
        if (text.includes('🔥🔥🔥') || text.includes('🔥🔥')) {
          threatLevel = 'critical';
          if (!topHighlight) topHighlight = text.replace(/🔥/g, '').trim();
        } else if (text.includes('🔥')) {
          if (threatLevel !== 'critical') threatLevel = 'warning';
          if (!topHighlight) topHighlight = text.replace(/🔥/g, '').trim();
        } else if (!topHighlight) {
          topHighlight = text;
        }
      }
      j++;
    }
    
    // 截断高亮内容
    if (topHighlight.length > 80) topHighlight = topHighlight.slice(0, 77) + '...';
    
    const threatTag = threatLevel === 'critical' ? ' 🔴' 
      : threatLevel === 'warning' ? ' 🟡' : '';
    
    competitors.push({ name, threatTag, topHighlight, sourceLinks });
  }
  
  if (competitors.length > 0) {
    lines.push('**📋 竞品动态**');
    for (const comp of competitors) {
      lines.push(`**${comp.name}**${comp.threatTag}`);
      if (comp.topHighlight) {
        lines.push(`> ${comp.topHighlight}`);
      }
      // 附上一手来源链接（取第一条，避免推送过长）
      if (comp.sourceLinks.length > 0) {
        lines.push(`[📎 来源](${comp.sourceLinks[0]})`);
      }
    }
    lines.push('');
  }

  // ── 3. CODM 运营启发（核心差异化内容）──
  const insightStart = mdLines.findIndex(l => l.match(/^## .*运营洞察|^## 💡/));
  if (insightStart >= 0) {
    const codmInsights = [];
    let j = insightStart + 1;
    let currentTitle = '';
    let currentInsights = [];
    
    while (j < mdLines.length && !mdLines[j].match(/^## .*数据速览|^## 📈/)) {
      const line = mdLines[j].trim();
      
      // ### N. 标题
      const titleMatch = line.match(/^### \d+\.\s+(.+)/);
      if (titleMatch) {
        if (currentTitle && currentInsights.length > 0) {
          codmInsights.push({ title: currentTitle, insights: currentInsights });
        }
        currentTitle = titleMatch[1].replace(/\*\*/g, '');
        currentInsights = [];
      }
      
      // 对 CODM 的启示
      if (line.match(/对 CODM 的启示/)) {
        j++;
        while (j < mdLines.length && mdLines[j].trim().startsWith('- ')) {
          let insight = mdLines[j].trim().replace(/^- /, '').replace(/\*\*/g, '');
          if (insight.length > 90) insight = insight.slice(0, 87) + '...';
          currentInsights.push(insight);
          j++;
        }
        continue;
      }
      
      j++;
    }
    
    if (currentTitle && currentInsights.length > 0) {
      codmInsights.push({ title: currentTitle, insights: currentInsights });
    }
    
    if (codmInsights.length > 0) {
      lines.push('**💡 CODM 运营启发**');
      for (const ci of codmInsights.slice(0, 3)) {
        let title = ci.title;
        if (title.length > 35) title = title.slice(0, 32) + '...';
        lines.push(`<font color="warning">${title}</font>`);
        for (const insight of ci.insights.slice(0, 2)) {
          lines.push(`> ${insight}`);
        }
      }
      lines.push('');
    }
  }

  // ── 4. Footer ──
  lines.push('---');
  lines.push('*J3 宣发设计组 · 小柒运营日报*');
  
  // HTML 链接
  const pageUrl = `${GITHUB_PAGES_BASE}/docs/competitive-daily/competitive-daily-card-${dateStr}.html`;
  lines.push(`[👉 查看完整日报](${pageUrl})`);
  
  let markdown = lines.join('\n');
  
  // 字节限制检查（企微 Markdown 限制 4096 字节）
  const mdBytes = Buffer.byteLength(markdown, 'utf-8');
  if (mdBytes > 4096) {
    console.warn(`⚠️  Markdown ${mdBytes} 字节超过 4096 限制，截断竞品详情`);
    // 保留标题+概览+运营启发，截掉竞品详情
    const insightIdx = markdown.indexOf('**💡 CODM 运营启发**');
    const footerIdx = markdown.indexOf('---\n*J3 宣发设计组');
    if (insightIdx > 0 && footerIdx > 0) {
      const header = markdown.slice(0, markdown.indexOf('**📋 竞品动态**') || insightIdx);
      const insights = markdown.slice(insightIdx, footerIdx);
      const footer = markdown.slice(footerIdx);
      markdown = header + insights + '\n' + footer;
    }
  }
  
  return markdown;
}

// ── 发送 Markdown 消息 ────────────────────────────
function sendMarkdown(webhookUrl, markdown) {
  return sendToWecom(webhookUrl, {
    msgtype: 'markdown',
    markdown: { content: markdown }
  });
}

// ── 发送图片消息 ──────────────────────────────────
function sendImage(webhookUrl, imagePath) {
  const imageData = fs.readFileSync(imagePath);
  
  if (imageData.length > 2 * 1024 * 1024) {
    throw new Error(`图片大小 ${(imageData.length / 1024 / 1024).toFixed(1)}MB 超过企业微信 2MB 限制`);
  }
  
  const base64 = imageData.toString('base64');
  const md5 = crypto.createHash('md5').update(imageData).digest('hex');
  
  return sendToWecom(webhookUrl, {
    msgtype: 'image',
    image: { base64, md5 }
  });
}

// ── 通用发送 ──────────────────────────────────────
function sendToWecom(webhookUrl, payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const url = new URL(webhookUrl);
    
    const options = {
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };
    
    const client = url.protocol === 'https:' ? https : http;
    
    const req = client.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          if (result.errcode === 0) {
            resolve(result);
          } else {
            reject(new Error(`企业微信返回错误: ${result.errmsg} (errcode: ${result.errcode})`));
          }
        } catch (e) {
          reject(new Error(`解析响应失败: ${body}`));
        }
      });
    });
    
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// ── Git Push ──────────────────────────────────────
function gitPush(dateStr) {
  const docsDir = 'docs/competitive-daily';
  try {
    console.log(`📤 Git push: ${docsDir}/`);
    execSync(`git add "${docsDir}/"`, { cwd: WIKI_ROOT, stdio: 'pipe' });
    
    const status = execSync(`git status --porcelain "${docsDir}/"`, { cwd: WIKI_ROOT, encoding: 'utf-8' });
    if (!status.trim()) {
      console.log(`   ℹ️  无新文件需要提交`);
      return true;
    }
    
    execSync(`git commit -m "daily: CODM Competitive ${dateStr}"`, { cwd: WIKI_ROOT, stdio: 'pipe' });
    execSync(`git push origin main`, { cwd: WIKI_ROOT, stdio: 'pipe' });
    console.log(`   ✅ 已推送到 GitHub`);
    return true;
  } catch (err) {
    console.warn(`   ⚠️  Git push 失败: ${err.message}`);
    return false;
  }
}

// ── 主流程 ───────────────────────────────────────
async function main() {
  const config = parseArgs();
  const dateFmt = `${config.date.slice(0, 4)}.${config.date.slice(4, 6)}.${config.date.slice(6, 8)}`;
  
  console.log(`\n🎯 CODM 竞品日报推送 v2.0`);
  console.log('─'.repeat(50));
  console.log(`📅 日期: ${dateFmt}`);
  console.log(`🔧 模式: ${config.dryRun ? 'Dry Run（仅预览）' : '正式推送'}`);
  
  // 1. 定位 MD 源文件
  const mdPath = resolveMdPath(config.date);
  if (!mdPath) {
    console.error(`\n❌ 找不到竞品日报 MD: CODM_Competitive_Daily_${config.date}.md`);
    console.error('   已检查 raw/daily-reports/ 与 docs/competitive-daily/');
    process.exit(1);
  }
  console.log(`📄 MD: ${path.relative(WIKI_ROOT, mdPath).replace(/\\/g, '/')}`);
  if (mdPath.includes(`${path.sep}docs${path.sep}competitive-daily${path.sep}`)) {
    console.warn('⚠️  当前使用 docs/competitive-daily/ 下的 MD 作为回退源文件');
  }

  
  // 2. 定位 PNG 卡片
  const pngPath = path.join(WIKI_ROOT, 'docs', 'competitive-daily', `competitive-daily-card-${config.date}.png`);
  const pngFallback = path.join(WIKI_ROOT, 'wiki', 'outputs', `competitive-daily-card-${config.date}.png`);
  const finalPngPath = fs.existsSync(pngPath) ? pngPath : (fs.existsSync(pngFallback) ? pngFallback : null);
  
  if (finalPngPath) {
    const pngSize = fs.statSync(finalPngPath).size;
    console.log(`📸 PNG: ${path.basename(finalPngPath)} (${(pngSize / 1024).toFixed(0)} KB)`);
    if (pngSize > 2 * 1024 * 1024) {
      console.error(`❌ 图片 ${(pngSize / 1024 / 1024).toFixed(1)}MB 超过企业微信 2MB 限制！`);
      process.exit(1);
    }
  } else {
    console.warn(`⚠️  未找到 PNG 卡片，将只推送文字摘要`);
    console.warn(`   请先运行: node _deploy/daily-card/run-competitive.js --date ${config.date}`);
  }
  
  // 3. 从 MD 提取精简推送摘要
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const markdown = extractPushMarkdown(mdContent, config.date);
  
  console.log('\n📝 推送文字预览：');
  console.log('═'.repeat(50));
  console.log(markdown);
  console.log('═'.repeat(50));
  console.log(`📏 字节数: ${Buffer.byteLength(markdown, 'utf-8')} / 4096`);
  
  // 4. Dry Run 模式
  if (config.dryRun) {
    console.log('\n🧪 Dry Run 完成！以上是将要推送的内容。');
    console.log(`   推送顺序: Markdown 文字摘要 → PNG 长图卡片 (9:16)`);
    if (finalPngPath) console.log(`   图片: ${path.basename(finalPngPath)}`);
    return;
  }
  
  // 5. 检查 Webhook
  if (!config.webhook || config.webhook.includes('YOUR_KEY_HERE')) {
    console.error('\n❌ 未配置有效的 Webhook 地址！');
    console.log('   方法 1: 编辑 _deploy/wecom-push/config.json 填入 webhook key');
    console.log('   方法 2: 设置环境变量 WECOM_WEBHOOK=<url>');
    console.log('   方法 3: 命令行参数 --webhook <url>');
    process.exit(1);
  }
  
  // 6. Git push 到 GitHub
  console.log(`\n📤 上传到 GitHub...`);
  gitPush(config.date);
  
  // 7. 正式推送
  console.log(`\n🚀 开始推送到企业微信...`);
  
  try {
    // 先发 Markdown 文字摘要
    console.log(`   📝 发送精简文字摘要...`);
    await sendMarkdown(config.webhook, markdown);
    console.log(`   ✅ 文字摘要发送成功`);
    
    // 等 1 秒避免消息乱序
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 再发 9:16 长图
    if (finalPngPath) {
      console.log(`   📸 发送 9:16 长图卡片...`);
      await sendImage(config.webhook, finalPngPath);
      console.log(`   ✅ 长图发送成功`);
    }
    
    console.log(`\n🎉 竞品日报推送完成！`);
    console.log(`   ✅ 精简 Markdown 摘要已发送`);
    if (finalPngPath) console.log(`   ✅ 9:16 PNG 长图已发送 (280KB)`);
    console.log(`   🔗 HTML: ${GITHUB_PAGES_BASE}/docs/competitive-daily/competitive-daily-card-${config.date}.html`);
    
  } catch (err) {
    console.error(`\n❌ 推送失败: ${err.message}`);
    process.exit(1);
  }
}

main();
