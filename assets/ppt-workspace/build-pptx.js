const pptxgen = require('./node_modules/pptxgenjs');
const path = require('path');
const html2pptx = require('/Users/catwang/.workbuddy/skills/pptx/scripts/html2pptx');

const SLIDES_DIR = path.join(__dirname, 'slides');
const OUTPUT = path.join(__dirname, 'cod-vfx-report.pptx');

// Dark theme table style helpers
const hdrOpts = { fill: { color: 'E33737' }, color: 'FFFFFF', bold: true, fontSize: 8, align: 'center', valign: 'middle' };
const cellOpts = { fill: { color: '2D2D2D' }, color: 'CCCCCC', fontSize: 7.5, valign: 'middle', border: { pt: 0.5, color: '444444' } };
const cellWhite = { ...cellOpts, color: 'FFFFFF', bold: true };
const cellRed = { ...cellOpts, color: 'E33737', bold: true };

async function build() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'J3 宣发 1 组';
  pptx.title = '使命召唤 CG 典型特效行业报告';

  // Total 27 slides
  const totalSlides = 27;

  for (let i = 1; i <= totalSlides; i++) {
    const num = String(i).padStart(2, '0');
    const htmlFile = path.join(SLIDES_DIR, `slide-${num}.html`);
    console.log(`Processing slide ${num}...`);

    try {
      const { slide, placeholders } = await html2pptx(htmlFile, pptx);

      // === SLIDE 4: Overview Table (placeholder) ===
      if (i === 4 && placeholders.length > 0) {
        const p = placeholders[0];
        slide.addTable([
          [
            { text: '大类', options: hdrOpts },
            { text: '子类数', options: hdrOpts },
            { text: '核心技术', options: hdrOpts },
            { text: '重要度', options: hdrOpts }
          ],
          [
            { text: '1.1 战斗与交互', options: cellWhite },
            { text: '20+', options: cellRed },
            { text: '枪口焰/命中/弹道/贴花', options: cellOpts },
            { text: '★★★★★', options: { ...cellOpts, color: 'E33737' } }
          ],
          [
            { text: '1.2 破坏与物理', options: cellWhite },
            { text: '15+', options: cellRed },
            { text: 'Voronoi碎裂/刚体物理/烟尘', options: cellOpts },
            { text: '★★★★★', options: { ...cellOpts, color: 'E33737' } }
          ],
          [
            { text: '1.3 烟火与爆破', options: cellWhite },
            { text: '20+', options: cellRed },
            { text: '6层爆炸/火焰/烟雾/体积光', options: cellOpts },
            { text: '★★★★★', options: { ...cellOpts, color: 'E33737' } }
          ],
          [
            { text: '1.4 角色与群集', options: cellWhite },
            { text: '18+', options: cellRed },
            { text: '面捕/毛发/布料/群集', options: cellOpts },
            { text: '★★★★☆', options: { ...cellOpts, color: 'FFB347' } }
          ],
          [
            { text: '1.5 环境与天气', options: cellWhite },
            { text: '12+', options: cellRed },
            { text: '天气系统/环境交互/自然现象', options: cellOpts },
            { text: '★★★★☆', options: { ...cellOpts, color: 'FFB347' } }
          ],
          [
            { text: '1.6 光照与渲染', options: cellWhite },
            { text: '12+', options: cellRed },
            { text: 'GI/光追/PBR/体积光', options: cellOpts },
            { text: '★★★★★', options: { ...cellOpts, color: 'E33737' } }
          ],
          [
            { text: '1.7 后处理与镜头', options: cellWhite },
            { text: '20+', options: cellRed },
            { text: 'DOF/调色/状态效果/转场', options: cellOpts },
            { text: '★★★★☆', options: { ...cellOpts, color: 'FFB347' } }
          ]
        ], {
          x: p.x, y: p.y, w: p.w, h: p.h,
          colW: [p.w * 0.2, p.w * 0.1, p.w * 0.5, p.w * 0.2],
          border: { pt: 0.5, color: '444444' },
          autoPage: false
        });
      }

      // === SLIDE 6: Gun Type Table ===
      if (i === 6 && placeholders.length > 0) {
        const p = placeholders[0];
        slide.addTable([
          [
            { text: '枪型', options: hdrOpts },
            { text: '焰型', options: hdrOpts },
            { text: '亮度/面积', options: hdrOpts },
            { text: '烟量', options: hdrOpts },
            { text: '交互光范围', options: hdrOpts }
          ],
          [
            { text: '突击步枪', options: cellWhite },
            { text: '紧凑锥形', options: cellOpts },
            { text: '中 / 中', options: cellOpts },
            { text: '中量快散', options: cellOpts },
            { text: '1-2m 暖橙', options: cellOpts }
          ],
          [
            { text: '霰弹枪', options: cellWhite },
            { text: '大面积扇形', options: cellOpts },
            { text: '极高 / 大', options: cellRed },
            { text: '大量浓烟', options: cellOpts },
            { text: '3-4m 暖白', options: cellOpts }
          ],
          [
            { text: '手枪', options: cellWhite },
            { text: '微小锐利闪光', options: cellOpts },
            { text: '低 / 小', options: cellOpts },
            { text: '微量', options: cellOpts },
            { text: '0.5-1m', options: cellOpts }
          ],
          [
            { text: '狙击枪', options: cellWhite },
            { text: '大口径爆闪', options: cellOpts },
            { text: '高 / 长条', options: cellOpts },
            { text: '消音无/大量', options: cellOpts },
            { text: '2-3m', options: cellOpts }
          ],
          [
            { text: '轻/重机枪', options: cellWhite },
            { text: '持续大火焰', options: cellOpts },
            { text: '高 / 大', options: cellRed },
            { text: '持续浓烟', options: cellOpts },
            { text: '2-3m 持续', options: cellOpts }
          ],
          [
            { text: 'RPG/火箭筒', options: cellWhite },
            { text: '尾焰喷射', options: cellOpts },
            { text: '极高 / 极长', options: cellRed },
            { text: '巨量尾迹烟', options: cellOpts },
            { text: '大范围强光', options: cellRed }
          ]
        ], {
          x: p.x, y: p.y, w: p.w, h: p.h,
          colW: [p.w * 0.16, p.w * 0.22, p.w * 0.2, p.w * 0.2, p.w * 0.22],
          border: { pt: 0.5, color: '444444' },
          autoPage: false
        });
      }

      // === SLIDE 10: 8 Explosion Types Table ===
      if (i === 10 && placeholders.length > 0) {
        const p = placeholders[0];
        slide.addTable([
          [
            { text: '爆炸类型', options: hdrOpts },
            { text: '规模', options: hdrOpts },
            { text: '火焰特征', options: hdrOpts },
            { text: '烟雾', options: hdrOpts },
            { text: '碎片', options: hdrOpts }
          ],
          [
            { text: '手雷', options: cellWhite },
            { text: '小(3-5m)', options: cellOpts },
            { text: '微小闪光', options: cellOpts },
            { text: '少量灰烟', options: cellOpts },
            { text: '高速金属破片', options: cellOpts }
          ],
          [
            { text: 'C4/TNT', options: cellWhite },
            { text: '中(5-10m)', options: cellOpts },
            { text: '橙色火球', options: cellOpts },
            { text: '大量黑烟', options: cellOpts },
            { text: '结构性碎片', options: cellOpts }
          ],
          [
            { text: 'RPG命中', options: cellWhite },
            { text: '中(5-8m)', options: cellOpts },
            { text: '明亮火球+二次燃烧', options: cellOpts },
            { text: '浓黑烟', options: cellOpts },
            { text: '目标+弹体碎片', options: cellOpts }
          ],
          [
            { text: '车辆爆炸', options: cellWhite },
            { text: '大(8-15m)', options: cellRed },
            { text: '巨大火球+持续燃烧', options: cellOpts },
            { text: '浓黑油烟', options: cellOpts },
            { text: '车辆部件飞射', options: cellOpts }
          ],
          [
            { text: '航空炸弹', options: cellWhite },
            { text: '巨大(15-30m)', options: cellRed },
            { text: '巨型火柱+蘑菇云', options: cellRed },
            { text: '超大烟柱', options: cellOpts },
            { text: '大规模碎片雨', options: cellOpts }
          ],
          [
            { text: '导弹', options: cellWhite },
            { text: '巨大', options: cellRed },
            { text: '白热闪光→橙色火球', options: cellOpts },
            { text: '数十米烟柱', options: cellOpts },
            { text: '大范围碎片', options: cellOpts }
          ],
          [
            { text: '弹药殉爆', options: cellWhite },
            { text: '连环', options: cellRed },
            { text: '多次闪光+连续火球', options: cellOpts },
            { text: '连续烟柱', options: cellOpts },
            { text: '连锁爆炸', options: cellOpts }
          ]
        ], {
          x: p.x, y: p.y, w: p.w, h: p.h,
          colW: [p.w * 0.14, p.w * 0.14, p.w * 0.28, p.w * 0.2, p.w * 0.24],
          border: { pt: 0.5, color: '444444' },
          autoPage: false
        });
      }

      // === SLIDE 18: CG vs Realtime Table ===
      if (i === 18 && placeholders.length > 0) {
        const p = placeholders[0];
        slide.addTable([
          [
            { text: '维度', options: hdrOpts },
            { text: 'CG 预渲染', options: hdrOpts },
            { text: '实时引擎', options: hdrOpts }
          ],
          [
            { text: '模拟精度', options: cellWhite },
            { text: 'Houdini 高精度流体', options: cellOpts },
            { text: 'GPU粒子 + Flipbook', options: cellOpts }
          ],
          [
            { text: '碎片数量', options: cellWhite },
            { text: '数千-数万', options: cellRed },
            { text: '数十-数百', options: cellOpts }
          ],
          [
            { text: '烟尘', options: cellWhite },
            { text: '体积渲染 VDB', options: cellOpts },
            { text: 'Billboard 粒子近似', options: cellOpts }
          ],
          [
            { text: '光照', options: cellWhite },
            { text: '全局光照 + 光追', options: cellRed },
            { text: '简化动态点光源', options: cellOpts }
          ],
          [
            { text: '渲染时间', options: cellWhite },
            { text: '每帧数分钟-数小时', options: cellOpts },
            { text: '每帧 <16ms (60fps)', options: cellRed }
          ],
          [
            { text: '工具栈', options: cellWhite },
            { text: 'Houdini + Maya + Nuke', options: cellOpts },
            { text: 'UE5 Niagara / Unity VFX Graph', options: cellOpts }
          ]
        ], {
          x: p.x, y: p.y, w: p.w, h: p.h,
          colW: [p.w * 0.18, p.w * 0.41, p.w * 0.41],
          border: { pt: 0.5, color: '444444' },
          autoPage: false
        });
      }

      // === SLIDE 20: Studios Table ===
      if (i === 20 && placeholders.length > 0) {
        const p = placeholders[0];
        slide.addTable([
          [
            { text: '层级', options: hdrOpts },
            { text: '公司', options: hdrOpts },
            { text: '总部', options: hdrOpts },
            { text: '代表作', options: hdrOpts },
            { text: '技术专长', options: hdrOpts }
          ],
          [
            { text: 'T0', options: { ...cellRed, fontSize: 8 } },
            { text: 'Blur Studio', options: cellWhite },
            { text: '美国洛杉矶', options: cellOpts },
            { text: '光环·爱死机·BO6面部', options: cellOpts },
            { text: '电影级全CG·好莱坞标准', options: cellOpts }
          ],
          [
            { text: 'T0', options: { ...cellRed, fontSize: 8 } },
            { text: 'Digic Pictures', options: cellWhite },
            { text: '匈牙利布达佩斯', options: cellOpts },
            { text: '刺客信条·巫师3·FF15', options: cellOpts },
            { text: '内部动捕·大规模写实', options: cellOpts }
          ],
          [
            { text: 'T0', options: { ...cellRed, fontSize: 8 } },
            { text: 'Unit Image', options: cellWhite },
            { text: '法国巴黎', options: cellOpts },
            { text: '艾尔登法环·博德之门3', options: cellOpts },
            { text: '连续两年GOTY·叙事驱动', options: cellOpts }
          ],
          [
            { text: 'T1', options: { ...cellOpts, color: 'FFB347', bold: true, fontSize: 8 } },
            { text: 'Platige Image', options: cellWhite },
            { text: '波兰华沙', options: cellOpts },
            { text: 'COD冷战预告·巫师Netflix', options: cellOpts },
            { text: '全CG电影级·2D/3D混合', options: cellOpts }
          ],
          [
            { text: 'T1', options: { ...cellOpts, color: 'FFB347', bold: true, fontSize: 8 } },
            { text: 'Territory Studio', options: cellWhite },
            { text: '英国伦敦', options: cellOpts },
            { text: 'COD:BO6 全部过场(14min+)', options: cellRed },
            { text: '混合媒介·解构主义', options: cellOpts }
          ],
          [
            { text: 'T1', options: { ...cellOpts, color: 'FFB347', bold: true, fontSize: 8 } },
            { text: 'Mill+', options: cellWhite },
            { text: '美英双城', options: cellOpts },
            { text: 'COD幽灵CG', options: cellOpts },
            { text: '好莱坞VFX+广告级', options: cellOpts }
          ]
        ], {
          x: p.x, y: p.y, w: p.w, h: p.h,
          colW: [p.w * 0.08, p.w * 0.17, p.w * 0.17, p.w * 0.3, p.w * 0.28],
          border: { pt: 0.5, color: '444444' },
          autoPage: false
        });
      }

    } catch (err) {
      console.error(`Error on slide ${num}:`, err.message);
    }
  }

  // Add speaker notes to key slides
  // (notes are added via slide.addNotes - but html2pptx creates the slide, so we'd need to reference it)

  await pptx.writeFile({ fileName: OUTPUT });
  console.log(`\nPresentation saved to: ${OUTPUT}`);
  console.log(`Total slides: ${totalSlides}`);
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
