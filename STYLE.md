# House style

Loud, dark, poster-sized. Built for a phone held vertically, by someone who
already follows three film accounts and will give you ninety seconds.

An edition is a **deck of full-screen cards** you swipe through — an opening
card, six story cards, an end card. Not an article. Nothing on a card should
need a second read, and nothing should need a scroll inside the card.

## The look

| | | |
| --- | --- | --- |
| Void | `#0a0612` | the base, near-black with a violet bias |
| Cream | `#fff6e9` | all body text and most headlines |
| Hot pink | `#ff2d6f` | the brand accent — wordmark, primary button |
| Gold | `#ffc93c` | highlight inside a headline, pull quotes, warning chip |
| Lime | `#a3e635` | the sourced dot, and nothing else |

Each card sets its own two-colour wash through `--a1` and `--a2` in the inline
`style` attribute. Pick deep, saturated versions — they sit under a dark overlay
and will look muddy if you start light. A halftone dot screen sits over the
whole card and fades out toward the top.

**Type.** `Bebas Neue` for anything big — the wordmark, headlines, stat numbers,
the ghost numeral. `Poppins` for everything you actually read. Headlines are
sentence case, not shouty caps; Bebas is already shouting.

**Motion** is limited to the swipe cue and the smooth snap. No parallax, no
entrance animations. `prefers-reduced-motion` turns off what is left.

## Card anatomy

```
+---------------------------------------+
| ▓▓▓ progress rail — one segment/card  |
| INTERVAL AT SIX               9 AUG 2026  |
|                                  ┌──┐ |
|                                  │01│ |  <- .ghost, watermark numeral
|                                  └──┘ |
|                                       |
|  [ BOX OFFICE ] [ record broken ]     |  <- .chiprow
|  HEADLINE THAT DOES                   |  <- h2.head, Bebas, up to 88px
|  THE WHOLE JOB                        |
|  ┌───────────────┐                    |
|  │ ₹462 CR  week1│                    |  <- .stat, optional
|  └───────────────┘                    |
|  Two short paragraphs. Sixty words    |  <- .body
|  is plenty. Bold the film titles.     |
|                                       |
|  ( • Deccan Herald )                  |  <- .src, always last, always there
+---------------------------------------+
```

Content is bottom-aligned on a phone and centred on a desktop. The card is
`min-height:100dvh`, not `height`, so a card with a lot in it grows and scrolls
rather than clipping its own top off on a short screen.

## The six slots

Same six every day. The constraint is the format — it is what makes it a deck
rather than a feed, and what keeps the video at a fixed five minutes.

| | Slot | What goes in it | Card |
| --- | --- | --- | --- |
| 1 | **Lead** | the biggest story of the day | full wash, stat, a minute on video |
| 2 | **Money** | box office, acquisitions, budgets | stat block, figure always dated |
| 3 | **Next** | what releases, when — dates, censor, trailers | warn chip if you quote a forecast |
| 4 | **Quiet** | the story that touches real events or real people | no wash, no numeral, no stat |
| 5 | **Human** | a return, a debut, a career turn | pull quote |
| 6 | **Small screen** | streaming, TV, the industry beyond Hindi | stat block |

If a day has nothing for a slot, take a second story into the nearest
neighbouring slot rather than padding. Six cards, always.

## The quiet card

Card four drops the colour wash, the ghost numeral, the stat block and the gold.
Near-black, one ghosted chip, plain type.

It exists so the deck can carry a story about something that happened to people
without the design making a party of it. The rule is not "be tasteful when it
feels right" — it is a slot, it is in the template, and the verifier fails an
edition that does not have exactly one.

## Hard rules

The verifier fails the build on these, so they are not opinions:

- **No `<img>`. Ever.** No stills, no posters, no paparazzi shots, nobody's
  likeness. This is a legal position, not a taste one. Every visual is type,
  colour and CSS. The same rule applies to the video's audio — never a cloned or
  synthesised voice belonging to anyone but you. Your own, cloned from your own
  recordings, is fine and is the plan; see `youtube/CHANNEL.md`. Quoting someone
  else's **words**, with attribution and a source link, is the thing that is
  allowed.
- **No emoji.** The chips and badges do that job and do it without looking
  cheap.
- **Every story card carries a `.src` link** to the outlet that reported it.
- **A hedged number wears the warning chip.** If the card says forecast,
  projection, projected or estimate anywhere, `class="chip warn"` has to be on
  it.
- **Exactly one quiet card, exactly six story cards, one open, one end.**
- **No unfilled `__TOKEN__`.**

Gradients, shadows and blurs are all fine here and used deliberately. That is a
change from the sibling `smartrama` quiz repo, where they are banned — different
project, different audience, different brief.

## Editorial rules

These matter more than any of the above.

1. **No card ships without a source link.** Not "as reported" — a link.
2. **Nothing is written from memory.** Stories come from the trades on the
   morning of the edition. If it cannot be sourced by the time the deck is
   built, it waits or it is dropped.
3. **A forecast is labelled a forecast**, on the card, and is never restated
   later as though it were the result.
4. **Numbers are dated.** Box-office totals move. Say which day the figure is
   from, every time.
5. **The quiet card runs quiet.**
6. **Corrections go at the top of the next edition** — on the cards, where the
   mistake was, not silently into a video description.

Rules 1 to 4 exist because of a specific lesson: the Bollywood quiz pack in the
sibling `smartrama` repo was written from model knowledge, never checked, and is
still unpublished because of it. That is the failure mode this project is built
not to repeat.

## Writing for the cards

- **Headline does the whole job.** If the reader swipes past after the headline
  they should still have got the news.
- **Sixty words of body, in two paragraphs.** More than that and it is an
  article wearing a card.
- **Bold the film titles, nothing else.**
- **Second paragraph is the "so what".** The first says what happened; the
  second says why it is interesting, or what the catch is.
- **No hype adjectives.** "Biggest", "shocking", "breaks the internet" — the
  stat block is already doing the shouting, and this is the difference between
  the deck and every other Bollywood account.
