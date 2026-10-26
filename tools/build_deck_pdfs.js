#!/usr/bin/env node
/* 나잇나잇 크림 제품소개서 — 언어별 PDF 만들기 (PC 화면 13장, 1920×1080 한 장씩)
 *
 * nightnight-deck.html 을 1920×1080 화면으로 언어마다 열어, 번역 배치가 끝난 모습을 그대로 인쇄(PDF)한다.
 * 글자는 PDF 안에서 선택·검색된다. 영상 칸은 영상 첫 화면(썸네일)으로 들어간다.
 * 결과: nightnight-deck-pdf/byDose_NightNightCream_<KO|EN|JA|ZH|MN|RU>.pdf
 *   → 제품소개서의 다운로드 버튼이 지금 보고 있는 언어의 파일을 내려받는다(파일 속 PDF_BASE).
 *
 * 사용법 (저장소 맨 위에서. node 와 playwright 필요. 사진·글꼴을 받아야 하므로 인터넷 연결 필요)
 *   node tools/build_deck_pdfs.js            # 6개 언어 전부
 *   node tools/build_deck_pdfs.js en,ru      # 일부만
 * 번역이나 배치를 고친 뒤에는 다시 만들어 함께 올린다.
 */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const DECK = path.join(ROOT, 'nightnight-deck.html');
const OUT = path.join(ROOT, 'nightnight-deck-pdf');
const LANGS = { ko: 'KO', en: 'EN', ja: 'JA', zh: 'ZH', mn: 'MN', ru: 'RU' };
const pick = (process.argv[2] || Object.keys(LANGS).join(',')).split(',');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  for (const l of pick) {
    if (!LANGS[l]) { console.log('모르는 언어: ' + l); continue }
    const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, locale: 'ko-KR' });
    await p.route(/player\.vimeo\.com/, r => r.abort());          // 영상 재생기는 빼고 썸네일만
    await p.goto('file://' + DECK + '?lang=' + l, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    /* 화면 밖 장의 사진까지 다 받아질 때까지 */
    await p.evaluate(async () => {
      const urls = new Set();
      document.querySelectorAll('#bdk img').forEach(i => { if (!i.complete) urls.add(i.src) });
      document.querySelectorAll('#bdk .sl, #bdk .media').forEach(e => { const m = getComputedStyle(e).backgroundImage.match(/url\("?([^")]+)"?\)/); if (m) urls.add(m[1]) });
      await Promise.all([...urls].map(u => new Promise(r => { const i = new Image(); i.onload = i.onerror = r; i.src = u })));
    });
    await p.waitForTimeout(800);
    const file = path.join(OUT, `byDose_NightNightCream_${LANGS[l]}.pdf`);
    await p.pdf({ path: file, preferCSSPageSize: true, printBackground: true });
    console.log(path.relative(ROOT, file), Math.round(fs.statSync(file).size / 1024) + 'KB');
    await p.close();
  }
  await b.close();
})();
