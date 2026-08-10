#!/bin/bash
#
# Build the voiceover for an edition, and print the card marks the recording cut
# needs so the deck and the audio agree.
#
#   ./scripts/make-voice.sh 2026-08-09
#
# Reads scripts/<date>.voice.txt, writes audio/<date>.m4a, and prints the MARKS
# array and RUNTIME to paste into record/<date>.html.
#
# Uses macOS's built-in `say`. No account, no network, no cost. Swap RATE or
# VOICE below; `say -v '?'` lists what is installed.
#
# WHY IT MEASURES INSTEAD OF ESTIMATING: a script's runtime is not its word
# count over a words-per-minute figure — not with a synthetic read, which does
# not breathe. Edition one was written for a 5:08 deck and came out 4:19. So
# the audio is generated first and the deck is re-timed to it, never the other
# way round.

set -e
cd "$(dirname "$0")/.."

DATE=${1:?usage: make-voice.sh YYYY-MM-DD}
VOICE=${VOICE:-Tara}
RATE=${RATE:-130}
PARA_PAUSE=900      # ms between paragraphs inside a card
CARD_PAUSE=2600     # ms at a card transition

# Which paragraphs of the .voice.txt belong to which card. Eight groups: the
# open card, the six stories, the end card. EDIT THIS PER EDITION — it is the
# one thing that changes when the script changes shape.
SECS=("1 2" "3 4 5 6" "7 8 9" "10 11 12" "13 14" "15 16" "17" "18 19")
NAMES=(open story1 story2 story3 story4 story5 story6 end)

SRC="scripts/$DATE.voice.txt"
[ -f "$SRC" ] || { echo "no $SRC"; exit 1; }

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
mkdir -p audio/parts

awk -v RS='' -v d="$TMP" '{print > (d "/p" NR ".txt")}' "$SRC"

: > "$TMP/full.txt"
for i in 0 1 2 3 4 5 6 7; do
  : > "$TMP/b$i.txt"
  first=1
  for p in ${SECS[$i]}; do
    [ $first -eq 0 ] && printf ' [[slnc %d]] ' "$PARA_PAUSE" >> "$TMP/b$i.txt"
    tr '\n' ' ' < "$TMP/p$p.txt" >> "$TMP/b$i.txt"
    first=0
  done
  # One clip per card, so each card can be measured — and re-cut on its own
  # when a single story changes.
  say -v "$VOICE" -r "$RATE" -o "audio/parts/$i.m4a" -f "$TMP/b$i.txt"
  cat "$TMP/b$i.txt" >> "$TMP/full.txt"
  [ $i -lt 7 ] && printf ' [[slnc %d]] ' "$CARD_PAUSE" >> "$TMP/full.txt"
done

# The single file that goes into the edit.
say -v "$VOICE" -r "$RATE" -o "audio/$DATE.m4a" -f "$TMP/full.txt"

cat <<TXT

  voice   : $VOICE at ${RATE}wpm
  edit use: audio/$DATE.m4a
  per card: audio/parts/0.m4a … 7.m4a

  Now measure. Open scripts/measure-audio.html in a browser; it prints the
  MARKS array and RUNTIME to paste into record/$DATE.html.

  Measure there and nowhere else. \`afinfo\` reports a different duration
  depending on the container and was out by fourteen seconds on one card —
  every timing derived from it was wrong. The browser decodes the file.

  After pasting MARKS: move each PUNCH time to sit at the same point within
  its new card span, and set the push-in transition to card one's length.

TXT
