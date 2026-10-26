#!/usr/bin/env python3
"""나잇나잇 크림 제품소개서(nightnight-deck.html)에 다국어 원고를 넣는다.

원고: bydose_제품소개서_다국어/GEE_다국어_통합시트_272.csv
  - 한 줄 = 문장 하나. '한국어 승인 원문'으로 제품소개서의 글자를 찾고, 옆 칸 번역을 쓴다.
  - '수정 상태'가 '번역 제외'로 시작하는 줄, RESOURCE·META·LINK 줄은 쓰지 않는다.

하는 일 (실행할 때마다 같은 결과)
  1. 이름표 붙이기: 한국어 문장이 들어 있는 태그에 data-i18n="S02_T002" 를 붙인다.
     모바일처럼 한 문장이 <p> 여러 개로 나뉜 곳은 첫 태그에 data-i18n, 나머지에 data-i18n-part.
     짧은 글자(목차 이름 등)는 data-i18n-txt 를 붙이고 화면에서 한국어 글자로 찾아 바꾼다.
     이미 이름표가 있는 태그는 건드리지 않는다.
  2. 원고 넣기: 파일 안 /*I18N:START*/ ... /*I18N:END*/ 사이를 원고 JSON으로 바꾼다.
  3. 점검: 번역이 없는 한국어, 쓰이지 않은 원고 줄, 이름표는 있는데 한국어가 바뀐 곳을 알려 준다.

사용법 (저장소 맨 위에서)
  python3 tools/build_deck_i18n.py            # 이름표 + 원고 넣기 + 점검
  python3 tools/build_deck_i18n.py --check    # 파일은 그대로 두고 점검만
"""
import csv, html, json, re, sys
from pathlib import Path
from bs4 import BeautifulSoup, NavigableString, Tag, Comment

ROOT = Path(__file__).resolve().parent.parent
DECK = ROOT / 'nightnight-deck.html'
CSV = ROOT / 'bydose_제품소개서_다국어' / 'GEE_다국어_통합시트_272.csv'

# 언어 메뉴 코드 ← 원고 칸 이름 (메뉴 순서)
LANGS = [('ENG', '영어 EN'), ('JPN', '일본어 JA'), ('CHN', '중국어 간체 ZH'), ('MNG', '몽골어 MN'), ('RUS', '러시아어 RU')]
KO = '한국어 승인 원문'
ATTRS = ('alt', 'aria-label', 'title', 'aria-roledescription')
MARK = re.compile(r'/\*I18N:START\*/.*?/\*I18N:END\*/', re.S)


def ns(s):
    """띄어쓰기·줄바꿈을 모두 뺀 비교용 글자"""
    return re.sub(r'\s+', '', html.unescape(s))


def text_of(el):
    return ns(el.get_text(''))


def has_ko(s):
    return re.search('[가-힣]', s) is not None


# ---------- 번역 글자 다듬기: 칸마다 다른 표기를 제품소개서 태그로 맞춘다 ----------
ALLOWED_SPAN = {'b', 'rg', 'u', 'red', 'mono', 'md', 'sb'}


def clean(s, warn):
    s = s.strip()
    s = re.sub(r'\*\*(.+?)\*\*', r'<span class="b">\1</span>', s, flags=re.S)   # **굵게**
    s = re.sub(r'<u>(.*?)</u>', r'<span class="u">\1</span>', s, flags=re.S)   # <u>밑줄</u>
    s = s.replace('\r\n', '\n').replace('\n', '<br>')
    s = re.sub(r'<br\s*/?>', '<br>', s)

    def tag(m):
        t = m.group(0)
        if t in ('<br>', '</span>', '<mark>', '</mark>', '<b>', '</b>'):
            return t
        sp = re.fullmatch(r'<span class="([\w ]+)">', t)
        if sp and set(sp.group(1).split()) <= ALLOWED_SPAN:
            return t
        a = re.fullmatch(r'<a [^>]*href="([^"]+)"[^>]*>', t)
        if a and 'class="u"' in t and re.match(r'(https://bydose\.kr|mailto:)', a.group(1)):
            return '<a class="u" href="%s"%s>' % (a.group(1), '' if a.group(1).startswith('mailto:') else ' target="_blank" rel="noopener"')
        if t == '</a>':
            return t
        if not t.startswith('<a '):          # 배치용 <a class="a pill"> 껍데기는 조용히 벗긴다
            warn.append('허용하지 않은 태그를 뺐습니다: ' + t[:60])
        return ''

    s = re.sub(r'<[^>]+>', tag, s)
    # 여는 <a> 를 뺐으면 짝 </a> 도 뺀다
    if s.count('<a ') < s.count('</a>'):
        s = s.replace('</a>', '', s.count('</a>') - s.count('<a '))
    return s


def plain(s):
    """속성·짧은 글자용: 태그·백틱·설명 괄호를 뺀 글자"""
    s = re.sub(r'<[^>]+>', '', s).replace('**', '')
    m = re.search(r'`([^`]*)`', s)
    if m:
        s = m.group(1)
    return html.unescape(s).replace('\n', ' ')


def load_rows():
    rows = list(csv.DictReader(open(CSV, encoding='utf-8-sig')))
    use = [r for r in rows
           if not r['수정 상태'].startswith('번역 제외') and r['구분'] not in ('RESOURCE', 'META', 'LINK')
           and not r['수정 상태'].startswith('미결정: 언어 선택')]
    return use


def build_dict(rows, warn):
    by_id, by_ko, body = {}, {}, {}
    for r in rows:
        ko = r[KO].strip()
        if not ko:
            continue
        if r['구분'] == 'BODY':
            by_id[r['내부 ID']] = [clean(r[c], warn) for _, c in LANGS]
            body.setdefault(ns(ko), r['내부 ID'])
        # 짧은 글자·속성은 한국어로 찾는다 (본문 줄도 넣어 둔다: 다음 장 이름 등)
        if len(ko) <= 40 or r['구분'] != 'BODY':
            key = ' 영상' if r['내부 ID'] == 'JS_VIDEO_SUFFIX' else ko
            vals = [plain(r[c]) for _, c in LANGS]
            if key == ' 영상':
                vals = [v if v.startswith(' ') else ' ' + v.strip() for v in vals]
            if key in by_ko and by_ko[key] != vals and r['구분'] != 'BODY':
                warn.append('같은 한국어에 번역이 둘: "%s" (%s)' % (key, r['내부 ID']))
            if key not in by_ko or r['구분'] != 'BODY':
                by_ko[key] = vals
    return by_id, by_ko, body


# ---------- 1. 이름표 붙이기 ----------
def annotate(src, body, by_ko, rows_by_id, report):
    soup = BeautifulSoup(src, 'html.parser')
    root = soup.find('div', id='bdk')
    line_start = [0]
    for line in src.split('\n'):
        line_start.append(line_start[-1] + len(line) + 1)
    inserts = []          # (원문 위치, 넣을 글자)

    def add(el, attr):
        pos = line_start[el.sourceline - 1] + el.sourcepos + 1 + len(el.name)
        inserts.append((pos, ' ' + attr))
        k, _, v = attr.partition('=')
        el.attrs[k] = v.strip('"')

    def tagged(el):
        return any(a in el.attrs for a in ('data-i18n', 'data-i18n-part', 'data-i18n-txt'))

    def kids(el):
        return [c for c in el.children if isinstance(c, Tag) or (isinstance(c, NavigableString) and not isinstance(c, Comment) and c.strip())]

    def walk(el):
        if el.name in ('script', 'style', 'svg') or 'lang-menu' in (el.get('class') or []):
            return          # 언어 메뉴는 각 언어 이름을 그 언어로 적으므로 번역하지 않는다
        if 'data-i18n' in el.attrs:
            i = el['data-i18n']
            if i in rows_by_id and text_of(el) != ns(rows_by_id[i][KO]) and not el.find_next_sibling(attrs={'data-i18n-part': i}):
                report['stale'].append('%s: 제품소개서 "%s" ≠ 원고 "%s"' % (i, el.get_text('')[:40], rows_by_id[i][KO][:40]))
            return
        if tagged(el):
            return
        t = text_of(el)
        if t in body:
            only = [k for k in kids(el)]
            if len(only) == 1 and isinstance(only[0], Tag) and text_of(only[0]) == t:
                return walk(only[0])          # 같은 글자의 가장 안쪽 태그에 붙인다
            add(el, 'data-i18n="%s"' % body[t])
            return
        # 모바일: 한 문장이 형제 태그 여러 개로 나뉜 경우
        ch = kids(el)
        i = 0
        while i < len(ch):
            hit = None
            if isinstance(ch[i], Tag) and not tagged(ch[i]) and text_of(ch[i]) and text_of(ch[i]) not in body:
                acc = ''
                for j in range(i, len(ch)):
                    if not isinstance(ch[j], Tag) or tagged(ch[j]) or not text_of(ch[j]):
                        break
                    acc += text_of(ch[j])
                    if j > i and acc in body:
                        hit = j
                        break
                    if not any(k.startswith(acc) for k in body):
                        break
            if hit is not None:
                key = body[acc]
                add(ch[i], 'data-i18n="%s"' % key)
                for k in range(i + 1, hit + 1):
                    add(ch[k], 'data-i18n-part="%s"' % key)
                i = hit + 1
                continue
            if isinstance(ch[i], Tag):
                walk(ch[i])
            i += 1
        # 남은 한국어 글자: 짧은 글자 사전에 있으면 data-i18n-txt
        own = [c for c in el.children if isinstance(c, NavigableString) and not isinstance(c, Comment) and has_ko(c)]
        if own and not tagged(el):
            if all(c.strip() in by_ko for c in own):
                add(el, 'data-i18n-txt')
            else:
                for c in own:
                    if c.strip() not in by_ko:
                        report['missing'].append('%s: "%s"' % (el.name, c.strip()[:60]))

    walk(root)
    for el in root.find_all(True):
        for a in ATTRS:
            v = el.get(a)
            if v and has_ko(v) and v not in by_ko:
                report['missing'].append('%s 속성: "%s"' % (a, v))
    used = {el['data-i18n'] for el in root.find_all(attrs={'data-i18n': True})}
    report['unused'] = ['%s "%s"' % (i, r[KO][:50]) for i, r in rows_by_id.items()
                        if r['구분'] == 'BODY' and r[KO].strip() and i not in used]
    for pos, s in sorted(inserts, reverse=True):
        src = src[:pos] + s + src[pos:]
    return src, len(inserts)


def main():
    check = '--check' in sys.argv
    warn = []
    rows = load_rows()
    rows_by_id = {r['내부 ID']: r for r in rows}
    by_id, by_ko, body = build_dict(rows, warn)
    src = DECK.read_text(encoding='utf-8')
    if not MARK.search(src):
        sys.exit('nightnight-deck.html 에 /*I18N:START*/ /*I18N:END*/ 자리가 없습니다.')
    report = {'missing': [], 'stale': [], 'unused': []}
    out, n = annotate(src, body, by_ko, rows_by_id, report)
    # 화면에 실제로 쓰이는 본문만 넣는다
    used = set(re.findall(r'data-i18n="([^"]+)"', out))
    data = {'langs': [c for c, _ in LANGS],
            'id': {k: v for k, v in by_id.items() if k in used},
            'ko': by_ko}
    blob = json.dumps(data, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
    out = MARK.sub(lambda m: '/*I18N:START*/' + blob + '/*I18N:END*/', out)

    print('원고 %d줄 · 새 이름표 %d개 · 본문 번역 %d개 · 짧은 글자 %d개' % (len(rows), n, len(data['id']), len(by_ko)))
    for title, key in (('번역이 없는 한국어', 'missing'), ('한국어가 원고와 다름(번역이 낡았을 수 있음)', 'stale'), ('제품소개서에서 못 찾은 원고 줄', 'unused')):
        if report[key]:
            print('\n[%s] %d개' % (title, len(report[key])))
            for x in report[key]:
                print('  -', x)
    for w in sorted(set(warn)):
        print('  ! ' + w)
    if check:
        print('\n(--check: 파일은 바꾸지 않았습니다)')
    elif out != src:
        DECK.write_text(out, encoding='utf-8')
        print('\nnightnight-deck.html 을 고쳤습니다.')
    else:
        print('\n바뀐 것이 없습니다.')


if __name__ == '__main__':
    main()
