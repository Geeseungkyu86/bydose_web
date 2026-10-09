#!/usr/bin/env python3
"""nightnight.html → 아임웹 구매 페이지(shop_view?idx=63)용 코드 위젯 2개를 만든다.

  python3 tools/build_nightnight_pdp.py

원본은 nightnight.html 하나다. 상세페이지 문구·이미지·스타일을 고칠 때는 nightnight.html을 고치고
이 스크립트를 다시 돌린 뒤, 생성된 두 파일을 아임웹 코드 위젯에 다시 붙여넣는다.

  nightnight-pdp-top.html     위젯 ① — 상품 위젯 "위" 섹션. 게이트 + 전체 CSS + 구매 영역 스타일 + P1 히어로
  nightnight-pdp-bottom.html  위젯 ② — 상품 위젯 "아래" 섹션. 게이트 + P3~P8 + 스크립트 + PC 플로팅 구매 바

상품 상세 레이아웃은 모든 상품이 같이 쓴다. 그래서 두 위젯 내용은 기본 숨김이고, idx=63 페이지에서만
<html>에 nn-pdp 클래스를 붙여 보이게 한다(게이트). 다른 상품 페이지에는 아무것도 보이지 않는다.

nightnight.html의 CSS는 단독 페이지 전제라 .hero/.wrap/.body/.more 같은 흔한 이름을 쓴다. 구매 페이지에서는
아임웹 요소와 섞이므로 모든 선택자 앞에 .nnp를 붙여 우리 영역 안에서만 먹게 한다.
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'nightnight.html'
OUT_TOP = ROOT / 'nightnight-pdp-top.html'
OUT_BOTTOM = ROOT / 'nightnight-pdp-bottom.html'

SCOPE = '.nnp'
PROD_IDX = '63'


def fail(msg):
    sys.exit('build_nightnight_pdp: ' + msg)


def replace_once(text, old, new, what):
    """원본 구조가 바뀌어 치환 대상이 사라지면 조용히 넘어가지 말고 멈춘다."""
    if text.count(old) != 1:
        fail(f'{what}: "{old}"가 정확히 1번 있어야 하는데 {text.count(old)}번 있음 — nightnight.html 구조가 바뀌었는지 확인')
    return text.replace(old, new)


# ── CSS 스코프 ───────────────────────────────────────────────────────────────

def scope_selector(sel):
    sel = sel.strip()
    if sel == 'html':
        return None                      # 아임웹 페이지 전체(html)를 건드리지 않는다 — scroll-behavior는 스크립트로 대신함
    if sel in (':root', 'body'):
        return SCOPE                     # 변수·기본 글꼴/색은 우리 영역 루트에 건다
    return f'{SCOPE} {sel}'


def scope_rules(css):
    """주석을 뺀 CSS의 규칙마다 선택자 앞에 .nnp를 붙인다. @media 블록은 안쪽을 재귀로 처리.
    nightnight.html에는 @media 외의 at-rule이 없다 — 생기면 멈춘다."""
    out = []
    i, n = 0, len(css)
    while i < n:
        brace = css.find('{', i)
        if brace == -1:
            if css[i:].strip():
                fail('CSS 끝에 해석할 수 없는 내용이 있음: ' + css[i:].strip()[:60])
            break
        prelude = css[i:brace].strip()
        if prelude.startswith('@'):
            if not prelude.startswith('@media'):
                fail('지원하지 않는 at-rule: ' + prelude)
            depth, j = 1, brace + 1
            while depth:
                if j >= n:
                    fail('@media 블록 괄호가 닫히지 않음: ' + prelude)
                depth += {'{': 1, '}': -1}.get(css[j], 0)
                j += 1
            inner = scope_rules(css[brace + 1:j - 1])
            if inner.strip():
                out.append(f'{prelude}{{\n{inner}}}\n')
            i = j
        else:
            end = css.find('}', brace)
            body = '\n  '.join(l.strip() for l in css[brace + 1:end].splitlines() if l.strip())
            sels = [s for s in (scope_selector(x) for x in prelude.split(',')) if s]
            if sels:
                out.append(f'{",".join(sels)}{{{body}}}\n')
            i = end + 1
    return ''.join(out)


# ── 구매 페이지 전용 조각 (원본에 없는 부분) ─────────────────────────────────

GATE = f'''<script>
/* 게이트 — 상품 상세 레이아웃은 모든 상품이 같이 쓰므로, 나잇나잇 크림(idx={PROD_IDX}) 페이지에서만
   <html>에 nn-pdp를 붙인다. .nnp 영역은 이 클래스가 있을 때만 보인다(아래 CSS).
   위젯 ①·② 양쪽에 같은 코드가 있다 — 어느 한쪽만 남아도 동작하도록. */
(function(){{
  var p = new URLSearchParams(location.search);
  if (/\\/shop_view\\/?$/.test(location.pathname) && p.get('idx') === '{PROD_IDX}') {{
    document.documentElement.classList.add('nn-pdp');
  }}
}})();
</script>
<style>.nnp{{display:none}}html.nn-pdp .nnp{{display:block}}</style>'''

FONTS = '''<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300;400;500;700&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet">'''

# 아임웹 구매 영역 꾸미기. 선택자는 2026-10-09 콘솔 실측(PC 1000px · 모바일 338/572px) 기준.
# 원칙: 아임웹 요소는 숨기지 않고 꾸미기만 한다 — 아임웹이 구조를 바꿔 선택자가 빗나가도
# 디자인만 기본값으로 돌아갈 뿐 구매는 계속 된다. 네이버페이 버튼은 네이버 가이드 때문에 건드리지 않는다.
PDP_CSS = '''
/* 페이지 바탕 — nightnight 크림색 */
html.nn-pdp body{background:#F3F3E9}
/* 상품 위젯 섹션(상세 레이아웃 공용 섹션 — 실측 id). 배경을 섹션 설정 대신 여기서 바꾸는 이유:
   섹션 설정은 모든 상품에 적용되기 때문 */
html.nn-pdp #s20240828fb34601919f3e{background-color:#F3F3E9!important}

/* 구매 영역 글꼴 — 아이콘 폰트를 깨지 않도록 *가 아니라 컨테이너에 걸어 상속시킨다 */
html.nn-pdp #prod_detail{
  font-family:"42dot Sans","Asta Sans",-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Pretendard",sans-serif;
  color:#2A2A29;-webkit-font-smoothing:antialiased;
}
html.nn-pdp #prod_detail :is(button,input,select,textarea){font-family:inherit}

/* 구매하기 — PC a._btn_buy, 모바일 하단 고정 바의 a.btn.buy(showMobileOptions) 둘 다 .btn.buy */
html.nn-pdp #prod_detail a.btn.buy{
  background:#2A2A29!important;border-color:#2A2A29!important;color:#F3F3E9!important;
  border-radius:0!important;font-weight:500;
}
html.nn-pdp #prod_detail a.btn.buy:hover{background:#D35B40!important;border-color:#D35B40!important}
/* 장바구니 — 외곽선 버튼 */
html.nn-pdp #prod_detail a._btn_cart{
  background:transparent!important;border:1px solid #2A2A29!important;color:#2A2A29!important;
  border-radius:0!important;font-weight:500;
}

/* 모바일(아임웹 기준 991px 이하)엔 하단 고정 구매 바(실측 72px)가 처음부터 떠 있어서
   100dvh 히어로의 하단 스트립(패키지 문구·화살표)을 덮는다 — 그만큼 히어로를 줄인다 */
@media (max-width:991px){
  html.nn-pdp .nnp .hero{height:calc(100vh - 72px);height:calc(100dvh - 72px)}
}

/* 아로마 팝업은 구매 페이지에서 헤더(z-index 99999)와 모바일 하단 구매 바 위로 올린다 */
html.nn-pdp .nnp .aroma-modal-overlay{z-index:100000}

/* PC 플로팅 구매 바 — 원래 구매 버튼이 화면 위로 지나가면 나타난다. 모바일에는 아임웹 하단 고정 바가 있어 띄우지 않는다(스크립트) */
html.nn-pdp .nnp.nnp-float{
  position:fixed;left:50%;bottom:24px;z-index:9999;
  width:calc(100% - 208px);max-width:1280px;height:56px;box-sizing:border-box;
  display:flex;align-items:center;justify-content:space-between;padding:0 24px;
  background:rgba(243,243,233,.85);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);
  border:1px solid rgba(42,42,41,.12);
  font-family:"42dot Sans",-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo",sans-serif;
  opacity:0;pointer-events:none;transform:translateX(-50%) translateY(12px);
  transition:opacity .3s ease,transform .3s ease;
}
html.nn-pdp .nnp.nnp-float.is-visible{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}
.nnp-float__name{font-size:16px;font-weight:500;color:#2A2A29}
.nnp-float__btn{
  width:180px;height:40px;border:0;cursor:pointer;
  background:#2A2A29;color:#F3F3E9;font:inherit;font-size:16px;font-weight:500;
}
.nnp-float__btn:hover{background:#D35B40}
'''

HERO_SCROLL_JS = '''<script>
/* 히어로 화살표 → 아임웹 구매 영역으로 부드럽게 이동. html{scroll-behavior:smooth}는 아임웹 페이지 전체에
   걸리므로 쓰지 않고 여기서만 smooth 스크롤한다. 해시를 남기지 않는 이유: 아임웹이 #prod_detail_* 해시로
   탭을 바꾸기 때문 */
(function(){
  document.querySelectorAll('.nnp [data-nnp-scroll]').forEach(function(a){
    a.addEventListener('click', function(e){
      var t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
})();
</script>'''

FLOAT_HTML = '''<div class="nnp nnp-float" id="nnpFloat">
  <span class="nnp-float__name">나잇나잇 크림</span>
  <button type="button" class="nnp-float__btn">구매하기</button>
</div>'''

FLOAT_JS = '''<script>
/* PC 플로팅 구매 바. 자체 결제 로직 없이 아임웹의 원래 구매 버튼(a._btn_buy)을 대신 누른다 —
   아임웹이 버튼 클릭에 묶어둔 추적(trackClickPurchaseShopView 등)과 옵션 검증이 그대로 돈다.
   모바일은 원래 버튼이 숨겨져 있고(offsetParent 없음) 아임웹 하단 고정 바가 있으므로 띄우지 않는다. */
(function(){
  if (!document.documentElement.classList.contains('nn-pdp')) return;
  var bar = document.getElementById('nnpFloat');
  var btn = bar && bar.querySelector('.nnp-float__btn');
  if (!btn) return;

  function nativeBuy(){ return document.querySelector('#prod_detail a._btn_buy'); }

  var ticking = false;
  function update(){
    ticking = false;
    var nb = nativeBuy();
    var show = !!nb && nb.offsetParent !== null && nb.getBoundingClientRect().bottom < 0;
    bar.classList.toggle('is-visible', show);
  }
  window.addEventListener('scroll', function(){
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, {passive:true});
  window.addEventListener('resize', update);
  update();

  btn.addEventListener('click', function(){
    var nb = nativeBuy();
    if (!nb) return;
    /* 먼저 구매 영역으로 이동 — 옵션 미선택 경고가 떠도 사용자가 옵션 칸을 보고 있게 */
    (document.querySelector('#prod_detail .goods_form_wrap') || nb).scrollIntoView({block:'start'});
    nb.click();
  });
})();
</script>'''


# ── 원본 분해 ────────────────────────────────────────────────────────────────

def main():
    src = SRC.read_text(encoding='utf-8')

    styles = re.findall(r'<style>(.*?)</style>', src, re.S)
    if len(styles) != 1:
        fail(f'<style> 블록이 1개여야 하는데 {len(styles)}개')
    css = re.sub(r'/\*.*?\*/', '', styles[0], flags=re.S)   # 주석 안에도 { }가 있어서 먼저 뺀다
    scoped_css = scope_rules(css)

    m = re.search(r'<!-- =+ P1 · 히어로 =+ -->\s*<section class="hero".*?</section>', src, re.S)
    if not m:
        fail('P1 히어로 섹션을 찾지 못함')
    hero = replace_once(m.group(0), 'href="#p2"', 'href="#prod_detail" data-nnp-scroll', '히어로 화살표')

    # P2(구매 요약 카드)는 넣지 않는다 — 아임웹 구매 영역이 그 역할을 한다.
    m = re.search(r'<!-- =+ P3 · .*?<section class="sec" id="p8">.*?</section>', src, re.S)
    if not m:
        fail('P3~P8 구간을 찾지 못함')
    story = m.group(0)

    scripts = re.findall(r'<script>.*?</script>', src, re.S)
    hero_js = [s for s in scripts if 'fitHero' in s]
    story_js = [s for s in scripts if 'fitHero' not in s]
    if len(hero_js) != 2 or len(story_js) != 2:
        fail(f'스크립트 구성이 바뀜(히어로 {len(hero_js)}개 / 본문 {len(story_js)}개) — 이 스크립트의 분류 규칙 확인')
    hero_js = [replace_once(s, "document.querySelector('.hero')", "document.querySelector('.nnp .hero')", '히어로 보정')
               for s in hero_js]
    story_js = '\n'.join(story_js)
    story_js = replace_once(story_js, "document.querySelectorAll('.accordion__toggle')",
                            "document.querySelectorAll('.nnp .accordion__toggle')", '아코디언')
    story_js = replace_once(story_js, "document.querySelectorAll('.vlazy')",
                            "document.querySelectorAll('.nnp .vlazy')", 'Vimeo 지연 로딩')

    note = ('<!-- 자동 생성 파일 — 직접 고치지 말 것. nightnight.html을 고친 뒤 '
            '`python3 tools/build_nightnight_pdp.py`로 다시 만든다. 설치 방법: nightnight-pdp.md -->')

    top = '\n'.join([
        note,
        '<!-- 위젯 ① — 상품 상세페이지 레이아웃에서 상품 위젯 "위" 섹션의 코드 위젯 (섹션 상하 여백 0) -->',
        GATE,
        FONTS,
        '<style>\n' + scoped_css + PDP_CSS + '</style>',
        '<div class="nnp">',
        hero,
        '</div>',
        *hero_js,
        HERO_SCROLL_JS,
        '',
    ])
    bottom = '\n'.join([
        note,
        '<!-- 위젯 ② — 상품 상세페이지 레이아웃에서 상품 위젯 "아래" 섹션의 코드 위젯 (섹션 상하 여백 0). '
        'CSS는 위젯 ①에 있다 -->',
        GATE,
        '<div class="nnp">',
        story,
        '</div>',
        FLOAT_HTML,
        story_js,
        FLOAT_JS,
        '',
    ])

    OUT_TOP.write_text(top, encoding='utf-8')
    OUT_BOTTOM.write_text(bottom, encoding='utf-8')
    for p in (OUT_TOP, OUT_BOTTOM):
        print(f'{p.name}: {p.stat().st_size / 1024:.1f} KB')


if __name__ == '__main__':
    main()
