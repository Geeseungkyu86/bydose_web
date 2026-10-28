#!/bin/bash
# video/*.mp4 → gif/*.gif
# 한 개 5MB(5,000,000바이트) 이하가 되도록 540px 정사각 · 8fps · 앞부분 5초로 뽑는다.
# 1217189884는 움직임이 많아 3.5초·80색으로 줄였다.
# 사용법: bash make_gif.sh
set -e
cd "$(dirname "$0")"
mk() {
  id=$1; sec=$2; colors=$3
  ffmpeg -loglevel error -y -t "${sec}" -i "video/vimeo_${id}.mp4" \
    -vf "fps=8,crop='min(iw,ih)':'min(iw,ih)',scale=540:540:flags=lanczos,split[a][b];[a]palettegen=max_colors=${colors}:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle" \
    "gif/gif_${id}.gif"
  echo "gif_${id}.gif $(stat -f%z "gif/gif_${id}.gif" 2>/dev/null || stat -c%s "gif/gif_${id}.gif") bytes"
}
mk 1217189885 5 96    # GIF_01  PM 11:00 젤-크림 제형 (원본 16:9)  약 3.5MB
mk 1217189884 3.5 80  # GIF_02  AM 03:00 수분 채우기 (원본 8:9)   약 4.6MB
mk 1217189883 5 96    # GIF_03  How to use (원본 1:1)             약 4.5MB
