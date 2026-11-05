/* ============================================================
   바이도즈 상품 상세 라우터 (2026-11-05)

   아임웹 '공통 상품 상세 페이지'의 코드 위젯(loader.html)이 이 파일을 부른다.
   주소의 상품 번호(shop_view?idx=63)를 보고 그 상품의 상세 화면만 꽂는다.
   목록에 없는 상품은 아무것도 꽂지 않는다 → 아임웹 상품별 '상세 설명'이 그대로 보인다.

   비상용 이미지 (2026-11-05): 상품별 '상세 설명' 칸에 같은 내용을 이미지로 넣어 둔다.
   - 기다리는 동안(html.bd-pending)과 CDN 화면이 뜬 뒤(html.bd-page-on)에는 그 이미지를 숨긴다.
   - 목록에 없는 상품이거나 CDN을 못 받으면 숨김을 풀어 이미지가 보인다.
   - 숨기는 규칙과 6초 안전장치는 loader.html에 있다(router.js를 못 받아도 풀리게).
   - pages/ 파일의 맨 바깥 요소에는 자동으로 data-bd-piece가 붙고, 이것만 상세 본문에 남는다.

   상품 추가: 아래 PAGES에 '상품번호': 'pages/파일이름.html' 한 줄 추가 → main에 병합.
   미리보기: 아무 상품 주소 끝에 &bd_page=파일이름 (예: shop_view?idx=70&bd_page=six-month)
   ============================================================ */
(function () {
  var PAGES = {
    '63': 'pages/nightnight-cream.html'   /* 나잇나잇 크림 */
    /* '00': 'pages/six-month.html',        6개월 정기배송 (상품 등록 후 번호 넣기) */
    /* '00': 'pages/nightnight-mist.html',  나잇나잇 미스트 */
  };

  var root = document.getElementById('bydose-pages');
  if (!root || root.getAttribute('data-bd-init')) return;
  root.setAttribute('data-bd-init', '1');

  var base = root.getAttribute('data-base') || '';
  var ver = root.getAttribute('data-v') || String(Math.floor(Date.now() / 6e5));
  var params = new URLSearchParams(location.search);
  var idx = params.get('idx') || '';
  var preview = (params.get('bd_page') || '').replace(/[^a-z0-9-]/gi, '');
  var file = preview ? 'pages/' + preview + '.html' : PAGES[idx];

  /* 위젯이 들어 있는 아임웹 섹션. 꽂을 게 없으면 빈 칸이 남지 않게 접는다
     (상품 위젯이 같이 들어 있는 섹션은 절대 접지 않는다). */
  function collapse() {
    var sec = root.closest('.section_wrap, [id^="s20"]');
    if (!sec) return;
    /* 상품 구매 영역·상세정보 본문이 같은 구역에 있으면 절대 접지 않는다(2026-11-05: 상세 본문까지 접혀 비상용이 안 보였음).
       로더 말고 글자·사진·영상이 하나라도 있는 구역도 접지 않는다. */
    if (sec.querySelector('#prod_detail, #prod_detail_body, [id^="prod_detail"], [class*="prod_detail"]')) return;
    var others = sec.querySelectorAll('img, iframe, video, a, button, p, li');
    for (var i = 0; i < others.length; i++) if (!root.contains(others[i])) return;
    var text = (sec.textContent || '').replace(/\s+/g, '');
    if (text.length > 0 && text !== (root.textContent || '').replace(/\s+/g, '')) return;
    sec.style.display = 'none';
  }

  var html = document.documentElement;
  function showFallback() { html.classList.remove('bd-pending'); }

  if (!file) { showFallback(); collapse(); return; }
  root.setAttribute('data-bd-page', file);

  fetch(base + file + '?v=' + ver, { credentials: 'omit' })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then(mount)
    .catch(function (e) {
      /* 실패하면 아임웹 상세 설명만 보인다(페이지가 비지 않게 상세 설명에 최소 이미지는 둔다). */
      if (window.console) console.warn('[bydose-pages] load failed', file, e);
      html.classList.remove('bd-page-on');
      showFallback();
      collapse();
    });

  /* innerHTML로 넣은 <script>는 실행되지 않아서, 순서대로 새로 만들어 붙인다. */
  function mount(html) {
    var tpl = document.createElement('template');
    tpl.innerHTML = html;
    var scripts = Array.prototype.slice.call(tpl.content.querySelectorAll('script'));
    scripts.forEach(function (s) { s.parentNode.removeChild(s); });
    /* 맨 바깥 요소 표시: 상세 본문으로 옮겨져도 숨김 대상에서 빠진다 */
    Array.prototype.forEach.call(tpl.content.children, function (el) {
      if (!/^(STYLE|LINK|META)$/.test(el.tagName)) el.setAttribute('data-bd-piece', '');
    });
    root.appendChild(tpl.content);
    runNext(scripts, 0);
  }

  function runNext(list, i) {
    if (i >= list.length) {
      root.setAttribute('data-bd-ready', '1');
      html.classList.add('bd-page-on');
      showFallback();
      document.dispatchEvent(new CustomEvent('bydose:page-ready', { detail: { idx: idx, file: file } }));
      return;
    }
    var old = list[i], s = document.createElement('script');
    for (var a = 0; a < old.attributes.length; a++) s.setAttribute(old.attributes[a].name, old.attributes[a].value);
    if (old.src) {
      s.onload = s.onerror = function () { runNext(list, i + 1); };
      root.appendChild(s);
    } else {
      s.textContent = old.textContent;
      root.appendChild(s);
      runNext(list, i + 1);
    }
  }
})();
