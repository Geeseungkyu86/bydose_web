#!/usr/bin/env node
/* 나잇나잇 크림 제품소개서(nightnight-deck.html) 번역 화면 배치 점검
 *
 * 하는 일
 *   1. PC(1280·1440·1920) — 장마다 글 묶음(data-g) 규칙을 지키는지 본다.
 *        묶음 오른쪽·아래 한계(파일 속 GOPT) 안에 있는지, 카드 묶음이면 카드 안에 있는지,
 *        글줄끼리·글과 사진이 겹치지 않는지, 무대(1440×1024) 밖으로 나가지 않는지.
 *   2. 모바일(360·390·430) — 화면 가로를 넘는 글줄이 없는지.
 *   3. 길이 상한 — 짧은 칸(목차·탭·알약·이름표·다음 장 안내)이 줄이거나 숨겨서 겨우 들어간 경우를
 *        bydose_제품소개서_다국어/길이_점검.csv 로 적는다(권장 최대 글자 수 포함).
 *
 * 사용법 (저장소 맨 위에서. node 와 playwright 필요)
 *   node tools/check_deck_layout.js                 # 전체 언어
 *   node tools/check_deck_layout.js en,ru           # 일부 언어
 *   node tools/check_deck_layout.js --shots out/    # 언어별 PC 13장 + 모바일 전체 화면 사진도 저장
 * 문제가 하나라도 있으면 끝에 1을 돌려준다.
 */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const DECK = path.join(ROOT, 'nightnight-deck.html');
const CSV = path.join(ROOT, 'bydose_제품소개서_다국어', 'GEE_다국어_통합시트_272.csv');
const OUT_CSV = path.join(ROOT, 'bydose_제품소개서_다국어', '길이_점검.csv');
const LANGS = { en: ['ENG', '영어 EN'], ja: ['JPN', '일본어 JA'], zh: ['CHN', '중국어 간체 ZH'], mn: ['MNG', '몽골어 MN'], ru: ['RUS', '러시아어 RU'] };

const args = process.argv.slice(2);
const shotDir = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null;
const langs = (args.find(a => /^[a-z,]+$/.test(a) && a !== shotDir) || Object.keys(LANGS).join(',')).split(',');

const src = fs.readFileSync(DECK, 'utf8');
const GOPT = Function('return ' + src.match(/var GOPT=(\{[\s\S]*?\n  \});/)[1])();

/* 원고 CSV: 한국어 → 내부 ID (짧은 칸 이름 찾기용) */
function parseCSV(t) {
  const rows = []; let row = [], f = '', q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++ } else q = false } else f += c }
    else if (c === '"') q = true; else if (c === ',') { row.push(f); f = '' }
    else if (c === '\n' || c === '\r') { if (c === '\r' && t[i + 1] === '\n') i++; row.push(f); rows.push(row); row = []; f = '' }
    else f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row) }
  const head = rows.shift().map(h => h.replace(/^﻿/, ''));
  return rows.filter(r => r.length > 1).map(r => Object.fromEntries(head.map((h, i) => [h, r[i] || ''])));
}
const sheet = fs.existsSync(CSV) ? parseCSV(fs.readFileSync(CSV, 'utf8')) : [];
const idsOfKo = {}, allIds = new Set(sheet.map(r => r['내부 ID']));
sheet.forEach(r => { const k = (r['한국어 승인 원문'] || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ''); if (k) (idsOfKo[k] = idsOfKo[k] || []).push(r['내부 ID']) });
/* 같은 한국어가 여러 줄에 있으면 자리에 맞는 줄: 목차·탭 → JS_SECS_, 다음 장 안내 → ATTR_<장>_data_next_ */
function idFor(t) {
  if (t.id) return t.id;
  const ids = idsOfKo[(t.ko || '').replace(/<[^>]+>/g, '').replace(/\s+/g, '')] || [];
  const m = t.where.match(/^(\w+) 다음 장 안내/);
  if (m) { const want = 'ATTR_' + m[1] + '_data_next_01'; if (allIds.has(want)) return want }
  if (/목차|탭/.test(t.where)) return ids.find(i => /^JS_SECS/.test(i)) || ids[0] || '';
  return ids[0] || '';
}

/* 브라우저 안에서: PC 무대 점검 + 짧은 칸 축소 기록 */
function pcCheck(GOPT) {
  const out = [], tight = [];
  document.querySelectorAll('#bdk .sl').forEach(sl => {
    const st = sl.querySelector('.stage.d'), sr = st.getBoundingClientRect(), sc = sr.width / 1440;
    const bx = r => ({ l: (r.left - sr.left) / sc, t: (r.top - sr.top) / sc, r: (r.right - sr.left) / sc, b: (r.bottom - sr.top) / sc });
    const groups = {}; st.querySelectorAll('[data-g]').forEach(e => { (groups[e.dataset.g] = groups[e.dataset.g] || []).push(e) });
    const lines = [];
    const textLines = (e, cb) => {
      const w = document.createTreeWalker(e, NodeFilter.SHOW_TEXT); let n;
      while ((n = w.nextNode())) {
        if (!n.nodeValue.trim()) continue; const pe = n.parentElement;
        if (getComputedStyle(pe).visibility === 'hidden' || !pe.offsetParent || pe.closest('.lang-menu')) continue;
        const r = document.createRange(); r.selectNodeContents(n);
        for (const q0 of r.getClientRects()) if (q0.width >= 2) cb(bx(q0), n, pe);
      }
    };
    for (const [g, els] of Object.entries(groups)) {
      const o = GOPT[sl.id + '.' + g] || {}, card = els.find(e => e.hasAttribute('data-g-card')), cb = card && bx(card.getBoundingClientRect());
      els.forEach(e => {
        if (e === card) return;
        textLines(e, (q, n, pe) => {
          const t = sl.id + '.' + g + ' "' + n.nodeValue.trim().slice(0, 24) + '"';
          lines.push({ q, t, e: pe });
          if (q.r > (o.r || 1300) + 2) out.push(t + ' 오른쪽 한계를 ' + Math.round(q.r - (o.r || 1300)) + 'px 넘음');
          if (q.b > (o.b || 984) + 2) out.push(t + ' 아래 한계를 ' + Math.round(q.b - (o.b || 984)) + 'px 넘음');
          if (cb && (q.l < cb.l + 6 || q.r > cb.r - 6 || q.t < cb.t + 4 || q.b > cb.b - 4)) out.push(t + ' 카드 밖');
        });
        if (card && e.tagName === 'IMG') { const q = bx(e.getBoundingClientRect()); if (q.b > cb.b + 1 || q.r > cb.r + 1) out.push(sl.id + '.' + g + ' 그림이 카드 밖') }
      });
    }
    /* 묶음 밖 글자(목차·다음 장 안내 등)도 무대 밖·겹침만 본다 */
    textLines(st, (q, n, pe) => {
      if (pe.closest('[data-g]')) return;
      const t = sl.id + ' "' + n.nodeValue.trim().slice(0, 24) + '"';
      lines.push({ q, t, e: pe });
      if (q.r > 1442 || q.l < -2 || q.b > 1026) out.push(t + ' 화면 밖');
    });
    const pics = [...st.querySelectorAll('img.a,.media')].filter(e => e.getBoundingClientRect().width > 40 && !e.closest('[data-g-card]') || e.classList.contains('media')).map(e => bx(e.getBoundingClientRect()));
    lines.forEach((a, i) => {
      pics.forEach(m => { const ox = Math.min(a.q.r, m.r) - Math.max(a.q.l, m.l), oy = Math.min(a.q.b, m.b) - Math.max(a.q.t, m.t); if (ox > 2 && oy > 2) out.push(a.t + ' 사진과 겹침') });
      for (let j = i + 1; j < lines.length; j++) {
        const c = lines[j]; if (a.e === c.e || a.e.contains(c.e) || c.e.contains(a.e)) continue;
        const ox = Math.min(a.q.r, c.q.r) - Math.max(a.q.l, c.q.l), oy = Math.min(a.q.b, c.q.b) - Math.max(a.q.t, c.q.t);
        if (ox > 2 && oy > 2) out.push(a.t + ' 와 ' + c.t + ' 겹침');
      }
    });
    /* 짧은 칸: 알약을 더 줄였거나, 이름표를 숨겼거나, 목차·다음 장 안내를 줄인 곳 */
    const ko = e => e._ko != null ? e._ko : null;
    st.querySelectorAll('.pill[data-i18n]').forEach(e => {
      const k = e._fs && parseFloat(e.style.fontSize) / e._fs, sk = slideK(sl);
      if (k && k / sk < 0.99) tight.push({ id: e.dataset.i18n, ko: ko(e), where: sl.id + ' 알약', text: e.textContent.trim(), ratio: k / sk, how: '글자 ' + Math.round(k / sk * 100) + '%로 줄임' });
      if (getComputedStyle(e).whiteSpace === 'normal') tight.push({ id: e.dataset.i18n, ko: ko(e), where: sl.id + ' 알약', text: e.textContent.trim(), ratio: 0.6, how: '두 줄로 꺾임' });
    });
    /* 알약과 부딪혀 숨긴 카드 이름표(01 Hydration 등)는 장 제목과 같은 내용이라 길이 문제로 보지 않는다 */
    st.querySelectorAll('.nav-i').forEach(e => {
      const f = parseFloat(e.style.fontSize); const s = e.querySelector('[data-i18n-txt]');
      if (f && f < 15.9 && sl.id === 'cover') tight.push({ ko: s && s.firstChild._ko, where: 'PC 상단 목차', text: s.textContent.trim(), ratio: f / 16, how: '목차 전체 글자 ' + Math.round(f / 16 * 100) + '%' });
    });
    st.querySelectorAll('.next-l').forEach(e => {
      const f = parseFloat(e.style.fontSize);
      const moved = e._sv && e.style.left !== e._sv.left;
      if ((f && f < 15.9) || moved) tight.push({ ko: e.firstChild._ko, where: sl.id + ' 다음 장 안내', text: e.textContent.trim(), ratio: f ? f / 16 : 0.9, how: f && f < 15.9 ? '글자 ' + Math.round(f / 16 * 100) + '%로 줄임' : '왼쪽으로 당김' });
    });
  });
  function slideK(sl) { const e = [...sl.querySelectorAll('[data-g][data-i18n]:not(.pill)')].find(e => e._fs && e.style.fontSize); return e ? parseFloat(e.style.fontSize) / e._fs : 1 }
  const ks = [...document.querySelectorAll('#bdk .sl')].map(sl => [sl.id, slideK(sl)]).filter(x => x[1] < 0.995).map(x => x[0] + ' ' + Math.round(x[1] * 100) + '%');
  return { out: [...new Set(out)], tight, ks };
}

function mCheck() {
  const out = [], tight = [], W = innerWidth;
  const w = document.createTreeWalker(document.getElementById('bdkM'), NodeFilter.SHOW_TEXT); let n;
  while ((n = w.nextNode())) {
    if (!n.nodeValue.trim()) continue; const pe = n.parentElement;
    if (!pe.offsetParent || pe.closest('.lang-menu')) continue;
    const r = document.createRange(); r.selectNodeContents(n);
    for (const q of r.getClientRects()) if (q.width > 1 && (q.right > W + 0.5 || q.left < -0.5)) { out.push('"' + n.nodeValue.trim().slice(0, 24) + '" 화면 가로를 넘음'); break }
  }
  document.querySelectorAll('.mtabs a span[data-i18n-txt]').forEach(e => {
    const f = parseFloat(e.style.fontSize);
    if (e.style.overflowWrap === 'anywhere') tight.push({ ko: e.firstChild._ko, where: '모바일 아래 탭', text: e.textContent.trim(), ratio: 0.6, how: '9px로 줄여도 단어가 칸보다 길어 단어 중간에서 꺾임' });
    else if (f && f < 11) tight.push({ ko: e.firstChild._ko, where: '모바일 아래 탭', text: e.textContent.trim(), ratio: f / 12, how: '글자 ' + f + 'px로 줄임' });
  });
  return { out: [...new Set(out)], tight };
}

(async () => {
  const b = await chromium.launch();
  let problems = 0; const tight = new Map();
  for (const l of langs) {
    for (const W of [1280, 1440, 1920]) {
      const p = await b.newPage({ viewport: { width: W, height: Math.round(W * 1024 / 1440) } });
      await p.route(/vimeo/, r => r.abort());
      await p.goto('file://' + DECK + '?lang=' + l); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
      const r = await p.evaluate(pcCheck, GOPT);
      console.log(`[${l}] PC ${W}: 문제 ${r.out.length}` + (r.ks.length ? `  · 글자를 줄인 장: ${r.ks.join(', ')}` : ''));
      r.out.forEach(x => console.log('   - ' + x)); problems += r.out.length;
      if (W === 1440) r.tight.forEach(t => tight.set(l + '|' + t.where + '|' + t.text, { l, ...t }));
      if (shotDir && W === 1440) {
        fs.mkdirSync(shotDir, { recursive: true });
        const n = await p.evaluate(() => document.querySelectorAll('#bdk .sl').length);
        for (let i = 0; i < n; i++) {
          await p.evaluate(i => { const t = document.getElementById('bdkTrack'); t.scrollTo({ left: i * t.clientWidth, behavior: 'instant' }) }, i);
          await p.waitForTimeout(120); await p.screenshot({ path: path.join(shotDir, `${l}-pc-${String(i + 1).padStart(2, '0')}.png`) });
        }
      }
      await p.close();
    }
    for (const W of [360, 390, 430]) {
      const p = await b.newPage({ viewport: { width: W, height: 800 } });
      await p.route(/vimeo/, r => r.abort());
      await p.goto('file://' + DECK + '?lang=' + l); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
      const r = await p.evaluate(mCheck);
      console.log(`[${l}] 모바일 ${W}: 문제 ${r.out.length}`); r.out.forEach(x => console.log('   - ' + x)); problems += r.out.length;
      if (W === 390) r.tight.forEach(t => tight.set(l + '|' + t.where + '|' + t.text, { l, ...t }));
      if (shotDir && W === 390) {
        const h = await p.evaluate(() => document.getElementById('bdkM').scrollHeight);
        await p.setViewportSize({ width: W, height: Math.min(h, 16000) }); await p.waitForTimeout(300);
        await p.screenshot({ path: path.join(shotDir, `${l}-m.png`) });
      }
      await p.close();
    }
  }
  await b.close();

  /* 길이 상한 표 */
  const q = s => '"' + String(s == null ? '' : s).replace(/"/g, '""') + '"';
  const rows = [['내부 ID', '언어', '위치', '한국어', '지금 번역', '지금 글자 수', '권장 최대 글자 수', '지금 처리']];
  for (const t of tight.values()) {
    const id = idFor(t);
    const len = [...t.text].length;
    rows.push([id, LANGS[t.l][1], t.where, (t.ko || '').replace(/<[^>]+>/g, '').trim(), t.text, len, Math.max(1, Math.floor(len * Math.min(0.95, t.ratio || 0.6))), t.how]);
  }
  fs.writeFileSync(OUT_CSV, '﻿' + rows.map(r => r.map(q).join(',')).join('\n') + '\n');
  console.log(`\n짧은 칸 ${rows.length - 1}곳을 ${path.relative(ROOT, OUT_CSV)} 에 적었습니다.`);
  console.log(problems ? `\n배치 문제 ${problems}건` : '\n배치 문제 없음');
  process.exit(problems ? 1 : 0);
})();
