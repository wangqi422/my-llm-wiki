#!/usr/bin/env node
/**
 * AI Daily Card — 一键生成入口
 * 
 * Usage:
 *   node run.js                    # 处理最新日报
 *   node run.js --all              # 处理所有日报
 *   node run.js <path-to-md>       # 处理指定日报
 */

const { execSync } = require('child_process');
const path = require('path');

const SCRIPT_DIR = __dirname;

console.log('╔══════════════════════════════════════════╗');
console.log('║   🎨 AI Daily Card Generator v1.0       ║');
console.log('║   1080×1920 · 9:16 · 满屏排版           ║');
console.log('╚══════════════════════════════════════════╝\n');

const args = process.argv.slice(2).join(' ');

// Step 1: 生成 HTML
console.log('📝 Step 1/2: 从日报 MD 生成 HTML 卡片...\n');
try {
  execSync(`node "${path.join(SCRIPT_DIR, 'generate-card.js')}" ${args}`, {
    stdio: 'inherit',
    cwd: SCRIPT_DIR,
  });
} catch (e) {
  console.error('❌ HTML 生成失败');
  process.exit(1);
}

// Step 2: 截图
console.log('\n📸 Step 2/2: Puppeteer 截图 → PNG...\n');
try {
  execSync(`node "${path.join(SCRIPT_DIR, 'screenshot.js')}"`, {
    stdio: 'inherit',
    cwd: SCRIPT_DIR,
  });
} catch (e) {
  console.error('❌ 截图失败（确保已安装 puppeteer: npm i puppeteer）');
  process.exit(1);
}

console.log('\n🎉 全部完成！卡片输出在 wiki/outputs/ 目录');
