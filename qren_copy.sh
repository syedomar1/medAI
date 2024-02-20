#/usr/bin/sh

qrencode -t PNG -s 8 -o /tmp/qren_file.png $(wl-paste)
zbarimg /tmp/qren_file.png
imv /tmp/qren_file.png
