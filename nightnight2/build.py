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
