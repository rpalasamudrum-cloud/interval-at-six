# Comic Gyaan

A daily comic-strip edition of the day's Hindi film news, and the five-minute
video script that goes with it.

Six panels a day — releases, box office, casting, streaming — drawn rather than
listed. **Every panel carries a link to the outlet that reported it**, and
anything that is a forecast rather than a fact is labelled a projection on the
panel itself.

Each edition is one self-contained HTML file. No build step, no dependencies, no
server, no framework. Open it in a browser and it works, online or off. The only
network request is a Google Fonts stylesheet, which degrades to Impact and
Georgia if it fails.

## What is here

| Path | What it is |
| --- | --- |
| `index.html` | the front page: latest edition, archive, and the sourcing promise |
| `editions/YYYY-MM-DD.html` | one edition, self-contained |
| `template.html` | the shell to copy for a new edition, with `__TOKENS__` to fill |
| `scripts/YYYY-MM-DD.md` | the five-minute video script, with timecodes and metadata |
| `youtube/CHANNEL.md` | channel setup, upload defaults, the daily loop |
| `youtube/avatar.svg`, `youtube/banner.svg` | channel artwork masters, export to PNG |
| `STYLE.md` | the house style and the editorial rules |
| `verify.js` | the verifier — run it before every push |

`index.html` is the manifest. The verifier only checks editions that are linked
from it, which is how you find out you forgot to link one.

## Making tomorrow's edition

```bash
cp template.html editions/2026-08-10.html
```

Fill in every `__TOKEN__`, draw the six panels, add the edition to `index.html`
in two places — the "Latest" card and the archive list — then:

```bash
/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc verify.js
```

It must print `PASS` before anything gets pushed or recorded.

Then write `scripts/2026-08-10.md` from the finished edition. The verifier fails
an edition that has no script, on the grounds that a written edition without its
video is a half-finished day.

## What the verifier checks

House style — no emoji, no gradient, no shadow, no `<img>`, no unfilled
placeholder tokens. Structure — six panels, each with a caption box, a panel
number, and a source line carrying a real `https` link. The quiet panel has no
sound effect. Anything mentioning a projection carries the projection tag. Every
`url(#…)` fill resolves to a definition that exists. Every edition linked from
the index exists, links back to the index, and has a script file that points at
it.

This machine has no `node` and no Homebrew, so the verifier is written for
macOS's built-in JavaScriptCore. See the sibling `smartrama` repo for the same
arrangement.

## The video

`scripts/YYYY-MM-DD.md` is the whole upload: voice-over with timecodes, on-screen
cues, the shorts cut-down, and the title, thumbnail text, chapters, description
and tags ready to paste.

The channel itself has to be created and the videos uploaded by you — that part
is not something I can do on your behalf. Setup notes are in
[`youtube/CHANNEL.md`](youtube/CHANNEL.md).

## Editorial rules

The short version, in full in [`STYLE.md`](STYLE.md):

1. No panel ships without a source link.
2. Nothing is written from memory.
3. A projection is labelled a projection, and never restated as a result.
4. Numbers are dated, because box-office totals move.
5. The quiet panel runs quiet — no sound effect on stories about what happened
   to real people.
6. Corrections go at the top of the next edition, in the strip.

## Licence

All rights reserved — see [`LICENSE`](LICENSE). The news itself belongs to the
outlets that reported it, which is why every panel links to them.
