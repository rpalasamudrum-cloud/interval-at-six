# Interval at Six

Six things that actually happened in Hindi cinema, every day — as a deck of
full-screen cards you swipe through in ninety seconds, plus the five-minute
video script that goes with it.

Releases, box office, casting, streaming. **Every card links to the outlet that
reported it**, and anything that is a forecast rather than a fact is labelled on
the card itself.

Each edition is one self-contained HTML file. No build step, no dependencies, no
server, no framework. Open it in a browser and it works. The only network
request is a Google Fonts stylesheet, which degrades to Impact and a system sans
if it fails.

Built phone-first: full-height snap-scrolling cards, a progress rail across the
top, swipe or arrow keys to move. It reads the same on a laptop.

## What is here

| Path | What it is |
| --- | --- |
| `index.html` | the front page: today's edition, the archive, and the sourcing promise |
| `editions/YYYY-MM-DD.html` | one edition — eight cards, self-contained |
| `template.html` | the shell to copy for a new edition, with `__TOKENS__` to fill |
| `scripts/YYYY-MM-DD.md` | the five-minute video script, with timecodes and metadata |
| `scripts/YYYY-MM-DD.voice.txt` | the same voiceover, stage directions stripped and names respelled, ready to paste into a voice clone |
| `scripts/PRONUNCIATION.md` | the running respelling list — the thing that stops TTS mangling names |
| `record/YYYY-MM-DD.html` | the recording cut — 1080×1920, plays itself for 4:27, for screen capture |
| `youtube/CHANNEL.md` | channel setup, upload defaults, the daily loop |
| `youtube/avatar.svg`, `youtube/banner.svg` | channel artwork masters, export to PNG |
| `STYLE.md` | the house style and the editorial rules |
| `verify.js` | the verifier — run it before every push |

`index.html` is the manifest. The verifier only checks editions linked from it,
which is how you find out you forgot to link one.

## An edition, structurally

One opening card, **six story cards**, one end card carrying the desk notes. The
six slots are the same every day: the lead, the money, what releases next, the
quiet one, the human one, the small screen. That fixed shape is what keeps the
video at a reliable five minutes.

Card four is the **quiet card** — no colour wash, no watermark numeral, no stat,
no punchline. It is where a story that touches what actually happened to people
goes, and it is a slot rather than a judgement call so that it does not get
skipped on a busy day.

## Making tomorrow's edition

```bash
cp template.html editions/2026-08-10.html
```

Fill in every `__TOKEN__`, pick each card's two wash colours, add the edition to
`index.html` in two places — the "Today" card and the archive list — then:

```bash
/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc verify.js
```

It must print `PASS` before anything gets pushed or recorded. Then write
`scripts/2026-08-10.md` from the finished deck.

## What the verifier checks

No emoji, no `<img>`, no unfilled placeholder tokens. Exactly one opening card,
six story cards, one end card, and exactly one quiet card. Every story card has
a headline, a chip row, a rail label, and a source line carrying a real `https`
link. Any card that hedges a number — forecast, projection, estimate — carries
the gold warning chip. The quiet card carries no watermark numeral. Every
edition linked from the index exists, links back to the index, and has a script
file that points at it.

It does **not** police gradients, shadows or blurs. The deck is deliberately
loud. That is the opposite of the sibling `smartrama` quiz repo, which bans all
three — different project, different audience.

This machine has no `node` and no Homebrew, so the verifier is written for
macOS's built-in JavaScriptCore.

## The video

`scripts/YYYY-MM-DD.md` is the whole upload: voice-over with timecodes, on-screen
cues cut against the cards, the Shorts cut-down, and the title, thumbnail text,
chapters, description and tags ready to paste.

`record/YYYY-MM-DD.html` is the picture: the same edition on a fixed 1080×1920
canvas that plays itself for 4:27, advancing on the script's timecodes with the
push-ins and punch-ins programmed in. Press F, then Space, and screen-record it
in one pass. It opens on a 3-2-1 slate ending in a white flash frame — sync the
voice-over to that flash and every card lands where the script says.

Card one is already vertical, which is the Short.

The channel is <https://youtube.com/@intervalatsix>. Uploading is yours to
press; setup and the daily loop are in [`youtube/CHANNEL.md`](youtube/CHANNEL.md).

## Editorial rules

The short version, in full in [`STYLE.md`](STYLE.md):

1. No card ships without a source link.
2. Nothing is written from memory.
3. A forecast is labelled a forecast, and never restated as a result.
4. Numbers are dated, because box-office totals move.
5. The quiet card runs quiet.
6. Corrections go at the top of the next edition, on the cards.

## Licence

All rights reserved — see [`LICENSE`](LICENSE). The news itself belongs to the
outlets that reported it, which is why every card links to them.
