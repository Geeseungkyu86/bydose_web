#!/bin/bash
# video/*.mp4 → gif/*.gif
# 피그마 업로드 한도(10MB) 안에 들어가도록 720px 정사각 · 8fps · 앞부분 5초(1217189884만 4.5초·80색)로 뽑는다.
# 사용법: bash make_gif.sh
set -e
cd "$(dirname "$0")"
mk() {
  id=$1; sec=$2; colors=$3
  ffmpeg -loglevel error -y -t "${sec}" -i "video/vimeo_${id}.mp4" \
    -vf "fps=8,crop='min(iw,ih)':'min(iw,ih)',scale=720:720:flags=lanczos,split[a][b];[a]palettegen=max_colors=${colors}:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle" \
    "gif/gif_${id}.gif"
  echo "gif_${id}.gif $(du -h "gif/gif_${id}.gif" | cut -f1)"
}
mk 1217189885 5 96    # GIF_01  PM 11:00 젤-크림 제형 (원본 16:9)
mk 1217189884 4.5 80  # GIF_02  AM 03:00 수분 채우기 (원본 8:9)
mk 1217189883 5 96    # GIF_03  How to use (원본 1:1)
