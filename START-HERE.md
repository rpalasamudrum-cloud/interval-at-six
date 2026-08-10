# Start here

Everything is built. This is the order to do things in.

Written 9 August 2026. Part One is one-time setup, Part Two is the first video,
Part Three is every day after.

---

## Part One — setup, about 40 minutes, once

### 1. Fix the channel

At <https://studio.youtube.com/channel/UCDwPVv1p9wjcV6JfiRlrefg> →
Customisation → Basic info:

- **Channel name** → `Interval at Six`
- **Handle** → `@intervalatsix`

Both are free to change today and awkward once a video has been shared. If the
channel sits on your personal Google profile rather than a Brand Account, move
it now too — a Brand Account can be transferred later, a personal one cannot.

### 2. Install the two fonts

The artwork and the cards are set in **Bebas Neue** and **Poppins**. Neither is
on this Mac, so anything exported right now falls back to a substitute. Both are
free:

- <https://fonts.google.com/specimen/Bebas+Neue>
- <https://fonts.google.com/specimen/Poppins>

Download, unzip, select the `.ttf` files, open, **Install Font**.

### 3. Upload the artwork — the PNGs are already exported

Both are done and the right size:

- `youtube/avatar-800.png` — 800×800
- `youtube/banner-2560x1440.png` — 2560×1440

**Upload them:** YouTube Studio → Customisation → Branding. Picture takes the
avatar, Banner image takes the banner. Save, top right.

The banner's readable content sits in the centre 1546×423, which is all a phone
shows, so YouTube's crop preview will look right without adjustment.

These were rendered *before* the fonts in step 2 were installed, so the type is
a close fallback rather than true Bebas Neue. Good enough to launch with. To
redo them properly after installing the fonts:

> Open the `.svg` in **Preview** → File → Export → Format **PNG** → Save.

Do not use QuickLook (spacebar preview) for the banner — it aspect-fills to a
square and crops the artwork off both sides.

### 4. Set the channel description and upload defaults

Description text is in [`youtube/CHANNEL.md`](youtube/CHANNEL.md) under *Setting
it up*, step 4. Upload defaults are step 5 in the same file.

### 5. The voiceover is already made

`audio/2026-08-09.m4a` exists. It is **Tara**, the Indian-English voice built
into macOS, at 130wpm, with the pauses between paragraphs and between cards
already baked in. Free, offline, no account.

Regenerate it any time with:

```
./scripts/make-voice.sh 2026-08-09
```

**Listen to it before you commit to it.** If Tara is not good enough, the two
upgrades are below and neither blocks edition one. Getting a first video out
matters more than the voice being right, because nobody is watching yet — which
makes now the free moment to have an imperfect one.

Whatever you use, **turn YouTube's altered-content disclosure on while the voice
is synthetic**. It is a small label, and for a channel whose whole pitch is
labelling forecasts as forecasts, labelling a synthetic voice is the consistent
thing to do. It comes back off when the voice is your own.

The rest of this section is the upgrade path. Skip it today.

### 5a. Record one minute of your voice

**What to record with.** Either is fine and both are already on the Mac:

- **QuickTime Player** → File → New Audio Recording → red button. Stop, then
  File → Save.
- **Voice Memos** → red button. Then right-click the recording → Share → Save to
  Files.

Or use a phone. A phone in a small room with soft furniture beats a good mic in
a hard-walled kitchen — the room matters more than the microphone.

**What to read.** The **first four paragraphs** of
[`scripts/2026-08-09.voice.txt`](scripts/2026-08-09.voice.txt) — from "Six
things happened in Hindi cinema today" down to "…and holds India back." About
135 words, a little under a minute at reading pace.

**How to read it.** The way you would actually present it, not the way you would
read a form aloud. The clone copies your cadence and your energy, not just the
sound of you. A flat sample gives a flat clone, and you will be stuck with it.

One continuous take. No music, no traffic, no fan. Mouth about a hand's width
from the mic. If you fluff a line, start the take again rather than editing —
one clean minute is worth more than two patched ones.

### 5b. Make the clone

**This costs money, and the free tier will not do it.** Instant Voice Cloning
needs the **Starter plan, about $5 a month**. Starter is also the tier that
carries **commercial usage rights**, which a public channel needs — so this is
not a step to economise on. Professional cloning, which sounds materially
closer to you, sits on Creator at about $22 and wants ~30 minutes of audio.

Then:

1. <https://elevenlabs.io> → sign up → take **Starter**.
2. **Voices** → Add a new voice → **Instant Voice Clone**.
3. Upload the recording from step 5.
4. Confirm the rights checkbox. It is your own voice, so this is honest — it is
   there because cloning someone else's is what the box exists to stop.
5. Name it something you will recognise in a year: `Interval at Six — host`.
6. When generating, push **similarity high** and keep **stability around the
   middle**. Too stable reads robotic; too loose drifts halfway through a
   paragraph. Choose the **highest-quality model offered, not the fastest** —
   the Flash and Turbo models trade quality for latency, and you are not doing
   anything live.

One minute is the floor. It will sound slightly flat and it will wander on the
long paragraphs — that is the tier, not your reading. Re-clone with more audio
as it accumulates, and move to Professional once you have about six editions'
worth.

*The interface changes often; the steps above may be named slightly differently
by the time you get there. The decisions are what matter, not the button names.*

---

## Part Two — the first video, about 40 minutes

### 7. Check the voiceover

`audio/2026-08-09.m4a` is ready. **Listen to it end to end once** — I generated
it but cannot hear it, so every pronunciation in it is an educated guess.

Anything mangled: fix the spelling in
[`scripts/2026-08-09.voice.txt`](scripts/2026-08-09.voice.txt), add the row to
[`scripts/PRONUNCIATION.md`](scripts/PRONUNCIATION.md), and re-run
`./scripts/make-voice.sh 2026-08-09`.

If a fix changes the length noticeably, re-measure: open
[`scripts/measure-audio.html`](scripts/measure-audio.html) in a browser and
paste the new `MARKS` and `RUNTIME` into the recording cut. Small wording
changes will not need this; cutting or adding a paragraph will.

### 8. Screen-record the deck

Open [`record/2026-08-09.html`](record/2026-08-09.html). Press **F** for
fullscreen, then **Space**.

Record with QuickTime → New Screen Recording, dragging a selection around the
9:16 frame only. It runs 4:27 unattended. Do not touch anything while it rolls.

It opens on a 3-2-1 slate ending in a **single white flash frame**. That flash
is your sync point.

### 9. Assemble

In iMovie: video track = the screen recording, audio track = `audio/2026-08-09.m4a`.

- Line the **start of the audio** up to the **white flash frame**.
- Trim the slate off the front of the finished cut.
- Export 1080×1920.

That is the whole edit. **You do not need to add pauses** — the gaps between
paragraphs and between cards are inside the audio file already, and the deck's
card timings were measured off that exact file rather than guessed. Picture and
voice should track each other the whole way down without a single manual cut.

If they drift, the audio and the deck have fallen out of step: re-measure with
[`scripts/measure-audio.html`](scripts/measure-audio.html) and paste fresh
`MARKS` into the recording cut.

If you would rather cut card by card, `audio/parts/0.m4a` … `7.m4a` are the same
voiceover split one clip per card.

### 10. Upload

Title, chapters, description and tags are all in
[`scripts/2026-08-09.md`](scripts/2026-08-09.md) under *Metadata for this
upload*, ready to paste.

The description's link to the written edition is live and checked:
<https://rpalasamudrum-cloud.github.io/interval-at-six/editions/2026-08-09.html>

---

## The website — published

Live since 9 August 2026, alongside the sibling quiz sites:

- <https://rpalasamudrum-cloud.github.io/interval-at-six/>
- <https://rpalasamudrum-cloud.github.io/interval-at-six/editions/2026-08-09.html>

Repo: <https://github.com/rpalasamudrum-cloud/interval-at-six>, public, Pages
serving `main` from the root. To publish a change: edit, run the verifier,
`git add -A && git commit && git push`. Pages redeploys within a minute or two.

Commits are authored **Guru Gyaan** with the GitHub `noreply` address, so the
real name is in neither the pages nor the history.

The account name stays `rpalasamudrum-cloud`. A `gurugyaan` namespace was
considered and dropped: renaming a GitHub account does **not** redirect its
Pages URLs, so it would have silently killed the existing smartrama and
panchamrutha links with no way to repair them afterwards.

---

## Part Three — every day after

Roughly ninety minutes end to end. Full detail in
[`youtube/CHANNEL.md`](youtube/CHANNEL.md) under *The daily loop*.

1. Read the trades — Bollywood Hungama, Koimoi, Pinkvilla, Sacnilk. Pick six
   stories, one per slot: lead, money, what releases next, the quiet one, the
   human one, the small screen.
2. **Save the URL for each before writing a word.** No URL, no card.
3. `cp template.html editions/YYYY-MM-DD.html`, fill in every `__TOKEN__`, pick
   each card's two wash colours.
4. Add the edition to `index.html` — the "Today" card and the archive row.
5. Run the verifier. It must print `PASS`:
   ```
   /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc verify.js
   ```
6. Write `scripts/YYYY-MM-DD.md`, then `scripts/YYYY-MM-DD.voice.txt` respelled
   from `scripts/PRONUNCIATION.md`.
7. Copy `record/` from the previous day, swap the card content and the `MARKS`
   array to match the new timecodes.
8. Generate the voiceover, screen-record the deck, assemble, export.
9. Upload at **6pm IST**. The name is a promise about a clock.
10. Push the repo so the written edition is live when the video is.

---

## The rules that make this worth doing

Full versions in [`STYLE.md`](STYLE.md). These are the ones to hold when it gets
tiring:

1. **No card ships without a source link.** Not "as reported" — a link.
2. **Nothing is written from memory.** If it cannot be sourced by the time the
   deck is built, it waits or it is dropped.
3. **A forecast is labelled a forecast**, and never restated later as a result.
4. **Numbers are dated.** Box-office totals move.
5. **The quiet card runs quiet.**
6. **Corrections at the top of the next edition** — on the cards, not quietly
   into a description.
7. **No photographs, and no voice but your own.**

Rules 1 to 4 exist because of a specific lesson next door: the Bollywood pack in
the `smartrama` repo was written from model knowledge, never checked, and is
still unpublished because of it.
