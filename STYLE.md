# House style

The look is a newsprint comic strip: flat ink, halftone dots, one spot colour,
hard corners. It is not a "modern app" and it is not trying to be. If something
you are about to add would look at home in a SaaS dashboard, it is wrong here.

## Not allowed

The verifier fails the build on all of these, so they are not opinions:

- **Emoji.** Anywhere.
- **Gradients.** Colour is flat or it is halftone dots. Never a fade.
- **Shadows** — box, text, drop, backdrop-filter. Depth comes from a 3px ink
  border, not from a blur.
- **Photographs.** No `<img>`. Every panel is drawn in inline SVG. This is a
  legal position as much as an aesthetic one: no likenesses, no licensed stills.
- **Unfilled `__PLACEHOLDER__` tokens.**

## Palette

| | | |
| --- | --- | --- |
| Newsprint | `#efe6d4` | page |
| Card | `#f7f1e4` | inside a panel, below the art |
| Ink | `#17130f` | every line, every border, most type |
| Vermilion | `#b3321a` | the spot colour — sound effects, one shape per panel |
| Indigo | `#28486d` | the second halftone, for cooler panels |
| Mustard | `#e6d5a5` | caption boxes and the projection tag, nothing else |

One spot colour per panel. If both vermilion and indigo are load-bearing in the
same frame, one of them is decoration and should come out.

## Type

| Role | Face | Notes |
| --- | --- | --- |
| Masthead, panel numbers, sound effects | **Anton** | Impact / Haettenschweiler fallback |
| Caption boxes, balloons, tags, footers | **Archivo Narrow** | always uppercase, letterspaced |
| Body copy, desk notes | **Spectral** | Georgia fallback |

Balloon text is uppercase because that is how comics are lettered — it does the
work that a novelty "comic" font would otherwise be asked to do, without the
cheapness. Do not reach for Comic Neue or anything like it.

Google Fonts is the only network request the page makes, and it degrades to
Impact and Georgia if the request fails. Keep it that way: no other external
dependency, no build step, one self-contained file per edition.

## Panel anatomy

```
+-----------------------------------------------+
| [caption box, mustard]                   [03] |   <- .cap and .num, absolute
|                                               |
|              drawn SVG art                    |   <- .art, viewBox 440x300
|                                               |      (lead panel: 900x300)
|   ( BALLOON, UPPERCASE )        SFX WORD      |   <- .balloon and .sfx
+-----------------------------------------------+
|  Body copy, Spectral, two short paragraphs.   |   <- .text
|                                               |
+-----------------------------------------------+
|  REPORTED · OUTLET — LINK                     |   <- .cite, pinned to the bottom
+-----------------------------------------------+
```

The lead panel takes `class="panel lead"` and spans both columns; its first
paragraph takes `class="lede"` for the drop cap.

## The six slots

The same six every day. The constraint is the format — it is what makes it a
strip rather than a feed, and it is what makes the video a fixed five minutes.

| | Slot | What goes in it |
| --- | --- | --- |
| 1 | **Lead** | the biggest story, double width, gets a full minute on video |
| 2 | **Money** | box office, acquisitions, budgets |
| 3 | **Next** | what releases, when — dates, censor, trailers |
| 4 | **Quiet** | the story that touches real events or real people |
| 5 | **Human** | a return, a debut, a career turn |
| 6 | **Small screen** | streaming, television, and the industry beyond Hindi |

If a day genuinely has nothing for a slot, take a second story into the nearest
neighbouring slot rather than padding. Six panels, always.

## Drawing the art

Flat shapes, `stroke-width` 5–7, no fills except the spot colour and the card
cream. Objects, not people. The strip is about what happened, and a bow, a
calendar page or a set of tree rings carries a story better than a caricature —
and does not put a real person's face in a drawing they did not agree to.

Halftone the background with the shared patterns, at 24–40% opacity:

```html
<rect x="0" y="0" width="440" height="300" fill="url(#dotsRed)" opacity="0.3"></rect>
```

Both patterns are defined once in a zero-size `<svg>` at the top of the page, not
inside a panel, so reordering or dropping a panel cannot take the fill out from
under the others. The verifier checks that every `url(#…)` resolves.

Art built so far, to steal from: a drawn bow and a lamp (edition 1, panel 1), a
bar chart and a torn ticket (panel 2), a calendar page with a date ringed
(panel 3), rails running to a doorway (panel 4), tree rings (panel 5), a screen
and a ranked list (panel 6).

## Editorial rules

These are the ones that matter more than any of the above.

1. **No panel ships without a source link.** Not "as reported" — a link, to the
   outlet, on the panel.
2. **Nothing is written from memory.** The stories come from the trades on the
   morning of the edition. If it cannot be sourced by the time the strip is
   drawn, it waits or it is dropped.
3. **A projection is labelled a projection.** An opening-weekend estimate is a
   forecast. It gets the mustard tag on the panel and the word "forecast" in the
   voice-over, and it is never restated later as though it were the result.
4. **Numbers are dated.** Box-office totals move. Say which day the figure is
   from, every time.
5. **The quiet panel runs quiet.** No sound effect, no punchline, no music, on
   anything that touches what happened to real people.
6. **Corrections go at the top of the next edition** — in the strip, where the
   mistake was, not silently into a description.

Rules 1 to 4 exist because of a specific and recent lesson: the Bollywood quiz
pack in the sibling `smartrama` repo was written from model knowledge, never
checked, and is still unpublished because of it. That is the failure mode this
project is built to not repeat.
