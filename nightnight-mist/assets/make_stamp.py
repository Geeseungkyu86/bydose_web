"""Write postmark-style stamp SVGs for the Aroma Wellness certificate."""
import sys

TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" role="img" aria-label="{label}">
  <defs>
    <!-- 소인 질감: 잉크는 진하게, 큰 얼룩으로 군데군데 빠지고 + 잔 점으로 살짝 긁히고 + 아주 살짝 흔들림 -->
    <filter id="{fid}" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="2" seed="{seed}" result="coarse"/>
      <feColorMatrix in="coarse" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -7 4.6" result="blot"/>
      <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="1" seed="{seed2}" result="fine"/>
      <feColorMatrix in="fine" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -9 6.1" result="speck"/>
      <feComposite in="blot" in2="speck" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="holes"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" seed="{seed2}" result="wobble"/>
      <feDisplacementMap in="SourceGraphic" in2="wobble" scale="2.5" xChannelSelector="R" yChannelSelector="G" result="shaky"/>
      <feComposite in="shaky" in2="holes" operator="in"/>
    </filter>
    <!-- 글자용: 읽히도록 훨씬 약하게, 흔들림 없이 -->
    <filter id="{fid}-t" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="2" seed="21" result="coarse"/>
      <feColorMatrix in="coarse" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -8 7.0" result="blot"/>
      <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="1" seed="19" result="fine"/>
      <feColorMatrix in="fine" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -9 7.4" result="speck"/>
      <feComposite in="blot" in2="speck" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="holes"/>
      <feComposite in="SourceGraphic" in2="holes" operator="in"/>
    </filter>
    <path id="{fid}-top" d="M 64,200 A 136,136 0 0 1 336,200"/>
    <path id="{fid}-bottom" d="M 46,200 A 154,154 0 0 0 354,200"/>
  </defs>
  <g transform="rotate({rot} 200 200)">
  <g fill="none" stroke="{ink}" filter="url(#{fid})">
    <circle cx="200" cy="200" r="182" stroke-width="7"/>
    <circle cx="200" cy="200" r="98" stroke-width="5"/>
  </g>
    <g fill="{ink}" stroke="none" filter="url(#{fid}-t)" font-family="'Courier Prime','Courier New',Courier,monospace" font-weight="700">
      <text font-size="30" letter-spacing="4"><textPath href="#{fid}-top" startOffset="50%" text-anchor="middle">{top}</textPath></text>
      <text font-size="21" letter-spacing="2" dominant-baseline="hanging"><textPath href="#{fid}-bottom" startOffset="50%" text-anchor="middle">{bottom}</textPath></text>
      <circle cx="38" cy="200" r="5"/>
      <circle cx="362" cy="200" r="5"/>
      <g transform="rotate(-10 200 200)" text-anchor="middle">
        <text x="200" y="180" font-size="23" letter-spacing="1">{center1}</text>
        <text x="200" y="208" font-size="23" letter-spacing="1">{center2}</text>
        <text x="200" y="238" font-size="15" letter-spacing="2">{date}</text>
      </g>
    </g>
  </g>
</svg>
"""

VARIANTS = {
    "A": dict(label="CPL Aromas AromaWellness Relaxation Fragrance 인증 소인", top="AROMA WELLNESS",
              bottom="CPL AROMAS \u00b7 UNITED KINGDOM", center1="RELAXATION", center2="FRAGRANCE", date="15 DEC 2025"),
    "B": dict(label="CPL Aromas AromaWellness 인증 소인", top="AROMA WELLNESS",
              bottom="CPL AROMAS \u00b7 UNITED KINGDOM", center1="CERTIFIED", center2="FRAGRANCE", date="15 DEC 2025"),
}
out_dir = sys.argv[1]
for key, v in VARIANTS.items():
    for ink_name, ink in (("black", "#2A2A29"), ("red", "#D35B40")):
        svg = TEMPLATE.format(fid=f"aw{key}{ink_name}", seed=7, seed2=3, rot=-6, ink=ink, **v)
        open(f"{out_dir}/stamp-aroma-wellness-{key}-{ink_name}.svg", "w", encoding="utf-8").write(svg)
print("ok")
