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

### 3. Export and upload the artwork

`youtube/avatar-800.png` is already exported and correct at 800×800 — but it was
rendered *before* the fonts were installed, so redo it after step 2 if you want
the real Bebas.

For the banner, and for re-exporting the avatar:

> Open the `.svg` in **Preview** → File → Export → Format **PNG** → Save.

Preview keeps the aspect ratio. Do not use QuickLook's thumbnail (spacebar
preview) — it force-crops to a square and ruins the banner.

Upload both under Customisation → Branding. Banner readable content sits in the
centre 1546×423, which is all a phone shows.

### 4. Set the channel description and upload defaults

Description text is in [`youtube/CHANNEL.md`](youtube/CHANNEL.md) under *Setting
it up*, step 4. Upload defaults are step 5 in the same file.

### 5. Record one minute of your voice

Read the **first four paragraphs** of
[`scripts/2026-08-09.voice.txt`](scripts/2026-08-09.voice.txt) — from
"Six things happened in Hindi cinema today" down to "…and holds India back."
That is about 135 words, which is a little under a minute at reading pace.

Read it the way you would actually present it. The clone copies your cadence,
not just your timbre, so a flat sample gives a flat clone.

Record in a small room with soft furnishings. Voice Memos on a phone held a
hand's width away is fine. No music, no background noise, one continuous take.

### 6. Make the clone

<https://elevenlabs.io> → Voices → **Instant Voice Clone** → upload the
recording.

One minute is the minimum. It will sound slightly flat and it will drift on long
paragraphs — that is the tier, not your reading. Re-clone with more audio as you
accumulate it, and move to **Professional** cloning once you have about thirty
minutes, which is roughly six editions' worth.

---

## Part Two — the first video, about 40 minutes

### 7. Generate the voiceover

Paste [`scripts/2026-08-09.voice.txt`](scripts/2026-08-09.voice.txt) into the
clone, whole. The stage directions are already stripped and the names are
already respelled. Generate, **listen to it end to end**, download the MP3.

Anything mispronounced: fix the spelling in the text, regenerate, and add the
row to [`scripts/PRONUNCIATION.md`](scripts/PRONUNCIATION.md).

### 8. Screen-record the deck

Open [`record/2026-08-09.html`](record/2026-08-09.html). Press **F** for
fullscreen, then **Space**.

Record with QuickTime → New Screen Recording, dragging a selection around the
9:16 frame only. It runs 5:08 unattended. Do not touch anything while it rolls.

It opens on a 3-2-1 slate ending in a **single white flash frame**. That flash
is your sync point.

### 9. Assemble

In iMovie: video track = the screen recording, audio track = the MP3.

- Line the **start of the audio** up to the **white flash frame**.
- Trim the slate off the front of the finished cut.
- **Add silence at the card transitions.** The script is 635 spoken words, 4:14
  at reading pace, inside a 5:08 picture. The missing ~54 seconds is pause time
  at the eight transitions, about seven seconds each. A person takes those
  pauses unasked; a generated read does not. Cut the audio at each transition
  and pad it, or the voice ends a minute before the deck does.
- Export 1080×1920.

### 10. Upload

Title, chapters, description and tags are all in
[`scripts/2026-08-09.md`](scripts/2026-08-09.md) under *Metadata for this
upload*, ready to paste.

**One thing to decide first:** the description links to the written edition at
`https://<your-pages-url>/editions/2026-08-09.html`, and that page is not
published anywhere yet. Either publish the site first (see below) or delete that
line before uploading. Do not upload a description with a dead link in it.

---

## The website decision

The repo is a working git repo with three commits and **no remote**. Nothing is
published. The sibling `smartrama` and `panchamrutha` sites are on GitHub Pages
under the account `rpalasamudrum-cloud`, and this would sit alongside them at
`https://rpalasamudrum-cloud.github.io/interval-at-six/`.

Blocking that: **`gh` is not on PATH in this shell**, despite the smartrama
handoff saying it was installed to `~/.local/bin`. That needs sorting before
anything can be pushed from a session.

You can also just create the repo in a browser and push manually. Either way it
is a ten-minute job, and the video description wants it done.

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
