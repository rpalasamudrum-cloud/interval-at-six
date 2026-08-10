# The channel

Everything here is ready to use except the one step I cannot do.

## What I cannot do, and you can

**I can't create the YouTube channel or the Google account behind it.** Creating
accounts and entering passwords is off-limits for me, and that is not a setting
that can be flipped. The account and the channel have to be made by you, signed
in as you. Same for uploading: the upload itself is yours to press.

Everything on either side of that — the edition, the script, the artwork, the
title, the description, the chapters, the tags — is in this repo and is done.

## Setting the channel up

1. Create the channel as a **Brand Account**, not on your personal profile.
   YouTube lets you move a Brand Account between owners later; a personal channel
   is welded to the login. Do this now and you will not have to redo it.
2. **Name:** `Comic Gyaan`. **Handle:** `@comicgyaan` if it is free.
   Check it against the handle you use elsewhere before committing — the handle
   is the one thing that is awkward to change once people have linked to it.
3. **Avatar:** export [`avatar.svg`](avatar.svg) to PNG at 800×800.
   **Banner:** export [`banner.svg`](banner.svg) to PNG at 2560×1440.
   Both are drawn in the same ink, newsprint and vermilion as the strip, so the
   channel page and the edition page read as one thing.
   The banner's readable content sits inside the 1546×423 centre box, which is
   all a phone shows.
4. **Description:** the paragraph below. It states the sourcing promise, because
   that is the actual differentiator against every other daily film-news channel.

```
Six panels a day on Hindi cinema — releases, box office, casting, the things
that actually moved. Drawn, not read off a list.

Every claim is sourced and every source is linked in the description. Forecasts
are labelled as forecasts. Corrections go at the top of the next day's edition.

New edition every day.
```

5. **Defaults** (Settings → Upload defaults) — set these once and stop retyping
   them: visibility Public, category People & Blogs, "altered content" disclosure
   **off** (the panels are original drawings, not synthetic likenesses), comments
   on with hold-for-review, licence Standard YouTube.

## The daily loop

Roughly ninety minutes end to end once the reading is done.

| | Step | Where |
| --- | --- | --- |
| 1 | Read the trades. Pick six stories, one per slot. | Bollywood Hungama, Koimoi, Pinkvilla, Sacnilk |
| 2 | Save the URL for each before writing a word. No URL, no panel. | — |
| 3 | `cp template.html editions/YYYY-MM-DD.html`, fill it in, draw the art. | [`../template.html`](../template.html) |
| 4 | Add the edition to `index.html` — latest card and archive row. | [`../index.html`](../index.html) |
| 5 | `jsc verify.js` — must pass before anything else happens. | [`../verify.js`](../verify.js) |
| 6 | Write `scripts/YYYY-MM-DD.md` off the finished edition. | [`../scripts`](../scripts) |
| 7 | Record voice to the script. Screen-record the page, or animate the panels. | — |
| 8 | Cut to the timecodes. Source super on screen for every panel. | — |
| 9 | Upload with the title, chapters, description and tags from the script file. | — |
| 10 | Push the repo so the written edition is live when the video is. | — |

## Rules that are worth keeping when it gets tiring

- **The source super is not decoration.** Outlet name on screen the whole time a
  panel is being discussed. It is what stops this from being a rumour channel.
- **A projection never gets said as a result.** On screen it gets the yellow
  PROJECTION chyron; in the voice-over it gets the word "forecast".
- **The quiet panel stays quiet.** No sting, no sound effect, no joke on stories
  about things that happened to real people. Drop the music bed entirely.
- **No photographs, ever.** Not of actors, not of posters. Everything is drawn.
  That keeps you clear of likeness and still-image licensing, and it is also the
  only reason the channel looks like anything.
- **Corrections go at the top of the next edition**, in the strip, not quietly
  edited into a description. You will need this rule the first week.

## The five-minute shape

The script template is built around it and it is worth not drifting from:

| | |
| --- | --- |
| 0:00 | Cold open — name the three best stories, no throat-clearing |
| 0:18 | Lead panel, the longest section, about a minute |
| 1:20 | Money |
| 2:15 | What releases next |
| 3:05 | The quiet one |
| 3:50 | The human one |
| 4:30 | Streaming and television, fast |
| 4:52 | Desk note and sign-off |

Cold open before any branding. A five-minute daily has no room for an intro
sequence, and the first eight seconds are the whole retention game.
