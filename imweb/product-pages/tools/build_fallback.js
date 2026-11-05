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
    root.querySelectorAll('.nnd-stars').forEach(s => {          /* 별점 SVG → 글자 */
      const t = document.createElement('span');
      t.className = s.className; t.textContent = '★★★★★';
      t.style.cssText = 'display:block;text-align:right;margin-top:-20px;font-size:14px;line-height:14px;letter-spacing:1px;color:' +
        (s.classList.contains('nnd-stars--mute') ? 'rgba(42,42,41,.4)' : '#D35B40');
      s.replaceWith(t);
    });
    root.querySelectorAll('.nnd-marker').forEach(m => { m.style.position = 'static'; });
    root.querySelectorAll('.nnd-wide__chips').forEach(c => {    /* 사진 위 말풍선 → 사진 아래로 */
      c.style.position = 'static'; c.style.padding = '16px 16px 0';
      c.parentNode.after(c);
    });
    root.querySelectorAll('.nnd-wide, .nnd-block__media').forEach(m => { m.style.aspectRatio = 'auto'; });
    root.style.width = 'auto'; root.style.margin = '0'; root.style.paddingBottom = '80px';

    /* ---- 2. 보이는 모양을 인라인 스타일로 ---- */
    const INHERIT = ['color', 'font-size', 'font-weight', 'line-height', 'letter-spacing', 'text-align', 'text-decoration-line', 'white-space'];
    const BOX = ['display', 'flex-direction', 'flex-wrap', 'align-items', 'justify-content', 'gap', 'flex-shrink', 'flex-grow',
      'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
      'background-color', 'border-top', 'border-bottom', 'border-left', 'border-right', 'border-radius', 'overflow', 'object-fit', 'vertical-align'];
    const DEFAULT = { 'margin-top': '0px', 'margin-right': '0px', 'margin-bottom': '0px', 'margin-left': '0px',
      'padding-top': '0px', 'padding-right': '0px', 'padding-bottom': '0px', 'padding-left': '0px',
      'background-color': 'rgba(0, 0, 0, 0)', 'border-radius': '0px', 'overflow': 'visible', 'object-fit': 'fill',
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

    function walk(el, parentCS) {
      if (el.nodeType === 3) return esc(el.textContent.replace(/\s+/g, ' '));
      if (el.nodeType !== 1) return '';
      const cs = getComputedStyle(el);
      if (cs.display === 'none') return '';
      if (el.tagName === 'BR') return '<br>';
      const tag = KEEP_TAG[el.tagName] || (cs.display.indexOf('inline') === 0 ? 'span' : 'div');
      const st = [];
      INHERIT.forEach(p => { const v = cs.getPropertyValue(p); if (!parentCS || parentCS.getPropertyValue(p) !== v) st.push(p.replace('text-decoration-line', 'text-decoration') + ':' + v); });
      BOX.forEach(p => {
        const v = cs.getPropertyValue(p);
        if (p === 'display') {
          const def = { span: 'inline', b: 'inline', del: 'inline', img: 'inline', li: 'list-item' }[tag] || 'block';
          if (v !== def) st.push('display:' + v);
          return;
        }
        if (p.indexOf('border-') === 0 && p !== 'border-radius') { if (!isBorderNone(v)) st.push(p + ':' + v); return; }
        if (DEFAULT[p] !== v) st.push(p + ':' + v);
      });
      if (el === root) st.push("font-family:'42dot Sans',-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo',sans-serif", 'max-width:560px', 'margin:0 auto', 'box-sizing:border-box');
      if (tag === 'img') {
        const r = el.getBoundingClientRect();
        if (r.width < 140) st.push('width:' + Math.round(r.width) + 'px', 'height:' + Math.round(r.height) + 'px');
        else st.push('width:100%', 'height:auto');
        st.push('display:block', 'max-width:100%');
        if (r.width < 140 && cs.borderRadius !== '0px') st.push('border-radius:' + cs.borderRadius);
        return '<img src="' + el.src + '" alt="' + esc(el.alt || '') + '" loading="lazy" style="' + st.join(';') + '">';
      }
      const w = explicitSize(el, 'width');
      if (w && el !== root && parseFloat(w) < 300) st.push('width:' + w, 'flex-shrink:0');
      const h = explicitSize(el, 'height');
      if (h && parseFloat(h) < 60 && !el.children.length) st.push('height:' + h);
      let inner = '';
      el.childNodes.forEach(c => { inner += walk(c, cs); });
      return '<' + tag + (st.length ? ' style="' + st.join(';') + '"' : '') + '>' + inner + '</' + tag + '>';
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
