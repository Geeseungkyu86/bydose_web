# 바이도즈 웹

바이도즈 웹사이트 관련 코드 모음. (2026-08-11 세 폴더를 여기로 통합)

## 폴더 구조

```
바이도즈 웹/
├── imweb/                  아임웹에 붙이는 위젯 코드
│   ├── home-hero.html        홈 히어로
│   ├── footer.html           푸터 (아임웹 기본 푸터 오버라이드)
│   ├── floating-buy-btn.html 플로팅 구매 버튼
│   ├── cursor-bunny.html     커서 따라다니는 토끼 마크 (사이트 전역 위젯)
│   ├── links.html            링크 페이지
│   ├── product-intro.html / product-detail.html
│   ├── reels-collector.html / reels-collector-widget.html
│   ├── icon-illustration-generator.html
│   └── sections/           section1~8.html
│
├── nightnight/             나잇나잇크림 상세페이지 프로토타입
│   └── nightnight.html       아임웹 코드 위젯 작업본 (※ 현행 아임웹 게시본보다 구 버전)
│
├── nightnight2/            나잇나잇크림 유통(도매)용 이미지 상세페이지 (1080폭, 영상→GIF)
│   ├── README.md             만든 방식·자사몰과 다른 점·피그마 링크
│   ├── build.py · make_gif.sh  HTML 생성 / GIF 변환
│   └── src/ img/ gif/ video/ out/
│
├── nightnight-deck/        나잇나잇크림 제품소개서
│   ├── nightnight-deck.html  제품소개서 (사진은 imweb CDN, 아이콘은 인라인)
│   └── 다국어_제품소개서/      다국어 번역 작업 (GEE_작업안내.txt 참고)
│       ├── 한국어_승인_디자인원본.html
│       ├── nightnight-deck-assets/  위 원본 HTML이 상대경로로 참조하는 이미지·아이콘
│       ├── 언어별_번역적용본/  en · ja · mn-MN · ru · zh-CN
│       └── 화면미리보기/
│
└── nightnight-crew/        나잇나잇 크루(NNC) 프로모션
    ├── 나잇나잇_크루_랜딩페이지.html
    ├── 나잇나잇_크루_상세가이드.html
    ├── 나잇나잇_크루_스크립트_위젯.html
    └── brochure/             NNC 브로슈어 (index.html + 로컬 assets)
```

로컬에만 있고 이 저장소에 없는 것: `Home_asset/`, `bydose-marketing/`(별도 저장소), `nightnight-dark.html`, 크루 접수 AppsScript, 크루 docs.

## 원본 소스 파일 위치 (여기 없음)

용량이 커서 iCloud로 옮기지 않고 데스크탑에 그대로 뒀습니다.

| 내용 | 경로 |
|---|---|
| 나잇나잇 상세페이지 소스 (P1.psd, 향.aep, Sketch 내보내기 `:nightnight`, profile) | `Desktop/GLEEE!®/바이도즈/Web/prototype/assets/` |
| 크루 프로모션 소스 (N1~N3 png, NNC, nnc_.mp4) | `Desktop/GLEEE!®/바이도즈/marketing_claude/asset/` |

## 참고

- 대부분의 HTML은 이미지·영상을 CDN(및 Vimeo) URL로 참조합니다. 예외: `nightnight-crew/brochure/`(로컬 assets), `다국어_제품소개서/한국어_승인_디자인원본.html`(같은 폴더의 nightnight-deck-assets) — 이 둘은 폴더째 옮겨야 합니다.
- Vimeo는 무료 플랜이라 플레이어 화질 파라미터가 무시됩니다. 업로드 단계에서 해상도를 줄여야 합니다.
- 아임웹 코드 위젯 제약: `h1~h6` 사용 금지(테마가 덮어씀), 이미지는 CDN URL, GNB는 이 파일 바깥에 있음.
