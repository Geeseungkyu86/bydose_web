/* ============================================================
   바이도즈 상품 상세 라우터 (2026-11-05 다시 씀)

   loader.html(아임웹 공용 상품 상세 페이지의 코드 위젯)이 이 파일을 받아 실행한다.
   주소의 상품 번호(shop_view?idx=63)를 보고, PAGES 목록에 있으면 pages/<파일>.html을 받아
   로더 자리에 넣고 그 안의 스크립트를 실행한다. 상세정보 본문으로 옮기는 일은 각 페이지 파일이 한다
   (크림 페이지는 원래 위젯과 같은 코드라 동작도 같다).

   하지 않는 것 (2026-11-05 사고 뒤 정한 원칙):
   - 아임웹 요소를 숨기거나 접지 않는다. (구매평·상세 설명은 아임웹이 그리는 그대로)
   - 목록에 없는 상품에서는 아무것도 하지 않는다.

   상품 추가: PAGES에 '상품번호': 'pages/파일이름.html' 한 줄 → main 병합 → 1분 안에 반영.
   되돌리기: 그 줄을 지우고 main 병합 → 1분 안에 그 상품은 원래 아임웹 화면.
   미리보기: 상품 주소 끝에 &bd_page=파일이름 (목록과 상관없이 그 파일을 넣어 본다).
   점검: 로더 자리(#bydose-pages)의 data-bd-page / data-bd-ready / data-bd-error 속성.
   ============================================================ */
(function () {
  var PAGES = {
    '63': 'pages/nightnight-cream.html'   /* 나잇나잇 크림 */
  };

  var root = document.getElementById('bydose-pages');
  if (!root || root.getAttribute('data-bd-init')) return;
  root.setAttribute('data-bd-init', '1');

  var cfg = window.BYDOSE_PAGES || {};
  var sources = cfg.sources || ['https://cdn.jsdelivr.net/gh/geeseungkyu86/bydose_web@main/imweb/product-pages/'];
  var v = cfg.v || Math.floor(Date.now() / 60000);
  var params = new URLSearchParams(location.search);
  var idx = params.get('idx') || '';
  var preview = (params.get('bd_page') || '').replace(/[^a-z0-9-]/gi, '');
  var file = preview ? 'pages/' + preview + '.html' : PAGES[idx];
  if (!file) return;
  root.setAttribute('data-bd-page', file);

  (function get(i) {
    if (i >= sources.length) {
      root.setAttribute('data-bd-error', 'page');
      if (window.console) console.warn('[bydose-pages] 상세를 받지 못함', file);
      return;
    }
    fetch(sources[i] + file + '?v=' + v, { credentials: 'omit' })
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.text(); })
      .then(mount)
      .catch(function () { get(i + 1); });
  })(0);

  /* innerHTML로 넣은 <script>는 실행되지 않아서, 순서대로 새로 만들어 붙인다. */
  function mount(html) {
    var tpl = document.createElement('template');
    tpl.innerHTML = html;
    var scripts = Array.prototype.slice.call(tpl.content.querySelectorAll('script'));
    scripts.forEach(function (s) { s.parentNode.removeChild(s); });
    root.appendChild(tpl.content);
    runNext(scripts, 0);
  }

  function runNext(list, i) {
    if (i >= list.length) {
      root.setAttribute('data-bd-ready', '1');
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
