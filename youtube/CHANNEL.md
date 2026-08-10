# The channel

**The channel:** <https://youtube.com/@setty-balgatti> — rename the handle to `@intervalatsix`, see below.
Studio dashboard: `studio.youtube.com/channel/UCDwPVv1p9wjcV6JfiRlrefg` — that
one only opens while you are signed in.

## What is left for you, and why

**I can't press upload.** Publishing to a public channel, and signing into the
account behind it, are both yours. Everything on either side of that — the
edition, the recording cut, the script, the artwork, the title, description,
chapters and tags — is in this repo and is done.

Once an `.mp4` exists I can drive Studio in your signed-in Chrome and fill the
whole upload form out from the script file. I will stop on the review screen and
show you what is about to go live before anything is published.

## Naming

The show is **Interval at Six**. The interval is the half-time break in an Indian
cinema; the six is both six stories and six o'clock. Nothing else is using the
name — it was checked before it was chosen.

Two things to change on the channel, and now is when they are free:

1. **Channel name** → `Interval at Six`. This is the one that matters — it is
   what shows on the video, the search result and the subscription list.
2. **Handle** → `@intervalatsix`, replacing `@setty-balgatti`. YouTube allows a
   handle change and the cost today is zero, because nothing links to the old
   one yet. That stops being true the moment the first video is shared.

### The six is a promise about a clock

Put a number in the name and people hold you to it. **Publish at 6pm IST**, say
so in the channel description, and hold it — a daily lives on the habit more
than on any single video.

If a day runs late, the name still survives, because *six* is also the six
stories, and that half is locked into the format and enforced by the verifier.
That ambiguity is deliberate. Do not lean on it twice a week.

## Setting it up

1. If the channel is on your personal profile rather than a **Brand Account**,
   move it now. YouTube lets you transfer a Brand Account between owners later;
   a personal channel is welded to the login.
2. **Channel name:** `Interval at Six`, per the section above.
3. **Avatar:** export [`avatar.svg`](avatar.svg) to PNG at 800×800.
   **Banner:** export [`banner.svg`](banner.svg) to PNG at 2560×1440.
   Both use the deck's own palette — void black, hot pink, gold, halftone — and
   the banner carries the progress rail across the top, so the channel page and
   the cards read as one thing. The banner's readable content sits inside the
   1546×423 centre box, which is all a phone shows.
4. **Description:** the paragraph below. It states the sourcing promise, because
   that is the actual differentiator against every other daily film-news channel.

```
Six things that actually happened in Hindi cinema — releases, box office,
casting, streaming. Ninety seconds to read, five minutes to watch.

New edition every day at 6pm IST.

Every claim is sourced and every source is linked in the description. Forecasts
are labelled as forecasts, not reported as results. Corrections go at the top of
the next day's edition.
```

5. **Defaults** (Settings → Upload defaults) — set these once and stop retyping
   them: visibility Public, category People & Blogs, "altered content" disclosure
   **off** (the cards are original type and colour, no synthetic likenesses),
   comments on with hold-for-review, licence Standard YouTube.

## Recording the video

There is a purpose-built cut for this: [`../record/2026-08-09.html`](../record/2026-08-09.html).
It is the same edition rendered on a fixed **1080×1920** canvas that plays itself
for 5:08, advancing on the script's timecodes, with the push-ins and punch-ins
already programmed. You record it in one pass instead of swiping by hand and
hoping the timing lands.

1. Open it, press **F** for fullscreen, then **Space** to roll. `1`–`8` parks on
   a single card if you want to check a frame first. `R` restarts.
2. It runs a **3-2-1 slate and then a single white flash frame**. That flash is
   your sync point — line the voice-over up to it in the edit and every card
   lands where the script says it does.
3. Record with **QuickTime → New Screen Recording**, dragging a selection around
   the 9:16 frame only. The instruction bar at the bottom of the page hides the
   moment you roll, so it is never in shot.
4. Record the voice-over separately, reading the script at a steady 150wpm.
   Drop both into iMovie, snap the audio to the flash, trim the slate off the
   front, export 1080×1920.

Make a fresh `record/YYYY-MM-DD.html` per edition — copy the last one and swap
the card content and the `MARKS` array to match the new script.

## The daily loop

Roughly ninety minutes end to end once the reading is done.

| | Step | Where |
| --- | --- | --- |
| 1 | Read the trades. Pick six stories, one per slot. | Bollywood Hungama, Koimoi, Pinkvilla, Sacnilk |
| 2 | Save the URL for each before writing a word. No URL, no card. | — |
| 3 | `cp template.html editions/YYYY-MM-DD.html`, fill it in, pick the washes. | [`../template.html`](../template.html) |
| 4 | Add the edition to `index.html` — latest card and archive row. | [`../index.html`](../index.html) |
| 5 | `jsc verify.js` — must pass before anything else happens. | [`../verify.js`](../verify.js) |
| 6 | Write `scripts/YYYY-MM-DD.md` off the finished edition. | [`../scripts`](../scripts) |
| 7 | Record voice to the script, and screen-record the recording cut. | [`../record`](../record) |
| 8 | Cut to the timecodes. Source super on screen for every card. | — |
| 9 | Upload with the title, chapters, description and tags from the script file. | — |
| 10 | Push the repo so the written edition is live when the video is. | — |

## Rules that are worth keeping when it gets tiring

- **The source super is not decoration.** Outlet name on screen the whole time a
  card is being discussed. It is what stops this from being a rumour channel.
- **A projection never gets said as a result.** On screen it gets the gold
  PROJECTION chip; in the voice-over it gets the word "forecast".
- **The quiet card stays quiet.** No sting, no push-in, no joke on stories about
  things that happened to real people. Drop the music bed entirely.
- **No photographs, ever.** Not of actors, not of posters. Everything is type
  and colour. That keeps you clear of likeness and still-image licensing, and it
  is also what makes the channel look like one thing rather than a reupload.
- **Corrections go at the top of the next edition**, on the cards, not quietly
  edited into a description. You will need this rule the first week.

## The five-minute shape

The script template is built around it and it is worth not drifting from:

| | |
| --- | --- |
| 0:00 | Cold open — name the three best stories, no throat-clearing |
| 0:18 | Lead card, the longest section, about a minute |
| 1:20 | Money |
| 2:15 | What releases next |
| 3:05 | The quiet one |
| 3:50 | The human one |
| 4:30 | Streaming and television, fast |
| 4:52 | Desk note and sign-off |

Cold open before any branding. A five-minute daily has no room for an intro
sequence, and the first eight seconds are the whole retention game.
