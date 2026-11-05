/* ============================================================
   비상용 상세 만들기 (2026-11-05)

   pages/<이름>.html(CDN 화면)을 휴대폰 폭으로 그려서, 보이는 모양을 줄마다 인라인 스타일로 굳힌
   정적 HTML을 만든다 → fallback/<이름>.html
   아임웹 상품 '상세 설명' 편집기(에디터로 등록 → 코드 보기 </>)에 그대로 붙여 넣는다.
   편집기는 <style>·미디어쿼리·스크립트가 안 되므로: 한 줄 배치, 영상 → 첫 장면 사진,
   아코디언 펼침, 세일 배너·페이지 안 이동 링크·버튼 뺌, 별점 → ★ 글자, 이미지 loading="lazy".

   실행: node imweb/product-pages/tools/build_fallback.js nightnight-cream
   (Playwright 필요. 클라우드 세션에는 깔려 있다.)
   ============================================================ */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const name = process.argv[2] || 'nightnight-cream';
const dir = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(dir, 'pages', name + '.html'), 'utf8');
const outDir = path.join(dir, 'fallback');
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 420, height: 900 } });
  await page.setContent('<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0">' + src + '</body></html>', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts && document.fonts.ready);

  const html = await page.evaluate(() => {
    const root = document.getElementById('nnd-story');

    /* ---- 1. 정적으로 바꾸기 ---- */
    root.querySelectorAll('#bd-promo, .bd-promo, .nnd-lightbox, .nnd-acc__icon, .nnd-persona__link, script, iframe').forEach(e => e.remove());
    root.querySelectorAll('.nnd-acc__panel[hidden]').forEach(p => p.hidden = false);
    root.querySelectorAll('img[data-src]').forEach(im => { im.src = im.getAttribute('data-src'); im.removeAttribute('data-src'); });
    root.querySelectorAll('.nnd-vid').forEach(v => {           /* 영상 → 첫 장면 사진 */
      const m = /url\(["']?([^"')]+)/.exec(v.getAttribute('style') || '');
      const box = v.parentNode;
      const im = document.createElement('img');
      if (m) im.src = m[1];
      im.alt = '';
      box.replaceChildren(im);
      box.style.aspectRatio = 'auto';
    });
    /* 고민 카드 → Figma '01 고민 카드 (대화형)'(나잇나잇 크림_유통 상세페이지, node 12:3) 말풍선.
       1080 시안 값을 3으로 나눈 크기. 색은 시안에서 읽은 값(위에서 아래로 주황 → 회갈색). */
    const CHAT = [
      { lines: ['나이트 크림은 좀 무겁고', '번들 거릴 거 같아...'], emo: '🫠', bg: '#D35B40' },
      { lines: ['나는 아침마다 얼굴이 너무 당겨...'], emo: '😣', bg: '#C66B52' },
      { lines: ['하루종일 히터 바람에', '얼굴이 버석해...'], emo: '🔥🏜️', bg: '#BB755D' },
      { lines: ['분명 오래 잤는데', '왜 때문에 피곤해 보이지??'], emo: '🐼', bg: '#AD846D' },
      { lines: ['또. 또. 또 뜨네.', '오늘도 화장이 안먹어..!'], emo: '💄😩', bg: '#A1947F' }
    ];
    const personas = root.querySelector('.nnd-personas');
    if (personas) {
      const pills = [...personas.querySelectorAll('.nnd-pill')];
      const wrap = document.createElement('div');
      wrap.style.cssText = 'margin:28px auto 0;max-width:540px;box-sizing:border-box;padding:0 24px;display:flex;flex-direction:column;gap:22px;text-align:left';
      pills.forEach((pill, i) => {
        const c = CHAT[i]; if (!c) return;
        const img = pill.querySelector('img'), name = pill.querySelector('.nnd-pill__name').textContent;
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;align-items:flex-start;gap:10px';
        const av = document.createElement('div');
        av.style.cssText = 'width:40px;height:40px;flex-shrink:0;border-radius:50%;background:rgba(255,255,255,.6);display:flex;align-items:center;justify-content:center';
        const im = document.createElement('img'); im.src = img.src; im.alt = '';
        im.style.cssText = 'width:30px;height:30px;border-radius:50%';
        av.appendChild(im);
        const col = document.createElement('div');
        col.style.cssText = 'display:flex;flex-direction:column;align-items:flex-start;min-width:0';
        const nm = document.createElement('p'); nm.textContent = name;
        nm.style.cssText = 'margin:0 0 4px;font-size:14px;line-height:20px;font-weight:600;color:rgba(42,42,41,.7)';
        col.appendChild(nm);
        c.lines.forEach((t, k) => {
          const b = document.createElement('p'); b.textContent = t;
          b.style.cssText = 'margin:' + (k ? '4px' : '0') + ' 0 0;padding:9px 14px;border-radius:20px;background:' + c.bg + ';color:#fff;font-size:15px;line-height:22px;font-weight:500';
          col.appendChild(b);
        });
        const emo = document.createElement('span'); emo.textContent = c.emo;
        emo.style.cssText = 'display:inline-block;margin:-8px 0 0 10px;padding:2px 6px;border-radius:12px;background:#FAFAF6;font-size:14px;line-height:20px';
        col.appendChild(emo);
        row.appendChild(av); row.appendChild(col); wrap.appendChild(row);
      });
      personas.replaceWith(wrap);
    }
    root.querySelectorAll('.nnd-review').forEach(r => {          /* 아이디와 별점을 한 줄로 */
      const id = r.querySelector('.nnd-review__id'), stars = r.querySelector('.nnd-stars');
      if (!id || !stars) return;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:12px';
      id.before(row); row.appendChild(id); row.appendChild(stars);
      stars.style.position = 'static';
    });
    root.querySelectorAll('.nnd-stars').forEach(s => {          /* 별점 SVG → 글자 */
      const t = document.createElement('span');
      t.className = s.className; t.textContent = '★★★★★';
      t.style.cssText = 'display:inline-block;flex-shrink:0;font-size:14px;line-height:14px;letter-spacing:1px;color:' +
        (s.classList.contains('nnd-stars--mute') ? 'rgba(42,42,41,.4)' : '#D35B40');
      s.replaceWith(t);
    });
    root.querySelectorAll('.nnd-marker').forEach(m => { m.style.position = 'static'; });
    root.querySelectorAll('.nnd-wide__chips').forEach(c => {    /* 사진 위 말풍선 → 사진 아래로 */
      c.style.position = 'static'; c.style.padding = '16px 16px 0';
      c.parentNode.after(c);
    });
    root.querySelectorAll('.nnd-wide, .nnd-block__media').forEach(m => { m.style.aspectRatio = 'auto'; m.style.background = 'transparent'; });
    root.style.width = 'auto'; root.style.margin = '0'; root.style.paddingBottom = '80px';

    /* ---- 2. 보이는 모양을 인라인 스타일로 ---- */
    const INHERIT = ['color', 'font-size', 'font-weight', 'line-height', 'letter-spacing', 'text-align', 'text-decoration-line', 'white-space'];
    const BOX = ['display', 'flex-direction', 'flex-wrap', 'align-items', 'justify-content', 'gap', 'flex-shrink', 'flex-grow',
      'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
      'background-color', 'border-top', 'border-bottom', 'border-left', 'border-right', 'border-radius', 'max-width', 'overflow', 'object-fit', 'vertical-align'];
    const DEFAULT = { 'margin-top': '0px', 'margin-right': '0px', 'margin-bottom': '0px', 'margin-left': '0px',
      'padding-top': '0px', 'padding-right': '0px', 'padding-bottom': '0px', 'padding-left': '0px',
      'background-color': 'rgba(0, 0, 0, 0)', 'max-width': 'none', 'border-radius': '0px', 'overflow': 'visible', 'object-fit': 'fill',
      'flex-direction': 'row', 'flex-wrap': 'nowrap', 'align-items': 'normal', 'justify-content': 'normal', 'gap': 'normal',
      'flex-shrink': '1', 'flex-grow': '0', 'vertical-align': 'baseline' };
    const KEEP_TAG = { P: 'p', SPAN: 'span', IMG: 'img', OL: 'ol', UL: 'ul', LI: 'li', B: 'b', DEL: 'del', BR: 'br' };
    const isBorderNone = v => /^0px none/.test(v) || / none /.test(v + ' ');

    function explicitSize(el, prop) {               /* 스타일시트가 폭·높이를 정했는지: auto로 바꿔 보고 달라지면 그렇다 */
      const before = el.getBoundingClientRect()[prop];
      const old = el.style[prop];
      el.style[prop] = 'auto';
      const after = el.getBoundingClientRect()[prop];
      el.style[prop] = old;
      return Math.abs(before - after) > 0.5 ? Math.round(before) + 'px' : null;
    }
    function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    /* 편집기는 미디어쿼리가 안 돼서, px 값을 화면 폭에 따라 자라는 clamp()로 바꾼다.
       390px 화면에서 원래 크기, 넓은 화면에서 최대 1.3배. clamp를 못 읽는 경우를 위해 px를 먼저 적는다. */
    const SCALE_PROPS = /^(font-size|line-height|margin|padding|gap|border-radius|width|height|min-width|min-height)/;
    const MAX = 1.3;
    function grow(decl) {
      const i = decl.indexOf(':'); const prop = decl.slice(0, i), val = decl.slice(i + 1);
      if (!SCALE_PROPS.test(prop) || !/\d+(\.\d+)?px/.test(val) || /calc|clamp/.test(val)) return [decl];
      const g = val.replace(/(-?\d+(?:\.\d+)?)px/g, (m, n) => {
        n = parseFloat(n); if (Math.abs(n) < 2) return m;
        const lo = Math.min(n, n * MAX), hi = Math.max(n, n * MAX);
        return 'clamp(' + +lo.toFixed(2) + 'px,' + +(n / 3.9).toFixed(3) + 'vw,' + +hi.toFixed(2) + 'px)';
      });
      return g === val ? [decl] : [decl, prop + ':' + g];
    }
    const growAll = arr => arr.reduce((a, d) => a.concat(grow(d)), []);
    function walk(el, parentCS) {
      if (el.nodeType === 3) return esc(el.textContent.replace(/\s+/g, ' '));
      if (el.nodeType !== 1) return '';
      const cs = getComputedStyle(el);
      if (cs.display === 'none') return '';
      if (el.tagName === 'BR') return '<br>';
      const tag = KEEP_TAG[el.tagName] || (cs.display.indexOf('inline') === 0 ? 'span' : 'div');
      const st = [];
      INHERIT.forEach(p => {
        const v = cs.getPropertyValue(p);
        const always = p === 'text-align' && (tag === 'div' || tag === 'p');   /* 편집기·테마가 칸마다 정렬을 덮어써도 버티게 */
        if (always || !parentCS || parentCS.getPropertyValue(p) !== v) st.push(p.replace('text-decoration-line', 'text-decoration') + ':' + (v === 'start' ? 'left' : v));
      });
      BOX.forEach(p => {
        const v = cs.getPropertyValue(p);
        if (p === 'display') {
          const def = { span: 'inline', b: 'inline', del: 'inline', img: 'inline', li: 'list-item' }[tag] || 'block';
          if (v !== def) st.push('display:' + v);
          return;
        }
        if (p.indexOf('border-') === 0 && p !== 'border-radius') { if (!isBorderNone(v)) st.push(p + ':' + v); return; }
        /* 편집기·테마가 문단(p)과 목록에 여백을 넣으므로 0이어도 직접 적는다 */
        const forceZero = /^(margin|padding)-/.test(p) && (tag === 'p' || tag === 'ol' || tag === 'ul' || tag === 'li');
        if (DEFAULT[p] !== v || forceZero) st.push(p + ':' + v);
      });
      if (el === root) st.push("font-family:'42dot Sans',-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo',sans-serif", 'max-width:720px', 'margin:0 auto', 'box-sizing:border-box');
      if (tag === 'img') {
        /* 편집기(Froala)는 사진에 여백 5px·가운데 정렬·폭 줄임을 붙이고 인라인 지정도 지울 수 있다.
           그래서 사진마다 크기를 정한 상자를 씌운다. 사진에 무슨 일이 생겨도 상자 밖 배치는 그대로다. */
        const r = el.getBoundingClientRect();
        const img = '<img src="' + el.src + '" alt="' + esc(el.alt || '') + '" loading="lazy" style="display:block;margin:0;padding:0;border:0;max-width:100%;';
        if (r.width < 140) {
          const w = Math.round(r.width), h = Math.round(r.height);
          const rad = cs.borderRadius !== '0px' ? 'border-radius:' + cs.borderRadius + ';' : '';
          /* 상자를 사진보다 10px 크게: 편집기가 여백 5px·폭 -10px을 붙여도, 안 붙여도 사진은 w×h 그대로 가운데 */
          const W = w + 10, H = h + 10;
          const cw = 'clamp(' + w + 'px,' + +(w / 3.9).toFixed(3) + 'vw,' + +(w * MAX).toFixed(2) + 'px)';
          const ch = 'clamp(' + h + 'px,' + +(h / 3.9).toFixed(3) + 'vw,' + +(h * MAX).toFixed(2) + 'px)';
          const box = (p, px, c) => p + ':' + px + 'px;' + p + ':calc(' + c + ' + 10px);';
          return '<div style="' + box('width', W, cw) + box('height', H, ch) + box('min-width', W, cw) + 'flex-shrink:0;margin:-5px;display:flex;align-items:center;justify-content:center;line-height:0;font-size:0">' +
            img + 'width:' + w + 'px;width:' + cw + ';height:' + h + 'px;height:' + ch + ';min-width:' + w + 'px;min-width:' + cw + ';min-height:' + h + 'px;min-height:' + ch + ';object-fit:cover;' + rad + '">' + '</div>';
        }
        /* 큰 사진: 편집기가 폭을 10px 줄이고 위아래 5px을 넣어도 상자 밖으로 5px씩 넓혀 원래 폭을 맞춘다 */
        return '<div style="margin:0 -5px;line-height:0;font-size:0">' + img + 'width:100%;height:auto">' + '</div>';
      }
      const w = explicitSize(el, 'width');
      /* 사진 옆 글 칸만 남은 폭을 차지 (사용감 점처럼 폭이 정해진 칸은 제외) */
      if (!w && parentCS && /flex/.test(parentCS.display) && parentCS.flexDirection === 'row' && tag === 'div' && el.textContent.trim() && !el.querySelector(':scope > img')) st.push('flex-grow:1', 'min-width:0');
      if (w && el !== root && parseFloat(w) < 300) st.push('width:' + w, 'flex-shrink:0');
      const h = explicitSize(el, 'height');
      if (h && parseFloat(h) < 60 && (!el.children.length || el.style.height)) st.push('height:' + h, 'min-height:' + h);
      let inner = '';
      el.childNodes.forEach(c => { inner += walk(c, cs); });
      if (el !== root && el.style.marginLeft === 'auto') st.push('margin-left:auto', 'margin-right:auto');   /* 가운데 두기는 auto 그대로 */
      const out = growAll(st);
      return '<' + tag + (out.length ? ' style="' + out.join(';') + '"' : '') + '>' + inner + '</' + tag + '>';
    }
    return walk(root, null);
  });

  const head = '<!-- 비상용 상세 (' + name + ') — tools/build_fallback.js로 만든 것. 직접 고치지 말고 pages/' + name + '.html을 고친 뒤 다시 뽑는다.\n' +
    '     아임웹 상품 > 상품 상세 설명 > 에디터로 등록 > 코드 보기(</>)에 전부 붙여 넣는다. CDN 화면이 뜨면 숨는다. -->\n';
  const out = head + html.replace(/(<\/(?:div|p|li|ol|ul)>)/g, '$1\n') + '\n';
  fs.writeFileSync(path.join(outDir, name + '.html'), out);
  console.log('wrote fallback/' + name + '.html', out.length, 'bytes');

  /* 미리보기 캡처 (휴대폰·PC) */
  const shots = process.env.SHOT_DIR;
  if (shots) {
    for (const vp of [{ width: 390, height: 844, n: 'mobile' }, { width: 1280, height: 900, n: 'pc' }]) {
      const p = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      await p.setContent('<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=42dot+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"></head><body style="margin:0">' + out + '</body></html>', { waitUntil: 'networkidle' });
      await p.evaluate(() => Promise.all([...document.images].map(i => { i.loading = 'eager'; return i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }); })));
      await p.screenshot({ path: path.join(shots, 'fallback_' + vp.n + '.png'), fullPage: true });
      await p.close();
    }
  }
  await browser.close();
})();
