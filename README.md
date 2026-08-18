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
