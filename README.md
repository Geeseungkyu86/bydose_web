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

## 제품소개서 다국어 (nightnight-deck.html)

- 번역 원고: `bydose_제품소개서_다국어/GEE_다국어_통합시트_272.csv` (한국어 승인 원문 + 영어·일본어·중국어 간체·몽골어·러시아어)
- 원고를 고친 뒤 저장소 맨 위에서 `python3 tools/build_deck_i18n.py` 를 실행하면 번역이 `nightnight-deck.html` 안에 들어갑니다. 그 파일을 아임웹 코드 위젯에 다시 붙여넣습니다.
  - 점검만 하려면 `--check`. 번역이 없는 한국어, 원고와 달라진 한국어(번역이 낡았을 수 있음)를 알려 줍니다.
  - 표 칸에는 `**굵게**`, `<u>밑줄</u>`, 줄바꿈, `<span class="b|red|rg|mono">` 를 쓸 수 있습니다.
- 언어는 오른쪽 위 지구본 메뉴로 바꿉니다. 고른 언어는 주소(`?lang=en` 등)와 브라우저에 기억되고, 처음 오는 사람은 브라우저 언어를 따릅니다(한국어·영어·일본어·중국어·몽골어·러시아어 외에는 한국어).
- 거래처에 특정 언어로 보내려면 주소 뒤에 `?lang=en` · `ja` · `zh` · `mn` · `ru` 를 붙입니다.
- PC 화면은 피그마 좌표로 고정돼 있어, 번역이 길면 화면이 자동으로 줄바꿈·글자 축소·옆 칸 밀기로 맞춥니다. 한국어 화면은 바뀌지 않습니다.
