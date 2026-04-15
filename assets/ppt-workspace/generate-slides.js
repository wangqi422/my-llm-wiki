const fs = require('fs');
const path = require('path');

const SLIDES_DIR = path.join(__dirname, 'slides');
const IMG_DIR = '/Users/catwang/Documents/my-llm-wiki/assets/images/cod-vfx-ppt';

// Common style template
const commonStyles = `
html { background: #000; }
body {
  width: 720pt; height: 405pt; margin: 0; padding: 0;
  font-family: Arial, sans-serif;
  display: flex; flex-direction: column;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
.top-bar { width: 100%; height: 3pt; background: #E33737; flex-shrink: 0; }
.header { padding: 16pt 30pt 8pt 30pt; flex-shrink: 0; }
.content { padding: 0 30pt 16pt 30pt; flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.two-col { display: flex; gap: 16pt; flex: 1; }
.col { flex: 1; display: flex; flex-direction: column; }
.col-60 { flex: 6; display: flex; flex-direction: column; }
.col-40 { flex: 4; display: flex; flex-direction: column; }
h1 { color: #FFFFFF; font-size: 22pt; margin: 0 0 4pt 0; font-weight: bold; }
h2 { color: #E33737; font-size: 13pt; margin: 0 0 6pt 0; font-weight: bold; text-transform: uppercase; letter-spacing: 1pt; }
h3 { color: #E33737; font-size: 11pt; margin: 6pt 0 4pt 0; }
p { color: #CCCCCC; font-size: 9pt; margin: 2pt 0; line-height: 1.4; }
.small { font-size: 7.5pt; color: #999999; }
.highlight { color: #E33737; font-weight: bold; }
.white { color: #FFFFFF; }
.tag { display: inline-block; background: #E33737; color: white; padding: 2pt 6pt; font-size: 7pt; margin: 1pt; border-radius: 2pt; }
.card { background: rgba(255,255,255,0.06); border-left: 2pt solid #E33737; padding: 6pt 8pt; margin: 3pt 0; border-radius: 0 4pt 4pt 0; }
.card-dark { background: rgba(255,255,255,0.03); padding: 6pt 8pt; margin: 3pt 0; border-radius: 4pt; border: 1pt solid rgba(255,255,255,0.1); }
.img-container { border-radius: 4pt; overflow: hidden; flex: 1; display: flex; align-items: center; justify-content: center; }
.img-container img { width: 100%; height: 100%; object-fit: cover; border-radius: 4pt; }
.page-num { position: absolute; bottom: 8pt; right: 16pt; color: #555; font-size: 7pt; }
.section-num { color: #E33737; font-size: 48pt; font-weight: bold; opacity: 0.15; position: absolute; right: 30pt; top: 10pt; }
`;

function slide(num, bodyBg, bodyContent, extraStyles = '') {
  return `<!DOCTYPE html>
<html><head><style>
${commonStyles}
${extraStyles}
</style></head>
<body style="background-image: url('${bodyBg}');">
${bodyContent}
<div class="page-num"><p>${String(num).padStart(2, '0')}</p></div>
</body></html>`;
}

// ===== SLIDE 1: Cover =====
const s01 = `<!DOCTYPE html>
<html><head><style>
${commonStyles}
.cover { display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 1; text-align: center; padding: 40pt; }
.cover-title { color: #FFFFFF; font-size: 30pt; font-weight: bold; margin: 0 0 8pt 0; letter-spacing: 2pt; }
.cover-sub { color: #E33737; font-size: 14pt; font-weight: bold; margin: 0 0 16pt 0; text-transform: uppercase; letter-spacing: 3pt; }
.cover-line { width: 80pt; height: 2pt; background: #E33737; margin: 0 auto 16pt auto; }
.cover-info { color: #888; font-size: 9pt; margin: 3pt 0; }
</style></head>
<body style="background-image: url('bg-cover.png');">
<div class="top-bar"></div>
<div class="cover">
  <h2 style="color: #E33737; font-size: 10pt; letter-spacing: 4pt; margin-bottom: 12pt;">INDUSTRY REPORT</h2>
  <h1 class="cover-title">使命召唤 CG 典型特效</h1>
  <h1 class="cover-title" style="font-size: 26pt;">行业分析报告</h1>
  <div class="cover-line" style="width: 80pt; height: 2pt; background: #E33737;"></div>
  <p class="cover-sub" style="font-size: 10pt; letter-spacing: 2pt;">7 大类 110+ 项特效 · 全球顶级 CG 公司 · 制作管线深度解析</p>
  <p class="cover-info">J3 宣发 1 组 · CODM 宣发团队特效认知对齐</p>
  <p class="cover-info">2026-04-11</p>
</div>
</body></html>`;

// ===== SLIDE 2: Table of Contents =====
const s02 = slide(2, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>目录</h1><h2>CONTENTS</h2></div>
<div class="content">
  <div class="two-col">
    <div class="col">
      <div class="card" style="padding: 8pt 12pt; margin: 4pt 0;">
        <p style="color: #E33737; font-size: 11pt; font-weight: bold; margin: 0;">01</p>
        <p style="color: #fff; font-size: 10pt; margin: 2pt 0 0 0;"><b>特效分类体系</b></p>
        <p class="small">7 大类 110+ 项特效完整体系</p>
      </div>
      <div class="card" style="padding: 8pt 12pt; margin: 4pt 0;">
        <p style="color: #E33737; font-size: 11pt; font-weight: bold; margin: 0;">02</p>
        <p style="color: #fff; font-size: 10pt; margin: 2pt 0 0 0;"><b>制作管线</b></p>
        <p class="small">枪火·爆炸·命中的完整制作流程</p>
      </div>
      <div class="card" style="padding: 8pt 12pt; margin: 4pt 0;">
        <p style="color: #E33737; font-size: 11pt; font-weight: bold; margin: 0;">03</p>
        <p style="color: #fff; font-size: 10pt; margin: 2pt 0 0 0;"><b>行业标杆</b></p>
        <p class="small">全球顶级 CG/VFX 公司与 COD 合作</p>
      </div>
    </div>
    <div class="col">
      <div class="card" style="padding: 8pt 12pt; margin: 4pt 0;">
        <p style="color: #E33737; font-size: 11pt; font-weight: bold; margin: 0;">04</p>
        <p style="color: #fff; font-size: 10pt; margin: 2pt 0 0 0;"><b>拉片方法论</b></p>
        <p class="small">7 维度分析框架与推荐素材</p>
      </div>
      <div class="card" style="padding: 8pt 12pt; margin: 4pt 0;">
        <p style="color: #E33737; font-size: 11pt; font-weight: bold; margin: 0;">05</p>
        <p style="color: #fff; font-size: 10pt; margin: 2pt 0 0 0;"><b>参考资源与趋势</b></p>
        <p class="small">CG 链接合集、素材库、行业趋势</p>
      </div>
      <div class="card" style="padding: 8pt 12pt; margin: 4pt 0; border-left-color: #555;">
        <p style="color: #666; font-size: 8pt; margin: 0;">📎 附带 YouTube 参考视频</p>
        <p class="small">COD 历代 CG 预告片 + 制作幕后</p>
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 3: VFX Classification Overview =====
const s03 = slide(3, 'bg-section.png', `
<div class="top-bar"></div>
<div class="header">
  <h2>CHAPTER 01</h2>
  <h1>特效分类体系</h1>
  <p style="color: #888; font-size: 9pt;">使命召唤 CG 中 7 大类 110+ 项特效完整体系</p>
</div>
<div class="content">
  <div class="section-num"><p style="color:#E33737; font-size:60pt; opacity:0.1;">01</p></div>
</div>`, `
.section-num { position: absolute; right: 30pt; bottom: 40pt; }
`);

// ===== SLIDE 4: VFX Overview Table =====
const s04 = slide(4, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>特效体系总览</h1><h2>7 Categories · 110+ VFX Elements</h2></div>
<div class="content" style="padding-top: 4pt;">
  <div id="overview-chart" class="placeholder" style="width: 660pt; height: 280pt; background: rgba(255,255,255,0.03); border-radius: 4pt;"></div>
</div>`);

// ===== SLIDE 5: Muzzle Flash =====
const s05 = slide(5, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>枪口焰三阶段生命周期</h1><h2>1.1 Muzzle Flash · 3-Phase Lifecycle</h2></div>
<div class="content">
  <div class="two-col">
    <div class="col-60">
      <div class="card" style="margin: 2pt 0;">
        <p style="color: #E33737; font-weight: bold; margin: 0;">Phase 1: 爆发期 (1-2帧)</p>
        <p>核心火焰 + 环境光照 → <b style="color:#fff;">视觉冲击力峰值</b></p>
      </div>
      <div class="card" style="margin: 2pt 0;">
        <p style="color: #E33737; font-weight: bold; margin: 0;">Phase 2: 喷射与扩散期 (2-5帧)</p>
        <p>火花 + 冲击波 + 高速烟 → <b style="color:#fff;">速度感 + 粒子动态</b></p>
      </div>
      <div class="card" style="margin: 2pt 0;">
        <p style="color: #E33737; font-weight: bold; margin: 0;">Phase 3: 消散与残留期 (10+帧)</p>
        <p>滞留烟雾 + 热扭曲 + 枪管余烟 → <b style="color:#fff;">真实感 + 空气密度</b></p>
      </div>
      <div class="card-dark" style="margin: 4pt 0 0 0;">
        <p class="small"><b style="color:#fff;">动态光照交互：</b>面部照亮(临时点光源) · 环境照亮(1-4m衰减) · 色温变化(白热→橙黄→暗红)</p>
      </div>
    </div>
    <div class="col-40">
      <div class="img-container">
        <img src="${IMG_DIR}/muzzle-flash.png">
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 6: Gun Type Comparison =====
const s06 = slide(6, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>不同枪型枪口焰差异</h1><h2>Muzzle Flash by Weapon Type</h2></div>
<div class="content" style="padding-top: 2pt;">
  <div id="gun-table" class="placeholder" style="width: 660pt; height: 285pt; background: rgba(255,255,255,0.03); border-radius: 4pt;"></div>
</div>`);

// ===== SLIDE 7: Hit Feedback =====
const s07 = slide(7, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>命中反馈系统</h1><h2>1.2 Hit Feedback · Material-Based Response</h2></div>
<div class="content">
  <div class="card-dark" style="margin: 0 0 6pt 0;">
    <p style="color: #fff; font-size: 8.5pt; text-align: center;">枪口焰 → 弹道轨迹 → <span class="highlight">命中点特效</span> → 受击动画/音效 → 伤害标识</p>
  </div>
  <div class="two-col" style="gap: 8pt;">
    <div class="col">
      <h3>统一 4 阶段模型</h3>
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">1.</span> 瞬间冲击 (1-2帧) — 白色粉尘/火花爆射</p>
      </div>
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">2.</span> 碎片飞溅 (3-10帧) — 碎块/火花径向弹射</p>
      </div>
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">3.</span> 扩散消散 (10-30帧) — 粉尘云扩散消散</p>
      </div>
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">4.</span> 残留标记 (持续) — 凹陷弹坑+辐射裂纹</p>
      </div>
    </div>
    <div class="col">
      <h3>材质命中差异</h3>
      <div class="card-dark" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">混凝土</b> — 灰白粉尘爆射+碎块+弹坑</p>
      </div>
      <div class="card-dark" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">金属</b> — 高亮橙/白火花径向弹射</p>
      </div>
      <div class="card-dark" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">木材</b> — 木屑+纤维飞散+弹孔</p>
      </div>
      <div class="card-dark" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">玻璃</b> — 辐射裂纹+透明碎片飞射</p>
      </div>
      <div class="card-dark" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">水面</b> — 水柱+水珠四散+同心圆波纹</p>
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 8: Destruction Physics =====
const s08 = slide(8, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>破坏与物理特效</h1><h2>1.2 Destruction · Voronoi Fracture Physics</h2></div>
<div class="content">
  <div class="two-col">
    <div class="col-60">
      <h3>7 种材质破碎模式</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 4pt;">
        <div class="card-dark" style="flex: 1; min-width: 140pt; padding: 4pt 6pt;">
          <p><b style="color:#E33737;">混凝土</b> — 块状碎裂+粉化，灰白粉尘</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 140pt; padding: 4pt 6pt;">
          <p><b style="color:#E33737;">砖墙</b> — 沿砖缝断裂，红褐砖尘</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 140pt; padding: 4pt 6pt;">
          <p><b style="color:#E33737;">玻璃</b> — 辐射裂纹→碎落，闪光反射</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 140pt; padding: 4pt 6pt;">
          <p><b style="color:#E33737;">金属</b> — 弯曲变形→撕裂，火花飞溅</p>
        </div>
      </div>
      <h3>技术流程</h3>
      <div class="card" style="padding: 5pt 8pt;">
        <p class="small"><b style="color:#fff;">离线：</b>原始模型 → Voronoi碎片生成 → 碎片LOD</p>
        <p class="small"><b style="color:#fff;">运行时：</b>伤害触发 → 碎片激活+初速度 → 刚体物理 → 伴随粒子 → 休眠消失</p>
      </div>
    </div>
    <div class="col-40">
      <div class="img-container">
        <img src="${IMG_DIR}/destruction-physics.png">
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 9: Explosion 6-Layer System =====
const s09 = slide(9, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>爆炸 6 层时间轴模型</h1><h2>1.3 Explosion · 6-Layer Timeline System</h2></div>
<div class="content">
  <div class="two-col">
    <div class="col-60">
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">Layer 1</span> <b style="color:#fff;">闪光核心</b> (1-3帧) — 极亮白/橙，HDR Bloom，照亮10-30m</p>
      </div>
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">Layer 2</span> <b style="color:#fff;">火球</b> (0.3-1s) — 翻滚球形火焰，核心橙→边缘暗红</p>
      </div>
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">Layer 3</span> <b style="color:#fff;">冲击波</b> (0.2-0.5s) — 球形空气折射环，画面扭曲</p>
      </div>
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">Layer 4</span> <b style="color:#fff;">碎片</b> (0.5-3s) — 初速20-80m/s径向弹射</p>
      </div>
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">Layer 5</span> <b style="color:#fff;">烟柱</b> (3-15s) — 浓黑向上翻滚</p>
      </div>
      <div class="card" style="margin: 2pt 0; padding: 4pt 8pt;">
        <p><span class="highlight">Layer 6</span> <b style="color:#fff;">余烬</b> (5-20s) — 飘散熄灭</p>
      </div>
    </div>
    <div class="col-40">
      <div class="img-container">
        <img src="${IMG_DIR}/explosion-layers.png">
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 10: 8 Explosion Types =====
const s10 = slide(10, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>8 种爆炸源分类</h1><h2>Explosion Source Classification</h2></div>
<div class="content" style="padding-top: 2pt;">
  <div id="explosion-table" class="placeholder" style="width: 660pt; height: 285pt; background: rgba(255,255,255,0.03); border-radius: 4pt;"></div>
</div>`);

// ===== SLIDE 11: Fire & Smoke =====
const s11 = slide(11, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>火焰与烟雾分类</h1><h2>1.3 Fire & Smoke Types</h2></div>
<div class="content">
  <div class="two-col" style="gap: 12pt;">
    <div class="col">
      <h3>7 种火焰类型</h3>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#FF6B35;">持续燃烧</b> — Flipbook+动态光源+烟雾</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#FF6B35;">油类火焰</b> — 高亮度粒子+黑色烟雾层</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#FF6B35;">白磷燃烧</b> — 过曝发光+白色体积烟雾</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#FF6B35;">燃烧蔓延</b> — 程序化扩散+烧焦Decal</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#FF6B35;">爆燃</b> — 蓝→橙快速闪烁粒子</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#FF6B35;">火焰喷射</b> — 定向粒子+沿途动态光源</p>
      </div>
    </div>
    <div class="col">
      <h3>7 种烟雾类型</h3>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#888;">爆炸黑烟</b> — 深黑·极高密度·快速翻滚</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#888;">硝烟</b> — 浅灰·低密度·缓慢飘散</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#888;">烟雾弹</b> — 白/彩色·快速大面积扩散</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#888;">废墟粉尘</b> — 灰白·冲击扩散→沉降</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#888;">信号烟</b> — 红/绿/黄/紫·上升飘散</p>
      </div>
      <div class="card-dark" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p><b style="color:#888;">引擎排气</b> — 灰黑·从排气口持续喷出</p>
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 12: Character & Crowd =====
const s12 = slide(12, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>角色与群集特效</h1><h2>1.4 Character & Crowd · Mocap to Render</h2></div>
<div class="content">
  <div class="two-col">
    <div class="col-60">
      <div style="display: flex; flex-wrap: wrap; gap: 4pt;">
        <div class="card" style="flex: 1; min-width: 130pt; padding: 4pt 6pt;">
          <p><b style="color:#fff;">面部动画</b></p>
          <p class="small">DI4D PURE4D 面捕 → ML处理，数百个BlendShape</p>
        </div>
        <div class="card" style="flex: 1; min-width: 130pt; padding: 4pt 6pt;">
          <p><b style="color:#fff;">眼球渲染</b></p>
          <p class="small">虹膜折射·角膜反射·瞳孔缩放，多层材质+SSS</p>
        </div>
        <div class="card" style="flex: 1; min-width: 130pt; padding: 4pt 6pt;">
          <p><b style="color:#fff;">皮肤渲染</b></p>
          <p class="small">次表面散射(SSS) Profile，真实半透明质感</p>
        </div>
        <div class="card" style="flex: 1; min-width: 130pt; padding: 4pt 6pt;">
          <p><b style="color:#fff;">头发物理</b></p>
          <p class="small">Kajiya-Kay高光+弹簧骨骼模拟，逐发丝渲染</p>
        </div>
        <div class="card" style="flex: 1; min-width: 130pt; padding: 4pt 6pt;">
          <p><b style="color:#fff;">布料模拟</b></p>
          <p class="small">布料解算器/骨骼链+碰撞约束</p>
        </div>
        <div class="card" style="flex: 1; min-width: 130pt; padding: 4pt 6pt;">
          <p><b style="color:#fff;">环境交互</b></p>
          <p class="small">脚步尘土·涉水·雪印·群体扬尘</p>
        </div>
      </div>
    </div>
    <div class="col-40">
      <div class="img-container">
        <img src="${IMG_DIR}/character-render.png">
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 13: Environment & Weather =====
const s13 = slide(13, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>环境天气 + 光照渲染</h1><h2>1.5-1.6 Weather System & Lighting</h2></div>
<div class="content">
  <div class="two-col">
    <div class="col-60">
      <h3>天气系统</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 3pt;">
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#fff;">雨天</b> — GPU雨粒子+湿润材质+涟漪</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#fff;">雪天</b> — 风力雪粒子+积雪层混合</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#fff;">沙尘暴</b> — 密集粒子+浓雾+调色</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#fff;">大雾</b> — 全局体积雾+指数衰减</p>
        </div>
      </div>
      <h3>光照与渲染技术</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 3pt;">
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#E33737;">SDF-GI</b> — 室内柔和间接光</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#E33737;">光追阴影</b> — 像素级精确柔和</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#E33737;">光追反射</b> — 雨后倒影/金属反光</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#E33737;">PBR多层</b> — 磨损油漆下露金属</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#E33737;">SSS</b> — 人耳/树叶透光效果</p>
        </div>
        <div class="card-dark" style="flex: 1; min-width: 90pt; padding: 3pt 6pt;">
          <p class="small"><b style="color:#E33737;">体积雾光</b> — 丁达尔效应光束</p>
        </div>
      </div>
    </div>
    <div class="col-40">
      <div class="img-container">
        <img src="${IMG_DIR}/weather-vfx.png">
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 14: Post Processing =====
const s14 = slide(14, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>后处理与镜头特效</h1><h2>1.7 Post Processing & Camera FX</h2></div>
<div class="content">
  <div class="two-col" style="gap: 12pt;">
    <div class="col">
      <h3>画面增强</h3>
      <div class="card-dark" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p class="small">景深DOF · 运动模糊 · 泛光Bloom · 色差 · 暗角 · 胶片颗粒 · 锐化</p>
      </div>
      <h3>调色系统</h3>
      <div class="card-dark" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p class="small">颜色分级 · LUT电影级调色</p>
        <p class="small"><b style="color:#6BA3C7;">冷战冰蓝</b> vs <b style="color:#D4A04A;">中东暖黄</b></p>
      </div>
      <h3>CG 镜头语言</h3>
      <div class="card-dark" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p class="small">慢动作 · 速度渐变 · 时间冻结 · 手持晃动 · 镜头光晕 · 镜头水滴</p>
      </div>
    </div>
    <div class="col">
      <h3>特殊状态效果</h3>
      <div class="card" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p class="small"><b style="color:#fff;">闪光弹致盲</b> — 全白→缓慢恢复+耳鸣</p>
      </div>
      <div class="card" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p class="small"><b style="color:#fff;">EMP干扰</b> — 抖动+扫描线+色彩失真</p>
      </div>
      <div class="card" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p class="small"><b style="color:#fff;">核爆白屏</b> — 极端过曝→冲击波</p>
      </div>
      <div class="card" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p class="small"><b style="color:#fff;">夜视仪</b> — 绿色调+噪点+光晕</p>
      </div>
      <div class="card" style="padding: 3pt 6pt; margin: 2pt 0;">
        <p class="small"><b style="color:#fff;">受伤血屏</b> — 边缘泛红+模糊+心跳</p>
      </div>
      <h3>转场效果</h3>
      <div class="card-dark" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p class="small">淡入淡出 · 交叉溶解 · 匹配剪辑 · 闪白/闪黑 · Glitch故障</p>
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 15: Production Pipeline Section =====
const s15 = slide(15, 'bg-section.png', `
<div class="top-bar"></div>
<div class="header">
  <h2>CHAPTER 02</h2>
  <h1>制作管线</h1>
  <p style="color: #888; font-size: 9pt;">枪火·爆炸·命中的完整制作流程</p>
</div>
<div class="content">
  <div class="section-num"><p style="color:#E33737; font-size:60pt; opacity:0.1;">02</p></div>
</div>`, `
.section-num { position: absolute; right: 30pt; bottom: 40pt; }
`);

// ===== SLIDE 16: Muzzle Flash Pipeline =====
const s16 = slide(16, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>枪口焰制作全流程</h1><h2>Muzzle Flash Production Pipeline</h2></div>
<div class="content">
  <div style="display: flex; gap: 6pt; flex-wrap: wrap;">
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt;">
      <p style="color: #E33737; font-size: 8pt; font-weight: bold;">PHASE 1</p>
      <p><b style="color:#fff;">参考收集</b></p>
      <p class="small">实拍高速摄影(1000-10000fps) · ActionVFX素材库 · 不同枪型差异记录</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt;">
      <p style="color: #E33737; font-size: 8pt; font-weight: bold;">PHASE 2</p>
      <p><b style="color:#fff;">概念设计</b></p>
      <p class="small">2D概念帧 · 时序节奏设计 · 交互光照范围设计</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt;">
      <p style="color: #E33737; font-size: 8pt; font-weight: bold;">PHASE 3</p>
      <p><b style="color:#fff;">3D 制作</b></p>
      <p class="small">A: Houdini Pyro→VDB · B: 多层粒子系统 · C: Flipbook序列</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt;">
      <p style="color: #E33737; font-size: 8pt; font-weight: bold;">PHASE 4</p>
      <p><b style="color:#fff;">光照交互</b></p>
      <p class="small">伴随动态点光源 · 颜色随时间插值 · 环境阴影</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt;">
      <p style="color: #E33737; font-size: 8pt; font-weight: bold;">PHASE 5</p>
      <p><b style="color:#fff;">渲染</b></p>
      <p class="small">Arnold/V-Ray/Redshift · 火焰/烟雾/光照分层</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt;">
      <p style="color: #E33737; font-size: 8pt; font-weight: bold;">PHASE 6</p>
      <p><b style="color:#fff;">合成输出</b></p>
      <p class="small">Nuke/AE · Bloom/Glow/Lens Flare · 背景融合调色</p>
    </div>
  </div>
  <div class="card-dark" style="margin-top: 8pt;">
    <p class="small"><b style="color:#E33737;">各公司技术路线：</b>Blur(3dsMax+XSI) · Digic(Maya+Houdini) · Platige(Maya+Houdini+Nuke全流程) · 游戏引擎(GPU粒子+Flipbook)</p>
  </div>
</div>`);

// ===== SLIDE 17: Explosion Pipeline =====
const s17 = slide(17, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>爆炸制作全流程</h1><h2>Explosion Production · 8-Step Pipeline</h2></div>
<div class="content">
  <div style="display: flex; gap: 4pt; flex-wrap: wrap;">
    <div class="card" style="flex: 1; min-width: 150pt; padding: 4pt 6pt;">
      <p class="small"><span class="highlight">Step 1</span> <b style="color:#fff;">参考与设计</b> — 爆炸类型/规模/分层概念图</p>
    </div>
    <div class="card" style="flex: 1; min-width: 150pt; padding: 4pt 6pt;">
      <p class="small"><span class="highlight">Step 2</span> <b style="color:#fff;">破坏模拟</b> — Houdini RBD · Voronoi碎片化 · Alembic/VDB</p>
    </div>
    <div class="card" style="flex: 1; min-width: 150pt; padding: 4pt 6pt;">
      <p class="small"><span class="highlight">Step 3</span> <b style="color:#fff;">火焰模拟</b> — Houdini Pyro · Temperature/Fuel/Density</p>
    </div>
    <div class="card" style="flex: 1; min-width: 150pt; padding: 4pt 6pt;">
      <p class="small"><span class="highlight">Step 4</span> <b style="color:#fff;">烟雾模拟</b> — 二次Pyro · 热浮力+风场</p>
    </div>
    <div class="card" style="flex: 1; min-width: 150pt; padding: 4pt 6pt;">
      <p class="small"><span class="highlight">Step 5</span> <b style="color:#fff;">碎片粒子</b> — 尾迹烟雾 + 落地二级尘土</p>
    </div>
    <div class="card" style="flex: 1; min-width: 150pt; padding: 4pt 6pt;">
      <p class="small"><span class="highlight">Step 6</span> <b style="color:#fff;">冲击波</b> — 球形扭曲 + 环形扬尘</p>
    </div>
    <div class="card" style="flex: 1; min-width: 150pt; padding: 4pt 6pt;">
      <p class="small"><span class="highlight">Step 7</span> <b style="color:#fff;">分层渲染</b> — Fire/Smoke/Debris/Dust/Light/Shadow 各层独立</p>
    </div>
    <div class="card" style="flex: 1; min-width: 150pt; padding: 4pt 6pt;">
      <p class="small"><span class="highlight">Step 8</span> <b style="color:#fff;">合成</b> — Nuke · Bloom/Heat Distortion + 调色 + 摄像机震动</p>
    </div>
  </div>
  <div class="card-dark" style="margin-top: 6pt;">
    <p class="small"><b style="color:#E33737;">公司差异：</b>ILM(自研Plume·Arnold·超大规模) · Weta(自研Synapse·战场级) · DNEG(Clarisse·物理逆转) · Blur(V-Ray·精致) · Platige(Arnold·双重氛围)</p>
  </div>
</div>`);

// ===== SLIDE 18: CG vs Realtime =====
const s18 = slide(18, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>CG 预渲染 vs 实时引擎</h1><h2>Pre-Rendered CG vs Real-Time Engine</h2></div>
<div class="content" style="padding-top: 4pt;">
  <div id="cg-vs-rt" class="placeholder" style="width: 660pt; height: 282pt; background: rgba(255,255,255,0.03); border-radius: 4pt;"></div>
</div>`);

// ===== SLIDE 19: Industry Leaders Section =====
const s19 = slide(19, 'bg-section.png', `
<div class="top-bar"></div>
<div class="header">
  <h2>CHAPTER 03</h2>
  <h1>行业标杆</h1>
  <p style="color: #888; font-size: 9pt;">全球顶级 CG 特效公司与 COD 的合作关系</p>
</div>
<div class="content">
  <div class="section-num"><p style="color:#E33737; font-size:60pt; opacity:0.1;">03</p></div>
</div>`, `
.section-num { position: absolute; right: 30pt; bottom: 40pt; }
`);

// ===== SLIDE 20: Game CG Studios =====
const s20 = slide(20, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>全球顶级游戏 CG 公司</h1><h2>Top Game CG Studios Tier Ranking</h2></div>
<div class="content" style="padding-top: 2pt;">
  <div id="studios-table" class="placeholder" style="width: 660pt; height: 285pt; background: rgba(255,255,255,0.03); border-radius: 4pt;"></div>
</div>`);

// ===== SLIDE 21: VFX Big 4 =====
const s21 = slide(21, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>全球影视 VFX 四巨头</h1><h2>The Big Four VFX Studios</h2></div>
<div class="content">
  <div style="display: flex; gap: 8pt; flex-wrap: wrap;">
    <div class="card" style="flex: 1; min-width: 145pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; font-size: 10pt; margin: 0;">ILM 工业光魔</p>
      <p class="small">美国旧金山 · 1975</p>
      <p class="small"><b style="color:#fff;">星球大战 · 侏罗纪公园 · 复仇者联盟</b></p>
      <p class="small">CG先驱 · StageCraft虚拟制作(LED Volume)</p>
    </div>
    <div class="card" style="flex: 1; min-width: 145pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; font-size: 10pt; margin: 0;">Weta Digital 维塔数码</p>
      <p class="small">新西兰惠灵顿 · 1993</p>
      <p class="small"><b style="color:#fff;">指环王 · 阿凡达 · 猩球崛起</b></p>
      <p class="small">虚拟角色 · 面部捕捉 · Massive群集</p>
    </div>
    <div class="card" style="flex: 1; min-width: 145pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; font-size: 10pt; margin: 0;">DNEG</p>
      <p class="small">英国伦敦 · 1998</p>
      <p class="small"><b style="color:#fff;">星际穿越 · 沙丘 · 信条 · 奥本海默</b></p>
      <p class="small">太空/物理模拟 · CG环境 · 大规模破坏</p>
    </div>
    <div class="card" style="flex: 1; min-width: 145pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; font-size: 10pt; margin: 0;">Framestore</p>
      <p class="small">英国伦敦 · 1986</p>
      <p class="small"><b style="color:#fff;">地心引力 · 帕丁顿熊 · 银河护卫队</b></p>
      <p class="small">CG角色 · 环境制作</p>
    </div>
  </div>
  <div class="card-dark" style="margin-top: 6pt;">
    <p class="small"><b style="color:#E33737;">其他知名：</b>MPC (COD真人广告VFX) · 数字王国 · 索尼SPI · BASE FX (流浪地球) · 原力动画 (灵笼)</p>
  </div>
</div>`);

// ===== SLIDE 22: COD Internal Studios =====
const s22 = slide(22, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>COD 系列 CG 制作分工</h1><h2>COD Internal Studio Responsibilities</h2></div>
<div class="content">
  <div style="display: flex; gap: 8pt; flex-wrap: wrap;">
    <div class="card" style="flex: 1; min-width: 145pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; font-size: 10pt; margin: 0;">Infinity Ward</p>
      <p class="small"><b style="color:#fff;">现代战争系列</b></p>
      <p class="small">IW Engine开发 · 实时过场渲染管线 · 摄影测量流程(64px/in极致纹理)</p>
    </div>
    <div class="card" style="flex: 1; min-width: 145pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; font-size: 10pt; margin: 0;">Treyarch</p>
      <p class="small"><b style="color:#fff;">黑色行动系列</b></p>
      <p class="small">叙事性CG风格定义 · 混合媒介叙事方向</p>
    </div>
    <div class="card" style="flex: 1; min-width: 145pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; font-size: 10pt; margin: 0;">Sledgehammer Games</p>
      <p class="small"><b style="color:#fff;">二战/先锋/高级战争</b></p>
      <p class="small">PBR材质系统深化 (SIGGRAPH 2018论文)</p>
    </div>
    <div class="card" style="flex: 1; min-width: 145pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; font-size: 10pt; margin: 0;">Raven Software</p>
      <p class="small"><b style="color:#fff;">战区/协助黑色行动</b></p>
      <p class="small">CG叙事设计与外包管理</p>
    </div>
  </div>
  <div class="card-dark" style="margin-top: 8pt;">
    <p class="small"><b style="color:#E33737;">专业技术合作：</b>DI4D(4D面捕·8台HMC·AI将2周压缩至3天) · OptiTrack(光学动捕·真实特种兵) · SideFX/Houdini(行业标准) · Foundry/Nuke(合成标准)</p>
  </div>
</div>`);

// ===== SLIDE 23: Analysis Method Section =====
const s23 = slide(23, 'bg-section.png', `
<div class="top-bar"></div>
<div class="header">
  <h2>CHAPTER 04</h2>
  <h1>拉片方法论</h1>
  <p style="color: #888; font-size: 9pt;">7 维度分析框架与推荐素材</p>
</div>
<div class="content">
  <div class="section-num"><p style="color:#E33737; font-size:60pt; opacity:0.1;">04</p></div>
</div>`, `
.section-num { position: absolute; right: 30pt; bottom: 40pt; }
`);

// ===== SLIDE 24: 7-Dimension Framework =====
const s24 = slide(24, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>七维度分析框架</h1><h2>7-Dimension Analysis Framework</h2></div>
<div class="content">
  <div style="display: flex; flex-wrap: wrap; gap: 6pt;">
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt; text-align: center;">
      <p style="color: #E33737; font-size: 18pt; font-weight: bold; margin: 0;">1</p>
      <p><b style="color:#fff;">镜头语言</b></p>
      <p class="small">景别·运镜·角度切换节奏</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt; text-align: center;">
      <p style="color: #E33737; font-size: 18pt; font-weight: bold; margin: 0;">2</p>
      <p><b style="color:#fff;">光照氛围</b></p>
      <p class="small">主光·辅光·轮廓光设定</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt; text-align: center;">
      <p style="color: #E33737; font-size: 18pt; font-weight: bold; margin: 0;">3</p>
      <p><b style="color:#fff;">粒子特效</b></p>
      <p class="small">各层粒子时序和参数</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt; text-align: center;">
      <p style="color: #E33737; font-size: 18pt; font-weight: bold; margin: 0;">4</p>
      <p><b style="color:#fff;">材质表现</b></p>
      <p class="small">PBR参数视觉效果</p>
    </div>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 6pt; margin-top: 6pt;">
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt; text-align: center;">
      <p style="color: #E33737; font-size: 18pt; font-weight: bold; margin: 0;">5</p>
      <p><b style="color:#fff;">动画节奏</b></p>
      <p class="small">慢动作·速度渐变时间点</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt; text-align: center;">
      <p style="color: #E33737; font-size: 18pt; font-weight: bold; margin: 0;">6</p>
      <p><b style="color:#fff;">音效同步</b></p>
      <p class="small">爆炸声·枪声·环境音节奏</p>
    </div>
    <div class="card" style="flex: 1; min-width: 100pt; padding: 6pt 8pt; text-align: center;">
      <p style="color: #E33737; font-size: 18pt; font-weight: bold; margin: 0;">7</p>
      <p><b style="color:#fff;">后处理</b></p>
      <p class="small">调色·DOF·Bloom变化</p>
    </div>
    <div class="card-dark" style="flex: 1; min-width: 100pt; padding: 6pt 8pt; text-align: center; border: 1pt dashed rgba(227,55,55,0.3);">
      <p style="color: #E33737; font-size: 10pt; margin: 4pt 0;"><b>拉片记录模板</b></p>
      <p class="small">镜号·时间码·景别·运镜·特效要点·色调·节奏·密度</p>
    </div>
  </div>
</div>`);

// ===== SLIDE 25: Recommended Materials =====
const s25 = slide(25, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>推荐拉片素材</h1><h2>Recommended Reference Materials</h2></div>
<div class="content">
  <div class="two-col" style="gap: 10pt;">
    <div class="col">
      <h3>写实标杆（现代战争）</h3>
      <div class="card" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">MW2019 Clean House</b></p>
        <p class="small">夜视仪后处理/枪口焰环境光/接触阴影</p>
      </div>
      <div class="card" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">MW2 暗水任务</b></p>
        <p class="small">水下特效/涉水转场/水面焦散</p>
      </div>
      <div class="card" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">MW2 阿姆斯特丹追逐</b></p>
        <p class="small">车辆破坏/环境破坏/运动模糊</p>
      </div>
    </div>
    <div class="col">
      <h3>风格化叙事（黑色行动）</h3>
      <div class="card" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">BO Cold War 发售预告</b></p>
        <p class="small">Platige全CG/高模角色/双重氛围灯光</p>
      </div>
      <div class="card" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">BO6 战前简报</b></p>
        <p class="small">Territory混合媒介/解构排版/信息可视化</p>
      </div>
      <h3>经典 CG</h3>
      <div class="card" style="padding: 4pt 8pt; margin: 2pt 0;">
        <p><b style="color:#fff;">COD Ghosts 开场 (Mill+)</b></p>
        <p class="small">大规模建筑破坏/粒子密度</p>
      </div>
    </div>
  </div>
</div>`);

// ===== SLIDE 26: Industry Trends =====
const s26 = slide(26, 'bg-content.png', `
<div class="top-bar"></div>
<div class="header"><h1>行业趋势</h1><h2>Industry Trends 2026</h2></div>
<div class="content">
  <div style="display: flex; flex-wrap: wrap; gap: 6pt;">
    <div class="card" style="flex: 1; min-width: 200pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; margin: 0;">实时取代预渲染</p>
      <p class="small">UE5 MetaHuman+Lumen 使实时 CG 逼近离线质量，传统预渲染管线面临革新</p>
    </div>
    <div class="card" style="flex: 1; min-width: 200pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; margin: 0;">AI 加速模拟</p>
      <p class="small">神经网络预测流体/烟雾行为，替代传统求解器，大幅缩短迭代时间</p>
    </div>
    <div class="card" style="flex: 1; min-width: 200pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; margin: 0;">Houdini 统治特效</p>
      <p class="small">Pyro/RBD/FLIP 流体已成为行业绝对标准，SideFX 持续扩展生态</p>
    </div>
    <div class="card" style="flex: 1; min-width: 200pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; margin: 0;">虚拟制作</p>
      <p class="small">LED Volume + 实时引擎取代绿幕，ILM StageCraft 引领行业</p>
    </div>
    <div class="card" style="flex: 1; min-width: 200pt; padding: 8pt 10pt;">
      <p style="color: #E33737; font-weight: bold; margin: 0;">程序化内容</p>
      <p class="small">Houdini PDG/TOP 批量生成变体特效，提升规模化生产效率</p>
    </div>
  </div>
</div>`);

// ===== SLIDE 27: End Page =====
const s27 = `<!DOCTYPE html>
<html><head><style>
${commonStyles}
.end { display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 1; text-align: center; }
</style></head>
<body style="background-image: url('bg-cover.png');">
<div class="top-bar"></div>
<div class="end">
  <h1 style="font-size: 28pt; letter-spacing: 3pt; margin-bottom: 8pt;">THANK YOU</h1>
  <h2 style="font-size: 10pt; letter-spacing: 2pt;">使命召唤 CG 典型特效行业报告</h2>
  <div style="width: 60pt; height: 2pt; background: #E33737; margin: 12pt auto;"></div>
  <p style="color: #666; font-size: 8pt;">J3 宣发 1 组 · 2026-04-11</p>
  <p style="color: #555; font-size: 7pt; margin-top: 12pt;">数据来源：NVIDIA官方指南 · Activision Research · SIGGRAPH论文</p>
  <p style="color: #555; font-size: 7pt;">Territory Studio · Platige Image · Blur Studio · Hocus Pocus Studio</p>
</div>
</body></html>`;

// Write all slides
const slides = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27];

slides.forEach((html, i) => {
  const num = String(i + 1).padStart(2, '0');
  fs.writeFileSync(path.join(SLIDES_DIR, `slide-${num}.html`), html);
});

console.log(`Generated ${slides.length} slide HTML files`);
