# 일본어 초안 — TASK 03 / G3

KO_SOURCE_VERSION: `nightnight-deck_2026-10-23_HTML_v1`
CONTENT_MAP_VERSION: `HTML_v1_VERIFIED_R01`
TARGET_LOCALE: `ja`
DRAFT_VERSION: `JA_HTML_v1_DRAFT_R01`
LOCALE_DRAFT_VERSION: `JA_HTML_v1_DRAFT_R01`
REVISED_VERSION: `JA_HTML_v1_REVISED_R02_EDITORIAL_QA_CANDIDATE`
PARENT_SHA256: `8eb302a8ab69fe30b46770df8601ba59beb96ef5952175166157dfc754a5cf1d`
STATUS: `EDITORIAL_QA_RECOMMENDED`
KO_SOURCE_PATH: `inputs/KO_APPROVED/nightnight-deck.html`
KO_SOURCE_SHA256: `7ec0a14c009bbf2ef6261d98c04617901a188fbad81adebfcb28a38a944f33ed`
CONTENT_MAP_SHA256: `676852ffdc3b684d5551ca177144d89d31fc92a19a848a02a34a104584188378`
RULES_COMMON_VERSION: `1.1_MN_LEARNED_2026-10-24`
RULES_JA_VERSION: `1.0`
ACTIVE_RULES: `C01,C02,C03,C04,C05,C06,C07,C08` (ja 추가 활성 규칙 0)
RIGHTS: `RIGHTS_PENDING`
EVIDENCE: `EVIDENCE_PENDING`
REGULATORY: `REGULATORY_PENDING`
DESIGN: `DESIGN_PENDING`

승인 KO HTML에서 직접 번역한 일본 B2B 바이어용 초안. 영문·몽골어 초안 및 검수 본문을 중간 원문으로 사용하지 않았다. 명칭의 일본어 표기는 별도 OPEN_ISSUES의 잠정안이며 확정 표기가 아니다. 원문의 영문 브랜드 문구는 유지했다. 원문의 주장·설계 의도와 근거 범위를 보존하며, 일본 인허가·광고 적합성 판단은 수행하지 않았다.

272개 ID를 원래 순서로 보존한다. JA의 span/br는 서식 대응을 표시하는 초안 표기이며 HTML 구현이 아니다. 서식 연결에는 맵의 원본 JSON과 메모를 그대로 보존했다. 별도 표기가 없는 문단 전체 서식·PC/모바일 반복·mono 숫자는 해당 원본 서식 연결을 상속한다. 언어 메뉴 5개는 보류하며 JS_RESOLVED는 원천 참조만 보존한다. 기술값과 빈 값은 JSON 보존값으로 표시한다.

## ID별 초안

### S01_T001

KO: “ NIGHT NIGHT CREAM “

JA: “ NIGHT NIGHT CREAM “

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #cover > .stage.d > p:nth-child(2):L165 || #cover > .stage.m > p:nth-child(2):L170
서식 연결: [{"view":"PC","selector":"#cover > .stage.d > p:nth-child(2)","line":165,"end_line":165,"raw_html":"<p class=\"a b\" style=\"left:60px;top:197px;font-size:36px;line-height:normal\">“ NIGHT NIGHT CREAM “</p>","text_with_breaks":"“ NIGHT NIGHT CREAM “","links":[]},{"view":"MOBILE","selector":"#cover > .stage.m > p:nth-child(2)","line":170,"end_line":170,"raw_html":"<p class=\"a b\" style=\"left:24px;top:92px;font-size:24px;line-height:normal\">“ NIGHT NIGHT CREAM “</p>","text_with_breaks":"“ NIGHT NIGHT CREAM “","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S01_T002

KO: LIGHT GEL-CREAM · AROMAWELLNESS SCENT · MOISTURE & BARRIER

JA: 軽やかなジェルクリーム · AROMAWELLNESSを踏まえた香り設計 · 保湿＆バリアケア

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #cover > .stage.d > p:nth-child(3):L166 || #cover > .stage.m > p:nth-child(3):L171
서식 연결: [{"view":"PC","selector":"#cover > .stage.d > p:nth-child(3)","line":166,"end_line":166,"raw_html":"<p class=\"a b trim\" style=\"right:60px;top:212px;font-size:18px;line-height:18px\">LIGHT GEL-CREAM · AROMAWELLNESS SCENT · MOISTURE &amp; BARRIER</p>","text_with_breaks":"LIGHT GEL-CREAM · AROMAWELLNESS SCENT · MOISTURE & BARRIER","links":[]},{"view":"MOBILE","selector":"#cover > .stage.m > p:nth-child(3)","line":171,"end_line":171,"raw_html":"<p class=\"a b trim wrap\" style=\"left:24px;top:131px;width:342px;font-size:10px;line-height:11px\">LIGHT GEL-CREAM · AROMAWELLNESS SCENT · MOISTURE &amp; BARRIER</p>","text_with_breaks":"LIGHT GEL-CREAM · AROMAWELLNESS SCENT · MOISTURE & BARRIER","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S02_T001

KO: GOOD NIGHT = GOOD SKIN

JA: GOOD NIGHT = GOOD SKIN

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > p:nth-child(1):L178 || #intro > .stage.m > p:nth-child(2):L189
서식 연결: [{"view":"PC","selector":"#intro > .stage.d > p:nth-child(1)","line":178,"end_line":178,"raw_html":"<p class=\"a xb tr\" style=\"left:120px;top:343px;font-size:24px;line-height:35px\">GOOD NIGHT = GOOD SKIN</p>","text_with_breaks":"GOOD NIGHT = GOOD SKIN","links":[]},{"view":"MOBILE","selector":"#intro > .stage.m > p:nth-child(2)","line":189,"end_line":189,"raw_html":"<p class=\"a xb tr\" style=\"left:24px;top:440px;font-size:20px;line-height:29px\">GOOD NIGHT = GOOD SKIN</p>","text_with_breaks":"GOOD NIGHT = GOOD SKIN","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S02_T002

KO: 나잇나잇 크림은 잠들기 전의 감각적인 경험부터, 밤사이 피부가 스스로 회복할 수 있는 환경까지 고려한 ‘아침촉촉’ 나이트크림입니다.

JA: NIGHT NIGHT CREAMは、眠りにつく前の感覚的な体験から、夜の間に肌が自ら回復できる環境までを考慮した、「朝もしっとり」を目指すナイトクリームです。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > p:nth-child(2):L179 || #intro > .stage.m > p:nth-child(3):L190
서식 연결: [{"view":"PC","selector":"#intro > .stage.d > p:nth-child(2)","line":179,"end_line":179,"raw_html":"<p class=\"a p18\" style=\"left:120px;top:389px;line-height:24px\">나잇나잇 크림은 잠들기 전의 감각적인 경험부터,<br>밤사이 피부가 스스로 회복할 수 있는 환경까지 고려한<br>‘아침촉촉’ 나이트크림입니다.</p>","text_with_breaks":"나잇나잇 크림은 잠들기 전의 감각적인 경험부터,\n밤사이 피부가 스스로 회복할 수 있는 환경까지 고려한\n‘아침촉촉’ 나이트크림입니다.","links":[]},{"view":"MOBILE","selector":"#intro > .stage.m > p:nth-child(3)","line":190,"end_line":190,"raw_html":"<p class=\"a wrap\" style=\"left:24px;top:479px;width:342px;font-size:15px;line-height:20px\">나잇나잇 크림은 잠들기 전의 감각적인 경험부터,<br>밤사이 피부가 스스로 회복할 수 있는 환경까지 고려한<br>‘아침촉촉’ 나이트크림입니다.</p>","text_with_breaks":"나잇나잇 크림은 잠들기 전의 감각적인 경험부터,\n밤사이 피부가 스스로 회복할 수 있는 환경까지 고려한\n‘아침촉촉’ 나이트크림입니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S02_T003

KO: 나잇나잇 크림 50 mL

JA: NIGHT NIGHT CREAM 50 mL

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > p:nth-child(4):L181 || #intro > .stage.m > p:nth-child(5):L192
서식 연결: [{"view":"PC","selector":"#intro > .stage.d > p:nth-child(4)","line":181,"end_line":181,"raw_html":"<p class=\"a b tr\" style=\"left:120px;top:510px;font-size:16px;line-height:18px\">나잇나잇 크림 50 mL</p>","text_with_breaks":"나잇나잇 크림 50 mL","links":[]},{"view":"MOBILE","selector":"#intro > .stage.m > p:nth-child(5)","line":192,"end_line":192,"raw_html":"<p class=\"a b tr\" style=\"left:24px;top:566px;font-size:16px;line-height:18px\">나잇나잇 크림 50 mL</p>","text_with_breaks":"나잇나잇 크림 50 mL","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S02_T004

KO: 가벼운 젤-크림 타입

JA: 軽やかなジェルクリームタイプ

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > p:nth-child(5):L182 || #intro > .stage.m > p:nth-child(6):L193
서식 연결: [{"view":"PC","selector":"#intro > .stage.d > p:nth-child(5)","line":182,"end_line":182,"raw_html":"<p class=\"a pill tag\" style=\"left:120px;top:552px\">가벼운 젤-크림 타입</p>","text_with_breaks":"가벼운 젤-크림 타입","links":[]},{"view":"MOBILE","selector":"#intro > .stage.m > p:nth-child(6)","line":193,"end_line":193,"raw_html":"<p class=\"a pill tag\" style=\"left:24px;top:598px;background:rgba(0,0,0,.15)\">가벼운 젤-크림 타입</p>","text_with_breaks":"가벼운 젤-크림 타입","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S02_T005

KO: 「AromaWellness」 조향

JA: 「AromaWellness」を踏まえた香り設計

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > p:nth-child(6):L183 || #intro > .stage.m > p:nth-child(7):L194
서식 연결: [{"view":"PC","selector":"#intro > .stage.d > p:nth-child(6)","line":183,"end_line":183,"raw_html":"<p class=\"a pill tag\" style=\"left:120px;top:599px\">「AromaWellness」 조향</p>","text_with_breaks":"「AromaWellness」 조향","links":[]},{"view":"MOBILE","selector":"#intro > .stage.m > p:nth-child(7)","line":194,"end_line":194,"raw_html":"<p class=\"a pill tag\" style=\"left:21px;top:641px;background:rgba(0,0,0,.15)\">「AromaWellness」 조향</p>","text_with_breaks":"「AromaWellness」 조향","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S02_T006

KO: 보습·장벽 케어

JA: 保湿・バリアケア

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > p:nth-child(7):L184 || #intro > .stage.m > p:nth-child(8):L195
서식 연결: [{"view":"PC","selector":"#intro > .stage.d > p:nth-child(7)","line":184,"end_line":184,"raw_html":"<p class=\"a pill tag\" style=\"left:120px;top:646px\">보습·장벽 케어</p>","text_with_breaks":"보습·장벽 케어","links":[]},{"view":"MOBILE","selector":"#intro > .stage.m > p:nth-child(8)","line":195,"end_line":195,"raw_html":"<p class=\"a pill tag\" style=\"left:24px;top:684px;background:rgba(0,0,0,.15)\">보습·장벽 케어</p>","text_with_breaks":"보습·장벽 케어","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S03_T001

KO: 좋은 피부를 위한 좋은 밤

JA: 健やかな肌のための、心地よい夜

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #why > .stage.d > p:nth-child(1):L203 || #why > .stage.m > p:nth-child(1):L213
서식 연결: [{"view":"PC","selector":"#why > .stage.d > p:nth-child(1)","line":203,"end_line":203,"raw_html":"<p class=\"a h24\" style=\"left:120px;top:178px\">좋은 피부를 위한 좋은 밤</p>","text_with_breaks":"좋은 피부를 위한 좋은 밤","links":[]},{"view":"MOBILE","selector":"#why > .stage.m > p:nth-child(1)","line":213,"end_line":213,"raw_html":"<p class=\"a xb tr\" style=\"left:24px;top:100px;font-size:22px;line-height:32px\">좋은 피부를 위한 좋은 밤</p>","text_with_breaks":"좋은 피부를 위한 좋은 밤","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S03_T002

KO: 피부는 밤에도 회복과 유지 활동을 이어갑니다. 그리고 수면은 건강한 피부를 위해 중요한 요소입니다. 바이도즈는 여기서 출발했습니다. 좋은 잠의 결과가 좋은 피부로 이어지는 화장품. 나잇나잇 크림의 시작이었습니다.

JA: 肌は夜も、回復と維持の働きを続けています。そして睡眠は、健やかな肌にとって大切な要素です。byDoseは、そこから出発しました。<br><br><span class="u">良い眠りが、健やかな肌へとつながる化粧品。</span><br>それがNIGHT NIGHT CREAMの始まりでした。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #why > .stage.d > p:nth-child(2):L204 || #why > .stage.m > p:nth-child(2):L214
서식 연결: [{"view":"PC","selector":"#why > .stage.d > p:nth-child(2)","line":204,"end_line":204,"raw_html":"<p class=\"a p18\" style=\"left:120px;top:237px\">피부는 밤에도 회복과 유지 활동을 이어갑니다.<br>그리고 수면은 건강한 피부를 위해 중요한 요소입니다.<br>바이도즈는 여기서 출발했습니다.<br><br><span class=\"u\">좋은 잠의 결과가 좋은 피부로 이어지는 화장품.</span><br>나잇나잇 크림의 시작이었습니다.</p>","text_with_breaks":"피부는 밤에도 회복과 유지 활동을 이어갑니다.\n그리고 수면은 건강한 피부를 위해 중요한 요소입니다.\n바이도즈는 여기서 출발했습니다.\n\n좋은 잠의 결과가 좋은 피부로 이어지는 화장품.\n나잇나잇 크림의 시작이었습니다.","links":[]},{"view":"MOBILE","selector":"#why > .stage.m > p:nth-child(2)","line":214,"end_line":214,"raw_html":"<p class=\"a wrap\" style=\"left:24px;top:148px;width:342px;font-size:15px;line-height:22px\">피부는 밤에도 회복과 유지 활동을 이어갑니다.<br>그리고 수면은 건강한 피부를 위해 중요한 요소입니다.<br>바이도즈는 여기서 출발했습니다.<br><br><span class=\"u\">좋은 잠의 결과가 좋은 피부로 이어지는 화장품.</span><br>나잇나잇 크림의 시작이었습니다.</p>","text_with_breaks":"피부는 밤에도 회복과 유지 활동을 이어갑니다.\n그리고 수면은 건강한 피부를 위해 중요한 요소입니다.\n바이도즈는 여기서 출발했습니다.\n\n좋은 잠의 결과가 좋은 피부로 이어지는 화장품.\n나잇나잇 크림의 시작이었습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S03_T003

KO: For a Good Night

JA: For a Good Night

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #why > .stage.d > p:nth-child(3):L205 || #why > .stage.m > p:nth-child(3):L215
서식 연결: [{"view":"PC","selector":"#why > .stage.d > p:nth-child(3)","line":205,"end_line":205,"raw_html":"<p class=\"a pill badge\" style=\"left:725px;top:576px\">For a Good Night</p>","text_with_breaks":"For a Good Night","links":[]},{"view":"MOBILE","selector":"#why > .stage.m > p:nth-child(3)","line":215,"end_line":215,"raw_html":"<p class=\"a pill badge\" style=\"left:24px;top:320px\">For a Good Night</p>","text_with_breaks":"For a Good Night","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S03_T004

KO: 잠들기 전 경험과 분위기

JA: 眠りにつく前の体験と雰囲気

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #why > .stage.d > p:nth-child(4):L206 || #why > .stage.m > p:nth-child(4):L216
서식 연결: [{"view":"PC","selector":"#why > .stage.d > p:nth-child(4)","line":206,"end_line":206,"raw_html":"<p class=\"a md tr\" style=\"left:733px;top:612px;font-size:20px;line-height:20px;color:#fff\">잠들기 전 경험과 분위기</p>","text_with_breaks":"잠들기 전 경험과 분위기","links":[]},{"view":"MOBILE","selector":"#why > .stage.m > p:nth-child(4)","line":216,"end_line":216,"raw_html":"<p class=\"a md tr\" style=\"left:28px;top:354px;font-size:17px;line-height:17px;color:#fff\">잠들기 전 경험과 분위기</p>","text_with_breaks":"잠들기 전 경험과 분위기","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S03_T005

KO: 하루의 마지막 스킨케어가 편안한 밤에 어울리도록, 피부에 남는 감촉과 향까지 고려했습니다.

JA: 一日の最後のスキンケアが心地よい夜に寄り添うよう、肌に残る感触や香りまで考慮しました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #why > .stage.d > p:nth-child(5):L207 || #why > .stage.m > p:nth-child(5):L217
서식 연결: [{"view":"PC","selector":"#why > .stage.d > p:nth-child(5)","line":207,"end_line":207,"raw_html":"<p class=\"a tr\" style=\"left:729px;top:652px;font-size:16px;line-height:22px;color:#fff\">하루의 마지막 스킨케어가 편안한 밤에 어울리도록,<br>피부에 남는 감촉과 향까지 고려했습니다.</p>","text_with_breaks":"하루의 마지막 스킨케어가 편안한 밤에 어울리도록,\n피부에 남는 감촉과 향까지 고려했습니다.","links":[]},{"view":"MOBILE","selector":"#why > .stage.m > p:nth-child(5)","line":217,"end_line":217,"raw_html":"<p class=\"a wrap tr\" style=\"left:28px;top:379px;width:224px;font-size:14px;line-height:19px;color:#fff\">하루의 마지막 스킨케어가 편안한 밤에 어울리도록, 피부에 남는 감촉과 향까지 고려했습니다.</p>","text_with_breaks":"하루의 마지막 스킨케어가 편안한 밤에 어울리도록, 피부에 남는 감촉과 향까지 고려했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S03_T006

KO: For a Good Skin

JA: For a Good Skin

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #why > .stage.d > p:nth-child(6):L208 || #why > .stage.m > p:nth-child(6):L218
서식 연결: [{"view":"PC","selector":"#why > .stage.d > p:nth-child(6)","line":208,"end_line":208,"raw_html":"<p class=\"a pill badge\" style=\"left:725px;top:765px\">For a Good Skin</p>","text_with_breaks":"For a Good Skin","links":[]},{"view":"MOBILE","selector":"#why > .stage.m > p:nth-child(6)","line":218,"end_line":218,"raw_html":"<p class=\"a pill badge\" style=\"left:24px;top:468px\">For a Good Skin</p>","text_with_breaks":"For a Good Skin","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S03_T007

KO: 밤사이 피부 회복을 위한 환경

JA: 夜の間、肌が回復するための環境

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #why > .stage.d > p:nth-child(7):L209 || #why > .stage.m > p:nth-child(7):L219
서식 연결: [{"view":"PC","selector":"#why > .stage.d > p:nth-child(7)","line":209,"end_line":209,"raw_html":"<p class=\"a md tr\" style=\"left:733px;top:801px;font-size:20px;line-height:20px;color:#fff\">밤사이 피부 회복을 위한 환경</p>","text_with_breaks":"밤사이 피부 회복을 위한 환경","links":[]},{"view":"MOBILE","selector":"#why > .stage.m > p:nth-child(7)","line":219,"end_line":219,"raw_html":"<p class=\"a md tr\" style=\"left:28px;top:502px;font-size:17px;line-height:17px;color:#fff\">밤사이 피부 회복을 위한 환경</p>","text_with_breaks":"밤사이 피부 회복을 위한 환경","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S03_T008

KO: 피부가 밤을 보내는 동안 수분을 공급하고 유지하도록, 보습과 장벽 케어를 설계했습니다.

JA: 肌が夜を過ごす間に水分を補い、保てるよう、保湿とバリアケアを設計しました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #why > .stage.d > p:nth-child(8):L210 || #why > .stage.m > p:nth-child(8):L220
서식 연결: [{"view":"PC","selector":"#why > .stage.d > p:nth-child(8)","line":210,"end_line":210,"raw_html":"<p class=\"a tr\" style=\"left:729px;top:841px;font-size:16px;line-height:22px;color:#fff\">피부가 밤을 보내는 동안 수분을 공급하고 유지하도록,<br>보습과 장벽 케어를 설계했습니다.</p>","text_with_breaks":"피부가 밤을 보내는 동안 수분을 공급하고 유지하도록,\n보습과 장벽 케어를 설계했습니다.","links":[]},{"view":"MOBILE","selector":"#why > .stage.m > p:nth-child(8)","line":220,"end_line":220,"raw_html":"<p class=\"a wrap tr\" style=\"left:28px;top:527px;width:224px;font-size:14px;line-height:19px;color:#fff\">피부가 밤을 보내는 동안 수분을 공급하고 유지하도록, 보습과 장벽 케어를 설계했습니다.</p>","text_with_breaks":"피부가 밤을 보내는 동안 수분을 공급하고 유지하도록, 보습과 장벽 케어를 설계했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T001

KO: 굿나잇 시퀀스™ 피부 회복을 돕는 설계

JA: グッドナイトシークエンス™<br><span class="rg">肌の回復を助けるための設計</span>

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(1):L228 || #sequence > .stage.m > p:nth-child(1):L248
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(1)","line":228,"end_line":228,"raw_html":"<p class=\"a h24\" style=\"left:120px;top:178px\">굿나잇 시퀀스™<br><span class=\"rg\">피부 회복을 돕는 설계</span></p>","text_with_breaks":"굿나잇 시퀀스™\n피부 회복을 돕는 설계","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(1)","line":248,"end_line":248,"raw_html":"<p class=\"a xb tr\" style=\"left:24px;top:100px;font-size:22px;line-height:32px\">굿나잇 시퀀스™<br><span class=\"rg\">피부 회복을 돕는 설계</span></p>","text_with_breaks":"굿나잇 시퀀스™\n피부 회복을 돕는 설계","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T002

KO: 잠들기 전의 경험부터, 덧바를 수 없는 밤사이의 보습, 그리고 다음 날 아침의 피부 컨디션까지. 나잇나잇 크림은 이 흐름(시퀀스)전체를 ‘나이트 케어’로 생각했습니다.

JA: 眠りにつく前の体験から、塗り直せない夜の間の保湿、そして翌朝の肌のコンディションまで。NIGHT NIGHT CREAMは、この一連の流れ（シークエンス）全体を「ナイトケア」と考えました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(2):L229 || #sequence > .stage.m > p:nth-child(2):L249
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(2)","line":229,"end_line":229,"raw_html":"<p class=\"a p18\" style=\"left:120px;top:272px\">잠들기 전의 경험부터, 덧바를 수 없는 밤사이의 보습,<br>그리고 다음 날 아침의 피부 컨디션까지.<br><br>나잇나잇 크림은 이 흐름(시퀀스)전체를<br>‘나이트 케어’로 생각했습니다.</p>","text_with_breaks":"잠들기 전의 경험부터, 덧바를 수 없는 밤사이의 보습,\n그리고 다음 날 아침의 피부 컨디션까지.\n\n나잇나잇 크림은 이 흐름(시퀀스)전체를\n‘나이트 케어’로 생각했습니다.","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(2)","line":249,"end_line":249,"raw_html":"<p class=\"a wrap\" style=\"left:24px;top:178px;width:342px;font-size:15px;line-height:22px\">잠들기 전의 경험부터, 덧바를 수 없는 밤사이의 보습,<br>그리고 다음 날 아침의 피부 컨디션까지.<br><br>나잇나잇 크림은 이 흐름(시퀀스)전체를<br>‘나이트 케어’로 생각했습니다.</p>","text_with_breaks":"잠들기 전의 경험부터, 덧바를 수 없는 밤사이의 보습,\n그리고 다음 날 아침의 피부 컨디션까지.\n\n나잇나잇 크림은 이 흐름(시퀀스)전체를\n‘나이트 케어’로 생각했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T003

KO: PM 11:00

JA: PM 11:00

보존값: "PM 11:00"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(5):L232 || #sequence > .stage.m > p:nth-child(5):L252
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(5)","line":232,"end_line":232,"raw_html":"<p class=\"a xb trim\" style=\"left:891px;top:407px;font-size:24px;line-height:1.2;color:var(--ink)\">PM 11:00</p>","text_with_breaks":"PM 11:00","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(5)","line":252,"end_line":252,"raw_html":"<p class=\"a xb trim\" style=\"left:74px;top:329.5px;font-size:22.2px;line-height:1.2;color:var(--ink)\">PM 11:00</p>","text_with_breaks":"PM 11:00","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T004

KO: 잠드는 순간을 위해

JA: 眠りにつく、その瞬間のために

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(6):L233 || #sequence > .stage.m > p:nth-child(6):L253
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(6)","line":233,"end_line":233,"raw_html":"<p class=\"a b trim\" style=\"left:891px;top:444px;font-size:18px;line-height:1.2;color:var(--ink)\">잠드는 순간을 위해</p>","text_with_breaks":"잠드는 순간을 위해","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(6)","line":253,"end_line":253,"raw_html":"<p class=\"a b trim\" style=\"left:74px;top:363.8px;font-size:16.7px;line-height:1.2;color:var(--ink)\">잠드는 순간을 위해</p>","text_with_breaks":"잠드는 순간을 위해","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T005

KO: 제품을 바르고 잠자리에 드는 순간의 감촉과 향을 설계

JA: 製品を塗って床につく、その瞬間の感触と香りを設計

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(7):L234 || #sequence > .stage.m > p:nth-child(7):L254
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(7)","line":234,"end_line":234,"raw_html":"<p class=\"a trim\" style=\"left:891px;top:469px;font-size:18px;line-height:1.2;color:var(--ink)\">제품을 바르고 잠자리에 드는 순간의<br>감촉과 향을 설계</p>","text_with_breaks":"제품을 바르고 잠자리에 드는 순간의\n감촉과 향을 설계","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(7)","line":254,"end_line":254,"raw_html":"<p class=\"a trim\" style=\"left:74px;top:386.9px;font-size:16.7px;line-height:1.2;color:var(--ink)\">제품을 바르고 잠자리에 드는 순간의<br>감촉과 향을 설계</p>","text_with_breaks":"제품을 바르고 잠자리에 드는 순간의\n감촉과 향을 설계","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T006

KO: AM 03:00

JA: AM 03:00

보존값: "AM 03:00"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(10):L237 || #sequence > .stage.m > p:nth-child(10):L257
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(10)","line":237,"end_line":237,"raw_html":"<p class=\"a xb trim\" style=\"left:891px;top:558px;font-size:24px;line-height:1.2;color:var(--ink)\">AM 03:00</p>","text_with_breaks":"AM 03:00","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(10)","line":257,"end_line":257,"raw_html":"<p class=\"a xb trim\" style=\"left:74px;top:466.3px;font-size:22.2px;line-height:1.2;color:var(--ink)\">AM 03:00</p>","text_with_breaks":"AM 03:00","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T007

KO: 덧바를 수 없는 잠든 사이

JA: 塗り直せない、眠っている間に

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(11):L238 || #sequence > .stage.m > p:nth-child(11):L258
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(11)","line":238,"end_line":238,"raw_html":"<p class=\"a b trim\" style=\"left:891px;top:595px;font-size:18px;line-height:1.2;color:var(--ink)\">덧바를 수 없는 잠든 사이</p>","text_with_breaks":"덧바를 수 없는 잠든 사이","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(11)","line":258,"end_line":258,"raw_html":"<p class=\"a b trim\" style=\"left:74px;top:500.6px;font-size:16.7px;line-height:1.2;color:var(--ink)\">덧바를 수 없는 잠든 사이</p>","text_with_breaks":"덧바를 수 없는 잠든 사이","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T008

KO: 다시 덧바를 수 없는 밤사이, 수분 공급과 유지에 집중한 설계

JA: 塗り直せない夜の間、水分の補給と保持に重点を置いた設計

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(12):L239 || #sequence > .stage.m > p:nth-child(12):L259
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(12)","line":239,"end_line":239,"raw_html":"<p class=\"a trim\" style=\"left:891px;top:620px;font-size:18px;line-height:1.2;color:var(--ink)\">다시 덧바를 수 없는 밤사이,<br>수분 공급과 유지에 집중한 설계</p>","text_with_breaks":"다시 덧바를 수 없는 밤사이,\n수분 공급과 유지에 집중한 설계","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(12)","line":259,"end_line":259,"raw_html":"<p class=\"a trim\" style=\"left:74px;top:523.8px;font-size:16.7px;line-height:1.2;color:var(--ink)\">다시 덧바를 수 없는 밤사이,<br>수분 공급과 유지에 집중한 설계</p>","text_with_breaks":"다시 덧바를 수 없는 밤사이,\n수분 공급과 유지에 집중한 설계","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T009

KO: AM 07:00

JA: AM 07:00

보존값: "AM 07:00"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(15):L242 || #sequence > .stage.m > p:nth-child(15):L262
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(15)","line":242,"end_line":242,"raw_html":"<p class=\"a xb trim\" style=\"left:891px;top:709px;font-size:24px;line-height:1.2;color:var(--ink)\">AM 07:00</p>","text_with_breaks":"AM 07:00","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(15)","line":262,"end_line":262,"raw_html":"<p class=\"a xb trim\" style=\"left:74px;top:603.1px;font-size:22.2px;line-height:1.2;color:var(--ink)\">AM 07:00</p>","text_with_breaks":"AM 07:00","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T010

KO: 아침촉촉 기상

JA: しっとりした肌で迎える朝

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(16):L243 || #sequence > .stage.m > p:nth-child(16):L263
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(16)","line":243,"end_line":243,"raw_html":"<p class=\"a b trim\" style=\"left:891px;top:746px;font-size:18px;line-height:1.2;color:var(--ink)\">아침촉촉 기상</p>","text_with_breaks":"아침촉촉 기상","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(16)","line":263,"end_line":263,"raw_html":"<p class=\"a b trim\" style=\"left:74px;top:637.4px;font-size:16.7px;line-height:1.2;color:var(--ink)\">아침촉촉 기상</p>","text_with_breaks":"아침촉촉 기상","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T011

KO: 촉촉하게 정돈된 아침의 피부결까지 고려한 설계

JA: しっとりと整った朝のキメまで考慮した設計

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(17):L244 || #sequence > .stage.m > p:nth-child(17):L264
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(17)","line":244,"end_line":244,"raw_html":"<p class=\"a trim\" style=\"left:891px;top:771px;font-size:18px;line-height:1.2;color:var(--ink)\">촉촉하게 정돈된<br>아침의 피부결까지 고려한 설계</p>","text_with_breaks":"촉촉하게 정돈된\n아침의 피부결까지 고려한 설계","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(17)","line":264,"end_line":264,"raw_html":"<p class=\"a trim\" style=\"left:74px;top:660.6px;font-size:16.7px;line-height:1.2;color:var(--ink)\">촉촉하게 정돈된<br>아침의 피부결까지 고려한 설계</p>","text_with_breaks":"촉촉하게 정돈된\n아침의 피부결까지 고려한 설계","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S04_T012

KO: ※ 11 PM · 3 AM · 7 AM은 밤의 사용 흐름을 표현한 상징적인 시간이며, 성분의 작용 시점을 의미하지 않습니다.

JA: ※ 11 PM · 3 AM · 7 AMは、夜の使用の流れを表す象徴的な時刻であり、成分が作用する時刻を意味するものではありません。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S04_T012`
원문 위치: #sequence > .stage.d > p:nth-child(18):L245 || #sequence > .stage.m > p:nth-child(18):L265
서식 연결: [{"view":"PC","selector":"#sequence > .stage.d > p:nth-child(18)","line":245,"end_line":245,"raw_html":"<p class=\"a lt wrap\" style=\"left:837px;top:839px;width:369px;font-size:16px;line-height:23px\">※ 11 PM · 3 AM · 7 AM은 밤의 사용 흐름을 표현한<br>상징적인 시간이며, 성분의 작용 시점을 의미하지 않습니다.</p>","text_with_breaks":"※ 11 PM · 3 AM · 7 AM은 밤의 사용 흐름을 표현한\n상징적인 시간이며, 성분의 작용 시점을 의미하지 않습니다.","links":[]},{"view":"MOBILE","selector":"#sequence > .stage.m > p:nth-child(18)","line":265,"end_line":265,"raw_html":"<p class=\"a lt wrap\" style=\"left:24px;top:724.5px;width:342px;font-size:12px;line-height:17px\">※ 11 PM · 3 AM · 7 AM은 밤의 사용 흐름을 표현한<br>상징적인 시간이며, 성분의 작용 시점을 의미하지 않습니다.</p>","text_with_breaks":"※ 11 PM · 3 AM · 7 AM은 밤의 사용 흐름을 표현한\n상징적인 시간이며, 성분의 작용 시점을 의미하지 않습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S05_T001

KO: 01. Texture

JA: <span class="mono">01. </span>テクスチャー

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > p:nth-child(1):L272 || #texture > .stage.m > p:nth-child(1):L288
서식 연결: [{"view":"PC","selector":"#texture > .stage.d > p:nth-child(1)","line":272,"end_line":272,"raw_html":"<p class=\"a\" style=\"left:72px;top:145px;font-size:18px;line-height:normal\"><span class=\"mono\">01. </span>Texture</p>","text_with_breaks":"01. Texture","links":[]},{"view":"MOBILE","selector":"#texture > .stage.m > p:nth-child(1)","line":288,"end_line":288,"raw_html":"<p class=\"a\" style=\"left:24px;top:86px;font-size:14px;line-height:normal\"><span class=\"mono\">01. </span>Texture</p>","text_with_breaks":"01. Texture","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S05_T002

KO: “ LIGHT GEL-CREAM “

JA: “ LIGHT GEL-CREAM “

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > p:nth-child(2):L273 || #texture > .stage.m > p:nth-child(2):L289
서식 연결: [{"view":"PC","selector":"#texture > .stage.d > p:nth-child(2)","line":273,"end_line":273,"raw_html":"<p class=\"a b\" style=\"left:472px;top:140px;font-size:24px;line-height:normal\">“ LIGHT GEL-CREAM “</p>","text_with_breaks":"“ LIGHT GEL-CREAM “","links":[]},{"view":"MOBILE","selector":"#texture > .stage.m > p:nth-child(2)","line":289,"end_line":289,"raw_html":"<p class=\"a b\" style=\"right:24px;top:84px;font-size:16px;line-height:normal\">“ LIGHT GEL-CREAM “</p>","text_with_breaks":"“ LIGHT GEL-CREAM “","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S05_T003

KO: 무거움은 덜고, 촉촉함은 남기도록.

JA: 重さを抑え、うるおいを残すために。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > p:nth-child(4):L275 || #texture > .stage.m > p:nth-child(4):L291
서식 연결: [{"view":"PC","selector":"#texture > .stage.d > p:nth-child(4)","line":275,"end_line":275,"raw_html":"<p class=\"a h24\" style=\"left:783px;top:217px\">무거움은 덜고, 촉촉함은 남기도록.</p>","text_with_breaks":"무거움은 덜고, 촉촉함은 남기도록.","links":[]},{"view":"MOBILE","selector":"#texture > .stage.m > p:nth-child(4)","line":291,"end_line":291,"raw_html":"<p class=\"a xb tr\" style=\"left:24px;top:340px;font-size:20px;line-height:29px\">무거움은 덜고, 촉촉함은 남기도록.</p>","text_with_breaks":"무거움은 덜고, 촉촉함은 남기도록.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S05_T004

KO: 나이트크림은 흔히 무겁고 리치한 제형을 떠올리기 쉽습니다. 하지만 촉촉함이 반드시 무거운 제형에서 오는 것은 아닙니다. 나잇나잇 크림은 수분감 있는 젤-크림 제형으로 부드럽게 펴 발리고, 번들거림을 줄인 산뜻한 마무리감을 지향합니다.

JA: ナイトクリームと聞くと、重めでリッチなテクスチャーを思い浮かべがちです。しかし、うるおいは必ずしも重いテクスチャーから生まれるものではありません。NIGHT NIGHT CREAMは、みずみずしいジェルクリームがなめらかにのび、テカリを抑えた軽やかな仕上がりを目指しています。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > p:nth-child(5):L276 || #texture > .stage.m > p:nth-child(5):L292
서식 연결: [{"view":"PC","selector":"#texture > .stage.d > p:nth-child(5)","line":276,"end_line":276,"raw_html":"<p class=\"a p18 wrap\" style=\"left:783px;top:276px;width:432px\">나이트크림은 흔히 무겁고 리치한 제형을 떠올리기 쉽습니다. 하지만 촉촉함이 반드시 무거운 제형에서 오는 것은 아닙니다.<br><br>나잇나잇 크림은 수분감 있는 젤-크림 제형으로 부드럽게<br>펴 발리고, 번들거림을 줄인 산뜻한 마무리감을 지향합니다.</p>","text_with_breaks":"나이트크림은 흔히 무겁고 리치한 제형을 떠올리기 쉽습니다. 하지만 촉촉함이 반드시 무거운 제형에서 오는 것은 아닙니다.\n\n나잇나잇 크림은 수분감 있는 젤-크림 제형으로 부드럽게\n펴 발리고, 번들거림을 줄인 산뜻한 마무리감을 지향합니다.","links":[]},{"view":"MOBILE","selector":"#texture > .stage.m > p:nth-child(5)","line":292,"end_line":292,"raw_html":"<p class=\"a wrap\" style=\"left:24px;top:381px;width:342px;font-size:15px;line-height:22px\">나이트크림은 흔히 무겁고 리치한 제형을 떠올리기 쉽습니다. 하지만 촉촉함이 반드시 무거운 제형에서 오는 것은 아닙니다.<br><br>나잇나잇 크림은 수분감 있는 젤-크림 제형으로 부드럽게 펴 발리고, 번들거림을 줄인 산뜻한 마무리감을 지향합니다.</p>","text_with_breaks":"나이트크림은 흔히 무겁고 리치한 제형을 떠올리기 쉽습니다. 하지만 촉촉함이 반드시 무거운 제형에서 오는 것은 아닙니다.\n\n나잇나잇 크림은 수분감 있는 젤-크림 제형으로 부드럽게 펴 발리고, 번들거림을 줄인 산뜻한 마무리감을 지향합니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S05_T005

KO: 발림성

JA: のびの良さ

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > p:nth-child(6):L277 || #texture > .stage.m > p:nth-child(6):L293
서식 연결: [{"view":"PC","selector":"#texture > .stage.d > p:nth-child(6)","line":277,"end_line":277,"raw_html":"<p class=\"a\" style=\"left:783px;top:497px;font-size:18px;line-height:24px\">발림성</p>","text_with_breaks":"발림성","links":[]},{"view":"MOBILE","selector":"#texture > .stage.m > p:nth-child(6)","line":293,"end_line":293,"raw_html":"<p class=\"a\" style=\"left:24px;top:533px;font-size:18px;line-height:24px\">발림성</p>","text_with_breaks":"발림성","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S05_T006

KO: 끈적임

JA: べたつき

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > p:nth-child(8):L279 || #texture > .stage.m > p:nth-child(8):L295
서식 연결: [{"view":"PC","selector":"#texture > .stage.d > p:nth-child(8)","line":279,"end_line":279,"raw_html":"<p class=\"a\" style=\"left:783px;top:545px;font-size:18px;line-height:24px\">끈적임</p>","text_with_breaks":"끈적임","links":[]},{"view":"MOBILE","selector":"#texture > .stage.m > p:nth-child(8)","line":295,"end_line":295,"raw_html":"<p class=\"a\" style=\"left:24px;top:567px;font-size:18px;line-height:24px\">끈적임</p>","text_with_breaks":"끈적임","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S05_T007

KO: youm****

JA: youm****

보존값: "youm****"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > div:nth-child(10) > p:nth-child(1):L282 || #texture > .stage.m > div:nth-child(10) > p:nth-child(1):L298
서식 연결: [{"view":"PC","selector":"#texture > .stage.d > div:nth-child(10) > p:nth-child(1)","line":282,"end_line":282,"raw_html":"<p style=\"font-size:18px;line-height:28px;color:rgba(42,42,41,.4)\">youm****</p>","text_with_breaks":"youm****","links":[]},{"view":"MOBILE","selector":"#texture > .stage.m > div:nth-child(10) > p:nth-child(1)","line":298,"end_line":298,"raw_html":"<p style=\"font-size:14.25px;line-height:22.2px;color:rgba(42,42,41,.4)\">youm****</p>","text_with_breaks":"youm****","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S05_T008

KO: 밤에 바르고 잠들어도 오전까지 촉촉한 느낌이에요. 야외 활동이 잦은데, 덕분에 피부가 당기지 않게 되어서 너무 좋아요!

JA: 夜に塗って眠っても、午前中までしっとりしている感じです。屋外で過ごすことが多いのですが、おかげで肌がつっぱらなくなり、とてもうれしいです！

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > div:nth-child(10) > p:nth-child(2):L283 || #texture > .stage.m > div:nth-child(10) > p:nth-child(2):L299
서식 연결: [{"view":"PC","selector":"#texture > .stage.d > div:nth-child(10) > p:nth-child(2)","line":283,"end_line":283,"raw_html":"<p style=\"margin-top:10px;font-size:18px;line-height:28px\">밤에 바르고 잠들어도 오전까지 촉촉한 느낌이에요.<br>야외 활동이 잦은데, 덕분에 피부가 당기지 않게<br>되어서 너무 좋아요!</p>","text_with_breaks":"밤에 바르고 잠들어도 오전까지 촉촉한 느낌이에요.\n야외 활동이 잦은데, 덕분에 피부가 당기지 않게\n되어서 너무 좋아요!","links":[]},{"view":"MOBILE","selector":"#texture > .stage.m > div:nth-child(10) > p:nth-child(2)","line":299,"end_line":299,"raw_html":"<p style=\"margin-top:7.9px;font-size:14.25px;line-height:22.2px\">밤에 바르고 잠들어도 오전까지 촉촉한 느낌이에요.<br>야외 활동이 잦은데, 덕분에 피부가 당기지 않게<br>되어서 너무 좋아요!</p>","text_with_breaks":"밤에 바르고 잠들어도 오전까지 촉촉한 느낌이에요.\n야외 활동이 잦은데, 덕분에 피부가 당기지 않게\n되어서 너무 좋아요!","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. 후기 인용·별점 ALT_texture 관련; 공개 권리 재판정 안 함.

### S06_T001

KO: 02. Scent

JA: <span class="mono">02. </span>香り

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(1):L308 || #scent > .stage.m > p:nth-child(1):L324
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(1)","line":308,"end_line":308,"raw_html":"<p class=\"a\" style=\"left:72px;top:145px;font-size:18px;line-height:normal\"><span class=\"mono\">02. </span>Scent</p>","text_with_breaks":"02. Scent","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(1)","line":324,"end_line":324,"raw_html":"<p class=\"a\" style=\"left:24px;top:86px;font-size:14px;line-height:normal\"><span class=\"mono\">02. </span>Scent</p>","text_with_breaks":"02. Scent","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T002

KO: “ Sleep in the forest “

JA: “ Sleep in the forest “

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(2):L309 || #scent > .stage.m > p:nth-child(2):L325
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(2)","line":309,"end_line":309,"raw_html":"<p class=\"a b\" style=\"right:717px;top:140px;font-size:24px;line-height:normal\">“ Sleep in the forest “</p>","text_with_breaks":"“ Sleep in the forest “","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(2)","line":325,"end_line":325,"raw_html":"<p class=\"a b\" style=\"right:24px;top:84px;font-size:16px;line-height:normal\">“ Sleep in the forest “</p>","text_with_breaks":"“ Sleep in the forest “","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T003

KO: 잠들기 전 편안함까지 고려한 '좋은 향'

JA: 眠りにつく前の心地よさまで考えた「良い香り」

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(4):L311 || #scent > .stage.m > p:nth-child(4):L327
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(4)","line":311,"end_line":311,"raw_html":"<p class=\"a h24\" style=\"left:783px;top:205px\">잠들기 전 편안함까지 고려한 '좋은 향'</p>","text_with_breaks":"잠들기 전 편안함까지 고려한 '좋은 향'","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(4)","line":327,"end_line":327,"raw_html":"<p class=\"a xb tr wrap\" style=\"left:24px;top:340px;width:342px;font-size:20px;line-height:29px\">잠들기 전 편안함까지 고려한 '좋은 향'</p>","text_with_breaks":"잠들기 전 편안함까지 고려한 '좋은 향'","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T004

KO: 슬립 인 더포레스트 비 갠 숲속을 걷는 듯 촉촉하면서도 포근한 향. 라벤더 줄기를 손끝에 문지른 듯한 싱그러운 허브와 비에 젖은 흙내음, 이끼 낀 나무껍질의 분위기를 담았습니다.

JA: <span class="b">スリープ イン ザ フォレスト</span><br>雨上がりの森を歩くような、みずみずしく包み込むような香り。ラベンダーの茎を指先でこすったような爽やかなハーブ、雨に濡れた土の香り、苔むした樹皮の雰囲気を表現しました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(5):L312 || #scent > .stage.m > p:nth-child(5):L328
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(5)","line":312,"end_line":312,"raw_html":"<p class=\"a p18 wrap\" style=\"left:783px;top:264px;width:432px\"><span class=\"b\">슬립 인 더포레스트</span><br>비 갠 숲속을 걷는 듯 촉촉하면서도 포근한 향.<br>라벤더 줄기를 손끝에 문지른 듯한 싱그러운 허브와 비에 젖은 흙내음, 이끼 낀 나무껍질의 분위기를 담았습니다.</p>","text_with_breaks":"슬립 인 더포레스트\n비 갠 숲속을 걷는 듯 촉촉하면서도 포근한 향.\n라벤더 줄기를 손끝에 문지른 듯한 싱그러운 허브와 비에 젖은 흙내음, 이끼 낀 나무껍질의 분위기를 담았습니다.","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(5)","line":328,"end_line":328,"raw_html":"<p class=\"a wrap\" style=\"left:24px;top:379px;width:342px;font-size:15px;line-height:22px\"><span class=\"b\">슬립 인 더포레스트</span><br>비 갠 숲속을 걷는 듯 촉촉하면서도 포근한 향.<br>라벤더 줄기를 손끝에 문지른 듯한 싱그러운 허브와 비에 젖은 흙내음, 이끼 낀 나무껍질의 분위기를 담았습니다.</p>","text_with_breaks":"슬립 인 더포레스트\n비 갠 숲속을 걷는 듯 촉촉하면서도 포근한 향.\n라벤더 줄기를 손끝에 문지른 듯한 싱그러운 허브와 비에 젖은 흙내음, 이끼 낀 나무껍질의 분위기를 담았습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T005

KO: 조향 설계

JA: 調香設計

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(6):L313 || #scent > .stage.m > p:nth-child(6):L329
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(6)","line":313,"end_line":313,"raw_html":"<p class=\"a sb\" style=\"left:783px;top:464px;font-size:20px;line-height:28px\">조향 설계</p>","text_with_breaks":"조향 설계","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(6)","line":329,"end_line":329,"raw_html":"<p class=\"a sb\" style=\"left:24px;top:485px;font-size:17px;line-height:24px\">조향 설계</p>","text_with_breaks":"조향 설계","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T006

KO: 상쾌하고 시원하게 시작합니다

JA: 爽やかで清涼感のある香りから始まります

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(8):L315 || #scent > .stage.m > p:nth-child(8):L331
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(8)","line":315,"end_line":315,"raw_html":"<p class=\"a b\" style=\"left:783px;top:537px;font-size:18px;line-height:28px\">상쾌하고 시원하게 시작합니다</p>","text_with_breaks":"상쾌하고 시원하게 시작합니다","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(8)","line":331,"end_line":331,"raw_html":"<p class=\"a b\" style=\"left:24px;top:528px;font-size:15px;line-height:23px\">상쾌하고 시원하게 시작합니다</p>","text_with_breaks":"상쾌하고 시원하게 시작합니다","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T007

KO: TOP | 라반딘 ∙ 베르가못 ∙ 오렌지 ∙ 자몽 ∙ 클라리 세이지

JA: <span class="b">TOP</span> | ラバンジン ∙ ベルガモット ∙ オレンジ ∙ グレープフルーツ ∙ クラリセージ

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(9):L316 || #scent > .stage.m > p:nth-child(9):L332
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(9)","line":316,"end_line":316,"raw_html":"<p class=\"a\" style=\"left:783px;top:569px;font-size:18px;line-height:28px\"><span class=\"b\">TOP</span> | 라반딘 ∙ 베르가못 ∙ 오렌지 ∙ 자몽 ∙ 클라리 세이지</p>","text_with_breaks":"TOP | 라반딘 ∙ 베르가못 ∙ 오렌지 ∙ 자몽 ∙ 클라리 세이지","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(9)","line":332,"end_line":332,"raw_html":"<p class=\"a\" style=\"left:24px;top:553px;font-size:13px;line-height:20px\"><span class=\"b\">TOP</span> | 라반딘 ∙ 베르가못 ∙ 오렌지 ∙ 자몽 ∙ 클라리 세이지</p>","text_with_breaks":"TOP | 라반딘 ∙ 베르가못 ∙ 오렌지 ∙ 자몽 ∙ 클라리 세이지","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T008

KO: 은은하고 부드럽게 이어집니다

JA: ほのかで柔らかな香りへと続きます

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(10):L317 || #scent > .stage.m > p:nth-child(10):L333
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(10)","line":317,"end_line":317,"raw_html":"<p class=\"a b\" style=\"left:783px;top:621px;font-size:18px;line-height:28px\">은은하고 부드럽게 이어집니다</p>","text_with_breaks":"은은하고 부드럽게 이어집니다","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(10)","line":333,"end_line":333,"raw_html":"<p class=\"a b\" style=\"left:24px;top:583px;font-size:15px;line-height:23px\">은은하고 부드럽게 이어집니다</p>","text_with_breaks":"은은하고 부드럽게 이어집니다","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T009

KO: MIDDLE | 자스민 ∙ 라벤더 ∙ 로즈마리 ∙ 네롤리 ∙ 핑크 페퍼

JA: <span class="b">MIDDLE</span> | ジャスミン ∙ ラベンダー ∙ ローズマリー ∙ ネロリ ∙ ピンクペッパー

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(11):L318 || #scent > .stage.m > p:nth-child(11):L334
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(11)","line":318,"end_line":318,"raw_html":"<p class=\"a\" style=\"left:783px;top:653px;font-size:18px;line-height:28px\"><span class=\"b\">MIDDLE</span> | 자스민 ∙ 라벤더 ∙ 로즈마리 ∙ 네롤리 ∙ 핑크 페퍼</p>","text_with_breaks":"MIDDLE | 자스민 ∙ 라벤더 ∙ 로즈마리 ∙ 네롤리 ∙ 핑크 페퍼","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(11)","line":334,"end_line":334,"raw_html":"<p class=\"a\" style=\"left:24px;top:608px;font-size:13px;line-height:20px\"><span class=\"b\">MIDDLE</span> | 자스민 ∙ 라벤더 ∙ 로즈마리 ∙ 네롤리 ∙ 핑크 페퍼</p>","text_with_breaks":"MIDDLE | 자스민 ∙ 라벤더 ∙ 로즈마리 ∙ 네롤리 ∙ 핑크 페퍼","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T010

KO: 깊고 차분하게 남습니다

JA: 深く落ち着いた香りが残ります

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(12):L319 || #scent > .stage.m > p:nth-child(12):L335
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(12)","line":319,"end_line":319,"raw_html":"<p class=\"a b\" style=\"left:783px;top:705px;font-size:18px;line-height:28px\">깊고 차분하게 남습니다</p>","text_with_breaks":"깊고 차분하게 남습니다","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(12)","line":335,"end_line":335,"raw_html":"<p class=\"a b\" style=\"left:24px;top:638px;font-size:15px;line-height:23px\">깊고 차분하게 남습니다</p>","text_with_breaks":"깊고 차분하게 남습니다","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T011

KO: BASE | 머스크 ∙ 엠버 ∙ 시더우드 ∙ 베티버 ∙ 패출리 ∙ 톤카

JA: <span class="b">BASE</span> | ムスク ∙ アンバー ∙ シダーウッド ∙ ベチバー ∙ パチュリ ∙ トンカ

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(13):L320 || #scent > .stage.m > p:nth-child(13):L336
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(13)","line":320,"end_line":320,"raw_html":"<p class=\"a\" style=\"left:783px;top:737px;font-size:18px;line-height:28px\"><span class=\"b\">BASE</span> | 머스크 ∙ 엠버 ∙ 시더우드 ∙ 베티버 ∙ 패출리 ∙ 톤카</p>","text_with_breaks":"BASE | 머스크 ∙ 엠버 ∙ 시더우드 ∙ 베티버 ∙ 패출리 ∙ 톤카","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(13)","line":336,"end_line":336,"raw_html":"<p class=\"a\" style=\"left:24px;top:663px;font-size:13px;line-height:20px\"><span class=\"b\">BASE</span> | 머스크 ∙ 엠버 ∙ 시더우드 ∙ 베티버 ∙ 패출리 ∙ 톤카</p>","text_with_breaks":"BASE | 머스크 ∙ 엠버 ∙ 시더우드 ∙ 베티버 ∙ 패출리 ∙ 톤카","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S06_T012

KO: 나잇나잇 크림의 '슬립 인 더포레스트향'은 잠들기 전의 감각을 고려해 개발한, 바이도즈 독점 공급 향료로 완성했습니다.

JA: NIGHT NIGHT CREAMの「スリープ イン ザ フォレスト」の香りは、眠りにつく前の感覚を考慮して開発された、byDoseに独占供給される香料で仕上げました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > p:nth-child(14):L321 || #scent > .stage.m > p:nth-child(14):L337
서식 연결: [{"view":"PC","selector":"#scent > .stage.d > p:nth-child(14)","line":321,"end_line":321,"raw_html":"<p class=\"a wrap\" style=\"left:783px;top:820px;width:432px;font-size:16px;line-height:26px;color:rgba(42,42,41,.6)\">나잇나잇 크림의 '슬립 인 더포레스트향'은 잠들기 전의 감각을 고려해 개발한, 바이도즈 독점 공급 향료로 완성했습니다.</p>","text_with_breaks":"나잇나잇 크림의 '슬립 인 더포레스트향'은 잠들기 전의 감각을 고려해 개발한, 바이도즈 독점 공급 향료로 완성했습니다.","links":[]},{"view":"MOBILE","selector":"#scent > .stage.m > p:nth-child(14)","line":337,"end_line":337,"raw_html":"<p class=\"a wrap\" style=\"left:24px;top:695px;width:342px;font-size:13px;line-height:21px;color:rgba(42,42,41,.6)\">나잇나잇 크림의 '슬립 인 더포레스트향'은 잠들기 전의 감각을 고려해 개발한, 바이도즈 독점 공급 향료로 완성했습니다.</p>","text_with_breaks":"나잇나잇 크림의 '슬립 인 더포레스트향'은 잠들기 전의 감각을 고려해 개발한, 바이도즈 독점 공급 향료로 완성했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T001

KO: 「Aroma Wellness」 좋은 향을 넘어, 잠들기 전의 편안함까지.

JA: 「Aroma Wellness」良い香りの、その先へ。眠りにつく前の心地よさまで。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > p:nth-child(1):L345 || #aroma > .stage.m > p:nth-child(2):L367
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > p:nth-child(1)","line":345,"end_line":345,"raw_html":"<p class=\"a h24\" style=\"left:60px;top:132px\">「Aroma Wellness」<br>좋은 향을 넘어, 잠들기 전의 편안함까지.</p>","text_with_breaks":"「Aroma Wellness」\n좋은 향을 넘어, 잠들기 전의 편안함까지.","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > p:nth-child(2)","line":367,"end_line":367,"raw_html":"<p class=\"a xb wrap\" style=\"left:24px;top:84px;width:342px;font-size:20px;line-height:28px\">「Aroma Wellness」<br>좋은 향을 넘어, 잠들기 전의 편안함까지.</p>","text_with_breaks":"「Aroma Wellness」\n좋은 향을 넘어, 잠들기 전의 편안함까지.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T002

KO: 차분한 마음은 '좋은 잠'을, 좋은 잠은 '좋은 피부'를 만든다는 믿음으로, 나잇나잇 크림은 좋은 향을 넘어, 잠들기 전 심리 상태를 고려한 향을 담았습니다. CPL Aromas의 「AromaWellness」는 향과 감정의 연결을 탐구하는 향 연구 플랫폼입니다. 향에 대한 사람의 행동과 생리적 반응, 주관적 인식을 다양한 평가 방법으로 살펴봅니다.

JA: 穏やかな心が「良い眠り」を、良い眠りが「健やかな肌」をつくるという考えのもと、NIGHT NIGHT CREAMには、良い香りにとどまらず、眠りにつく前の心理状態を考慮した香りを取り入れました。<br><br>CPL Aromasの「AromaWellness」は、香りと感情のつながりを探究する香りの研究プラットフォームです。香りに対する人の行動や生理的反応、主観的な認識を、さまざまな評価方法で調べています。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > p:nth-child(2):L346 || #aroma > .stage.m > p:nth-child(3):L368
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > p:nth-child(2)","line":346,"end_line":346,"raw_html":"<p class=\"a p18\" style=\"left:60px;top:226px\">차분한 마음은 '좋은 잠'을, 좋은 잠은 '좋은 피부'를 만든다는 믿음으로,<br>나잇나잇 크림은 좋은 향을 넘어, 잠들기 전 심리 상태를 고려한 향을 담았습니다.<br><br>CPL Aromas의 「AromaWellness」는 향과 감정의 연결을 탐구하는<br>향 연구 플랫폼입니다. 향에 대한 사람의 행동과 생리적 반응, 주관적 인식을<br>다양한 평가 방법으로 살펴봅니다.</p>","text_with_breaks":"차분한 마음은 '좋은 잠'을, 좋은 잠은 '좋은 피부'를 만든다는 믿음으로,\n나잇나잇 크림은 좋은 향을 넘어, 잠들기 전 심리 상태를 고려한 향을 담았습니다.\n\nCPL Aromas의 「AromaWellness」는 향과 감정의 연결을 탐구하는\n향 연구 플랫폼입니다. 향에 대한 사람의 행동과 생리적 반응, 주관적 인식을\n다양한 평가 방법으로 살펴봅니다.","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > p:nth-child(3)","line":368,"end_line":368,"raw_html":"<p class=\"a wrap\" style=\"left:24px;top:152px;width:342px;font-size:14px;line-height:20px\">차분한 마음은 '좋은 잠'을, 좋은 잠은 '좋은 피부'를 만든다는 믿음으로, 나잇나잇 크림은 좋은 향을 넘어, 잠들기 전 심리 상태를 고려한 향을 담았습니다.<br><br>CPL Aromas의 「AromaWellness」는 향과 감정의 연결을 탐구하는 향 연구 플랫폼입니다. 향에 대한 사람의 행동과 생리적 반응, 주관적 인식을 다양한 평가 방법으로 살펴봅니다.</p>","text_with_breaks":"차분한 마음은 '좋은 잠'을, 좋은 잠은 '좋은 피부'를 만든다는 믿음으로, 나잇나잇 크림은 좋은 향을 넘어, 잠들기 전 심리 상태를 고려한 향을 담았습니다.\n\nCPL Aromas의 「AromaWellness」는 향과 감정의 연결을 탐구하는 향 연구 플랫폼입니다. 향에 대한 사람의 행동과 생리적 반응, 주관적 인식을 다양한 평가 방법으로 살펴봅니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T003

KO: 01 행동 반응

JA: <span class="mono">01</span> 行動反応

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > p:nth-child(3):L347 || #aroma > .stage.m > p:nth-child(4):L369
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > p:nth-child(3)","line":347,"end_line":347,"raw_html":"<p class=\"a b p18 pre\" style=\"left:60px;top:418px;color:#000\"><span class=\"mono\">01</span> 행동 반응</p>","text_with_breaks":"01 행동 반응","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > p:nth-child(4)","line":369,"end_line":369,"raw_html":"<p class=\"a b pre\" style=\"left:24px;top:330px;font-size:15px;line-height:24px;color:#000\"><span class=\"mono\">01</span> 행동 반응</p>","text_with_breaks":"01 행동 반응","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T004

KO: 표정 변화 · 시선 추적

JA: 表情の変化 · 視線追跡

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > p:nth-child(4):L348 || #aroma > .stage.m > p:nth-child(5):L370
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > p:nth-child(4)","line":348,"end_line":348,"raw_html":"<p class=\"a p18\" style=\"left:187px;top:418px;color:#000\">표정 변화 · 시선 추적</p>","text_with_breaks":"표정 변화 · 시선 추적","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > p:nth-child(5)","line":370,"end_line":370,"raw_html":"<p class=\"a\" style=\"left:120px;top:330px;font-size:15px;line-height:24px;color:#000\">표정 변화 · 시선 추적</p>","text_with_breaks":"표정 변화 · 시선 추적","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T005

KO: 02 생리 반응

JA: <span class="mono">02</span> 生理反応

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > p:nth-child(5):L349 || #aroma > .stage.m > p:nth-child(6):L371
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > p:nth-child(5)","line":349,"end_line":349,"raw_html":"<p class=\"a b p18 pre\" style=\"left:60px;top:458px;color:#000\"><span class=\"mono\">02</span>  생리 반응</p>","text_with_breaks":"02  생리 반응","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > p:nth-child(6)","line":371,"end_line":371,"raw_html":"<p class=\"a b pre\" style=\"left:24px;top:360px;font-size:15px;line-height:24px;color:#000\"><span class=\"mono\">02</span>  생리 반응</p>","text_with_breaks":"02  생리 반응","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T006

KO: 심박 · 뇌파 · 피부 전도도(GSR)

JA: 心拍 · 脳波 · 皮膚コンダクタンス（GSR）

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > p:nth-child(6):L350 || #aroma > .stage.m > p:nth-child(7):L372
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > p:nth-child(6)","line":350,"end_line":350,"raw_html":"<p class=\"a p18\" style=\"left:187px;top:458px;color:#000\">심박 · 뇌파 · <mark>피부 전도도(GSR)</mark></p>","text_with_breaks":"심박 · 뇌파 · 피부 전도도(GSR)","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > p:nth-child(7)","line":372,"end_line":372,"raw_html":"<p class=\"a\" style=\"left:120px;top:360px;font-size:15px;line-height:24px;color:#000\">심박 · 뇌파 · <mark>피부 전도도(GSR)</mark></p>","text_with_breaks":"심박 · 뇌파 · 피부 전도도(GSR)","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T007

KO: 03 주관 반응

JA: <span class="mono">03</span> 主観的反応

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > p:nth-child(7):L351 || #aroma > .stage.m > p:nth-child(8):L373
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > p:nth-child(7)","line":351,"end_line":351,"raw_html":"<p class=\"a b p18 pre\" style=\"left:60px;top:498px;color:#000\"><span class=\"mono\">03</span>  주관 반응</p>","text_with_breaks":"03  주관 반응","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > p:nth-child(8)","line":373,"end_line":373,"raw_html":"<p class=\"a b pre\" style=\"left:24px;top:390px;font-size:15px;line-height:24px;color:#000\"><span class=\"mono\">03</span>  주관 반응</p>","text_with_breaks":"03  주관 반응","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T008

KO: 설문평가

JA: アンケート評価

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > p:nth-child(8):L352 || #aroma > .stage.m > p:nth-child(9):L374
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > p:nth-child(8)","line":352,"end_line":352,"raw_html":"<p class=\"a p18\" style=\"left:187px;top:498px;color:#000\"><mark>설문평가</mark></p>","text_with_breaks":"설문평가","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > p:nth-child(9)","line":374,"end_line":374,"raw_html":"<p class=\"a\" style=\"left:120px;top:390px;font-size:15px;line-height:24px;color:#000\"><mark>설문평가</mark></p>","text_with_breaks":"설문평가","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T009

KO: CPL Aromas - 「Aroma Wellness」

JA: CPL Aromas - 「Aroma Wellness」

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > div:nth-child(9) > p:nth-child(1):L354 || #aroma > .stage.m > div:nth-child(10) > p:nth-child(1):L376
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > div:nth-child(9) > p:nth-child(1)","line":354,"end_line":354,"raw_html":"<p class=\"a xb\" style=\"left:24px;top:24px;font-size:18px;line-height:18px\">CPL Aromas - 「Aroma Wellness」</p>","text_with_breaks":"CPL Aromas - 「Aroma Wellness」","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > div:nth-child(10) > p:nth-child(1)","line":376,"end_line":376,"raw_html":"<p class=\"a xb wrap\" style=\"left:16px;top:18px;width:200px;font-size:15px;line-height:20px\">CPL Aromas - 「Aroma Wellness」</p>","text_with_breaks":"CPL Aromas - 「Aroma Wellness」","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T010

KO: 이 향료 GW ONE RELAX SC는 AromaWellness Relaxation 향료를 포함하며, CPL Aromas의 기술 적합성 확인서를 받았습니다.

JA: この香料（GW ONE RELAX SC）にはAromaWellness Relaxation香料が含まれ、CPL Aromasによる<span class="b">技術適合性確認書</span>が発行されています。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > div:nth-child(9) > p:nth-child(2):L355 || #aroma > .stage.m > div:nth-child(10) > p:nth-child(2):L377
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > div:nth-child(9) > p:nth-child(2)","line":355,"end_line":355,"raw_html":"<p class=\"a p18\" style=\"left:24px;top:62px\">이 향료 GW ONE RELAX SC는 AromaWellness Relaxation<br>향료를 포함하며, CPL Aromas의 <span class=\"b\">기술 적합성 확인서</span>를 받았습니다.</p>","text_with_breaks":"이 향료 GW ONE RELAX SC는 AromaWellness Relaxation\n향료를 포함하며, CPL Aromas의 기술 적합성 확인서를 받았습니다.","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > div:nth-child(10) > p:nth-child(2)","line":377,"end_line":377,"raw_html":"<p class=\"a wrap\" style=\"left:16px;top:62px;width:206px;font-size:13px;line-height:19px\">이 향료 GW ONE RELAX SC는 AromaWellness Relaxation 향료를 포함하며, CPL Aromas의 <span class=\"b\">기술 적합성 확인서</span>를 받았습니다.</p>","text_with_breaks":"이 향료 GW ONE RELAX SC는 AromaWellness Relaxation 향료를 포함하며, CPL Aromas의 기술 적합성 확인서를 받았습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T011

KO: ※ Certificate of Technology Compliance · 15 December 2025 ※ 확인 범위는 Relaxation 향료의 포함 사실과 해당 평가 방식입니다. GW ONE RELAX SC 전체의 별도 시험이나 완제품의 이완·수면 효과를 입증하는 자료는 아닙니다.

JA: ※ Certificate of Technology Compliance · 15 December 2025<br>※ 確認の範囲は、Relaxation香料が含まれている事実と、その評価方法です。GW ONE RELAX SC全体を別途試験した結果を示すものではなく、最終製品のリラクゼーション・睡眠効果を立証する資料でもありません。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > div:nth-child(9) > p:nth-child(3):L356 || #aroma > .stage.m > div:nth-child(10) > p:nth-child(4):L379
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > div:nth-child(9) > p:nth-child(3)","line":356,"end_line":359,"raw_html":"<p class=\"a pre\" style=\"left:28px;top:126px;font-size:12px;line-height:19px;opacity:.6\">※ Certificate of Technology Compliance · 15 December 2025\n※ 확인 범위는 Relaxation 향료의 포함 사실과 해당 평가 방식입니다.\n     GW ONE RELAX SC 전체의 별도 시험이나 완제품의 이완·수면 효과를\n     입증하는 자료는 아닙니다.</p>","text_with_breaks":"※ Certificate of Technology Compliance · 15 December 2025\n※ 확인 범위는 Relaxation 향료의 포함 사실과 해당 평가 방식입니다.\n     GW ONE RELAX SC 전체의 별도 시험이나 완제품의 이완·수면 효과를\n     입증하는 자료는 아닙니다.","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > div:nth-child(10) > p:nth-child(4)","line":379,"end_line":379,"raw_html":"<p class=\"a wrap\" style=\"left:16px;top:180px;width:310px;font-size:10.5px;line-height:16px;opacity:.6\">※ Certificate of Technology Compliance · 15 December 2025<br>※ 확인 범위는 Relaxation 향료의 포함 사실과 해당 평가 방식입니다. GW ONE RELAX SC 전체의 별도 시험이나 완제품의 이완·수면 효과를 입증하는 자료는 아닙니다.</p>","text_with_breaks":"※ Certificate of Technology Compliance · 15 December 2025\n※ 확인 범위는 Relaxation 향료의 포함 사실과 해당 평가 방식입니다. GW ONE RELAX SC 전체의 별도 시험이나 완제품의 이완·수면 효과를 입증하는 자료는 아닙니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S07_T012

KO: GW ONE RELAX SC 관련 기술 적합성 확인서 완제품의 수면·이완 효과 인증서가 아닙니다.

JA: GW ONE RELAX SCに関する技術適合性確認書<br>最終製品の睡眠・リラクゼーション効果を認証するものではありません。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S07_T011;S07_T012`
원문 위치: #aroma > .stage.d > div:nth-child(9) > p:nth-child(4):L360 || #aroma > .stage.m > div:nth-child(10) > p:nth-child(5):L380
서식 연결: [{"view":"PC","selector":"#aroma > .stage.d > div:nth-child(9) > p:nth-child(4)","line":360,"end_line":360,"raw_html":"<p class=\"a\" style=\"left:28px;top:264px;font-size:12px;line-height:18px\">GW ONE RELAX SC 관련 기술 적합성 확인서<br>완제품의 수면·이완 효과 인증서가 아닙니다.</p>","text_with_breaks":"GW ONE RELAX SC 관련 기술 적합성 확인서\n완제품의 수면·이완 효과 인증서가 아닙니다.","links":[]},{"view":"MOBILE","selector":"#aroma > .stage.m > div:nth-child(10) > p:nth-child(5)","line":380,"end_line":380,"raw_html":"<p class=\"a wrap\" style=\"left:16px;top:270px;width:310px;font-size:10.5px;line-height:16px\">GW ONE RELAX SC 관련 기술 적합성 확인서<br>완제품의 수면·이완 효과 인증서가 아닙니다.</p>","text_with_breaks":"GW ONE RELAX SC 관련 기술 적합성 확인서\n완제품의 수면·이완 효과 인증서가 아닙니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T001

KO: 피부의 회복 환경을 생각한 성분 설계

JA: 肌の回復環境を考えた成分設計

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(1):L388 || #formula > .stage.m > p:nth-child(1):L411
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(1)","line":388,"end_line":388,"raw_html":"<p class=\"a h24\" style=\"left:60px;top:191px\">피부의 회복 환경을 생각한 성분 설계</p>","text_with_breaks":"피부의 회복 환경을 생각한 성분 설계","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > p:nth-child(1)","line":411,"end_line":411,"raw_html":"<p class=\"a xb\" style=\"left:24px;top:84px;font-size:20px;line-height:28px\">피부의 회복 환경을 생각한 성분 설계</p>","text_with_breaks":"피부의 회복 환경을 생각한 성분 설계","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T002

KO: 자는 동안 피부가 회복하는 데 중요한 수분을 채우고 지키는 성분을 조합했습니다. 여기에 아침 피부결과 컨디션까지 고려한 두 가지 발효 성분을 더했습니다.

JA: 睡眠中の肌の回復に大切な水分を補い、守る成分を組み合わせました。さらに、朝のキメや肌のコンディションまで考慮して、2種類の発酵成分を加えました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(2):L389 || #formula > .stage.m > p:nth-child(2):L412
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(2)","line":389,"end_line":389,"raw_html":"<p class=\"a p18\" style=\"left:60px;top:250px\">자는 동안 피부가 회복하는 데 중요한<br>수분을 채우고 지키는 성분을 조합했습니다.<br>여기에 아침 피부결과 컨디션까지 고려한<br>두 가지 발효 성분을 더했습니다.</p>","text_with_breaks":"자는 동안 피부가 회복하는 데 중요한\n수분을 채우고 지키는 성분을 조합했습니다.\n여기에 아침 피부결과 컨디션까지 고려한\n두 가지 발효 성분을 더했습니다.","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > p:nth-child(2)","line":412,"end_line":412,"raw_html":"<p class=\"a\" style=\"left:24px;top:124px;font-size:14px;line-height:20px\">자는 동안 피부가 회복하는 데 중요한<br>수분을 채우고 지키는 성분을 조합했습니다.<br>여기에 아침 피부결과 컨디션까지 고려한<br>두 가지 발효 성분을 더했습니다.</p>","text_with_breaks":"자는 동안 피부가 회복하는 데 중요한\n수분을 채우고 지키는 성분을 조합했습니다.\n여기에 아침 피부결과 컨디션까지 고려한\n두 가지 발효 성분을 더했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T003

KO: 01

JA: 01

보존값: "01"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S08_T004;S08_T018`
원문 위치: #formula > .stage.d > p:nth-child(5):L392
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(5)","line":392,"end_line":392,"raw_html":"<p class=\"a b tr\" style=\"left:90px;top:405px;font-size:24px;line-height:24px\"><span class=\"mono\">01</span></p>","text_with_breaks":"01","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S08_T004

KO: Hydration

JA: Hydration

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S08_T003;S08_T018`
원문 위치: #formula > .stage.d > p:nth-child(6):L393
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(6)","line":393,"end_line":393,"raw_html":"<p class=\"a b tr\" style=\"left:138px;top:405px;font-size:24px;line-height:24px\">Hydration</p>","text_with_breaks":"Hydration","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S08_T005

KO: 수분. 피부 회복의 시작점

JA: 水分。肌の回復の出発点

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(7):L394 || #formula > .stage.m > a:nth-child(4) > span:nth-child(2):L416
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(7)","line":394,"end_line":394,"raw_html":"<p class=\"a\" style=\"left:90px;top:453px;font-size:24px;line-height:24px\">수분. 피부 회복의 시작점</p>","text_with_breaks":"수분. 피부 회복의 시작점","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(4) > span:nth-child(2)","line":416,"end_line":416,"raw_html":"<span class=\"a\" style=\"left:16px;top:46px;font-size:15px;line-height:20px\">수분. 피부 회복의 시작점</span>","text_with_breaks":"수분. 피부 회복의 시작점","links":[{"selector":"#formula > .stage.m > a:nth-child(4)","href":"#hydration","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T006

KO: 히알루론산 5종

JA: 5種類のヒアルロン酸

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(8):L395 || #formula > .stage.m > a:nth-child(4) > span:nth-child(3) > span:nth-child(1):L417
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(8)","line":395,"end_line":395,"raw_html":"<p class=\"a pill chip c-blue\" style=\"right:746px;top:417px\">히알루론산 5종</p>","text_with_breaks":"히알루론산 5종","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(4) > span:nth-child(3) > span:nth-child(1)","line":417,"end_line":417,"raw_html":"<span class=\"pill chip c-blue\">히알루론산 5종</span>","text_with_breaks":"히알루론산 5종","links":[{"selector":"#formula > .stage.m > a:nth-child(4)","href":"#hydration","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T007

KO: AQUAXYL™ 자일리톨계 3종

JA: AQUAXYL™ キシリトール系3成分

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(9):L396 || #formula > .stage.m > a:nth-child(4) > span:nth-child(3) > span:nth-child(2):L417
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(9)","line":396,"end_line":396,"raw_html":"<p class=\"a pill chip c-blue\" style=\"right:746px;top:467px\">AQUAXYL™ 자일리톨계 3종</p>","text_with_breaks":"AQUAXYL™ 자일리톨계 3종","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(4) > span:nth-child(3) > span:nth-child(2)","line":417,"end_line":417,"raw_html":"<span class=\"pill chip c-blue\">AQUAXYL™ 자일리톨계 3종</span>","text_with_breaks":"AQUAXYL™ 자일리톨계 3종","links":[{"selector":"#formula > .stage.m > a:nth-child(4)","href":"#hydration","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T008

KO: 02

JA: 02

보존값: "02"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S08_T009;S08_T019`
원문 위치: #formula > .stage.d > p:nth-child(11):L398
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(11)","line":398,"end_line":398,"raw_html":"<p class=\"a b tr\" style=\"left:90px;top:576px;font-size:24px;line-height:24px\"><span class=\"mono\">02</span></p>","text_with_breaks":"02","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S08_T009

KO: Barrier

JA: Barrier

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S08_T008;S08_T019`
원문 위치: #formula > .stage.d > p:nth-child(12):L399
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(12)","line":399,"end_line":399,"raw_html":"<p class=\"a b tr\" style=\"left:138px;top:576px;font-size:24px;line-height:24px\">Barrier</p>","text_with_breaks":"Barrier","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S08_T010

KO: 채운 수분을 지키는 이중 보호 설계

JA: 補った水分を守る、二重の保護設計

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(13):L400 || #formula > .stage.m > a:nth-child(5) > span:nth-child(2):L421
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(13)","line":400,"end_line":400,"raw_html":"<p class=\"a\" style=\"left:90px;top:624px;font-size:24px;line-height:24px\">채운 수분을 지키는 이중 보호 설계</p>","text_with_breaks":"채운 수분을 지키는 이중 보호 설계","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(5) > span:nth-child(2)","line":421,"end_line":421,"raw_html":"<span class=\"a\" style=\"left:16px;top:46px;font-size:15px;line-height:20px\">채운 수분을 지키는 이중 보호 설계</span>","text_with_breaks":"채운 수분을 지키는 이중 보호 설계","links":[{"selector":"#formula > .stage.m > a:nth-child(5)","href":"#barrier","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T011

KO: 엑토인

JA: エクトイン

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(14):L401 || #formula > .stage.m > a:nth-child(5) > span:nth-child(3) > span:nth-child(1):L422
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(14)","line":401,"end_line":401,"raw_html":"<p class=\"a pill chip c-yellow\" style=\"right:746px;top:588px\">엑토인</p>","text_with_breaks":"엑토인","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(5) > span:nth-child(3) > span:nth-child(1)","line":422,"end_line":422,"raw_html":"<span class=\"pill chip c-yellow\">엑토인</span>","text_with_breaks":"엑토인","links":[{"selector":"#formula > .stage.m > a:nth-child(5)","href":"#barrier","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T012

KO: 세라마이드 5종

JA: 5種類のセラミド

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(15):L402 || #formula > .stage.m > a:nth-child(5) > span:nth-child(3) > span:nth-child(2):L422
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(15)","line":402,"end_line":402,"raw_html":"<p class=\"a pill chip c-yellow\" style=\"right:746px;top:638px\">세라마이드 5종</p>","text_with_breaks":"세라마이드 5종","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(5) > span:nth-child(3) > span:nth-child(2)","line":422,"end_line":422,"raw_html":"<span class=\"pill chip c-yellow\">세라마이드 5종</span>","text_with_breaks":"세라마이드 5종","links":[{"selector":"#formula > .stage.m > a:nth-child(5)","href":"#barrier","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T013

KO: 03

JA: 03

보존값: "03"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S08_T014;S08_T020`
원문 위치: #formula > .stage.d > p:nth-child(17):L404
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(17)","line":404,"end_line":404,"raw_html":"<p class=\"a b tr\" style=\"left:90px;top:747px;font-size:24px;line-height:24px\"><span class=\"mono\">03</span></p>","text_with_breaks":"03","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S08_T014

KO: Condition

JA: Condition

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S08_T013;S08_T020`
원문 위치: #formula > .stage.d > p:nth-child(18):L405
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(18)","line":405,"end_line":405,"raw_html":"<p class=\"a b tr\" style=\"left:138px;top:747px;font-size:24px;line-height:24px\">Condition</p>","text_with_breaks":"Condition","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S08_T015

KO: 아침 피부결까지 생각한 발효 케어

JA: 朝のキメまで考えた発酵ケア

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(19):L406 || #formula > .stage.m > a:nth-child(6) > span:nth-child(2):L426
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(19)","line":406,"end_line":406,"raw_html":"<p class=\"a\" style=\"left:90px;top:795px;font-size:24px;line-height:24px\">아침 피부결까지 생각한 발효 케어</p>","text_with_breaks":"아침 피부결까지 생각한 발효 케어","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(6) > span:nth-child(2)","line":426,"end_line":426,"raw_html":"<span class=\"a\" style=\"left:16px;top:46px;font-size:15px;line-height:20px\">아침 피부결까지 생각한 발효 케어</span>","text_with_breaks":"아침 피부결까지 생각한 발효 케어","links":[{"selector":"#formula > .stage.m > a:nth-child(6)","href":"#condition","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T016

KO: 비피다발효여과물

JA: ビフィズス菌培養液

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(20):L407 || #formula > .stage.m > a:nth-child(6) > span:nth-child(3) > span:nth-child(1):L427
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(20)","line":407,"end_line":407,"raw_html":"<p class=\"a pill chip c-green\" style=\"right:746px;top:759px\">비피다발효여과물</p>","text_with_breaks":"비피다발효여과물","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(6) > span:nth-child(3) > span:nth-child(1)","line":427,"end_line":427,"raw_html":"<span class=\"pill chip c-green\">비피다발효여과물</span>","text_with_breaks":"비피다발효여과물","links":[{"selector":"#formula > .stage.m > a:nth-child(6)","href":"#condition","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T017

KO: 갈락토미세스발효여과물

JA: ガラクトミセス培養液

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > p:nth-child(21):L408 || #formula > .stage.m > a:nth-child(6) > span:nth-child(3) > span:nth-child(2):L427
서식 연결: [{"view":"PC","selector":"#formula > .stage.d > p:nth-child(21)","line":408,"end_line":408,"raw_html":"<p class=\"a pill chip c-green\" style=\"right:746px;top:809px\">갈락토미세스발효여과물</p>","text_with_breaks":"갈락토미세스발효여과물","links":[]},{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(6) > span:nth-child(3) > span:nth-child(2)","line":427,"end_line":427,"raw_html":"<span class=\"pill chip c-green\">갈락토미세스발효여과물</span>","text_with_breaks":"갈락토미세스발효여과물","links":[{"selector":"#formula > .stage.m > a:nth-child(6)","href":"#condition","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S08_T018

KO: 01 Hydration

JA: 01 Hydration

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S08_T003;S08_T004`
원문 위치: #formula > .stage.m > a:nth-child(4) > span:nth-child(1):L415
서식 연결: [{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(4) > span:nth-child(1)","line":415,"end_line":415,"raw_html":"<span class=\"a b tr\" style=\"left:16px;top:18px;font-size:18px;line-height:22px\"><span class=\"mono\">01</span>&nbsp; Hydration</span>","text_with_breaks":"01  Hydration","links":[{"selector":"#formula > .stage.m > a:nth-child(4)","href":"#hydration","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S08_T019

KO: 02 Barrier

JA: 02 Barrier

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S08_T008;S08_T009`
원문 위치: #formula > .stage.m > a:nth-child(5) > span:nth-child(1):L420
서식 연결: [{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(5) > span:nth-child(1)","line":420,"end_line":420,"raw_html":"<span class=\"a b tr\" style=\"left:16px;top:18px;font-size:18px;line-height:22px\"><span class=\"mono\">02</span>&nbsp; Barrier</span>","text_with_breaks":"02  Barrier","links":[{"selector":"#formula > .stage.m > a:nth-child(5)","href":"#barrier","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S08_T020

KO: 03 Condition

JA: 03 Condition

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S08_T013;S08_T014`
원문 위치: #formula > .stage.m > a:nth-child(6) > span:nth-child(1):L425
서식 연결: [{"view":"MOBILE","selector":"#formula > .stage.m > a:nth-child(6) > span:nth-child(1)","line":425,"end_line":425,"raw_html":"<span class=\"a b tr\" style=\"left:16px;top:18px;font-size:18px;line-height:22px\"><span class=\"mono\">03</span>&nbsp; Condition</span>","text_with_breaks":"03  Condition","links":[{"selector":"#formula > .stage.m > a:nth-child(6)","href":"#condition","relation":"ancestor"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S09_T001

KO: 01

JA: 01

보존값: "01"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S09_T012;S09_T002;S09_T005`
원문 위치: #hydration > .stage.d > p:nth-child(1):L435
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(1)","line":435,"end_line":435,"raw_html":"<p class=\"a b tr mono\" style=\"left:60px;top:197px;font-size:24px;line-height:24px\">01</p>","text_with_breaks":"01","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S09_T002

KO: Hydration

JA: Hydration

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S09_T012;S09_T001;S09_T005`
원문 위치: #hydration > .stage.d > p:nth-child(2):L436
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(2)","line":436,"end_line":436,"raw_html":"<p class=\"a b tr\" style=\"left:108px;top:197px;font-size:24px;line-height:24px\">Hydration</p>","text_with_breaks":"Hydration","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S09_T003

KO: 수분. 피부 회복의 시작점

JA: 水分。肌の回復の出発点

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S09_T012`
원문 위치: #hydration > .stage.d > p:nth-child(3):L437 || #hydration > .stage.m > p:nth-child(2):L455
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(3)","line":437,"end_line":437,"raw_html":"<p class=\"a\" style=\"left:258px;top:197px;font-size:24px;line-height:24px\">수분. 피부 회복의 시작점</p>","text_with_breaks":"수분. 피부 회복의 시작점","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > p:nth-child(2)","line":455,"end_line":455,"raw_html":"<p class=\"a\" style=\"left:24px;top:114px;font-size:15px;line-height:20px\">수분. 피부 회복의 시작점</p>","text_with_breaks":"수분. 피부 회복의 시작점","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S09_T004

KO: 히알루론산 5종

JA: 5種類のヒアルロン酸

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S09_T012`
원문 위치: #hydration > .stage.d > p:nth-child(6):L440 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(1):L458
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(6)","line":440,"end_line":440,"raw_html":"<p class=\"a pill chip b\" style=\"left:84px;top:309px;line-height:18px;letter-spacing:.03em;background:var(--blue)\">히알루론산 5종</p>","text_with_breaks":"히알루론산 5종","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(1)","line":458,"end_line":458,"raw_html":"<p class=\"pill chip mchip b c-blue\">히알루론산 5종</p>","text_with_breaks":"히알루론산 5종","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S09_T005

KO: 01 Hydration

JA: 01 Hydration

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S09_T012;S09_T001;S09_T002`
원문 위치: #hydration > .stage.d > p:nth-child(7):L441 || #hydration > .stage.d > p:nth-child(12):L446 || #hydration > .stage.m > p:nth-child(1):L454
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(7)","line":441,"end_line":441,"raw_html":"<p class=\"a b tr\" style=\"right:952px;top:321px;font-size:18px;line-height:18px;color:var(--blue)\"><span class=\"mono\">01</span> Hydration</p>","text_with_breaks":"01 Hydration","links":[]},{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(12)","line":446,"end_line":446,"raw_html":"<p class=\"a b tr\" style=\"right:488px;top:321px;font-size:18px;line-height:18px;color:var(--blue)\"><span class=\"mono\">01</span> Hydration</p>","text_with_breaks":"01 Hydration","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > p:nth-child(1)","line":454,"end_line":454,"raw_html":"<p class=\"a b tr\" style=\"left:24px;top:84px;font-size:20px;line-height:24px\"><span class=\"mono\">01</span>&nbsp; Hydration</p>","text_with_breaks":"01  Hydration","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S09_T006

KO: 수분 공급과 보습막

JA: 水分補給とうるおいの膜

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S09_T012`
원문 위치: #hydration > .stage.d > p:nth-child(8):L442 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(2):L459
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(8)","line":442,"end_line":442,"raw_html":"<p class=\"a md tr\" style=\"left:84px;top:387px;font-size:24px;line-height:24px\">수분 공급과 보습막</p>","text_with_breaks":"수분 공급과 보습막","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(2)","line":459,"end_line":459,"raw_html":"<p class=\"mtitle md\">수분 공급과 보습막</p>","text_with_breaks":"수분 공급과 보습막","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S09_T007

KO: 물 분자를 끌어당기는 히알루론산은 대표적인 보습 성분입니다. 기본 형태부터 잘게 분해된 형태, 그물처럼 연결된 형태까지 서로 다른 구조의 히알루론산 5종을 조합했습니다. 각기 다른 특성의 히알루론산이 피부에 수분을 공급하고, 피부 표면에 촉촉한 보습막을 형성하도록 고려했습니다.

JA: 水分子を引き寄せるヒアルロン酸は、代表的な保湿成分です。基本的な形から細かく分解された形、網目状につながった形まで、構造の異なる5種類のヒアルロン酸を組み合わせました。それぞれ異なる特性を持つヒアルロン酸が肌に水分を補給し、肌表面にうるおいの膜を形成するよう考慮しました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S09_T012`
원문 위치: #hydration > .stage.d > p:nth-child(9):L443 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(3):L460
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(9)","line":443,"end_line":443,"raw_html":"<p class=\"a p16 wrap\" style=\"left:84px;top:435px;width:404px\">물 분자를 끌어당기는 히알루론산은 대표적인 보습 성분입니다.<br>기본 형태부터 잘게 분해된 형태, 그물처럼 연결된 형태까지<br>서로 다른 구조의 히알루론산 5종을 조합했습니다. 각기 다른 특성의 히알루론산이 피부에 수분을 공급하고, 피부 표면에<br>촉촉한 보습막을 형성하도록 고려했습니다.</p>","text_with_breaks":"물 분자를 끌어당기는 히알루론산은 대표적인 보습 성분입니다.\n기본 형태부터 잘게 분해된 형태, 그물처럼 연결된 형태까지\n서로 다른 구조의 히알루론산 5종을 조합했습니다. 각기 다른 특성의 히알루론산이 피부에 수분을 공급하고, 피부 표면에\n촉촉한 보습막을 형성하도록 고려했습니다.","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(3)","line":460,"end_line":460,"raw_html":"<p class=\"mbody\">물 분자를 끌어당기는 히알루론산은 대표적인 보습 성분입니다. 기본 형태부터 잘게 분해된 형태, 그물처럼 연결된 형태까지 서로 다른 구조의 히알루론산 5종을 조합했습니다. 각기 다른 특성의 히알루론산이 피부에 수분을 공급하고, 피부 표면에 촉촉한 보습막을 형성하도록 고려했습니다.</p>","text_with_breaks":"물 분자를 끌어당기는 히알루론산은 대표적인 보습 성분입니다. 기본 형태부터 잘게 분해된 형태, 그물처럼 연결된 형태까지 서로 다른 구조의 히알루론산 5종을 조합했습니다. 각기 다른 특성의 히알루론산이 피부에 수분을 공급하고, 피부 표면에 촉촉한 보습막을 형성하도록 고려했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S09_T008

KO: AQUAXYL™ 자일리톨계 3종

JA: AQUAXYL™ キシリトール系3成分

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S09_T012`
원문 위치: #hydration > .stage.d > p:nth-child(11):L445 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(1):L463
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(11)","line":445,"end_line":445,"raw_html":"<p class=\"a pill chip b\" style=\"left:548px;top:309px;line-height:18px;letter-spacing:.03em;background:var(--blue)\">AQUAXYL™ 자일리톨계 3종</p>","text_with_breaks":"AQUAXYL™ 자일리톨계 3종","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(1)","line":463,"end_line":463,"raw_html":"<p class=\"pill chip mchip b c-blue\">AQUAXYL™ 자일리톨계 3종</p>","text_with_breaks":"AQUAXYL™ 자일리톨계 3종","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S09_T009

KO: 수분 이동과 저장 환경

JA: 水分の移動と貯留の環境

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S09_T012`
원문 위치: #hydration > .stage.d > p:nth-child(13):L447 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(2):L464
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(13)","line":447,"end_line":447,"raw_html":"<p class=\"a md tr\" style=\"left:548px;top:387px;font-size:24px;line-height:24px\">수분 이동과 저장 환경</p>","text_with_breaks":"수분 이동과 저장 환경","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(2)","line":464,"end_line":464,"raw_html":"<p class=\"mtitle md\">수분 이동과 저장 환경</p>","text_with_breaks":"수분 이동과 저장 환경","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S09_T010

KO: 자일리톨·자일리틸글루코사이드·무수자일리톨로 구성된 보습 복합체 AQUAXYL™을 사용했습니다. AQUAXYL™은 표피 내 수분 이동과 수분 저장을 돕는 특성을 지닌 보습 원료입니다. 히알루론산이 물 분자를 끌어당겨 붙잡는다면, AQUAXYL™은 피부 안에서 수분이 오가고 유지되는 환경에 주목한 성분입니다.

JA: キシリトール・キシリチルグルコシド・無水キシリトールからなる保湿複合成分AQUAXYL™を使用しました。AQUAXYL™は、表皮内の水分の移動と貯留を助ける特性を持つ保湿原料です。ヒアルロン酸が水分子を引き寄せて保持するのに対し、AQUAXYL™は肌の中で水分が行き渡り、保たれる環境に着目した成分です。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S09_T012`
원문 위치: #hydration > .stage.d > p:nth-child(14):L448 || #hydration > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(3):L465
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(14)","line":448,"end_line":448,"raw_html":"<p class=\"a p16 wrap\" style=\"left:548px;top:435px;width:404px\">자일리톨·자일리틸글루코사이드·무수자일리톨로 구성된 보습 복합체 AQUAXYL™을 사용했습니다. AQUAXYL™은 표피 내 수분 이동과 수분 저장을 돕는 특성을 지닌 보습 원료입니다.<br>히알루론산이 물 분자를 끌어당겨 붙잡는다면, AQUAXYL™은 피부 안에서 수분이 오가고 유지되는 환경에 주목한 성분입니다.</p>","text_with_breaks":"자일리톨·자일리틸글루코사이드·무수자일리톨로 구성된 보습 복합체 AQUAXYL™을 사용했습니다. AQUAXYL™은 표피 내 수분 이동과 수분 저장을 돕는 특성을 지닌 보습 원료입니다.\n히알루론산이 물 분자를 끌어당겨 붙잡는다면, AQUAXYL™은 피부 안에서 수분이 오가고 유지되는 환경에 주목한 성분입니다.","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(3)","line":465,"end_line":465,"raw_html":"<p class=\"mbody\">자일리톨·자일리틸글루코사이드·무수자일리톨로 구성된 보습 복합체 AQUAXYL™을 사용했습니다. AQUAXYL™은 표피 내 수분 이동과 수분 저장을 돕는 특성을 지닌 보습 원료입니다. 히알루론산이 물 분자를 끌어당겨 붙잡는다면, AQUAXYL™은 피부 안에서 수분이 오가고 유지되는 환경에 주목한 성분입니다.</p>","text_with_breaks":"자일리톨·자일리틸글루코사이드·무수자일리톨로 구성된 보습 복합체 AQUAXYL™을 사용했습니다. AQUAXYL™은 표피 내 수분 이동과 수분 저장을 돕는 특성을 지닌 보습 원료입니다. 히알루론산이 물 분자를 끌어당겨 붙잡는다면, AQUAXYL™은 피부 안에서 수분이 오가고 유지되는 환경에 주목한 성분입니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S09_T011

KO: 나잇나잇 크림은 수분을 채우는 데서 그치지 않고, 수분이 고르게 오가고 머무는 환경까지 고려하기 위해 두 원료를 함께 배합했습니다.

JA: NIGHT NIGHT CREAMは、水分を補うだけでなく、水分が均等に行き渡り、とどまる環境まで考慮するために、この2つの原料を組み合わせて配合しました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S09_T012`
원문 위치: #hydration > .stage.d > p:nth-child(16):L450 || #hydration > .stage.m > div:nth-child(3) > p:nth-child(3):L467
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(16)","line":450,"end_line":450,"raw_html":"<p class=\"a p16\" style=\"left:72px;top:778px\">나잇나잇 크림은 수분을 채우는 데서 그치지 않고,<br>수분이 고르게 오가고 머무는 환경까지 고려하기 위해 두 원료를 함께 배합했습니다.</p>","text_with_breaks":"나잇나잇 크림은 수분을 채우는 데서 그치지 않고,\n수분이 고르게 오가고 머무는 환경까지 고려하기 위해 두 원료를 함께 배합했습니다.","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > div:nth-child(3) > p:nth-child(3)","line":467,"end_line":467,"raw_html":"<p class=\"mfoot\">나잇나잇 크림은 수분을 채우는 데서 그치지 않고, 수분이 고르게 오가고 머무는 환경까지 고려하기 위해 두 원료를 함께 배합했습니다.</p>","text_with_breaks":"나잇나잇 크림은 수분을 채우는 데서 그치지 않고, 수분이 고르게 오가고 머무는 환경까지 고려하기 위해 두 원료를 함께 배합했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S09_T012

KO: ※ AQUAXYL™의 특성은 원료사 자료 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.

JA: ※ AQUAXYL™の特性は原料メーカーの資料に基づくものであり、NIGHT NIGHT CREAMの最終製品の試験結果ではありません。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S09_T012`
원문 위치: #hydration > .stage.d > p:nth-child(17):L451 || #hydration > .stage.m > div:nth-child(3) > p:nth-child(4):L468
서식 연결: [{"view":"PC","selector":"#hydration > .stage.d > p:nth-child(17)","line":451,"end_line":451,"raw_html":"<p class=\"a red\" style=\"left:72px;top:861px;font-size:16px;line-height:26px\">※ AQUAXYL™의 특성은 원료사 자료 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.</p>","text_with_breaks":"※ AQUAXYL™의 특성은 원료사 자료 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.","links":[]},{"view":"MOBILE","selector":"#hydration > .stage.m > div:nth-child(3) > p:nth-child(4)","line":468,"end_line":468,"raw_html":"<p class=\"mnote red\">※ AQUAXYL™의 특성은 원료사 자료 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.</p>","text_with_breaks":"※ AQUAXYL™의 특성은 원료사 자료 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S10_T001

KO: 02

JA: 02

보존값: "02"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S10_T008;S10_T002;S10_T005`
원문 위치: #barrier > .stage.d > p:nth-child(1):L476
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(1)","line":476,"end_line":476,"raw_html":"<p class=\"a b tr mono\" style=\"left:60px;top:197px;font-size:24px;line-height:24px\">02</p>","text_with_breaks":"02","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S10_T002

KO: Barrier

JA: Barrier

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S10_T008;S10_T001;S10_T005`
원문 위치: #barrier > .stage.d > p:nth-child(2):L477
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(2)","line":477,"end_line":477,"raw_html":"<p class=\"a b tr\" style=\"left:108px;top:197px;font-size:24px;line-height:24px\">Barrier</p>","text_with_breaks":"Barrier","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S10_T003

KO: 채운 수분을 지키는 이중 보호 설계

JA: 補った水分を守る、二重の保護設計

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S10_T008`
원문 위치: #barrier > .stage.d > p:nth-child(3):L478 || #barrier > .stage.m > p:nth-child(2):L495
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(3)","line":478,"end_line":478,"raw_html":"<p class=\"a\" style=\"left:258px;top:197px;font-size:24px;line-height:24px\">채운 수분을 지키는 이중 보호 설계</p>","text_with_breaks":"채운 수분을 지키는 이중 보호 설계","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > p:nth-child(2)","line":495,"end_line":495,"raw_html":"<p class=\"a\" style=\"left:24px;top:114px;font-size:15px;line-height:20px\">채운 수분을 지키는 이중 보호 설계</p>","text_with_breaks":"채운 수분을 지키는 이중 보호 설계","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S10_T004

KO: 엑토인

JA: エクトイン

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S10_T008`
원문 위치: #barrier > .stage.d > p:nth-child(6):L481 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(1):L498
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(6)","line":481,"end_line":481,"raw_html":"<p class=\"a pill chip c-yellow\" style=\"left:84px;top:309px\">엑토인</p>","text_with_breaks":"엑토인","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(1)","line":498,"end_line":498,"raw_html":"<p class=\"pill chip mchip c-yellow\">엑토인</p>","text_with_breaks":"엑토인","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S10_T005

KO: 02 Barrier

JA: 02 Barrier

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S10_T008;S10_T001;S10_T002`
원문 위치: #barrier > .stage.d > p:nth-child(7):L482 || #barrier > .stage.d > p:nth-child(12):L487 || #barrier > .stage.m > p:nth-child(1):L494
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(7)","line":482,"end_line":482,"raw_html":"<p class=\"a b tr\" style=\"right:952px;top:321px;font-size:18px;line-height:18px;color:var(--yellow)\"><span class=\"mono\">02</span> Barrier</p>","text_with_breaks":"02 Barrier","links":[]},{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(12)","line":487,"end_line":487,"raw_html":"<p class=\"a b tr\" style=\"right:488px;top:321px;font-size:18px;line-height:18px;color:var(--yellow)\"><span class=\"mono\">02</span> Barrier</p>","text_with_breaks":"02 Barrier","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > p:nth-child(1)","line":494,"end_line":494,"raw_html":"<p class=\"a b tr\" style=\"left:24px;top:84px;font-size:20px;line-height:24px\"><span class=\"mono\">02</span>&nbsp; Barrier</p>","text_with_breaks":"02  Barrier","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S10_T006

KO: 극한 환경에서 찾은 피부 보호

JA: 極限環境に見いだした、肌を守る成分

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S10_T008`
원문 위치: #barrier > .stage.d > p:nth-child(8):L483 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(2):L499
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(8)","line":483,"end_line":483,"raw_html":"<p class=\"a md tr\" style=\"left:84px;top:387px;font-size:24px;line-height:24px\">극한 환경에서 찾은 피부 보호</p>","text_with_breaks":"극한 환경에서 찾은 피부 보호","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(2)","line":499,"end_line":499,"raw_html":"<p class=\"mtitle md\">극한 환경에서 찾은 피부 보호</p>","text_with_breaks":"극한 환경에서 찾은 피부 보호","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S10_T007

KO: 높은 염도와 건조함 등 극한 환경에 서식하는 일부 미생물이 스스로를 보호하기 위해 만들어내는 물질입니다. 엑토인은 주변의 물 분자와 상호작용해 단백질과 세포막 주변의 수분 환경을 안정화하는 특성을 지니고 있습니다. 피부의 수분 유지와 장벽 보호를 위한 성분으로 활용되며, 엑토인을 함유한 제형의 피부 적용 연구* 에서도 보습 및 수분 손실 개선 가능성이 보고되었습니다. 단순히 수분을 공급하는 것을 넘어, 건조함과 외부 환경 스트레스까지 고려한 보습 설계를 위해 엑토인을 선택했습니다.

JA: エクトインは、高い塩分濃度や乾燥などの極限環境に生息する一部の微生物が、自らを守るためにつくり出す物質です。周囲の水分子と相互作用し、タンパク質や細胞膜の周囲の水分環境を安定させる特性を持っています。肌の水分保持やバリア保護のための成分として活用されており、<span class="red">エクトインを含む製剤の皮膚適用研究*</span>でも、保湿の改善と水分損失の低減につながる可能性が報告されています。<span class="b">単に水分を補給するだけでなく、乾燥や外部環境ストレスまで考慮した保湿設計</span>のために、エクトインを選びました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S10_T008`
원문 위치: #barrier > .stage.d > p:nth-child(9):L484 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(3):L500
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(9)","line":484,"end_line":484,"raw_html":"<p class=\"a p16 wrap\" style=\"left:84px;top:435px;width:404px\">높은 염도와 건조함 등 극한 환경에 서식하는 일부 미생물이 스스로를 보호하기 위해 만들어내는 물질입니다. 엑토인은 주변의 물 분자와 상호작용해 단백질과 세포막 주변의 수분 환경을 안정화하는 특성을 지니고 있습니다. 피부의 수분 유지와 장벽 보호를 위한 성분으로 활용되며, <span class=\"red\">엑토인을 함유한 제형의 피부 적용 연구*</span> 에서도 보습 및 수분 손실 개선 가능성이 보고되었습니다. <span class=\"b\">단순히 수분을 공급하는 것을 넘어, 건조함과 외부 환경 스트레스까지 고려한 보습 설계</span>를 위해 엑토인을 선택했습니다.</p>","text_with_breaks":"높은 염도와 건조함 등 극한 환경에 서식하는 일부 미생물이 스스로를 보호하기 위해 만들어내는 물질입니다. 엑토인은 주변의 물 분자와 상호작용해 단백질과 세포막 주변의 수분 환경을 안정화하는 특성을 지니고 있습니다. 피부의 수분 유지와 장벽 보호를 위한 성분으로 활용되며, 엑토인을 함유한 제형의 피부 적용 연구* 에서도 보습 및 수분 손실 개선 가능성이 보고되었습니다. 단순히 수분을 공급하는 것을 넘어, 건조함과 외부 환경 스트레스까지 고려한 보습 설계를 위해 엑토인을 선택했습니다.","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(3)","line":500,"end_line":500,"raw_html":"<p class=\"mbody\">높은 염도와 건조함 등 극한 환경에 서식하는 일부 미생물이 스스로를 보호하기 위해 만들어내는 물질입니다. 엑토인은 주변의 물 분자와 상호작용해 단백질과 세포막 주변의 수분 환경을 안정화하는 특성을 지니고 있습니다. 피부의 수분 유지와 장벽 보호를 위한 성분으로 활용되며, <span class=\"red\">엑토인을 함유한 제형의 피부 적용 연구*</span> 에서도 보습 및 수분 손실 개선 가능성이 보고되었습니다. <span class=\"b\">단순히 수분을 공급하는 것을 넘어, 건조함과 외부 환경 스트레스까지 고려한 보습 설계</span>를 위해 엑토인을 선택했습니다.</p>","text_with_breaks":"높은 염도와 건조함 등 극한 환경에 서식하는 일부 미생물이 스스로를 보호하기 위해 만들어내는 물질입니다. 엑토인은 주변의 물 분자와 상호작용해 단백질과 세포막 주변의 수분 환경을 안정화하는 특성을 지니고 있습니다. 피부의 수분 유지와 장벽 보호를 위한 성분으로 활용되며, 엑토인을 함유한 제형의 피부 적용 연구* 에서도 보습 및 수분 손실 개선 가능성이 보고되었습니다. 단순히 수분을 공급하는 것을 넘어, 건조함과 외부 환경 스트레스까지 고려한 보습 설계를 위해 엑토인을 선택했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S10_T008

KO: * 원료·제형 연구 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.

JA: * 原料・製剤の研究に基づくものであり、NIGHT NIGHT CREAMの最終製品の試験結果ではありません。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S10_T008`
원문 위치: #barrier > .stage.d > p:nth-child(10):L485 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(4):L501
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(10)","line":485,"end_line":485,"raw_html":"<p class=\"a wrap red\" style=\"left:84px;top:639px;width:407px;font-size:16px;line-height:26px\">* 원료·제형 연구 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.</p>","text_with_breaks":"* 원료·제형 연구 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(4)","line":501,"end_line":501,"raw_html":"<p class=\"mnote red\">* 원료·제형 연구 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.</p>","text_with_breaks":"* 원료·제형 연구 기준이며, 나잇나잇 크림 완제품의 시험 결과가 아닙니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S10_T009

KO: 세라마이드 5종

JA: 5種類のセラミド

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S10_T008`
원문 위치: #barrier > .stage.d > p:nth-child(11):L486 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(1):L504
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(11)","line":486,"end_line":486,"raw_html":"<p class=\"a pill chip c-yellow\" style=\"left:548px;top:309px\">세라마이드 5종</p>","text_with_breaks":"세라마이드 5종","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(1)","line":504,"end_line":504,"raw_html":"<p class=\"pill chip mchip c-yellow\">세라마이드 5종</p>","text_with_breaks":"세라마이드 5종","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S10_T010

KO: 피부 장벽의 지질 보완

JA: 肌のバリアを構成する脂質を補う

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S10_T008`
원문 위치: #barrier > .stage.d > p:nth-child(13):L488 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(2):L505
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(13)","line":488,"end_line":488,"raw_html":"<p class=\"a md tr\" style=\"left:548px;top:387px;font-size:24px;line-height:24px\">피부 장벽의 지질 보완</p>","text_with_breaks":"피부 장벽의 지질 보완","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(2)","line":505,"end_line":505,"raw_html":"<p class=\"mtitle md\">피부 장벽의 지질 보완</p>","text_with_breaks":"피부 장벽의 지질 보완","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S10_T011

KO: 세라마이드는 피부 각질층에서 세포 사이를 채우는 주요 지질 성분 중 하나입니다. 5종 세라마이드를 조합해 피부 장벽에 필요한 지질을 보완하고, 수분 손실을 줄이는 장벽 케어를 고려했습니다.

JA: セラミドは、肌の角層で細胞の間を満たす主要な脂質成分の一つです。5種類のセラミドを組み合わせ、肌のバリアに必要な脂質を補い、水分損失を抑えるバリアケアを考慮しました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S10_T008`
원문 위치: #barrier > .stage.d > p:nth-child(14):L489 || #barrier > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(3):L506
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(14)","line":489,"end_line":489,"raw_html":"<p class=\"a p16 wrap\" style=\"left:548px;top:435px;width:404px\">세라마이드는 피부 각질층에서 세포 사이를 채우는 주요 지질<br>성분 중 하나입니다. 5종 세라마이드를 조합해 피부 장벽에<br>필요한 지질을 보완하고, 수분 손실을 줄이는 장벽 케어를 고려했습니다.</p>","text_with_breaks":"세라마이드는 피부 각질층에서 세포 사이를 채우는 주요 지질\n성분 중 하나입니다. 5종 세라마이드를 조합해 피부 장벽에\n필요한 지질을 보완하고, 수분 손실을 줄이는 장벽 케어를 고려했습니다.","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(3)","line":506,"end_line":506,"raw_html":"<p class=\"mbody\">세라마이드는 피부 각질층에서 세포 사이를 채우는 주요 지질 성분 중 하나입니다. 5종 세라마이드를 조합해 피부 장벽에 필요한 지질을 보완하고, 수분 손실을 줄이는 장벽 케어를 고려했습니다.</p>","text_with_breaks":"세라마이드는 피부 각질층에서 세포 사이를 채우는 주요 지질 성분 중 하나입니다. 5종 세라마이드를 조합해 피부 장벽에 필요한 지질을 보완하고, 수분 손실을 줄이는 장벽 케어를 고려했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S10_T012

KO: 엑토인이 수분 환경의 안정화와 보호에 주목한 성분이라면, 세라마이드는 피부 장벽을 구성하는 지질에 집중한 성분입니다. 서로 다른 역할의 두 성분을 함께 배합해, 채운 수분을 지키기 위한 보습 환경을 생각했습니다.

JA: エクトインが水分環境の安定化と保護に着目した成分であるのに対し、セラミドは肌のバリアを構成する脂質に焦点を当てた成分です。役割の異なる2つの成分を組み合わせ、補った水分を守るための保湿環境を考えました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S10_T008`
원문 위치: #barrier > .stage.d > p:nth-child(16):L491 || #barrier > .stage.m > div:nth-child(3) > p:nth-child(3):L508
서식 연결: [{"view":"PC","selector":"#barrier > .stage.d > p:nth-child(16)","line":491,"end_line":491,"raw_html":"<p class=\"a p16\" style=\"left:72px;top:778px\">엑토인이 수분 환경의 안정화와 보호에 주목한 성분이라면, 세라마이드는 피부 장벽을 구성하는 지질에 집중한 성분입니다.<br>서로 다른 역할의 두 성분을 함께 배합해, 채운 수분을 지키기 위한 보습 환경을 생각했습니다.</p>","text_with_breaks":"엑토인이 수분 환경의 안정화와 보호에 주목한 성분이라면, 세라마이드는 피부 장벽을 구성하는 지질에 집중한 성분입니다.\n서로 다른 역할의 두 성분을 함께 배합해, 채운 수분을 지키기 위한 보습 환경을 생각했습니다.","links":[]},{"view":"MOBILE","selector":"#barrier > .stage.m > div:nth-child(3) > p:nth-child(3)","line":508,"end_line":508,"raw_html":"<p class=\"mfoot\">엑토인이 수분 환경의 안정화와 보호에 주목한 성분이라면, 세라마이드는 피부 장벽을 구성하는 지질에 집중한 성분입니다. 서로 다른 역할의 두 성분을 함께 배합해, 채운 수분을 지키기 위한 보습 환경을 생각했습니다.</p>","text_with_breaks":"엑토인이 수분 환경의 안정화와 보호에 주목한 성분이라면, 세라마이드는 피부 장벽을 구성하는 지질에 집중한 성분입니다. 서로 다른 역할의 두 성분을 함께 배합해, 채운 수분을 지키기 위한 보습 환경을 생각했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S11_T001

KO: 03

JA: 03

보존값: "03"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S11_T012;S11_T002;S11_T005`
원문 위치: #condition > .stage.d > p:nth-child(1):L516
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(1)","line":516,"end_line":516,"raw_html":"<p class=\"a b tr mono\" style=\"left:60px;top:197px;font-size:24px;line-height:24px\">03</p>","text_with_breaks":"03","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S11_T002

KO: Condition

JA: Condition

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S11_T012;S11_T001;S11_T005`
원문 위치: #condition > .stage.d > p:nth-child(2):L517
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(2)","line":517,"end_line":517,"raw_html":"<p class=\"a b tr\" style=\"left:107px;top:197px;font-size:24px;line-height:24px\">Condition</p>","text_with_breaks":"Condition","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S11_T003

KO: 아침 피부결까지 생각한 발효 케어

JA: 朝のキメまで考えた発酵ケア

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S11_T012`
원문 위치: #condition > .stage.d > p:nth-child(3):L518 || #condition > .stage.m > p:nth-child(2):L536
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(3)","line":518,"end_line":518,"raw_html":"<p class=\"a\" style=\"left:258px;top:197px;font-size:24px;line-height:24px\">아침 피부결까지 생각한 발효 케어</p>","text_with_breaks":"아침 피부결까지 생각한 발효 케어","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > p:nth-child(2)","line":536,"end_line":536,"raw_html":"<p class=\"a\" style=\"left:24px;top:114px;font-size:15px;line-height:20px\">아침 피부결까지 생각한 발효 케어</p>","text_with_breaks":"아침 피부결까지 생각한 발효 케어","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S11_T004

KO: 비피다발효여과물

JA: ビフィズス菌培養液

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S11_T012`
원문 위치: #condition > .stage.d > p:nth-child(6):L521 || #condition > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(1):L539
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(6)","line":521,"end_line":521,"raw_html":"<p class=\"a pill chip b\" style=\"left:84px;top:309px;line-height:18px;letter-spacing:.03em;background:var(--green)\">비피다발효여과물</p>","text_with_breaks":"비피다발효여과물","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(1)","line":539,"end_line":539,"raw_html":"<p class=\"pill chip mchip b c-green\">비피다발효여과물</p>","text_with_breaks":"비피다발효여과물","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S11_T005

KO: 03 Condition

JA: 03 Condition

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=BODY; TRANSLATE=REVIEW
문맥·각주 연결: `S11_T012;S11_T001;S11_T002`
원문 위치: #condition > .stage.d > p:nth-child(7):L522 || #condition > .stage.d > p:nth-child(13):L528 || #condition > .stage.m > p:nth-child(1):L535
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(7)","line":522,"end_line":522,"raw_html":"<p class=\"a b tr\" style=\"right:952px;top:321px;font-size:18px;line-height:18px;color:var(--green)\"><span class=\"mono\">03</span> Condition</p>","text_with_breaks":"03 Condition","links":[]},{"view":"PC","selector":"#condition > .stage.d > p:nth-child(13)","line":528,"end_line":528,"raw_html":"<p class=\"a b tr\" style=\"right:488px;top:321px;font-size:18px;line-height:18px;color:var(--green)\"><span class=\"mono\">03</span> Condition</p>","text_with_breaks":"03 Condition","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > p:nth-child(1)","line":535,"end_line":535,"raw_html":"<p class=\"a b tr\" style=\"left:24px;top:84px;font-size:20px;line-height:24px\"><span class=\"mono\">03</span>&nbsp; Condition</p>","text_with_breaks":"03  Condition","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. PC 번호+제목 ↔ 모바일 결합 제목. T005(9~11장)는 PC 카드별 반복 2회와 모바일 머리말 1회이며 모두 occurrence 보존.

### S11_T006

KO: 수분 유지와 피부 컨디셔닝

JA: 水分保持と肌のコンディショニング

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S11_T012`
원문 위치: #condition > .stage.d > p:nth-child(8):L523 || #condition > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(2):L540
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(8)","line":523,"end_line":523,"raw_html":"<p class=\"a md tr\" style=\"left:84px;top:387px;font-size:24px;line-height:24px\">수분 유지와 피부 컨디셔닝</p>","text_with_breaks":"수분 유지와 피부 컨디셔닝","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(2)","line":540,"end_line":540,"raw_html":"<p class=\"mtitle md\">수분 유지와 피부 컨디셔닝</p>","text_with_breaks":"수분 유지와 피부 컨디셔닝","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S11_T007

KO: 비피다균의 발효 과정에서 얻은 여과물입니다. 발효 과정에서 얻는 수용성 성분을 담은 원료로, 피부의 수분 유지와 컨디셔닝을 위해 활용됩니다. 나잇나잇 크림은 이러한 원료 특성에 주목해, 하루 동안 외부 환경에 노출된 피부의 컨디션까지 고려하여 비피다발효여과물을 선택했습니다.

JA: ビフィズス菌の発酵過程で得られるろ過物です。発酵過程で得られる水溶性成分を含む原料として、肌の水分保持やコンディショニングに活用されています。NIGHT NIGHT CREAMは、こうした原料の特性に着目し、<span class="b">一日を通して外部環境にさらされた肌のコンディション</span>まで考慮して、ビフィズス菌培養液を選びました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S11_T012`
원문 위치: #condition > .stage.d > p:nth-child(9):L524 || #condition > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(3):L541
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(9)","line":524,"end_line":524,"raw_html":"<p class=\"a p16 wrap\" style=\"left:84px;top:435px;width:404px\">비피다균의 발효 과정에서 얻은 여과물입니다. 발효 과정에서 얻는 수용성 성분을 담은 원료로, 피부의 수분 유지와 컨디셔닝을 위해 활용됩니다. 나잇나잇 크림은 이러한 원료 특성에 주목해, <span class=\"b\">하루 동안 외부 환경에 노출된 피부의 컨디션</span>까지 고려하여 비피다발효여과물을 선택했습니다.</p>","text_with_breaks":"비피다균의 발효 과정에서 얻은 여과물입니다. 발효 과정에서 얻는 수용성 성분을 담은 원료로, 피부의 수분 유지와 컨디셔닝을 위해 활용됩니다. 나잇나잇 크림은 이러한 원료 특성에 주목해, 하루 동안 외부 환경에 노출된 피부의 컨디션까지 고려하여 비피다발효여과물을 선택했습니다.","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > div:nth-child(3) > div:nth-child(1) > p:nth-child(3)","line":541,"end_line":541,"raw_html":"<p class=\"mbody\">비피다균의 발효 과정에서 얻은 여과물입니다. 발효 과정에서 얻는 수용성 성분을 담은 원료로, 피부의 수분 유지와 컨디셔닝을 위해 활용됩니다. 나잇나잇 크림은 이러한 원료 특성에 주목해, <span class=\"b\">하루 동안 외부 환경에 노출된 피부의 컨디션</span>까지 고려하여 비피다발효여과물을 선택했습니다.</p>","text_with_breaks":"비피다균의 발효 과정에서 얻은 여과물입니다. 발효 과정에서 얻는 수용성 성분을 담은 원료로, 피부의 수분 유지와 컨디셔닝을 위해 활용됩니다. 나잇나잇 크림은 이러한 원료 특성에 주목해, 하루 동안 외부 환경에 노출된 피부의 컨디션까지 고려하여 비피다발효여과물을 선택했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S11_T008

KO: 갈락토미세스발효여과물

JA: ガラクトミセス培養液

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S11_T012`
원문 위치: #condition > .stage.d > p:nth-child(12):L527 || #condition > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(1):L544
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(12)","line":527,"end_line":527,"raw_html":"<p class=\"a pill chip b\" style=\"left:548px;top:309px;line-height:18px;letter-spacing:.03em;background:var(--green)\">갈락토미세스발효여과물</p>","text_with_breaks":"갈락토미세스발효여과물","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(1)","line":544,"end_line":544,"raw_html":"<p class=\"pill chip mchip b c-green\">갈락토미세스발효여과물</p>","text_with_breaks":"갈락토미세스발효여과물","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S11_T009

KO: 보습과 부드러운 피부결 관리

JA: 保湿と、なめらかなキメのためのケア

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S11_T012`
원문 위치: #condition > .stage.d > p:nth-child(14):L529 || #condition > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(2):L545
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(14)","line":529,"end_line":529,"raw_html":"<p class=\"a md tr\" style=\"left:548px;top:387px;font-size:24px;line-height:24px\">보습과 부드러운 피부결 관리</p>","text_with_breaks":"보습과 부드러운 피부결 관리","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(2)","line":545,"end_line":545,"raw_html":"<p class=\"mtitle md\">보습과 부드러운 피부결 관리</p>","text_with_breaks":"보습과 부드러운 피부결 관리","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S11_T010

KO: 갈락토미세스의 발효 과정에서 얻은 여과물입니다. 피부 보습과 피부결 관리를 위한 컨디셔닝 원료로 활용되며, 관련 원료를 함유한 제형 연구에서는 피부 거칠기 개선이 보고되었습니다. 나잇나잇 크림은 이러한 원료의 활용 배경을 바탕으로, 건조함으로 거칠어지기 쉬운 피부를 촉촉하고 부드럽게 관리하는 나이트케어를 위해 갈락토미세스발효여과물을 선택했습니다.

JA: ガラクトミセスの発酵過程で得られるろ過物です。肌の保湿やキメを整えるためのコンディショニング原料として活用されており、関連する原料を含む製剤の研究では、肌の粗さの改善が報告されています。NIGHT NIGHT CREAMは、こうした原料の活用背景を踏まえ、<span class="b">乾燥でざらつきやすい肌をしっとりとなめらかに整えるナイトケアのために</span>、ガラクトミセス培養液を選びました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S11_T012`
원문 위치: #condition > .stage.d > p:nth-child(15):L530 || #condition > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(3):L546
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(15)","line":530,"end_line":530,"raw_html":"<p class=\"a wrap\" style=\"left:548px;top:435px;width:404px;font-size:16px;line-height:22px\">갈락토미세스의 발효 과정에서 얻은 여과물입니다. 피부 보습과 피부결 관리를 위한 컨디셔닝 원료로 활용되며, 관련 원료를 함유한 제형 연구에서는 피부 거칠기 개선이 보고되었습니다. 나잇나잇 크림은 이러한 원료의 활용 배경을 바탕으로, <span class=\"b\">건조함으로 거칠어지기 쉬운 피부를 촉촉하고 부드럽게 관리하는 나이트케어를 위해</span> 갈락토미세스발효여과물을 선택했습니다.</p>","text_with_breaks":"갈락토미세스의 발효 과정에서 얻은 여과물입니다. 피부 보습과 피부결 관리를 위한 컨디셔닝 원료로 활용되며, 관련 원료를 함유한 제형 연구에서는 피부 거칠기 개선이 보고되었습니다. 나잇나잇 크림은 이러한 원료의 활용 배경을 바탕으로, 건조함으로 거칠어지기 쉬운 피부를 촉촉하고 부드럽게 관리하는 나이트케어를 위해 갈락토미세스발효여과물을 선택했습니다.","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > div:nth-child(3) > div:nth-child(2) > p:nth-child(3)","line":546,"end_line":546,"raw_html":"<p class=\"mbody\">갈락토미세스의 발효 과정에서 얻은 여과물입니다. 피부 보습과 피부결 관리를 위한 컨디셔닝 원료로 활용되며, 관련 원료를 함유한 제형 연구에서는 피부 거칠기 개선이 보고되었습니다. 나잇나잇 크림은 이러한 원료의 활용 배경을 바탕으로, <span class=\"b\">건조함으로 거칠어지기 쉬운 피부를 촉촉하고 부드럽게 관리하는 나이트케어를 위해</span> 갈락토미세스발효여과물을 선택했습니다.</p>","text_with_breaks":"갈락토미세스의 발효 과정에서 얻은 여과물입니다. 피부 보습과 피부결 관리를 위한 컨디셔닝 원료로 활용되며, 관련 원료를 함유한 제형 연구에서는 피부 거칠기 개선이 보고되었습니다. 나잇나잇 크림은 이러한 원료의 활용 배경을 바탕으로, 건조함으로 거칠어지기 쉬운 피부를 촉촉하고 부드럽게 관리하는 나이트케어를 위해 갈락토미세스발효여과물을 선택했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S11_T011

KO: 수분을 채우고 지키는 보습·장벽 설계에 두 가지 발효 성분의 컨디셔닝 특성을 더해, 다음 날 아침의 피부결과 컨디션까지 생각했습니다.

JA: 水分を補い、守る保湿・バリア設計に、2種類の発酵成分のコンディショニング特性を加え、翌朝のキメや肌のコンディションまで考慮しました。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S11_T012`
원문 위치: #condition > .stage.d > p:nth-child(16):L531 || #condition > .stage.m > div:nth-child(3) > p:nth-child(3):L548
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(16)","line":531,"end_line":531,"raw_html":"<p class=\"a p16\" style=\"left:72px;top:778px\">수분을 채우고 지키는 보습·장벽 설계에 두 가지 발효 성분의 컨디셔닝 특성을 더해,<br>다음 날 아침의 피부결과 컨디션까지 생각했습니다.</p>","text_with_breaks":"수분을 채우고 지키는 보습·장벽 설계에 두 가지 발효 성분의 컨디셔닝 특성을 더해,\n다음 날 아침의 피부결과 컨디션까지 생각했습니다.","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > div:nth-child(3) > p:nth-child(3)","line":548,"end_line":548,"raw_html":"<p class=\"mfoot\">수분을 채우고 지키는 보습·장벽 설계에 두 가지 발효 성분의 컨디셔닝 특성을 더해, 다음 날 아침의 피부결과 컨디션까지 생각했습니다.</p>","text_with_breaks":"수분을 채우고 지키는 보습·장벽 설계에 두 가지 발효 성분의 컨디셔닝 특성을 더해, 다음 날 아침의 피부결과 컨디션까지 생각했습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S11_T012

KO: ※ 발효 성분의 특성과 연구 배경에 대한 설명입니다. 연구에 사용된 원료·제형의 결과를 완제품의 시험 결과로 제시하지 않습니다.

JA: ※ 発酵成分の特性と研究背景についての説明です。研究に使用された原料・製剤の結果を、最終製品の試験結果として提示するものではありません。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S11_T012`
원문 위치: #condition > .stage.d > p:nth-child(17):L532 || #condition > .stage.m > div:nth-child(3) > p:nth-child(4):L549
서식 연결: [{"view":"PC","selector":"#condition > .stage.d > p:nth-child(17)","line":532,"end_line":532,"raw_html":"<p class=\"a red\" style=\"left:72px;top:861px;font-size:16px;line-height:26px\">※ 발효 성분의 특성과 연구 배경에 대한 설명입니다. 연구에 사용된 원료·제형의 결과를 완제품의 시험 결과로 제시하지 않습니다.</p>","text_with_breaks":"※ 발효 성분의 특성과 연구 배경에 대한 설명입니다. 연구에 사용된 원료·제형의 결과를 완제품의 시험 결과로 제시하지 않습니다.","links":[]},{"view":"MOBILE","selector":"#condition > .stage.m > div:nth-child(3) > p:nth-child(4)","line":549,"end_line":549,"raw_html":"<p class=\"mnote red\">※ 발효 성분의 특성과 연구 배경에 대한 설명입니다. 연구에 사용된 원료·제형의 결과를 완제품의 시험 결과로 제시하지 않습니다.</p>","text_with_breaks":"※ 발효 성분의 특성과 연구 배경에 대한 설명입니다. 연구에 사용된 원료·제형의 결과를 완제품의 시험 결과로 제시하지 않습니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T001

KO: 제품명

JA: 製品名

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T002`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(1) > p:nth-child(1):L559 || #info > .stage.m > div:nth-child(2) > div:nth-child(1) > p:nth-child(1):L574
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(1) > p:nth-child(1)","line":559,"end_line":559,"raw_html":"<p>제품명</p>","text_with_breaks":"제품명","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(1) > p:nth-child(1)","line":574,"end_line":574,"raw_html":"<p>제품명</p>","text_with_breaks":"제품명","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T002

KO: byDose NIGHT NIGHT CREAM (나잇나잇 크림)

JA: byDose NIGHT NIGHT CREAM（ナイトナイトクリーム）

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T001`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(1) > p:nth-child(2):L559 || #info > .stage.m > div:nth-child(2) > div:nth-child(1) > p:nth-child(2):L574
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)","line":559,"end_line":559,"raw_html":"<p>byDose NIGHT NIGHT CREAM (나잇나잇 크림)</p>","text_with_breaks":"byDose NIGHT NIGHT CREAM (나잇나잇 크림)","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)","line":574,"end_line":574,"raw_html":"<p>byDose NIGHT NIGHT CREAM<br>(나잇나잇 크림)</p>","text_with_breaks":"byDose NIGHT NIGHT CREAM\n(나잇나잇 크림)","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T003

KO: 용량

JA: 容量

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T004`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(2) > p:nth-child(1):L560 || #info > .stage.m > div:nth-child(2) > div:nth-child(2) > p:nth-child(1):L575
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(2) > p:nth-child(1)","line":560,"end_line":560,"raw_html":"<p>용량</p>","text_with_breaks":"용량","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(2) > p:nth-child(1)","line":575,"end_line":575,"raw_html":"<p>용량</p>","text_with_breaks":"용량","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T004

KO: 50 mL

JA: 50 mL

보존값: "50 mL"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S12_T003`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(2) > p:nth-child(2):L560 || #info > .stage.m > div:nth-child(2) > div:nth-child(2) > p:nth-child(2):L575
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)","line":560,"end_line":560,"raw_html":"<p>50 mL</p>","text_with_breaks":"50 mL","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)","line":575,"end_line":575,"raw_html":"<p>50 mL</p>","text_with_breaks":"50 mL","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T005

KO: 제품 유형 / 제형

JA: 製品タイプ / テクスチャー

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T006`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(3) > p:nth-child(1):L561 || #info > .stage.m > div:nth-child(2) > div:nth-child(3) > p:nth-child(1):L576
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(3) > p:nth-child(1)","line":561,"end_line":561,"raw_html":"<p>제품 유형 / 제형</p>","text_with_breaks":"제품 유형 / 제형","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(3) > p:nth-child(1)","line":576,"end_line":576,"raw_html":"<p>제품 유형 / 제형</p>","text_with_breaks":"제품 유형 / 제형","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T006

KO: 나이트 크림 / 젤-크림 타입

JA: ナイトクリーム / ジェルクリームタイプ

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T005`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(3) > p:nth-child(2):L561 || #info > .stage.m > div:nth-child(2) > div:nth-child(3) > p:nth-child(2):L576
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(3) > p:nth-child(2)","line":561,"end_line":561,"raw_html":"<p>나이트 크림 / 젤-크림 타입</p>","text_with_breaks":"나이트 크림 / 젤-크림 타입","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(3) > p:nth-child(2)","line":576,"end_line":576,"raw_html":"<p>나이트 크림 / 젤-크림 타입</p>","text_with_breaks":"나이트 크림 / 젤-크림 타입","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T007

KO: 피부 타입

JA: 肌タイプ

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T008`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(4) > p:nth-child(1):L562 || #info > .stage.m > div:nth-child(2) > div:nth-child(4) > p:nth-child(1):L577
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(4) > p:nth-child(1)","line":562,"end_line":562,"raw_html":"<p>피부 타입</p>","text_with_breaks":"피부 타입","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(4) > p:nth-child(1)","line":577,"end_line":577,"raw_html":"<p>피부 타입</p>","text_with_breaks":"피부 타입","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T008

KO: 모든 피부용

JA: すべての肌タイプに

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T007`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(4) > p:nth-child(2):L562 || #info > .stage.m > div:nth-child(2) > div:nth-child(4) > p:nth-child(2):L577
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(4) > p:nth-child(2)","line":562,"end_line":562,"raw_html":"<p>모든 피부용</p>","text_with_breaks":"모든 피부용","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(4) > p:nth-child(2)","line":577,"end_line":577,"raw_html":"<p>모든 피부용</p>","text_with_breaks":"모든 피부용","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T009

KO: 용기

JA: 容器

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T010`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(5) > p:nth-child(1):L563 || #info > .stage.m > div:nth-child(2) > div:nth-child(5) > p:nth-child(1):L578
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(5) > p:nth-child(1)","line":563,"end_line":563,"raw_html":"<p>용기</p>","text_with_breaks":"용기","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(5) > p:nth-child(1)","line":578,"end_line":578,"raw_html":"<p>용기</p>","text_with_breaks":"용기","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T010

KO: 에어리스 펌프

JA: エアレスポンプ

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T009`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(5) > p:nth-child(2):L563 || #info > .stage.m > div:nth-child(2) > div:nth-child(5) > p:nth-child(2):L578
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(5) > p:nth-child(2)","line":563,"end_line":563,"raw_html":"<p>에어리스 펌프</p>","text_with_breaks":"에어리스 펌프","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(5) > p:nth-child(2)","line":578,"end_line":578,"raw_html":"<p>에어리스 펌프</p>","text_with_breaks":"에어리스 펌프","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T011

KO: 사용법

JA: 使用方法

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T012`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(6) > p:nth-child(1):L564 || #info > .stage.m > div:nth-child(2) > div:nth-child(6) > p:nth-child(1):L579
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(6) > p:nth-child(1)","line":564,"end_line":564,"raw_html":"<p>사용법</p>","text_with_breaks":"사용법","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(6) > p:nth-child(1)","line":579,"end_line":579,"raw_html":"<p>사용법</p>","text_with_breaks":"사용법","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T012

KO: 적당량을 얼굴 전체에 부드럽게 펴 바릅니다.

JA: 適量を顔全体にやさしくのばします。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T011`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(6) > p:nth-child(2):L564 || #info > .stage.m > div:nth-child(2) > div:nth-child(6) > p:nth-child(2):L579
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(6) > p:nth-child(2)","line":564,"end_line":564,"raw_html":"<p>적당량을 얼굴 전체에 부드럽게 펴 바릅니다.</p>","text_with_breaks":"적당량을 얼굴 전체에 부드럽게 펴 바릅니다.","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(6) > p:nth-child(2)","line":579,"end_line":579,"raw_html":"<p>적당량을 얼굴 전체에 부드럽게 펴 바릅니다.</p>","text_with_breaks":"적당량을 얼굴 전체에 부드럽게 펴 바릅니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T013

KO: 제조국

JA: 製造国

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T014`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(7) > p:nth-child(1):L565 || #info > .stage.m > div:nth-child(2) > div:nth-child(7) > p:nth-child(1):L580
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(7) > p:nth-child(1)","line":565,"end_line":565,"raw_html":"<p>제조국</p>","text_with_breaks":"제조국","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(7) > p:nth-child(1)","line":580,"end_line":580,"raw_html":"<p>제조국</p>","text_with_breaks":"제조국","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T014

KO: 대한민국

JA: 大韓民国

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T013`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(7) > p:nth-child(2):L565 || #info > .stage.m > div:nth-child(2) > div:nth-child(7) > p:nth-child(2):L580
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(7) > p:nth-child(2)","line":565,"end_line":565,"raw_html":"<p>대한민국</p>","text_with_breaks":"대한민국","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(7) > p:nth-child(2)","line":580,"end_line":580,"raw_html":"<p>대한민국</p>","text_with_breaks":"대한민국","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T015

KO: 소비자가

JA: 小売価格

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T016`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(8) > p:nth-child(1):L566 || #info > .stage.m > div:nth-child(2) > div:nth-child(8) > p:nth-child(1):L581
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(8) > p:nth-child(1)","line":566,"end_line":566,"raw_html":"<p>소비자가</p>","text_with_breaks":"소비자가","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(8) > p:nth-child(1)","line":581,"end_line":581,"raw_html":"<p>소비자가</p>","text_with_breaks":"소비자가","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T016

KO: 28,900원

JA: 28,900ウォン

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T015`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(8) > p:nth-child(2):L566 || #info > .stage.m > div:nth-child(2) > div:nth-child(8) > p:nth-child(2):L581
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(8) > p:nth-child(2)","line":566,"end_line":566,"raw_html":"<p>28,900원</p>","text_with_breaks":"28,900원","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(8) > p:nth-child(2)","line":581,"end_line":581,"raw_html":"<p>28,900원</p>","text_with_breaks":"28,900원","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T017

KO: 홈페이지 / 문의

JA: ウェブサイト / お問い合わせ

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: `S12_T018`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(9) > p:nth-child(1):L567 || #info > .stage.m > div:nth-child(2) > div:nth-child(9) > p:nth-child(1):L582
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(9) > p:nth-child(1)","line":567,"end_line":567,"raw_html":"<p>홈페이지 / 문의</p>","text_with_breaks":"홈페이지 / 문의","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(9) > p:nth-child(1)","line":582,"end_line":582,"raw_html":"<p>홈페이지 / 문의</p>","text_with_breaks":"홈페이지 / 문의","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S12_T018

KO: bydose.kr · hogan@bydose.kr

JA: bydose.kr · hogan@bydose.kr

보존값: "bydose.kr · hogan@bydose.kr"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: `S12_T017`
원문 위치: #info > .stage.d > div:nth-child(2) > div:nth-child(9) > p:nth-child(2):L567 || #info > .stage.m > div:nth-child(2) > div:nth-child(9) > p:nth-child(2):L582
서식 연결: [{"view":"PC","selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(9) > p:nth-child(2)","line":567,"end_line":567,"raw_html":"<p><a class=\"u\" href=\"https://bydose.kr\" target=\"_blank\" rel=\"noopener\">bydose.kr</a>  ·  <a class=\"u\" href=\"mailto:hogan@bydose.kr\">hogan@bydose.kr</a></p>","text_with_breaks":"bydose.kr  ·  hogan@bydose.kr","links":[{"selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(9) > p:nth-child(2) > a:nth-child(1)","href":"https://bydose.kr"},{"selector":"#info > .stage.d > div:nth-child(2) > div:nth-child(9) > p:nth-child(2) > a:nth-child(2)","href":"mailto:hogan@bydose.kr"}]},{"view":"MOBILE","selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(9) > p:nth-child(2)","line":582,"end_line":582,"raw_html":"<p><a class=\"u\" href=\"https://bydose.kr\" target=\"_blank\" rel=\"noopener\">bydose.kr</a> · <a class=\"u\" href=\"mailto:hogan@bydose.kr\">hogan@bydose.kr</a></p>","text_with_breaks":"bydose.kr · hogan@bydose.kr","links":[{"selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(9) > p:nth-child(2) > a:nth-child(1)","href":"https://bydose.kr"},{"selector":"#info > .stage.m > div:nth-child(2) > div:nth-child(9) > p:nth-child(2) > a:nth-child(2)","href":"mailto:hogan@bydose.kr"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님. S12_T020/S12_T021은 내부 링크 중복이므로 이 블록으로 병합; href는 variants에 보존.

### S12_T019

KO: 전성분·제조/책임판매 정보·박스 입수 등 상세 정보와 공급가·MOQ·납기는 필요 시 별도 자료로 제공합니다.

JA: 全成分、製造元・韓国の化粧品責任販売業者に関する情報、ケース入数などの詳細情報に加え、卸価格・MOQ・納期についても、ご要望に応じて別途資料でご案内します。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #info > .stage.d > p:nth-child(3):L569 || #info > .stage.m > p:nth-child(3):L584
서식 연결: [{"view":"PC","selector":"#info > .stage.d > p:nth-child(3)","line":569,"end_line":569,"raw_html":"<p class=\"a red p16\" style=\"left:657px;top:791px\">전성분·제조/책임판매 정보·박스 입수 등 상세 정보와 공급가·MOQ·납기는<br>필요 시 별도 자료로 제공합니다.</p>","text_with_breaks":"전성분·제조/책임판매 정보·박스 입수 등 상세 정보와 공급가·MOQ·납기는\n필요 시 별도 자료로 제공합니다.","links":[]},{"view":"MOBILE","selector":"#info > .stage.m > p:nth-child(3)","line":584,"end_line":584,"raw_html":"<p class=\"a red wrap\" style=\"left:24px;top:716px;width:342px;font-size:12px;line-height:18px\">전성분·제조/책임판매 정보·박스 입수 등 상세 정보와 공급가·MOQ·납기는 필요 시 별도 자료로 제공합니다.</p>","text_with_breaks":"전성분·제조/책임판매 정보·박스 입수 등 상세 정보와 공급가·MOQ·납기는 필요 시 별도 자료로 제공합니다.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S13_T001

KO: 읽어주셔서 감사합니다. 샘플 검토와 거래 조건 문의는 아래로 연락 주세요.

JA: ご覧いただき、ありがとうございます。サンプルのご検討やお取引条件に関するお問い合わせは、下記までご連絡ください。

처리: TRANSLATE_DRAFT; KIND=BODY; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #contact > .stage.d > p:nth-child(1):L591 || #contact > .stage.m > p:nth-child(1):L596
서식 연결: [{"view":"PC","selector":"#contact > .stage.d > p:nth-child(1)","line":591,"end_line":591,"raw_html":"<p class=\"a\" style=\"left:50%;top:419px;transform:translateX(-50%);text-align:center;font-size:18px;line-height:24px\">읽어주셔서 감사합니다.<br>샘플 검토와 거래 조건 문의는 아래로 연락 주세요.</p>","text_with_breaks":"읽어주셔서 감사합니다.\n샘플 검토와 거래 조건 문의는 아래로 연락 주세요.","links":[]},{"view":"MOBILE","selector":"#contact > .stage.m > p:nth-child(1)","line":596,"end_line":596,"raw_html":"<p class=\"a\" style=\"left:50%;top:330px;transform:translateX(-50%);text-align:center;font-size:15px;line-height:22px\">읽어주셔서 감사합니다.<br>샘플 검토와 거래 조건 문의는 아래로 연락 주세요.</p>","text_with_breaks":"읽어주셔서 감사합니다.\n샘플 검토와 거래 조건 문의는 아래로 연락 주세요.","links":[]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### S13_T002

KO: hogan@bydose.kr

JA: hogan@bydose.kr

보존값: "hogan@bydose.kr"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=BODY; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #contact > .stage.d > a:nth-child(2):L592 || #contact > .stage.m > a:nth-child(2):L597
서식 연결: [{"view":"PC","selector":"#contact > .stage.d > a:nth-child(2)","line":592,"end_line":592,"raw_html":"<a class=\"a pill sb\" href=\"mailto:hogan@bydose.kr\" style=\"left:50%;top:491px;transform:translateX(-50%);height:42px;padding:0 16px;border-radius:36px;background:var(--ink);color:var(--cream);font-size:18px;line-height:26px\">hogan@bydose.kr</a>","text_with_breaks":"hogan@bydose.kr","links":[{"selector":"#contact > .stage.d > a:nth-child(2)","href":"mailto:hogan@bydose.kr"}]},{"view":"MOBILE","selector":"#contact > .stage.m > a:nth-child(2)","line":597,"end_line":597,"raw_html":"<a class=\"a pill sb\" href=\"mailto:hogan@bydose.kr\" style=\"left:50%;top:394px;transform:translateX(-50%);height:42px;padding:0 16px;border-radius:36px;background:var(--ink);color:var(--cream);font-size:16px;line-height:24px\">hogan@bydose.kr</a>","text_with_breaks":"hogan@bydose.kr","links":[{"selector":"#contact > .stage.m > a:nth-child(2)","href":"mailto:hogan@bydose.kr"}]}]
맵 메모: PC/모바일 원문별 서식은 JSON의 raw_html 및 text_with_breaks 참조. 공백 정규화 텍스트는 검색용이며 HTML 대체 정본 아님.

### ATTR_GLOBAL_lang_01

KO: ko

보존값: "ko"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: html @lang:L2
서식 연결: [{"opening":"<html lang=\"ko\">","attribute":"lang"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_GLOBAL_aria_roledescription_01

KO: 프레젠테이션

JA: プレゼンテーション

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #bdk @aria-roledescription:L158
서식 연결: [{"opening":"<div id=\"bdk\" aria-roledescription=\"프레젠테이션\">","attribute":"aria-roledescription"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_cover_data_title_01

KO: 표지

JA: 表紙

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #cover @data-title:L162
서식 연결: [{"opening":"<section class=\"sl\" id=\"cover\" data-title=\"표지\" data-sec=\"0\" data-next=\"\" data-mnext=\"나잇나잇 크림 소개\" data-btn-top=\"584\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_cover_data_next_01

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #cover @data-next:L162
서식 연결: [{"opening":"<section class=\"sl\" id=\"cover\" data-title=\"표지\" data-sec=\"0\" data-next=\"\" data-mnext=\"나잇나잇 크림 소개\" data-btn-top=\"584\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_cover_data_mnext_01

KO: 나잇나잇 크림 소개

JA: NIGHT NIGHT CREAMのご紹介

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #cover @data-mnext:L162
서식 연결: [{"opening":"<section class=\"sl\" id=\"cover\" data-title=\"표지\" data-sec=\"0\" data-next=\"\" data-mnext=\"나잇나잇 크림 소개\" data-btn-top=\"584\">","attribute":"data-mnext"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_cover_alt_01

KO: 나잇나잇 크림 50mL 에어리스 펌프 용기

JA: NIGHT NIGHT CREAM 50mL エアレスポンプ容器

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #cover > .stage.d > img:nth-child(1) @alt:L164
서식 연결: [{"opening":"<img class=\"a cover\" src=\"nightnight-deck-assets/hero-product.jpg\" alt=\"나잇나잇 크림 50mL 에어리스 펌프 용기\" style=\"left:60px;top:264px;width:1320px;height:700px;border-radius:36px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_cover_alt_02

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #cover > .stage.m > img:nth-child(1) @alt:L169
서식 연결: [{"opening":"<img class=\"a cover\" src=\"nightnight-deck-assets/hero-product.jpg\" alt=\"\" style=\"left:24px;top:170px;width:342px;height:593px;border-radius:36px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_intro_data_title_01

KO: 01 제품 소개

JA: 01 製品紹介

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #intro @data-title:L176
서식 연결: [{"opening":"<section class=\"sl\" id=\"intro\" data-title=\"01 제품 소개\" data-sec=\"1\" data-next=\"밤을 위한 설계\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_intro_data_next_01

KO: 밤을 위한 설계

JA: 夜のための設計

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #intro @data-next:L176
서식 연결: [{"opening":"<section class=\"sl\" id=\"intro\" data-title=\"01 제품 소개\" data-sec=\"1\" data-next=\"밤을 위한 설계\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_intro_alt_01

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > img:nth-child(3) @alt:L180
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/divider.svg\" alt=\"\" style=\"left:122px;top:484.5px;width:371px;height:2px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_intro_alt_02

KO: 나잇나잇 크림 본품

JA: NIGHT NIGHT CREAM 製品本体

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > img:nth-child(8) @alt:L185
서식 연결: [{"opening":"<img class=\"a fill\" src=\"nightnight-deck-assets/cutout.png\" alt=\"나잇나잇 크림 본품\" style=\"left:828px;top:196px;width:173px;height:703px;object-position:bottom\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_intro_alt_03

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #intro > .stage.m > img:nth-child(1) @alt:L188
서식 연결: [{"opening":"<img class=\"a fill\" src=\"nightnight-deck-assets/cutout.png\" alt=\"\" style=\"left:153px;top:72px;width:84px;height:340px;object-position:bottom\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_intro_alt_04

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #intro > .stage.m > img:nth-child(4) @alt:L191
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/divider.svg\" alt=\"\" style=\"left:24px;top:552.5px;width:342px;height:2px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_why_data_title_01

KO: 02 좋은 밤

JA: 02 心地よい夜

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #why @data-title:L200
서식 연결: [{"opening":"<section class=\"sl\" id=\"why\" data-title=\"02 좋은 밤\" data-sec=\"2\" data-ui=\"dark\" data-next=\"굿나잇 시퀀스™\"\n             style=\"background-image:url(nightnight-deck-assets/bg-night.jpg)\" data-mbg=\"6% center\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_why_data_next_01

KO: 굿나잇 시퀀스™

JA: グッドナイトシークエンス™

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #why @data-next:L200
서식 연결: [{"opening":"<section class=\"sl\" id=\"why\" data-title=\"02 좋은 밤\" data-sec=\"2\" data-ui=\"dark\" data-next=\"굿나잇 시퀀스™\"\n             style=\"background-image:url(nightnight-deck-assets/bg-night.jpg)\" data-mbg=\"6% center\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_sequence_data_title_01

KO: 02 굿나잇 시퀀스™

JA: 02 グッドナイトシークエンス™

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #sequence @data-title:L225
서식 연결: [{"opening":"<section class=\"sl\" id=\"sequence\" data-title=\"02 굿나잇 시퀀스™\" data-sec=\"2\" data-ui=\"dark\" data-next=\"감촉과 향\"\n             style=\"background-image:url(nightnight-deck-assets/bg-sequence.jpg)\" data-mbg=\"50% center\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_sequence_data_next_01

KO: 감촉과 향

JA: 感触と香り

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #sequence @data-next:L225
서식 연결: [{"opening":"<section class=\"sl\" id=\"sequence\" data-title=\"02 굿나잇 시퀀스™\" data-sec=\"2\" data-ui=\"dark\" data-next=\"감촉과 향\"\n             style=\"background-image:url(nightnight-deck-assets/bg-sequence.jpg)\" data-mbg=\"50% center\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_sequence_alt_01

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence > .stage.d > img:nth-child(4) @alt:L231
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/clock-11.svg\" alt=\"\" style=\"left:855px;top:404px;width:24px;height:24px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_sequence_alt_02

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence > .stage.d > img:nth-child(9) @alt:L236
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/clock-3.svg\" alt=\"\" style=\"left:855px;top:555px;width:24px;height:24px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_sequence_alt_03

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence > .stage.d > img:nth-child(14) @alt:L241
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/clock-7.svg\" alt=\"\" style=\"left:855px;top:706px;width:24px;height:24px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_sequence_alt_04

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence > .stage.m > img:nth-child(4) @alt:L251
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/clock-11.svg\" alt=\"\" style=\"left:40.7px;top:326.7px;width:22.2px;height:22.2px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_sequence_alt_05

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence > .stage.m > img:nth-child(9) @alt:L256
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/clock-3.svg\" alt=\"\" style=\"left:40.7px;top:463.5px;width:22.2px;height:22.2px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_sequence_alt_06

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence > .stage.m > img:nth-child(14) @alt:L261
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/clock-7.svg\" alt=\"\" style=\"left:40.7px;top:600.3px;width:22.2px;height:22.2px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_texture_data_title_01

KO: 03 텍스처

JA: 03 テクスチャー

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture @data-title:L270
서식 연결: [{"opening":"<section class=\"sl\" id=\"texture\" data-title=\"03 텍스처\" data-sec=\"3\" data-next=\"향\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_texture_data_next_01

KO: 향

JA: 香り

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture @data-next:L270
서식 연결: [{"opening":"<section class=\"sl\" id=\"texture\" data-title=\"03 텍스처\" data-sec=\"3\" data-next=\"향\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_texture_alt_01

KO: 발림성 5점 중 5점

JA: のびの良さ 5点満点中5点

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > img:nth-child(7) @alt:L278
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/dots-spread.svg\" alt=\"발림성 5점 중 5점\" style=\"left:850px;top:505px;width:96px;height:8px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_texture_alt_02

KO: 끈적임 5점 중 1점

JA: べたつき 5点満点中1点

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > img:nth-child(9) @alt:L280
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/dots-sticky.svg\" alt=\"끈적임 5점 중 1점\" style=\"left:850px;top:552.5px;width:96.5px;height:9px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_texture_alt_03

KO: 별점 5점

JA: 星評価 5点

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > div:nth-child(10) > img:nth-child(3) @alt:L284
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/stars.svg\" alt=\"별점 5점\" style=\"left:260px;top:22px;width:120px;height:24px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_texture_alt_04

KO: 발림성 5점 중 5점

JA: のびの良さ 5点満点中5点

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.m > img:nth-child(7) @alt:L294
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/dots-spread.svg\" alt=\"발림성 5점 중 5점\" style=\"left:91px;top:541px;width:96px;height:8px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_texture_alt_05

KO: 끈적임 5점 중 1점

JA: べたつき 5点満点中1点

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.m > img:nth-child(9) @alt:L296
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/dots-sticky.svg\" alt=\"끈적임 5점 중 1점\" style=\"left:91px;top:574.3px;width:96.5px;height:9px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_texture_alt_06

KO: 별점 5점

JA: 星評価 5点

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #texture > .stage.m > div:nth-child(10) > img:nth-child(3) @alt:L300
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/stars.svg\" alt=\"별점 5점\" style=\"left:205.8px;top:17.4px;width:95px;height:19px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_scent_data_title_01

KO: 03 향

JA: 03 香り

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent @data-title:L306
서식 연결: [{"opening":"<section class=\"sl\" id=\"scent\" data-title=\"03 향\" data-sec=\"3\" data-next=\"「아로마 웰니스」\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_scent_data_next_01

KO: 「아로마 웰니스」

JA: 「AromaWellness」

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #scent @data-next:L306
서식 연결: [{"opening":"<section class=\"sl\" id=\"scent\" data-title=\"03 향\" data-sec=\"3\" data-next=\"「아로마 웰니스」\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_aroma_data_title_01

KO: 03 AromaWellness

JA: 03 AromaWellness

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=ATTRIBUTE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #aroma @data-title:L342
서식 연결: [{"opening":"<section class=\"sl\" id=\"aroma\" data-title=\"03 AromaWellness\" data-sec=\"3\" data-next=\"성분 설계\"\n             style=\"background-image:url(nightnight-deck-assets/bg-aroma.jpg)\" data-mbg=\"0% center\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_aroma_data_next_01

KO: 성분 설계

JA: 成分設計

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #aroma @data-next:L342
서식 연결: [{"opening":"<section class=\"sl\" id=\"aroma\" data-title=\"03 AromaWellness\" data-sec=\"3\" data-next=\"성분 설계\"\n             style=\"background-image:url(nightnight-deck-assets/bg-aroma.jpg)\" data-mbg=\"0% center\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_aroma_alt_01

KO: GW ONE RELAX SC 기술 적합성 확인서

JA: GW ONE RELAX SC 技術適合性確認書

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #aroma > .stage.d > div:nth-child(9) > img:nth-child(5) @alt:L361
서식 연결: [{"opening":"<img class=\"a cover\" src=\"nightnight-deck-assets/certificate.jpg\" alt=\"GW ONE RELAX SC 기술 적합성 확인서\" style=\"left:523px;top:24px;width:196px;height:276px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_aroma_alt_02

KO: GW ONE RELAX SC 기술 적합성 확인서

JA: GW ONE RELAX SC 技術適合性確認書

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #aroma > .stage.m > div:nth-child(10) > img:nth-child(3) @alt:L378
서식 연결: [{"opening":"<img class=\"a cover\" src=\"nightnight-deck-assets/certificate.jpg\" alt=\"GW ONE RELAX SC 기술 적합성 확인서\" style=\"left:232px;top:16px;width:94px;height:132px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_formula_data_title_01

KO: 04 성분 설계

JA: 04 成分設計

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula @data-title:L386
서식 연결: [{"opening":"<section class=\"sl\" id=\"formula\" data-title=\"04 성분 설계\" data-sec=\"4\" data-next=\"Hydration\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_formula_data_next_01

KO: Hydration

JA: Hydration

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=ATTRIBUTE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #formula @data-next:L386
서식 연결: [{"opening":"<section class=\"sl\" id=\"formula\" data-title=\"04 성분 설계\" data-sec=\"4\" data-next=\"Hydration\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_formula_alt_01

KO: 나잇나잇 크림 본품

JA: NIGHT NIGHT CREAM 製品本体

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > img:nth-child(3) @alt:L390
서식 연결: [{"opening":"<img class=\"a fill\" src=\"nightnight-deck-assets/cutout.png\" alt=\"나잇나잇 크림 본품\" style=\"left:961px;top:185px;width:173px;height:703px;object-position:bottom\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_formula_alt_02

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #formula > .stage.m > img:nth-child(3) @alt:L413
서식 연결: [{"opening":"<img class=\"a fill\" src=\"nightnight-deck-assets/cutout.png\" alt=\"\" style=\"left:318px;top:84px;width:48px;height:132px;object-position:bottom\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_hydration_data_title_01

KO: 04 Hydration

JA: 04 Hydration

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=ATTRIBUTE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #hydration @data-title:L433
서식 연결: [{"opening":"<section class=\"sl\" id=\"hydration\" data-title=\"04 Hydration\" data-sec=\"4\" data-next=\"Barrier\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_hydration_data_next_01

KO: Barrier

JA: Barrier

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=ATTRIBUTE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #hydration @data-next:L433
서식 연결: [{"opening":"<section class=\"sl\" id=\"hydration\" data-title=\"04 Hydration\" data-sec=\"4\" data-next=\"Barrier\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_hydration_alt_01

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #hydration > .stage.d > img:nth-child(10) @alt:L444
서식 연결: [{"opening":"<img class=\"a cover\" src=\"nightnight-deck-assets/mol-hyaluronate.png\" alt=\"\" style=\"left:368px;top:603px;width:120px;height:120px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_hydration_alt_02

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #hydration > .stage.d > img:nth-child(15) @alt:L449
서식 연결: [{"opening":"<img class=\"a cover\" src=\"nightnight-deck-assets/mol-xylityl.png\" alt=\"\" style=\"left:822px;top:603px;width:130px;height:120px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_barrier_data_title_01

KO: 04 Barrier

JA: 04 Barrier

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=ATTRIBUTE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #barrier @data-title:L474
서식 연결: [{"opening":"<section class=\"sl\" id=\"barrier\" data-title=\"04 Barrier\" data-sec=\"4\" data-next=\"Condition\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_barrier_data_next_01

KO: Condition

JA: Condition

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=ATTRIBUTE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #barrier @data-next:L474
서식 연결: [{"opening":"<section class=\"sl\" id=\"barrier\" data-title=\"04 Barrier\" data-sec=\"4\" data-next=\"Condition\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_barrier_alt_01

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #barrier > .stage.d > img:nth-child(15) @alt:L490
서식 연결: [{"opening":"<img class=\"a cover\" src=\"nightnight-deck-assets/mol-barrier.png\" alt=\"\" style=\"left:844px;top:603px;width:108px;height:120px;object-position:bottom\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_condition_data_title_01

KO: 04 Condition

JA: 04 Condition

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=ATTRIBUTE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #condition @data-title:L514
서식 연결: [{"opening":"<section class=\"sl\" id=\"condition\" data-title=\"04 Condition\" data-sec=\"4\" data-next=\"제품 정보\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_condition_data_next_01

KO: 제품 정보

JA: 製品情報

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #condition @data-next:L514
서식 연결: [{"opening":"<section class=\"sl\" id=\"condition\" data-title=\"04 Condition\" data-sec=\"4\" data-next=\"제품 정보\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_condition_alt_01

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #condition > .stage.d > img:nth-child(10) @alt:L525
서식 연결: [{"opening":"<img class=\"a cover\" src=\"nightnight-deck-assets/mol-galactomyces.png\" alt=\"\" style=\"left:372px;top:603px;width:116px;height:120px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_condition_alt_02

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #condition > .stage.d > img:nth-child(11) @alt:L526
서식 연결: [{"opening":"<img class=\"a cover\" src=\"nightnight-deck-assets/mol-bifida.png\" alt=\"\" style=\"left:831px;top:603px;width:121px;height:120px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_info_data_title_01

KO: 05 제품 정보

JA: 05 製品情報

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #info @data-title:L555
서식 연결: [{"opening":"<section class=\"sl\" id=\"info\" data-title=\"05 제품 정보\" data-sec=\"5\" data-next=\"EOD\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_info_data_next_01

KO: EOD

JA: EOD

처리: REVIEW_SOURCE_LABEL_RETAINED; KIND=ATTRIBUTE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: #info @data-next:L555
서식 연결: [{"opening":"<section class=\"sl\" id=\"info\" data-title=\"05 제품 정보\" data-sec=\"5\" data-next=\"EOD\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_info_alt_01

KO: 나잇나잇 크림 본품

JA: NIGHT NIGHT CREAM 製品本体

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #info > .stage.d > img:nth-child(1) @alt:L557
서식 연결: [{"opening":"<img class=\"a fill\" src=\"nightnight-deck-assets/cutout.png\" alt=\"나잇나잇 크림 본품\" style=\"left:268px;top:161px;width:173px;height:703px;object-position:bottom\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_info_alt_02

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #info > .stage.m > img:nth-child(1) @alt:L572
서식 연결: [{"opening":"<img class=\"a fill\" src=\"nightnight-deck-assets/cutout.png\" alt=\"\" style=\"left:168px;top:76px;width:54px;height:210px;object-position:bottom\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_contact_data_title_01

KO: 문의

JA: お問い合わせ

처리: TRANSLATE_DRAFT; KIND=ATTRIBUTE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: #contact @data-title:L589
서식 연결: [{"opening":"<section class=\"sl\" id=\"contact\" data-title=\"문의\" data-sec=\"0\" data-msec=\"5\" data-next=\"\">","attribute":"data-title"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_contact_data_next_01

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #contact @data-next:L589
서식 연결: [{"opening":"<section class=\"sl\" id=\"contact\" data-title=\"문의\" data-sec=\"0\" data-msec=\"5\" data-next=\"\">","attribute":"data-next"}]
맵 메모: data-title은 슬라이드 메타/영상 title 입력; data-next는 PC 캡션 및 PC/모바일 다음 장 접근성 문구 입력.

### ATTR_contact_alt_01

KO: byDose

JA: byDose

보존값: "byDose"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #contact > .stage.d > img:nth-child(3) @alt:L593
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/rabbit.svg\" alt=\"byDose\" style=\"left:690px;top:557px;width:60px;height:30px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### ATTR_contact_alt_02

KO: byDose

JA: byDose

보존값: "byDose"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=ATTRIBUTE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #contact > .stage.m > img:nth-child(3) @alt:L598
서식 연결: [{"opening":"<img class=\"a\" src=\"nightnight-deck-assets/rabbit.svg\" alt=\"byDose\" style=\"left:165px;top:456px;width:60px;height:30px\">","attribute":"alt"}]
맵 메모: 원본 속성 그대로. 빈 alt는 원문에서 비어 있음; 이미지 내부 문자 없음의 증거는 아님.

### META_DOCUMENT_TITLE

KO: 나잇나잇 크림 제품소개서 — byDose

JA: NIGHT NIGHT CREAM 製品紹介資料 — byDose

처리: TRANSLATE_DRAFT; KIND=META; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: head > title:L6
서식 연결: []
맵 메모: 

### JS_SECS_01

KO: 제품 소개

JA: 製品紹介

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var SECS[1]:L642
서식 연결: []
맵 메모: 접두 번호 01는 고정. href=#intro. PC 13장 × 1회.

### JS_SECS_02

KO: 밤을 위한 설계

JA: 夜のための設計

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var SECS[2]:L642
서식 연결: []
맵 메모: 접두 번호 02는 고정. href=#why. PC 13장 × 1회.

### JS_SECS_03

KO: 감촉과 향

JA: 感触と香り

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var SECS[3]:L642
서식 연결: []
맵 메모: 접두 번호 03는 고정. href=#texture. PC 13장 × 1회.

### JS_SECS_04

KO: 성분 설계

JA: 成分設計

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var SECS[4]:L642
서식 연결: []
맵 메모: 접두 번호 04는 고정. href=#formula. PC 13장 × 1회.

### JS_SECS_05

KO: 제품 정보

JA: 製品情報

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var SECS[5]:L642
서식 연결: []
맵 메모: 접두 번호 05는 고정. href=#info. PC 13장 × 1회.

### JS_TABS_01

KO: 제품소개

JA: 製品紹介

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var TABS[1]:L643
서식 연결: []
맵 메모: 접두 번호 01는 고정. href=#intro. 모바일 2~13장 × 1회. 제품 소개/제품소개 공백 차이 유지.

### JS_TABS_02

KO: 밤을 위한 설계

JA: 夜のための設計

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var TABS[2]:L643
서식 연결: []
맵 메모: 접두 번호 02는 고정. href=#why. 모바일 2~13장 × 1회. 제품 소개/제품소개 공백 차이 유지.

### JS_TABS_03

KO: 감촉과 향

JA: 感触と香り

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var TABS[3]:L643
서식 연결: []
맵 메모: 접두 번호 03는 고정. href=#texture. 모바일 2~13장 × 1회. 제품 소개/제품소개 공백 차이 유지.

### JS_TABS_04

KO: 성분 설계

JA: 成分設計

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var TABS[4]:L643
서식 연결: []
맵 메모: 접두 번호 04는 고정. href=#formula. 모바일 2~13장 × 1회. 제품 소개/제품소개 공백 차이 유지.

### JS_TABS_05

KO: 제품 정보

JA: 製品情報

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script var TABS[5]:L643
서식 연결: []
맵 메모: 접두 번호 05는 고정. href=#info. 모바일 2~13장 × 1회. 제품 소개/제품소개 공백 차이 유지.

### JS_LANG_KOR

KO: 한국어

보존값: "한국어"

처리: HOLD_TERM_PENDING; KIND=JS_SOURCE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: script LANGS KOR:L646
서식 연결: []
맵 메모: 고정 data-code=KOR; 국기=🇰🇷; 표시=🇰🇷 KOR 한국어; PC13+모바일12=25개 메뉴에 반복. 원본 표기를 수정하지 않음.

### JS_LANG_ENG

KO: 영어

보존값: "영어"

처리: HOLD_TERM_PENDING; KIND=JS_SOURCE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: script LANGS ENG:L646
서식 연결: []
맵 메모: 고정 data-code=ENG; 국기=🇺🇸; 표시=🇺🇸 ENG 영어; PC13+모바일12=25개 메뉴에 반복. 원본 표기를 수정하지 않음.

### JS_LANG_CHN

KO: 중국

보존값: "중국"

처리: HOLD_TERM_PENDING; KIND=JS_SOURCE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: script LANGS CHN:L646
서식 연결: []
맵 메모: 고정 data-code=CHN; 국기=🇨🇳; 표시=🇨🇳 CHN 중국; PC13+모바일12=25개 메뉴에 반복. 원본 표기를 수정하지 않음.

### JS_LANG_MNG

KO: 몽골

보존값: "몽골"

처리: HOLD_TERM_PENDING; KIND=JS_SOURCE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: script LANGS MNG:L646
서식 연결: []
맵 메모: 고정 data-code=MNG; 국기=🇲🇳; 표시=🇲🇳 MNG  몽골; PC13+모바일12=25개 메뉴에 반복. 원본 표기를 수정하지 않음.

### JS_LANG_RUS

KO: 러시아

보존값: "러시아"

처리: HOLD_TERM_PENDING; KIND=JS_SOURCE; TRANSLATE=REVIEW
문맥·각주 연결: ``
원문 위치: script LANGS RUS:L646
서식 연결: []
맵 메모: 고정 data-code=RUS; 국기=🇷🇺; 표시=🇷🇺 RUS 러시아; PC13+모바일12=25개 메뉴에 반복. 원본 표기를 수정하지 않음.

### JS_HOME_ARIA

KO: byDose 처음으로

JA: byDose トップへ

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script:L663
서식 연결: []
맵 메모: PC 13회; byDose 고정; href=#cover

### JS_PDF_ARIA

KO: PDF로 저장

JA: PDFとして保存

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script:L708
서식 연결: []
맵 메모: PC13+모바일12=25회; window.print()

### JS_LANGUAGE_ARIA

KO: 언어 선택

JA: 言語を選択

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script:L710
서식 연결: []
맵 메모: PC13+모바일12=25회

### JS_COVER_LOGO_ALT

KO: byDose

JA: byDose

보존값: "byDose"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=JS_SOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: script:L685
서식 연결: []
맵 메모: 모바일 표지 1회; 고정 브랜드

### JS_NEXT_PREFIX

KO: 다음 장

JA: 次のスライド

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script:L676
서식 연결: []
맵 메모: 완성 문자열은 GEN_*_NEXT_ARIA. 접미사 있으면 정확히 콜론+공백(: )을 연결.

### JS_VIDEO_SUFFIX

KO:  영상

JA: ` 動画`

처리: TRANSLATE_DRAFT; KIND=JS_SOURCE; TRANSLATE=Y
문맥·각주 연결: ``
원문 위치: script:L800
서식 연결: []
맵 메모: 앞 공백 포함; data-title + 이 접미사. GEN_*_VIDEO_TITLE 참조.

### GEN_cover_NEXT_ARIA

KO: 다음 장

보존값: "다음 장"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #cover .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_intro_NEXT_ARIA

KO: 다음 장: 밤을 위한 설계

보존값: "다음 장: 밤을 위한 설계"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #intro .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_why_NEXT_ARIA

KO: 다음 장: 굿나잇 시퀀스™

보존값: "다음 장: 굿나잇 시퀀스™"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #why .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_sequence_NEXT_ARIA

KO: 다음 장: 감촉과 향

보존값: "다음 장: 감촉과 향"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #sequence .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_texture_NEXT_ARIA

KO: 다음 장: 향

보존값: "다음 장: 향"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #texture .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_texture_VIDEO_TITLE

KO: 03 텍스처 영상

보존값: "03 텍스처 영상"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_VIDEO_SUFFIX`
원문 위치: #texture .media iframe @title; script:L800
서식 연결: []
맵 메모: PC/모바일 영상 각 1개. 실행 시 로드 조건 존재; 정적 산출값.

### GEN_scent_NEXT_ARIA

KO: 다음 장: 「아로마 웰니스」

보존값: "다음 장: 「아로마 웰니스」"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #scent .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_scent_VIDEO_TITLE

KO: 03 향 영상

보존값: "03 향 영상"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_VIDEO_SUFFIX`
원문 위치: #scent .media iframe @title; script:L800
서식 연결: []
맵 메모: PC/모바일 영상 각 1개. 실행 시 로드 조건 존재; 정적 산출값.

### GEN_aroma_NEXT_ARIA

KO: 다음 장: 성분 설계

보존값: "다음 장: 성분 설계"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #aroma .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_formula_NEXT_ARIA

KO: 다음 장: Hydration

보존값: "다음 장: Hydration"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #formula .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_hydration_NEXT_ARIA

KO: 다음 장: Barrier

보존값: "다음 장: Barrier"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #hydration .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_barrier_NEXT_ARIA

KO: 다음 장: Condition

보존값: "다음 장: Condition"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #barrier .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_condition_NEXT_ARIA

KO: 다음 장: 제품 정보

보존값: "다음 장: 제품 정보"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #condition .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### GEN_info_NEXT_ARIA

KO: 다음 장: EOD

보존값: "다음 장: EOD"

처리: DERIVED_REFERENCE_ONLY; KIND=JS_RESOLVED; TRANSLATE=Y
문맥·각주 연결: `JS_NEXT_PREFIX`
원문 위치: #info .stage.d/.stage.m button.next @aria-label; script:L676
서식 연결: []
맵 메모: 원천 JS_NEXT_PREFIX + 해당 ATTR data-next를 참조하는 검산 행. 별도 번역 중복 작업 금지. 표지는 PC/모바일 모두 다음 장.

### LINK_hydration_PC

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=LINK; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > a:nth-child(4):L391
서식 연결: []
맵 메모: PC 카드 빈 a href=#hydration; 대응 텍스트는 인접 S08 블록. 접근성 명칭의 시각/실행 QA는 수행 안 함.

### LINK_barrier_PC

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=LINK; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > a:nth-child(10):L397
서식 연결: []
맵 메모: PC 카드 빈 a href=#barrier; 대응 텍스트는 인접 S08 블록. 접근성 명칭의 시각/실행 QA는 수행 안 함.

### LINK_condition_PC

KO: 

보존값: ""

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=LINK; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #formula > .stage.d > a:nth-child(16):L403
서식 연결: []
맵 메모: PC 카드 빈 a href=#condition; 대응 텍스트는 인접 S08 블록. 접근성 명칭의 시각/실행 QA는 수행 안 함.

### RESOURCE_001

KO: https://fonts.googleapis.com

보존값: "https://fonts.googleapis.com"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: head > link:nth-child(4) @href:L7
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_002

KO: https://fonts.gstatic.com

보존값: "https://fonts.gstatic.com"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: head > link:nth-child(5) @href:L8
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_003

KO: https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300..800&family=Roboto+Mono:wght@400;700&display=swap

보존값: "https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300..800&family=Roboto+Mono:wght@400;700&display=swap"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: head > link:nth-child(6) @href:L9
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_004

KO: nightnight-deck-assets/hero-product.jpg

보존값: "nightnight-deck-assets/hero-product.jpg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #cover > .stage.d > img:nth-child(1) @src:L164 || #cover > .stage.m > img:nth-child(1) @src:L169
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_005

KO: nightnight-deck-assets/divider.svg

보존값: "nightnight-deck-assets/divider.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > img:nth-child(3) @src:L180 || #intro > .stage.m > img:nth-child(4) @src:L191
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_006

KO: nightnight-deck-assets/cutout.png

보존값: "nightnight-deck-assets/cutout.png"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #intro > .stage.d > img:nth-child(8) @src:L185 || #intro > .stage.m > img:nth-child(1) @src:L188 || #formula > .stage.d > img:nth-child(3) @src:L390 || #formula > .stage.m > img:nth-child(3) @src:L413 || #info > .stage.d > img:nth-child(1) @src:L557 || #info > .stage.m > img:nth-child(1) @src:L572
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_007

KO: nightnight-deck-assets/bg-night.jpg

보존값: "nightnight-deck-assets/bg-night.jpg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #why @style:L200
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_008

KO: nightnight-deck-assets/bg-sequence.jpg

보존값: "nightnight-deck-assets/bg-sequence.jpg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence @style:L225
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_009

KO: nightnight-deck-assets/clock-11.svg

보존값: "nightnight-deck-assets/clock-11.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence > .stage.d > img:nth-child(4) @src:L231 || #sequence > .stage.m > img:nth-child(4) @src:L251
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_010

KO: nightnight-deck-assets/clock-3.svg

보존값: "nightnight-deck-assets/clock-3.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence > .stage.d > img:nth-child(9) @src:L236 || #sequence > .stage.m > img:nth-child(9) @src:L256
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_011

KO: nightnight-deck-assets/clock-7.svg

보존값: "nightnight-deck-assets/clock-7.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #sequence > .stage.d > img:nth-child(14) @src:L241 || #sequence > .stage.m > img:nth-child(14) @src:L261
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_012

KO: 1217189885

보존값: "1217189885"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > div:nth-child(3) @data-vimeo:L274 || #texture > .stage.m > div:nth-child(3) @data-vimeo:L290
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_013

KO: https://i.vimeocdn.com/video/2188812504-83314b1905a3b2a4234b66c86f2c7c4c4ddc4cee17474fc11246d96b5c48b05a-d_1280?region=us

보존값: "https://i.vimeocdn.com/video/2188812504-83314b1905a3b2a4234b66c86f2c7c4c4ddc4cee17474fc11246d96b5c48b05a-d_1280?region=us"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > div:nth-child(3) @style:L274 || #texture > .stage.m > div:nth-child(3) @style:L290
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_014

KO: nightnight-deck-assets/dots-spread.svg

보존값: "nightnight-deck-assets/dots-spread.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > img:nth-child(7) @src:L278 || #texture > .stage.m > img:nth-child(7) @src:L294
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_015

KO: nightnight-deck-assets/dots-sticky.svg

보존값: "nightnight-deck-assets/dots-sticky.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > img:nth-child(9) @src:L280 || #texture > .stage.m > img:nth-child(9) @src:L296
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_016

KO: nightnight-deck-assets/stars.svg

보존값: "nightnight-deck-assets/stars.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #texture > .stage.d > div:nth-child(10) > img:nth-child(3) @src:L284 || #texture > .stage.m > div:nth-child(10) > img:nth-child(3) @src:L300
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_017

KO: 1217189884

보존값: "1217189884"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > div:nth-child(3) @data-vimeo:L310 || #scent > .stage.m > div:nth-child(3) @data-vimeo:L326
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_018

KO: nightnight-deck-assets/poster-scent.jpg

보존값: "nightnight-deck-assets/poster-scent.jpg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #scent > .stage.d > div:nth-child(3) @style:L310 || #scent > .stage.m > div:nth-child(3) @style:L326
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_019

KO: nightnight-deck-assets/bg-aroma.jpg

보존값: "nightnight-deck-assets/bg-aroma.jpg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #aroma @style:L342
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_020

KO: nightnight-deck-assets/certificate.jpg

보존값: "nightnight-deck-assets/certificate.jpg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #aroma > .stage.d > div:nth-child(9) > img:nth-child(5) @src:L361 || #aroma > .stage.m > div:nth-child(10) > img:nth-child(3) @src:L378
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_021

KO: nightnight-deck-assets/mol-hyaluronate.png

보존값: "nightnight-deck-assets/mol-hyaluronate.png"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #hydration > .stage.d > img:nth-child(10) @src:L444
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_022

KO: nightnight-deck-assets/mol-xylityl.png

보존값: "nightnight-deck-assets/mol-xylityl.png"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #hydration > .stage.d > img:nth-child(15) @src:L449
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_023

KO: nightnight-deck-assets/mol-barrier.png

보존값: "nightnight-deck-assets/mol-barrier.png"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #barrier > .stage.d > img:nth-child(15) @src:L490
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_024

KO: nightnight-deck-assets/mol-galactomyces.png

보존값: "nightnight-deck-assets/mol-galactomyces.png"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #condition > .stage.d > img:nth-child(10) @src:L525
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_025

KO: nightnight-deck-assets/mol-bifida.png

보존값: "nightnight-deck-assets/mol-bifida.png"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #condition > .stage.d > img:nth-child(11) @src:L526
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_026

KO: nightnight-deck-assets/rabbit.svg

보존값: "nightnight-deck-assets/rabbit.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: #contact > .stage.d > img:nth-child(3) @src:L593 || #contact > .stage.m > img:nth-child(3) @src:L598
서식 연결: []
맵 메모: 경로/URL/영상 ID는 번역 제외. 이미지·영상 내부 텍스트는 미확인; 번역 실현 방식 결정 필요. 시각 QA NOT_TESTED.

### RESOURCE_JS_logo_TONE

KO: nightnight-deck-assets/logo-{tone}.svg

보존값: "nightnight-deck-assets/logo-{tone}.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: script:L664
서식 연결: []
맵 메모: tone=light/dark. 아이콘 alt=""; 모바일 표지 로고 alt=byDose; nav-dot는 alt 미설정. 이미지 자체 내용 미확인; 번역 실현 방식 결정 필요. NOT_TESTED.

### RESOURCE_JS_nav_dot

KO: nightnight-deck-assets/nav-dot.svg

보존값: "nightnight-deck-assets/nav-dot.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: script:L669
서식 연결: []
맵 메모: tone=light/dark. 아이콘 alt=""; 모바일 표지 로고 alt=byDose; nav-dot는 alt 미설정. 이미지 자체 내용 미확인; 번역 실현 방식 결정 필요. NOT_TESTED.

### RESOURCE_JS_next_btn

KO: nightnight-deck-assets/next-btn.svg

보존값: "nightnight-deck-assets/next-btn.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: script:L677
서식 연결: []
맵 메모: tone=light/dark. 아이콘 alt=""; 모바일 표지 로고 alt=byDose; nav-dot는 alt 미설정. 이미지 자체 내용 미확인; 번역 실현 방식 결정 필요. NOT_TESTED.

### RESOURCE_JS_logo_dark

KO: nightnight-deck-assets/logo-dark.svg

보존값: "nightnight-deck-assets/logo-dark.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: script:L685
서식 연결: []
맵 메모: tone=light/dark. 아이콘 alt=""; 모바일 표지 로고 alt=byDose; nav-dot는 alt 미설정. 이미지 자체 내용 미확인; 번역 실현 방식 결정 필요. NOT_TESTED.

### RESOURCE_JS_next_btn_m

KO: nightnight-deck-assets/next-btn-m.svg

보존값: "nightnight-deck-assets/next-btn-m.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: script:L699
서식 연결: []
맵 메모: tone=light/dark. 아이콘 alt=""; 모바일 표지 로고 alt=byDose; nav-dot는 alt 미설정. 이미지 자체 내용 미확인; 번역 실현 방식 결정 필요. NOT_TESTED.

### RESOURCE_JS_download_TONE

KO: nightnight-deck-assets/download-{tone}.svg

보존값: "nightnight-deck-assets/download-{tone}.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: script:L707
서식 연결: []
맵 메모: tone=light/dark. 아이콘 alt=""; 모바일 표지 로고 alt=byDose; nav-dot는 alt 미설정. 이미지 자체 내용 미확인; 번역 실현 방식 결정 필요. NOT_TESTED.

### RESOURCE_JS_lang_TONE

KO: nightnight-deck-assets/lang-{tone}.svg

보존값: "nightnight-deck-assets/lang-{tone}.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: script:L709
서식 연결: []
맵 메모: tone=light/dark. 아이콘 alt=""; 모바일 표지 로고 alt=byDose; nav-dot는 alt 미설정. 이미지 자체 내용 미확인; 번역 실현 방식 결정 필요. NOT_TESTED.

### RESOURCE_JS_caret_TONE

KO: nightnight-deck-assets/caret-{tone}.svg

보존값: "nightnight-deck-assets/caret-{tone}.svg"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=RESOURCE; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: script:L709
서식 연결: []
맵 메모: tone=light/dark. 아이콘 alt=""; 모바일 표지 로고 alt=byDose; nav-dot는 alt 미설정. 이미지 자체 내용 미확인; 번역 실현 방식 결정 필요. NOT_TESTED.

### META_CHARSET

KO: UTF-8

보존값: "UTF-8"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=META; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: head > meta:nth-child(1):L4
서식 연결: [{"charset":"UTF-8"}]
맵 메모: 인코딩/뷰포트 기술값. 번역 대상 설명 메타는 없음.

### META_VIEWPORT

KO: width=device-width, initial-scale=1.0, viewport-fit=cover

보존값: "width=device-width, initial-scale=1.0, viewport-fit=cover"

처리: KEEP_SOURCE_NONTRANSLATABLE; KIND=META; TRANSLATE=N
문맥·각주 연결: ``
원문 위치: head > meta:nth-child(2):L5
서식 연결: [{"name":"viewport","content":"width=device-width, initial-scale=1.0, viewport-fit=cover"}]
맵 메모: 인코딩/뷰포트 기술값. 번역 대상 설명 메타는 없음.

