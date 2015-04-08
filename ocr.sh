#!/bin/sh
BASE=/tmp/tesseract_temp_$$
PIPE=$BASE.txt
 
rm -f      $PIPE
mkfifo     $PIPE

tesseract  "$@" $BASE &

cat        $PIPE
rm -f      $PIPE
