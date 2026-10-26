# 영어 수정 후보 — EN_HTML_v1_REVISED_R03

STATUS=REVISION_CANDIDATE
TARGET_LOCALE: `en`
TASK: `TASKS/07_RECONCILE_LOCALE.md`
GATE: `G4b — 수정 후보 작성만`
DATE: `2026-10-23` (Asia/Seoul)
KO_SOURCE_VERSION: `nightnight-deck_2026-10-23_HTML_v1`
CONTENT_MAP_VERSION: `HTML_v1_VERIFIED_R01`
LOCALE_DRAFT_VERSION: `EN_HTML_v1_DRAFT_R01`
REVIEW_INPUT_VERSION: `EN_HTML_v1_DRAFT_R01`
REVISED_VERSION: `EN_HTML_v1_REVISED_R03`
LANGUAGE_APPROVAL: `NOT_APPROVED`
LOCALE_APPROVED_VERSION: `NONE — 별도 승인 파일 미생성`
RIGHTS_GATE: `RIGHTS_PENDING`
EVIDENCE_STATUS: `EVIDENCE_PENDING`
REGULATORY_STATUS: `REGULATORY_PENDING`
DESIGN_STATUS: `DESIGN_PENDING — NOT_TESTED`
PUBLICATION_APPROVAL: `NOT_GRANTED`

R03 QUALITY NOTE: R02에서 Opus 2차 편집 검수의 권장 3건과 선택 2건을 선별하여 영문 5개 ID만 보완했다. R02의 S04_T011 교정과 강조 범위 메모 4건은 보존했다. 본문 영어 문체 검수 종료 후보이며 UI·디자인·권리·증빙·규제·공개 승인 아님.
PARENT_REVISED_VERSION: `EN_HTML_v1_REVISED_R02`
PARENT_REVISED_SHA256: `7dae7bafc102f4f193a149e83fc1b57c6d203016a7aa75af84995e7d133a30ff`
SECOND_PASS_OPUS_REPORT_SHA256: `2354cbf22467401676caec0d6dda9061d36c73697fe85c745da504f906cbdd03`

기존 H 결정에 따른 26개 교정은 유지하고, Opus R02 두 번째 문체 검수에서 5개 ID만 추가 정리했다. 272개 ID와 순서를 보존한다. ID 내부 처리 필드는 원본 초안의 분류 이력이며, 이 파일의 상태는 위 REVISION_CANDIDATE다. 원문 위치·KO 인용·서식 연결은 원본을 유지한다. HTML 구현 파일이 아니다.

## 입력 버전·해시 연결

- `outputs/LOCALE_DRAFT_en_EN_HTML_v1_DRAFT_R01.md` — SHA256 `9c66b15bfd4e8fbbdd7923543e668a9b0fbb4e418dbd3278016e062543067448`
- `inputs/RECONCILIATION/H_DECISIONS_en_APPROVED_G4B_R01.md` — SHA256 `0f639a96fca49a40e6bcc0045f60c61ea66be47ef782130b1484017b3b56c9a8`
- `inputs/RECONCILIATION/OPUS_EDITORIAL_REVIEW_en_EN_HTML_v1_DRAFT_R01.md` — SHA256 `70a0153def350a29a3535c43af3d3e6b7afdec940e049b26cdcdda5096a90a01`
- `inputs/RECONCILIATION/ASTRA_FIDELITY_REGULATORY_en_EN_HTML_v1_DRAFT_R01.md` — SHA256 `e97dcf19b7e176006ecaa6da178c797246ab239957d7fab04c2c6925a3f62a0f`
- `inputs/RECONCILIATION/OPUS_BLIND_INPUT_en_EN_HTML_v1_DRAFT_R01.md` — SHA256 `92c85f73cea4538b1fbb6c61099883fd6458bcb65930b9fdacb6b2462caeefd7`
- `inputs/RECONCILIATION/OPUS_BLIND_INPUT_PROVENANCE_R01.md` — SHA256 `074ce3b65d532fff3c507d06e2989f75b63b51d0d4b5fb4f883c1fc2a585e0be`
- `inputs/KO_APPROVED/nightnight-deck.html` — SHA256 `7ec0a14c009bbf2ef6261d98c04617901a188fbad81adebfcb28a38a944f33ed`
- `outputs/KO_CONTENT_MAP_HTML_v1_VERIFIED_R01.csv` — SHA256 `676852ffdc3b684d5551ca177144d89d31fc92a19a848a02a34a104584188378`
- `VERIFY_OPUS_INPUT_EQUIVALENCE.py` — SHA256 `211f1a1436aae278c810b03ce8fdb9e0db4215de501abd39c886ad31b96b34b9`

## 입력 동일 버전 판정

검증 스크립트를 01_CODEX 루트에서 실행하여 exit 0 / PASS를 확인했다. 본문 137 + 기타 57 = 194개 고유 ID 중 193개 문구가 정확히 일치하고, S12_T002 한 곳은 의도된 한국어 별칭 가림이다. 기타 문구 차이는 0개다. 후보의 S12_T002는 원래 병기를 그대로 유지한다.

원본 초안 SHA256과 제공 블라인드 사본 SHA256은 각자 기록값과 일치한다. 두 문서는 구성·가림 처리가 달라 바이트 동일하지 않다. Opus 보고서는 LOCALE_DRAFT_VERSION과 검수 파일명 inputs/OPUS_BLIND_INPUT_en_EN_HTML_v1_DRAFT_R01.md를 명시한다. 별도 REVIEW_INPUT_VERSION 필드나 당시 해시는 없으므로 이를 소급 기재했다고 주장하지 않는다. 위 REVIEW_INPUT_VERSION은 이번 대조에서 확인한 공통 번역 버전이다. Astra는 해당 버전과 원본 초안·KO·맵 해시를 명시하며 실제 파일과 일치한다.

판정: 제공 사본의 영어 문구 대응, H의 출처 증빙 및 Opus의 버전·파일명 기록을 근거로 TASK 07의 동일 번역 버전 선행조건은 충족한다. 당시 실제 Opus 입력과 이번 사본의 바이트 동일성은 미확정이다. 02_CLAUDE를 탐색하지 않았고 과거 실행 환경을 검증하거나 당시 해시를 생성하지 않았다. 두 최초 보고서는 R01 초안의 검수로만 연결하며 수정 후보를 재검수한 보고서로 재사용하지 않는다.

최초 26개 결정의 전후 전문은 기존 `LOCALE_DECISION_DIFF_en_EN_HTML_v1_REVISED_R01.md`에 보존하며, R02→R03의 5개 결정은 동봉 QA 보고서에 기록한다. H·Gee의 별도 최종 승인 기록 대기; 다음 게이트 미착수.

## cover

### S01_T001

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: “ NIGHT NIGHT CREAM “

EN:

“ NIGHT NIGHT CREAM “

원문 위치: `#cover > .stage.d > p:nth-child(2):L165 || #cover > .stage.m > p:nth-child(2):L170`

### S01_T002

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `body_or_caption`

KO: LIGHT GEL-CREAM · AROMAWELLNESS SCENT · MOISTURE & BARRIER

EN:

LIGHT GEL-CREAM · AROMAWELLNESS SCENT · MOISTURE & BARRIER

원문 위치: `#cover > .stage.d > p:nth-child(3):L166 || #cover > .stage.m > p:nth-child(3):L171`

## intro

### S02_T001

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `headline_or_title`

KO: GOOD NIGHT = GOOD SKIN

EN:

GOOD NIGHT = GOOD SKIN

원문 위치: `#intro > .stage.d > p:nth-child(1):L178 || #intro > .stage.m > p:nth-child(2):L189`

### S02_T002

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body`

KO: 나잇나잇 크림은 잠들기 전의 감각적인 경험부터, 밤사이 피부가 스스로 회복할 수 있는 환경까지 고려한 ‘아침촉촉’ 나이트크림입니다.

EN:

NIGHT NIGHT CREAM is a night cream designed with both the sensory experience before bed and the conditions that allow skin to recover on its own overnight in mind—for a moisturized feel come morning.

원문 위치: `#intro > .stage.d > p:nth-child(2):L179 || #intro > .stage.m > p:nth-child(3):L190`

### S02_T003

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 나잇나잇 크림 50 mL

EN:

NIGHT NIGHT CREAM 50 mL

원문 위치: `#intro > .stage.d > p:nth-child(4):L181 || #intro > .stage.m > p:nth-child(5):L192`

### S02_T004

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 가벼운 젤-크림 타입

EN:

Light gel-cream texture

원문 위치: `#intro > .stage.d > p:nth-child(5):L182 || #intro > .stage.m > p:nth-child(6):L193`

### S02_T005

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 「AromaWellness」 조향

EN:

「AromaWellness」 fragrance design

원문 위치: `#intro > .stage.d > p:nth-child(6):L183 || #intro > .stage.m > p:nth-child(7):L194`

### S02_T006

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 보습·장벽 케어

EN:

Moisture & barrier care

원문 위치: `#intro > .stage.d > p:nth-child(7):L184 || #intro > .stage.m > p:nth-child(8):L195`

## why

### S03_T001

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `headline_or_title`

KO: 좋은 피부를 위한 좋은 밤

EN:

A good night for good skin

원문 위치: `#why > .stage.d > p:nth-child(1):L203 || #why > .stage.m > p:nth-child(1):L213`

### S03_T002

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body`

KO: 피부는 밤에도 회복과 유지 활동을 이어갑니다. 그리고 수면은 건강한 피부를 위해 중요한 요소입니다. 바이도즈는 여기서 출발했습니다. 좋은 잠의 결과가 좋은 피부로 이어지는 화장품. 나잇나잇 크림의 시작이었습니다.

EN:

Skin continues its recovery and maintenance processes at night. Sleep is also important for healthy skin. This is where byDose began.

<u>Skincare built on the idea that a good night’s sleep leads to good skin.</u>
That was the idea behind NIGHT NIGHT CREAM.

서식 연결: u: Skincare inspired by the connection between a good night’s sleep and good skin.

원문 위치: `#why > .stage.d > p:nth-child(2):L204 || #why > .stage.m > p:nth-child(2):L214`

### S03_T003

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: For a Good Night

EN:

For a Good Night

원문 위치: `#why > .stage.d > p:nth-child(3):L205 || #why > .stage.m > p:nth-child(3):L215`

### S03_T004

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 잠들기 전 경험과 분위기

EN:

The experience and atmosphere before bed

원문 위치: `#why > .stage.d > p:nth-child(4):L206 || #why > .stage.m > p:nth-child(4):L216`

### S03_T005

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 하루의 마지막 스킨케어가 편안한 밤에 어울리도록, 피부에 남는 감촉과 향까지 고려했습니다.

EN:

We considered both the feel left on the skin and the scent, so the last skincare step of the day would suit a restful night.

원문 위치: `#why > .stage.d > p:nth-child(5):L207 || #why > .stage.m > p:nth-child(5):L217`

### S03_T006

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: For a Good Skin

EN:

For a Good Skin

원문 위치: `#why > .stage.d > p:nth-child(6):L208 || #why > .stage.m > p:nth-child(6):L218`

### S03_T007

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 밤사이 피부 회복을 위한 환경

EN:

An environment for overnight skin recovery

원문 위치: `#why > .stage.d > p:nth-child(7):L209 || #why > .stage.m > p:nth-child(7):L219`

### S03_T008

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 피부가 밤을 보내는 동안 수분을 공급하고 유지하도록, 보습과 장벽 케어를 설계했습니다.

EN:

We designed the moisture and barrier care to supply and retain hydration throughout the night.

원문 위치: `#why > .stage.d > p:nth-child(8):L210 || #why > .stage.m > p:nth-child(8):L220`

## sequence

### S04_T001

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `headline_or_title`

KO: 굿나잇 시퀀스™ 피부 회복을 돕는 설계

EN:

Goodnight Sequence™
Designed to support skin recovery

문맥·각주 연결: `S04_T012`

서식 연결: 원본 첫 줄 제목/둘째 줄 rg 구분. 영어 줄 구분은 의미 관계 표시이며 최종 화면 줄바꿈 아님.

원문 위치: `#sequence > .stage.d > p:nth-child(1):L228 || #sequence > .stage.m > p:nth-child(1):L248`

### S04_T002

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 잠들기 전의 경험부터, 덧바를 수 없는 밤사이의 보습, 그리고 다음 날 아침의 피부 컨디션까지. 나잇나잇 크림은 이 흐름(시퀀스)전체를 ‘나이트 케어’로 생각했습니다.

EN:

From the experience before bed, through overnight hydration when reapplication is not possible, to how the skin feels the next morning.

For NIGHT NIGHT CREAM, we see this entire sequence as “night care.”

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(2):L229 || #sequence > .stage.m > p:nth-child(2):L249`

### S04_T003

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `headline_or_title`

보존값: `PM 11:00`

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(5):L232 || #sequence > .stage.m > p:nth-child(5):L252`

### S04_T004

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 잠드는 순간을 위해

EN:

For the moment you drift off

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(6):L233 || #sequence > .stage.m > p:nth-child(6):L253`

### S04_T005

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 제품을 바르고 잠자리에 드는 순간의 감촉과 향을 설계

EN:

Feel and scent designed for the moment you apply the cream before bed

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(7):L234 || #sequence > .stage.m > p:nth-child(7):L254`

### S04_T006

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `headline_or_title`

보존값: `AM 03:00`

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(10):L237 || #sequence > .stage.m > p:nth-child(10):L257`

### S04_T007

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 덧바를 수 없는 잠든 사이

EN:

While you sleep, when you cannot reapply

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(11):L238 || #sequence > .stage.m > p:nth-child(11):L258`

### S04_T008

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 다시 덧바를 수 없는 밤사이, 수분 공급과 유지에 집중한 설계

EN:

Designed to focus on supplying and retaining moisture overnight, when reapplication isn’t possible.

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(12):L239 || #sequence > .stage.m > p:nth-child(12):L259`

### S04_T009

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `headline_or_title`

보존값: `AM 07:00`

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(15):L242 || #sequence > .stage.m > p:nth-child(15):L262`

### S04_T010

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 아침촉촉 기상

EN:

Wake up to a moisturized feel

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(16):L243 || #sequence > .stage.m > p:nth-child(16):L263`

### S04_T011

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 촉촉하게 정돈된 아침의 피부결까지 고려한 설계

EN:

Designed with a smooth, moisturized feel the next morning in mind

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(17):L244 || #sequence > .stage.m > p:nth-child(17):L264`

### S04_T012

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `footnote_disclaimer`

KO: ※ 11 PM · 3 AM · 7 AM은 밤의 사용 흐름을 표현한 상징적인 시간이며, 성분의 작용 시점을 의미하지 않습니다.

EN:

※ 11 PM · 3 AM · 7 AM are symbolic times illustrating the flow of nighttime use. They do not indicate when the ingredients take effect.

문맥·각주 연결: `S04_T012`

원문 위치: `#sequence > .stage.d > p:nth-child(18):L245 || #sequence > .stage.m > p:nth-child(18):L265`

## texture

### S05_T001

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: 01. Texture

EN:

01. Texture

원문 위치: `#texture > .stage.d > p:nth-child(1):L272 || #texture > .stage.m > p:nth-child(1):L288`

### S05_T002

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: “ LIGHT GEL-CREAM “

EN:

“ LIGHT GEL-CREAM “

원문 위치: `#texture > .stage.d > p:nth-child(2):L273 || #texture > .stage.m > p:nth-child(2):L289`

### S05_T003

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `headline_or_title`

KO: 무거움은 덜고, 촉촉함은 남기도록.

EN:

Designed for a lighter feel and a moisturized finish

원문 위치: `#texture > .stage.d > p:nth-child(4):L275 || #texture > .stage.m > p:nth-child(4):L291`

### S05_T004

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 나이트크림은 흔히 무겁고 리치한 제형을 떠올리기 쉽습니다. 하지만 촉촉함이 반드시 무거운 제형에서 오는 것은 아닙니다. 나잇나잇 크림은 수분감 있는 젤-크림 제형으로 부드럽게 펴 발리고, 번들거림을 줄인 산뜻한 마무리감을 지향합니다.

EN:

Night creams often bring rich, heavy textures to mind. But a moisturized feel does not necessarily require a heavy formula.

NIGHT NIGHT CREAM has a moisture-rich gel-cream texture that spreads smoothly, aiming for a fresh finish with less shine.

원문 위치: `#texture > .stage.d > p:nth-child(5):L276 || #texture > .stage.m > p:nth-child(5):L292`

### S05_T005

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 발림성

EN:

Spreadability

원문 위치: `#texture > .stage.d > p:nth-child(6):L277 || #texture > .stage.m > p:nth-child(6):L293`

### S05_T006

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 끈적임

EN:

Stickiness

원문 위치: `#texture > .stage.d > p:nth-child(8):L279 || #texture > .stage.m > p:nth-child(8):L295`

### S05_T007

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `review_author_masked`

보존값: `youm****`

원문 위치: `#texture > .stage.d > div:nth-child(10) > p:nth-child(1):L282 || #texture > .stage.m > div:nth-child(10) > p:nth-child(1):L298`

### S05_T008

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `testimonial`

KO: 밤에 바르고 잠들어도 오전까지 촉촉한 느낌이에요. 야외 활동이 잦은데, 덕분에 피부가 당기지 않게 되어서 너무 좋아요!

EN:

When I put it on before bed, my skin still feels moisturized in the morning. I spend a lot of time outdoors, and I love that my skin no longer feels tight thanks to it!

원문 위치: `#texture > .stage.d > div:nth-child(10) > p:nth-child(2):L283 || #texture > .stage.m > div:nth-child(10) > p:nth-child(2):L299`

## scent

### S06_T001

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: 02. Scent

EN:

02. Scent

원문 위치: `#scent > .stage.d > p:nth-child(1):L308 || #scent > .stage.m > p:nth-child(1):L324`

### S06_T002

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: “ Sleep in the forest “

EN:

“ Sleep in the forest “

원문 위치: `#scent > .stage.d > p:nth-child(2):L309 || #scent > .stage.m > p:nth-child(2):L325`

### S06_T003

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `headline_or_title`

KO: 잠들기 전 편안함까지 고려한 '좋은 향'

EN:

A “good scent” designed with comfort before bed in mind

원문 위치: `#scent > .stage.d > p:nth-child(4):L311 || #scent > .stage.m > p:nth-child(4):L327`

### S06_T004

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 슬립 인 더포레스트 비 갠 숲속을 걷는 듯 촉촉하면서도 포근한 향. 라벤더 줄기를 손끝에 문지른 듯한 싱그러운 허브와 비에 젖은 흙내음, 이끼 낀 나무껍질의 분위기를 담았습니다.

EN:

**Sleep in the forest**
A dewy yet comforting scent, like walking through a forest after the rain. It captures the fresh herbal character of lavender stems rubbed between your fingertips, the scent of rain-soaked earth, and the atmosphere of moss-covered bark.

서식 연결: b: Sleep in the forest

원문 위치: `#scent > .stage.d > p:nth-child(5):L312 || #scent > .stage.m > p:nth-child(5):L328`

### S06_T005

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 조향 설계

EN:

Fragrance composition

원문 위치: `#scent > .stage.d > p:nth-child(6):L313 || #scent > .stage.m > p:nth-child(6):L329`

### S06_T006

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 상쾌하고 시원하게 시작합니다

EN:

A fresh, cool opening

원문 위치: `#scent > .stage.d > p:nth-child(8):L315 || #scent > .stage.m > p:nth-child(8):L331`

### S06_T007

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: TOP | 라반딘 ∙ 베르가못 ∙ 오렌지 ∙ 자몽 ∙ 클라리 세이지

EN:

**TOP** | Lavandin ∙ Bergamot ∙ Orange ∙ Grapefruit ∙ Clary sage

서식 연결: b: TOP

원문 위치: `#scent > .stage.d > p:nth-child(9):L316 || #scent > .stage.m > p:nth-child(9):L332`

### S06_T008

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 은은하고 부드럽게 이어집니다

EN:

A soft, subtle heart

원문 위치: `#scent > .stage.d > p:nth-child(10):L317 || #scent > .stage.m > p:nth-child(10):L333`

### S06_T009

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: MIDDLE | 자스민 ∙ 라벤더 ∙ 로즈마리 ∙ 네롤리 ∙ 핑크 페퍼

EN:

**MIDDLE** | Jasmine ∙ Lavender ∙ Rosemary ∙ Neroli ∙ Pink pepper

서식 연결: b: MIDDLE

원문 위치: `#scent > .stage.d > p:nth-child(11):L318 || #scent > .stage.m > p:nth-child(11):L334`

### S06_T010

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 깊고 차분하게 남습니다

EN:

A deep, calm finish

원문 위치: `#scent > .stage.d > p:nth-child(12):L319 || #scent > .stage.m > p:nth-child(12):L335`

### S06_T011

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: BASE | 머스크 ∙ 엠버 ∙ 시더우드 ∙ 베티버 ∙ 패출리 ∙ 톤카

EN:

**BASE** | Musk ∙ Amber ∙ Cedarwood ∙ Vetiver ∙ Patchouli ∙ Tonka

서식 연결: b: BASE

원문 위치: `#scent > .stage.d > p:nth-child(13):L320 || #scent > .stage.m > p:nth-child(13):L336`

### S06_T012

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 나잇나잇 크림의 '슬립 인 더포레스트향'은 잠들기 전의 감각을 고려해 개발한, 바이도즈 독점 공급 향료로 완성했습니다.

EN:

The fragrance behind NIGHT NIGHT CREAM’s “Sleep in the forest” scent was developed with the sensory experience before bed in mind and is supplied exclusively to byDose.

원문 위치: `#scent > .stage.d > p:nth-child(14):L321 || #scent > .stage.m > p:nth-child(14):L337`

## aroma

### S07_T001

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `headline_or_title`

KO: 「Aroma Wellness」 좋은 향을 넘어, 잠들기 전의 편안함까지.

EN:

「Aroma Wellness」
Beyond a pleasing scent—comfort before bed.

문맥·각주 연결: `S07_T011;S07_T012`

원문 위치: `#aroma > .stage.d > p:nth-child(1):L345 || #aroma > .stage.m > p:nth-child(2):L367`

### S07_T002

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `long_body`

KO: 차분한 마음은 '좋은 잠'을, 좋은 잠은 '좋은 피부'를 만든다는 믿음으로, 나잇나잇 크림은 좋은 향을 넘어, 잠들기 전 심리 상태를 고려한 향을 담았습니다. CPL Aromas의 「AromaWellness」는 향과 감정의 연결을 탐구하는 향 연구 플랫폼입니다. 향에 대한 사람의 행동과 생리적 반응, 주관적 인식을 다양한 평가 방법으로 살펴봅니다.

EN:

We believe a calm mind leads to “good sleep,” and good sleep to “good skin.” This belief shaped our approach to NIGHT NIGHT CREAM’s fragrance, going beyond a pleasing scent to consider the state of mind before bed.

CPL Aromas’ 「AromaWellness」 is a fragrance research platform exploring the connection between scent and emotion. It uses a range of evaluation methods to examine people’s behavioral and physiological responses to scent, as well as their subjective perceptions.

문맥·각주 연결: `S07_T011;S07_T012`

원문 위치: `#aroma > .stage.d > p:nth-child(2):L346 || #aroma > .stage.m > p:nth-child(3):L368`

### S07_T003

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 01 행동 반응

EN:

01 Behavioral responses

문맥·각주 연결: `S07_T011;S07_T012`

원문 위치: `#aroma > .stage.d > p:nth-child(3):L347 || #aroma > .stage.m > p:nth-child(4):L369`

### S07_T004

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 표정 변화 · 시선 추적

EN:

Changes in facial expression · Eye tracking

문맥·각주 연결: `S07_T011;S07_T012`

원문 위치: `#aroma > .stage.d > p:nth-child(4):L348 || #aroma > .stage.m > p:nth-child(5):L370`

### S07_T005

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 02 생리 반응

EN:

02 Physiological responses

문맥·각주 연결: `S07_T011;S07_T012`

원문 위치: `#aroma > .stage.d > p:nth-child(5):L349 || #aroma > .stage.m > p:nth-child(6):L371`

### S07_T006

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 심박 · 뇌파 · 피부 전도도(GSR)

EN:

Heart rate · Brain waves · <mark>Skin conductance (GSR)</mark>

문맥·각주 연결: `S07_T011;S07_T012`

서식 연결: mark: Skin conductance (GSR)

원문 위치: `#aroma > .stage.d > p:nth-child(6):L350 || #aroma > .stage.m > p:nth-child(7):L372`

### S07_T007

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 03 주관 반응

EN:

03 Subjective responses

문맥·각주 연결: `S07_T011;S07_T012`

원문 위치: `#aroma > .stage.d > p:nth-child(7):L351 || #aroma > .stage.m > p:nth-child(8):L373`

### S07_T008

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 설문평가

EN:

<mark>Questionnaire assessment</mark>

문맥·각주 연결: `S07_T011;S07_T012`

서식 연결: mark: Questionnaire assessment

원문 위치: `#aroma > .stage.d > p:nth-child(8):L352 || #aroma > .stage.m > p:nth-child(9):L374`

### S07_T009

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `headline_or_title`

KO: CPL Aromas - 「Aroma Wellness」

EN:

CPL Aromas - 「Aroma Wellness」

문맥·각주 연결: `S07_T011;S07_T012`

원문 위치: `#aroma > .stage.d > div:nth-child(9) > p:nth-child(1):L354 || #aroma > .stage.m > div:nth-child(10) > p:nth-child(1):L376`

### S07_T010

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 이 향료 GW ONE RELAX SC는 AromaWellness Relaxation 향료를 포함하며, CPL Aromas의 기술 적합성 확인서를 받았습니다.

EN:

The fragrance GW ONE RELAX SC contains an AromaWellness Relaxation fragrance and has received a **Certificate of Technology Compliance** from CPL Aromas.

문맥·각주 연결: `S07_T011;S07_T012`

서식 연결: b: Certificate of Technology Compliance

원문 위치: `#aroma > .stage.d > div:nth-child(9) > p:nth-child(2):L355 || #aroma > .stage.m > div:nth-child(10) > p:nth-child(2):L377`

### S07_T011

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `footnote_disclaimer`

KO: ※ Certificate of Technology Compliance · 15 December 2025 ※ 확인 범위는 Relaxation 향료의 포함 사실과 해당 평가 방식입니다. GW ONE RELAX SC 전체의 별도 시험이나 완제품의 이완·수면 효과를 입증하는 자료는 아닙니다.

EN:

※ Certificate of Technology Compliance · 15 December 2025
※ The certificate covers the inclusion of the Relaxation fragrance and the relevant evaluation methods. It is not evidence of separate testing of GW ONE RELAX SC as a whole, nor does it substantiate relaxation or sleep effects of the finished product.

문맥·각주 연결: `S07_T011;S07_T012`

원문 위치: `#aroma > .stage.d > div:nth-child(9) > p:nth-child(3):L356 || #aroma > .stage.m > div:nth-child(10) > p:nth-child(4):L379`

### S07_T012

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: GW ONE RELAX SC 관련 기술 적합성 확인서 완제품의 수면·이완 효과 인증서가 아닙니다.

EN:

Certificate of Technology Compliance relating to GW ONE RELAX SC
This is not a certificate of the finished product’s sleep or relaxation effects.

문맥·각주 연결: `S07_T011;S07_T012`

원문 위치: `#aroma > .stage.d > div:nth-child(9) > p:nth-child(4):L360 || #aroma > .stage.m > div:nth-child(10) > p:nth-child(5):L380`

## formula

### S08_T001

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `headline_or_title`

KO: 피부의 회복 환경을 생각한 성분 설계

EN:

Ingredient design with the skin’s recovery environment in mind

원문 위치: `#formula > .stage.d > p:nth-child(1):L388 || #formula > .stage.m > p:nth-child(1):L411`

### S08_T002

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 자는 동안 피부가 회복하는 데 중요한 수분을 채우고 지키는 성분을 조합했습니다. 여기에 아침 피부결과 컨디션까지 고려한 두 가지 발효 성분을 더했습니다.

EN:

We combined ingredients to replenish and retain moisture, an important factor in skin recovery during sleep. We also added two fermented ingredients with the next morning’s skin texture and condition in mind.

원문 위치: `#formula > .stage.d > p:nth-child(2):L389 || #formula > .stage.m > p:nth-child(2):L412`

### S08_T003

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `short_label`

보존값: `01`

문맥·각주 연결: `S08_T004;S08_T018`

원문 위치: `#formula > .stage.d > p:nth-child(5):L392`

### S08_T004

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: Hydration

EN:

Hydration

문맥·각주 연결: `S08_T003;S08_T018`

원문 위치: `#formula > .stage.d > p:nth-child(6):L393`

### S08_T005

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 수분. 피부 회복의 시작점

EN:

Moisture. The starting point for skin recovery.

원문 위치: `#formula > .stage.d > p:nth-child(7):L394 || #formula > .stage.m > a:nth-child(4) > span:nth-child(2):L416`

### S08_T006

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 히알루론산 5종

EN:

5 types of hyaluronic acid

원문 위치: `#formula > .stage.d > p:nth-child(8):L395 || #formula > .stage.m > a:nth-child(4) > span:nth-child(3) > span:nth-child(1):L417`

### S08_T007

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: AQUAXYL™ 자일리톨계 3종

EN:

AQUAXYL™: 3 xylitol-based components

원문 위치: `#formula > .stage.d > p:nth-child(9):L396 || #formula > .stage.m > a:nth-child(4) > span:nth-child(3) > span:nth-child(2):L417`

### S08_T008

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `short_label`

보존값: `02`

문맥·각주 연결: `S08_T009;S08_T019`

원문 위치: `#formula > .stage.d > p:nth-child(11):L398`

### S08_T009

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: Barrier

EN:

Barrier

문맥·각주 연결: `S08_T008;S08_T019`

원문 위치: `#formula > .stage.d > p:nth-child(12):L399`

### S08_T010

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 채운 수분을 지키는 이중 보호 설계

EN:

A dual protective approach to retain moisture

원문 위치: `#formula > .stage.d > p:nth-child(13):L400 || #formula > .stage.m > a:nth-child(5) > span:nth-child(2):L421`

### S08_T011

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 엑토인

EN:

Ectoin

원문 위치: `#formula > .stage.d > p:nth-child(14):L401 || #formula > .stage.m > a:nth-child(5) > span:nth-child(3) > span:nth-child(1):L422`

### S08_T012

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 세라마이드 5종

EN:

5 types of ceramides

원문 위치: `#formula > .stage.d > p:nth-child(15):L402 || #formula > .stage.m > a:nth-child(5) > span:nth-child(3) > span:nth-child(2):L422`

### S08_T013

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `short_label`

보존값: `03`

문맥·각주 연결: `S08_T014;S08_T020`

원문 위치: `#formula > .stage.d > p:nth-child(17):L404`

### S08_T014

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: Condition

EN:

Condition

문맥·각주 연결: `S08_T013;S08_T020`

원문 위치: `#formula > .stage.d > p:nth-child(18):L405`

### S08_T015

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 아침 피부결까지 생각한 발효 케어

EN:

Fermented ingredients selected with morning skin texture in mind

원문 위치: `#formula > .stage.d > p:nth-child(19):L406 || #formula > .stage.m > a:nth-child(6) > span:nth-child(2):L426`

### S08_T016

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 비피다발효여과물

EN:

Bifida ferment filtrate

원문 위치: `#formula > .stage.d > p:nth-child(20):L407 || #formula > .stage.m > a:nth-child(6) > span:nth-child(3) > span:nth-child(1):L427`

### S08_T017

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 갈락토미세스발효여과물

EN:

Galactomyces ferment filtrate

원문 위치: `#formula > .stage.d > p:nth-child(21):L408 || #formula > .stage.m > a:nth-child(6) > span:nth-child(3) > span:nth-child(2):L427`

### S08_T018

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: 01 Hydration

EN:

01 Hydration

문맥·각주 연결: `S08_T003;S08_T004`

원문 위치: `#formula > .stage.m > a:nth-child(4) > span:nth-child(1):L415`

### S08_T019

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: 02 Barrier

EN:

02 Barrier

문맥·각주 연결: `S08_T008;S08_T009`

원문 위치: `#formula > .stage.m > a:nth-child(5) > span:nth-child(1):L420`

### S08_T020

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: 03 Condition

EN:

03 Condition

문맥·각주 연결: `S08_T013;S08_T014`

원문 위치: `#formula > .stage.m > a:nth-child(6) > span:nth-child(1):L425`

## hydration

### S09_T001

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `short_label`

보존값: `01`

문맥·각주 연결: `S09_T012;S09_T002;S09_T005`

원문 위치: `#hydration > .stage.d > p:nth-child(1):L435`

### S09_T002

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: Hydration

EN:

Hydration

문맥·각주 연결: `S09_T012;S09_T001;S09_T005`

원문 위치: `#hydration > .stage.d > p:nth-child(2):L436`

### S09_T003

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 수분. 피부 회복의 시작점

EN:

Moisture. The starting point for skin recovery.

문맥·각주 연결: `S09_T012`

원문 위치: `#hydration > .stage.d > p:nth-child(3):L437 || #hydration > .stage.m > p:nth-child(2):L455`

### S09_T004

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 히알루론산 5종

EN:

5 types of hyaluronic acid

문맥·각주 연결: `S09_T012`

원문 위치: `#hydration > .stage.d > p:nth-child(6):L440 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(1):L458`

### S09_T005

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: 01 Hydration

EN:

01 Hydration

문맥·각주 연결: `S09_T012;S09_T001;S09_T002`

원문 위치: `#hydration > .stage.d > p:nth-child(7):L441 || #hydration > .stage.d > p:nth-child(12):L446 || #hydration > .stage.m > p:nth-child(1):L454`

### S09_T006

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 수분 공급과 보습막

EN:

Hydration and a moisture-retaining film

문맥·각주 연결: `S09_T012`

원문 위치: `#hydration > .stage.d > p:nth-child(8):L442 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(2):L459`

### S09_T007

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 물 분자를 끌어당기는 히알루론산은 대표적인 보습 성분입니다. 기본 형태부터 잘게 분해된 형태, 그물처럼 연결된 형태까지 서로 다른 구조의 히알루론산 5종을 조합했습니다. 각기 다른 특성의 히알루론산이 피부에 수분을 공급하고, 피부 표면에 촉촉한 보습막을 형성하도록 고려했습니다.

EN:

Hyaluronic acid is a well-known moisturizing ingredient that attracts water molecules. We combined five structurally different forms of hyaluronic acid, ranging from its basic form to smaller fragments and network-like structures. We took their different properties into account in designing the formula to supply moisture and form a hydrating film on the skin’s surface.

문맥·각주 연결: `S09_T012`

원문 위치: `#hydration > .stage.d > p:nth-child(9):L443 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(3):L460`

### S09_T008

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: AQUAXYL™ 자일리톨계 3종

EN:

AQUAXYL™: 3 xylitol-based components

문맥·각주 연결: `S09_T012`

원문 위치: `#hydration > .stage.d > p:nth-child(11):L445 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(1):L463`

### S09_T009

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 수분 이동과 저장 환경

EN:

An environment for moisture movement and storage

문맥·각주 연결: `S09_T012`

원문 위치: `#hydration > .stage.d > p:nth-child(13):L447 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(2):L464`

### S09_T010

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 자일리톨·자일리틸글루코사이드·무수자일리톨로 구성된 보습 복합체 AQUAXYL™을 사용했습니다. AQUAXYL™은 표피 내 수분 이동과 수분 저장을 돕는 특성을 지닌 보습 원료입니다. 히알루론산이 물 분자를 끌어당겨 붙잡는다면, AQUAXYL™은 피부 안에서 수분이 오가고 유지되는 환경에 주목한 성분입니다.

EN:

We used AQUAXYL™, a moisturizing complex composed of xylitol, xylitylglucoside, and anhydroxylitol. Its properties support the movement and storage of water within the epidermis. While hyaluronic acid attracts and holds water molecules, AQUAXYL™ focuses on the environment in which moisture moves and is retained within the skin.

문맥·각주 연결: `S09_T012`

원문 위치: `#hydration > .stage.d > p:nth-child(14):L448 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(3):L465`

### S09_T011

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body`

KO: 나잇나잇 크림은 수분을 채우는 데서 그치지 않고, 수분이 고르게 오가고 머무는 환경까지 고려하기 위해 두 원료를 함께 배합했습니다.

EN:

We combined these two ingredients in NIGHT NIGHT CREAM with two aims in mind: replenishing moisture and supporting an environment where it can move evenly and be retained.

문맥·각주 연결: `S09_T012`

원문 위치: `#hydration > .stage.d > p:nth-child(16):L450 || #hydration > .stage.m > div:nth-child(3) > p:nth-child(3):L467`

### S09_T012

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `footnote_disclaimer`

KO: ※ AQUAXYL™의 특성은 원료사 자료 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.

EN:

※ The properties of AQUAXYL™ are based on the ingredient supplier’s data, not test results for the finished NIGHT NIGHT CREAM product.

문맥·각주 연결: `S09_T012`

원문 위치: `#hydration > .stage.d > p:nth-child(17):L451 || #hydration > .stage.m > div:nth-child(3) > p:nth-child(4):L468`

## barrier

### S10_T001

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `short_label`

보존값: `02`

문맥·각주 연결: `S10_T008;S10_T002;S10_T005`

원문 위치: `#barrier > .stage.d > p:nth-child(1):L476`

### S10_T002

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: Barrier

EN:

Barrier

문맥·각주 연결: `S10_T008;S10_T001;S10_T005`

원문 위치: `#barrier > .stage.d > p:nth-child(2):L477`

### S10_T003

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 채운 수분을 지키는 이중 보호 설계

EN:

A dual protective approach to retain moisture

문맥·각주 연결: `S10_T008`

원문 위치: `#barrier > .stage.d > p:nth-child(3):L478 || #barrier > .stage.m > p:nth-child(2):L495`

### S10_T004

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 엑토인

EN:

Ectoin

문맥·각주 연결: `S10_T008`

원문 위치: `#barrier > .stage.d > p:nth-child(6):L481 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(1):L498`

### S10_T005

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: 02 Barrier

EN:

02 Barrier

문맥·각주 연결: `S10_T008;S10_T001;S10_T002`

원문 위치: `#barrier > .stage.d > p:nth-child(7):L482 || #barrier > .stage.d > p:nth-child(12):L487 || #barrier > .stage.m > p:nth-child(1):L494`

### S10_T006

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 극한 환경에서 찾은 피부 보호

EN:

Skin protection found in extreme environments

문맥·각주 연결: `S10_T008`

원문 위치: `#barrier > .stage.d > p:nth-child(8):L483 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(2):L499`

### S10_T007

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `long_body`

KO: 높은 염도와 건조함 등 극한 환경에 서식하는 일부 미생물이 스스로를 보호하기 위해 만들어내는 물질입니다. 엑토인은 주변의 물 분자와 상호작용해 단백질과 세포막 주변의 수분 환경을 안정화하는 특성을 지니고 있습니다. 피부의 수분 유지와 장벽 보호를 위한 성분으로 활용되며, 엑토인을 함유한 제형의 피부 적용 연구* 에서도 보습 및 수분 손실 개선 가능성이 보고되었습니다. 단순히 수분을 공급하는 것을 넘어, 건조함과 외부 환경 스트레스까지 고려한 보습 설계를 위해 엑토인을 선택했습니다.

EN:

Ectoin is a substance produced for self-protection by certain microorganisms living in extreme environments, such as high salinity and dryness. It interacts with surrounding water molecules and has properties that stabilize the aqueous environment around proteins and cell membranes. It is used to help retain skin moisture and protect the barrier. Studies involving skin application of formulations containing ectoin* have also reported the potential for improved hydration and reduced water loss. We chose ectoin **for a moisturizing approach that goes beyond simply providing moisture and also considers dryness and external environmental stress**.

문맥·각주 연결: `S10_T008`

서식 연결: red: skin application of formulations containing ectoin*; b: for moisture care that also takes dryness and external environmental stress into account. 별표는 S10_T008에 연결.

원문 위치: `#barrier > .stage.d > p:nth-child(9):L484 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(3):L500`

### S10_T008

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `footnote_disclaimer`

KO: * 원료·제형 연구 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.

EN:

* Based on ingredient and formulation research, not test results for the finished NIGHT NIGHT CREAM product.

문맥·각주 연결: `S10_T008`

원문 위치: `#barrier > .stage.d > p:nth-child(10):L485 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(4):L501`

### S10_T009

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 세라마이드 5종

EN:

5 types of ceramides

문맥·각주 연결: `S10_T008`

원문 위치: `#barrier > .stage.d > p:nth-child(11):L486 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(1):L504`

### S10_T010

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 피부 장벽의 지질 보완

EN:

Replenishing skin barrier lipids

문맥·각주 연결: `S10_T008`

원문 위치: `#barrier > .stage.d > p:nth-child(13):L488 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(2):L505`

### S10_T011

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 세라마이드는 피부 각질층에서 세포 사이를 채우는 주요 지질 성분 중 하나입니다. 5종 세라마이드를 조합해 피부 장벽에 필요한 지질을 보완하고, 수분 손실을 줄이는 장벽 케어를 고려했습니다.

EN:

Ceramides are among the main lipids that fill the spaces between cells in the skin’s outermost layer. We combined 5 types of ceramides with barrier care in mind: replenishing the lipids the skin barrier needs and reducing moisture loss.

문맥·각주 연결: `S10_T008`

원문 위치: `#barrier > .stage.d > p:nth-child(14):L489 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(3):L506`

### S10_T012

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 엑토인이 수분 환경의 안정화와 보호에 주목한 성분이라면, 세라마이드는 피부 장벽을 구성하는 지질에 집중한 성분입니다. 서로 다른 역할의 두 성분을 함께 배합해, 채운 수분을 지키기 위한 보습 환경을 생각했습니다.

EN:

While ectoin focuses on stabilizing and protecting the skin’s moisture environment, ceramides focus on the lipids that make up the skin barrier. By combining the two, we aimed to create a moisturizing environment that helps retain the moisture supplied.

문맥·각주 연결: `S10_T008`

원문 위치: `#barrier > .stage.d > p:nth-child(16):L491 || #barrier > .stage.m > div:nth-child(3) > p:nth-child(3):L508`

## condition

### S11_T001

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `short_label`

보존값: `03`

문맥·각주 연결: `S11_T012;S11_T002;S11_T005`

원문 위치: `#condition > .stage.d > p:nth-child(1):L516`

### S11_T002

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: Condition

EN:

Condition

문맥·각주 연결: `S11_T012;S11_T001;S11_T005`

원문 위치: `#condition > .stage.d > p:nth-child(2):L517`

### S11_T003

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 아침 피부결까지 생각한 발효 케어

EN:

Fermented ingredients selected with morning skin texture in mind

문맥·각주 연결: `S11_T012`

원문 위치: `#condition > .stage.d > p:nth-child(3):L518 || #condition > .stage.m > p:nth-child(2):L536`

### S11_T004

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 비피다발효여과물

EN:

Bifida ferment filtrate

문맥·각주 연결: `S11_T012`

원문 위치: `#condition > .stage.d > p:nth-child(6):L521 || #condition > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(1):L539`

### S11_T005

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `short_label`

KO: 03 Condition

EN:

03 Condition

문맥·각주 연결: `S11_T012;S11_T001;S11_T002`

원문 위치: `#condition > .stage.d > p:nth-child(7):L522 || #condition > .stage.d > p:nth-child(13):L528 || #condition > .stage.m > p:nth-child(1):L535`

### S11_T006

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 수분 유지와 피부 컨디셔닝

EN:

Moisture retention and skin conditioning

문맥·각주 연결: `S11_T012`

원문 위치: `#condition > .stage.d > p:nth-child(8):L523 || #condition > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(2):L540`

### S11_T007

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 비피다균의 발효 과정에서 얻은 여과물입니다. 발효 과정에서 얻는 수용성 성분을 담은 원료로, 피부의 수분 유지와 컨디셔닝을 위해 활용됩니다. 나잇나잇 크림은 이러한 원료 특성에 주목해, 하루 동안 외부 환경에 노출된 피부의 컨디션까지 고려하여 비피다발효여과물을 선택했습니다.

EN:

This filtrate is obtained through the fermentation of bifidobacteria. It contains water-soluble components from the fermentation process and is used for skin moisture retention and conditioning. Given these ingredient properties, we chose bifida ferment filtrate for NIGHT NIGHT CREAM with **the condition of skin exposed to the outside environment throughout the day** in mind.

문맥·각주 연결: `S11_T012`

서식 연결: b: the condition of skin exposed to the outside environment throughout the day

원문 위치: `#condition > .stage.d > p:nth-child(9):L524 || #condition > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(3):L541`

### S11_T008

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 갈락토미세스발효여과물

EN:

Galactomyces ferment filtrate

문맥·각주 연결: `S11_T012`

원문 위치: `#condition > .stage.d > p:nth-child(12):L527 || #condition > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(1):L544`

### S11_T009

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `short_label`

KO: 보습과 부드러운 피부결 관리

EN:

Moisturizing care for softer, smoother skin

문맥·각주 연결: `S11_T012`

원문 위치: `#condition > .stage.d > p:nth-child(14):L529 || #condition > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(2):L545`

### S11_T010

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `long_body`

KO: 갈락토미세스의 발효 과정에서 얻은 여과물입니다. 피부 보습과 피부결 관리를 위한 컨디셔닝 원료로 활용되며, 관련 원료를 함유한 제형 연구에서는 피부 거칠기 개선이 보고되었습니다. 나잇나잇 크림은 이러한 원료의 활용 배경을 바탕으로, 건조함으로 거칠어지기 쉬운 피부를 촉촉하고 부드럽게 관리하는 나이트케어를 위해 갈락토미세스발효여과물을 선택했습니다.

EN:

This filtrate is obtained through the fermentation of Galactomyces. It is used as a conditioning ingredient for skin moisturization and texture care. Research on formulations containing related ingredients has reported improvements in skin roughness. With this background in mind, we chose galactomyces ferment filtrate for NIGHT NIGHT CREAM **as part of nighttime care designed to moisturize and soften skin that tends to become rough from dryness**.

문맥·각주 연결: `S11_T012`

서식 연결: b: as part of nighttime care designed to moisturize and soften skin that tends to become rough from dryness

원문 위치: `#condition > .stage.d > p:nth-child(15):L530 || #condition > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(3):L546`

### S11_T011

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 수분을 채우고 지키는 보습·장벽 설계에 두 가지 발효 성분의 컨디셔닝 특성을 더해, 다음 날 아침의 피부결과 컨디션까지 생각했습니다.

EN:

Alongside moisture and barrier care designed to replenish and retain hydration, we included two fermented ingredients for their conditioning properties, with the next morning’s skin texture and condition in mind.

문맥·각주 연결: `S11_T012`

원문 위치: `#condition > .stage.d > p:nth-child(16):L531 || #condition > .stage.m > div:nth-child(3) > p:nth-child(3):L548`

### S11_T012

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `footnote_disclaimer`

KO: ※ 발효 성분의 특성과 연구 배경에 대한 설명입니다. 연구에 사용된 원료·제형의 결과를 완제품의 시험 결과로 제시하지 않습니다.

EN:

※ This describes the properties and research background of the fermented ingredients. Results for the ingredients and formulations used in the research are not presented as test results for the finished product.

문맥·각주 연결: `S11_T012`

원문 위치: `#condition > .stage.d > p:nth-child(17):L532 || #condition > .stage.m > div:nth-child(3) > p:nth-child(4):L549`

## info

### S12_T001

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_label`

KO: 제품명

EN:

Product name

문맥·각주 연결: `S12_T002`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(1) > p:nth-child(1):L559 || #info > .stage.m > div:nth-child(2) > div:nth-child(1) > p:nth-child(1):L574`

### S12_T002

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_value`

KO: byDose NIGHT NIGHT CREAM (나잇나잇 크림)

EN:

byDose NIGHT NIGHT CREAM (나잇나잇 크림)

문맥·각주 연결: `S12_T001`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(1) > p:nth-child(2):L559 || #info > .stage.m > div:nth-child(2) > div:nth-child(1) > p:nth-child(2):L574`

### S12_T003

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_label`

KO: 용량

EN:

Volume

문맥·각주 연결: `S12_T004`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(2) > p:nth-child(1):L560 || #info > .stage.m > div:nth-child(2) > div:nth-child(2) > p:nth-child(1):L575`

### S12_T004

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `spec_table_value`

보존값: `50 mL`

문맥·각주 연결: `S12_T003`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(2) > p:nth-child(2):L560 || #info > .stage.m > div:nth-child(2) > div:nth-child(2) > p:nth-child(2):L575`

### S12_T005

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_label`

KO: 제품 유형 / 제형

EN:

Product type / Texture

문맥·각주 연결: `S12_T006`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(3) > p:nth-child(1):L561 || #info > .stage.m > div:nth-child(2) > div:nth-child(3) > p:nth-child(1):L576`

### S12_T006

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_value`

KO: 나이트 크림 / 젤-크림 타입

EN:

Night cream / Gel-cream

문맥·각주 연결: `S12_T005`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(3) > p:nth-child(2):L561 || #info > .stage.m > div:nth-child(2) > div:nth-child(3) > p:nth-child(2):L576`

### S12_T007

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_label`

KO: 피부 타입

EN:

Skin type

문맥·각주 연결: `S12_T008`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(4) > p:nth-child(1):L562 || #info > .stage.m > div:nth-child(2) > div:nth-child(4) > p:nth-child(1):L577`

### S12_T008

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_value`

KO: 모든 피부용

EN:

All skin types

문맥·각주 연결: `S12_T007`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(4) > p:nth-child(2):L562 || #info > .stage.m > div:nth-child(2) > div:nth-child(4) > p:nth-child(2):L577`

### S12_T009

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_label`

KO: 용기

EN:

Packaging

문맥·각주 연결: `S12_T010`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(5) > p:nth-child(1):L563 || #info > .stage.m > div:nth-child(2) > div:nth-child(5) > p:nth-child(1):L578`

### S12_T010

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_value`

KO: 에어리스 펌프

EN:

Airless pump

문맥·각주 연결: `S12_T009`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(5) > p:nth-child(2):L563 || #info > .stage.m > div:nth-child(2) > div:nth-child(5) > p:nth-child(2):L578`

### S12_T011

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_label`

KO: 사용법

EN:

Directions

문맥·각주 연결: `S12_T012`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(6) > p:nth-child(1):L564 || #info > .stage.m > div:nth-child(2) > div:nth-child(6) > p:nth-child(1):L579`

### S12_T012

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_value`

KO: 적당량을 얼굴 전체에 부드럽게 펴 바릅니다.

EN:

Gently spread an appropriate amount over the entire face.

문맥·각주 연결: `S12_T011`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(6) > p:nth-child(2):L564 || #info > .stage.m > div:nth-child(2) > div:nth-child(6) > p:nth-child(2):L579`

### S12_T013

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_label`

KO: 제조국

EN:

Country of manufacture

문맥·각주 연결: `S12_T014`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(7) > p:nth-child(1):L565 || #info > .stage.m > div:nth-child(2) > div:nth-child(7) > p:nth-child(1):L580`

### S12_T014

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_value`

KO: 대한민국

EN:

Republic of Korea

문맥·각주 연결: `S12_T013`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(7) > p:nth-child(2):L565 || #info > .stage.m > div:nth-child(2) > div:nth-child(7) > p:nth-child(2):L580`

### S12_T015

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_label`

KO: 소비자가

EN:

Retail price

문맥·각주 연결: `S12_T016`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(8) > p:nth-child(1):L566 || #info > .stage.m > div:nth-child(2) > div:nth-child(8) > p:nth-child(1):L581`

### S12_T016

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_value`

KO: 28,900원

EN:

KRW 28,900

문맥·각주 연결: `S12_T015`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(8) > p:nth-child(2):L566 || #info > .stage.m > div:nth-child(2) > div:nth-child(8) > p:nth-child(2):L581`

### S12_T017

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `spec_table_label`

KO: 홈페이지 / 문의

EN:

Website / Inquiries

문맥·각주 연결: `S12_T018`

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(9) > p:nth-child(1):L567 || #info > .stage.m > div:nth-child(2) > div:nth-child(9) > p:nth-child(1):L582`

### S12_T018

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `spec_table_value`

보존값: `bydose.kr · hogan@bydose.kr`

문맥·각주 연결: `S12_T017`

서식 연결: u 및 링크: bydose.kr → https://bydose.kr; hogan@bydose.kr → mailto:hogan@bydose.kr

원문 위치: `#info > .stage.d > div:nth-child(2) > div:nth-child(9) > p:nth-child(2):L567 || #info > .stage.m > div:nth-child(2) > div:nth-child(9) > p:nth-child(2):L582`

### S12_T019

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 전성분·제조/책임판매 정보·박스 입수 등 상세 정보와 공급가·MOQ·납기는 필요 시 별도 자료로 제공합니다.

EN:

The full ingredient list, manufacturer and responsible distributor information, units per case, supply pricing, MOQ, and lead times are available separately on request.

원문 위치: `#info > .stage.d > p:nth-child(3):L569 || #info > .stage.m > p:nth-child(3):L584`

## contact

### S13_T001

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `body_or_caption`

KO: 읽어주셔서 감사합니다. 샘플 검토와 거래 조건 문의는 아래로 연락 주세요.

EN:

Thank you for reading.
For sample evaluation and inquiries about trade terms, please contact us below.

원문 위치: `#contact > .stage.d > p:nth-child(1):L591 || #contact > .stage.m > p:nth-child(1):L596`

### S13_T002

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `link_or_card`

보존값: `hogan@bydose.kr`

서식 연결: 링크: mailto:hogan@bydose.kr

원문 위치: `#contact > .stage.d > a:nth-child(2):L592 || #contact > .stage.m > a:nth-child(2):L597`

## ATTRIBUTE

### ATTR_GLOBAL_lang_01

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `metadata_or_ui_source`

보존값: `ko`

원문 위치: `html @lang:L2`

### ATTR_GLOBAL_aria_roledescription_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 프레젠테이션

EN:

presentation

원문 위치: `#bdk @aria-roledescription:L158`

### ATTR_cover_data_title_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 표지

EN:

Cover

원문 위치: `#cover @data-title:L162`

### ATTR_cover_data_next_01

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `metadata_or_ui_source`

보존값: `""`

원문 위치: `#cover @data-next:L162`

### ATTR_cover_data_mnext_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 나잇나잇 크림 소개

EN:

Introducing NIGHT NIGHT CREAM

원문 위치: `#cover @data-mnext:L162`

### ATTR_cover_alt_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 나잇나잇 크림 50mL 에어리스 펌프 용기

EN:

NIGHT NIGHT CREAM 50mL airless pump container

원문 위치: `#cover > .stage.d > img:nth-child(1) @alt:L164`

### ATTR_cover_alt_02

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#cover > .stage.m > img:nth-child(1) @alt:L169`

### ATTR_intro_data_title_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 01 제품 소개

EN:

01 Product introduction

원문 위치: `#intro @data-title:L176`

### ATTR_intro_data_next_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 밤을 위한 설계

EN:

Designed for the night

원문 위치: `#intro @data-next:L176`

### ATTR_intro_alt_01

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#intro > .stage.d > img:nth-child(3) @alt:L180`

### ATTR_intro_alt_02

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 나잇나잇 크림 본품

EN:

NIGHT NIGHT CREAM product

원문 위치: `#intro > .stage.d > img:nth-child(8) @alt:L185`

### ATTR_intro_alt_03

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#intro > .stage.m > img:nth-child(1) @alt:L188`

### ATTR_intro_alt_04

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#intro > .stage.m > img:nth-child(4) @alt:L191`

### ATTR_why_data_title_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 02 좋은 밤

EN:

02 A good night

원문 위치: `#why @data-title:L200`

### ATTR_why_data_next_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 굿나잇 시퀀스™

EN:

Goodnight Sequence™

원문 위치: `#why @data-next:L200`

### ATTR_sequence_data_title_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 02 굿나잇 시퀀스™

EN:

02 Goodnight Sequence™

원문 위치: `#sequence @data-title:L225`

### ATTR_sequence_data_next_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 감촉과 향

EN:

Texture & scent

원문 위치: `#sequence @data-next:L225`

### ATTR_sequence_alt_01

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#sequence > .stage.d > img:nth-child(4) @alt:L231`

### ATTR_sequence_alt_02

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#sequence > .stage.d > img:nth-child(9) @alt:L236`

### ATTR_sequence_alt_03

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#sequence > .stage.d > img:nth-child(14) @alt:L241`

### ATTR_sequence_alt_04

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#sequence > .stage.m > img:nth-child(4) @alt:L251`

### ATTR_sequence_alt_05

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#sequence > .stage.m > img:nth-child(9) @alt:L256`

### ATTR_sequence_alt_06

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#sequence > .stage.m > img:nth-child(14) @alt:L261`

### ATTR_texture_data_title_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 03 텍스처

EN:

03 Texture

원문 위치: `#texture @data-title:L270`

### ATTR_texture_data_next_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 향

EN:

Scent

원문 위치: `#texture @data-next:L270`

### ATTR_texture_alt_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 발림성 5점 중 5점

EN:

Spreadability: 5 out of 5

원문 위치: `#texture > .stage.d > img:nth-child(7) @alt:L278`

### ATTR_texture_alt_02

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 끈적임 5점 중 1점

EN:

Stickiness: 1 out of 5

원문 위치: `#texture > .stage.d > img:nth-child(9) @alt:L280`

### ATTR_texture_alt_03

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 별점 5점

EN:

5-star rating

원문 위치: `#texture > .stage.d > div:nth-child(10) > img:nth-child(3) @alt:L284`

### ATTR_texture_alt_04

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 발림성 5점 중 5점

EN:

Spreadability: 5 out of 5

원문 위치: `#texture > .stage.m > img:nth-child(7) @alt:L294`

### ATTR_texture_alt_05

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 끈적임 5점 중 1점

EN:

Stickiness: 1 out of 5

원문 위치: `#texture > .stage.m > img:nth-child(9) @alt:L296`

### ATTR_texture_alt_06

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 별점 5점

EN:

5-star rating

원문 위치: `#texture > .stage.m > div:nth-child(10) > img:nth-child(3) @alt:L300`

### ATTR_scent_data_title_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 03 향

EN:

03 Scent

원문 위치: `#scent @data-title:L306`

### ATTR_scent_data_next_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 「아로마 웰니스」

EN:

「AromaWellness」

원문 위치: `#scent @data-next:L306`

### ATTR_aroma_data_title_01

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `metadata_or_ui_source`

KO: 03 AromaWellness

EN:

03 AromaWellness

원문 위치: `#aroma @data-title:L342`

### ATTR_aroma_data_next_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 성분 설계

EN:

Ingredient design

원문 위치: `#aroma @data-next:L342`

### ATTR_aroma_alt_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: GW ONE RELAX SC 기술 적합성 확인서

EN:

Certificate of Technology Compliance for GW ONE RELAX SC

원문 위치: `#aroma > .stage.d > div:nth-child(9) > img:nth-child(5) @alt:L361`

### ATTR_aroma_alt_02

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: GW ONE RELAX SC 기술 적합성 확인서

EN:

Certificate of Technology Compliance for GW ONE RELAX SC

원문 위치: `#aroma > .stage.m > div:nth-child(10) > img:nth-child(3) @alt:L378`

### ATTR_formula_data_title_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 04 성분 설계

EN:

04 Ingredient design

원문 위치: `#formula @data-title:L386`

### ATTR_formula_data_next_01

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `metadata_or_ui_source`

KO: Hydration

EN:

Hydration

원문 위치: `#formula @data-next:L386`

### ATTR_formula_alt_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 나잇나잇 크림 본품

EN:

NIGHT NIGHT CREAM product

원문 위치: `#formula > .stage.d > img:nth-child(3) @alt:L390`

### ATTR_formula_alt_02

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#formula > .stage.m > img:nth-child(3) @alt:L413`

### ATTR_hydration_data_title_01

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `metadata_or_ui_source`

KO: 04 Hydration

EN:

04 Hydration

원문 위치: `#hydration @data-title:L433`

### ATTR_hydration_data_next_01

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `metadata_or_ui_source`

KO: Barrier

EN:

Barrier

원문 위치: `#hydration @data-next:L433`

### ATTR_hydration_alt_01

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#hydration > .stage.d > img:nth-child(10) @alt:L444`

### ATTR_hydration_alt_02

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#hydration > .stage.d > img:nth-child(15) @alt:L449`

### ATTR_barrier_data_title_01

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `metadata_or_ui_source`

KO: 04 Barrier

EN:

04 Barrier

원문 위치: `#barrier @data-title:L474`

### ATTR_barrier_data_next_01

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `metadata_or_ui_source`

KO: Condition

EN:

Condition

원문 위치: `#barrier @data-next:L474`

### ATTR_barrier_alt_01

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#barrier > .stage.d > img:nth-child(15) @alt:L490`

### ATTR_condition_data_title_01

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `metadata_or_ui_source`

KO: 04 Condition

EN:

04 Condition

원문 위치: `#condition @data-title:L514`

### ATTR_condition_data_next_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 제품 정보

EN:

Product information

원문 위치: `#condition @data-next:L514`

### ATTR_condition_alt_01

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#condition > .stage.d > img:nth-child(10) @alt:L525`

### ATTR_condition_alt_02

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#condition > .stage.d > img:nth-child(11) @alt:L526`

### ATTR_info_data_title_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 05 제품 정보

EN:

05 Product information

원문 위치: `#info @data-title:L555`

### ATTR_info_data_next_01

처리: `RETAIN_SOURCE_EN_PENDING` · 원본 분류: `REVIEW` · 역할: `metadata_or_ui_source`

KO: EOD

EN:

EOD

원문 위치: `#info @data-next:L555`

### ATTR_info_alt_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `accessibility`

KO: 나잇나잇 크림 본품

EN:

NIGHT NIGHT CREAM product

원문 위치: `#info > .stage.d > img:nth-child(1) @alt:L557`

### ATTR_info_alt_02

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `""`

원문 위치: `#info > .stage.m > img:nth-child(1) @alt:L572`

### ATTR_contact_data_title_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `metadata_or_ui_source`

KO: 문의

EN:

Inquiries

원문 위치: `#contact @data-title:L589`

### ATTR_contact_data_next_01

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `metadata_or_ui_source`

보존값: `""`

원문 위치: `#contact @data-next:L589`

### ATTR_contact_alt_01

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `byDose`

원문 위치: `#contact > .stage.d > img:nth-child(3) @alt:L593`

### ATTR_contact_alt_02

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `accessibility`

보존값: `byDose`

원문 위치: `#contact > .stage.m > img:nth-child(3) @alt:L598`

## META

### META_DOCUMENT_TITLE

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `meta_title`

KO: 나잇나잇 크림 제품소개서 — byDose

EN:

NIGHT NIGHT CREAM Product Presentation — byDose

원문 위치: `head > title:L6`

## JS_SOURCE

### JS_SECS_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 제품 소개

EN:

Product introduction

원문 위치: `script var SECS[1]:L642`

### JS_SECS_02

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 밤을 위한 설계

EN:

Designed for the night

원문 위치: `script var SECS[2]:L642`

### JS_SECS_03

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 감촉과 향

EN:

Texture & scent

원문 위치: `script var SECS[3]:L642`

### JS_SECS_04

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 성분 설계

EN:

Ingredient design

원문 위치: `script var SECS[4]:L642`

### JS_SECS_05

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 제품 정보

EN:

Product information

원문 위치: `script var SECS[5]:L642`

### JS_TABS_01

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 제품소개

EN:

Product introduction

원문 위치: `script var TABS[1]:L643`

### JS_TABS_02

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 밤을 위한 설계

EN:

Designed for the night

원문 위치: `script var TABS[2]:L643`

### JS_TABS_03

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 감촉과 향

EN:

Texture & scent

원문 위치: `script var TABS[3]:L643`

### JS_TABS_04

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 성분 설계

EN:

Ingredient design

원문 위치: `script var TABS[4]:L643`

### JS_TABS_05

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `navigation_label`

KO: 제품 정보

EN:

Product information

원문 위치: `script var TABS[5]:L643`

### JS_LANG_KOR

처리: `HOLD_TERM_PENDING` · 원본 분류: `REVIEW` · 역할: `language_menu`

KO: 한국어

EN: **보류 — 미확정**. 원본 메뉴 라벨은 위 KO에 보존. 이슈 문서의 개별 후보 참조.

원문 위치: `script LANGS KOR:L646`

### JS_LANG_ENG

처리: `HOLD_TERM_PENDING` · 원본 분류: `REVIEW` · 역할: `language_menu`

KO: 영어

EN: **보류 — 미확정**. 원본 메뉴 라벨은 위 KO에 보존. 이슈 문서의 개별 후보 참조.

원문 위치: `script LANGS ENG:L646`

### JS_LANG_CHN

처리: `HOLD_TERM_PENDING` · 원본 분류: `REVIEW` · 역할: `language_menu`

KO: 중국

EN: **보류 — 미확정**. 원본 메뉴 라벨은 위 KO에 보존. 이슈 문서의 개별 후보 참조.

원문 위치: `script LANGS CHN:L646`

### JS_LANG_MNG

처리: `HOLD_TERM_PENDING` · 원본 분류: `REVIEW` · 역할: `language_menu`

KO: 몽골

EN: **보류 — 미확정**. 원본 메뉴 라벨은 위 KO에 보존. 이슈 문서의 개별 후보 참조.

원문 위치: `script LANGS MNG:L646`

### JS_LANG_RUS

처리: `HOLD_TERM_PENDING` · 원본 분류: `REVIEW` · 역할: `language_menu`

KO: 러시아

EN: **보류 — 미확정**. 원본 메뉴 라벨은 위 KO에 보존. 이슈 문서의 개별 후보 참조.

원문 위치: `script LANGS RUS:L646`

### JS_HOME_ARIA

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `generated_accessibility`

KO: byDose 처음으로

EN:

byDose — back to the beginning

원문 위치: `script:L663`

### JS_PDF_ARIA

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `generated_accessibility`

KO: PDF로 저장

EN:

Save as PDF

원문 위치: `script:L708`

### JS_LANGUAGE_ARIA

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `generated_accessibility`

KO: 언어 선택

EN:

Select language

원문 위치: `script:L710`

### JS_COVER_LOGO_ALT

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `generated_accessibility`

보존값: `byDose`

원문 위치: `script:L685`

### JS_NEXT_PREFIX

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `generated_accessibility_prefix`

KO: 다음 장

EN:

Next slide

원문 위치: `script:L676`

### JS_VIDEO_SUFFIX

처리: `TRANSLATED_DRAFT` · 원본 분류: `Y` · 역할: `generated_accessibility_suffix`

KO:  영상

EN: ` video` (앞 공백 1개 포함)

원문 위치: `script:L800`

## JS_RESOLVED

### GEN_cover_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#cover .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_intro_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_intro_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#intro .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_why_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_why_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#why .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_sequence_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_sequence_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#sequence .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_texture_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_texture_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#texture .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_texture_VIDEO_TITLE

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_iframe_title`

파생 참조: `ATTR_texture_data_title_01 + JS_VIDEO_SUFFIX`

문맥·각주 연결: `JS_VIDEO_SUFFIX`

원문 위치: `#texture .media iframe @title; script:L800`

### GEN_scent_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_scent_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#scent .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_scent_VIDEO_TITLE

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_iframe_title`

파생 참조: `ATTR_scent_data_title_01 + JS_VIDEO_SUFFIX`

문맥·각주 연결: `JS_VIDEO_SUFFIX`

원문 위치: `#scent .media iframe @title; script:L800`

### GEN_aroma_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_aroma_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#aroma .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_formula_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_formula_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#formula .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_hydration_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_hydration_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#hydration .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_barrier_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_barrier_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#barrier .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_condition_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_condition_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#condition .stage.d/.stage.m button.next @aria-label; script:L676`

### GEN_info_NEXT_ARIA

처리: `DERIVED_REFERENCE_ONLY` · 원본 분류: `Y` · 역할: `generated_accessibility_resolved`

파생 참조: `JS_NEXT_PREFIX + ": " + ATTR_info_data_next_01`

문맥·각주 연결: `JS_NEXT_PREFIX`

원문 위치: `#info .stage.d/.stage.m button.next @aria-label; script:L676`

## LINK

### LINK_hydration_PC

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `empty_link_target`

보존값: `""`

원문 위치: `#formula > .stage.d > a:nth-child(4):L391`

### LINK_barrier_PC

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `empty_link_target`

보존값: `""`

원문 위치: `#formula > .stage.d > a:nth-child(10):L397`

### LINK_condition_PC

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `empty_link_target`

보존값: `""`

원문 위치: `#formula > .stage.d > a:nth-child(16):L403`

## RESOURCE

### RESOURCE_001

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `https://fonts.googleapis.com`

원문 위치: `head > link:nth-child(4) @href:L7`

### RESOURCE_002

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `https://fonts.gstatic.com`

원문 위치: `head > link:nth-child(5) @href:L8`

### RESOURCE_003

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300..800&family=Roboto+Mono:wght@400;700&display=swap`

원문 위치: `head > link:nth-child(6) @href:L9`

### RESOURCE_004

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/hero-product.jpg`

원문 위치: `#cover > .stage.d > img:nth-child(1) @src:L164 || #cover > .stage.m > img:nth-child(1) @src:L169`

### RESOURCE_005

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/divider.svg`

원문 위치: `#intro > .stage.d > img:nth-child(3) @src:L180 || #intro > .stage.m > img:nth-child(4) @src:L191`

### RESOURCE_006

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/cutout.png`

원문 위치: `#intro > .stage.d > img:nth-child(8) @src:L185 || #intro > .stage.m > img:nth-child(1) @src:L188 || #formula > .stage.d > img:nth-child(3) @src:L390 || #formula > .stage.m > img:nth-child(3) @src:L413 || #info > .stage.d > img:nth-child(1) @src:L557 || #info > .stage.m > img:nth-child(1) @src:L572`

### RESOURCE_007

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/bg-night.jpg`

원문 위치: `#why @style:L200`

### RESOURCE_008

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/bg-sequence.jpg`

원문 위치: `#sequence @style:L225`

### RESOURCE_009

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/clock-11.svg`

원문 위치: `#sequence > .stage.d > img:nth-child(4) @src:L231 || #sequence > .stage.m > img:nth-child(4) @src:L251`

### RESOURCE_010

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/clock-3.svg`

원문 위치: `#sequence > .stage.d > img:nth-child(9) @src:L236 || #sequence > .stage.m > img:nth-child(9) @src:L256`

### RESOURCE_011

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/clock-7.svg`

원문 위치: `#sequence > .stage.d > img:nth-child(14) @src:L241 || #sequence > .stage.m > img:nth-child(14) @src:L261`

### RESOURCE_012

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `1217189885`

원문 위치: `#texture > .stage.d > div:nth-child(3) @data-vimeo:L274 || #texture > .stage.m > div:nth-child(3) @data-vimeo:L290`

### RESOURCE_013

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `https://i.vimeocdn.com/video/2188812504-83314b1905a3b2a4234b66c86f2c7c4c4ddc4cee17474fc11246d96b5c48b05a-d_1280?region=us`

원문 위치: `#texture > .stage.d > div:nth-child(3) @style:L274 || #texture > .stage.m > div:nth-child(3) @style:L290`

### RESOURCE_014

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/dots-spread.svg`

원문 위치: `#texture > .stage.d > img:nth-child(7) @src:L278 || #texture > .stage.m > img:nth-child(7) @src:L294`

### RESOURCE_015

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/dots-sticky.svg`

원문 위치: `#texture > .stage.d > img:nth-child(9) @src:L280 || #texture > .stage.m > img:nth-child(9) @src:L296`

### RESOURCE_016

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/stars.svg`

원문 위치: `#texture > .stage.d > div:nth-child(10) > img:nth-child(3) @src:L284 || #texture > .stage.m > div:nth-child(10) > img:nth-child(3) @src:L300`

### RESOURCE_017

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `1217189884`

원문 위치: `#scent > .stage.d > div:nth-child(3) @data-vimeo:L310 || #scent > .stage.m > div:nth-child(3) @data-vimeo:L326`

### RESOURCE_018

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/poster-scent.jpg`

원문 위치: `#scent > .stage.d > div:nth-child(3) @style:L310 || #scent > .stage.m > div:nth-child(3) @style:L326`

### RESOURCE_019

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/bg-aroma.jpg`

원문 위치: `#aroma @style:L342`

### RESOURCE_020

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/certificate.jpg`

원문 위치: `#aroma > .stage.d > div:nth-child(9) > img:nth-child(5) @src:L361 || #aroma > .stage.m > div:nth-child(10) > img:nth-child(3) @src:L378`

### RESOURCE_021

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/mol-hyaluronate.png`

원문 위치: `#hydration > .stage.d > img:nth-child(10) @src:L444`

### RESOURCE_022

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/mol-xylityl.png`

원문 위치: `#hydration > .stage.d > img:nth-child(15) @src:L449`

### RESOURCE_023

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/mol-barrier.png`

원문 위치: `#barrier > .stage.d > img:nth-child(15) @src:L490`

### RESOURCE_024

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/mol-galactomyces.png`

원문 위치: `#condition > .stage.d > img:nth-child(10) @src:L525`

### RESOURCE_025

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/mol-bifida.png`

원문 위치: `#condition > .stage.d > img:nth-child(11) @src:L526`

### RESOURCE_026

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `resource_reference`

보존값: `nightnight-deck-assets/rabbit.svg`

원문 위치: `#contact > .stage.d > img:nth-child(3) @src:L593 || #contact > .stage.m > img:nth-child(3) @src:L598`

### RESOURCE_JS_logo_TONE

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `generated_resource`

보존값: `nightnight-deck-assets/logo-{tone}.svg`

원문 위치: `script:L664`

### RESOURCE_JS_nav_dot

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `generated_resource`

보존값: `nightnight-deck-assets/nav-dot.svg`

원문 위치: `script:L669`

### RESOURCE_JS_next_btn

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `generated_resource`

보존값: `nightnight-deck-assets/next-btn.svg`

원문 위치: `script:L677`

### RESOURCE_JS_logo_dark

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `generated_resource`

보존값: `nightnight-deck-assets/logo-dark.svg`

원문 위치: `script:L685`

### RESOURCE_JS_next_btn_m

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `generated_resource`

보존값: `nightnight-deck-assets/next-btn-m.svg`

원문 위치: `script:L699`

### RESOURCE_JS_download_TONE

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `generated_resource`

보존값: `nightnight-deck-assets/download-{tone}.svg`

원문 위치: `script:L707`

### RESOURCE_JS_lang_TONE

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `generated_resource`

보존값: `nightnight-deck-assets/lang-{tone}.svg`

원문 위치: `script:L709`

### RESOURCE_JS_caret_TONE

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `generated_resource`

보존값: `nightnight-deck-assets/caret-{tone}.svg`

원문 위치: `script:L709`

## META

### META_CHARSET

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `technical_metadata`

보존값: `UTF-8`

원문 위치: `head > meta:nth-child(1):L4`

### META_VIEWPORT

처리: `KEEP_SOURCE_NONTRANSLATABLE` · 원본 분류: `N` · 역할: `technical_metadata`

보존값: `width=device-width, initial-scale=1.0, viewport-fit=cover`

원문 위치: `head > meta:nth-child(2):L5`

