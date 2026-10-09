# 나잇나잇 구매 페이지 통합 (A안)

`/nightnight` 상세페이지 디자인을 아임웹 구매 페이지(`/shop_view?idx=63`)에 합친다.
결제·옵션·재고·쿠폰·네이버페이·전환 추적은 아임웹 기능을 그대로 쓰고, 겉모습만 바꾼다.

## 구성

```
[상품 상세페이지 레이아웃 — 모든 상품 공용]
  ├─ 섹션 ①  코드 위젯: nightnight-pdp-top.html     게이트 + CSS + P1 히어로
  ├─ 섹션    아임웹 상품 위젯 (#s20240828fb34601919f3e) ← 구매 영역은 CSS로만 꾸밈
  └─ 섹션 ②  코드 위젯: nightnight-pdp-bottom.html  P3~P8 + PC 플로팅 구매 바
```

- **게이트:** 레이아웃은 모든 상품이 같이 쓰므로, 두 위젯 내용은 기본 숨김이다. `idx=63` 페이지에서만 `<html class="nn-pdp">`가 붙어 보인다. 다른 상품 페이지에는 아무것도 보이지 않고 높이도 0이다.
- **CSS 범위:** nightnight CSS의 모든 선택자 앞에 `.nnp`를 붙였다. `.body`, `.wrap`, `.more` 같은 이름이 아임웹 요소에 새지 않는다.
- **P2(구매 요약 카드)는 빠진다.** 아임웹 구매 영역이 그 역할을 한다.
- **원칙:** 아임웹 요소는 숨기지 않고 꾸미기만 한다. 아임웹이 구조를 바꿔 선택자가 빗나가도 디자인만 기본값으로 돌아가고 구매는 계속 된다. 네이버페이 버튼은 네이버 가이드 때문에 건드리지 않는다.

## 수정 방법

두 위젯 파일은 **자동 생성**이다. 직접 고치지 않는다.

1. `nightnight.html`을 고친다(단독 페이지와 구매 페이지 공통 원본).
2. `python3 tools/build_nightnight_pdp.py`를 실행한다.
3. 생성된 두 파일을 아임웹 코드 위젯 ①·②에 다시 붙여넣는다.

구매 페이지 전용 부분(게이트, 구매 영역 스타일, 플로팅 바)은 `tools/build_nightnight_pdp.py` 안에 있다.

## 설치 순서

1. 디자인 모드 > 메뉴 관리 > **상품 상세페이지**로 들어간다.
2. 상품 위젯 섹션 **위**에 빈 섹션을 추가하고, 코드 위젯에 `nightnight-pdp-top.html` 전체를 붙여넣는다.
3. 상품 위젯 섹션 **아래**에 빈 섹션을 추가하고, 코드 위젯에 `nightnight-pdp-bottom.html` 전체를 붙여넣는다.
4. 두 섹션 모두 **상하 여백 0, 전체 폭**으로 설정한다. 여백이 남으면 다른 상품 페이지에 빈 띠가 생긴다.
5. 에디터 화면에서는 두 위젯이 비어 보인다(게이트가 `idx=63` 주소에서만 연다). 실제 확인은 사이트에서 `/shop_view?idx=63`으로 한다.
6. 상품 관리 > 나잇나잇 크림 > 상세설명은 **상품정보제공고시 등 필수 정보만** 남기고 줄인다. 상세정보·구매평 탭이 스토리(P3~P8)보다 위에 오기 때문이다. 고시 정보는 법정 표기라 지우지 않는다.
7. Q&A가 0건이면 탭 설정에서 Q&A 탭을 꺼도 된다(디자인 모드 > 상품 상세페이지 위젯 설정 > 탭).

## 전환 (`/nightnight` → 구매 페이지)

검수가 끝나면 `/nightnight` 페이지의 코드 위젯 내용을 아래 한 줄로 바꾼다. 광고·QR의 UTM 파라미터가 그대로 넘어간다.

```html
<script>location.replace('/shop_view?idx=63' + location.search.replace(/^\?/, '&') + location.hash);</script>
```

## 검수 체크리스트 (실제 사이트)

- [ ] 다른 상품 페이지(예: `idx=64`)에 히어로·스토리·빈 띠가 **안** 보인다 ← 가장 중요
- [ ] PC: 히어로가 헤더 뒤로 화면 위까지 붙는다
- [ ] PC: 구매하기 → 결제, 장바구니, 네이버페이, 위시리스트
- [ ] PC: 스크롤해서 원래 구매 버튼이 지나가면 하단 플로팅 바가 뜨고, 누르면 구매로 이어진다
- [ ] 모바일: 하단 고정 구매 바 → 옵션 시트 → 결제, 히어로 하단 문구가 구매 바에 가리지 않는다
- [ ] 모바일: 헤더 위치(572px 실측에서 PC·모바일 헤더 섹션이 모두 숨겨져 있었다 — 실제 화면 확인)
- [ ] 쿠폰 다운로드, 비회원 구매, 품절 표시
- [ ] 아로마 팝업, 아코디언, P5 후기 넘기기, Vimeo 영상 재생
- [ ] iOS Safari, 안드로이드 크롬
- [ ] GA·메타 픽셀·네이버 전환 이벤트(장바구니 담기, 결제 시작, 구매)가 들어온다

## 실측 메모 (2026-10-09 콘솔)

| 항목 | 값 |
|---|---|
| 주소 | `/shop_view?idx=63` |
| body 클래스 | `doz_sys … shop_view fixed-menu-on new_fixed_header_active` |
| 상품 위젯 섹션 | `#s20240828fb34601919f3e` (페이지에 섹션은 이것 하나) |
| PC 헤더 | `#s2025111496adad2a19d7b` (`#inline_header_normal` 안, relative, 65px, 1000px 폭 기준) |
| 모바일 헤더 | `#s2025111421543da50f666` (`#inline_header_mobile` 안) |
| PC 구조 | `#prod_detail > .clearfix > .row.goods_wrapper > .goods_thumbs_wrap / .goods_form_wrap`, 그 아래 `.iewb-744.pc_layout`(리뷰 하이라이트), `.categorize.review-box`(`#fixed_tab` 탭, `#prod_detail_body` 상세설명) |
| PC 버튼 | `a._btn_buy`(confirmOrderWithCartItems), `a._btn_cart`(addCart), `a._wish_button` |
| 모바일 버튼 | 하단 고정 `div.cart_btn.n_pay`(72px) 안의 `a.btn.buy`(showMobileOptions('buy')) |
| 탭 | `a._detail` / `a._review` / `a._qna` (changeContentTab) |
| 피할 클래스 | `css-xxxx`(리뷰 하이라이트의 자동 생성 클래스 — 빌드마다 바뀜) |
| 아임웹 함수 | `SITE_SHOP_DETAIL.*` — addOrder, addCart, showPCOptions, showMobileOptions, getCurrentProdNo 등. 직접 부르지 않고 원래 버튼을 클릭해 아임웹 추적이 같이 돌게 한다 |
