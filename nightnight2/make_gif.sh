#!/bin/bash
# video/*.mp4 → gif/*.gif
# 1080px 정사각을 유지하고, 한 개 5MB(5,000,000바이트) 이하가 되도록 초당 장 수를 줄였다.
# 64색 · 디더링 없음. 영상마다 움직임 양이 달라 초당 장 수가 다르다.
# 사용법: bash make_gif.sh
set -e
cd "$(dirname "$0")"
mk() {
  id=$1; sec=$2; fps=$3
  ffmpeg -loglevel error -y -t "${sec}" -i "video/vimeo_${id}.mp4" \
    -vf "fps=${fps},crop='min(iw,ih)':'min(iw,ih)',scale=1080:1080:flags=lanczos,split[a][b];[a]palettegen=max_colors=64:stats_mode=diff[p];[b][p]paletteuse=dither=none:diff_mode=rectangle" \
    "gif/gif_${id}.gif"
  echo "gif_${id}.gif $(stat -f%z "gif/gif_${id}.gif" 2>/dev/null || stat -c%s "gif/gif_${id}.gif") bytes"
}
mk 1217189885 5 5     # GIF_01  PM 11:00 젤-크림 제형 (원본 16:9)  25장 · 약 4.9MB
mk 1217189884 4.5 2   # GIF_02  AM 03:00 수분 채우기 (원본 8:9)   9장 · 약 4.7MB
mk 1217189883 5 2.5   # GIF_03  How to use (원본 1:1)             13장 · 약 4.7MB
