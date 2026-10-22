# 바이도즈 웹

바이도즈 웹사이트 관련 코드 모음. (2026-08-11 세 폴더를 여기로 통합)

## 폴더 구조

```
바이도즈 웹/
├── imweb/                  아임웹에 붙이는 위젯 코드
│   ├── index.html            전체 미리보기 (섹션 합본)
│   ├── home-hero.html        홈 히어로
│   ├── footer.html           푸터 (아임웹 기본 푸터 오버라이드)
│   ├── floating-buy-btn.html 플로팅 구매 버튼
│   ├── shop-review-anchor.html 상품 상세: 구매평 상시 표시 + 탭 앵커 이동 (바디 코드)
│   ├── shop-promo-top.html     건조하지마요 세일 배너: 상세정보(Story) 코드 맨 위에 넣음 (~10/31)
│   ├── imweb-footer-code.html 아임웹 푸터(바디) 코드 칸 전체본: 폰트·커서 토끼·모바일 메뉴·구매평 앵커
│   ├── links.html            링크 페이지
│   ├── product-intro.html / product-detail.html
│   ├── reels-collector.html / reels-collector-widget.html
│   ├── icon-illustration-generator.html
│   └── sections/           section1~8.html
│
├── nightnight/             나잇나잇크림 상세페이지 프로토타입
│   ├── nightnight.html       ★ 현행 작업본 (아임웹 코드 위젯에 붙여넣는 파일)
│   └── nightnight-dark.html  다크모드 버전 (보류 중)
│
├── nightnight-crew/        나잇나잇 크루(NNC) 프로모션
│   ├── 나잇나잇_크루_랜딩페이지.html
│   ├── 나잇나잇_크루_상세가이드.html
│   ├── 나잇나잇_크루_스크립트_위젯.html
│   ├── 나잇나잇_크루_접수_AppsScript.gs   접수 폼 백엔드 (Google Apps Script)
│   └── docs/               기획안·카피 초안 md
│
├── Home_asset/             홈 히어로용 이미지 (BG/web 이 웹 게시용 경량본)
├── bydose-marketing/       마케팅 대시보드 (별도 git 저장소 + Netlify 배포)
└── .claude/                Claude Code 설정
```

## 원본 소스 파일 위치 (여기 없음)

용량이 커서 iCloud로 옮기지 않고 데스크탑에 그대로 뒀습니다.

| 내용 | 경로 |
|---|---|
| 나잇나잇 상세페이지 소스 (P1.psd, 향.aep, Sketch 내보내기 `:nightnight`, profile) | `Desktop/GLEEE!®/바이도즈/Web/prototype/assets/` |
| 크루 프로모션 소스 (N1~N3 png, NNC, nnc_.mp4) | `Desktop/GLEEE!®/바이도즈/marketing_claude/asset/` |

## 참고

- 모든 HTML은 이미지·영상을 CDN(및 Vimeo) URL로 참조합니다. 로컬 상대경로 의존이 없어서 폴더를 옮겨도 그대로 동작합니다.
- Vimeo는 무료 플랜이라 플레이어 화질 파라미터가 무시됩니다. 업로드 단계에서 해상도를 줄여야 합니다.
- 아임웹 코드 위젯 제약: `h1~h6` 사용 금지(테마가 덮어씀), 이미지는 CDN URL, GNB는 이 파일 바깥에 있음.

### 세일 배너 (`shop-promo-top.html`)

- 넣는 곳: idx=63 상세정보 칸의 Story 코드 맨 위 (`<div id="nnd-story"` 바로 앞). 아임웹 '상품 상세 상단 공통'은 쓰지 않는다.
  상단 공통은 구매평 모드에서 아임웹이 빼고 그려서, 바디 코드의 구매평 스크립트와 함께 쓰면 사라지거나 위치가 바뀐다.
- 파일 내용 전체를 그대로 붙여넣는다. 이 파일에는 설명 주석을 두지 않는다 (주석 속 태그 글자가 상세페이지 스크립트를 깨뜨림).
- 인라인 스타일만 쓰고, 작은따옴표는 쓰지 않는다.
- 세일이 끝나면 지운다 (바디 코드의 promo-end 스크립트가 있으면 11월 1일 0시부터 자동으로 숨겨짐).
