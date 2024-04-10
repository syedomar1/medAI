#!/usr/bin/sh

curl -F"file=@$(fzf)" 0x0.st | wl-copy
echo "$(wl-paste)"
dunstify -u low -i "$iDIR/music.png" "File link copied to clipboard"

