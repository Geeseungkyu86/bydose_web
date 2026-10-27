import re, base64, sys, os
# 사용법: python3 build.py local   → out/detail_local.html (img/ 상대경로, 브라우저 미리보기용)
#        python3 build.py inline  → out/detail_inline.html (이미지 base64 내장, 피그마 html_to_figma 업로드용)
D=os.path.dirname(os.path.abspath(__file__)); MODE=sys.argv[1] if len(sys.argv)>1 else 'local'
css=open(f'{D}/src/nnd.css').read()
a=css.index('@media (max-width:768px){'); b0=a+len('@media (max-width:768px){'); d=1; k=b0
while d:
    d+= {'{':1,'}':-1}.get(css[k],0); k+=1
base=css[:a]; mob=css[b0:k-1]
mob=mob.replace('width:100vw; margin-left:calc(50% - 50vw); margin-right:calc(50% - 50vw);','')
story=open(f'{D}/src/story.html').read()
# drop promo
i=story.find('<div id="bd-promo"'); j=story.find('<section class="nnd-intro"')
story=story[:i]+story[j:]
# drop lightbox, jump links, delivery/return accordions
story=re.sub(r'<div class="nnd-lightbox".*?</div>','',story,flags=re.S)
story=re.sub(r'<a class="nnd-persona__link"[^>]*>.*?</a>','',story,flags=re.S)
accs=re.findall(r'<div class="nnd-acc">.*?</div>\s*</div>',story,flags=re.S)
for a in accs:
    if '배송 안내' in a or '교환·반품' in a: story=story.replace(a,'')
# 고민 카드(알약형) -> 대화형 말풍선. 카드는 한 줄/두 줄이 섞여 높이가 들쭉날쭉했다.
# 문구는 그대로 두고, 긴 문장은 말풍선 두 개로 나눠 360px에서 모든 말풍선이 한 줄에 들어가게 끊는다.
SPLIT={'클로이':['나이트 크림은 좀 무겁고','번들 거릴 거 같아...'],
       '노아':['하루종일 히터 바람에','얼굴이 버석해...'],
       '엠마':['분명 오래 잤는데','왜 때문에 피곤해 보이지??'],
       '루시':['또. 또. 또 뜨네.','오늘도 화장이 안먹어..!']}
# 인스타그램 DM처럼 마지막 말풍선 아래에 붙는 이모지 리액션 (고민 내용과 맞춘 것)
REACT={'클로이':'🫠','미아':'😣','노아':'🔥🏜️','엠마':'🐼','루시':'💄😩'}
def chat(m):
    src,name,quote=m.group(1),m.group(2),re.sub(r'<span class="nnd-pc-only">.*?</span>','',m.group(3))
    who=name.split(' ')[0]; lines=SPLIT.get(who,[quote])
    assert ''.join(lines).replace(' ','')==quote.replace(' ',''), (name,quote)
    bubbles=''.join(f'<p class="nnd-chat__bubble">{t}</p>' for t in lines[:-1])
    bubbles+=f'<div class="nnd-chat__last"><p class="nnd-chat__bubble">{lines[-1]}</p><span class="nnd-chat__react">{REACT[who]}</span></div>'
    return f'<div class="nnd-chat"><img src="{src}" alt=""><div class="nnd-chat__body"><p class="nnd-chat__name">{name}</p>{bubbles}</div></div>'
story,n=re.subn(r'<div class="nnd-pill"><img src="([^"]+)" alt=""><div><p class="nnd-pill__name">([^<]+)</p><p class="nnd-pill__quote">(.*?)</p></div></div>',chat,story)
assert n==5, n
story=story.replace(' loading="lazy"','').replace(' hidden>','>').replace('<img data-src=','<img src=').replace('aria-expanded="false"','aria-expanded="true"')
# videos -> poster img
def vid(m):
    cls=m.group(1); vidid={'nnd-vid--169':'1217189885','nnd-vid--89':'1217189884','nnd-vid--11':'1217189883'}[cls]
    return f'<div class="nnd-vid {cls}"><img class="nnd-gif" data-vid="{vidid}" src="IMG:poster_{vidid}.jpg" loading="eager" alt="GIF {vidid}"></div>'
story=re.sub(r'<div class="nnd-vid (nnd-vid--\w+)"[^>]*>\s*<iframe[^>]*></iframe>\s*</div>',vid,story,flags=re.S)
assert story.count('nnd-gif')==3, story.count('nnd-gif')
# image urls -> local
def img(m):
    f=os.path.basename(m.group(0).split('?')[0]); return 'IMG:'+f
story=re.sub(r'https://cdn[^"\')\s]*?/upload/[^"\')\s]+\.(?:png|jpg|jpeg)(?:\?[^"\')\s]*)?',img,story)
extra='''
html,body{margin:0;padding:0;background:#F3F3E9}
#nnd-story{width:360px;margin:0}
.nnd-marker{position:relative!important;top:auto!important}
.nnd-gif{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.nnd-vid{background:none!important}
.nnd-acc__icon{display:none!important}
.nnd-cert{cursor:default}
.nnd-personas{gap:16px}
.nnd-chat{display:flex;align-items:flex-start;gap:10px}
.nnd-chat img{width:40px;height:40px;border-radius:50%;flex:none;background:rgba(255,255,255,.6)}
.nnd-chat__body{min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:4px}
.nnd-chat__name{margin:0 0 2px!important;font-size:13px;line-height:18px;font-weight:600;color:var(--ink70)}
.nnd-chat__bubble{margin:0!important;padding:9px 14px;border-radius:18px;background:rgba(255,255,255,.6);font-size:15px;line-height:22px;color:var(--ink);white-space:nowrap}
.nnd-chat__name+.nnd-chat__bubble,.nnd-chat__name+.nnd-chat__last .nnd-chat__bubble{border-top-left-radius:4px}
.nnd-personas{gap:22px}
.nnd-chat__last{position:relative;padding-bottom:16px}
.nnd-chat__react{position:absolute;left:10px;bottom:0;display:flex;align-items:center;height:24px;padding:0 6px;border-radius:12px;
  background:#fff;box-shadow:0 0 0 2px var(--bg);font-size:13px;line-height:24px;letter-spacing:1px;
  font-family:"Apple Color Emoji","Noto Color Emoji","Segoe UI Emoji",sans-serif}
'''
html=f'''<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=360">
<title>나잇나잇 크림_유통 상세페이지</title>
<link href="https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>{base}\n{mob}\n{extra}</style></head><body>{story}</body></html>'''
def rep(m):
    f=m.group(1); p=f'{D}/img/{f}'
    if MODE=='local': return f'../img/{f}'
    mime='image/jpeg' if f.endswith('jpg') else 'image/png'
    return f'data:{mime};base64,'+base64.b64encode(open(p,'rb').read()).decode()
html=re.sub(r'IMG:([\w.]+)',rep,html)
out=f'{D}/out/detail_{MODE}.html'; os.makedirs(f'{D}/out',exist_ok=True); open(out,'w').write(html); print(out,len(html))
